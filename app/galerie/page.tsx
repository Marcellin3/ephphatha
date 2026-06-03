"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { PageHero } from "../components/PageHero";
import { gallery, photos } from "../site-data";

export default function GaleriePage() {
  const [filter, setFilter] = useState("Tous");
  const [selectedImage, setSelectedImage] = useState<(typeof gallery)[number] | null>(null);
  const filteredGallery = useMemo(
    () => gallery.filter((item) => filter === "Tous" || item.category === filter),
    [filter],
  );

  return (
    <main>
      <PageHero
        eyebrow="Galerie"
        title="Photos et videos des actions du centre."
        text="Les images du centre montrent l'apprentissage, la sensibilisation communautaire et la langue des signes en action."
        image={photos.signingMan}
      />
      <section className="section bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Galerie filtrable</p>
              <h2>Explorer les activites par categorie.</h2>
            </div>
            <select
              className="field max-w-xs"
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
              aria-label="Filtrer la galerie"
            >
              {["Tous", "Ecole", "Langue des signes", "Inclusion", "Sensibilisations", "Temoignages", "Activites spirituelles"].map(
                (category) => (
                  <option key={category}>{category}</option>
                ),
              )}
            </select>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredGallery.map((item) => (
              <button key={item.title} className="gallery-item" onClick={() => setSelectedImage(item)}>
                <Image src={item.src} alt={item.title} width={1100} height={700} className="gallery-img" />
                <span>{item.category}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {selectedImage ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selectedImage.title}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            Fermer
          </button>
          <Image src={selectedImage.src} alt={selectedImage.title} width={1600} height={1000} />
          <p>{selectedImage.title}</p>
        </div>
      ) : null}
    </main>
  );
}
