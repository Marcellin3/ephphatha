import Image from "next/image";
import Link from "next/link";
import { photos, programs } from "../site-data";
import {
  GraduationCap,
  Briefcase,
  Users,
  HeartPulse,
  Heart,
  ArrowRight,
  Check,
} from "lucide-react";

const programMeta = [
  {
    icon: GraduationCap,
    color: "text-blue-600 bg-blue-50 border-blue-100",
    badge: "bg-blue-50 text-blue-700 ring-blue-600/10",
    accent: "border-blue-500",
    hoverBg: "hover:border-blue-200 hover:shadow-blue-100/30",
  },
  {
    icon: Briefcase,
    color: "text-amber-600 bg-amber-50 border-amber-100",
    badge: "bg-amber-50 text-amber-700 ring-amber-600/10",
    accent: "border-amber-500",
    hoverBg: "hover:border-amber-200 hover:shadow-amber-100/30",
  },
  {
    icon: Users,
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-600/10",
    accent: "border-emerald-500",
    hoverBg: "hover:border-emerald-200 hover:shadow-emerald-100/30",
  },
  {
    icon: HeartPulse,
    color: "text-rose-600 bg-rose-50 border-rose-100",
    badge: "bg-rose-50 text-rose-700 ring-rose-600/10",
    accent: "border-rose-500",
    hoverBg: "hover:border-rose-200 hover:shadow-rose-100/30",
  },
  {
    icon: Heart,
    color: "text-violet-600 bg-violet-50 border-violet-100",
    badge: "bg-violet-50 text-violet-700 ring-violet-600/10",
    accent: "border-violet-500",
    hoverBg: "hover:border-violet-200 hover:shadow-violet-100/30",
  },
];

const programDescriptions: Record<string, string> = {
  "Education": "Offrir un enseignement spécialisé adapté et bilingue pour stimuler l'apprentissage et l'intégration académique des élèves sourds.",
  "Formation professionnelle": "Développer le savoir-faire technique et artisanal des jeunes pour favoriser leur insertion professionnelle et leur autonomie financière.",
  "Integration sociale": "Accompagner les familles et sensibiliser la communauté pour faire valoir les droits des sourds et briser l'isolement.",
  "Sante et accompagnement psychosocial": "Proposer un soutien thérapeutique, de la logopédie, de l'audiologie et un accompagnement psychologique de qualité.",
  "Encadrement spirituel": "Nourrir la vie morale, culturelle et spirituelle à travers des chorales, des études et des moments de partage adaptés."
};

