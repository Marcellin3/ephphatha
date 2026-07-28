"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { photos, programs } from "../site-data";
import {
  GraduationCap,
  Briefcase,
  Users,
  HeartPulse,
  Heart,
  ShieldCheck,
  ArrowRight,
  Check,
  Info,
  MapPin,
  Mail,
  Construction,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { PageHero } from "../components/PageHero";

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
  {
    icon: ShieldCheck,
    color: "text-teal-600 bg-teal-50 border-teal-100",
    badge: "bg-teal-50 text-teal-700 ring-teal-600/10",
    accent: "border-teal-500",
    hoverBg: "hover:border-teal-200 hover:shadow-teal-100/30",
  },
];

const programDescriptions: Record<string, string> = {
  "Scolarisation": "Offrir un enseignement spécialisé adapté et bilingue pour stimuler l'apprentissage et l'intégration académique des élèves sourds.",
  "Formation professionnelle": "Développer le savoir-faire technique et artisanal des jeunes pour favoriser leur insertion professionnelle et leur autonomie financière.",
  "Integration sociale": "Accompagner les familles et sensibiliser la communauté pour faire valoir les droits des sourds et briser l'isolement.",
  "Sante et accompagnement psychosocial": "Proposer un soutien thérapeutique, de la logopédie, de l'audiologie et un accompagnement psychologique de qualité.",
  "Encadrement spirituel": "Nourrir la vie morale, culturelle et spirituelle à travers des chorales, des études et des moments de partage adaptés.",
  "Santé sexuelle et reproductive (SSR)": "Proposer des séances de sensibilisation et d’éducation, le conseil en santé reproductive, la planification familiale, la prévention et la prise en charge des IST, ainsi qu’un accompagnement respectueux des besoins spécifiques des adolescents, jeunes et adultes."
};

const inspiringWomen = [
  {
    name: "Mama YALALA Mercianne",
    role: "Directrice d'école primaire",
    image: "/ptotos galerie/DSC_0019.jpg",
    desc: "Une leader exceptionnelle, totalement dévouée au développement des enfants sourds. Elle dirige l'école primaire avec bienveillance, veille à la vie spirituelle de son équipe et soutient activement l'évolution de l'école secondaire d'Ephphatha."
  },
  {
    name: "RIZIKI Adela",
    role: "Enseignante",
    image: "/ptotos galerie/DSC_0020.jpg",
    desc: "Ayant surmonté les défis de l'orphelinat et de la surdité, elle prouve que la vie en harmonie est possible. Enseignante dévouée, elle contribue au développement intellectuel et moral des enfants au sein de l'école primaire."
  },
  {
    name: "KAHAMBU Chantal",
    role: "Enseignante",
    image: "/ptotos galerie/DSC_0021.jpg",
    desc: "Enseignante courageuse, elle aide les parents à comprendre que la surdité n'est pas une malédiction, mais une œuvre de Dieu. Mère célibataire, elle assume ses responsabilités avec force malgré les épreuves passées."
  },
  {
    name: "FURAHA Dina",
    role: "Enseignante à l'EP Neema Ephphatha",
    image: "/ptotos galerie/DSC_0022.jpg",
    desc: "Malgré la perte de ses parents, elle a su forger son propre chemin. Enseignante à l'EP NEEMA EPHPHATHA, elle contribue par son travail à la stabilité de son foyer, formant un couple béni avec son époux."
  },
  {
    name: "MONGI Francine",
    role: "Enseignante",
    image: "/ptotos galerie/DSC_0023.jpg",
    desc: "Une figure fascinante qui enseigne à l'EP NEEMA EPHPHATHA et s'investit profondément dans la communauté religieuse, notamment auprès des jeunes filles et des enfants n'ayant pas encore maîtrisé la langue des signes."
  },
  {
    name: "Mme KAKURU Nenette",
    role: "Secrétaire & Interprète",
    image: "/ptotos galerie/DSC_0024.jpg",
    desc: "Secrétaire dévouée et infatigable, elle apporte un soutien précieux au centre Ephphatha. Interprète compétente, elle est un pilier pour les femmes et pour le suivi des activités du centre."
  },
  {
    name: "MASIKA Desange",
    role: "Formatrice en coupe et couture",
    image: "/ptotos galerie/DSC_0025.jpg",
    desc: "Formatrice en coupe et couture, elle a su transformer son talent en un moyen de construire un avenir pour sa famille. Son cœur généreux l'a poussée à adopter un enfant, démontrant une force de caractère exemplaire."
  },
  {
    name: "MOKE DANIELLA",
    role: "Instructrice en alphabétisation",
    image: "/ptotos galerie/DSC_0026.jpg",
    desc: "Ancienne élève du centre, elle y travaille aujourd'hui comme instructrice en alphabétisation. Engagée dans son église et son foyer, elle incarne la réussite et l'épanouissement."
  },
  {
    name: "SOUVERENE",
    role: "Superviseuse en coupe & couture",
    image: "/ptotos galerie/DSC_0028.jpg",
    desc: "Qualifiée en coupe et couture, elle supervise les élèves tout en aidant activement les apprenants dans leur apprentissage du métier."
  },
  {
    name: "ALICE ZABIBU",
    role: "Enseignante spécialisée",
    image: "/ptotos galerie/DSC_0029.jpg",
    desc: "Enseignante passionnée par l'éducation des sourds, elle illustre parfaitement que l'intégration entre personnes sourdes et entendantes est à la fois simple et enrichissante."
  }
];

