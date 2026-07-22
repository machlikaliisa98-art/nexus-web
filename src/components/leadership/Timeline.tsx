import { TimelineEvent } from "./timelines";

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  if (events.length === 0) {
    return null;
  }

  return (
    <section className="mt-24">

      <div className="max-w-3xl">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          Career Journey
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Professional Timeline
        </h2>

        <p className="mt-5 text-lg leading-8 text-zinc-400">
          Key milestones that have shaped the executive's professional
          journey, leadership philosophy and contribution to Nexus Inc.
        </p>

      </div>

      <div className="relative mt-16">

        {/* Vertical Line */}

        <div className="absolute left-[22px] top-0 h-full w-px bg-gradient-to-b from-cyan-500 via-cyan-400 to-transparent" />

        <div className="space-y-12">

          {events.map((event) => (

            <div
              key={`${event.year}-${event.title}`}
              className="relative flex gap-8"
            >

              {/* Timeline Node */}

              <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-4 border-black bg-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.6)]">
                <div className="h-3 w-3 rounded-full bg-white" />
              </div>

              {/* Card */}

              <div className="flex-1 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 transition duration-300 hover:border-cyan-500 hover:bg-zinc-900">

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                  {event.year}
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  {event.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-zinc-400">
                  {event.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}