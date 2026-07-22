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
  metadataBase: new URL("https://www.nexusinc.ai"),
  title: {
    default: "Nexus Inc.",
    template: "%s | Nexus Inc.",
  },
  description:
    "Nexus Inc. is an African deep technology company building sovereign artificial intelligence, digital infrastructure, and enterprise platforms for the continent.",
  keywords: [
    "Artificial Intelligence",
    "Africa AI",
    "Nexus Inc.",
    "Machine Learning",
    "Digital Infrastructure",
    "Research",
    "Technology",
    "Enterprise Software",
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
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}