type DonationPayload = {
  amount?: number;
  frequency?: "unique" | "mensuel";
  method?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as DonationPayload;

  if (!payload.amount || payload.amount <= 0 || !payload.frequency || !payload.method) {
    return Response.json(
      {
        ok: false,
        message: "Montant, frequence et methode de paiement sont requis.",
      },
      { status: 400 },
    );
  }

  return Response.json({
    ok: true,
    reference: `CISG-${Date.now()}`,
    message: "Promesse de don enregistree. Integration paiement a connecter.",
  });
}
