export default function Board() {
  return (
    <section
      id="board"
      className="border-t border-white/10 bg-[#080C14] py-32 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-8">

        <p className="text-xs uppercase tracking-[0.45em] text-blue-400">
          GOVERNANCE
        </p>

        <h2
          className="mt-6 max-w-5xl text-5xl leading-tight"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Board of Directors
        </h2>

        <p className="mt-8 max-w-5xl text-lg leading-9 text-gray-300 text-justify">
          Strong governance is fundamental to sustainable innovation. The Board
          of Directors provides strategic oversight, corporate governance and
          long term guidance, ensuring that Nexus Inc. operates with integrity,
          accountability and a commitment to responsible technological
          advancement.
        </p>

        <div className="mt-24 grid gap-10 lg:grid-cols-3">

          <div className="border border-white/10 p-10 transition duration-300 hover:border-blue-500 hover:bg-white/5">

            <div className="h-56 w-full rounded bg-white/5"></div>

            <h3
              className="mt-8 text-3xl"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Board Chair
            </h3>

            <p className="mt-3 text-gray-500">
              To Be Announced
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              Responsible for providing strategic leadership to the Board and
              strengthening corporate governance across the organisation.
            </p>

          </div>

          <div className="border border-white/10 p-10 transition duration-300 hover:border-blue-500 hover:bg-white/5">

            <div className="h-56 w-full rounded bg-white/5"></div>

            <h3
              className="mt-8 text-3xl"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Independent Director
            </h3>

            <p className="mt-3 text-gray-500">
              To Be Announced
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              Bringing independent judgement, governance expertise and industry
              experience to strengthen strategic decision making.
            </p>

          </div>

          <div className="border border-white/10 p-10 transition duration-300 hover:border-blue-500 hover:bg-white/5">

            <div className="h-56 w-full rounded bg-white/5"></div>

            <h3
              className="mt-8 text-3xl"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Executive Director
            </h3>

            <p className="mt-3 text-gray-500">
              James Kaliisa
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              Co Founder and Chief Executive Officer responsible for corporate
              strategy, innovation, research leadership and long term growth.
            </p>

          </div>

        </div>

        <div className="mt-24 border-l-2 border-blue-500 pl-8">

          <h3
            className="text-3xl"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Governance Principles
          </h3>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="border border-white/10 p-6">
              <h4 className="text-xl text-white">Integrity</h4>
              <p className="mt-3 leading-7 text-gray-400">
                Ethical leadership guides every decision we make.
              </p>
            </div>

            <div className="border border-white/10 p-6">
              <h4 className="text-xl text-white">Transparency</h4>
              <p className="mt-3 leading-7 text-gray-400">
                Open governance builds trust with partners and stakeholders.
              </p>
            </div>

            <div className="border border-white/10 p-6">
              <h4 className="text-xl text-white">Innovation</h4>
              <p className="mt-3 leading-7 text-gray-400">
                Every strategic decision supports long term technological
                advancement.
              </p>
            </div>

            <div className="border border-white/10 p-6">
              <h4 className="text-xl text-white">Accountability</h4>
              <p className="mt-3 leading-7 text-gray-400">
                Leadership remains accountable to shareholders, partners,
                employees and society.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}