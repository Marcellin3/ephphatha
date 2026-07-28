import { NewsFeed } from "../components/NewsFeed";
import { PageHero } from "../components/PageHero";
import { getArticles } from "../lib/articles";
import { photos } from "../site-data";

export default async function ActualitesPage() {
  const articles = await getArticles();

  return (
    <main>
      <PageHero eyebrow="Actualités" title="La vie du centre, les événements et les témoignages." text="Un espace pour suivre les avancées du CISG ASBL et sensibiliser le public à la cause des personnes sourdes." image={photos.communityWoman} />
      <section className="section news-section" aria-labelledby="news-heading">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 id="news-heading" className="sr-only">Toutes les actualités</h1>
          <NewsFeed articles={articles} />
        </div>
      </section>
    </main>
  );
}
