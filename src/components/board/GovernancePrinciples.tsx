export default function GovernancePrinciples() {
  const principles = [
    {
      title: "Independence",
      description:
        "Independent oversight ensures objective judgement, protects stakeholder interests and strengthens confidence in the Company's long-term decisions."
    },
    {
      title: "Integrity",
      description:
        "The Board promotes the highest standards of ethical leadership, transparency and responsible corporate conduct."
    },
    {
      title: "Accountability",
      description:
        "Every decision is guided by accountability to shareholders, employees, partners, regulators and society."
    },
    {
      title: "Long-Term Value",
      description:
        "Governance focuses on sustainable growth, responsible innovation and enduring value creation."
    }
  ];

  return (
    <section className="border-y border-white/10 bg-[#060918] py-28">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="uppercase tracking-[0.35em] text-cyan-400">
            Governance Principles
          </p>

          <h2
            className="mt-6 text-5xl text-white"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Governance Built on Trust
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-400">
            Effective governance is fundamental to sustainable innovation.
            The Board provides strategic oversight while promoting ethical
            leadership, responsible artificial intelligence and long-term
            corporate stewardship.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {principles.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 transition duration-300 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="mb-8 h-1 w-20 rounded-full bg-cyan-400" />

              <h3
                className="text-3xl text-white"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                {item.title}
              </h3>

              <p className="mt-6 leading-8 text-gray-300">
                {item.description}
              </p>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}