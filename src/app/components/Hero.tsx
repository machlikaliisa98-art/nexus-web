"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-900 bg-black">

      {/* Background glow */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-400/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">

        <div className="max-w-5xl">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Sovereign Artificial Intelligence
          </p>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-7xl">
            Building Africa&apos;s
            <br />
            AI Infrastructure
            <br />
            for the Next Century.
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-10 text-zinc-400">
            Nexus Inc. is an African deep technology company building sovereign
            artificial intelligence, digital infrastructure and enterprise
            platforms designed, engineered and owned in Africa.
          </p>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/technologies"
              className="rounded-xl bg-cyan-500 px-8 py-4 text-center font-semibold text-black transition hover:bg-cyan-400"
            >
              Explore Technologies
            </Link>

            <Link
              href="/research"
              className="rounded-xl border border-zinc-700 px-8 py-4 text-center text-white transition hover:border-cyan-500 hover:text-cyan-400"
            >
              View Research
            </Link>

          </div>

          <div className="mt-20 grid gap-10 border-t border-zinc-900 pt-10 sm:grid-cols-3">

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">AI</h2>
              <p className="mt-3 text-zinc-500">
                Building sovereign artificial intelligence tailored for Africa.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">Data</h2>
              <p className="mt-3 text-zinc-500">
                Creating resilient digital infrastructure and knowledge systems.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">
                Enterprise
              </h2>
              <p className="mt-3 text-zinc-500">
                Delivering intelligent platforms that solve real-world problems.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}