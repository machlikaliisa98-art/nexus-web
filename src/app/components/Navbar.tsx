"use client";

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
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-zinc-800 bg-black/85 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Wordmark */}

          <Link
            href="/"
            className="text-xl font-bold tracking-[0.3em] text-white transition hover:text-cyan-400"
          >
            NEXUS INC.
          </Link>

          {/* Desktop */}

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition ${
                    active
                      ? "text-cyan-400"
                      : "text-zinc-400 hover:text-white"
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
            className="hidden rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400 lg:inline-flex"
          >
            Get in Touch
          </Link>

          {/* Mobile */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-white lg:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black lg:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-8">

            {navigation.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-3xl ${
                    active
                      ? "text-cyan-400"
                      : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="mt-8 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black"
            >
              Get in Touch
            </Link>

          </div>
        </div>
      )}
    </>
  );
}