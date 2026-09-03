import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock,
  Newspaper,
} from "lucide-react";

import { articles } from "@/data/articles";
import ArticleCard from "@/components/insights/ArticleCard";

const SITE_URL = "https://nexusinc.rw";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return {
      title: "Insights",
      description:
        "Nexus Insights publishes research, engineering perspectives, economic analysis and thought leadership on artificial intelligence, digital infrastructure and innovation across Africa.",
      alternates: {
        canonical: `${SITE_URL}/insights`,
      },
    };
  }

  const title = `${article.title} | Nexus Insights`;
  const description = article.summary;
  const url = `${SITE_URL}/insights/${article.slug}`;

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "Nexus Inc.",
      type: "article",
      images: [
        {
          url: article.cover,
          alt: article.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [article.cover],
    },
  };
}

export default async function InsightArticle({
  params,
}: PageProps) {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter(
      (item) =>
        item.slug !== article.slug &&
        item.category === article.category
    )
    .slice(0, 3);

  return (
    <main className="bg-black text-white">
      {/* Hero */}

      <section className="border-b border-zinc-900">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-cyan-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Insights
          </Link>

          <span className="mt-10 inline-flex rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            {article.category}
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight lg:text-6xl">
            {article.title}
          </h1>

          <div className="mt-10 flex flex-wrap gap-6 text-zinc-500">
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
        </div>
      </section>

      {/* Cover */}

      <section className="mx-auto mt-16 max-w-6xl px-6">
        <div className="relative h-[500px] overflow-hidden rounded-3xl border border-zinc-800">
          <Image
            src={article.cover}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Summary */}

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Executive Summary
          </p>

          <p className="mt-8 text-xl leading-10 text-zinc-300">
            {article.summary}
          </p>
        </div>

        {/* Publication Notice */}

        <div className="mt-16 rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-10">
          <h2 className="text-2xl font-bold">
            Originally Published
          </h2>

          <p className="mt-6 text-lg leading-9 text-zinc-300">
            This article was originally published by{" "}
            <strong>{article.publication}</strong>.
            Nexus Inc. is proud to showcase the published work of its leadership
            team as part of our broader commitment to advancing thoughtful
            discussions on artificial intelligence, technology, economics and
            Africa&apos;s digital future.
          </p>

          {article.externalUrl && (
            <Link
              href={article.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              Read Original Publication

              <ArrowUpRight className="h-5 w-5" />
            </Link>
          )}
        </div>
      </section>

      {/* Related Articles */}

      {relatedArticles.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Continue Reading
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Related Articles
          </h2>

          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {relatedArticles.map((related) => (
              <ArticleCard
                key={related.slug}
                article={related}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}