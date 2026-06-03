"use client";

import { FormEvent } from "react";
import { PageHero } from "../components/PageHero";
import { photos } from "../site-data";

export default function ContactPage() {
  function submitDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Merci. Votre message a ete prepare pour le traitement.");
  }

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Une prise de contact rapide pour familles, partenaires et donateurs."
        text="Le Centre Ephphatha est base a Goma, Nord-Kivu, en Republique Democratique du Congo."
        image={photos.facilitator}
      />
      <section className="section bg-white">
        <div className="section-grid">
          <div>
            <p className="eyebrow">Coordonnees</p>
            <h2>Nous sommes disponibles pour orienter, informer et collaborer.</h2>
            <div className="mt-6 space-y-3 text-slate-700">
              <p>
                <strong>Adresse :</strong> Goma, Nord-Kivu, RDC
              </p>
              <p>
                <strong>Telephone :</strong> +243 XXX XXX XXX
              </p>
              <p>
                <strong>Email :</strong> contact@ephphatha.org
              </p>
            </div>
            <div className="map-box" aria-label="Carte Google Maps de Goma">
              Goma, Nord-Kivu, RDC
            </div>
          </div>
          <form className="contact-form" onSubmit={submitDemo} aria-label="Contact">
            {["Nom", "Telephone", "Email", "Sujet"].map((field) => (
              <input key={field} className="field" placeholder={field} aria-label={field} required />
            ))}
            <textarea className="field min-h-36" placeholder="Message" aria-label="Message" required />
            <button className="primary-btn" type="submit">
              Envoyer le message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
