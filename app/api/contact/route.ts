type ContactPayload = {
  nom?: string;
  telephone?: string;
  email?: string;
  sujet?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const required = ["nom", "telephone", "email", "sujet", "message"] as const;
  const missing = required.filter((field) => !payload[field]);

  if (missing.length > 0) {
    return Response.json({ ok: false, missing }, { status: 400 });
  }

  return Response.json({
    ok: true,
    message: "Votre demande de contact a ete recue.",
  });
}