export default function ProgrammesPage() {
  return (
    <main className="min-h-screen bg-slate-50/30">
      {/* Premium Full-Width Slider Hero Section */}
      <section className="relative min-h-[75vh] flex items-center bg-slate-950 text-white overflow-hidden">
        {/* Background slideshow images with fading animations */}
        <div className="absolute inset-0 z-0">
          <Image
            src={photos.assembly}
            alt=""
            fill
            priority
            className="hero-image hero-a object-cover opacity-40"
          />
          <Image
            src={photos.signingWoman}
            alt=""
            fill
            className="hero-image hero-b object-cover opacity-0"
          />
          <Image
            src={photos.communityWoman}
            alt=""
            fill
            className="hero-image hero-c object-cover opacity-0"
          />
          {/* Black overlay to guarantee readability of white text */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-8 py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-9 text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-300 ring-1 ring-orange-500/30">
                Nos actions & impacts
              </span>
              
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1] max-w-3xl">
                Des parcours adaptés vers l&apos;autonomie.
              </h1>
              
              {/* Left Accent Border Paragraph Container */}
              <div className="mt-8 border-l-4 border-orange-500 pl-6 max-w-2xl">
                <p className="text-lg text-slate-200 leading-relaxed font-medium">
                  Chaque programme est conçu pour soutenir l&apos;autonomie, la communication bilatérale et la participation active des enfants, jeunes et adultes sourds de Goma.
                </p>
              </div>

              {/* Large Rectangular Accent CTA Button */}
              <div className="mt-10">
                <a
                  href="#explore"
                  className="primary-btn big rounded-xl bg-orange-500 hover:bg-orange-600 text-slate-950 font-black shadow-lg shadow-orange-500/10 transition-all"
                >
                  Découvrir nos programmes &rarr;
                </a>
              </div>
            </div>

            {/* Right side slider controls */}
            <div className="hidden lg:col-span-3 lg:flex flex-col items-end gap-3 pr-4">
              <button
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-slate-950 shadow-lg active:scale-95 transition-all cursor-pointer"
                aria-label="Précédent"
              >
                &lsaquo;
              </button>
              <button
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-950 shadow-lg hover:bg-slate-100 active:scale-95 transition-all cursor-pointer"
                aria-label="Suivant"
              >
                &rsaquo;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Anchor Navigation Bar */}
      <div className="sticky top-0 z-30 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex overflow-x-auto py-1 gap-2 no-scrollbar scroll-smooth">
            {programs.map((program, idx) => {
              const Icon = programMeta[idx].icon;
              return (
                <a
                  key={program.title}
                  href={`#program-${idx}`}
                  className="flex items-center gap-2 px-4 py-3.5 text-xs font-semibold text-slate-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all whitespace-nowrap"
                >
                  <Icon className="h-4 w-4" />
                  {program.title}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Programs Cards Section */}
      <section id="explore" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-slate-900 sm:text-4xl tracking-tight">
              Nos 5 domaines d&apos;intervention majeurs
            </h2>
            <p className="mt-4 text-base text-slate-500">
              Découvrez en détail les parcours d&apos;accompagnement que nous déployons pour favoriser l&apos;épanouissement de la communauté.
            </p>
          </div>

          {/* Clean standardized grid layout for equal card sizes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {programs.map((program, idx) => {
              const Icon = programMeta[idx].icon;
              const meta = programMeta[idx];
              
              return (
                <article
                  key={program.title}
                  id={`program-${idx}`}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-300 shadow-sm scroll-mt-24 ${meta.hoverBg}`}
                >
                  {/* Image Wrap */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${meta.badge}`}>
                        Axe d&apos;impact
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start gap-4">
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${meta.color}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 leading-snug">{program.title}</h3>
                          <p className="mt-3 text-sm text-slate-500 leading-relaxed font-medium">
                            {programDescriptions[program.title] || "Accompagnement spécifique adapté pour les personnes sourdes."}
                          </p>
                        </div>
                      </div>

                      <div className="my-5 border-t border-dashed border-slate-100" />

                      <ul className="space-y-3 pl-1">
                        {program.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                            <span className="font-semibold text-slate-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-4">
                      <Link
                        href="/contact"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 transition-colors"
                      >
                        En savoir plus / S&apos;inscrire
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supporting Banner CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 md:p-12 lg:p-16 shadow-2xl border border-slate-800">
            {/* Ambient glows inside dark banner */}
            <div className="absolute bottom-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-orange-500/20 to-blue-500/20 blur-3xl" />
            <div className="absolute top-0 left-0 -z-10 h-[200px] w-[200px] rounded-full bg-blue-500/10 blur-2xl" />

            <div className="max-w-3xl">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Soutenir nos programmes</span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Aidez-nous à faire progresser l&apos;inclusion à Goma.
              </h2>
              <p className="mt-4 text-base text-slate-400 leading-relaxed">
                Le Centre Ephphatha fonctionne grâce aux soutiens de donateurs individuels, d&apos;organisations partenaires et de bénévoles. Votre contribution directe finance la scolarité d&apos;élèves démunis et fournit des soins audiologiques.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/don" className="primary-btn big rounded-xl shadow-lg shadow-orange-500/10">
                  Faire un don en ligne
                </Link>
                <Link href="/contact" className="light-btn big rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 text-white">
                  Devenir partenaire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
