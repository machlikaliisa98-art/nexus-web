import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import {
  founders,
  Founder,
} from "@/components/leadership";

import ExpertiseCard from "@/components/leadership/ExpertiseCard";
import Publications from "@/components/leadership/PublicationsComponent";

import { publications } from "@/components/leadership/publications";

const SITE_URL = "https://nexus-web-nu-eight.vercel.app";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return founders.map((founder) => ({
    slug: founder.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const founder = founders.find(
    (item) => item.slug === slug
  );

  if (!founder) {
    return {
      title: "Leadership | Nexus Inc.",
    };
  }

  const profileUrl = `${SITE_URL}/leadership/${founder.slug}`;

  return {
    title: `${founder.name} | Nexus Inc.`,

    description: founder.intro,

    alternates: {
      canonical: profileUrl,
    },

    openGraph: {
      title: `${founder.name} | Nexus Inc.`,
      description: founder.intro,
      url: profileUrl,
      siteName: "Nexus Inc.",
      locale: "en_US",
      type: "profile",
      images: [
        {
          url: founder.image,
          alt: `${founder.name} — ${founder.title}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${founder.name} | Nexus Inc.`,
      description: founder.intro,
      images: [founder.image],
    },
  };
}

export default async function ExecutiveProfile({
  params,
}: PageProps) {
  const { slug } = await params;

  const founder: Founder | undefined = founders.find(
    (item) => item.slug === slug
  );

  if (!founder) {
    notFound();
  }

  const founderPublications = publications.filter(
    (article) => article.author === founder.slug
  );

  const profileUrl =
    `${SITE_URL}/leadership/${founder.slug}`;

  const imageUrl =
    `${SITE_URL}${founder.image}`;

  /*
   * Person entity
   *
   * Each executive gets their own machine-readable identity.
   * The Person is connected back to the same Nexus Inc.
   * Organization entity defined in the root layout.
   */

  const personSchema = {
    "@context": "https://schema.org",

    "@type": "Person",

    "@id": `${profileUrl}/#person`,

    name: founder.name,

    url: profileUrl,

    image: imageUrl,

    jobTitle:
      founder.slug === "andrew-kyamagero"
        ? "Chief Executive Officer"
        : founder.slug === "james-kaliisa"
        ? "Chief Technology Officer"
        : founder.slug === "qassim-abdul-karim"
        ? "Chief Product Officer"
        : founder.title,

    worksFor: {
      "@type": "Organization",

      "@id": `${SITE_URL}/#organization`,

      name: "Nexus Inc.",

      url: SITE_URL,
    },

    memberOf: {
      "@type": "Organization",

      "@id": `${SITE_URL}/#organization`,

      name: "Nexus Inc.",

      url: SITE_URL,
    },

    description: founder.intro,

    knowsAbout: founder.expertise.map(
      (item) => item.title
    ),

    ...(founder.sameAs?.length
      ? {
          sameAs: founder.sameAs,
        }
      : {}),
  };

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Person Structured Data */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />

      {/* Hero */}

      <section className="border-b border-zinc-900 bg-gradient-to-b from-zinc-950 via-black to-black">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <Link
            href="/leadership"
            className="inline-flex items-center gap-2 text-zinc-400 transition hover:text-cyan-400"
          >
            <ArrowLeft className="h-4 w-4" />

            Back to Leadership
          </Link>

          <div className="mt-14 grid items-center gap-16 lg:grid-cols-[380px_1fr]">

            {/* Portrait */}

            <div className="flex justify-center">

              <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">

                <Image
                  src={founder.image}
                  alt={`${founder.name} — ${founder.title} at Nexus Inc.`}
                  width={450}
                  height={560}
                  priority
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="h-auto w-full object-cover transition duration-500 hover:scale-105"
                />

              </div>

            </div>

            {/* Hero Content */}

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                Executive Profile
              </p>

              <h1 className="mt-4 text-5xl font-bold lg:text-6xl">
                {founder.name}
              </h1>

              <p className="mt-4 text-2xl text-cyan-300">
                {founder.title}
              </p>

              <p className="mt-10 max-w-3xl text-lg leading-9 text-zinc-300">
                {founder.intro}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Main Content */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        {/* Leadership Philosophy */}

        <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-10">

          <h2 className="text-xl font-semibold text-white">
            Leadership Philosophy
          </h2>

          <blockquote className="mt-6 border-l-4 border-cyan-500 pl-6 text-2xl italic leading-10 text-cyan-300">
            &quot;{founder.philosophy}&quot;
          </blockquote>

        </div>

        {/* Executive Overview */}

        <section className="mt-24">

          <h2 className="mb-10 text-4xl font-bold">
            Executive Overview
          </h2>

          <div className="space-y-7 text-lg leading-9 text-zinc-300">

            {founder.biography.map((paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            ))}

          </div>

        </section>

        {/* Areas of Expertise */}

        <section className="mt-24">

          <h2 className="mb-10 text-4xl font-bold">
            Areas of Expertise
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            {founder.expertise.map((item) => (
              <ExpertiseCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}

          </div>

        </section>

        {/* Publications */}

        {founderPublications.length > 0 && (
          <section className="mt-24">

            <Publications
              publications={founderPublications}
            />

          </section>
        )}

        {/* Executive Responsibilities */}

        <section className="mt-24">

          <h2 className="mb-10 text-4xl font-bold">
            Executive Responsibilities
          </h2>

          <div className="flex flex-wrap gap-4">

            {founder.responsibilities.map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-cyan-500 hover:text-cyan-300"
              >
                {item}
              </span>
            ))}

          </div>

        </section>

        {/* Vision */}

        <section className="mt-24 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-zinc-900 to-zinc-950 p-10">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Looking Ahead
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Vision for Africa
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-9 text-zinc-300">
            Nexus Inc. believes Africa&apos;s future will be shaped by its
            ability to create, own and export world-class technology.
            Through artificial intelligence, software engineering and
            research, we are building digital infrastructure that enables
            businesses, governments and communities to thrive in the global
            digital economy.
          </p>

        </section>

        {/* Leadership CTA */}

        <section className="mt-24 rounded-3xl border border-zinc-800 bg-zinc-900 p-10">

          <h2 className="text-3xl font-bold">
            Meet the Executive Team
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-zinc-400">
            Learn more about the leaders shaping Nexus Inc.&apos;s mission to
            build Africa&apos;s next generation of artificial intelligence,
            enterprise software and digital infrastructure.
          </p>

          <Link
            href="/leadership"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
          >
            View Leadership

            <ArrowRight className="h-5 w-5" />

          </Link>

        </section>

      </section>

    </main>
  );
}