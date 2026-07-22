import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#050816]">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Company */}

          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-blue-400">
              NEXUS INC.
            </p>

            <h2
              className="mt-5 text-4xl text-white"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Engineering the Future of Intelligence.
            </h2>

            <p className="mt-6 max-w-md leading-8 text-gray-400">
              Nexus Inc. is a research-driven artificial intelligence company
              building intelligent technologies that empower businesses,
              governments and communities through world-class engineering,
              scientific research and responsible innovation.
            </p>
          </div>

          {/* Company */}

          <div>
            <h3 className="text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-3 text-gray-400">

              <li>
                <Link href="#about" className="hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <Link href="#leadership" className="hover:text-white">
                  Leadership
                </Link>
              </li>

              <li>
                <Link href="#board" className="hover:text-white">
                  Board
                </Link>
              </li>

              <li>
                <Link href="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>

            </ul>
          </div>

          {/* Technologies */}

          <div>
            <h3 className="text-lg font-semibold text-white">
              Technologies
            </h3>

            <ul className="mt-6 space-y-3 text-gray-400">

              <li>
                <Link href="/technologies/mcaie-studio" className="hover:text-white">
                  MCAIE Studio
                </Link>
              </li>

              <li>
                <Link href="/technologies/nexus-link" className="hover:text-white">
                  Nexus Link
                </Link>
              </li>

              <li>
                <Link href="/technologies/nexus-atlas" className="hover:text-white">
                  Nexus Atlas
                </Link>
              </li>

              <li>
                <Link href="/research" className="hover:text-white">
                  Research
                </Link>
              </li>

            </ul>
          </div>

          {/* Connect */}

          <div>
            <h3 className="text-lg font-semibold text-white">
              Connect
            </h3>

            <ul className="mt-6 space-y-3 text-gray-400">

              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>

              <li>
                <a
                  href="mailto:info@nexusinc.ai"
                  className="hover:text-white"
                >
                  info@nexusinc.ai
                </a>
              </li>

              <li>
                <Link href="#" className="hover:text-white">
                  LinkedIn
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white">
                  X (Twitter)
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white">
                  GitHub
                </Link>
              </li>

            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 text-sm text-gray-500 lg:flex-row">

            <p>
              © {year} Nexus Inc. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-6">

              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>

              <Link href="/terms" className="hover:text-white">
                Terms of Use
              </Link>

              <Link href="/cookies" className="hover:text-white">
                Cookie Policy
              </Link>

            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}