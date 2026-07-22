import Link from "next/link";

export default function Insights() {
  const articles = [
    {
      category: "Artificial Intelligence",
      title: "Building Africa's AI Future",
      description:
        "Exploring how Africa can become a global producer of intelligent technologies rather than simply consuming them.",
    },
    {
      category: "Research",
      title: "Research Before Products",
      description:
        "Why every Nexus product begins with scientific research, experimentation, and engineering excellence.",
    },
    {
      category: "Innovation",
      title: "Responsible AI by Design",
      description:
        "Building intelligent systems that remain secure, transparent, fair, and accountable throughout their lifecycle.",
    },
  ];

  return (
    <section className="bg-[#050816] py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div className="max-w-4xl">

            <p
              className="uppercase tracking-[0.4em] text-sm text-blue-400"
              style={{ fontFamily: "Arial" }}
            >
              INSIGHTS
            </p>

            <h2
              className="mt-6 text-5xl leading-tight md:text-6xl"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Research.
              <br />
              Ideas.
              <br />
              Perspectives.
            </h2>

            <p
              className="mt-8 text-lg leading-9 text-gray-300"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Stay informed with research publications, industry
              analysis, company news and expert perspectives from
              Nexus Inc.
            </p>

          </div>

          <Link
            href="/insights"
            className="rounded-full border border-blue-500 px-8 py-4 transition hover:bg-blue-600"
          >
            View All Insights
          </Link>

        </div>

        {/* Featured Story */}

        <div className="mt-20 rounded-[32px] border border-white/10 bg-white/5 p-12">

          <p className="uppercase tracking-widest text-blue-400 text-sm">
            FEATURED ARTICLE
          </p>

          <h3
            className="mt-5 text-4xl"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            The Future of Artificial Intelligence Will Be Built Through
            Research, Not Hype.
          </h3>

          <p className="mt-8 max-w-4xl leading-9 text-gray-300">
            Sustainable innovation is driven by rigorous research,
            engineering excellence and responsible deployment—not by
            trends alone. Discover how Nexus approaches AI development
            from first principles.
          </p>

        </div>

        {/* Articles */}

        <div className="mt-10 grid gap-8 lg:grid-cols-3">

          {articles.map((article) => (

            <article
              key={article.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
            >

              <p className="uppercase tracking-widest text-sm text-blue-400">
                {article.category}
              </p>

              <h4
                className="mt-5 text-2xl"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                {article.title}
              </h4>

              <p className="mt-5 leading-8 text-gray-300">
                {article.description}
              </p>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}