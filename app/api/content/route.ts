import { isAdmin } from "../../lib/admin-auth";
import { addArticle, addGalleryPhoto, readContent } from "../../lib/content-store";

export async function GET() {
  const content = await readContent();
  return Response.json({ ...content, articles: content.articles.filter((article) => article.status !== "draft") });
}

export async function POST(request: Request) {
  if (!(await isAdmin())) return Response.json({ message: "Non autorisé." }, { status: 401 });
  const payload = await request.json() as Record<string, string>;
  if (!payload.type || !payload.category || !payload.title || !payload.image || !payload.summary) {
    return Response.json({ message: "Tous les champs sont requis." }, { status: 400 });
  }
  if (payload.type === "article") return Response.json(await addArticle({ category: payload.category, title: payload.title, date: payload.date || new Date().toLocaleDateString("fr-FR"), image: payload.image, summary: payload.summary, slug: payload.slug, content: payload.content, coverImage: payload.coverImage, author: payload.author, publishedAt: payload.publishedAt, updatedAt: payload.updatedAt, tags: payload.tags ? payload.tags.split(",").map((tag) => tag.trim()).filter(Boolean) : undefined, featured: payload.featured === "true" }));
  if (payload.type === "photo") return Response.json(await addGalleryPhoto({ category: payload.category, title: payload.title, src: payload.image }));
  return Response.json({ message: "Type de contenu invalide." }, { status: 400 });
}
