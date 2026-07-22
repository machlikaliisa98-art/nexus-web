export default function BoardCommittees() {
  const committees = [
    {
      title: "Audit & Risk Committee",
      items: [
        "Financial reporting",
        "Internal controls",
        "Enterprise risk",
        "Regulatory compliance"
      ]
    },
    {
      title: "Technology & AI Committee",
      items: [
        "AI governance",
        "Responsible AI",
        "Cybersecurity",
        "Data governance"
      ]
    },
    {
      title: "Strategy & Investment Committee",
      items: [
        "Corporate strategy",
        "Capital allocation",
        "Strategic partnerships",
        "Innovation investments"
      ]
    },
    {
      title: "Governance & Nominations Committee",
      items: [
        "Board appointments",
        "Succession planning",
        "Director evaluations",
        "Governance framework"
      ]
    }
  ];

  return (
    <section className="bg-[#050816] py-28">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="uppercase tracking-[0.35em] text-cyan-400">
            Standing Committees
          </p>

          <h2
            className="mt-6 text-5xl text-white"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Specialist Oversight
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {committees.map((committee) => (
            <div
              key={committee.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-10"
            >
              <h3
                className="text-3xl text-white"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                {committee.title}
              </h3>

              <ul className="mt-8 space-y-4 text-gray-300">

                {committee.items.map((item) => (
                  <li key={item}>
                    • {item}
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}