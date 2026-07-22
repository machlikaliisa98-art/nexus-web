export interface Founder {
  slug: string;
  name: string;
  title: string;
  image: string;
  intro: string;
  philosophy: string;
  responsibilities: string[];
  biography: string[];
}

export const founders: Founder[] = [
  {
    slug: "andrew-kyamagero",
    name: "Andrew Kyamagero",
    title: "Co-Founder & Chief Executive Officer",
    image: "/team/kyamagero.png",

    intro:
      "Andrew Kyamagero leads Nexus Inc.'s strategic direction, partnerships and corporate growth. Bringing together executive leadership, media experience and a passion for artificial intelligence, he is committed to positioning Africa as a creator—not merely a consumer—of advanced technologies.",

    philosophy:
      "Leadership is about building institutions that outlive individuals. Africa's future will be determined by the technologies we choose to create today.",

    responsibilities: [
      "Corporate Strategy",
      "Artificial Intelligence",
      "AI Research",
      "Strategic Partnerships",
      "Business Development",
      "Investor Relations",
      "Corporate Governance",
      "Brand & Communications",
      "International Expansion",
      "Executive Leadership",
    ],

    biography: [
      "Andrew Kyamagero is the Co-Founder and Chief Executive Officer of Nexus Inc., where he provides strategic leadership for the company's long-term vision and growth.",
      "He has built an extensive career in executive leadership, media, corporate communications and public engagement, giving him a unique ability to connect technology with people, institutions and markets.",
      "At Nexus Inc., he leads corporate strategy, investor engagement, partnerships and the commercialization of the company's artificial intelligence platforms.",
      "His interest in artificial intelligence extends beyond business development, contributing to the company's research agenda and helping shape AI-driven solutions designed for African markets.",
      "He believes Africa's next generation of globally competitive companies will emerge from original research, engineering excellence and technologies built on the continent.",
    ],
  },

  {
    slug: "james-kaliisa",
    name: "James Kaliisa",
    title: "Co-Founder & Chief Technology Officer",
    image: "/team/kaliisa.png",

    intro:
      "James Kaliisa oversees Nexus Inc.'s engineering, AI research and technology architecture. A lawyer by training who transitioned into software engineering through self-directed learning, he leads the company's technical vision.",

    philosophy:
      "Technology should not only solve problems. It should build independence. Africa deserves to own the intelligence, infrastructure and platforms that define its future.",

    responsibilities: [
      "Technology Strategy",
      "Artificial Intelligence",
      "AI Research",
      "Software Engineering",
      "Systems Architecture",
      "Infrastructure Engineering",
      "Cloud Architecture",
      "Cybersecurity",
      "Research & Development",
      "Product Engineering",
    ],

    biography: [
      "James Kaliisa is the Co-Founder and Chief Technology Officer of Nexus Inc.",
      "Originally trained as a lawyer, he practiced law before transitioning into technology through years of independent study in software engineering, artificial intelligence and systems architecture.",
      "He leads the development of Nexus Inc.'s AI platforms, software infrastructure and engineering strategy.",
      "His work focuses on designing scalable technologies capable of solving African challenges while reducing dependence on imported digital infrastructure.",
      "His long-term vision is to establish Nexus Inc. among the companies building foundational AI technologies originating from Africa.",
    ],
  },

  {
    slug: "qassim-abdul-karim",
    name: "Qassim Abdul Karim",
    title: "Co-Founder & Chief Product Officer",
    image: "/team/qassim.png",

    intro:
      "Qassim Abdul Karim leads product strategy and user experience at Nexus Inc., ensuring every solution combines advanced technology with practical usability for businesses and communities across Africa.",

    philosophy:
      "Great technology succeeds when it solves real human problems through simple, intuitive and impactful experiences.",

    responsibilities: [
      "Product Strategy",
      "AI Product Design",
      "Product Innovation",
      "Product Management",
      "User Experience",
      "Customer Research",
      "Platform Design",
      "Product Roadmap",
      "Cross-functional Leadership",
    ],

    biography: [
      "Qassim Abdul Karim is the Co-Founder and Chief Product Officer of Nexus Inc.",
      "With an academic background in Sports Science and a strong interest in artificial intelligence, he brings a multidisciplinary perspective to product development.",
      "He leads the design, planning and evolution of Nexus Inc.'s product portfolio, ensuring every platform aligns with customer needs and business strategy.",
      "Working closely with engineering and executive leadership, he translates emerging technologies into products capable of delivering measurable impact.",
      "His mission is to create intuitive, accessible and innovative AI products that accelerate Africa's digital transformation.",
    ],
  },
];