import { PageHero } from "../components/PageHero";
import { photos } from "../site-data";

export default function AdminPage() {
  return (
    <main>
      <PageHero
        eyebrow="Espace administrateur"
        title="Dashboard securise pour piloter les contenus et les dons."
        text="Cette interface prepare les besoins de gestion : actualites, galerie, partenaires, dons et statistiques."
        image={photos.communityWoman}
      />
      <section className="section bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Ajouter actualites",
              "Modifier contenus",
              "Gerer galerie",
              "Gerer partenaires",
              "Gerer dons",
              "Voir statistiques",
            ].map((item) => (
              <div key={item} className="admin-tile">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
