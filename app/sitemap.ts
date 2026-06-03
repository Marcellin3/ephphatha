import type { MetadataRoute } from "next";

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

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ephphatha.org";

  return sections.map((section) => ({
    url: `${baseUrl}/${section}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: section === "" ? 1 : 0.8,
  }));
}
