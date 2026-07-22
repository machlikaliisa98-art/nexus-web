import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { founders } from "@/components/leadership";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return founders.map((founder) => ({
    slug: founder.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const founder = founders.find((f) => f.slug === params.slug);

  if (!founder) {
    return {
      title: "Executive Profile | Nexus Inc.",
    };
  }

  return {
    title: `${founder.name} | Nexus Inc.`,
    description: founder.intro,
  };
}

export default function ExecutiveProfile({ params }: PageProps) {
  const founder = founders.find((f) => f.slug === params.slug);

  if (!founder) {
    notFound();
  }

  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">

        <Link
          href="/leadership"
          className="mb-12 inline-flex items-center gap-2 text-zinc-400 transition hover:text-cyan-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Leadership
        </Link>

        <div className="grid gap-16 lg:grid-cols-[380px,1fr]">

          {/* Portrait */}

          <div>
            <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
              <Image
                src={founder.image}
                alt={founder.name}
                width={500}
                height={650}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Executive Profile
            </p>

            <h1 className="mt-3 text-5xl font-bold">
              {founder.name}
            </h1>

            <p className="mt-3 text-xl text-cyan-300">
              {founder.title}
            </p>

            <p className="mt-8 text-lg leading-9 text-zinc-300">
              {founder.intro}
            </p>

            {/* Philosophy */}

            <div className="mt-14 rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-8">

              <h2 className="text-lg font-semibold text-white">
                Leadership Philosophy
              </h2>

              <p className="mt-5 text-xl italic leading-9 text-cyan-300">
                "{founder.philosophy}"
              </p>

            </div>

            {/* Biography */}

            <section className="mt-16">

              <h2 className="mb-8 text-3xl font-bold">
                Executive Overview
              </h2>

              <div className="space-y-6 text-lg leading-9 text-zinc-300">
                {founder.biography.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

            </section>

            {/* Responsibilities */}

            <section className="mt-16">

              <h2 className="mb-8 text-3xl font-bold">
                Responsibilities
              </h2>

              <div className="flex flex-wrap gap-4">
                {founder.responsibilities.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </section>

          </div>

        </div>
      </section>
    </main>
  );
}