import PageHero from "../components/PageHero";

export default function ResearchPage() {
  const researchAreas = [
    {
      title: "Artificial Intelligence",
      description:
        "Advancing intelligent systems capable of reasoning, learning, decision-making and solving complex real-world challenges.",
    },
    {
      title: "Natural Language Processing",
      description:
        "Developing multilingual language technologies for translation, summarization, conversational AI and knowledge discovery.",
    },
    {
      title: "Speech & Audio Intelligence",
      description:
        "Research in automatic speech recognition, speaker identification, voice synthesis and intelligent audio processing.",
    },
    {
      title: "Computer Vision",
      description:
        "Building visual intelligence for document understanding, object detection, image recognition and video analytics.",
    },
    {
      title: "Machine Learning",
      description:
        "Designing predictive models that uncover patterns, improve decision-making and continuously learn from data.",
    },
    {
      title: "Responsible AI",
      description:
        "Ensuring fairness, transparency, privacy and security remain central to every intelligent system we develop.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <PageHero
        eyebrow="RESEARCH"
        title="Research That Shapes Intelligent Systems"
        description="Scientific discovery is the foundation of every technology developed at Nexus Inc. We transform research into practical innovation that powers intelligent products and contributes to Africa's technological future."
      />

      {/* Research Areas */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {researchAreas.map((area) => (

            <div
              key={area.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-white/10"
            >

              <div className="mb-6 h-1 w-20 rounded-full bg-blue-500"></div>

              <h2
                className="mb-5 text-3xl text-white"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                {area.title}
              </h2>

              <p className="leading-8 text-gray-300">
                {area.description}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Closing */}

      <section className="border-t border-white/10 py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2
            className="text-4xl md:text-5xl text-white"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            From Discovery to Deployment
          </h2>

          <p
            className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            At Nexus Inc., research is more than academic exploration—it
            is the engine behind every platform, every intelligent model,
            and every innovation we bring to the market. Our commitment
            is to transform scientific knowledge into technologies that
            solve meaningful problems and create lasting impact.
          </p>

        </div>

      </section>
    </main>
  );
}