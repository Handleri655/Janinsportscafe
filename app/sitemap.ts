import type { MetadataRoute } from "next";

const base =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://janin-sport-cafe.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/pirkkola", "/maunula", "/plotti", "/tilausruokailut", "/yhteystiedot"];
  const now = new Date();
  return paths.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
