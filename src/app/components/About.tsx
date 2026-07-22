import Link from "next/link";

export default function About() {
  return (
    <section className="border-b border-white/10 bg-[#050816] py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid gap-20 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-blue-400">
              ABOUT NEXUS
            </p>

            <h2
              className="mt-6 text-5xl leading-tight"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Building Intelligence That Solves Real World Problems
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-gray-300">
              Nexus Inc. is a Rwandan artificial intelligence company
              dedicated to advancing research, engineering and enterprise
              innovation. We design intelligent systems that help
              governments, businesses and institutions make better
              decisions, automate complex workflows and unlock new
              opportunities for growth.
            </p>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              Our mission is to develop world class AI technologies from
              Africa for the world while maintaining the highest standards
              of responsible innovation, transparency and long term value.
            </p>

            <Link
              href="/company/about"
              className="mt-10 inline-flex rounded-full bg-blue-600 px-8 py-4 transition hover:bg-blue-500"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}