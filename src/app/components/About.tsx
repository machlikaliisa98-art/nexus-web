import Link from "next/link";

const pillars = [
  {
    title: "Artificial Intelligence",
    description:
      "Building sovereign AI systems designed, trained and deployed for African realities and global applications.",
  },
  {
    title: "Digital Infrastructure",
    description:
      "Developing the data platforms, computing systems and digital infrastructure required for Africa's technological future.",
  },
  {
    title: "Enterprise Platforms",
    description:
      "Creating intelligent software platforms that help governments, institutions and businesses operate more effectively.",
  },
  {
    title: "Research First",
    description:
      "Every product begins with research, evidence and long-term thinking rather than short-lived technology trends.",
  },
];

export default function About() {
  return (
    <section className="border-t border-zinc-900 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Why Nexus Exists
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Africa should not only consume artificial intelligence.
            <br />
            It should create it.
          </h2>

          <p className="mt-8 text-xl leading-10 text-zinc-400">
            Nexus Inc. exists to build sovereign artificial intelligence,
            digital infrastructure and enterprise technologies that are
            designed, engineered and owned in Africa. We believe the
            continent must participate in shaping the future of intelligence—
            not merely adopt technologies developed elsewhere.
          </p>

          <p className="mt-6 text-lg leading-9 text-zinc-500">
            Based in Rwanda, Nexus Inc. combines artificial intelligence
            research, software engineering and digital infrastructure to
            develop technology for African markets and the wider global
            economy.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-cyan-500"
            >
              <h3 className="text-2xl font-semibold text-white">
                {pillar.title}
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="/about"
            className="inline-flex rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
          >
            Discover Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}