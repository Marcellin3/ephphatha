import Image from "next/image";
import { PageHero } from "../components/PageHero";
import { photos } from "../site-data";

export default function AproposPage() {
  return (
    <main>
      <PageHero
        eyebrow="A propos"
        title="Une institution pionniere au service de la dignite humaine."
        text="Cree le 15 janvier 1958 par le Dr Andrew Foster, le Centre Ephphatha accompagne les personnes sourdes de Goma dans toutes les dimensions de leur parcours."
        image={photos.facilitator}
      />
      <section className="section bg-white">
        <div className="section-grid">
          <div className="image-panel">
            <Image src={photos.logo} alt="Logo CISG" fill className="object-contain p-10" />
          </div>
          <div className="space-y-6 text-slate-700">
            <p>
              Le Centre Ephphatha pour Sourds de Goma est ne d&apos;une vision : rendre l&apos;education, la communication,
              l&apos;accompagnement social et la participation communautaire accessibles aux personnes vivant avec un
              handicap auditif.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="info-block">
                <h3>Mission</h3>
                <p>
                  Contribuer a l&apos;epanouissement integral des personnes vivant avec un handicap auditif en leur offrant
                  un accompagnement educatif, professionnel, medical, social et spirituel adapte.
                </p>
              </article>
              <article className="info-block">
                <h3>Vision</h3>
                <p>
                  Construire une societe inclusive ou les personnes sourdes beneficient des memes opportunites que tous
                  les citoyens.
                </p>
              </article>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Inclusion", "Respect", "Dignite humaine", "Solidarite", "Equite", "Excellence", "Engagement spirituel"].map(
                (value) => (
                  <span key={value} className="pill">
                    {value}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
