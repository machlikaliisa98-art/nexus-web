"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "FONS",
    formerName: "AI Studio",
    tagline: "The Knowledge Layer for Human Conversation",
    description:
      "FONS transforms human conversations into structured, discoverable and accessible knowledge. It combines intelligent media production with speech, language and content intelligence to help ideas move from raw conversation to meaningful knowledge.",
    href: "/products/ai-studio",
    status: "FONS",
    statusDetail: "Return for Wisdom",
    statusColor: "amber",

    workflow: [
      "Conversation",
      "Speech Intelligence",
      "Language Intelligence",
      "Ideas",
      "Questions",
      "Topics",
      "Perspectives",
      "Knowledge",
      "Discovery",
    ],
  },
  {
    name: "Nexus Link",
    tagline: "AI-powered Financial Infrastructure",
    description:
      "Nexus Link connects mobile money agents, banks and insurance providers through intelligent liquidity management, business intelligence, risk and fraud intelligence, insurance integration and responsible financial services.",
    href: "/products/nexus-link",

    status:
      "Awaiting Admission into the National Bank of Rwanda Regulatory Sandbox",
    statusDetail: "",
    statusColor: "cyan",

    workflow: [
      "Mobile Money Agent",
      "Transaction Intelligence",
      "Business Intelligence",
      "Liquidity Monitoring",
      "Risk Intelligence",
      "Fraud Detection",
      "Insurance",
      "Bank Integration",
      "Financial Services",
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-[#050816] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="max-w-4xl">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300">
            Products
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Intelligent systems built around real-world problems.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Nexus Inc. builds technology platforms that turn complex,
            fragmented information into useful intelligence, infrastructure
            and experiences.
          </p>
        </div>

        {/* Product Cards */}

        <div className="mt-16 space-y-12">
          {products.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]"
            >
              <div className="p-7 sm:p-10 lg:p-12">
                {/* Product identity */}

                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    {product.formerName && (
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                        Nexus Inc. Product
                      </p>
                    )}

                    {product.formerName && (
                      <p className="mt-2 text-sm text-slate-500">
                        Formerly known as {product.formerName}
                      </p>
                    )}

                    <h3 className="mt-3 text-4xl font-bold md:text-5xl">
                      {product.name}
                    </h3>

                    <p className="mt-3 text-lg font-semibold text-cyan-400">
                      {product.tagline}
                    </p>
                  </div>

                  <div
                    className={`w-fit rounded-full px-4 py-2 text-sm font-semibold ${
                      product.statusColor === "amber"
                        ? "border border-amber-500/30 bg-amber-500/10 text-amber-300"
                        : "border border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                    }`}
                  >
                    {product.status}
                    {product.statusDetail && (
                      <span className="ml-2 opacity-80">
                        · {product.statusDetail}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}

                <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-300">
                  {product.description}
                </p>

                {/* Workflow */}

                <div className="mt-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    System Workflow
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {product.workflow.map((step, index) => (
                      <div
                        key={step}
                        className="flex items-center gap-2"
                      >
                        <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                          {step}
                        </span>

                        {index < product.workflow.length - 1 && (
                          <span
                            aria-hidden="true"
                            className="text-cyan-400"
                          >
                            →
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href={product.href}
                    className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400"
                  >
                    Explore {product.name}
                    <span className="ml-2">→</span>
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    Contact Nexus Inc.
                  </Link>
                </div>
              </div>

              {/* FONS visual identity */}

              {product.name === "FONS" && (
                <div className="border-t border-white/10 bg-black/20 px-7 py-8 sm:px-10">
                  <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:justify-start">
                    <div className="relative h-20 w-20 shrink-0">
                      <Image
                        src="/images/products/fons-logo.png"
                        alt="FONS logo"
                        fill
                        sizes="80px"
                        className="object-contain"
                      />
                    </div>

                    <div>
                      <p className="text-2xl font-semibold">FONS</p>
                      <p className="mt-1 text-slate-400">
                        Return for Wisdom.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}