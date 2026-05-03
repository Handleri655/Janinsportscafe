/**
 * Canonical origin for metadata, sitemap, robots and JSON-LD.
 * Valid NEXT_PUBLIC_SITE_URL wins; on Vercel we fall back to VERCEL_URL.
 */
export function getPublicSiteUrl(): string {
  const env = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (env && /^https?:\/\//i.test(env)) {
    return env.replace(/\/$/, "");
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//i, "").split("/")[0]?.trim();
    if (host) return `https://${host}`;
  }

  return "https://janin-sport-cafe.vercel.app";
}
