"use client";

import { FormEvent, useState } from "react";
import { PageHero } from "../components/PageHero";
import { photos } from "../site-data";

export default function DonPage() {
  const [donation, setDonation] = useState("25");

  function submitDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Merci. Votre promesse de don a ete preparee pour le traitement.");
  }

  return (
    <main>
      <PageHero
        eyebrow="Faire un don"
        title="Votre contribution change la vie d'un enfant sourd."
        text="Les dons soutiennent la scolarisation, les soins auditifs, la formation professionnelle et l'accompagnement social."
        image={photos.signingWoman}
      />
      <section className="section bg-[#f7fbff]">
        <div className="section-grid">
          <div>
            <p className="eyebrow">Soutenir le centre</p>
            <h2>Choisissez le montant et le canal de paiement.</h2>
            <p className="mt-5 text-slate-700">
              Mobile Money, Airtel Money, Orange Money, M-Pesa, PayPal et carte bancaire sont prevus pour
              l&apos;integration finale.
            </p>
          </div>
          <form className="donation-panel" onSubmit={submitDemo} aria-label="Don">
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="radio-tile">
                <input type="radio" name="frequency" defaultChecked /> Don unique
              </label>
              <label className="radio-tile">
                <input type="radio" name="frequency" /> Don mensuel
              </label>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["10", "25", "50", "100"].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  className={`amount-btn ${donation === amount ? "selected" : ""}`}
                  onClick={() => setDonation(amount)}
                >
                  {amount}$
                </button>
              ))}
            </div>
            <input
              className="field mt-4"
              type="number"
              min="1"
              value={donation}
              onChange={(event) => setDonation(event.target.value)}
              aria-label="Montant personnalise"
            />
            <select className="field mt-4" aria-label="Methode de paiement">
              {["Mobile Money", "Airtel Money", "Orange Money", "M-Pesa", "PayPal", "Carte bancaire"].map((method) => (
                <option key={method}>{method}</option>
              ))}
            </select>
            <button className="primary-btn mt-5 w-full" type="submit">
              Confirmer le don
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
