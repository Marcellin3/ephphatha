"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, UserRound } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { NewsArticle } from "../lib/articles";

type Props = { articles: NewsArticle[] };

function formatShortDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "numeric" }).format(date);
}

export function NewsFeed({ articles }: Props) {
  const [category, setCategory] = useState("Toutes");
  const feedRef = useRef<HTMLDivElement>(null);
  const categories = ["Toutes", ...Array.from(new Set(articles.map((article) => article.category)))];
  const visibleArticles = useMemo(
    () => articles.filter((article) => category === "Toutes" || article.category === category),
    [articles, category],
  );

  useEffect(() => {
    const cards = feedRef.current?.querySelectorAll<HTMLElement>(".news-card");
    if (!cards || !window.IntersectionObserver) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [visibleArticles]);

  return (
    <>
      <div className="news-toolbar">
        <div>
          <p className="eyebrow">Le journal du centre</p>
          <h2>Des histoires qui font avancer l&apos;inclusion.</h2>
        </div>
        <label className="news-filter-label">
          <span>Filtrer par thème</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Filtrer les actualités">
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>

      <div className="news-grid" ref={feedRef} aria-live="polite">
        {visibleArticles.map((article, index) => (
          <article className="news-card" key={article.id} style={{ "--news-delay": `${Math.min(index, 5) * 70}ms` } as React.CSSProperties}>
            <Link className="news-card-image" href={`/actualites/${article.slug}`} aria-label={`Lire l'article : ${article.title}`}>
              <Image src={article.coverImage} alt={`Illustration de l'article : ${article.title}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" priority={index < 3} />
            </Link>
            <div className="news-card-body">
              <span className="tag">{article.category}</span>
              <h3><Link href={`/actualites/${article.slug}`}>{article.title}</Link></h3>
              <div className="news-meta"><span><CalendarDays aria-hidden="true" />{formatShortDate(article.publishedAt)}</span><span><UserRound aria-hidden="true" />{article.author}</span></div>
              <p className="news-summary">{article.summary}</p>
              <Link className="news-read-more" href={`/actualites/${article.slug}`}>Lire plus <ArrowRight aria-hidden="true" /></Link>
            </div>
          </article>
        ))}
      </div>
      {!visibleArticles.length && <p className="news-empty">Aucune actualité dans cette catégorie pour le moment.</p>}
    </>
  );
}
