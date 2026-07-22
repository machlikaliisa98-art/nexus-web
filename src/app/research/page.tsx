export default function ResearchPage() {
  const researchAreas = [
    {
      title: "Artificial Intelligence",
      description:
        "Designing intelligent systems capable of reasoning, learning, and solving complex real-world challenges.",
    },
    {
      title: "Natural Language Processing",
      description:
        "Developing multilingual language models and conversational AI tailored for African and global applications.",
    },
    {
      title: "Computer Vision",
      description:
        "Creating vision systems that interpret images and video for healthcare, agriculture, security, and industry.",
    },
    {
      title: "Speech Intelligence",
      description:
        "Building advanced speech recognition, synthesis, translation, and voice technologies.",
    },
    {
      title: "Responsible AI",
      description:
        "Ensuring AI systems remain transparent, secure, ethical, and beneficial to society.",
    },
    {
      title: "Digital Infrastructure",
      description:
        "Researching scalable cloud and AI infrastructure capable of supporting next-generation intelligent systems.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-32">
        <p
          className="uppercase tracking-[0.4em] text-sm text-blue-400"
          style={{ fontFamily: "Arial" }}
        >
          RESEARCH
        </p>

        <h1
          className="mt-6 text-5xl md:text-7xl leading-tight"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Research That Shapes
          <br />
          Intelligent Systems
        </h1>

        <p
          className="mt-10 max-w-4xl text-xl leading-10 text-gray-300"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          At Nexus Inc., research is the foundation of every technology
          we build. We combine scientific exploration with practical
          engineering to develop AI systems that are secure, scalable,
          and impactful across Africa and beyond.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-32 md:grid-cols-2 lg:grid-cols-3">
        {researchAreas.map((area) => (
          <div
            key={area.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-blue-500 hover:bg-white/10"
          >
            <h2
              className="mb-5 text-2xl"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              {area.title}
            </h2>

            <p className="leading-8 text-gray-300">
              {area.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}