interface ExpertiseCardProps {
  title: string;
  description: string;
}

export default function ExpertiseCard({
  title,
  description,
}: ExpertiseCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition duration-300 hover:border-cyan-500">
      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 leading-8 text-zinc-400">
        {description}
      </p>
    </div>
  );
}