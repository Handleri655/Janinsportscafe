import type { MetadataRoute } from "next";
import { getPublicSiteUrl } from "@/lib/publicSiteUrl";

const base = getPublicSiteUrl();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
