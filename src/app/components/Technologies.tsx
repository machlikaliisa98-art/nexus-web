import Link from "next/link";

export default function Technologies() {
  const technologies = [
    {
      title: "Language Intelligence",
      description:
        "Multilingual AI models capable of understanding, reasoning, translation, and conversational interaction.",
    },
    {
      title: "Vision Intelligence",
      description:
        "Computer vision systems for document analysis, image recognition, automation, and intelligent inspection.",
    },
    {
      title: "Speech Intelligence",
      description:
        "Advanced speech recognition, transcription, voice synthesis, speaker identification, and real-time communication.",
    },
    {
      title: "Predictive Intelligence",
      description:
        "Machine learning models that forecast trends, identify risks, and support enterprise decision-making.",
    },
  ];

  return (
    <section className="bg-[#050816] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Side */}

          <div>

            <p
              className="uppercase tracking-[0.4em] text-sm text-blue-400"
              style={{ fontFamily: "Arial" }}
            >
              TECHNOLOGIES
            </p>

            <h2
              className="mt-6 text-5xl leading-tight text-white md:text-6xl"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Engineering Intelligence
              <br />
              for Every Industry
            </h2>

            <p
              className="mt-8 text-lg leading-9 text-gray-300"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Nexus combines cutting-edge artificial intelligence,
              advanced software engineering, and scalable cloud
              infrastructure to build intelligent systems for
              governments, enterprises, researchers, and innovators.
            </p>

            <Link
              href="/technologies"
              className="mt-10 inline-flex rounded-full bg-blue-600 px-8 py-4 transition hover:bg-blue-500"
            >
              Explore Technologies
            </Link>

          </div>

          {/* Right Side */}

          <div className="grid gap-6">

            {technologies.map((tech) => (

              <div
                key={tech.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-blue-500 hover:bg-white/10"
              >

                <h3
                  className="text-2xl text-white"
                  style={{ fontFamily: "Times New Roman, serif" }}
                >
                  {tech.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-300">
                  {tech.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}