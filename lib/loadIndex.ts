import { stripMarkdown } from "@/lib/search";
import { WeeklyPost } from "@/types/weekly";
import FlexSearch from 'flexsearch';

export const pageIndex = new FlexSearch.Document({ tokenize: "full", cache: 100,
  document: { id: "id", index: "content", store: ["title", "content"], },
  context: { resolution: 9, depth: 2, bidirectional: true, },
});
export const sectionIndex = new FlexSearch.Document({ cache: 100, tokenize: "full",
  document: { id: "id", index: "content", pageId: "pageId", store: ["title", "content", "display"], },
  context: { resolution: 9, depth: 2, bidirectional: true, },
});

let pageId = 0;
export const createIndex = async ({ documents }: { documents: WeeklyPost[] }) => {
  let pageContent = "";
  ++pageId;

  for (let i = 0; i < documents.length; i++) {
    const doc = documents[i];
    const slug = doc.slug;
    const title = doc.title;
    const content = doc.content;
    const paragraphs = doc.content.split("\n");
    sectionIndex.add({
      id: slug,
      title,
      pageId: `page_${pageId}`,
      content: title,
      ...(paragraphs[0] && { display: paragraphs[0] }),
    });
    for (let j = 0; j < paragraphs.length; j++) {
      if (paragraphs[j]) {
		sectionIndex.add({ id: `${slug}_${j}`, title, pageId: `page_${pageId}`, content: stripMarkdown(paragraphs[j]), });
      }
    }
    pageContent += `${title} ${content}`;
	pageIndex.add({ id: pageId, title: doc.title, content: stripMarkdown(pageContent), });
  }
};
