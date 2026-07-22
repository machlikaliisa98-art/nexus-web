import Link from "next/link";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function PrimaryButton({
  href,
  children,
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full bg-blue-600 px-8 py-4 text-white transition duration-300 hover:bg-blue-500"
    >
      {children}
    </Link>
  );
}