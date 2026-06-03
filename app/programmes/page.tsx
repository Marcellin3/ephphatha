import Image from "next/image";
import { PageHero } from "../components/PageHero";
import { photos, programs } from "../site-data";

export default function ProgrammesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Nos programmes"
        title="Des services educatifs, sociaux, sanitaires et spirituels coordonnes."
        text="Chaque programme soutient l'autonomie, la communication et la participation active des enfants, jeunes et adultes sourds."
        image={photos.assembly}
      />
      <section className="section bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {programs.map((program) => (
              <article key={program.title} className="program-card">
                <Image src={program.image} alt="" width={900} height={520} className="program-img" />
                <div className="p-5">
                  <h3>{program.title}</h3>
                  <ul>
                    {program.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
