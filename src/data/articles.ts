export interface Article {
  slug: string;
  title: string;
  summary: string;
  author: string;
  publication: string;
  date: string;
  category: string;
  readingTime: string;
  featured: boolean;
  cover: string;
  externalUrl?: string;
}

export const articles: Article[] = [
  {
    slug: "the-new-scramble-for-africa-data",

    title:
      "The New Scramble for Africa Won't Be for Minerals. It Will Be for Data",

    summary:
      "Artificial intelligence is reshaping global competition, and Africa's most valuable strategic asset may no longer be beneath the ground but within its digital infrastructure. This article explores why data ownership will define the continent's future prosperity.",

    author: "James Kaliisa",

    publication: "KT Press",

    date: "21 June 2026",

    category: "Artificial Intelligence",

    readingTime: "7 min read",

    featured: true,

    cover: "/insights/data.jpg",

    externalUrl:
      "https://www.ktpress.rw/2026/06/the-new-scramble-for-africa-wont-be-for-minerals-it-will-be-for-data/",
  },

  {
    slug: "african-identity-crisis",

    title: "The African Identity Crisis",

    summary:
      "A reflection on identity, institutions and innovation, examining how Africa's future depends on reclaiming ownership of its ideas, technologies and narrative.",

    author: "James Kaliisa",

    publication: "KT Press",

    date: "29 June 2026",

    category: "Society",

    readingTime: "6 min read",

    featured: false,

    cover: "/insights/identity.jpg",

    externalUrl:
      "https://www.ktpress.rw/2026/06/the-african-identity-crisis/",
  },

  {
    slug: "richest-companies-east-africa",

    title:
      "The Richest Companies in East Africa Are Banks. Should We Be Celebrating?",

    summary:
      "A closer look at the structure of East Africa's economy and what the dominance of financial institutions reveals about industrialization, innovation and long-term economic resilience.",

    author: "James Kaliisa",

    publication: "KT Press",

    date: "17 June 2026",

    category: "Economics",

    readingTime: "8 min read",

    featured: false,

    cover: "/insights/banks.jpg",

    externalUrl:
      "https://www.ktpress.rw/2026/06/the-richest-companies-in-east-africa-are-banks-should-we-be-celebrating/",
  },
];