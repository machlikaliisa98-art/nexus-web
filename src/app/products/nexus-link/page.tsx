import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nexus Link",
  description:
    "Nexus Link is intelligent financial infrastructure connecting mobile money agents, banks and insurance providers through transaction, liquidity, risk and financial intelligence.",
  alternates: {
    canonical: "https://nexusinc.rw/products/nexus-link",
  },
  openGraph: {
    title: "Nexus Link | Nexus Inc.",
    description:
      "Nexus Link is intelligent financial infrastructure connecting mobile money agents, banks and insurance providers through transaction, liquidity, risk and financial intelligence.",
    url: "https://nexusinc.rw/products/nexus-link",
    siteName: "Nexus Inc.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Link | Nexus Inc.",
    description:
      "Nexus Link is intelligent financial infrastructure connecting mobile money agents, banks and insurance providers through transaction, liquidity, risk and financial intelligence.",
  },
};

const stages = [
  {
    number: "01",
    title: "Mobile Money Agent",
    description:
      "Nexus Link begins with the agent operating within the everyday cash and mobile money economy.",
  },
  {
    number: "02",
    title: "Transaction Intelligence",
    description:
      "Transaction activity becomes structured information that can reveal business behaviour and operating patterns.",
  },
  {
    number: "03",
    title: "Business Intelligence",
    description:
      "Agents gain visibility into their transactions, activity, records and business performance.",
  },
  {
    number: "04",
    title: "Liquidity Intelligence",
    description:
      "The system is designed to help understand liquidity requirements and connect agents to appropriate financial infrastructure.",
  },
  {
    number: "05",
    title: "Risk & Fraud Intelligence",
    description:
      "Transaction behaviour can support risk analysis and identification of suspicious or unusual activity.",
  },
  {
    number: "06",
    title: "Insurance",
    description:
      "Insurance infrastructure can be connected to the financial profile and operating realities of agents.",
  },
  {
    number: "07",
    title: "Bank Integration",
    description:
      "Nexus Link is designed to connect agents with banks and financial institutions for liquidity and related services.",
  },
  {
    number: "08",
    title: "Responsible Financial Services",
    description:
      "The longer-term system is designed around financial access that is informed by real operating data rather than disconnected assumptions.",
  },
];

export default function NexusLinkPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* Navigation */}

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050816]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/products"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            ← Products
          </Link>

          <div className="hidden items-center gap-6 text-sm sm:flex">
            <Link
              href="/products/ai-studio"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              ← FONS
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Nexus Inc. Product
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Nexus Link
          </h1>

          <p className="mt-5 max-w-3xl text-2xl font-semibold text-cyan-400 sm:text-3xl">
            Intelligent financial infrastructure for the mobile money economy.
          </p>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300 sm:text-xl">
            Nexus Link connects mobile money agents, banks and insurance
            providers through an intelligence layer designed around
            transactions, liquidity, risk and responsible financial services.
          </p>

          <div className="mt-10 inline-flex max-w-3xl rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-4 text-sm font-semibold leading-7 text-cyan-300">
            Awaiting Admission into the National Bank of Rwanda Regulatory
            Sandbox
          </div>
        </div>
      </section>

      {/* Core architecture */}

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              The Architecture
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Connecting transactions to financial intelligence.
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-300">
              Nexus Link is designed as an intelligence and connectivity layer
              around the financial activity of mobile money agents.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Layer 01
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Business Intelligence
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                Transaction behaviour, business activity, records and
                reporting become structured intelligence for the agent.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Layer 02
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Risk & Fraud Intelligence
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                Financial behaviour can support risk assessment, fraud
                detection and more informed financial decision-making.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Layer 03
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Financial Connectivity
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                Banks and insurance providers can connect to the agent through
                an intelligent financial infrastructure layer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System workflow */}

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              System Workflow
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              From everyday transactions to connected financial services.
            </h2>
          </div>

          <div className="mt-14 space-y-3">
            {stages.map((stage) => (
              <div
                key={stage.number}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:grid sm:grid-cols-[80px_250px_1fr] sm:items-center sm:gap-5"
              >
                <span className="text-sm font-semibold text-cyan-400">
                  {stage.number}
                </span>

                <h3 className="mt-3 text-xl font-semibold sm:mt-0">
                  {stage.title}
                </h3>

                <p className="mt-3 leading-8 text-slate-400 sm:mt-0">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence flow */}

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Nexus Link Intelligence
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            A financial control layer for the informal cash economy.
          </h2>

          <div className="mt-14 flex flex-col items-center gap-3">
            {[
              "Agent",
              "Transactions",
              "Business Intelligence",
              "Liquidity",
              "Risk",
              "Insurance",
              "Banking",
              "Financial Services",
            ].map((item, index, items) => (
              <div
                key={item}
                className="flex w-full max-w-md flex-col items-center gap-3"
              >
                <div
                  className={`w-full rounded-2xl border px-6 py-4 font-semibold ${
                    index === items.length - 1
                      ? "border-cyan-400/40 bg-cyan-500/10 text-cyan-300"
                      : "border-white/10 bg-white/[0.035] text-white"
                  }`}
                >
                  {item}
                </div>

                {index < items.length - 1 && (
                  <span className="text-cyan-400">“</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}

      <section>
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/products/ai-studio"
            className="text-slate-400 transition hover:text-white"
          >
            ← Previous: FONS
          </Link>

          <Link
            href="/products"
            className="text-slate-400 transition hover:text-white"
          >
            All Products
          </Link>

          <Link
            href="/contact"
            className="text-cyan-400 transition hover:text-cyan-300"
          >
            Contact Nexus Inc. →
          </Link>
        </div>
      </section>
    </main>
  );
}