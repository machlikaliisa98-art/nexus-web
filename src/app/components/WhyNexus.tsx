export default function WhyNexus() {
  return (
    <section
      id="why-nexus"
      className="border-t border-white/10 bg-[#0A0E17] py-32 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-8">

        <p className="text-xs uppercase tracking-[0.45em] text-blue-400">
          WHY NEXUS
        </p>

        <h2
          className="mt-6 max-w-5xl text-5xl leading-tight"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Building More Than Software
        </h2>

        <p className="mt-8 max-w-5xl text-lg leading-9 text-gray-300 text-justify">
          Many technology companies build applications. We are building
          capabilities. Our focus extends beyond solving today's problems to
          creating the scientific knowledge, engineering excellence and digital
          infrastructure that will shape tomorrow. Every platform we develop is
          backed by research, designed for scale and engineered to create
          lasting impact across industries.
        </p>

        <div className="mt-24 grid gap-8 lg:grid-cols-2">

          <div className="border border-white/10 p-10 transition duration-300 hover:border-blue-500 hover:bg-white/5">
            <div className="text-5xl font-light text-blue-400">01</div>

            <h3
              className="mt-8 text-3xl"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Research First
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              Every platform begins with research, ensuring our technologies
              solve meaningful problems instead of following short term trends.
            </p>
          </div>

          <div className="border border-white/10 p-10 transition duration-300 hover:border-blue-500 hover:bg-white/5">
            <div className="text-5xl font-light text-blue-400">02</div>

            <h3
              className="mt-8 text-3xl"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              African Innovation
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              We believe Africa should contribute original technologies,
              scientific discoveries and engineering breakthroughs to the global
              AI ecosystem.
            </p>
          </div>

          <div className="border border-white/10 p-10 transition duration-300 hover:border-blue-500 hover:bg-white/5">
            <div className="text-5xl font-light text-blue-400">03</div>

            <h3
              className="mt-8 text-3xl"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Enterprise Engineering
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              We engineer secure, scalable and resilient systems capable of
              supporting governments, enterprises and critical industries.
            </p>
          </div>

          <div className="border border-white/10 p-10 transition duration-300 hover:border-blue-500 hover:bg-white/5">
            <div className="text-5xl font-light text-blue-400">04</div>

            <h3
              className="mt-8 text-3xl"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Long Term Vision
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              We are building technologies designed to remain relevant for
              decades, creating lasting value rather than short lived digital
              products.
            </p>
          </div>

        </div>

        <div className="mt-24 border-t border-white/10 pt-16">

          <blockquote
            className="max-w-5xl text-3xl leading-relaxed text-gray-200"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            "Our ambition is not simply to participate in the global artificial
            intelligence revolution, but to help shape it through original
            research, world class engineering and technologies built in Africa
            for the world."
          </blockquote>

        </div>

      </div>
    </section>
  );
}