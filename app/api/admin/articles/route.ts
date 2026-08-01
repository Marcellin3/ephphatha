import { addArticle, deleteArticle, readContent, type Article, updateArticle } from "../../../lib/content-store";
import { isAdmin } from "../../../lib/admin-auth";

function asArticle(payload: Partial<Article>): Omit<Article, "id"> | null {
  if (!payload.title?.trim() || !payload.summary?.trim() || !payload.category?.trim()) return null;
  return {
    title: payload.title.trim(), slug: payload.slug?.trim(), summary: payload.summary.trim(), content: payload.content || "",
    coverImage: payload.coverImage || payload.image || "", image: payload.coverImage || payload.image || "",
    galleryImages: Array.isArray(payload.galleryImages) ? payload.galleryImages : [], author: payload.author?.trim() || "Équipe CISG ASBL",
    category: payload.category.trim(), publishedAt: payload.publishedAt || new Date().toISOString(), updatedAt: new Date().toISOString(),
    tags: Array.isArray(payload.tags) ? payload.tags.filter(Boolean) : [], featured: Boolean(payload.featured),
    status: payload.status === "draft" ? "draft" : "published", contentFormat: payload.contentFormat === "markdown" ? "markdown" : "html",
  };
}

export async function GET() {
  if (!(await isAdmin())) return Response.json({ message: "Non autorisé." }, { status: 401 });
  return Response.json((await readContent()).articles);
}

export async function POST(request: Request) {
  if (!(await isAdmin())) return Response.json({ message: "Non autorisé." }, { status: 401 });
  const article = asArticle(await request.json());
  if (!article) return Response.json({ message: "Le titre, le résumé et la catégorie sont requis." }, { status: 400 });
  return Response.json(await addArticle(article), { status: 201 });
}

export async function PUT(request: Request) {
  if (!(await isAdmin())) return Response.json({ message: "Non autorisé." }, { status: 401 });
  const payload = await request.json() as Partial<Article>;
  if (!payload.id) return Response.json({ message: "Article introuvable." }, { status: 400 });
  const article = asArticle(payload);
  if (!article) return Response.json({ message: "Le titre, le résumé et la catégorie sont requis." }, { status: 400 });
  const saved = await updateArticle(payload.id, article);
  return saved ? Response.json(saved) : Response.json({ message: "Article introuvable." }, { status: 404 });
}

export async function DELETE(request: Request) {
  if (!(await isAdmin())) return Response.json({ message: "Non autorisé." }, { status: 401 });
  const { id } = await request.json() as { id?: string };
  return (id && await deleteArticle(id)) ? Response.json({ ok: true }) : Response.json({ message: "Article introuvable." }, { status: 404 });
}
