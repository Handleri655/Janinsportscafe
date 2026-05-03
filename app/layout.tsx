import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteJsonLd } from "@/components/SiteJsonLd";
import { company } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://janin-sport-cafe.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} — Lounas & sporttibaari Helsingissä`,
    template: `%s · ${company.name}`,
  },
  description:
    "Uimahallin lounasravintola Pirkkolassa ja sporttibaari Maunulassa. Buffet-lounas, keittiöannokset, biljardi ja darts — lämmin palvelu.",
  keywords: [
    "lounas Helsinki",
    "buffet Pirkkola",
    "sporttibaari Maunula",
    "biljardi Helsinki",
    "Janin Lounas",
  ],
  openGraph: {
    type: "website",
    locale: "fi_FI",
    siteName: company.name,
    title: `${company.name} — Lounasta, peliä ja hyvää fiilistä`,
    description:
      "Kaksi toimipistettä Helsingissä: Pirkkolan uimahallin ravintola ja Maunulan sporttibaari.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="min-h-dvh antialiased">
        <SiteJsonLd />
        <a
          href="#sisalto"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-brand-900 px-4 py-2 text-sm font-semibold text-white shadow-lg transition focus:translate-y-0 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
        >
          Hyppää sisältöön
        </a>
        <SiteHeader />
        <main id="sisalto">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
