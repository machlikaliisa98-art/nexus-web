import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-6xl font-bold">Products</h1>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <Link
            href="/products/ai-studio"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-cyan-400 transition"
          >
            <img
              src="/images/products/ai-studio.png"
              className="rounded-2xl"
              alt=""
            />

            <h2 className="mt-8 text-3xl font-bold">AI Studio</h2>

            <p className="mt-4 text-slate-300">
              The AI Operating System for Modern Media Production.
            </p>
          </Link>

          <Link
            href="/products/nexus-link"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-cyan-400 transition"
          >
            <img
              src="/images/products/nexus-link.jpg"
              className="rounded-2xl"
              alt=""
            />

            <h2 className="mt-8 text-3xl font-bold">Nexus Link</h2>

            <p className="mt-4 text-slate-300">
              AI-powered financial infrastructure for mobile money agents.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}