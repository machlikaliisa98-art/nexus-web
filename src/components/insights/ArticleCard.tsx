import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Newspaper,
} from "lucide-react";

import { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({
  article,
}: ArticleCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-cyan-500">

      {/* Cover */}

      <div className="relative h-64 overflow-hidden">

        <Image
          src={article.cover}
          alt={article.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <span className="absolute left-5 top-5 rounded-full bg-cyan-500 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-black">
          {article.category}
        </span>

      </div>

      {/* Content */}

      <div className="p-8">

        <div className="flex flex-wrap gap-5 text-sm text-zinc-500">

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

        <h3 className="mt-6 text-2xl font-bold leading-tight transition group-hover:text-cyan-300">
          {article.title}
        </h3>

        <p className="mt-5 leading-8 text-zinc-400">
          {article.summary}
        </p>

        <div className="mt-8 flex items-center justify-between">

          <div>

            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Author
            </p>

            <p className="mt-1 font-semibold">
              {article.author}
            </p>

          </div>

          <Link
            href={`/insights/${article.slug}`}
            className="inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            Read More

            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />

          </Link>

        </div>

      </div>

    </article>
  );
}