interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={
        centered
          ? "mx-auto max-w-4xl text-center"
          : "max-w-4xl"
      }
    >
      <p
        className="uppercase tracking-[0.4em] text-sm text-blue-400"
        style={{ fontFamily: "Arial" }}
      >
        {eyebrow}
      </p>

      <h2
        className="mt-6 text-5xl leading-tight text-white md:text-6xl"
        style={{ fontFamily: "Times New Roman, serif" }}
      >
        {title}
      </h2>

      {description && (
        <p
          className="mt-8 text-lg leading-9 text-gray-300"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}