export default function ProductsPage() {
  const products = [
    {
      name: "Nexus Atlas",
      subtitle: "AI for Smart Agriculture",
      description:
        "An intelligent platform that empowers farmers with precision agriculture, predictive analytics, crop monitoring, and data-driven decision support.",
    },
    {
      name: "Nexus Link",
      subtitle: "Financial Infrastructure",
      description:
        "A digital infrastructure platform connecting banks, insurers, and mobile money agents through intelligent liquidity management, fraud detection, and business analytics.",
    },
    {
      name: "LexVision",
      subtitle: "Legal Intelligence",
      description:
        "An AI-powered legal research and business intelligence platform that enables faster legal analysis, document review, compliance, and decision-making.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-32">
        <p
          className="uppercase tracking-[0.4em] text-sm text-blue-400"
          style={{ fontFamily: "Arial" }}
        >
          PRODUCTS
        </p>

        <h1
          className="mt-6 text-5xl md:text-7xl leading-tight"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Intelligent Products
          <br />
          Built for Real Impact
        </h1>

        <p
          className="mt-10 max-w-4xl text-xl leading-10 text-gray-300"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Every Nexus product is built from our research foundation,
          combining artificial intelligence, secure infrastructure,
          and enterprise-grade engineering to solve meaningful
          challenges across industries.
        </p>
      </section>

      <section className="mx-auto max-w-7xl space-y-10 px-6 pb-32">
        {products.map((product) => (
          <div
            key={product.name}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 transition-all duration-300 hover:border-blue-500 hover:bg-white/10"
          >
            <p className="mb-3 uppercase tracking-widest text-blue-400 text-sm">
              {product.subtitle}
            </p>

            <h2
              className="text-4xl"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              {product.name}
            </h2>

            <p className="mt-6 max-w-4xl leading-9 text-gray-300">
              {product.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}