import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
}) {
  return (
    <section className="page-hero" id="contenu">
      <Image src={image} alt="" fill priority className="object-cover" />
      <div className="page-hero-overlay" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-white lg:px-8">
        <p className="mb-5 inline-flex rounded bg-[#F7941D] px-4 py-2 text-sm font-bold text-slate-950">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">{text}</p>
      </div>
    </section>
  );
}
