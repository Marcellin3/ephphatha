import Image from "next/image";
import Link from "next/link";
import { news, objectives, partners, photos, programs } from "./site-data";

export default function Home() {
  const featuredNews = news.slice(0, 3);

  return (
    <main>
      <section id="contenu" className="hero-section">
        <Image src={photos.signingWoman} alt="" fill priority className="hero-image hero-a object-cover" />
        <Image src={photos.facilitator} alt="" fill priority className="hero-image hero-b object-cover" />
        <Image src={photos.communityWoman} alt="" fill priority className="hero-image hero-c object-cover" />
        <div className="hero-layer" />
        <div className="hero-inner">
          <div className="hero-content">
            <p className="hero-badge">CESG ASBL - Goma, Nord-Kivu</p>
            <h1>Ensemble pour l&apos;inclusion et l&apos;autonomisation des personnes sourdes</h1>
            <p className="hero-lead">
              Depuis 1958, le Centre Ephphatha accompagne les enfants, les jeunes et les adultes sourds de Goma vers
              une vie digne, autonome et inclusive.
            </p>
            <div className="hero-actions">
              <Link className="primary-btn big" href="/don">
                Faire un don
              </Link>
              <Link className="light-btn big" href="/programmes">
                Decouvrir nos programmes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-about-section bg-white">
        <div className="home-about-wrap">
          <div className="about-visual">
            <span className="about-corner-block" aria-hidden="true" />
            <span className="about-outline-block" aria-hidden="true" />
            <Image
              src={photos.signingWoman}
              alt="Rencontre communautaire du Centre Ephphatha"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="about-copy">
            <span className="soft-badge">A propos de nous</span>
            <h2>Nos services sont concus pour offrir le meilleur accompagnement inclusif.</h2>
            <p>
              Depuis 1958, le Centre Ephphatha accompagne les enfants, les jeunes et les adultes sourds de Goma avec
              des services educatifs, sociaux, medicaux, professionnels et spirituels adaptes a chaque personne.
            </p>
            <div className="about-actions">
              <Link className="primary-btn" href="/apropos">
                Decouvrir
              </Link>
              <Link className="secondary-btn" href="/impact">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="objectives-section" aria-labelledby="objectives-heading">
        <div className="objectives-layout">
          <div className="objectives-intro">
            <h2 className="objectives-brand">Objectifs</h2>
            <p className="text-2xl">
              Le Centre Ephphatha a pour objectif principal de promouvoir l&apos;epanouissement integral des personnes
              vivant avec handicap auditif a travers leur integration sociale, economique, spirituelle, educative et
              scientifique.
            </p>
          </div>
          <div className="objectives-grid">
            {objectives.map((item, index) => (
              <article key={item.title} className={`objective-card${index === 0 ? " is-active" : ""}`}>
                <h3>{item.title}</h3>
                <p className="objective-card-caption">{item.caption}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section mission-band">
        <div className="mission-layout">
          <div className="mission-visual-overlapping">
            <div className="mission-image-top">
              <Image
                src={photos.assembly}
                alt="Assemblée au Centre Ephphatha"
                fill
                sizes="(min-width: 1024px) 35vw, 70vw"
              />
            </div>
            <div className="mission-image-bottom">
              <Image
                src={photos.signingMan}
                alt="Apprentissage de la langue des signes"
                fill
                sizes="(min-width: 1024px) 40vw, 80vw"
                priority
              />
            </div>
            <div className="mission-slogan-card">
              <div className="relative w-full h-full">
                <Image
                  src="/photos/signe.png"
                  alt="Communication Langue des Signes"
                  fill
                  sizes="(min-width: 1024px) 15vw, 30vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mission-copy">
            <span className="mission-kicker">Mission & Vision</span>
            <h2 className="mission-title">Notre engagement pour l&apos;inclusion et l&apos;autonomie.</h2>
            <div className="mission-text-stack">
              <article className="mission-text-block">
                <h3>Notre Mission</h3>
                <p>
                  Accompagner chaque personne sourde vers son épanouissement intégral en offrant un encadrement
                  éducatif, professionnel, médical, social et spirituel adapté à ses besoins.
                </p>
              </article>
              <article className="mission-text-block">
                <h3>Notre Vision</h3>
                <p>
                  Bâtir une société inclusive où la surdité n&apos;est plus un obstacle à la dignité, au respect des
                  droits et à l&apos;autonomie de chaque individu.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="section-heading-row">
            <div>
              <h2 className="text-2xl">Partenaires</h2>
              <h3 className="text-xl">Des allies pour amplifier l&apos;impact du centre.</h3>
            </div>
            <Link className="secondary-btn" href="/partenaires">
              Voir tous
            </Link>
          </div>
          <div className="partner-carousel" aria-label="Carrousel des partenaires">
            <div className="partner-track">
              {[...partners, ...partners].map((partner, index) => (
                <Link key={`${partner.name}-${index}`} className="partner-logo" href="/partenaires">
                  <Image src={partner.image} alt={`Logo ${partner.name}`} width={220} height={120} />
                  <span>{partner.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="home-news-layout">
            <div className="home-news-copy">
              <h2>Nos dernieres actualites</h2>
              <p>
                Decouvrez les actions menees avec les familles, les eleves et nos partenaires pour une inclusion
                durable des personnes sourdes.
              </p>

              <div className="home-news-bottom">
                <Link className="home-news-link" href="/actualites">
                  Voir plus
                </Link>

                <div className="home-news-controls" aria-hidden="true">
                  <span className="home-news-control">&lsaquo;</span>
                  <span className="home-news-control is-active">&rsaquo;</span>
                </div>
              </div>
            </div>

            <div className="home-news-cards">
              <div className="home-news-track">
                {[...featuredNews, ...featuredNews].map((item, index) => (
                  <article key={`${item.title}-${index}`} className="home-news-card">
                    <Image src={item.image} alt={item.title} width={420} height={560} className="home-news-image" />

                    <div className="home-news-overlay">
                      <span>{item.title}</span>
                      <small>{item.date}</small>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
