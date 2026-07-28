"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { PageHero } from "../components/PageHero";
import { gallery, photos } from "../site-data";

export default function GaleriePage() {
  const [filter, setFilter] = useState("Tous");
  const [allGallery, setAllGallery] = useState(gallery);
  const [selectedImage, setSelectedImage] = useState<(typeof gallery)[number] | null>(null);

  const filteredGallery = useMemo(
    () => allGallery.filter((item) => filter === "Tous" || item.category === filter),
    [filter, allGallery],
  );
  useEffect(() => { fetch("/api/content").then((response) => response.json()).then((content) => setAllGallery([...content.photos, ...gallery])).catch(() => undefined); }, []);

  // Group items into 4 columns for masonry layout on desktop
  const columns = useMemo(() => {
    const cols: { item: typeof gallery[number]; index: number }[][] = [[], [], [], []];
    filteredGallery.forEach((item, index) => {
      cols[index % 4].push({ item, index });
    });
    return cols;
  }, [filteredGallery]);

  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHero
        eyebrow="Galerie"
        title="Photos et vidéos des actions du centre."
        text="Les images du centre montrent l'apprentissage, la sensibilisation communautaire et la langue des signes en action."
        image={photos.signingMan}
      />
      
      <section className="section">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Header & Filter Row */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end border-b border-slate-200 pb-8 mb-10">
            <div>
              <p className="eyebrow text-orange-600 font-bold uppercase tracking-wider">Galerie d&apos;impact</p>
              <h2 className="text-3xl font-black text-slate-900 mt-2">Explorer nos activités en images</h2>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="category-select" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Filtrer par catégorie
              </label>
              <select
                id="category-select"
                className="field bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-slate-700 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all max-w-xs"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
              >
                {["Tous", "Ecole", "Langue des signes", "Inclusion", "Sensibilisations", "Temoignages", "Activites spirituelles"].map(
                  (category) => (
                    <option key={category} value={category}>{category}</option>
                  ),
                )}
              </select>
            </div>
          </div>

          {/* Masonry Columns Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {columns.map((colItems, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-6">
                {colItems.map(({ item, index }) => {
                  // Alternating checkerboard pattern
                  const col = index % 4;
                  const row = Math.floor(index / 4);
                  const isTaller = (row + col) % 2 !== 0;
                  const aspectStyle = isTaller ? "aspect-[4/5]" : "aspect-[4/3]";

                  return (
                    <button
                      key={item.title}
                      className={`group relative w-full overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:border-orange-500/30 text-left focus:outline-none focus:ring-2 focus:ring-orange-500/40 ${aspectStyle}`}
                      onClick={() => setSelectedImage(item)}
                    >
                      {/* Photo */}
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredGallery.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <p className="text-slate-400 font-semibold text-lg">Aucune image disponible pour cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Dialog */}
      {selectedImage ? (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 animate-fade-in"
          role="dialog" 
          aria-modal="true" 
          aria-label={selectedImage.title}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full focus:outline-none"
            onClick={() => setSelectedImage(null)}
            aria-label="Fermer la vue agrandie"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center gap-4">
            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center max-w-2xl px-4">
              <span className="inline-block bg-orange-500/20 text-orange-400 text-xs font-bold px-3 py-1 rounded-2xl mb-2">
                {selectedImage.category}
              </span>
              <h3 className="text-white text-lg font-bold tracking-wide">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
