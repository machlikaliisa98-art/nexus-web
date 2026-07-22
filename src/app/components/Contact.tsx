import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-[#0A0E17] py-32 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-8">

        <p className="text-xs uppercase tracking-[0.45em] text-blue-400">
          CONTACT
        </p>

        <h2
          className="mt-6 text-5xl leading-tight text-white"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Let's Build the Future Together.
        </h2>

        <p className="mt-8 max-w-4xl text-lg leading-9 text-gray-300">
          Whether you are exploring strategic partnerships, enterprise AI,
          research collaborations or investment opportunities, we'd love to hear
          from you. Connect with our team and discover how Nexus Inc. is
          engineering intelligent technologies for tomorrow.
        </p>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10">

            <h3
              className="text-3xl text-white"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Headquarters
            </h3>

            <div className="mt-8 space-y-6 text-gray-300">

              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                  Office
                </p>

                <p className="mt-2">
                  Norrsken House
                  <br />
                  1 KN 78 St
                  <br />
                  Kigali, Rwanda
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                  Email
                </p>

                <a
                  href="mailto:info@nexusinc.ai"
                  className="mt-2 inline-block hover:text-white"
                >
                  info@nexusinc.ai
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                  Partnerships
                </p>

                <a
                  href="mailto:partnerships@nexusinc.ai"
                  className="mt-2 inline-block hover:text-white"
                >
                  partnerships@nexusinc.ai
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                  Careers
                </p>

                <a
                  href="mailto:careers@nexusinc.ai"
                  className="mt-2 inline-block hover:text-white"
                >
                  careers@nexusinc.ai
                </a>
              </div>

            </div>

          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-black p-10">

            <h3
              className="text-3xl text-white"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Work With Nexus Inc.
            </h3>

            <p className="mt-8 leading-8 text-gray-300">
              We collaborate with governments, enterprises, financial
              institutions, universities, development organisations and
              technology partners to advance intelligent systems that solve
              meaningful challenges.
            </p>

            <div className="mt-10 space-y-4">

              <div className="rounded-xl border border-white/10 p-4">
                Enterprise Artificial Intelligence
              </div>

              <div className="rounded-xl border border-white/10 p-4">
                Research Collaboration
              </div>

              <div className="rounded-xl border border-white/10 p-4">
                Strategic Partnerships
              </div>

              <div className="rounded-xl border border-white/10 p-4">
                Investment Opportunities
              </div>

              <div className="rounded-xl border border-white/10 p-4">
                Government Digital Transformation
              </div>

            </div>

            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-blue-600 px-8 py-4 text-white transition hover:bg-blue-700"
            >
              Contact Our Team
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}