import Link from "next/link";

export default function BoardCTA() {
  return (
    <section className="bg-[#050816] py-32">
      <div className="mx-auto max-w-5xl rounded-[40px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-[#060918] to-[#050816] px-10 py-20 text-center">

        <p className="uppercase tracking-[0.35em] text-cyan-400">
          Governance
        </p>

        <h2
          className="mt-6 text-5xl text-white"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Building the Future of Responsible Governance
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
          Nexus Inc. is committed to appointing an experienced, diverse and
          independent Board of Directors that reflects the highest standards
          of governance, innovation and ethical leadership.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <Link
            href="/leadership"
            className="rounded-full bg-cyan-500 px-10 py-4 font-medium text-black transition hover:bg-cyan-400"
          >
            Executive Leadership
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-10 py-4 font-medium text-white transition hover:border-cyan-400"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
}