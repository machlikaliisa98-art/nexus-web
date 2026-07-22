"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/technologies", label: "Technologies" },
  { href: "/products", label: "Products" },
  { href: "/leadership", label: "Leadership" },
  { href: "/board", label: "Board" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}

          <Link
            href="/"
            className="text-2xl font-semibold tracking-wide text-white"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Nexus
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition ${
                    active
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}

          <Link
            href="/contact"
            className="hidden rounded-full bg-blue-600 px-6 py-3 transition hover:bg-blue-500 lg:inline-flex"
          >
            Get in Touch
          </Link>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 z-40 bg-[#050816] transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col justify-center gap-8 px-10">

          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-3xl ${
                  active ? "text-blue-400" : "text-white"
                }`}
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-6 inline-flex w-fit rounded-full bg-blue-600 px-8 py-4"
          >
            Get in Touch
          </Link>

        </div>
      </div>
    </>
  );
}