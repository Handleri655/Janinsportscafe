import type { Metadata } from "next";
import Link from "next/link";
import { AllergenLegend } from "@/components/AllergenLegend";
import { HoursTable } from "@/components/HoursTable";
import { MenuSection } from "@/components/MenuSection";
import { mapsUrl, locations } from "@/lib/site";
import { maunulaKitchen } from "@/lib/menus";

export const metadata: Metadata = {
  title: "Maunula — sporttibaari",
  description:
    "Biljardi, darts, flipperi ja pöytäpelejä Maunulassa. Aukioloajat, snack-menu ja osoite.",
};

const loc = locations.maunula;

const offerings = ["Biljardi", "Darts", "Flipperi", "Useita pöytäpelejä"] as const;

export default function MaunulaPage() {
  return (
    <div className="bg-cream-50">
      <section className="border-b border-cream-200 bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950 px-4 py-14 text-cream-50 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-soft">
            Sporttibaari
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-tight text-balance sm:text-5xl">
            Maunula — Sport Bar & Cafe
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-cream-100/90">{loc.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={mapsUrl(loc.mapQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-cream-50 px-5 py-2.5 text-sm font-semibold text-brand-950 hover:bg-white"
            >
              Avaa kartta
            </a>
            <Link
              href="/yhteystiedot"
              className="inline-flex rounded-full border border-cream-200/40 px-5 py-2.5 text-sm font-semibold text-cream-50 hover:bg-white/10"
            >
              Yhteystiedot →
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6 lg:space-y-24 lg:px-8 lg:py-20">
        <section className="grid gap-8 lg:grid-cols-2">
          <HoursTable title="Aukioloajat" rows={loc.hours} />
          <div className="rounded-2xl border border-cream-200 bg-white p-6 shadow-sm">
            <h2 className="font-display text-xl text-brand-900">Tarjonta</h2>
            <ul className="mt-4 space-y-3">
              {offerings.map((item) => (
                <li key={item} className="flex items-center gap-3 text-brand-800">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-brand-800/85">{loc.facebookHint}</p>
          </div>
        </section>

        <section className="rounded-3xl border border-cream-200 bg-white p-8 shadow-sm lg:p-10">
          <MenuSection
            sectionId="maunula-snacks"
            title="Ruokalista"
            intro="Rentoja annoksia peli-iltaan — tarkista allergiat ja päivän tarjonta paikan päällä."
            items={maunulaKitchen}
          />
          <div className="mt-10">
            <AllergenLegend />
          </div>
        </section>

        <section className="rounded-3xl border border-dashed border-brand-800/25 bg-cream-100/60 p-8">
          <h2 className="font-display text-2xl text-brand-900">Yhteystiedot</h2>
          <address className="mt-4 not-italic text-brand-800/92">
            <p className="text-lg font-semibold text-brand-950">{loc.addressLine}</p>
            <p>{loc.postal}</p>
          </address>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={mapsUrl(loc.mapQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-brand-900 px-5 py-2.5 text-sm font-semibold text-cream-50 hover:bg-brand-800"
            >
              Google Maps
            </a>
            <Link
              href="/pirkkola"
              className="inline-flex rounded-full border border-brand-800/30 px-5 py-2.5 text-sm font-semibold text-brand-900 hover:bg-white"
            >
              Lounas Pirkkolassa →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
