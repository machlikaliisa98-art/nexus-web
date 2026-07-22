import Link from "next/link";

export default function About() {
  return (
    <section className="bg-[#050816] py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Left Side */}

        <div>

          <p
            className="uppercase tracking-[0.4em] text-sm text-blue-400"
            style={{ fontFamily: "Arial" }}
          >
            WHO WE ARE
          </p>

          <h2
            className="mt-6 text-5xl leading-tight text-white md:text-6xl"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Engineering the Future of Artificial Intelligence from Africa
          </h2>

          <p
            className="mt-10 text-lg leading-9 text-gray-300"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Nexus Inc. is a Rwandan artificial intelligence company dedicated
            to advancing scientific research, enterprise software, and digital
            infrastructure. We develop intelligent technologies that empower
            governments, businesses, and communities while positioning Africa
            as a global contributor to AI innovation.
          </p>

          <Link
            href="/about"
            className="mt-10 inline-flex rounded-full bg-blue-600 px-8 py-4 transition hover:bg-blue-500"
          >
            Learn More About Nexus
          </Link>

        </div>

        {/* Right Side */}

        <div className="grid grid-cols-2 gap-6">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-5xl font-bold text-blue-400">AI</h3>
            <p className="mt-3 text-gray-300">
              Research & Development
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-5xl font-bold text-blue-400">3</h3>
            <p className="mt-3 text-gray-300">
              Flagship Products
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-5xl font-bold text-blue-400">∞</h3>
            <p className="mt-3 text-gray-300">
              Possibilities Through Innovation
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-5xl font-bold text-blue-400">RW</h3>
            <p className="mt-3 text-gray-300">
              Proudly Built in Rwanda
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}