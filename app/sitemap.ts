import type { MetadataRoute } from "next";
import { getPublicSiteUrl } from "@/lib/publicSiteUrl";

const base = getPublicSiteUrl();

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
