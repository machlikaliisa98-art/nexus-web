import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { boardPositions } from "@/components/board";

interface BoardMemberPageProps {
  params: {
    slug: string;
  };
}

export default function BoardMemberPage({
  params,
}: BoardMemberPageProps) {
  const director = boardPositions.find(
    (position) => position.slug === params.slug
  );

  if (!director) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      {/* Hero */}

      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="relative mx-auto max-w-7xl px-8 py-28">

          <div className="grid gap-16 lg:grid-cols-[1.2fr_420px] lg:items-center">

            <div>

              <p className="uppercase tracking-[0.35em] text-cyan-400">
                Board of Directors
              </p>

              <h1
                className="mt-6 text-5xl md:text-6xl"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                {director.title}
              </h1>

              <h2 className="mt-6 text-2xl text-gray-300">
                {director.name}
              </h2>

              <div className="mt-8 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
                {director.status}
              </div>

              <p className="mt-10 max-w-3xl text-lg leading-9 text-gray-300">
                {director.summary}
              </p>

              <Link
                href="/board"
                className="mt-12 inline-flex items-center text-cyan-400 transition hover:text-cyan-300"
              >
                ← Back to Board
              </Link>

            </div>

            <div>

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">

                <div className="relative aspect-[4/5]">

                  <Image
                    src={director.image}
                    alt={director.title}
                    fill
                    className="object-cover"
                    priority
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Details */}

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-10 px-8 lg:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h2
              className="text-3xl text-white"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Responsibilities
            </h2>

            <ul className="mt-8 space-y-4">

              {director.responsibilities.map((item) => (
                <li
                  key={item}
                  className="leading-8 text-gray-300"
                >
                  • {item}
                </li>
              ))}

            </ul>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h2
              className="text-3xl text-white"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Desired Expertise
            </h2>

            <ul className="mt-8 space-y-4">

              {director.expertise.map((item) => (
                <li
                  key={item}
                  className="leading-8 text-gray-300"
                >
                  • {item}
                </li>
              ))}

            </ul>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h2
              className="text-3xl text-white"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Board Committees
            </h2>

            <ul className="mt-8 space-y-4">

              {director.committees.map((item) => (
                <li
                  key={item}
                  className="leading-8 text-gray-300"
                >
                  • {item}
                </li>
              ))}

            </ul>

          </div>

        </div>

      </section>

      {/* Appointment Status */}

      <section className="border-y border-white/10 bg-[#060918] py-24">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <p className="uppercase tracking-[0.35em] text-cyan-400">
            Appointment Status
          </p>

          <h2
            className="mt-6 text-5xl text-white"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Position Currently Vacant
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
            This position has been established as part of the Company's
            governance framework. The Board is currently undergoing
            constitution, and an appointment will be announced upon
            completion of the nomination and approval process.
          </p>

        </div>

      </section>

      {/* Governance Statement */}

      <section className="py-24">

        <div className="mx-auto max-w-6xl rounded-[36px] border border-white/10 bg-white/5 p-12">

          <p className="uppercase tracking-[0.35em] text-cyan-400">
            Governance Commitment
          </p>

          <h2
            className="mt-6 text-4xl text-white"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Independent Leadership for Long-Term Growth
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-300">
            Nexus Inc. believes that effective governance is fundamental to
            building trusted artificial intelligence, sustainable innovation,
            and resilient institutions. Every Board appointment will be made
            based on integrity, independence, diversity of thought, and
            professional excellence, ensuring that the Company remains
            accountable to its shareholders, partners, regulators, employees,
            and the communities it serves.
          </p>

        </div>

      </section>

    </main>
  );
}