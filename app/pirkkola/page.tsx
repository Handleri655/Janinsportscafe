import type { Metadata } from "next";
import Link from "next/link";
import { LoopingMutedVideo } from "@/components/LoopingMutedVideo";
import { AllergenLegend } from "@/components/AllergenLegend";
import { HoursTable } from "@/components/HoursTable";
import { MenuSection } from "@/components/MenuSection";
import { mapsUrl, phones, locations } from "@/lib/site";
import { pirkkolaKitchen } from "@/lib/menus";

export const metadata: Metadata = {
  title: "Pirkkola — lounasravintola & pelit",
  description:
    "Buffet-lounas, keittiöannokset, biljardi ja darts Pirkkolassa. Aukioloajat, ruokalista ja yhteystiedot.",
};

const loc = locations.pirkkola;

export default function PirkkolaPage() {
  return (
    <div className="bg-cream-50">
      <section className="relative isolate min-h-[min(70vh,520px)] overflow-hidden border-b border-cream-200 text-cream-50">
        <div className="absolute inset-0 z-0">
          <LoopingMutedVideo
            src="/pirkkola-hero.mp4"
            className="absolute left-1/2 top-1/2 h-full w-auto max-w-none min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover [filter:hue-rotate(-10deg)_saturate(0.88)_contrast(1.04)_brightness(1.02)]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-neutral-950/86 via-stone-950/82 to-neutral-950/78"
            aria-hidden
          />
        </div>
        <div className="relative z-10 mx-auto flex max-w-6xl min-h-[min(70vh,520px)] flex-col justify-end px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-soft">
              Uimahallin ravintola
            </p>
            <h1 className="mt-3 font-display text-4xl tracking-tight text-balance sm:text-5xl">
              {loc.title}
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
                href="/tilausruokailut"
                className="inline-flex rounded-full border border-cream-200/40 px-5 py-2.5 text-sm font-semibold text-cream-50 backdrop-blur-sm hover:bg-white/10"
              >
                Tilausruokailut →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6 lg:space-y-24 lg:px-8 lg:py-20">
        <section aria-labelledby="pirkkola-hours">
          <h2 id="pirkkola-hours" className="sr-only">
            Aukioloajat ja lounas
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <HoursTable title="Aukioloajat" rows={loc.hours} />
            <HoursTable title="Buffet-lounas — ruokailuajat" rows={loc.lunchHours} />
          </div>
          <p className="mt-6 rounded-2xl border border-cream-200 bg-white px-5 py-4 text-center text-sm font-semibold text-brand-900 shadow-sm">
            {loc.takeawayPrice}
          </p>
        </section>

        <section className="rounded-3xl border border-cream-200 bg-white p-8 shadow-sm lg:p-10">
          <h2 className="font-display text-2xl text-brand-900">Keittiö & menu</h2>
          <p className="mt-3 max-w-2xl text-brand-800/90">
            Á la carte -lista löytyy alta. Kysy halutessasi päivän erikoisuuksista tiskiltä —
            keittiöstä löytyy usein jotain pientä uutta ja lämmintä.
          </p>
          <div className="mt-10">
            <MenuSection
              sectionId="pirkkola-keittio"
              title="Keittiön annokset"
              intro="Hinnat voivat vaihdella — varmistathan ajantasaiset hinnat ravintolassa."
              items={pirkkolaKitchen}
            />
          </div>
          <div className="mt-10">
            <AllergenLegend />
          </div>
        </section>

        <section aria-labelledby="pirkkola-games">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <h2 id="pirkkola-games" className="font-display text-3xl text-brand-900">
                Pelit
              </h2>
              <ul className="mt-6 space-y-4">
                {loc.games.map((g) => (
                  <li
                    key={g.name}
                    className="flex items-center justify-between rounded-2xl border border-cream-200 bg-white px-5 py-4 shadow-sm"
                  >
                    <span className="font-semibold text-brand-900">{g.name}</span>
                    <span className="tabular-nums font-medium text-accent">{g.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="w-full max-w-md rounded-3xl bg-brand-900 p-8 text-cream-50">
              <p className="font-display text-xl">Soita ja varaa ruokailu</p>
              <p className="mt-3 text-sm text-cream-100/85">
                Tilausruokailut ja ryhmät: katso{" "}
                <Link href="/tilausruokailut" className="font-semibold underline-offset-2 hover:underline">
                  tilausruokailut-sivulta
                </Link>{" "}
                tai soita suoraan.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={phones.pirkkola1.href}
                  className="rounded-xl bg-white/10 px-4 py-3 text-center font-semibold hover:bg-white/15"
                >
                  {phones.pirkkola1.label}
                </a>
                <a
                  href={phones.pirkkola2.href}
                  className="rounded-xl bg-white/10 px-4 py-3 text-center font-semibold hover:bg-white/15"
                >
                  {phones.pirkkola2.label}
                </a>
              </div>
            </aside>
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
              href="/yhteystiedot"
              className="inline-flex rounded-full border border-brand-800/30 px-5 py-2.5 text-sm font-semibold text-brand-900 hover:bg-white"
            >
              Kaikki yhteystiedot
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
