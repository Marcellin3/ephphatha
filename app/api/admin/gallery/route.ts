import { addGalleryPhoto, deleteGalleryPhoto, readContent } from "../../../lib/content-store";
import { isAdmin } from "../../../lib/admin-auth";

export async function GET() {
  if (!(await isAdmin())) return Response.json({ message: "Non autorisé." }, { status: 401 });
  return Response.json((await readContent()).photos);
}

export async function POST(request: Request) {
  if (!(await isAdmin())) return Response.json({ message: "Non autorisé." }, { status: 401 });
  const { title, category, src } = await request.json() as { title?: string; category?: string; src?: string };
  if (!title?.trim() || !category?.trim() || !src?.startsWith("/uploads/")) return Response.json({ message: "Le titre, la catégorie et l’image sont requis." }, { status: 400 });
  return Response.json(await addGalleryPhoto({ title: title.trim(), category: category.trim(), src }), { status: 201 });
}

export async function DELETE(request: Request) {
  if (!(await isAdmin())) return Response.json({ message: "Non autorisé." }, { status: 401 });
  const { id } = await request.json() as { id?: string };
  return (id && await deleteGalleryPhoto(id)) ? Response.json({ ok: true }) : Response.json({ message: "Photo introuvable." }, { status: 404 });
}
