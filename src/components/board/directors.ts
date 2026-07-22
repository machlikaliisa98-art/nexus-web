export interface BoardPosition {
  slug: string;
  title: string;
  name: string;
  status: "Vacant" | "Appointed";
  image: string;
  summary: string;
  responsibilities: string[];
  expertise: string[];
  committees: string[];
}

export const boardPositions: BoardPosition[] = [
  {
    slug: "chairperson",
    title: "Chairperson",
    name: "Appointment Pending",
    status: "Vacant",
    image: "/images/board/placeholder.png",
    summary:
      "Provides independent leadership to the Board, ensuring effective governance, strategic oversight and accountability across the Company.",

    responsibilities: [
      "Lead the Board of Directors",
      "Promote effective corporate governance",
      "Oversee long-term strategy",
      "Ensure Board independence",
      "Facilitate Board meetings"
    ],

    expertise: [
      "Corporate Governance",
      "Strategy",
      "Leadership",
      "Technology",
      "Risk Management"
    ],

    committees: [
      "Governance & Nominations Committee"
    ]
  },

  {
    slug: "vice-chairperson",
    title: "Vice Chairperson",
    name: "Appointment Pending",
    status: "Vacant",
    image: "/images/board/placeholder.png",

    summary:
      "Supports the Chairperson while strengthening governance, Board effectiveness and strategic oversight.",

    responsibilities: [
      "Support Board leadership",
      "Chair meetings when delegated",
      "Coordinate committee activities",
      "Strengthen governance"
    ],

    expertise: [
      "Leadership",
      "Corporate Governance",
      "Finance",
      "Innovation"
    ],

    committees: [
      "Governance & Nominations Committee"
    ]
  },

  {
    slug: "independent-director-1",
    title: "Independent Non-Executive Director",
    name: "Appointment Pending",
    status: "Vacant",
    image: "/images/board/placeholder.png",

    summary:
      "Provides objective judgement, independent oversight and strategic guidance while safeguarding stakeholder interests.",

    responsibilities: [
      "Independent oversight",
      "Strategic advice",
      "Risk supervision",
      "Performance monitoring"
    ],

    expertise: [
      "Technology",
      "Finance",
      "Governance"
    ],

    committees: [
      "Audit & Risk Committee"
    ]
  },

  {
    slug: "independent-director-2",
    title: "Independent Non-Executive Director",
    name: "Appointment Pending",
    status: "Vacant",
    image: "/images/board/placeholder.png",

    summary:
      "Provides independent judgement and contributes specialised expertise to strengthen Board decision-making.",

    responsibilities: [
      "Corporate oversight",
      "Technology governance",
      "Strategic planning"
    ],

    expertise: [
      "Artificial Intelligence",
      "Cybersecurity",
      "Innovation"
    ],

    committees: [
      "Technology & AI Committee"
    ]
  },

  {
    slug: "independent-director-3",
    title: "Independent Non-Executive Director",
    name: "Appointment Pending",
    status: "Vacant",
    image: "/images/board/placeholder.png",

    summary:
      "Supports sustainable growth through independent oversight, strategic insight and governance excellence.",

    responsibilities: [
      "Strategy oversight",
      "Investment guidance",
      "Governance"
    ],

    expertise: [
      "Corporate Strategy",
      "Investment",
      "International Business"
    ],

    committees: [
      "Strategy & Investment Committee"
    ]
  },

  {
    slug: "company-secretary",
    title: "Company Secretary",
    name: "Appointment Pending",
    status: "Vacant",
    image: "/images/board/placeholder.png",

    summary:
      "Supports the Board through statutory compliance, governance administration and effective Board operations.",

    responsibilities: [
      "Board administration",
      "Corporate compliance",
      "Meeting coordination",
      "Governance support"
    ],

    expertise: [
      "Corporate Law",
      "Compliance",
      "Governance"
    ],

    committees: [
      "Board Secretariat"
    ]
  }
];