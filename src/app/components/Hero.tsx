import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#050816]">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-8">
        <div className="max-w-5xl">
          <p className="text-xs uppercase tracking-[0.45em] text-blue-400">
            NEXUS INC.
          </p>

          <h1
            className="mt-8 text-6xl leading-tight md:text-7xl lg:text-8xl"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Building the Next Generation of
            <span className="block text-blue-400">
              Intelligent Systems
            </span>
          </h1>

          <p className="mt-10 max-w-4xl text-xl leading-10 text-gray-300">
            Nexus Inc. is a Rwandan deep technology company advancing
            artificial intelligence through world class research,
            enterprise software and intelligent infrastructure that
            empowers governments, businesses and society.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              href="/research"
              className="rounded-full bg-blue-600 px-8 py-4 text-lg transition hover:bg-blue-500"
            >
              Explore Research
            </Link>

            <Link
              href="/products"
              className="rounded-full border border-white/20 px-8 py-4 text-lg transition hover:border-blue-400"
            >
              Explore Products
            </Link>
          </div>

          {/* Statistics */}
          <div className="mt-24 grid grid-cols-2 gap-10 border-t border-white/10 pt-12 md:grid-cols-4">
            <div>
              <h3
                className="text-4xl"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                AI
              </h3>

              <p className="mt-3 text-gray-400">
                Research Driven
              </p>
            </div>

            <div>
              <h3
                className="text-4xl"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                Enterprise
              </h3>

              <p className="mt-3 text-gray-400">
                Intelligent Platforms
              </p>
            </div>

            <div>
              <h3
                className="text-4xl"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                Africa
              </h3>

              <p className="mt-3 text-gray-400">
                Built in Rwanda
              </p>
            </div>

            <div>
              <h3
                className="text-4xl"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                Future
              </h3>

              <p className="mt-3 text-gray-400">
                Responsible Innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}