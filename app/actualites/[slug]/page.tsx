import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock3, Tag, UserRound } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { formatArticleDate, getArticle, getArticles, readingTime } from "../../lib/articles";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getArticles()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticle((await params).slug);
  if (!article) return {};
  return { title: `${article.title} | Actualités CISG ASBL`, description: article.summary, openGraph: { images: [article.coverImage] } };
}

function ArticleContent({ content, format }: { content: string; format: "html" | "markdown" }) {
  if (format === "html") return <div className="article-prose" dangerouslySetInnerHTML={{ __html: content }} />;
  return <div className="article-prose">{content.split(/\n\s*\n/).map((block, index) => block.startsWith("## ") ? <h2 key={index}>{block.slice(3)}</h2> : <p key={index}>{block.replace(/^[-*]\s+/gm, "")}</p>)}</div>;
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticle((await params).slug);
  if (!article) notFound();
  const articles = await getArticles();
  const related = articles.filter((item) => item.slug !== article.slug && item.category === article.category).slice(0, 3);
  const recent = articles.filter((item) => item.slug !== article.slug).slice(0, 3);
  const shareUrl = `https://ephphatha.com/actualites/${article.slug}`;
  const shares = [
    { label: "Partager sur Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, icon: FaFacebookF },
    { label: "Partager sur LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, icon: FaLinkedinIn },
    { label: "Partager sur X", href: `https://x.com/intent/post?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`, icon: FaXTwitter },
  ];

  return <main className="article-page">
    <article>
      <header className="article-header">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <Link href="/actualites" className="article-back"><ArrowLeft aria-hidden="true" />Retour aux actualités</Link>
          <span className="tag">{article.category}</span>
          <h1>{article.title}</h1>
          <p className="article-intro">{article.summary}</p>
          <div className="article-meta"><span><CalendarDays aria-hidden="true" />Publié le {formatArticleDate(article.publishedAt)}</span><span><UserRound aria-hidden="true" />{article.author}</span><span><Clock3 aria-hidden="true" />{readingTime(article.content)} min de lecture</span></div>
        </div>
      </header>
      <div className="article-cover-wrap"><Image src={article.coverImage} alt={`Illustration de l'article : ${article.title}`} fill priority sizes="(min-width: 1280px) 1100px, 100vw" className="article-cover" /></div>
      <div className="article-layout mx-auto max-w-6xl px-4 lg:px-8">
        <div><ArticleContent content={article.content} format={article.contentFormat} />{article.galleryImages.length > 0 && <section className="article-gallery" aria-label="Images de l'article">{article.galleryImages.map((image, index) => <Image key={image} src={image} alt={`Image ${index + 1} de l'article : ${article.title}`} width={900} height={560} sizes="(min-width: 768px) 50vw, 100vw" />)}</section>}</div>
        <aside className="article-aside"><p>Partager cette actualité</p><div className="article-shares">{shares.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon /></a>)}</div><div className="article-tags"><Tag aria-hidden="true" />{article.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></aside>
      </div>
    </article>
    <section className="article-more section"><div className="mx-auto max-w-7xl px-4 lg:px-8"><p className="eyebrow">À découvrir aussi</p><h2>Continuer la lecture</h2><div className="article-more-grid"><RelatedList title="Articles similaires" articles={related} /><RelatedList title="Actualités récentes" articles={recent} /></div></div></section>
  </main>;
}

async function RelatedList({ title, articles }: { title: string; articles: Awaited<ReturnType<typeof getArticles>> }) {
  return <section className="related-list" aria-label={title}><h3>{title}</h3>{articles.length ? articles.map((item) => <Link href={`/actualites/${item.slug}`} key={item.id}><Image src={item.coverImage} alt="" width={160} height={96} sizes="80px" /><span><small>{item.category} · {formatArticleDate(item.publishedAt)}</small>{item.title}</span></Link>) : <p>Aucun article à afficher.</p>}</section>;
}
