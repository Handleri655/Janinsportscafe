import Link from "next/link";
import { company } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-cream-200 bg-brand-900 text-cream-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-xl text-cream-50">{company.name}</p>
          <p className="mt-2 text-sm text-cream-200/90">
            {company.legalName}
            <br />
            Y-tunnus {company.businessId}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-soft">
            Pikavalinnat
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href="/pirkkola"
                className="text-cream-100/90 underline-offset-4 hover:text-white hover:underline"
              >
                Pirkkola — lounas & pelit
              </Link>
            </li>
            <li>
              <Link
                href="/maunula"
                className="text-cream-100/90 underline-offset-4 hover:text-white hover:underline"
              >
                Maunula — sporttibaari
              </Link>
            </li>
            <li>
              <Link
                href="/plotti"
                className="text-cream-100/90 underline-offset-4 hover:text-white hover:underline"
              >
                Plotti — kesäinen ulkoilma
              </Link>
            </li>
            <li>
              <Link
                href="/tilausruokailut"
                className="text-cream-100/90 underline-offset-4 hover:text-white hover:underline"
              >
                Ryhmä- ja tilausruokailut
              </Link>
            </li>
          </ul>
        </div>
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-soft">
            Yhteystiedot
          </p>
          <p className="mt-3 text-sm text-cream-200/90">
            <Link
              href="/yhteystiedot"
              className="font-medium text-white underline-offset-4 hover:underline"
            >
              Avaa yhteystiedot ja kartat →
            </Link>
          </p>
        </div>
      </div>
      <div className="border-t border-brand-800 py-4 text-center text-xs text-cream-200/70">
        © {new Date().getFullYear()} {company.name}
      </div>
    </footer>
  );
}
