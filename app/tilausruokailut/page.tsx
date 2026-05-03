import type { Metadata } from "next";
import Link from "next/link";
import { AllergenLegend } from "@/components/AllergenLegend";
import { phones, locations } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tilausruokailut ja ryhmät — Pirkkola",
  description:
    "Joukkue- ja ryhmäruokailut Pirkkolassa — myös lounasajan jälkeen klo 22 asti. Hinta ja esimerkkiruokalista.",
};

const mains = [
  "Lihapullat ruskeassa kastikkeessa (G, L, M)",
  "Kananpojan paistileike (G, L, M)",
  "Jauhelihalasagne (L)",
] as const;

const veggie = [
  "Kasvispihvit (G, L)",
  "Vegekofta (V, G, L, M, K)",
  "Maissipihvit (V, G, L, M, K)",
  "Halloumi–punajuuripihvi (G, VL)",
] as const;

export default function TilausruokailutPage() {
  const loc = locations.pirkkola;
  return (
    <div className="bg-cream-50">
      <section className="border-b border-cream-200 bg-brand-900 px-4 py-14 text-cream-50 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl tracking-tight text-balance sm:text-5xl">
            Tilausruokailut Pirkkolassa
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-cream-100/90">
            Joukkue- ja ryhmäruokailut — myös lounasajan jälkeen klo 22 asti. Räätälöimme tarjoilun
            ryhmänne tarpeiden mukaan.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={phones.pirkkola1.href}
              className="rounded-full bg-cream-50 px-6 py-3 text-sm font-semibold text-brand-950 hover:bg-white"
            >
              Soita {phones.pirkkola1.label}
            </a>
            <a
              href={phones.pirkkola2.href}
              className="rounded-full border border-cream-200/35 px-6 py-3 text-sm font-semibold text-cream-50 hover:bg-white/10"
            >
              Soita {phones.pirkkola2.label}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-12 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <section className="rounded-3xl border border-cream-200 bg-white p-8 shadow-sm">
          <h2 className="font-display text-2xl text-brand-900">Hinta lounasajan jälkeen</h2>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-accent">
            16,50 € / hlö{" "}
            <span className="text-lg font-medium text-brand-800">(vähintään 20 hlö)</span>
          </p>
          <p className="mt-4 text-brand-800/90">
            Lounaspöytään kuuluu runsas salaattipöytä sekä pääruokia — alla muutama esimerkki siitä,
            millaista lämmintä ruokaa keittiöstä voi löytyä.
          </p>
        </section>

        <section className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-3xl border border-cream-200 bg-cream-100/50 p-8">
            <h2 className="font-display text-xl text-brand-900">Esimerkkejä pääruoista</h2>
            <ul className="mt-4 space-y-3 text-brand-800">
              {mains.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent" aria-hidden>
                    ·
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-cream-200 bg-cream-100/50 p-8">
            <h2 className="font-display text-xl text-brand-900">Kasvis- ja vegaaniset</h2>
            <ul className="mt-4 space-y-3 text-brand-800">
              {veggie.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent" aria-hidden>
                    ·
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <AllergenLegend />

        <section className="rounded-3xl border border-dashed border-brand-800/25 bg-white p-8">
          <h2 className="font-display text-xl text-brand-900">Varaa ruokailu</h2>
          <p className="mt-3 text-brand-800/90">
            Puhelin:{" "}
            <a href={phones.pirkkola1.href} className="font-semibold text-brand-950 hover:underline">
              {phones.pirkkola1.label}
            </a>{" "}
            tai{" "}
            <a href={phones.pirkkola2.href} className="font-semibold text-brand-950 hover:underline">
              {phones.pirkkola2.label}
            </a>
          </p>
          <p className="mt-4 text-sm text-brand-800/80">
            Osoite: {loc.addressLine}, {loc.postal}
          </p>
          <Link
            href="/pirkkola"
            className="mt-6 inline-flex rounded-full bg-brand-900 px-5 py-2.5 text-sm font-semibold text-cream-50 hover:bg-brand-800"
          >
            Pirkkolan sivulle →
          </Link>
        </section>
      </div>
    </div>
  );
}
