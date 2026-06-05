import Image from "next/image";
import Link from "next/link";
import { photos } from "../site-data";

const nav = [
  { label: "Accueil", href: "/" },
  {
    label: "Apropos",
    href: "/apropos", 
  },
  { label: "Nos programmes", href: "/programmes", 
    children: [
      { label: "impact", href: "/ImpactPage" },
    ],
  },
  {
    label: "Ressources",
    href: "/actualites",
    children: [
      { label: "Actualites", href: "/actualites" },
      { label: "Galerie", href: "/galerie" },
    ],
  },
];

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Accueil CISG">
            <Image src={photos.logo} alt="Logo du Centre Ephphatha" width={54} height={54} className="logo-img" />
            <span className="max-w-48 text-sm font-extrabold leading-tight text-slate-950">
              Centre Ephphatha pour Sourds de Goma
            </span>
          </Link>
          <div className="hidden items-center gap-1 text-sm font-semibold text-slate-700 lg:flex">
            {nav.map((item) => (
              <div key={item.label} className="group relative">
                <Link className="nav-link" href={item.href} aria-haspopup={item.children ? "true" : undefined}>
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="absolute left-0 top-full hidden min-w-56 rounded-b border border-slate-200 bg-white p-2 shadow-xl group-hover:block group-focus-within:block">
                    {item.children.map((child) => (
                      <Link key={child.href} className="sub-link" href={child.href}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Link className="secondary-btn hidden sm:inline-flex" href="/contact">
              Contact
            </Link>
            <Link className="primary-btn" href="/programmes#don">
              Faire un don
            </Link>
          </div>
        </div>
        <div className="border-t border-slate-100 px-4 py-2 lg:hidden" aria-label="Navigation mobile">
          <div className="flex gap-2 overflow-x-auto text-sm font-bold">
            {[
              ["Accueil", "/"],
              ["Apropos", "/apropos"],
              ["Programmes", "/programmes"],
              ["Impact", "/impact"],
              ["Actualites", "/actualites"],
              ["Galerie", "/galerie"],
              ["Partenaires", "/partenaires"],
            ].map(([label, href]) => (
              <Link key={href} className="mobile-nav-link" href={href}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
