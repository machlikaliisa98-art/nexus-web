import { governanceTimeline } from "./directorTimelines";

export default function BoardTimeline() {
  return (
    <section className="bg-[#060918] py-28 border-y border-white/10">
      <div className="mx-auto max-w-6xl px-8">

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="uppercase tracking-[0.35em] text-cyan-400">
            Governance Roadmap
          </p>

          <h2
            className="mt-6 text-5xl text-white"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Building an Independent Board
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-400">
            Nexus Inc. is establishing a governance framework designed to
            support sustainable growth, responsible artificial intelligence
            and long-term institutional excellence.
          </p>
        </div>

        <div className="space-y-10">

          {governanceTimeline.map((event, index) => (
            <div
              key={index}
              className="flex gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:border-cyan-400/40"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-lg font-bold text-cyan-400">
                {event.year}
              </div>

              <div>
                <h3
                  className="text-3xl text-white"
                  style={{ fontFamily: "Times New Roman, serif" }}
                >
                  {event.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-300">
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