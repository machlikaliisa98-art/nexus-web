"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Research", href: "/research" },
    { name: "Technologies", href: "/technologies" },
    { name: "Products", href: "/products" },
    { name: "Insights", href: "/insights" },
    { name: "Leadership", href: "/leadership" },
    { name: "Board", href: "/board" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/90 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-full.png"
            alt="Nexus Inc."
            width={180}
            height={50}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm tracking-wide text-gray-300 transition hover:text-blue-400"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-blue-600 px-6 py-3 text-sm font-medium transition hover:bg-blue-500 lg:block"
        >
          Get in Touch
        </Link>
      </div>
    </header>
  );
}