export default function LeadershipPage() {
  const leaders = [
    {
      name: "James Kaliisa",
      role: "Co-Founder & Chief Executive Officer",
      bio: "James provides the strategic direction of Nexus Inc., leading research, product innovation, partnerships, and the company's long-term vision of building globally competitive artificial intelligence technologies from Africa.",
    },
    {
      name: "Executive Leadership",
      role: "Technology, Operations & Growth",
      bio: "Our executive team combines expertise in artificial intelligence, engineering, law, finance, business strategy, and product development to transform research into impactful solutions.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-32">
        <p
          className="uppercase tracking-[0.4em] text-sm text-blue-400"
          style={{ fontFamily: "Arial" }}
        >
          LEADERSHIP
        </p>

        <h1
          className="mt-6 text-5xl md:text-7xl leading-tight"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Leadership
          <br />
          Driving Innovation
        </h1>

        <p
          className="mt-10 max-w-4xl text-xl leading-10 text-gray-300"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Nexus Inc. is led by a multidisciplinary team committed to
          advancing responsible artificial intelligence, scientific
          research, and enterprise innovation across Africa and beyond.
        </p>
      </section>

      <section className="mx-auto max-w-7xl space-y-10 px-6 pb-32">
        {leaders.map((leader) => (
          <div
            key={leader.name}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 transition-all duration-300 hover:border-blue-500 hover:bg-white/10"
          >
            <h2
              className="text-4xl"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              {leader.name}
            </h2>

            <p className="mt-2 text-blue-400 uppercase tracking-wider">
              {leader.role}
            </p>

            <p className="mt-6 max-w-4xl leading-9 text-gray-300">
              {leader.bio}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}