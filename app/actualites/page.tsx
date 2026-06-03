"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { PageHero } from "../components/PageHero";
import { news, photos } from "../site-data";

export default function ActualitesPage() {
  const [filter, setFilter] = useState("Tous");
  const filteredNews = useMemo(() => news.filter((item) => filter === "Tous" || item.category === filter), [filter]);

  return (
    <main>
      <PageHero
        eyebrow="Actualites"
        title="La vie du centre, les evenements et les temoignages."
        text="Un espace pour publier les avancees du CISG ASBL et sensibiliser le public a la cause des personnes sourdes."
        image={photos.communityWoman}
      />
      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Blog dynamique</p>
              <h2>Articles classes par thematique.</h2>
            </div>
            <select
              className="field max-w-xs"
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
              aria-label="Filtrer les actualites"
            >
              {["Tous", "Education", "Sante", "Inclusion", "Evenements", "Temoignages"].map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {filteredNews.map((item) => (
              <article key={item.title} className="content-card overflow-hidden p-0">
                <Image src={item.image} alt="" width={900} height={520} className="program-img" />
                <div className="p-5">
                  <span className="tag">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p className="text-sm font-semibold text-slate-500">{item.date}</p>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
