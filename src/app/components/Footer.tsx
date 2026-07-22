import Link from "next/link";

export default function Footer() {
  const company = [
    { name: "About", href: "/about" },
    { name: "Research", href: "/research" },
    { name: "Technologies", href: "/technologies" },
    { name: "Products", href: "/products" },
  ];

  const leadership = [
    { name: "Leadership", href: "/leadership" },
    { name: "Board of Directors", href: "/board" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#040611]">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 md:grid-cols-3">

          {/* Brand */}

          <div>

            <h2
              className="text-3xl text-white"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Nexus Inc.
            </h2>

            <p
              className="mt-6 leading-8 text-gray-400"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Building the next generation of intelligent systems through
              artificial intelligence, research, enterprise software and
              digital infrastructure.
            </p>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-4">

              {company.map((item) => (

                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="text-gray-400 transition hover:text-blue-400"
                  >
                    {item.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Resources
            </h3>

            <ul className="space-y-4">

              {leadership.map((item) => (

                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="text-gray-400 transition hover:text-blue-400"
                  >
                    {item.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

        </div>

      </div>

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Nexus Inc. All rights reserved.
          </p>

          <p>
            Kigali • Rwanda
          </p>

        </div>

      </div>

    </footer>
  );
}