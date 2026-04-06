import Fuse, { type FuseResult } from 'fuse.js';

export type SearchItem = {
  title: string;
  href: string;
  section: string;
  content: string;
};

export type SearchResult = FuseResult<SearchItem>;

let fuseInstance: Fuse<SearchItem> | null = null;

export function initSearch(items: SearchItem[]): Fuse<SearchItem> {
  fuseInstance = new Fuse(items, {
    keys: [
      { name: 'title', weight: 0.5 },
      { name: 'section', weight: 0.2 },
      { name: 'content', weight: 0.3 },
    ],
    threshold: 0.3,
    includeMatches: true,
    minMatchCharLength: 2,
  });
  return fuseInstance;
}

export function search(query: string, items: SearchItem[]): SearchResult[] {
  if (!query.trim()) return [];
  const fuse = fuseInstance || initSearch(items);
  return fuse.search(query, { limit: 8 });
}
