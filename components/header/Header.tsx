"use client";
import DocSearch from "@/components/DocSearch";
import { docSearchConfig } from "@/components/DocSearch/docSearch";
import HeaderLinks from "@/components/header/HeaderLinks";
import Fpicker2ts from "@/components/hsciifp/Fpicker2ts";
import { siteConfig } from "@/config/site";
import { WeeklyPost } from "@/types/weekly";
import Image from "next/image";
import Link from "next/link";

const Header = ({ posts }: { posts: WeeklyPost[] }) => {
  return (
    <header className="mx-auto max-w-5xl px-4 py-3 border-b border-gray-600 sticky top-0 bg-background z-50">
      <nav className="relative z-50 flex justify-between">
        <div className="flex items-center md:gap-x-12">
          <Link href="/" className="flex items-center space-x-1 font-bold">
            <Image alt={siteConfig.name} src="/logo.svg" className="w-8 h-8" width={24} height={24} />
            <span className="text-gray-100 hidden sm:block">smacar_pTrika</span>
          </Link>
          <div className="hidden md:flex md:gap-x-6"></div>
        </div>
        <div className="flex items-center">
          <HeaderLinks />
          {/* <SearchBar posts={posts} /> */}
          {docSearchConfig.docSearch.appId ? <DocSearch /> : <></>}
          {/* <ThemedButton /> */}
          <Fpicker2ts />
        </div>

      </nav>
    </header>
  );
};

export default Header;
