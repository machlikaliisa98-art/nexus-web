import DirectorCard from "./DirectorCard";
import { boardPositions } from "./directors";

export default function BoardComposition() {
  return (
    <section className="bg-[#050816] py-28">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-20 text-center">

          <p className="uppercase tracking-[0.35em] text-cyan-400">
            Board Composition
          </p>

          <h2
            className="mt-6 text-5xl text-white"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Independent Directors
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-400">
            Nexus Inc. is establishing a diverse and independent Board of
            Directors with expertise spanning technology, governance,
            finance, law and global business.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">

          {boardPositions.map((director) => (
            <DirectorCard
              key={director.slug}
              director={director}
            />
          ))}

        </div>

      </div>

    </section>
  );
}