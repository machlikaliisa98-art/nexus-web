import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Nexus Inc., a Rwandan deep technology company building artificial intelligence, digital infrastructure and enterprise platforms for Africa and the global digital economy.",
  alternates: {
    canonical: "https://nexusinc.rw/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}

      <section className="border-b border-zinc-900 bg-gradient-to-b from-zinc-950 via-black to-black">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Contact Nexus Inc.
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Connect with Nexus Inc.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-zinc-400">
            For general enquiries, partnerships, technology, research and
            other matters concerning Nexus Inc., contact our official company
            email or visit our headquarters in Kigali, Rwanda.
          </p>
        </div>
      </section>

      {/* Contact Information */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Official Email */}

          <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Official Company Email
            </p>

            <h2 className="mt-5 text-3xl font-bold">
              General Enquiries
            </h2>

            <p className="mt-6 text-lg leading-9 text-zinc-400">
              Nexus Inc. uses one official company email for enquiries,
              partnerships, research, technology and business communication.
            </p>

            <a
              href="mailto:info@nexusinc.rw"
              className="mt-8 inline-flex rounded-xl bg-cyan-500 px-7 py-4 text-lg font-semibold text-black transition hover:bg-cyan-400"
            >
              info@nexusinc.rw
            </a>
          </div>

          {/* Company Address */}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Company Address
            </p>

            <h2 className="mt-5 text-3xl font-bold">
              Nexus Inc. Headquarters
            </h2>

            <address className="mt-6 not-italic text-lg leading-9 text-zinc-400">
              1 KN 78 St
              <br />
              Norrsken House
              <br />
              Kigali, Rwanda
            </address>

            <p className="mt-6 text-lg leading-9 text-zinc-500">
              Nexus Inc. is headquartered at Norrsken House in Kigali,
              Rwanda.
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex rounded-xl border border-zinc-700 px-7 py-4 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Return to Nexus Inc.
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}