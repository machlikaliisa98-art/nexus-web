import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, Newspaper } from "lucide-react";

import { Article } from "@/data/articles";

interface FeaturedArticleProps {
  article: Article;
}

export default function FeaturedArticle({
  article,
}: FeaturedArticleProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

      <div className="grid lg:grid-cols-2">

        {/* Image */}

        <div className="relative min-h-[420px]">

          <Image
            src={article.cover}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

        </div>

        {/* Content */}

        <div className="flex flex-col justify-center p-10 lg:p-14">

          <span className="w-fit rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Featured Article
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight lg:text-5xl">
            {article.title}
          </h2>

          <p className="mt-8 text-lg leading-9 text-zinc-400">
            {article.summary}
          </p>

          {/* Meta */}

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-500">

            <div className="flex items-center gap-2">
              <Newspaper className="h-4 w-4 text-cyan-400" />
              {article.publication}
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-cyan-400" />
              {article.date}
            </div>

            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-cyan-400" />
              {article.readingTime}
            </div>

          </div>

          <Link
            href={`/insights/${article.slug}`}
            className="mt-12 inline-flex w-fit items-center gap-3 rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-black transition hover:bg-cyan-400"
          >
            Read Article

            <ArrowRight className="h-5 w-5" />

          </Link>

        </div>

      </div>

    </article>
  );
}