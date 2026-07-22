import Link from "next/link";

const technologies = [
  "Artificial Intelligence",
  "Machine Learning",
  "Large Language Models",
  "Computer Vision",
  "Speech Intelligence",
  "Cloud Infrastructure",
];

export default function Technologies() {
  return (
    <section className="border-b border-white/10 bg-[#050816] py-28">
      <div className="mx-auto max-w-7xl px-8">
        <p className="text-xs uppercase tracking-[0.45em] text-blue-400">
          TECHNOLOGIES
        </p>

        <h2
          className="mt-6 text-5xl"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Engineering the Technologies Behind Tomorrow
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-blue-500/40"
            >
              <h3 className="text-2xl">{tech}</h3>

              <p className="mt-5 leading-8 text-gray-300">
                Research, engineering and enterprise deployment focused on
                delivering secure, scalable and responsible AI systems.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Link
            href="/technologies"
            className="rounded-full border border-white/20 px-8 py-4 transition hover:border-blue-400"
          >
            Explore Technologies
          </Link>
        </div>
      </div>
    </section>
  );
}