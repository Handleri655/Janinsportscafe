import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plotti — kesäinen ulkoilmapaikka",
  description:
    "Palvelemme kesäisin Plotilla säiden salliessa. Grilliruokaa, virvokkeita ja jäätelöä — anniskelulupa.",
};

const intro =
  "Palvelemme kesäisin myös Plotilla säiden salliessa. Plotilta löytyy grilliruokaa virvokkeista jäätelöihin. Anniskeluluvat löytyvät myös.";

export default function PlottiPage() {
  return (
    <div className="bg-cream-50">
      <section className="border-b border-cream-200 bg-brand-900">
        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-soft">
            Kesä ja ulkoilma
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-tight text-cream-50 text-balance sm:text-5xl">
            Plotti
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-100/92">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/pirkkola"
              className="inline-flex rounded-full border border-cream-200/35 px-5 py-2.5 text-sm font-semibold text-cream-50 transition hover:bg-white/10"
            >
              Pirkkolan ravintola →
            </Link>
            <Link
              href="/yhteystiedot"
              className="inline-flex rounded-full bg-cream-50 px-5 py-2.5 text-sm font-semibold text-brand-950 transition hover:bg-white"
            >
              Yhteystiedot
            </Link>
          </div>
        </div>
        <div className="relative mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
          <figure className="overflow-hidden rounded-3xl border border-cream-200/20 bg-brand-800 shadow-2xl shadow-brand-950/40 ring-1 ring-white/10">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/plotti.png"
                alt="Plotin ulkoallasalue kesällä: uimalampi, hiekkaranta ja viheralueita"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1152px) 100vw, 1152px"
              />
            </div>
            <figcaption className="border-t border-white/10 bg-brand-950/40 px-6 py-4 text-sm text-cream-100/85 backdrop-blur-sm">
              Plotin kesäinen tunnelma — palvelu säiden salliessa.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="rounded-3xl border border-cream-200 bg-white p-8 shadow-sm lg:p-10">
          <h2 className="font-display text-2xl text-brand-900">Ajankohtaista</h2>
          <p className="mt-4 text-brand-800/90">
            Tarkemmat sesongin ajat ja tarjonta julkaistaan lähempänä kesää — tiedot löydät myös{" "}
            <Link href="/pirkkola" className="font-semibold text-brand-950 underline-offset-2 hover:underline">
              Pirkkolan sivuilta
            </Link>{" "}
            ja{" "}
            <Link href="/yhteystiedot" className="font-semibold text-brand-950 underline-offset-2 hover:underline">
              yhteystiedoista
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
