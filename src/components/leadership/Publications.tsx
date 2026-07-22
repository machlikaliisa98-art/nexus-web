import Link from "next/link";
import { ArrowUpRight, CalendarDays, Newspaper, Tag } from "lucide-react";

import { Publication } from "./publications";

interface PublicationsProps {
  publications: Publication[];
}

export default function Publications({
  publications,
}: PublicationsProps) {
  if (publications.length === 0) {
    return null;
  }

  return (
    <section className="mt-24">

      <div className="max-w-3xl">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          Thought Leadership
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Publications & Articles
        </h2>

        <p className="mt-5 text-lg leading-8 text-zinc-400">
          Ideas, research and opinion pieces exploring artificial intelligence,
          digital infrastructure, innovation, economics and Africa's
          technological future.
        </p>

      </div>

      <div className="mt-12 space-y-8">

        {publications.map((article) => (

          <article
            key={article.title}
            className="group rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 transition duration-300 hover:border-cyan-500 hover:bg-zinc-900"
          >

            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400">

              <div className="flex items-center gap-2">
                <Newspaper className="h-4 w-4 text-cyan-400" />
                {article.publication}
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-cyan-400" />
                {article.date}
              </div>

              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-cyan-400" />
                {article.category}
              </div>

            </div>

            <h3 className="mt-6 text-3xl font-bold transition group-hover:text-cyan-300">
              {article.title}
            </h3>

            <p className="mt-6 max-w-4xl text-lg leading-9 text-zinc-400">
              {article.summary}
            </p>

            <Link
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 font-semibold text-cyan-400 transition hover:text-cyan-300"
            >
              Read Article

              <ArrowUpRight className="h-5 w-5" />

            </Link>

          </article>

        ))}

      </div>

    </section>
  );
}