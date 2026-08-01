import { PageHero } from "../components/PageHero";
import { photos, stats } from "../site-data";

const kpis = [
  { label: "Élèves au secondaire", value: 450, color: "#005B96" },
  { label: "Élèves au primaire", value: 150, color: "#2E8B57" },
  { label: "Adultes alphabétisés", value: 537, color: "#F7941D" },
  { label: "Bénéficiaires des soins", value: 3000, color: "#334155" },
];

export default function ImpactPage() {
  return (
    <main className="bg-slate-50 min-h-screen">

      {/* HEADER HERO (simplifié style dashboard) */}
      <PageHero
        eyebrow="Impact et résultats"
        title="Des chiffres qui racontent des vies transformées."
        text="Le centre mesure son action à travers la scolarisation, l'alphabétisation, les soins et l'intégration sociale."
        image={photos.expressiveSign}
      />

      {/* DASHBOARD WRAPPER */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-7xl space-y-8">

          {/* TOP KPI CARDS (style analytics) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-white p-5 shadow-sm border">
              <p className="text-sm text-slate-500">Élèves total</p>
              <h3 className="text-2xl font-bold text-slate-900">600</h3>
              <span className="text-xs text-green-600">+12% cette année</span>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm border">
              <p className="text-sm text-slate-500">Programmes actifs</p>
              <h3 className="text-2xl font-bold text-slate-900">4</h3>
              <span className="text-xs text-green-600">Stable</span>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm border">
              <p className="text-sm text-slate-500">Bénéficiaires santé</p>
              <h3 className="text-2xl font-bold text-slate-900">3,000+</h3>
              <span className="text-xs text-green-600">+8% ce mois</span>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm border">
              <p className="text-sm text-slate-500">Taux d’impact</p>
              <h3 className="text-2xl font-bold text-slate-900">92%</h3>
              <span className="text-xs text-blue-600">Objectif atteint</span>
            </div>
          </div>

          {/* MAIN GRID */}
          <div className="grid gap-6 lg:grid-cols-3">

            {/* LEFT: PROGRESS LIST */}
            <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm border">
              <div className="mb-6">
                <p className="text-sm text-slate-500">Suivi des programmes</p>
                <h2 className="text-xl font-bold text-slate-900">
                  Impact détaillé par domaine
                </h2>
              </div>

              <div className="space-y-5">
                {kpis.map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex justify-between text-sm font-medium">
                      <span>{item.label}</span>
                      <span>{item.value}+</span>
                    </div>

                    <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${Math.min(item.value / 30, 100)}%`,
                          backgroundColor: item.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: SUMMARY CARD (style donut KPI) */}
            <div className="space-y-6">

              <div className="rounded-2xl bg-white p-6 shadow-sm border">
                <p className="text-sm text-slate-500">Résumé global</p>
                <h3 className="text-2xl font-bold">4,087</h3>
                <p className="text-xs text-slate-400">
                  Total bénéficiaires cumulés
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm border">
                <p className="text-sm text-slate-500 mb-3">Répartition</p>

                {/* Fake donut style (simple CSS replacement) */}
                <div className="relative h-40 w-40 mx-auto rounded-full border-[12px] border-slate-200 border-t-blue-500 border-r-green-500 border-b-orange-400 border-l-slate-300" />

                <div className="mt-4 space-y-2 text-sm">
                  <p>🔵 Éducation</p>
                  <p>🟢 Santé</p>
                  <p>🟠 Alphabétisation</p>
                </div>
              </div>

            </div>
          </div>

          {/* STATS GRID (like second dashboard row) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white p-5 shadow-sm border"
              >
                <p className="text-sm text-slate-500">{stat.label}</p>
                <p className="text-xl font-bold text-slate-900">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}