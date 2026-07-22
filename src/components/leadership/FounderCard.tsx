"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Founder } from "./founders";

interface FounderCardProps {
  founder: Founder;
  reverse?: boolean;
}

export default function FounderCard({
  founder,
  reverse = false,
}: FounderCardProps) {
  return (
    <section
      className={`grid items-center gap-12 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Portrait */}

      <div className="flex justify-center">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
          <Image
            src={founder.image}
            alt={founder.name}
            width={420}
            height={520}
            priority
            className="h-[430px] w-[340px] object-cover transition duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Content */}

      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Executive Leadership
        </p>

        <h2 className="text-4xl font-bold text-white">
          {founder.name}
        </h2>

        <p className="mt-2 text-lg font-medium text-cyan-300">
          {founder.title}
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          {founder.intro}
        </p>

        {/* Responsibilities */}

        <div className="mt-10">
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Responsibilities
          </h3>

          <div className="flex flex-wrap gap-3">
            {founder.responsibilities.map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-cyan-500 hover:text-cyan-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Button */}

        <div className="mt-10">
          <Link
            href={`/leadership/${founder.slug}`}
            className="inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
          >
            Read Full Executive Profile

            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}