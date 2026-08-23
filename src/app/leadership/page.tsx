import {
  FounderCard,
  FounderStory,
  founders,
} from "@/components/leadership";

export const metadata = {
  title: "Executive Leadership | Nexus Inc.",
  description:
    "Meet the executive leadership team of Nexus Inc., a Rwandan deep technology company building artificial intelligence, digital infrastructure and enterprise platforms for Africa.",
};

export default function LeadershipPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}

      <section className="border-b border-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Executive Leadership
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight lg:text-7xl">
            Building Africa&apos;s AI Future.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-zinc-400">
            Meet the founders leading Nexus Inc.&apos;s mission to create
            world-class artificial intelligence, digital infrastructure and
            technology platforms designed, engineered and owned in Africa.
          </p>
        </div>
      </section>

      {/* Story */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <FounderStory />
      </section>

      {/* Founders */}

      <section className="mx-auto max-w-7xl space-y-32 px-6 pb-32">
        {founders.map((founder, index) => (
          <FounderCard
            key={founder.slug}
            founder={founder}
            reverse={index % 2 === 1}
          />
        ))}
      </section>
    </main>
  );
}