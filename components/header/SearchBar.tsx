"use client";
import { Input } from "@/components/ui/input";
import { createIndex } from "@/lib/loadIndex";
import { doSearch } from "@/lib/search";
import { cn } from "@/lib/utils";
import { SearchResult } from "@/types/search";
import { WeeklyPost } from "@/types/weekly";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useCallback, useState } from "react";
import { HighlightMatches } from "./HighlightMatches";

const SearchBar = ({ posts }: { posts: WeeklyPost[] }) => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  createIndex({ documents: posts });
  const handleChange = useCallback(
    async (value: string) => {
      setQuery(value);
      if (loading) { return; }
      setLoading(true);
      try { handleSearch(value); } catch (e) { setError(true); }
      setLoading(false);
    },
    [loading]
  );
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => { const { value } = e.target; handleChange(value); setShow(Boolean(value)); };  
  const handleSearch = async (value: string) => { const searchResults: SearchResult[] = await doSearch(value); setResults(searchResults); };
  const finishSearch = useCallback(() => { handleChange(""); setShow(false); }, [handleChange]);

  return (
    <>
	  <Input value={query} onChange={onChangeSearch} onFocus={() => { setShow(true); }} onBlur={() => { setShow(false); }} 
		placeholder="Search……" className="border-gray-600 focus:border-0 rounded-full" />

      <Transition
        show={show}
        // Transition.Child is required here, otherwise popup will be still present in DOM after focus out
        as={Transition.Child}
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ul
          className={cn(
            "scrollbar",
            "rounded-md border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800",
            "p-4 border border-gray-600 bg-gray-900",
            "absolute top-full right-0 z-20 mt-2 overflow-auto overscroll-contain rounded-xl py-2.5 shadow-xl",
            "min-h-[100px] max-h-[400px]",
            "w-[90vw] sm:w-[400px]"
          )}
          style={{ transition: "max-height .2s ease", }}
        >
          {error ? (
            <span className="block select-none p-8 text-center text-sm text-gray-400">
              {error}
            </span>
          ) : results && results.length > 0 ? (
            results.map((result, index) => (
			  <Link key={`${result.id}_${index}`} href={`/weekly/${result.id.split("_")[0]}`} onClick={finishSearch} >
                <li
                  className={cn(
                    "break-words rounded-md cursor-default select-none",
                    "contrast-more:border",
                    "text-gray-800 contrast-more:border-transparent dark:text-gray-300",
                    "hover:bg-primary-500/10 hover:text-primary-600 contrast-more:hover:border-primary-500",
                    "block scroll-m-12 px-2.5 py-2"
                  )}
                >
                  <div className="text-base font-semibold leading-5">
                    <HighlightMatches match={query} value={result.doc.title} />
                  </div>
                  <div className="excerpt mt-1 text-sm leading-[1.35rem] text-gray-600 dark:text-gray-400 contrast-more:dark:text-gray-50">
                    <HighlightMatches
                      match={query}
                      value={result.doc.content}
                    />
                  </div>
                </li>
              </Link>
            ))
          ) : (
			<span className="block select-none p-8 text-center text-sm text-gray-400"> no results found. </span>
          )}
        </ul>
      </Transition>
    </>
  );
};

export default SearchBar;
