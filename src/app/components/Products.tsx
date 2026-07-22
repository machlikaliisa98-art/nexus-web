import Link from "next/link";

export default function Products() {
  const products = [
    {
      name: "Nexus Atlas",
      category: "Artificial Intelligence for Agriculture",
      description:
        "Precision agriculture powered by artificial intelligence, predictive analytics and intelligent decision support.",
    },
    {
      name: "Nexus Link",
      category: "Financial Infrastructure",
      description:
        "Connecting banks, insurers and mobile money agents through intelligent financial infrastructure.",
    },
    {
      name: "LexVision",
      category: "Legal Intelligence",
      description:
        "AI-powered legal research, document intelligence and business compliance for modern organizations.",
    },
  ];

  return (
    <section className="bg-[#060A1A] py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto">

          <p
            className="uppercase tracking-[0.4em] text-sm text-blue-400"
            style={{ fontFamily: "Arial" }}
          >
            PRODUCTS
          </p>

          <h2
            className="mt-6 text-5xl md:text-6xl leading-tight text-white"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            AI Products Built
            <br />
            For Real-World Impact
          </h2>

          <p
            className="mt-8 text-lg leading-9 text-gray-300"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Every Nexus product is built on years of research and
            engineered to solve meaningful challenges across
            agriculture, finance, law and enterprise operations.
          </p>

        </div>

        {/* Products */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {products.map((product) => (

            <div
              key={product.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-white/10"
            >

              <p className="uppercase tracking-widest text-sm text-blue-400">
                {product.category}
              </p>

              <h3
                className="mt-4 text-4xl text-white"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                {product.name}
              </h3>

              <p className="mt-6 leading-8 text-gray-300">
                {product.description}
              </p>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="mt-16 text-center">

          <Link
            href="/products"
            className="inline-flex rounded-full bg-blue-600 px-8 py-4 transition hover:bg-blue-500"
          >
            View All Products
          </Link>

        </div>

      </div>
    </section>
  );
}