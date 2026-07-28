import "server-only";

import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

export type Article = {
  id: string;
  title: string;
  slug?: string;
  summary: string;
  content?: string;
  coverImage?: string;
  galleryImages?: string[];
  author?: string;
  category: string;
  publishedAt?: string;
  updatedAt?: string;
  tags?: string[];
  featured?: boolean;
  status?: "draft" | "published";
  contentFormat?: "html" | "markdown";
  /** Champs conservés pour les contenus créés avec l'ancien formulaire. */
  date?: string;
  image?: string;
};
export type GalleryPhoto = { id: string; category: string; title: string; src: string };
type Content = { articles: Article[]; photos: GalleryPhoto[] };

const contentPath = path.join(process.cwd(), "data", "content.json");
const emptyContent: Content = { articles: [], photos: [] };

export async function readContent(): Promise<Content> {
  try { return JSON.parse(await readFile(contentPath, "utf8")) as Content; } catch { return emptyContent; }
}

async function writeContent(content: Content) {
  await mkdir(path.dirname(contentPath), { recursive: true });
  await writeFile(contentPath, JSON.stringify(content, null, 2), "utf8");
}

export async function addArticle(article: Omit<Article, "id">) {
  const content = await readContent();
  const saved = { ...article, id: crypto.randomUUID() };
  content.articles.unshift(saved);
  await writeContent(content);
  return saved;
}

export async function updateArticle(id: string, article: Omit<Article, "id">) {
  const content = await readContent();
  const index = content.articles.findIndex((item) => item.id === id);
  if (index === -1) return null;
  const saved = { ...article, id };
  content.articles[index] = saved;
  await writeContent(content);
  return saved;
}

export async function deleteArticle(id: string) {
  const content = await readContent();
  const initialLength = content.articles.length;
  content.articles = content.articles.filter((article) => article.id !== id);
  if (content.articles.length === initialLength) return false;
  await writeContent(content);
  return true;
}

export async function addGalleryPhoto(photo: Omit<GalleryPhoto, "id">) {
  const content = await readContent();
  const saved = { ...photo, id: crypto.randomUUID() };
  content.photos.unshift(saved);
  await writeContent(content);
  return saved;
}
