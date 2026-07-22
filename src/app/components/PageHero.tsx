interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#050816] py-32">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <p
          className="uppercase tracking-[0.45em] text-sm text-blue-400"
          style={{ fontFamily: "Arial" }}
        >
          {eyebrow}
        </p>

        <h1
          className="mt-6 max-w-5xl text-5xl leading-tight text-white md:text-7xl"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          {title}
        </h1>

        <p
          className="mt-10 max-w-4xl text-xl leading-10 text-gray-300"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          {description}
        </p>

      </div>

    </section>
  );
}