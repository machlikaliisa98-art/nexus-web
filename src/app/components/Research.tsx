import Link from "next/link";

export default function Research() {
  const research = [
    {
      title: "Artificial Intelligence",
      description:
        "Developing intelligent systems capable of learning, reasoning and solving complex real-world challenges.",
    },
    {
      title: "Language & Speech",
      description:
        "Building multilingual language models, conversational AI, transcription and speech intelligence for Africa and beyond.",
    },
    {
      title: "Computer Vision",
      description:
        "Creating advanced vision systems for healthcare, agriculture, security and enterprise automation.",
    },
  ];

  return (
    <section className="bg-[#060A1A] py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="max-w-4xl">

          <p
            className="uppercase tracking-[0.4em] text-sm text-blue-400"
            style={{ fontFamily: "Arial" }}
          >
            RESEARCH
          </p>

          <h2
            className="mt-6 text-5xl leading-tight text-white md:text-6xl"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Research That Drives
            <br />
            Intelligent Innovation
          </h2>

          <p
            className="mt-8 text-lg leading-9 text-gray-300"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Every Nexus product begins with research. Our work spans
            artificial intelligence, language technologies, computer
            vision and intelligent infrastructure, transforming scientific
            discovery into practical solutions.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {research.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-white/10"
            >

              <div className="mb-6 h-1 w-20 rounded-full bg-blue-500"></div>

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

        {/* CTA */}

        <div className="mt-16 text-center">

          <Link
            href="/research"
            className="inline-flex rounded-full bg-blue-600 px-8 py-4 transition hover:bg-blue-500"
          >
            Explore All Research
          </Link>

        </div>

      </div>
    </section>
  );
}