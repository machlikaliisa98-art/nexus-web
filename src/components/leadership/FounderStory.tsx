export default function FounderStory() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-10 md:p-16">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl">
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          Our Story
        </span>

        <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Different Paths. One Mission.
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-9 text-zinc-300">
          <p>
            Nexus Inc. was founded by professionals from media and executive
            leadership, law and technology, and sports science and product
            innovation. Although their journeys began in different professions,
            they were united by one conviction:
          </p>

          <blockquote className="border-l-4 border-cyan-500 pl-6 text-2xl font-semibold italic leading-10 text-white">
            Africa must move from consuming intelligence to creating it.
          </blockquote>

          <p>
            The future of artificial intelligence will not be defined solely by
            algorithms. It will be defined by who owns the research, the
            infrastructure, the data and the platforms powering those
            algorithms.
          </p>

          <p>
            At Nexus Inc., we believe Africa possesses the talent, creativity
            and ambition required to become a global producer of advanced
            technologies. Our work is driven by research, engineering
            excellence, strategic partnerships and an unwavering commitment to
            building technologies conceived, developed and owned on the
            continent.
          </p>

          <p>
            Every platform we build advances a single vision:
          </p>

          <blockquote className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-6 text-xl font-semibold leading-9 text-cyan-300">
            To redefine Africa's role in the global AI race by building
            intelligent technologies that empower industries, governments,
            businesses and communities across the continent.
          </blockquote>
        </div>
      </div>
    </section>
  );
}