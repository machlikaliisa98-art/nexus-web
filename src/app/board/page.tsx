export default function BoardPage() {
  const directors = [
    {
      name: "Board of Directors",
      role: "Strategic Governance",
      bio: "The Board of Directors provides independent oversight, long-term strategic guidance, and governance to ensure that Nexus Inc. operates responsibly, sustainably, and in the best interests of its shareholders, partners, employees, and the communities it serves.",
    },
    {
      name: "Corporate Governance",
      role: "Accountability & Oversight",
      bio: "The Board oversees corporate strategy, risk management, financial stewardship, ethical standards, and regulatory compliance while supporting management in achieving the company's long-term vision.",
    },
    {
      name: "Independent Directors",
      role: "Experience & Perspective",
      bio: "Nexus Inc. seeks a diverse Board comprising leaders with expertise in technology, finance, law, business, public policy, research, and innovation to strengthen decision-making and corporate governance.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* Hero */}

      <section className="mx-auto max-w-7xl px-6 py-32">

        <p
          className="uppercase tracking-[0.4em] text-sm text-blue-400"
          style={{ fontFamily: "Arial" }}
        >
          BOARD OF DIRECTORS
        </p>

        <h1
          className="mt-6 text-5xl md:text-7xl leading-tight"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Governance That
          <br />
          Inspires Confidence
        </h1>

        <p
          className="mt-10 max-w-4xl text-xl leading-10 text-gray-300"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Strong governance is fundamental to sustainable innovation.
          The Board of Directors provides strategic oversight while
          ensuring accountability, integrity, and responsible growth
          across every aspect of Nexus Inc.
        </p>

      </section>

      {/* Governance Cards */}

      <section className="mx-auto max-w-7xl space-y-10 px-6 pb-32">

        {directors.map((director) => (

          <div
            key={director.name}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 transition duration-300 hover:border-blue-500 hover:bg-white/10"
          >

            <h2
              className="text-4xl"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              {director.name}
            </h2>

            <p className="mt-2 uppercase tracking-wider text-blue-400">
              {director.role}
            </p>

            <p className="mt-6 max-w-4xl leading-9 text-gray-300">
              {director.bio}
            </p>

          </div>

        ))}

      </section>
    </main>
  );
}