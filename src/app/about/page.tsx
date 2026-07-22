import PageHero from "../components/PageHero";

export default function AboutPage() {
  const values = [
    {
      title: "Research First",
      description:
        "Every Nexus product begins with rigorous research and thoughtful engineering before it reaches the market.",
    },
    {
      title: "Innovation with Purpose",
      description:
        "We build technology to solve meaningful problems, create opportunity and improve lives across Africa and beyond.",
    },
    {
      title: "Engineering Excellence",
      description:
        "We pursue technical excellence through modern software engineering, artificial intelligence and continuous learning.",
    },
    {
      title: "Responsible AI",
      description:
        "Our intelligent systems are designed with transparency, fairness, security and long-term societal impact in mind.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <PageHero
        eyebrow="ABOUT NEXUS"
        title="Engineering Africa's Intelligent Future"
        description="Nexus Inc. is a Rwandan deep technology company advancing artificial intelligence through research, enterprise software and intelligent infrastructure. We build intelligent technologies that create lasting value for businesses, governments and society."
      />

      {/* Who We Are */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">

          <div>
            <p className="uppercase tracking-[0.35em] text-sm text-blue-400">
              WHO WE ARE
            </p>

            <h2
              className="mt-6 text-5xl leading-tight"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Building Intelligence.
              <br />
              Creating Impact.
            </h2>
          </div>

          <div>
            <p
              className="text-lg leading-9 text-gray-300"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Nexus Inc. exists to transform groundbreaking research into
              practical technologies that strengthen businesses,
              institutions and communities. Our work spans artificial
              intelligence, enterprise software and digital
              infrastructure, creating solutions that are scalable,
              secure and built for the future.
            </p>

            <p
              className="mt-8 text-lg leading-9 text-gray-300"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              We believe Africa should not only adopt intelligent
              technologies but also lead their creation. By combining
              scientific research with world-class engineering, Nexus is
              contributing to a future where innovation developed on the
              continent has global relevance.
            </p>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}

      <section className="border-y border-white/10 bg-white/5 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-[#0A1022] p-10">
            <p className="uppercase tracking-[0.35em] text-sm text-blue-400">
              OUR MISSION
            </p>

            <h3
              className="mt-6 text-4xl"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Turning Research Into Real-World Innovation
            </h3>

            <p className="mt-6 leading-9 text-gray-300">
              To develop intelligent technologies that solve meaningful
              challenges through scientific research, advanced
              engineering and responsible artificial intelligence.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0A1022] p-10">
            <p className="uppercase tracking-[0.35em] text-sm text-blue-400">
              OUR VISION
            </p>

            <h3
              className="mt-6 text-4xl"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              An Africa That Builds the Future
            </h3>

            <p className="mt-6 leading-9 text-gray-300">
              To become one of Africa's leading deep technology companies,
              recognized globally for advancing artificial intelligence,
              scientific discovery and digital innovation.
            </p>
          </div>

        </div>
      </section>

      {/* Values */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-blue-400">
            OUR VALUES
          </p>

          <h2
            className="mt-6 text-5xl"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Principles That Guide Everything We Build
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <h3
                className="text-3xl"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                {value.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-300">
                {value.description}
              </p>
            </div>
          ))}

        </div>

      </section>
    </main>
  );
}