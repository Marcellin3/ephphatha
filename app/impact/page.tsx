import { PageHero } from "../components/PageHero";
import { photos, stats } from "../site-data";

export default function ImpactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Impact et resultats"
        title="Des chiffres qui racontent des vies transformees."
        text="Le centre mesure son action a travers la scolarisation, l'alphabetisation, les soins et l'integration sociale."
        image={photos.expressiveSign}
      />
      <section className="section bg-white">
        <div className="section-grid">
          <div>
            <p className="eyebrow">Chiffres cles</p>
            <h2>Un suivi clair pour les familles, les partenaires et les bailleurs.</h2>
          </div>
          <div className="space-y-5">
            {[
              ["Eleves au secondaire", 450, "#005B96"],
              ["Eleves au primaire", 150, "#2E8B57"],
              ["Adultes alphabetises", 537, "#F7941D"],
              ["Beneficiaires des soins", 3000, "#334155"],
            ].map(([label, value, color]) => (
              <div key={label as string}>
                <div className="mb-2 flex justify-between font-bold">
                  <span>{label}</span>
                  <span>{value}+</span>
                </div>
                <div className="h-4 overflow-hidden rounded bg-slate-200">
                  <div
                    className="h-full rounded"
                    style={{ width: `${Math.min(Number(value) / 30, 100)}%`, background: color as string }}
                  />
                </div>
              </div>
            ))}
            <div className="grid gap-3 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="impact-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
