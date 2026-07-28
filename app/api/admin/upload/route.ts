import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { isAdmin } from "../../../lib/admin-auth";

const acceptedTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
const MAX_FILE_SIZE = 15 * 1024 * 1024;

export async function POST(request: Request) {
  if (!(await isAdmin())) return Response.json({ message: "Non autorisé." }, { status: 401 });
  const file = (await request.formData()).get("file");
  if (!file || typeof file === "string" || !acceptedTypes.has(file.type) || file.size > MAX_FILE_SIZE) {
    return Response.json({ message: "Choisissez une image JPG, PNG ou WebP de 15 Mo maximum." }, { status: 400 });
  }
  try {
    const extension = file.type.split("/")[1];
    const filename = `${crypto.randomUUID()}.${extension}`;
    const folder = path.join(process.cwd(), "public", "uploads");
    await mkdir(folder, { recursive: true });
    await writeFile(path.join(folder, filename), Buffer.from(await file.arrayBuffer()));
    return Response.json({ url: `/uploads/${filename}` });
  } catch (error) {
    console.error("Échec du téléversement", error);
    return Response.json({ message: "Le serveur n’a pas pu enregistrer cette image. Réessayez après avoir redémarré l’application." }, { status: 500 });
  }
}
