"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080C14]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}

        <Link href="#home" className="flex items-center">
          <Image
            src="/images/Logo.png"
            alt="Nexus Inc."
            width={55}
            height={55}
            priority
          />
        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-10 text-sm tracking-[0.08em] text-gray-300 lg:flex">

          <Link href="#home" className="transition duration-300 hover:text-white">
            Home
          </Link>

          <Link href="#about" className="transition duration-300 hover:text-white">
            About
          </Link>

          <Link href="#technologies" className="transition duration-300 hover:text-white">
            Technologies
          </Link>

          <Link href="#research" className="transition duration-300 hover:text-white">
            Research
          </Link>

          <Link href="#board" className="transition duration-300 hover:text-white">
            Board of Directors
          </Link>

          <Link href="#leadership" className="transition duration-300 hover:text-white">
            Leadership
          </Link>

          <Link href="#insights" className="transition duration-300 hover:text-white">
            Insights
          </Link>

          <Link href="#contact" className="transition duration-300 hover:text-white">
            Contact
          </Link>

        </nav>

      </div>
    </header>
  );
}