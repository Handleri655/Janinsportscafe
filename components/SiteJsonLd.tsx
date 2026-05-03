import { getPublicSiteUrl } from "@/lib/publicSiteUrl";
import { company, locations, phones } from "@/lib/site";

const siteUrl = getPublicSiteUrl();

export function SiteJsonLd() {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: company.name,
      legalName: company.legalName,
      url: siteUrl,
      taxID: company.businessId,
    },
    {
      "@type": "Restaurant",
      "@id": `${siteUrl}/#pirkkola`,
      name: `${company.name} — Pirkkola`,
      url: `${siteUrl}/pirkkola`,
      telephone: [phones.pirkkola1.href, phones.pirkkola2.href],
      address: {
        "@type": "PostalAddress",
        streetAddress: locations.pirkkola.addressLine,
        addressLocality: "Helsinki",
        postalCode: "00630",
        addressCountry: "FI",
      },
      servesCuisine: ["Buffet", "Suomalainen lounas"],
      parentOrganization: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "Restaurant",
      "@id": `${siteUrl}/#maunula`,
      name: `${company.name} — Maunula`,
      url: `${siteUrl}/maunula`,
      address: {
        "@type": "PostalAddress",
        streetAddress: locations.maunula.addressLine,
        addressLocality: "Helsinki",
        postalCode: "00630",
        addressCountry: "FI",
      },
      servesCuisine: ["Sporttibaari", "Snack"],
      parentOrganization: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: company.name,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "fi-FI",
    },
  ];

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
