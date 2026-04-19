const links = [
  {
    label: "E-mail",
    href: "mailto:audrikduarte@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/audrikduarte",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/audrikduarte",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-zinc-500">
          © 2026 Audrik. Arquitetura &amp; Engenharia Civil.
        </p>

        <nav className="flex items-center gap-6">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
