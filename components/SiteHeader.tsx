"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav: { href: string; label: string; short?: string }[] = [
  { href: "/", label: "Etusivu" },
  { href: "/pirkkola", label: "Pirkkola" },
  { href: "/maunula", label: "Maunula" },
  { href: "/plotti", label: "Plotti" },
  { href: "/tilausruokailut", label: "Tilausruokailut", short: "Tilaus" },
  { href: "/yhteystiedot", label: "Yhteystiedot", short: "Yhteys" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-cream-200/80 bg-cream-50/95 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-3 py-2.5 sm:px-6 sm:py-3 lg:px-8">
        <div className="flex flex-col gap-2.5 md:flex-row md:items-center md:justify-between md:gap-4">
          <Link
            href="/"
            className="group min-w-0 shrink-0 leading-tight md:max-w-[min(100%,20rem)] lg:max-w-none"
          >
            <span className="font-display text-[1.0625rem] tracking-tight text-brand-900 transition-colors group-hover:text-accent sm:text-lg md:text-xl">
              <span className="text-pretty leading-snug">
                Janin Lounas{" "}
                <span className="whitespace-nowrap">&amp; Sport Cafe</span>
              </span>
            </span>
            <span className="mt-1 block max-w-[16rem] text-[11px] font-medium leading-snug text-brand-800/75 sm:max-w-none sm:text-xs md:mt-1.5 md:max-w-[18rem] lg:mt-2 lg:max-w-none">
              Helsinki · Pirkkola &amp; Maunula
            </span>
          </Link>

          <nav
            className="scrollbar-hide -mx-3 flex touch-pan-x gap-1 overflow-x-auto overscroll-x-contain px-3 pb-0.5 [-webkit-overflow-scrolling:touch] md:mx-0 md:flex-wrap md:justify-end md:gap-x-2 md:gap-y-2 md:overflow-visible md:px-0"
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
                  className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors sm:px-3 sm:text-sm ${
                    active
                      ? "bg-brand-900 text-cream-50"
                      : "text-brand-800 hover:bg-cream-200/90 hover:text-brand-950"
                  }`}
                >
                  {item.short ? (
                    <>
                      <span className="md:hidden">{item.short}</span>
                      <span className="hidden md:inline">{item.label}</span>
                    </>
                  ) : (
                    item.label
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
