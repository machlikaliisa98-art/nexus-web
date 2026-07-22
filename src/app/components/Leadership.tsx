import Image from "next/image";
import Link from "next/link";

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="border-t border-white/10 bg-[#0A0E17] py-32 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-8">

        <p className="text-xs uppercase tracking-[0.45em] text-blue-400">
          FOUNDING LEADERSHIP
        </p>

        <h2
          className="mt-6 text-5xl leading-tight"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Visionary Leadership. Technical Excellence. Lasting Impact.
        </h2>

        <p className="mt-8 max-w-5xl text-lg leading-9 text-gray-300 text-justify">
          The future of artificial intelligence will be defined by those who
          build it. Our founding leadership is committed to advancing scientific
          research, engineering intelligent systems and creating transformative
          technologies that shape industries, strengthen institutions and
          improve lives for generations to come.
        </p>

        {/* Andrew */}

        <div className="mt-24 grid gap-14 lg:grid-cols-[340px_1fr] items-center">

          <div>

            <Image
              src="/images/leadership/andrew-kyamagero.png"
              alt="Andrew Kyamagero"
              width={340}
              height={420}
              className="w-full border border-white/10 object-cover"
            />

          </div>

          <div>

            <p className="uppercase tracking-[0.3em] text-blue-400">
              Co Founder & Chief Executive Officer
            </p>

            <h3
              className="mt-4 text-5xl"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Andrew Kyamagero
            </h3>

            <p className="mt-8 text-lg leading-9 text-gray-300 text-justify">

              Andrew Kyamagero serves as the Chief Executive Officer and
              Co-Founder of Nexus Inc., providing strategic leadership across
              the organisation while guiding its long-term vision, corporate
              growth and global positioning. He leads the company's commercial
              strategy, institutional partnerships, investor engagement and
              organisational development, ensuring that research excellence is
              translated into technologies with meaningful impact.

            </p>

            <p className="mt-6 text-lg leading-9 text-gray-300 text-justify">

              With a multidisciplinary background spanning executive
              leadership, counselling psychology, media, artificial
              intelligence and organisational transformation, Andrew brings a
              unique perspective to building technology companies. His
              experience working alongside senior executives, advising leaders
              and studying emerging AI technologies strengthens Nexus Inc.'s
              ambition to become one of the world's leading artificial
              intelligence companies.

            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
                Corporate Strategy
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
                Artificial Intelligence
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
                Partnerships
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
                Executive Leadership
              </span>

            </div>

            <Link
              href="/leadership/andrew-kyamagero"
              className="mt-12 inline-flex rounded-full border border-blue-500 px-8 py-3 text-white transition hover:bg-blue-500"
            >
              View Full Profile →
            </Link>

          </div>

        </div>


        {/* James */}

        <div className="mt-32 grid gap-14 lg:grid-cols-[340px_1fr] items-center">

          <div>

            <Image
              src="/images/leadership/james-kaliisa.png"
              alt="James Kaliisa"
              width={340}
              height={420}
              className="w-full border border-white/10 object-cover"
            />

          </div>

          <div>

            <p className="uppercase tracking-[0.3em] text-blue-400">
              Co Founder & Chief Technology Officer
            </p>

            <h3
              className="mt-4 text-5xl"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              James Kaliisa
            </h3>

            <p className="mt-8 text-lg leading-9 text-gray-300 text-justify">

              James Kaliisa is the Co-Founder and Chief Technology Officer of
              Nexus Inc., where he leads the company's technology strategy,
              artificial intelligence research and engineering. He oversees the
              design and development of intelligent systems, software
              architecture and emerging technologies that power the company's
              platforms while ensuring every product is built on a foundation of
              scientific rigor, scalability and security.

            </p>

            <p className="mt-6 text-lg leading-9 text-gray-300 text-justify">

              A lawyer by academic training who transitioned into technology,
              James combines analytical thinking with engineering to bridge law,
              business and artificial intelligence. His work focuses on
              foundation AI systems, enterprise software, cloud infrastructure,
              multilingual intelligence, financial technology and the long-term
              advancement of AI capabilities that address complex real-world
              challenges.

            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
                Artificial Intelligence
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
                Research & Development
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
                Software Engineering
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
                Cloud Infrastructure
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
                Cybersecurity
              </span>

            </div>

            <Link
              href="/leadership/james-kaliisa"
              className="mt-12 inline-flex rounded-full border border-blue-500 px-8 py-3 text-white transition hover:bg-blue-500"
            >
              View Full Profile →
            </Link>

          </div>

        </div>

        {/* Qassim */}

        <div className="mt-32 grid gap-14 lg:grid-cols-[340px_1fr] items-center">

          <div>

            <Image
              src="/images/leadership/qassim-abdul-karim.png"
              alt="Qassim Abdul Karim"
              width={340}
              height={420}
              className="w-full border border-white/10 object-cover"
            />

          </div>

          <div>

            <p className="uppercase tracking-[0.3em] text-blue-400">
              Co Founder & Chief Product Officer
            </p>

            <h3
              className="mt-4 text-5xl"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Qassim Abdul Karim
            </h3>

            <p className="mt-8 text-lg leading-9 text-gray-300 text-justify">

              Qassim Abdul Karim is the Co-Founder and Chief Product Officer of
              Nexus Inc., responsible for translating advanced research into
              products that solve meaningful problems. He leads product vision,
              user experience, platform strategy and the development of
              intelligent digital products that connect cutting-edge technology
              with practical business and societal needs.

            </p>

            <p className="mt-6 text-lg leading-9 text-gray-300 text-justify">

              His expertise spans artificial intelligence, intelligent agents,
              product innovation and human-centred technology design. Working at
              the intersection of research, engineering and user experience,
              Qassim ensures Nexus Inc.'s technologies remain intuitive,
              scalable and impactful while supporting the company's long-term
              innovation strategy.

            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
                Product Strategy
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
                Agentic AI
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
                User Experience
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
                Innovation
              </span>

            </div>

            <Link
              href="/leadership/qassim-abdul-karim"
              className="mt-12 inline-flex rounded-full border border-blue-500 px-8 py-3 text-white transition hover:bg-blue-500"
            >
              View Full Profile →
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
