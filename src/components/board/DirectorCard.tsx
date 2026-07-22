import Link from "next/link";
import Image from "next/image";
import { BoardPosition } from "./directors";

interface DirectorCardProps {
  director: BoardPosition;
}

export default function DirectorCard({
  director,
}: DirectorCardProps) {
  return (
    <Link
      href={`/board/${director.slug}`}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:bg-white/10"
    >
      {/* Image */}
      <div className="relative h-72 w-full overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-900 via-[#050816] to-slate-950">
        <Image
          src={director.image}
          alt={director.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050816] via-[#050816]/70 to-transparent p-6">
          <span className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-cyan-300">
            {director.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-5 p-8">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            {director.title}
          </p>

          <h3
            className="mt-3 text-3xl text-white"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            {director.name}
          </h3>
        </div>

        <p className="leading-8 text-gray-300">
          {director.summary}
        </p>

        {/* Expertise */}
        <div>
          <h4 className="mb-3 text-sm uppercase tracking-wider text-white">
            Desired Expertise
          </h4>

          <div className="flex flex-wrap gap-2">
            {director.expertise.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <span className="inline-flex items-center font-medium text-cyan-400 transition group-hover:translate-x-2">
            View Position →
          </span>
        </div>
      </div>
    </Link>
  );
}