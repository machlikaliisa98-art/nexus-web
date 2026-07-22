import PageHero from "../components/PageHero";

export default function LeadershipPage() {
  const leaders = [
    {
      name: "Executive Leadership",
      role: "Strategic Direction",
      description:
        "Our executive leadership team defines the long-term vision of Nexus Inc., driving innovation, partnerships and sustainable growth across every area of the business.",
    },
    {
      name: "Research Leadership",
      role: "Scientific Excellence",
      description:
        "Leading the advancement of artificial intelligence through research, experimentation and the development of technologies that solve meaningful real-world challenges.",
    },
    {
      name: "Engineering Leadership",
      role: "Technology & Product",
      description:
        "Guiding the architecture, development and deployment of secure, scalable platforms that transform research into enterprise-ready solutions.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <PageHero
        eyebrow="LEADERSHIP"
        title="Leadership Driving Innovation"
        description="Nexus Inc. is guided by leaders committed to advancing artificial intelligence through research, engineering excellence and responsible innovation."
      />

      {/* Leadership Philosophy */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-16 lg:grid-cols-2">

          <div>
            <p className="uppercase tracking-[0.35em] text-sm text-blue-400">
              OUR LEADERSHIP
            </p>

            <h2
              className="mt-6 text-5xl leading-tight"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Building an Organization
              <br />
              Designed to Last
            </h2>
          </div>

          <div>
            <p
              className="text-lg leading-9 text-gray-300"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Leadership at Nexus extends beyond operational management.
              It is about creating a culture where scientific curiosity,
              engineering excellence and responsible innovation work
              together to produce technologies that create long-term
              value for society.
            </p>

            <p
              className="mt-8 text-lg leading-9 text-gray-300"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              We believe enduring companies are built by teams that
              embrace continuous learning, ethical leadership and
              disciplined execution while remaining committed to solving
              meaningful challenges.
            </p>
          </div>

        </div>

      </section>

      {/* Leadership Areas */}

      <section className="border-y border-white/10 bg-white/5 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 lg:grid-cols-3">

            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="rounded-3xl border border-white/10 bg-[#0A1022] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <p className="uppercase tracking-[0.3em] text-sm text-blue-400">
                  {leader.role}
                </p>

                <h3
                  className="mt-5 text-3xl"
                  style={{ fontFamily: "Times New Roman, serif" }}
                >
                  {leader.name}
                </h3>

                <p className="mt-6 leading-8 text-gray-300">
                  {leader.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Closing */}

      <section className="py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Leadership Anchored in Purpose
          </h2>

          <p
            className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Every strategic decision at Nexus is guided by our commitment
            to scientific excellence, responsible artificial intelligence
            and building technologies that contribute to long-term
            economic and societal progress.
          </p>

        </div>

      </section>

    </main>
  );
}