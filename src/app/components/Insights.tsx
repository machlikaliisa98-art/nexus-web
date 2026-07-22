import Link from "next/link";

const researchAreas = [
  {
    title: "Artificial Intelligence Systems",
    description:
      "Research into intelligent systems that reason, learn and automate complex tasks across industries. Our work explores foundation models, agentic AI, retrieval-augmented generation and enterprise AI applications.",
    tags: [
      "Foundation Models",
      "Agentic AI",
      "RAG",
      "Knowledge Graphs",
      "Multimodal AI",
    ],
    href: "/research/artificial-intelligence",
  },
  {
    title: "Natural Language Intelligence",
    description:
      "Developing systems that understand, generate and translate human language through speech recognition, conversational AI, semantic search and multilingual language technologies.",
    tags: [
      "Speech AI",
      "NLP",
      "Machine Translation",
      "Semantic Search",
      "Conversational AI",
    ],
    href: "/research/natural-language-intelligence",
  },
  {
    title: "Financial Intelligence",
    description:
      "Applying artificial intelligence to digital financial infrastructure, fraud detection, transaction intelligence, liquidity optimisation and intelligent banking solutions.",
    tags: [
      "Fraud Detection",
      "Risk Scoring",
      "Payments",
      "Banking APIs",
      "Insurance AI",
    ],
    href: "/research/financial-intelligence",
  },
  {
    title: "Intelligent Agriculture",
    description:
      "Research focused on improving agricultural productivity through AI-driven crop monitoring, climate intelligence, remote sensing and predictive analytics.",
    tags: [
      "Precision Agriculture",
      "Computer Vision",
      "Remote Sensing",
      "Yield Prediction",
      "Climate AI",
    ],
    href: "/research/intelligent-agriculture",
  },
  {
    title: "Cloud & AI Infrastructure",
    description:
      "Building scalable cloud-native infrastructure capable of supporting enterprise artificial intelligence through distributed computing, edge AI and resilient architectures.",
    tags: [
      "Cloud Computing",
      "Distributed Systems",
      "Edge AI",
      "Kubernetes",
      "High Availability",
    ],
    href: "/research/cloud-infrastructure",
  },
  {
    title: "Responsible AI",
    description:
      "Research into trustworthy AI through governance, transparency, explainability, privacy and security to ensure intelligent systems remain safe and accountable.",
    tags: [
      "AI Governance",
      "Explainability",
      "Privacy",
      "AI Safety",
      "Cybersecurity",
    ],
    href: "/research/responsible-ai",
  },
];

export default function Insights() {
  return (
    <section
      id="insights"
      className="border-t border-white/10 bg-[#050816] py-32 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-8">
        <p className="text-xs uppercase tracking-[0.45em] text-blue-400">
          RESEARCH & INSIGHTS
        </p>

        <h2
          className="mt-6 text-5xl leading-tight text-white"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Engineering Intelligence Through Research.
        </h2>

        <p className="mt-8 max-w-5xl text-lg leading-9 text-gray-300">
          Artificial intelligence advances through rigorous research,
          engineering excellence and continuous innovation. Nexus Inc. explores
          technologies that solve real-world problems while contributing to the
          future of intelligent systems across finance, language, agriculture,
          cloud infrastructure and enterprise software.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {researchAreas.map((area) => (
            <div
              key={area.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-white/[0.05]"
            >
              <h3
                className="text-3xl text-white"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                {area.title}
              </h3>

              <p className="mt-6 leading-8 text-gray-300">
                {area.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-blue-500/30 px-3 py-1 text-xs text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={area.href}
                className="mt-10 inline-flex items-center text-blue-400 transition group-hover:text-blue-300"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/research"
            className="inline-flex rounded-full bg-blue-600 px-10 py-4 text-white transition hover:bg-blue-700"
          >
            Explore Research
          </Link>
        </div>
      </div>
    </section>
  );
}