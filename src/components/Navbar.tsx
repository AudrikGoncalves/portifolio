"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Projetos", href: "#projetos" },
  { label: "Currículo", href: "#curriculo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-zinc-200/60 shadow-sm"
          : "bg-transparent"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-zinc-900 hover:text-zinc-600 transition-colors"
        >
          PORTIFOLIO - Audrik Duarte Coelho Gonçalves
        </Link>

        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
