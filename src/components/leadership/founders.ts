export interface Expertise {
  title: string;
  description: string;
}

export interface Founder {
  slug: string;
  name: string;
  title: string;
  image: string;
  intro: string;
  philosophy: string;
  responsibilities: string[];
  biography: string[];
  expertise: Expertise[];
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

    expertise: [
      {
        title: "Corporate Strategy",
        description:
          "Leads the company's long-term strategic direction and organizational growth.",
      },
      {
        title: "Artificial Intelligence",
        description:
          "Shapes Nexus Inc.'s AI vision while contributing to AI research initiatives.",
      },
      {
        title: "Partnership Development",
        description:
          "Builds strategic relationships with governments, investors and enterprise partners.",
      },
      {
        title: "Executive Leadership",
        description:
          "Provides executive leadership across the organization while driving strategic execution.",
      },
    ],
  },

  {
    slug: "james-kaliisa",

    name: "James Kaliisa",

    title: "Co-Founder & Chief Technology Officer",

    image: "/team/kaliisa.png",

    intro:
      "James Kaliisa leads Nexus Inc.'s engineering, artificial intelligence research and technology strategy. Having studied and practiced law before transitioning into technology, he brings a multidisciplinary perspective to building secure, scalable and intelligent systems for Africa.",

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
      "James Kaliisa is the Co-Founder and Chief Technology Officer of Nexus Inc., where he leads the company's engineering, artificial intelligence research and technology strategy.",

      "He studied law and practiced as a legal professional before transitioning into technology, bringing a multidisciplinary perspective to software engineering, systems architecture and artificial intelligence.",

      "At Nexus Inc., he oversees the design and development of the company's AI platforms, enterprise software and digital infrastructure while leading engineering strategy and research initiatives.",

      "His work focuses on building scalable technologies that strengthen Africa's digital independence through homegrown innovation, resilient infrastructure and responsible artificial intelligence.",

      "He believes Africa's future competitiveness will depend on its ability to develop, own and export foundational technologies created by African engineers and researchers.",
    ],

    expertise: [
      {
        title: "Artificial Intelligence",
        description:
          "Leads AI architecture, research and deployment across Nexus platforms.",
      },
      {
        title: "Software Engineering",
        description:
          "Designs scalable software systems and enterprise-grade platforms.",
      },
      {
        title: "Systems Architecture",
        description:
          "Engineers secure, resilient and scalable technology infrastructure.",
      },
      {
        title: "Research & Development",
        description:
          "Directs technical innovation and emerging technology research.",
      },
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

    expertise: [
      {
        title: "Product Strategy",
        description:
          "Aligns product vision with business objectives and customer needs.",
      },
      {
        title: "User Experience",
        description:
          "Designs intuitive and accessible digital experiences.",
      },
      {
        title: "AI Product Design",
        description:
          "Transforms AI research into practical enterprise products.",
      },
      {
        title: "Innovation",
        description:
          "Drives continuous product improvement and market relevance.",
      },
    ],
  },
];