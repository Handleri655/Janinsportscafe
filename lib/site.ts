export const company = {
  name: "Janin Lounas & Sport Cafe",
  legalName: "Fish Corner Hyvönen Oy",
  businessId: "1512462-0",
} as const;

export const phones = {
  pirkkola1: { label: "040 687 9606", href: "tel:+358406879606" },
  pirkkola2: { label: "044 706 2000", href: "tel:+358447062000" },
} as const;

export const locations = {
  pirkkola: {
    slug: "pirkkola",
    shortTitle: "Pirkkola",
    title: "Pirkkola — uimahallin ravintola",
    tagline:
      "Buffet-lounas, keittiöannokset, biljardi ja darts — lähellä luontoa ja liikuntaa.",
    addressLine: "Pirkkolan metsätie 6",
    postal: "00630 Helsinki",
    mapQuery: "Pirkkolan+metsätie+6,+00630+Helsinki",
    hours: [
      { label: "Ma–pe", value: "7.30–21.00" },
      { label: "La", value: "9.00–20.00" },
      { label: "Su", value: "9.00–19.00" },
    ],
    lunchHours: [
      { label: "Arkisin", value: "10.00–15.00" },
      { label: "Lauantaisin", value: "10.30–17.00" },
      { label: "Sunnuntaisin", value: "10.30–17.00" },
    ],
    takeawayPrice: "Take away: 17,90 € / kg",
    games: [
      { name: "Biljardi", price: "12 € / h" },
      { name: "Darts", price: "8 € / h" },
    ],
  },
  maunula: {
    slug: "maunula",
    shortTitle: "Maunula",
    title: "Maunula — sporttibaari",
    tagline:
      "Rentoa pelifiilistä: biljardi, darts, flipperi ja pöytäpelejä — herkullinen snack-menu.",
    addressLine: "Rajametsäntie 3",
    postal: "00630 Helsinki (Maunula)",
    mapQuery: "Rajametsäntie+3,+00630+Helsinki",
    hours: [
      { label: "Ma", value: "14.00–21.00" },
      { label: "Ti–to", value: "14.00–22.00" },
      { label: "Pe", value: "14.00–24.00" },
      { label: "La", value: "12.00–24.00" },
      { label: "Su", value: "14.00–21.00" },
    ],
    facebookHint:
      "Seuraa meitä Facebookissa ja pysy kartalla tapahtumista ja tarjouksista.",
  },
} as const;

export function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
