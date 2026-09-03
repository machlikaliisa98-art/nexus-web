import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "FONS",
  description:
    "FONS is an AI-powered knowledge platform transforming human conversations into structured, discoverable and accessible knowledge.",
};

const productionStages = [
  {
    number: "01",
    title: "Conversation",
    description:
      "FONS begins with human conversation: interviews, podcasts, discussions, lectures and other forms of long-form spoken knowledge.",
  },
  {
    number: "02",
    title: "AI Inspection",
    description:
      "The system examines incoming media and prepares it for intelligent processing.",
  },
  {
    number: "03",
    title: "Speech Intelligence",
    description:
      "Speech is analysed to understand spoken content, speakers and the structure of the conversation.",
  },
  {
    number: "04",
    title: "Language Intelligence",
    description:
      "Language processing helps identify meaning, themes, keywords and relationships within the conversation.",
  },
  {
    number: "05",
    title: "Content Structure",
    description:
      "Long conversations are transformed into meaningful segments, episodes, chapters, topics and other useful structures.",
  },
  {
    number: "06",
    title: "Transformation",
    description:
      "FONS can support editing, restoration and mastering so the original conversation can become production-ready media.",
  },
  {
    number: "07",
    title: "Publishing",
    description:
      "Prepared conversations can move into publishing and distribution while retaining their connection to the underlying source.",
  },
];

const knowledgeLayers = [
  {
    title: "Ideas",
    description:
      "The ideas contained within a conversation become meaningful units of discovery.",
  },
  {
    title: "Questions",
    description:
      "Questions reveal what people are trying to understand and connect conversations to knowledge needs.",
  },
  {
    title: "Topics",
    description:
      "Topics connect related conversations and ideas across different creators and sources.",
  },
  {
    title: "Perspectives",
    description:
      "Different people can express different positions on the same question or subject.",
  },
  {
    title: "Knowledge",
    description:
      "These relationships allow human knowledge to become more organised and discoverable.",
  },
];

