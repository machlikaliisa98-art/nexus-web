export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-32">

        <p
          className="text-blue-400 uppercase tracking-[0.4em] text-sm"
          style={{ fontFamily: "Arial" }}
        >
          ABOUT NEXUS
        </p>

        <h1
          className="mt-6 text-5xl md:text-7xl leading-tight"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Engineering Africa's
          <br />
          Intelligent Future
        </h1>

        <p
          className="mt-10 max-w-4xl text-xl leading-10 text-gray-300"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Nexus Inc. is a Rwandan deep technology company committed to
          advancing artificial intelligence through research,
          enterprise software and intelligent infrastructure.
          Our mission is to develop trusted AI systems that solve
          complex challenges across Africa while contributing to
          global technological innovation.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-32 md:grid-cols-2">

        <div>
          <h2
            className="mb-6 text-4xl"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Our Mission
          </h2>

          <p className="leading-9 text-gray-300">
            To build intelligent technologies that transform
            governments, businesses and communities through
            responsible artificial intelligence, advanced research
            and innovative digital infrastructure.
          </p>
        </div>

        <div>
          <h2
            className="mb-6 text-4xl"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Our Vision
          </h2>

          <p className="leading-9 text-gray-300">
            To become Africa's leading artificial intelligence
            company, creating technologies that compete globally
            while addressing the continent's unique opportunities
            and challenges.
          </p>
        </div>

      </section>
    </main>
  );
}