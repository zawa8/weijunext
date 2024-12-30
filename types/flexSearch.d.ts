import { SearchResult } from "@/types/search";

declare module "flexsearch" {
  interface DocumentOptions { pageId?: string; }
  interface SimpleDocumentSearchResultSetUnit { field: string; result: SearchResult[] }
}
