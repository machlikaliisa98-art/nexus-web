"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "AI Studio",
    tagline: "The AI Operating System for Modern Media Production",
    description:
      "An enterprise AI platform that transforms long-form media into production-ready content using speech intelligence, language intelligence, restoration, mastering, analytics, and publishing workflows.",
    image: "/images/products/ai-studio.png",
    href: "/products/ai-studio",

    status: "Scheduled for Launch",
    statusDetail: "1 August 2026",
    statusColor: "amber",

    features: [
      "Speech Intelligence",
      "Language Intelligence",
      "Episode Detection",
      "AI Mastering",
      "Publishing",
      "Analytics",
    ],
  },
  {
    name: "Nexus Link",
    tagline: "AI-powered Financial Infrastructure",
    description:
      "Connecting mobile money agents, banks and insurance companies through intelligent liquidity management, fraud detection, digital financial profiles and responsible lending.",
    image: "/images/products/nexus-link.jpg",
    href: "/products/nexus-link",

    status:
      "Awaiting Admission into the National Bank of Rwanda Regulatory Sandbox",
    statusDetail: "",
    statusColor: "cyan",

    features: [
      "Liquidity Engine",
      "Business Intelligence",
      "Fraud Detection",
      "Insurance",
      "Digital Financial Profiles",
      "Responsible Lending",
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-[#050816] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300">
            Products
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Platforms engineered for Africa&apos;s future.
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            Nexus Inc. is building intelligent platforms that solve real-world
            challenges across media production and financial infrastructure.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {products.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[420px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority={product.name === "AI Studio"}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center p-10">
                  <p className="font-semibold text-cyan-400">
                    {product.tagline}
                  </p>

                  <div
                    className={`mt-5 inline-flex w-fit items-center rounded-full px-4 py-2 text-sm font-semibold ${
                      product.statusColor === "amber"
                        ? "border border-amber-500/30 bg-amber-500/10 text-amber-300"
                        : "border border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                    }`}
                  >
                    {product.status}
                    {product.statusDetail && (
                      <span className="ml-2 opacity-80">
                        • {product.statusDetail}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 text-4xl font-bold">{product.name}</h3>

                  <p className="mt-6 leading-8 text-slate-300">
                    {product.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                      href={product.href}
                      className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400"
                    >
                      {product.name === "AI Studio"
                        ? "Explore AI Studio"
                        : "Explore Nexus Link"}
                    </Link>

                    <Link
                      href="/contact"
                      className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                    >
                      Request Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}