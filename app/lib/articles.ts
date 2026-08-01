import "server-only";

import { news, photos } from "../site-data";
import { readContent, type Article } from "./content-store";

export type NewsArticle = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  coverImage: string;
  galleryImages: string[];
  author: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  featured: boolean;
  contentFormat: "html" | "markdown";
};

const defaultContent = "Cette actualité revient sur les actions menées par le Centre Ephphatha pour Sourds de Goma, aux côtés des personnes sourdes, de leurs familles et de la communauté.\n\nNotre équipe poursuit son engagement pour une éducation adaptée, un accès effectif aux soins et une inclusion durable.";

const frenchMonths: Record<string, string> = {
  janvier: "01", fevrier: "02", février: "02", mars: "03", avril: "04", mai: "05", juin: "06",
  juillet: "07", aout: "08", août: "08", septembre: "09", octobre: "10", novembre: "11", decembre: "12", décembre: "12",
};

function normalizeDate(value: string) {
  if (!Number.isNaN(new Date(value).getTime())) return value;
  const match = value.trim().toLowerCase().match(/^(\d{1,2})\s+([a-zéû]+)\s+(\d{4})$/u);
  if (!match || !frenchMonths[match[2]]) return "2026-01-01";
  return `${match[3]}-${frenchMonths[match[2]]}-${match[1].padStart(2, "0")}`;
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function validImage(src?: string) {
  return src && (src.startsWith("/") || src.startsWith("https://lh3.googleusercontent.com/"))
    ? src
    : photos.communityWoman;
}

function toArticle(item: Article | (typeof news)[number], index: number): NewsArticle {
  const legacy = item as Article;
  const title = item.title;
  const publishedAt = normalizeDate(legacy.publishedAt ?? legacy.date ?? "2026-01-01");

  return {
    id: legacy.id ?? `article-${index}-${slugify(title)}`,
    title,
    slug: legacy.slug || slugify(title),
    summary: item.summary,
    content: legacy.content || defaultContent,
    coverImage: validImage(legacy.coverImage ?? legacy.image),
    galleryImages: legacy.galleryImages ?? [],
    author: legacy.author || "Équipe CISG ASBL",
    category: item.category,
    publishedAt,
    updatedAt: legacy.updatedAt ? normalizeDate(legacy.updatedAt) : undefined,
    tags: legacy.tags ?? [item.category, "CISG ASBL"],
    featured: legacy.featured ?? index === 0,
    contentFormat: legacy.contentFormat ?? "markdown",
  };
}

export async function getArticles() {
  const content = await readContent();
  const combined = [...content.articles.filter((article) => article.status !== "draft"), ...news].map(toArticle);
  const unique = Array.from(new Map(combined.map((article) => [article.slug, article])).values());

  return unique.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export async function getArticle(slug: string) {
  return (await getArticles()).find((article) => article.slug === slug);
}

export function formatArticleDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" }).format(date);
}

export function readingTime(content: string) {
  return Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200));
}
