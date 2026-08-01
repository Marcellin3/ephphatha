import type { MetadataRoute } from "next";
import { getArticles } from "./lib/articles";

const sections = [
  "",
  "#apropos",
  "#programmes",
  "#impact",
  "#actualites",
  "#galerie",
  "#partenaires",
  "#don",
  "#contact",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://ephphatha.com";

  const sectionEntries = sections.map((section) => ({
    url: `${baseUrl}/${section}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: section === "" ? 1 : 0.8,
  }));
  const articleEntries = (await getArticles()).map((article) => ({ url: `${baseUrl}/actualites/${article.slug}`, lastModified: article.updatedAt || article.publishedAt, changeFrequency: "monthly" as const, priority: 0.7 }));
  return [...sectionEntries, ...articleEntries];
}
