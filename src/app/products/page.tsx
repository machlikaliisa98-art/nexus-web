import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Nexus Inc. products, including FONS — Return for Wisdom and Nexus Link, intelligent platforms for knowledge and financial infrastructure.",
  alternates: {
    canonical: "https://nexusinc.rw/products",
  },
  openGraph: {
    title: "Products | Nexus Inc.",
    description:
      "Explore Nexus Inc. products, including FONS — Return for Wisdom and Nexus Link, intelligent platforms for knowledge and financial infrastructure.",
    url: "https://nexusinc.rw/products",
    siteName: "Nexus Inc.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | Nexus Inc.",
    description:
      "Explore Nexus Inc. products, including FONS — Return for Wisdom and Nexus Link, intelligent platforms for knowledge and financial infrastructure.",
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* Navigation */}

      <header className="border-b border-white/10 bg-[#050816]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:text-cyan-400"
          >
            Nexus Inc.
          </Link>

          <Link
            href="/"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            ΓåÉ Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Nexus Inc. Products
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Technology that turns complexity into intelligence.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300 sm:text-xl">
            Our platforms are designed around real-world systems where
            information, people and technology intersect.
          </p>
        </div>
      </section>

      {/* Products */}

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="space-y-16">
          {/* FONS */}

          <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
            <div className="p-7 sm:p-10 lg:p-14">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-5">
                    <div className="relative h-20 w-20 shrink-0 sm:h-24 sm:w-24">
                      <Image
                        src="/images/products/fons-logo.png"
                        alt="FONS logo"
                        fill
                        sizes="96px"
                        className="object-contain"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                        Nexus Inc.
                      </p>

                      <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
                        FONS
                      </h2>

                      <p className="mt-1 text-slate-400">
                        Return for Wisdom.
                      </p>
                    </div>
                  </div>

                  <h3 className="mt-10 text-2xl font-semibold text-cyan-400 sm:text-3xl">
                    The Knowledge Layer for Human Conversation
                  </h3>

                  <p className="mt-6 text-lg leading-9 text-slate-300">
                    FONS transforms human conversations into structured,
                    discoverable and accessible knowledge. The system combines
                    media production, speech intelligence, language
                    intelligence and content understanding to help ideas move
                    from conversation into knowledge.
                  </p>
                </div>

                <div className="w-fit rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-300">
                  FONS
                </div>
              </div>

              {/* FONS workflow */}

              <div className="mt-14">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  From Conversation to Knowledge
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Human Conversation",
                    "Speech Intelligence",
                    "Language Intelligence",
                    "Content Structure",
                    "Ideas",
                    "Questions",
                    "Topics",
                    "Perspectives",
                    "Knowledge",
                    "Discovery",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="rounded-2xl border border-white/10 bg-black/20 p-5"
                    >
                      <span className="text-xs font-semibold text-cyan-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="mt-3 font-semibold text-white">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/products/ai-studio"
                  className="inline-flex rounded-full bg-cyan-500 px-7 py-3 font-semibold text-white transition hover:bg-cyan-400"
                >
                  Explore FONS ΓåÆ
                </Link>
              </div>
            </div>
          </article>

          {/* Nexus Link */}

          <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
            <div className="p-7 sm:p-10 lg:p-14">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                    Nexus Link
                  </p>

                  <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                    Intelligent Financial Infrastructure
                  </h2>

                  <p className="mt-6 text-lg leading-9 text-slate-300">
                    Nexus Link connects mobile money agents, banks and
                    insurance providers through intelligent financial
                    infrastructure designed around liquidity, risk,
                    transactions and responsible financial services.
                  </p>
                </div>

                <div className="w-fit rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                  Awaiting Admission into the National Bank of Rwanda
                  Regulatory Sandbox
                </div>
              </div>

              <div className="mt-14">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  From Transactions to Financial Intelligence
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Mobile Money Agent",
                    "Transaction Intelligence",
                    "Business Intelligence",
                    "Liquidity Monitoring",
                    "Risk Intelligence",
                    "Fraud Detection",
                    "Insurance",
                    "Bank Integration",
                    "Financial Services",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="rounded-2xl border border-white/10 bg-black/20 p-5"
                    >
                      <span className="text-xs font-semibold text-cyan-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="mt-3 font-semibold text-white">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/products/nexus-link"
                  className="inline-flex rounded-full bg-cyan-500 px-7 py-3 font-semibold text-white transition hover:bg-cyan-400"
                >
                  Explore Nexus Link ΓåÆ
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Bottom navigation */}

      <section className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-slate-400 transition hover:text-white"
          >
            ΓåÉ Back to Home
          </Link>

          <Link
            href="/contact"
            className="text-cyan-400 transition hover:text-cyan-300"
          >
            Contact Nexus Inc. ΓåÆ
          </Link>
        </div>
      </section>
    </main>
  );
}