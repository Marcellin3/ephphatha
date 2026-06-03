import type { Metadata } from "next";
import Footer from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Centre Ephphatha pour Sourds de Goma | CISG ASBL",
  description:
    "Site institutionnel du Centre Ephphatha pour Sourds de Goma, dedie a l'inclusion, l'education et l'autonomisation des personnes sourdes.",
  keywords: [
    "Centre Ephphatha",
    "sourds",
    "Goma",
    "handicap auditif",
    "inclusion",
    "education specialisee",
    "CISG ASBL",
  ],
  openGraph: {
    title: "Centre Ephphatha pour Sourds de Goma",
    description:
      "Depuis 1958, le CISG ASBL accompagne les enfants, jeunes et adultes sourds de Goma vers une vie digne et autonome.",
    type: "website",
    locale: "fr_CD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full">
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
