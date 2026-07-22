export default function InsightsPage() {
  const articles = [
    {
      category: "Artificial Intelligence",
      title: "Building Africa's AI Future",
      description:
        "How Africa can transition from being an AI consumer to becoming a global producer of intelligent technologies.",
    },
    {
      category: "Research",
      title: "From Research to Real-World Impact",
      description:
        "Why scientific research is the foundation of every intelligent product developed at Nexus Inc.",
    },
    {
      category: "Technology",
      title: "Engineering Trustworthy AI",
      description:
        "Responsible AI requires transparency, security, fairness, and accountability from design through deployment.",
    },
    {
      category: "Innovation",
      title: "Innovation Beyond Software",
      description:
        "Exploring how intelligent infrastructure is transforming agriculture, finance, healthcare, and public services.",
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
          INSIGHTS
        </p>

        <h1
          className="mt-6 text-5xl md:text-7xl leading-tight"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Ideas That
          <br />
          Shape Tomorrow
        </h1>

        <p
          className="mt-10 max-w-4xl text-xl leading-10 text-gray-300"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Discover research, perspectives, company news, and thought
          leadership from Nexus Inc. as we explore the future of
          artificial intelligence, innovation, and digital transformation.
        </p>
      </section>

      {/* Articles */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-32 md:grid-cols-2">
        {articles.map((article) => (
          <article
            key={article.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-white/10"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              {article.category}
            </p>

            <h2
              className="text-3xl"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              {article.title}
            </h2>

            <p className="mt-6 leading-8 text-gray-300">
              {article.description}
            </p>

            <button className="mt-8 rounded-full border border-blue-500 px-6 py-3 text-sm transition hover:bg-blue-600">
              Read Article
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}