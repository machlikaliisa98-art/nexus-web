import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://nexus-web-nu-eight.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Nexus Inc. | African Deep Technology Company",
    template: "%s | Nexus Inc.",
  },

  description:
    "Nexus Inc. is a Rwandan deep technology company building artificial intelligence, digital infrastructure and enterprise platforms for Africa and the global digital economy.",

  keywords: [
    "Nexus Inc.",
    "Nexus Inc Rwanda",
    "Nexus Rwanda",
    "African Deep Technology",
    "Artificial Intelligence",
    "Africa AI",
    "AI Research",
    "Machine Learning",
    "Digital Infrastructure",
    "Enterprise Software",
    "AI Infrastructure",
    "African Technology",
    "Nexus Link",
    "AI Studio",
  ],

  authors: [
    {
      name: "Nexus Inc.",
      url: SITE_URL,
    },
  ],

  creator: "Nexus Inc.",
  publisher: "Nexus Inc.",
  applicationName: "Nexus Inc.",
  category: "technology",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title: "Nexus Inc. | African Deep Technology Company",

    description:
      "Nexus Inc. is a Rwandan deep technology company building artificial intelligence, digital infrastructure and enterprise platforms for Africa and the global digital economy.",

    url: SITE_URL,

    siteName: "Nexus Inc.",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Nexus Inc. | African Deep Technology Company",

    description:
      "Nexus Inc. is a Rwandan deep technology company building artificial intelligence, digital infrastructure and enterprise platforms for Africa and the global digital economy.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",

  "@type": "Organization",

  "@id": `${SITE_URL}/#organization`,

  name: "Nexus Inc.",

  legalName: "Nexus Inc.",

  url: SITE_URL,

  description:
    "Nexus Inc. is a Rwandan deep technology company building artificial intelligence, digital infrastructure and enterprise platforms for Africa and the global digital economy.",

  foundingLocation: {
    "@type": "Place",
    name: "Kigali, Rwanda",
  },

  areaServed: {
    "@type": "Continent",
    name: "Africa",
  },

  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Artificial Intelligence Research",
    "Digital Infrastructure",
    "Enterprise Software",
    "AI Systems",
    "Technology",
    "Deep Technology",
  ],

  employee: [
    {
      "@type": "Person",

      name: "Andrew Kyamagero",

      jobTitle: "Co-Founder & Chief Executive Officer",
    },

    {
      "@type": "Person",

      name: "James Kaliisa",

      jobTitle: "Co-Founder & Chief Technology Officer",
    },

    {
      "@type": "Person",

      name: "Qassim Abdul Karim",

      jobTitle: "Co-Founder & Chief Product Officer",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}