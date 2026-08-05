import Image from "next/image";
import { PageHero } from "../components/PageHero";
import { objectives, photos, news, partners, programs } from "../site-data";
import Link from "next/link";

const teamMembers = [
  {
    name: "Directeur du CESG",
    role: "Direction CESG",
    initials: "DC",
    desc: "Assure la gestion globale, la coordination des programmes et le développement des partenariats du CESG.",
  },
  {
    name: "Préfet d'étude secondaire",
    role: "Enseignement Secondaire",
    initials: "PS",
    desc: "Supervise le parcours scolaire des élèves sourds du secondaire et leur préparation à l&apos;insertion sociale.",
  },
  {
    name: "Directrice d'école primaire",
    role: "Enseignement Primaire",
    initials: "DP",
    desc: "Pilote l'ecole primaire;apprentissage de base bilingue (langue des signes et français) pour les enfants dès le jeune âge.",
  },
  {
    name: "Médecin directeur du centre de santé CESG",
    role: "Soins & Audiologie",
    initials: "MD",
    desc: "Dirige les soins de santé de base, les dépistages de l&apos;audition et l&apos;orientation clinique des patients.",
  },
];

export default function AproposPage() {
  return (
    <main>
      {/* Hero section untouched */}
      <PageHero
        eyebrow="A propos"
        title="Une institution pionniere au service de la dignite humaine."
        text="Cree le 15 janvier 1985 par le Dr Andrew Foster, le Centre Ephphatha accompagne les personnes sourdes de Goma dans toutes les dimensions de leur parcours."
        image={photos.facilitator}
      />

      {/* Redesigned Biography Section: Portrait on the Left, Text on the Right */}
      <section className="section bg-white">
        <div className="section-grid">
          {/* Founder's Photo on the Left */}
          <div className="relative aspect-[4/5] w-full max-w-[360px] mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
            <Image
              src="/photos/fondateur.png"
              alt="Dr. Andrew Foster"
              fill
              className="object-cover"
            />
          </div>

          {/* Biography Text on the Right */}
          <div className="space-y-6 text-slate-700 flex flex-col justify-center">
            <h2 className="text-3xl font-black text-slate-900 leading-tight">Notre Histoire</h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Le Centre Éphphatha pour Sourds de Goma (CESG Asbl) est une organisation sans but lucratif enregistrée en République Démocratique du Congo, dédiée à l’accompagnement, l’éducation et l’inclusion des personnes sourdes et malentendantes.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Fondé le 15 janvier 1985 à l’initiative du missionnaire américain Dr Andrew Foster, Directeur général de la mission chrétienne pour sourds de Michigan aux Etats-Unis d’Amérique ET pionnier de l’éducation des sourds en Afrique, le centre œuvre depuis plusieurs décennies pour offrir des opportunités éducatives, sociales et humaines aux personnes vivant avec une déficience auditive.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {["Inclusion", "Respect", "Dignité humaine", "Solidarité", "Équité", "Excellence", "Engagement spirituel"].map(
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

      {/* Objectives Section from Home */}
      <section className="objectives-section" aria-labelledby="objectives-heading">
        <div className="objectives-layout">
          <div className="objectives-intro">
            <h2 id="objectives-heading" className="objectives-brand">Objectifs</h2>
            <p className="objectives-lead">
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

      {/* Mission & Vision Section from Home */}
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

      {/* Organisation du CESG */}
      <section className="section bg-slate-50 border-t border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="section-heading-row mb-10">
            <div>
              <h2 className="text-2xl">Organisation du CESG</h2>
              <h3 className="text-xl">Les responsables qui portent notre engagement au quotidien.</h3>
            </div>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <article key={member.name} className="team-card bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col gap-4">
                <div
                  className="grid aspect-square w-full place-items-center rounded-xl bg-gradient-to-br from-[#005B96] to-[#589361] text-4xl font-black tracking-[-0.08em] text-white shadow-inner"
                  aria-label={`Initiales du poste : ${member.name}`}
                >
                  <span aria-hidden="true">{member.initials}</span>
                </div>
                <div>
                  <span className="inline-flex items-center rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-semibold text-orange-600 ring-1 ring-orange-600/10">
                    {member.role}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-2 leading-snug">{member.name}</h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed font-semibold">{member.desc}</p>
                </div>
              </article>
            ))}
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
    </main>
  );
}
