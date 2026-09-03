import type { Metadata } from "next";

import {
  GovernancePrinciples,
  BoardComposition,
  BoardResponsibilities,
  BoardCommittees,
  BoardTimeline,
  BoardCTA,
} from "@/components/board";

export const metadata: Metadata = {
  title: "Board of Directors",
  description:
    "Meet the Board of Directors and governance structure of Nexus Inc., providing independent oversight, strategic direction and responsible governance for the company's long-term growth.",
  alternates: {
    canonical: "https://nexusinc.rw/board",
  },
  openGraph: {
    title: "Board of Directors | Nexus Inc.",
    description:
      "Meet the Board of Directors and governance structure of Nexus Inc., providing independent oversight, strategic direction and responsible governance for the company's long-term growth.",
    url: "https://nexusinc.rw/board",
    siteName: "Nexus Inc.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Board of Directors | Nexus Inc.",
    description:
      "Meet the Board of Directors and governance structure of Nexus Inc., providing independent oversight, strategic direction and responsible governance for the company's long-term growth.",
  },
};

export default function BoardPage() {
  return (
    <main className="bg-[#050816] text-white">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl px-8 py-32 text-center">

          <p className="uppercase tracking-[0.45em] text-cyan-400">
            Board of Directors
          </p>

          <h1
            className="mx-auto mt-8 max-w-5xl text-6xl leading-tight md:text-7xl"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Independent Governance.
            <span className="block text-cyan-400">
              Responsible Innovation.
            </span>
          </h1>

          <p className="mx-auto mt-10 max-w-4xl text-xl leading-10 text-gray-300">
            The Board of Directors provides independent oversight,
            strategic direction and governance that enables Nexus Inc.
            to build responsible artificial intelligence, resilient
            digital infrastructure and sustainable long-term value.
          </p>

        </div>

      </section>

      <GovernancePrinciples />

      <BoardComposition />

      <BoardResponsibilities />

      <BoardCommittees />

      <BoardTimeline />

      <BoardCTA />

    </main>
  );
}