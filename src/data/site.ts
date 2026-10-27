export const brand = {
  name: "Far From Home",
  email: "saikoud618@gmail.com",
  travellers: "Saikou and Tri",
  year: "2026",
  footerNote: "Built with Astro. Hosted on GitHub Pages.",
  socialNote: "Instagram and TikTok links are on the way.",
};

export const nav = [
  { label: "Journal", href: "#journal" },
  { label: "About", href: "#about" },
  { label: "Work with us", href: "#contact" },
];

export const hero = {
  eyebrow: "Travel journal",
  title: "Far From Home",
  intro:
    "We're Saikou and Tri. This is our travel journal: the places we go, the people we meet, and the things we want to remember.",
  primary: { label: "Read the journal", href: "#journal" },
  secondary: { label: "Say hello", href: `mailto:${brand.email}` },
  routeStart: "HOME",
  routeEnd: "FAR",
};

export const journal = {
  number: "01",
  title: "Journal",
  standfirst:
    "The first entries are on the way. Routes, stops, and the parts that do not fit in a caption will live here.",
  emptyTitle: "No entries yet.",
  emptyCopy:
    "The first route is still being planned. Check back soon, or email us in the meantime.",
  emptyAction: { label: "Say hello", href: `mailto:${brand.email}` },
};

export const about = {
  number: "02",
  title: "About",
  standfirst:
    "Far From Home is a shared journal by Saikou and Tri. It is a draft for now: the first routes, photos, and notes will be added as the project takes shape.",
  people: [
    {
      name: "Saikou",
      detail:
        "From Guinea. Based in Germany. Studies computer science at Nordakademie. Builds this site.",
    },
    {
      name: "Tri",
      detail: "The other half of Far From Home. More about Tri soon.",
    },
  ],
  draftNote: "This is a draft before the MVP. Nothing here is a finished route yet.",
};

export const contact = {
  number: "03",
  title: "Work with us",
  statement: "Travel with us.",
  copy: "For collaborations, route ideas, or a simple hello, email us. If you have a place, a stay, or an idea that fits the journal, we would like to hear it.",
  note: brand.socialNote,
};
