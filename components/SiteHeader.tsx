"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const nav = [
  { href: "/", label: "Etusivu" },
  { href: "/pirkkola", label: "Pirkkola" },
  { href: "/maunula", label: "Maunula" },
  { href: "/plotti", label: "Plotti" },
  { href: "/tilausruokailut", label: "Tilausruokailut" },
  { href: "/yhteystiedot", label: "Yhteystiedot" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-cream-200/80 bg-cream-50/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 flex-col leading-tight">
          <span className="font-display text-lg tracking-tight text-brand-900 transition-colors group-hover:text-accent sm:text-xl">
            Janin Lounas & Sport Cafe
          </span>
          <span className="text-xs font-medium text-brand-800/70">
            Helsinki · Pirkkola & Maunula
          </span>
        </Link>

        <nav
          className="flex flex-wrap items-center justify-end gap-x-1 gap-y-2 text-sm font-medium sm:gap-x-2"
          aria-label="Päävalikko"
        >
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1.5 transition-colors ${
                  active
                    ? "bg-brand-900 text-cream-50"
                    : "text-brand-800 hover:bg-cream-200/80 hover:text-brand-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
