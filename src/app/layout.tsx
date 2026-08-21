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

export const metadata: Metadata = {
  metadataBase: new URL("https://nexus-web-nu-eight.vercel.app"),

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
      url: "https://nexus-web-nu-eight.vercel.app",
    },
  ],

  creator: "Nexus Inc.",
  publisher: "Nexus Inc.",

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
    canonical: "https://nexus-web-nu-eight.vercel.app",
  },

  openGraph: {
    title: "Nexus Inc. | African Deep Technology Company",
    description:
      "Nexus Inc. builds sovereign artificial intelligence, digital infrastructure, and enterprise platforms for Africa and the global digital economy.",
    url: "https://nexus-web-nu-eight.vercel.app",
    siteName: "Nexus Inc.",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexus Inc. | African Deep Technology Company",
    description:
      "Nexus Inc. builds sovereign artificial intelligence, digital infrastructure, and enterprise platforms for Africa and the global digital economy.",
  },
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
      <body>{children}</body>
    </html>
  );
}