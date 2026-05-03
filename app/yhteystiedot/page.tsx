import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { mapsUrl, phones, locations, company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Yhteystiedot",
  description:
    "Janin Lounas & Sport Cafe — osoitteet Pirkkolassa ja Maunulassa, puhelinnumerot ja karttalinkit.",
};

function LocationBlock({
  title,
  subtitle,
  addressLine,
  postal,
  mapQuery,
  phonesList,
  extra,
}: {
  title: string;
  subtitle: string;
  addressLine: string;
  postal: string;
  mapQuery: string;
  phonesList?: { label: string; href: string }[];
  extra?: ReactNode;
}) {
  return (
    <article className="rounded-3xl border border-cream-200 bg-white p-8 shadow-sm">
      <h2 className="font-display text-2xl text-brand-900">{title}</h2>
      <p className="mt-1 text-sm font-medium uppercase tracking-wider text-accent">{subtitle}</p>
      <address className="mt-6 not-italic text-brand-800/92">
        <p className="text-lg font-semibold text-brand-950">{addressLine}</p>
        <p>{postal}</p>
      </address>
      {phonesList?.length ? (
        <div className="mt-6 space-y-2">
          <p className="text-sm font-semibold text-brand-900">Puhelin</p>
          <ul className="space-y-2">
            {phonesList.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  className="text-lg font-semibold text-brand-950 underline-offset-2 hover:underline"
                >
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {extra}
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={mapsUrl(mapQuery)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full bg-brand-900 px-5 py-2.5 text-sm font-semibold text-cream-50 hover:bg-brand-800"
        >
          Avaa Google Maps
        </a>
      </div>
    </article>
  );
}

export default function ContactPage() {
  const p = locations.pirkkola;
  const m = locations.maunula;

  return (
    <div className="bg-cream-50">
      <section className="border-b border-cream-200 bg-gradient-to-r from-cream-100 to-cream-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-4xl tracking-tight text-brand-900 sm:text-5xl">
            Yhteystiedot
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-brand-800/90">
            Kaksi osoitetta Helsingissä — valitse lounas ja pelit Pirkkolassa tai sporttibaarin
            tunnelma Maunulassa.
          </p>
          <p className="mt-6 text-sm text-brand-800/75">
            {company.legalName} · Y-tunnus {company.businessId}
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        <LocationBlock
          title={p.shortTitle}
          subtitle="Lounasravintola & pelit"
          addressLine={p.addressLine}
          postal={p.postal}
          mapQuery={p.mapQuery}
          phonesList={[phones.pirkkola1, phones.pirkkola2]}
          extra={
            <div className="mt-6">
              <Link
                href="/pirkkola"
                className="text-sm font-semibold text-brand-950 underline-offset-2 hover:underline"
              >
                Siirry Pirkkolan sivulle →
              </Link>
            </div>
          }
        />
        <LocationBlock
          title={m.shortTitle}
          subtitle="Sporttibaari"
          addressLine={m.addressLine}
          postal={m.postal}
          mapQuery={m.mapQuery}
          extra={
            <div className="mt-6">
              <Link
                href="/maunula"
                className="text-sm font-semibold text-brand-950 underline-offset-2 hover:underline"
              >
                Siirry Maunulan sivulle →
              </Link>
            </div>
          }
        />
      </div>
    </div>
  );
}
