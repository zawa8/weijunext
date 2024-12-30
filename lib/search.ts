import { sectionIndex } from "@/lib/loadIndex";
import { SearchResult } from "@/types/search";
import { SimpleDocumentSearchResultSetUnit } from "flexsearch";
export const doSearch = async (value: string): Promise<SearchResult[]> => {
  if (!value) { return []; }
  const results: SimpleDocumentSearchResultSetUnit[] = await sectionIndex.search(value, { enrich: true, suggest: true });
  const transformedResults: SearchResult[] = transformResults(results);
  return transformedResults;
}
export const transformResults = (data: SimpleDocumentSearchResultSetUnit[]) => {
  if (!data) { return []; }
  const mergedResults: any = data.flatMap((item) => item.result);
  const sortedResults = mergedResults.sort((a: SearchResult, b: SearchResult) => a.id.localeCompare(b.id));
  return sortedResults;
};
export const stripMarkdown = (text: string) => {
  return text.replace(/!\[.*?\]\(.*?\)/g, "").replace(/\[.*?\]\(.*?\)/g, "").replace(/`{1,3}.*?`{1,3}/g, "")
    .replace(/#{1,6} /g, "").replace(/[*_~]+.*?[*_~]+/g, "").replace(/>\s.*/g, "").replace(/-{3,}/g, "").replace(/\n+/g, " ");
}
