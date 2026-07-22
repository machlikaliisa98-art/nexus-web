export default function BoardResponsibilities() {
  const responsibilities = [
    {
      title: "Strategic Oversight",
      description:
        "Guide the long-term strategic direction of Nexus Inc. while ensuring alignment with the Company's mission, vision and sustainable growth objectives."
    },
    {
      title: "Corporate Governance",
      description:
        "Maintain effective governance structures, uphold ethical leadership and promote transparency, accountability and sound decision-making."
    },
    {
      title: "Risk & Compliance",
      description:
        "Oversee enterprise risk management, regulatory compliance, cybersecurity resilience and responsible operational practices."
    },
    {
      title: "Responsible Artificial Intelligence",
      description:
        "Ensure that artificial intelligence is developed, deployed and governed responsibly, safely and in accordance with international best practices."
    },
    {
      title: "Financial Stewardship",
      description:
        "Safeguard the Company's financial integrity through prudent oversight of capital allocation, budgeting and financial reporting."
    },
    {
      title: "Executive Oversight",
      description:
        "Appoint, evaluate and support executive leadership while ensuring succession planning and long-term organisational resilience."
    }
  ];

  return (
    <section className="bg-[#060918] py-28 border-y border-white/10">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="uppercase tracking-[0.35em] text-cyan-400">
            Board Responsibilities
          </p>

          <h2
            className="mt-6 text-5xl text-white"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Governing for Sustainable Growth
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-400">
            The Board provides independent oversight while ensuring that
            Nexus Inc. continues to innovate responsibly, manage risk
            effectively and create sustainable value for stakeholders.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {responsibilities.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="mb-6 h-1 w-16 rounded-full bg-cyan-400" />

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