const donationContact = {
  director: "Directeur du Centre CESG",
  phone: "+243 997 674 407",
  whatsapp: "243997674407",
  email: "contact@ephphatha.org",
};

export default function ProgrammesPage() {
  // Donation states
  const [amount, setAmount] = useState<number>(99);
  const [isCustomAmount, setIsCustomAmount] = useState<boolean>(false);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("test");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [donationDialogOpen, setDonationDialogOpen] = useState(false);

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDonationDialogOpen(true);
  };

  const currentSelectedAmount = isCustomAmount ? (Number(customAmount) || 0) : amount;

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setDonationDialogOpen(false);
    if (donationDialogOpen) window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [donationDialogOpen]);

  return (
    <main className="min-h-screen bg-slate-50/30">
      {/* Premium Full-Width Slider Hero Section */}
      <section className="relative min-h-[75vh] flex items-center bg-slate-700 text-white overflow-hidden">
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
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
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
              <div className="mt-8 max-w-2xl">
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
              Nos 6 domaines d&apos;intervention majeurs
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

      {/* Advanced Interactive Donation Form Redesign (Supporting Banner replacement) */}
      <section id="don" className="pb-24 border-t border-slate-200/60 pt-16 bg-slate-50/50 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Soutenir nos programmes</span>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Faire un don pour changer des vies
            </h2>
            <p className="mt-3 text-base text-slate-500">
              Votre soutien direct permet de financer les repas des internes, de distribuer des fournitures scolaires ou de fournir des kits professionnels à Goma.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Interactive Donation Form */}
            <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/80 p-6 md:p-8 shadow-sm flex flex-col gap-6">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
                    <Check className="h-8 w-8 font-black" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">Merci pour votre générosité !</h4>
                  <p className="mt-3 text-slate-500 max-w-sm text-sm leading-relaxed">
                    Votre simulation de don de <strong className="text-slate-900">${currentSelectedAmount}</strong> a été enregistrée avec succès.
                  </p>
                  {paymentMethod === "offline" && (
                    <div className="mt-6 rounded-2xl bg-slate-50 p-5 border border-slate-200/80 text-left text-xs text-slate-600 max-w-md w-full space-y-2">
                      <p className="font-bold text-slate-800 text-sm">Coordonnées de versement hors-ligne :</p>
                      <p><span className="font-semibold text-slate-400">Banque :</span> BCDC Goma, Nord-Kivu</p>
                      <p><span className="font-semibold text-slate-400">Compte :</span> 0015-8849102-39</p>
                      <p><span className="font-semibold text-slate-400">Intitulé :</span> CESG ASBL Centre Ephphatha</p>
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFirstName("");
                      setLastName("");
                      setEmail("");
                    }}
                    className="mt-8 text-sm font-bold text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
                  >
                    Faire un autre don
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDonateSubmit} className="flex flex-col gap-6">
                  {/* Warning Notice Banner */}
                  <div className="flex items-center gap-3 rounded-xl bg-amber-50 p-4 border border-amber-100 text-amber-800 text-xs font-semibold">
                    <Info className="h-5 w-5 shrink-0 text-amber-600" />
                    <span>Mode Test activé : aucun versement réel n&apos;est prélevé à ce stade.</span>
                  </div>

                  {/* Big Amount Header Box */}
                  <div className="relative flex items-center justify-between rounded-2xl bg-blue-900 px-6 py-5 text-white font-extrabold shadow-inner">
                    <span className="text-3xl font-black opacity-80">$</span>
                    {isCustomAmount ? (
                      <input
                        type="number"
                        placeholder="Montant"
                        required
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full text-right text-4xl font-black bg-transparent border-none outline-none focus:ring-0 text-white pr-1"
                        min="1"
                      />
                    ) : (
                      <span className="text-4xl font-black">{amount}</span>
                    )}
                  </div>

                  {/* Quick select buttons */}
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {[25, 50, 75, 99, 200].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => {
                          setIsCustomAmount(false);
                          setAmount(val);
                        }}
                        className={`py-3 px-4 rounded-xl font-bold text-sm border transition-all cursor-pointer ${
                          !isCustomAmount && amount === val
                            ? "bg-blue-900 text-white border-blue-900 shadow-md shadow-blue-900/10"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        ${val}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        setIsCustomAmount(true);
                      }}
                      className={`py-3 px-3 rounded-xl font-bold text-sm border transition-all truncate cursor-pointer ${
                        isCustomAmount
                          ? "bg-blue-900 text-white border-blue-900 shadow-md shadow-blue-900/10"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      Autre
                    </button>
                  </div>

                  {/* Payment Method Option */}
                  <div className="flex flex-col gap-3">
                    <h4 className="text-sm font-bold text-slate-900">Mode de versement</h4>
                    <div className="flex flex-wrap gap-6">
                      <label className="flex items-center gap-3 cursor-pointer text-xs font-bold text-slate-600">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === "test"}
                          onChange={() => setPaymentMethod("test")}
                          className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-slate-300"
                        />
                        Donation de Test
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer text-xs font-bold text-slate-600">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === "offline"}
                          onChange={() => setPaymentMethod("offline")}
                          className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-slate-300"
                        />
                        Donation Hors-ligne (Virement)
                      </label>
                    </div>
                  </div>

                  {/* Personal info fields */}
                  <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-bold text-slate-900">Informations personnelles</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                          Prénom
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: John"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs font-semibold text-slate-900 focus:border-orange-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                          Nom de famille
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: Doe"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs font-semibold text-slate-900 focus:border-orange-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                        Adresse e-mail
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Ex: john.doe@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs font-semibold text-slate-900 focus:border-orange-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex w-fit items-center gap-4 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-black pl-2 pr-6 py-2 transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white font-black text-xs">
                        &gt;&gt;
                      </span>
                      Faire un don maintenant
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Campaign & Organizer info cards */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Campaign Progress Card */}
              <div className="bg-white border border-slate-200/80 p-6 rounded-3xl shadow-sm relative">
                {/* Photo header */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={photos.signingWoman}
                    alt="Alimentation saine"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-0.5 text-[9px] font-extrabold text-blue-900 uppercase tracking-wider shadow-sm">
                    Alimentation
                  </span>

                  {/* Overlapping progress box */}
                  <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-white p-3.5 shadow-md border border-slate-100 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs font-black text-slate-800">
                      <span>Progrès des dons</span>
                      <span className="text-orange-500 font-extrabold">75%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full rounded-full bg-orange-500 animate-pulse" style={{ width: "75%" }} />
                    </div>
                    <div className="flex justify-between items-center text-[9px] text-slate-400 font-bold">
                      <span>Collecté : $7,500</span>
                      <span>Objectif : $10,000</span>
                    </div>
                  </div>
                </div>

                <h4 className="mt-4 text-base font-black text-slate-900 leading-snug">
                  Repas sains et alimentation équilibrée
                </h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed font-medium">
                  Participez au financement des repas pour les enfants sourds logeant à l&apos;internat du centre afin d&apos;assurer leur développement sain.
                </p>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-3 rounded-full border border-slate-950 bg-slate-50 hover:bg-slate-950 hover:text-white text-slate-950 font-black pl-2 pr-5 py-1.5 transition-all text-xs w-fit"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 text-slate-900 font-bold">
                      &gt;
                    </span>
                    Détails du projet
                  </Link>
                </div>
              </div>

              {/* Organizer Card */}
              <div className="bg-white border border-slate-200/80 p-6 rounded-3xl shadow-sm flex flex-col gap-4">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Organisateur
                </h4>
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-slate-100 shadow-sm">
                    <Image
                      src={photos.facilitator}
                      alt="Coordinateur du Centre"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-black text-slate-900">Centre Ephphatha Goma</h5>
                    <p className="text-[11px] text-slate-400 font-semibold">CESG ASBL</p>
                  </div>
                </div>

                <div className="border-t border-slate-100 my-1" />

                <div className="flex flex-col gap-2.5 text-xs font-semibold text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="h-4 w-4 shrink-0 text-orange-500 mt-0.5" />
                    <span>Av. Andrew Foster, Goma, Nord-Kivu, RD Congo</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Mail className="h-4 w-4 shrink-0 text-orange-500 mt-0.5" />
                    <span>ephphathagoma@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiring Portraits Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-2">
              Des Parcours de Vie qui Inspirent
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl leading-tight">
              Portraits des Femmes du Centre Ephphatha
            </h2>
            <p className="mt-4 text-base text-slate-500 leading-relaxed">
              Découvrez les histoires courageuses de ces femmes exceptionnelles qui, par leur dévouement, leur passion et leur persévérance, façonnent chaque jour l&apos;avenir et l&apos;inclusion au sein du centre.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {inspiringWomen.map((woman) => (
              <div 
                key={woman.name} 
                className="group bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Photo Header */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={woman.image}
                    alt={woman.name}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
                  
                  {/* Badge Role */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-white/95 backdrop-blur-sm px-3 py-1 text-[10px] font-bold text-slate-800 ring-1 ring-slate-950/5 shadow-sm">
                      {woman.role}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 leading-snug group-hover:text-orange-500 transition-colors duration-300">
                      {woman.name}
                    </h3>
                    <div className="w-8 h-1 bg-orange-500/80 rounded-full mt-3 mb-4" />
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {woman.desc}
                    </p>
                  </div>

                  {/* Footer Decoration */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    <span>Centre Ephphatha</span>
                    <span className="text-orange-500/80">Inspiration &bull; Force</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <DonationAvailabilityDialog open={donationDialogOpen} onClose={() => setDonationDialogOpen(false)} />
    </main>
  );
}

function DonationAvailabilityDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[90] grid place-items-center bg-slate-950/70 p-4 backdrop-blur-sm" role="presentation" onMouseDown={onClose}>
      <section
        className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl animate-[donation-dialog-in_180ms_cubic-bezier(0.2,0,0,1)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="donation-dialog-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 bg-[#005B96] p-5 text-white sm:p-7">
          <div className="flex items-start gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15"><Construction aria-hidden="true" /></span>
            <div><p className="text-xs font-bold uppercase tracking-widest text-blue-100">Information importante</p><h2 id="donation-dialog-title" className="mt-1 text-xl font-black sm:text-2xl">🚧 Système de don en cours de développement</h2></div>
          </div>
          <button type="button" onClick={onClose} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 transition-[background-color,transform] hover:bg-white/20 active:scale-[0.96]" aria-label="Fermer la fenêtre"><X aria-hidden="true" /></button>
        </div>
        <div className="p-5 sm:p-7">
          <p className="text-pretty leading-7 text-slate-600">Merci pour votre volonté de soutenir le Centre CESG. Nous travaillons actuellement à l&apos;intégration d&apos;une plateforme de paiement en ligne sécurisée afin de faciliter les dons. Cette fonctionnalité n&apos;est pas encore disponible.</p>
          <p className="mt-4 text-pretty leading-7 text-slate-600">En attendant, nous vous invitons à contacter directement la Direction du Centre CESG pour effectuer votre contribution ou obtenir toutes les informations nécessaires.</p>
          <section className="mt-6 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200 sm:p-5" aria-label="Coordonnées de la Direction">
            <p className="text-xs font-black uppercase tracking-widest text-[#005B96]">Coordonnées de la Direction</p>
            <div className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <p className="flex items-center gap-2 font-bold sm:col-span-2"><Construction className="h-4 w-4 text-[#F7941D]" aria-hidden="true" />{donationContact.director}</p>
              <a href={`tel:${donationContact.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-[#005B96]"><Phone className="h-4 w-4 text-[#F7941D]" aria-hidden="true" />{donationContact.phone}</a>
              <a href={`mailto:${donationContact.email}`} className="flex items-center gap-2 break-all hover:text-[#005B96]"><Mail className="h-4 w-4 text-[#F7941D]" aria-hidden="true" />{donationContact.email}</a>
            </div>
          </section>
          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button type="button" onClick={onClose} className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300 px-5 font-bold text-slate-700 transition-[background-color,transform] hover:bg-slate-50 active:scale-[0.96]">Fermer</button>
            <a href={`https://wa.me/${donationContact.whatsapp}?text=${encodeURIComponent("Bonjour, je souhaite obtenir des informations pour effectuer un don au Centre CESG.")}`} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 font-bold text-slate-950 transition-[background-color,transform] hover:bg-[#20bd5a] active:scale-[0.96]"><MessageCircle className="h-5 w-5" aria-hidden="true" />Contacter par WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
}
