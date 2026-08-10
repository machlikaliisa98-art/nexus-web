import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.nexusinc.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Nexus Inc. | African Deep Technology Company",
    template: "%s | Nexus Inc.",
  },

  description:
    "Nexus Inc. is an African deep technology company building sovereign artificial intelligence, digital infrastructure, and enterprise platforms for Africa and the global digital economy.",

  keywords: [
    "Nexus Inc.",
    "Nexus Inc AI",
    "Nexus AI",
    "African Artificial Intelligence",
    "Africa AI",
    "Artificial Intelligence",
    "Machine Learning",
    "Digital Infrastructure",
    "Enterprise Software",
    "AI Research",
    "Deep Technology",
    "African Technology",
    "Nexus Link",
    "AI Studio",
  ],

  authors: [
    {
      name: "Nexus Inc.",
      url: siteUrl,
    },
  ],

  creator: "Nexus Inc.",
  publisher: "Nexus Inc.",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Nexus Inc.",
    title: "Nexus Inc. | African Deep Technology Company",
    description:
      "Nexus Inc. builds sovereign artificial intelligence, digital infrastructure, and enterprise platforms for Africa and the global digital economy.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexus Inc. | African Deep Technology Company",
    description:
      "Nexus Inc. builds sovereign artificial intelligence, digital infrastructure, and enterprise platforms for Africa and the global digital economy.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nexus Inc.",
  url: siteUrl,
  description:
    "Nexus Inc. is an African deep technology company building sovereign artificial intelligence, digital infrastructure, and enterprise platforms for Africa and the global digital economy.",
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