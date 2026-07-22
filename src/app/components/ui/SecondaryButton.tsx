import Link from "next/link";

interface SecondaryButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function SecondaryButton({
  href,
  children,
}: SecondaryButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full border border-blue-500 px-8 py-4 text-white transition duration-300 hover:bg-blue-600"
    >
      {children}
    </Link>
  );
}