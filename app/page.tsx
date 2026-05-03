import Image from "next/image";
import Link from "next/link";
import { LocationCard } from "@/components/LocationCard";
import { locations } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
            alt=""
            fill
            priority
            className="object-cover opacity-55"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-950/55" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 sm:gap-10 sm:px-6 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:px-8 lg:py-28">
          <div className="max-w-xl min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-soft sm:text-sm sm:tracking-[0.2em]">
              Helsinki · Pirkkola & Maunula
            </p>
            <h1 className="mt-3 font-display text-[clamp(1.65rem,6.5vw,3.65rem)] leading-[1.06] tracking-tight text-cream-50 text-balance sm:mt-4 sm:text-5xl lg:text-6xl">
              Lounasta, peliä ja hyvää fiilistä
            </h1>
            <p className="mt-5 text-base leading-relaxed text-cream-100/92 sm:mt-6 sm:text-lg">
              Uimahallin lounasravintola Pirkkolassa ja sporttibaari Maunulassa — sama lämmin
              palvelu, kaksi eri tunnelmaa.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-cream-50">
              <li className="rounded-full border border-cream-200/35 bg-cream-50/10 px-4 py-2 backdrop-blur-sm">
                Buffet-lounas
              </li>
              <li className="rounded-full border border-cream-200/35 bg-cream-50/10 px-4 py-2 backdrop-blur-sm">
                Biljardi & darts
              </li>
              <li className="rounded-full border border-cream-200/35 bg-cream-50/10 px-4 py-2 backdrop-blur-sm">
                Ryhmäruokailut
              </li>
            </ul>
          </div>
          <div className="flex w-full max-w-md flex-col gap-3 lg:pb-2">
            <Link
              href="/pirkkola"
              className="group flex items-stretch overflow-hidden rounded-2xl bg-cream-50 text-brand-950 shadow-lg transition hover:bg-white"
            >
              <div className="relative min-h-[4.75rem] w-24 shrink-0 sm:w-[8.5rem]">
                <Image
                  src="/pirkkola-aerial.png"
                  alt="Pirkkolan liikuntapuisto ilmakuvassa"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 96px, 136px"
                />
              </div>
              <span className="flex min-h-[4.75rem] flex-1 items-center justify-between gap-3 px-4 py-4 sm:px-5">
                <span>
                  <span className="block font-display text-lg">Pirkkola</span>
                  <span className="text-sm text-brand-800/85">Lounas & pelit</span>
                </span>
                <span aria-hidden className="text-xl">
                  →
                </span>
              </span>
            </Link>
            <Link
              href="/maunula"
              className="group flex items-stretch overflow-hidden rounded-2xl border border-cream-200/40 bg-brand-800/40 text-cream-50 backdrop-blur-md transition hover:bg-brand-800/55"
            >
              <div className="relative min-h-[4.75rem] w-24 shrink-0 sm:w-[8.5rem]">
                <Image
                  src="/maunula-interior.png"
                  alt="Maunulan sporttibaarin tiski ja tunnelma"
                  fill
                  className="object-cover brightness-[0.92] transition duration-500 group-hover:scale-[1.04] group-hover:brightness-[1]"
                  sizes="(max-width: 640px) 96px, 136px"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-brand-950/25"
                  aria-hidden
                />
              </div>
              <span className="flex min-h-[4.75rem] flex-1 items-center justify-between gap-3 px-4 py-4 sm:px-5">
                <span>
                  <span className="block font-display text-lg">Maunula</span>
                  <span className="text-sm text-cream-100/85">Sporttibaari</span>
                </span>
                <span aria-hidden className="text-xl">
                  →
                </span>
              </span>
            </Link>
            <Link
              href="/tilausruokailut"
              className="text-center text-sm font-semibold text-cream-100/90 underline-offset-4 hover:text-white hover:underline"
            >
              Joukkue- ja ryhmäruokailut Pirkkolassa →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl tracking-tight text-brand-900 sm:text-4xl">
            Valitse toimipiste
          </h2>
          <p className="mt-4 text-lg text-brand-800/90">
            Avaa aukioloajat, ruokalista ja yhteystiedot yhdellä klikkauksella.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <LocationCard
            title={locations.pirkkola.shortTitle}
            description={locations.pirkkola.tagline}
            href="/pirkkola"
            mapQuery={locations.pirkkola.mapQuery}
            imageSrc="/pirkkola-aerial.png"
            imageAlt="Pirkkolan liikuntapuisto ilmakuvassa — uimahalli ja urheilukeskus metsän keskellä"
          />
          <LocationCard
            title={locations.maunula.shortTitle}
            description={locations.maunula.tagline}
            href="/maunula"
            mapQuery={locations.maunula.mapQuery}
            imageSrc="/maunula-interior.png"
            imageAlt="Maunulan sporttibaari — baaritiski ja lämmin tunnelma"
          />
        </div>
      </section>

      <section className="border-y border-cream-200 bg-cream-100/80">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <h2 className="font-display text-2xl text-brand-900 sm:text-3xl">
              Miksi meille kannattaa poiketa?
            </h2>
            <ul className="mt-6 space-y-4 text-brand-800/92">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
                <span>
                  <strong className="text-brand-950">Nälkäiset ratkaisut</strong> — buffet-lounas
                  Pirkkolassa ja maittavat snack-annokset molemmissa osoitteissa.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
                <span>
                  <strong className="text-brand-950">Rentoa tekemistä</strong> — biljardi ja darts,
                  Maunulassa myös flipperi ja pöytäpelejä.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
                <span>
                  <strong className="text-brand-950">Ryhmät hallussa</strong> — joukkue- ja
                  ryhmäruokailut Pirkkolassa myös lounasajan jälkeen.
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-cream-200 bg-white p-8 shadow-sm">
            <p className="font-display text-xl text-brand-900">Tilausruokailut</p>
            <p className="mt-3 text-brand-800/90">
              Joukkue- ja ryhmäruokailut Pirkkolassa — myös lounasajan jälkeen klo 22 asti.
            </p>
            <Link
              href="/tilausruokailut"
              className="mt-6 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800 hover:text-cream-50"
            >
              Lue lisää ja varaa →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
