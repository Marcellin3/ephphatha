import { clearAdminSession, createAdminSession, credentialsMatch, isAdmin } from "../../../lib/admin-auth";

export async function GET() { return Response.json({ authenticated: await isAdmin() }); }

export async function POST(request: Request) {
  const { email, password } = (await request.json()) as { email?: string; password?: string };
  if (!email || !password || !credentialsMatch(email, password)) {
    return Response.json({ message: "Identifiants incorrects." }, { status: 401 });
  }
  await createAdminSession();
  return Response.json({ ok: true });
}

export async function DELETE() { await clearAdminSession(); return Response.json({ ok: true }); }