export default function FonsPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* Product navigation */}

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050816]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/products"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            ← Products
          </Link>

          <div className="hidden items-center gap-6 text-sm sm:flex">
            <Link
              href="/products/nexus-link"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              Next: Nexus Link →
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.12),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-32">
          <div className="flex flex-col items-center text-center">
            {/* FONS Logo */}

            <div className="relative h-36 w-36 sm:h-44 sm:w-44">
              <Image
                src="/images/products/fons-logo.png"
                alt="FONS logo"
                fill
                priority
                sizes="176px"
                className="object-contain"
              />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
              Nexus Inc.
            </p>

            <h1 className="mt-5 text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
              FONS
            </h1>

            <p className="mt-4 text-lg uppercase tracking-[0.35em] text-amber-300 sm:text-xl">
              Return for Wisdom
            </p>

            <p className="mt-10 max-w-4xl text-2xl font-semibold leading-tight sm:text-4xl">
              The knowledge layer for human conversation.
            </p>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300 sm:text-xl">
              FONS transforms human conversations into structured,
              discoverable and accessible knowledge—helping ideas move across
              people, languages, borders and generations.
            </p>
          </div>
        </div>
      </section>

      {/* Core idea */}

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                The Core Idea
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                The episode is a container. The idea is the destination.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-9 text-slate-300">
              <p>
                A long conversation contains far more than an episode title or
                description. Inside it are ideas, questions, arguments,
                experiences, stories, frameworks, disagreements and answers.
              </p>

              <p>
                FONS is designed to progressively understand those elements
                and make them easier to find, connect and explore.
              </p>

              <p className="font-semibold text-white">
                The long-term direction is to make the idea—not merely the
                episode—the fundamental unit of discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main intelligence workflow */}

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              FONS Intelligence
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              From human conversation to knowledge.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
              The FONS system connects media processing with intelligence,
              allowing raw conversations to become increasingly structured and
              useful.
            </p>
          </div>

          <div className="mt-16 grid gap-4 lg:grid-cols-3">
            {/* Conversation */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7">
              <span className="text-xs font-semibold tracking-[0.3em] text-cyan-400">
                INPUT
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Human Conversation
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                The original voice, experience and perspective remain the
                source.
              </p>
            </div>

            {/* FONS Core */}

            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-cyan-500/[0.06] p-7 lg:row-span-2">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_65%)]" />

              <div className="relative flex h-full flex-col items-center justify-center text-center">
                <div className="relative h-28 w-28 sm:h-36 sm:w-36">
                  <Image
                    src="/images/products/fons-logo.png"
                    alt="FONS intelligence core"
                    fill
                    sizes="144px"
                    className="object-contain"
                  />
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
                  FONS
                </p>

                <h3 className="mt-3 text-3xl font-bold">
                  Intelligence Core
                </h3>

                <p className="mt-5 max-w-sm leading-8 text-slate-300">
                  Speech, language and content intelligence work together to
                  understand the conversation and its underlying knowledge.
                </p>
              </div>
            </div>

            {/* Knowledge */}

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7">
              <span className="text-xs font-semibold tracking-[0.3em] text-cyan-400">
                OUTPUT
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Structured Knowledge
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Ideas, questions, topics and perspectives become discoverable
                without losing their connection to the people who expressed
                them.
              </p>
            </div>

            {/* Flow */}

            <div className="rounded-3xl border border-white/10 bg-black/20 p-7">
              <div className="space-y-4 text-center text-sm">
                <div className="rounded-xl border border-white/10 px-4 py-3">
                  Conversation
                </div>

                <div className="text-cyan-400">↓</div>

                <div className="rounded-xl border border-white/10 px-4 py-3">
                  Intelligence
                </div>

                <div className="text-cyan-400">↓</div>

                <div className="rounded-xl border border-white/10 px-4 py-3">
                  Ideas
                </div>

                <div className="text-cyan-400">↓</div>

                <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-cyan-300">
                  Knowledge
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production system */}

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Production System
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              The machinery underneath the knowledge layer.
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-300">
              Before knowledge can travel, the source material has to be
              understood, prepared and made usable.
            </p>
          </div>

          <div className="mt-14 space-y-3">
            {productionStages.map((stage, index) => (
              <div
                key={stage.number}
                className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:grid-cols-[80px_220px_1fr] sm:items-center"
              >
                <span className="text-sm font-semibold text-cyan-400">
                  {stage.number}
                </span>

                <h3 className="text-xl font-semibold">
                  {stage.title}
                </h3>

                <p className="leading-8 text-slate-400">
                  {stage.description}
                </p>

                {index < productionStages.length - 1 && (
                  <div className="hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge map */}

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              The Knowledge Map
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Conversation becomes a network of meaning.
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-300">
              The long-term direction of FONS is a permissioned knowledge map
              connecting the people, ideas and questions contained within
              human conversation.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {knowledgeLayers.map((layer, index) => (
              <div
                key={layer.title}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"
              >
                <span className="text-xs font-semibold text-cyan-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {layer.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {layer.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-500/[0.04] p-7 sm:p-10">
            <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:flex-wrap">
              {[
                "Creator",
                "Conversation",
                "Idea",
                "Question",
                "Topic",
                "Perspective",
                "Audience",
                "Knowledge",
              ].map((item, index, items) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-slate-200">
                    {item}
                  </span>

                  {index < items.length - 1 && (
                    <span className="hidden text-cyan-400 sm:inline">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Great ideas */}

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
          <div className="mx-auto relative h-24 w-24">
            <Image
              src="/images/products/fons-logo.png"
              alt="FONS"
              fill
              sizes="96px"
              className="object-contain"
            />
          </div>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            The Principle
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight sm:text-7xl">
            Great ideas should travel.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300 sm:text-xl">
            Audio enhancement helps ideas travel. Editing helps ideas travel.
            Multilingual publishing helps ideas travel. Search helps old ideas
            travel through time. FONS brings these capabilities together
            around the deeper purpose of making human knowledge easier to
            discover.
          </p>
        </div>
      </section>

      {/* Navigation */}

      <section>
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/products"
            className="text-slate-400 transition hover:text-white"
          >
            ← All Products
          </Link>

          <Link
            href="/products/nexus-link"
            className="text-cyan-400 transition hover:text-cyan-300"
          >
            Next: Nexus Link →
          </Link>
        </div>
      </section>
    </main>
  );
}