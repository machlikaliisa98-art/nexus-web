"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Technologies", href: "/technologies" },
  { name: "Products", href: "/products" },
  { name: "Leadership", href: "/leadership" },
  { name: "Board", href: "/board" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#050816]/85 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}

          <Link href="/" className="flex items-center">

            <Image
              src="/logo.png"
              alt="Nexus Inc."
              width={170}
              height={48}
              priority
              className="h-10 w-auto"
            />

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8">

            {navigation.map((item) => {

              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition duration-300 ${
                    active
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

          </nav>

          {/* CTA */}

          <Link
            href="/contact"
            className="hidden lg:inline-flex rounded-full bg-blue-600 px-6 py-3 transition hover:bg-blue-500"
          >
            Get in Touch
          </Link>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-3xl"
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>
      </header>

      {/* Mobile Navigation */}

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050816] lg:hidden">

          <div className="flex h-full flex-col items-center justify-center gap-8">

            {navigation.map((item) => {

              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-3xl transition ${
                    active
                      ? "text-blue-400"
                      : "text-white"
                  }`}
                  style={{
                    fontFamily: "Times New Roman, serif",
                  }}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="mt-6 rounded-full bg-blue-600 px-8 py-4"
            >
              Get in Touch
            </Link>

          </div>

        </div>
      )}
    </>
  );
}