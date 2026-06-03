import Link from "next/link";
import Image from "next/image";
import { PageHero } from "../components/PageHero";
import { partners, photos } from "../site-data";

export default function PartenairesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Partenaires"
        title="Une plateforme claire pour les partenaires techniques et financiers."
        text="Le centre travaille avec les eglises, ONG, bailleurs et institutions qui partagent la vision d'une societe inclusive."
        image={photos.assembly}
      />
      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-4 md:grid-cols-4">
            {partners.map((partner) => (
              <Link key={partner.name} className="partner-logo" href="/contact">
                <Image src={partner.image} alt={`Logo ${partner.name}`} width={220} height={120} />
                <span>{partner.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
