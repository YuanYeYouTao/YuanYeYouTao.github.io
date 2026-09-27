import { getCollection, type CollectionEntry } from 'astro:content';

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getTags(posts: CollectionEntry<'blog'>[]) {
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'zh-Hant'));
}

export const tagHref = (tag: string) => `/tags/${encodeURIComponent(tag)}/`;

// 中文約每分鐘 400 字、英文約 220 詞；程式碼區塊不計入。
export function readingMinutes(body = '') {
  const text = body.replace(/```[\s\S]*?```/g, '');
  const cjk = text.match(/[㐀-鿿豈-﫿]/g)?.length ?? 0;
  const words = text.replace(/[㐀-鿿豈-﫿]/g, ' ').match(/[A-Za-z0-9]+/g)?.length ?? 0;
  return Math.max(1, Math.round(cjk / 400 + words / 220));
}
