export type MenuItem = {
  name: string;
  price: string;
  description: string;
};

export const pirkkolaKitchen: MenuItem[] = [
  {
    name: "Lasten hampurilainen",
    price: "12,90 €",
    description:
      "Mehukas 100 g naudan jauhelihapihvi, talon briossisämpylä, cheddarjuusto, rapea salaatti, tomaatti, punasipuli ja talon majoneesi. Vähälaktoosinen.",
  },
  {
    name: "Talon hampurilainen",
    price: "15,90 €",
    description:
      "Isompi 200 g naudan täyslihvipihvi, talon briossisämpylä, cheddarjuusto, rapea salaatti, tomaatti, punasipuli ja talon majoneesi. Vähälaktoosinen.",
  },
  {
    name: "Tuhti hampurilainen",
    price: "19,90 €",
    description:
      "Kaksi 200 g naudan täyslihvipihviä, talon briossisämpylä, cheddarjuusto, rapea salaatti, tomaatti, punasipuli ja talon majoneesi. Tuplasti tavaraa suureen nälkään. Vähälaktoosinen.",
  },
  {
    name: "Makkarakori",
    price: "11,90 €",
    description: "Reilu määrä makkaraa ja paljon rapeita ranskalaisia. Laktoositon.",
  },
  {
    name: "Kanakori",
    price: "11,90 €",
    description:
      "Herkullisen rapeita Kentucky-kanafileitä ja ranskalaisia. Laktoositon.",
  },
  {
    name: "Fish & Chips",
    price: "13,90 €",
    description:
      "Legendaarinen setti: iso, rapea kalapala ja reilusti ranskalaisia. Vähälaktoosinen.",
  },
  {
    name: "Ranskalaiset",
    price: "6,90 €",
    description: "Rapeat ranskalaiset. Laktoositon.",
  },
  {
    name: "Bataattiranskalaiset",
    price: "8,90 €",
    description: "Maukkaat bataattiranskalaiset. Laktoositon.",
  },
  {
    name: "Mozzarellatikut",
    price: "6 kpl 6,90 € · 12 kpl 10,90 €",
    description:
      "Maukkaita tikkuja, joiden sisällä on sulavaa mozzarellajuustoa. Alkupalaksi tai sormiruoaksi.",
  },
  {
    name: "Jalapenopallot",
    price: "6 kpl 6,90 € · 12 kpl 10,90 €",
    description:
      "Juustoa ja pikanttia jalapenoa. Sopivan tulinen annos moneen makuun.",
  },
];

export const maunulaKitchen: MenuItem[] = [
  {
    name: "Talon hampurilainen",
    price: "11,90 €",
    description:
      "Isompi naudan 200 g täyslihvipihvi, talon briossisämpylä, suussa sulavaa cheddarjuustoa, rapea salaatti, mehukas tomaatti, punasipuli ja talon majoneesia. Talossa talon tavalla! Vähälaktoosinen.",
  },
  {
    name: "Tuhti, isoon nälkään",
    price: "14,90 €",
    description:
      "Kaksi reilua 200 g naudan täyslihvipihviä, talon briossisämpylä, suussa sulavaa cheddarjuustoa, rapea salaatti, mehukas tomaatti, punasipuli ja talon majoneesia. Tuplasti tavaraa suureen nälkään! Vähälaktoosinen.",
  },
  {
    name: "Ranskalaiset",
    price: "+3,90 €",
    description: "Lisä burgerille.",
  },
  {
    name: "Bataattiranskalaiset",
    price: "+5,90 €",
    description: "Lisä burgerille.",
  },
  {
    name: "Makkarakori",
    price: "9,90 €",
    description: "Reilu määrä makkaraa ja paljon rapeita ranskalaisia. Laktoositon.",
  },
  {
    name: "Kentuckyn kanakori",
    price: "11,90 €",
    description:
      "Herkullisen rapeita Kentucky-kanafileitä ja ranskalaisia. Laktoositon.",
  },
  {
    name: "Herkkukori bratwursteilla",
    price: "12,90 €",
    description:
      "Suussa sulavia bratwursteja, sipulirenkaita ja lihapullia sekä reilusti maukkaita ristikkoperunoita. Herkullinen sekoitus monenlaista dipattavaa. Laktoositon.",
  },
  {
    name: "Dippitwisti",
    price: "12,90 €",
    description:
      "Sopivan tulisia jalapenopalloja, rapeita sipulirenkaita ja mozzarellatikkuja maalaisperunoiden kera. Tähän annokseen voi jäädä koukkuun!",
  },
  {
    name: "Fish & Chips",
    price: "13,90 €",
    description:
      "Legendaarinen setti: iso, rapea kalapala ja reilusti ranskalaisia. Lisänä sitruunavaahto. Vähälaktoosinen.",
  },
  {
    name: "Ranskalaiset",
    price: "5,90 €",
    description:
      "Rapeat ranskalaiset. Sisältää ketsupin ja valitsemasi majoneesin. Laktoositon.",
  },
  {
    name: "Bataattiranskalaiset",
    price: "7,90 €",
    description: "Maukkaita bataattiranskalaisia. Laktoositon.",
  },
  {
    name: "Mozzarellatikut tai jalapenopallot",
    price: "alk. 6 kpl 6,90 €",
    description:
      "12 kpl 10,90 € · 25 kpl 19,90 €. 6 kpl sisältää 1 dipin, 12 kpl 2 dippiä, 25 kpl 5 dippiä.",
  },
  {
    name: "Salami pizzapala",
    price: "4,50 €",
    description:
      "Tomaattikastiketta, mozzarellajuustoa, provolonejuustoa ja pepperonisalamia.",
  },
  {
    name: "Juustomestarin pizzapala",
    price: "4,50 €",
    description:
      "Sinihomejuustoa, mozzarellajuustoa, provolonejuustoa ja Pecorino Romano -juustoa.",
  },
];
