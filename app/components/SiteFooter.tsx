import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-20">
      <div className="container relative z-30 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[1.75rem] bg-[#138cc4] shadow-[0_24px_70px_rgba(0,91,150,0.26)]">
          <div className="grid items-center gap-8 p-5 sm:p-6 lg:grid-cols-2 lg:p-8">
            <div className="relative hidden min-h-64 justify-center lg:flex">
              <Image
                src="/photos/letter.png"
                alt="Centre Ephphatha"
                width={420}
                height={300}
                className="footer-newsletter-image"
              />
            </div>

            <div className="text-white">
              <span className="inline-flex rounded-full bg-white/20 px-4 py-1 text-sm font-bold shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]">
                Centre Ephphatha
              </span>

              <h2 className="mt-4 text-balance text-lg font-bold leading-tight text-white sm:text-2xl">
                Ensemble pour l&apos;inclusion des personnes sourdes
              </h2>

              <p className="mt-4 max-w-xl text-pretty leading-7 text-blue-50">
                Recevez nos actualites, projets et opportunites de soutien aux enfants, jeunes et adultes sourds de
                Goma.
              </p>

              <form className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="min-h-12 flex-1 rounded-full bg-white px-5 py-3 font-semibold text-gray-700 outline-offset-4 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]"
                />

                <button className="min-h-12 rounded-full bg-white px-6 py-3 font-semibold text-gray-900 transition-[transform,background-color,color] duration-200 ease-out hover:bg-gray-100 active:scale-[0.96]">
                  S&apos;abonner
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="-mt-8 bg-[#f4eef7] pt-20 shadow-[0_-20px_60px_rgba(15,23,42,0.06)]">
        <div className="container mx-auto px-6 py-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Link href="/" className="flex w-fit items-center gap-3">
                <Image
                  src="/photos/Logo.png"
                  alt="Logo du Centre Ephphatha"
                  width={56}
                  height={56}
                  className="footer-logo"
                />

                <div>
                  <h3 className="text-xl font-bold">Centre Ephphatha Pour</h3>
                  <h3 className="text-xl font-bold">Sourds de Goma</h3>
                </div>
              </Link>

              <p className="mt-5 max-w-xl text-pretty leading-relaxed text-gray-600">
                Depuis 1985, le Centre Ephphatha accompagne les personnes vivant avec un handicap auditif a travers
                l&apos;education, l&apos;insertion sociale, la sante et la formation professionnelle.
              </p>

              <div className="mt-6 flex gap-3">
                <a href="#" className="footer-social-link" aria-label="Facebook">
                  <FaFacebookF size={18} />
                </a>

                <a href="#" className="footer-social-link" aria-label="Instagram">
                  <FaInstagram size={18} />
                </a>

                <a href="#" className="footer-social-link" aria-label="YouTube">
                  <FaYoutube size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-5 font-bold">A propos</h4>

              <ul className="space-y-3 text-gray-600">
                <li>
                  <Link className="footer-text-link" href="/apropos">
                    Notre histoire
                  </Link>
                </li>
                <li>
                  <Link className="footer-text-link" href="/apropos">
                    Mission & Vision
                  </Link>
                </li>
                <li>
                  <Link className="footer-text-link" href="/apropos">
                    Notre equipe
                  </Link>
                </li>
                <li>
                  <Link className="footer-text-link" href="/partenaires">
                    Partenaires
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-5 font-bold">Programmes</h4>

              <ul className="space-y-3 text-gray-600">
                <li>
                  <Link className="footer-text-link" href="/programmes">
                    Education
                  </Link>
                </li>
                <li>
                  <Link className="footer-text-link" href="/programmes">
                    Formation Professionnelle
                  </Link>
                </li>
                <li>
                  <Link className="footer-text-link" href="/programmes">
                    Alphabetisation
                  </Link>
                </li>
                <li>
                  <Link className="footer-text-link" href="/programmes">
                    Sante & Audiologie
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-5 font-bold">Contact</h4>

              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-2">
                  <MapPin size={18} className="mt-0.5 shrink-0" />
                  <span>Goma, Nord-Kivu, RDC</span>
                </li>

                <li className="flex gap-2">
                  <Phone size={18} className="mt-0.5 shrink-0" />
                  <span>
                    +243 997 674 407
                    <br />
                    +243 901 143 004
                  </span>
                </li>

                <li className="flex gap-2">
                  <Mail size={18} className="mt-0.5 shrink-0" />
                  <span>contact@ephphatha.org</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 md:flex-row">
            <p className="text-pretty text-sm text-gray-500">
              &copy; 2026 Centre Ephphatha pour Sourds de Goma (CISG ASBL). Tous droits reserves.
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
              <Link className="footer-text-link" href="/contact">
                Confidentialite
              </Link>
              <Link className="footer-text-link" href="/contact">
                Conditions
              </Link>
              <Link className="footer-text-link" href="/sitemap.xml">
                Plan du site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
