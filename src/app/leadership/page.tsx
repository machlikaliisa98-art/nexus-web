import PageHero from "@/components/PageHero";
import {
  FounderCard,
  FounderStory,
  founders,
} from "@/components/leadership";

export const metadata = {
  title: "Executive Leadership | Nexus Inc.",
  description:
    "Meet the executive leadership team driving Nexus Inc.'s mission to redefine Africa's role in the global AI race.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Executive Leadership"
        title="Building Africa's AI Future."
        description="Meet the founders leading Nexus Inc.'s mission to create world-class artificial intelligence, digital infrastructure and technology platforms designed, engineered and owned in Africa."
      />

      <main className="bg-black text-white">
        <section className="mx-auto max-w-7xl px-6 py-24">
          <FounderStory />
        </section>

        <section className="mx-auto max-w-7xl space-y-32 px-6 pb-32">
          {founders.map((founder, index) => (
            <FounderCard
              key={founder.slug}
              founder={founder}
              reverse={index % 2 === 1}
            />
          ))}
        </section>
      </main>
    </>
  );
}