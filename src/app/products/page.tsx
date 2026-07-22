import PageHero from "../components/PageHero";

export default function ProductsPage() {
  const products = [
    {
      name: "Nexus Atlas",
      category: "Artificial Intelligence for Agriculture",
      description:
        "An intelligent agriculture platform that combines artificial intelligence, predictive analytics and data-driven insights to support farmers, agribusinesses and policymakers with smarter decisions.",
      highlights: [
        "Predictive crop intelligence",
        "AI-powered decision support",
        "Data-driven farm insights",
      ],
    },
    {
      name: "Nexus Link",
      category: "Financial Infrastructure",
      description:
        "A financial infrastructure platform connecting banks, insurers and mobile money agents through intelligent liquidity management, analytics and secure digital services.",
      highlights: [
        "Agent liquidity management",
        "Bank integration",
        "Real-time analytics",
      ],
    },
    {
      name: "LexVision",
      category: "Legal Intelligence",
      description:
        "An AI-powered legal intelligence platform that enhances legal research, document analysis, compliance and organizational knowledge management.",
      highlights: [
        "Legal research",
        "Document intelligence",
        "Compliance support",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <PageHero
        eyebrow="PRODUCTS"
        title="Products Built on Research"
        description="Every Nexus platform is the result of scientific research, engineering excellence and a commitment to solving meaningful challenges across industries."
      />

      {/* Products */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="space-y-10">

          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 transition-all duration-300 hover:border-blue-500 hover:bg-white/10"
            >
              <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">

                <div>
                  <p className="uppercase tracking-[0.3em] text-sm text-blue-400">
                    {product.category}
                  </p>

                  <h2
                    className="mt-4 text-5xl"
                    style={{ fontFamily: "Times New Roman, serif" }}
                  >
                    {product.name}
                  </h2>

                  <p
                    className="mt-8 text-lg leading-9 text-gray-300"
                    style={{ fontFamily: "Times New Roman, serif" }}
                  >
                    {product.description}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0A1022] p-8">
                  <h3
                    className="text-2xl"
                    style={{ fontFamily: "Times New Roman, serif" }}
                  >
                    Key Capabilities
                  </h3>

                  <ul className="mt-6 space-y-4">
                    {product.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}

        </div>

      </section>

      {/* Closing Statement */}

      <section className="border-t border-white/10 py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Built Today. Ready for Tomorrow.
          </h2>

          <p
            className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Every Nexus product shares the same foundation: rigorous
            research, responsible artificial intelligence, scalable
            engineering and a commitment to delivering practical impact.
            As our research evolves, so do the capabilities of every
            platform we build.
          </p>

        </div>

      </section>
    </main>
  );
}