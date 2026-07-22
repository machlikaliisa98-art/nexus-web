import FeaturedArticle from "@/components/insights/FeaturedArticle";
import ArticleCard from "@/components/insights/ArticleCard";
import { articles } from "@/data/articles";

export default function InsightsPage() {
  const featuredArticle = articles.find((article) => article.featured);

  const latestArticles = articles.filter(
    (article) => !article.featured
  );

  const categories = [
    "Artificial Intelligence",
    "Economics",
    "Society",
    "Engineering",
    "Policy",
    "Company News",
  ];

  return (
    <main className="bg-black text-white">

      {/* Hero */}

      <section className="border-b border-zinc-900">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Nexus Insights
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight lg:text-7xl">
            Ideas shaping Africa's technological future.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-zinc-400">
            Nexus Insights is where we publish research, engineering
            perspectives, economic analysis and thought leadership on
            artificial intelligence, digital infrastructure and the future of
            innovation across Africa.
          </p>

        </div>

      </section>

      {/* Featured */}

      {featuredArticle && (

        <section className="mx-auto mt-20 max-w-7xl px-6">

          <FeaturedArticle article={featuredArticle} />

        </section>

      )}

      {/* Categories */}

      <section className="mx-auto mt-24 max-w-7xl px-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Browse
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Explore by Category
            </h2>

          </div>

        </div>

        <div className="mt-10 flex flex-wrap gap-4">

          {categories.map((category) => (

            <button
              key={category}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-6 py-3 transition hover:border-cyan-500 hover:text-cyan-300"
            >
              {category}
            </button>

          ))}

        </div>

      </section>

      {/* Latest Articles */}

      <section className="mx-auto mt-24 max-w-7xl px-6 pb-24">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          Latest
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Recent Publications
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">

          {latestArticles.map((article) => (

            <ArticleCard
              key={article.slug}
              article={article}
            />

          ))}

        </div>

      </section>

      {/* Newsletter */}

      <section className="border-t border-zinc-900 bg-zinc-950">

        <div className="mx-auto max-w-5xl px-6 py-24 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Stay Updated
          </p>

          <h2 className="mt-6 text-5xl font-bold">
            Subscribe to Nexus Insights
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-zinc-400">
            Receive new articles, AI research, engineering updates,
            white papers and company insights directly in your inbox.
          </p>

          <div className="mx-auto mt-12 flex max-w-xl flex-col gap-4 sm:flex-row">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-zinc-700 bg-black px-6 py-4 outline-none transition focus:border-cyan-500"
            />

            <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400">
              Subscribe
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}