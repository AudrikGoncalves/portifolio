"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projects";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

function ProjectImage({
  src,
  alt,
  aspect = "16/9",
  rounded = "rounded-2xl",
}: {
  src: string;
  alt: string;
  aspect?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden ${rounded} ring-1 ring-black/8`}
      style={{ aspectRatio: aspect }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function DetailLink({
  href,
  dark = false,
}: {
  href: string;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-opacity duration-150 hover:opacity-60 ${
        dark ? "text-blue-400" : "text-blue-600"
      }`}
    >
      Ver detalhes ›
    </Link>
  );
}

// Destructure the 5 projects from the data source
const [p1, p2, p3, p4, p5] = projects;

export default function ProjectsSection() {
  return (
    <section id="projetos">
      {/* ── Projeto 1 — Fundo branco, centralizado ── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="bg-white px-6 py-28 flex flex-col items-center text-center border-t border-zinc-100"
      >
        <div className="w-full max-w-4xl">
          <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4 block">
            {p1.num} — {p1.category}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 tracking-tight mb-3">
            {p1.title}
          </h2>
          <p className="text-lg text-zinc-500 mb-6">{p1.subtitle}</p>
          <div className="mb-10">
            <DetailLink href={`/projeto/${p1.slug}`} />
          </div>
          <ProjectImage src={p1.listingImage} alt={p1.title} aspect="16/9" rounded="rounded-2xl" />
        </div>
      </motion.div>

      {/* ── Projeto 2 — Fundo escuro, contraste dramático ── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="bg-zinc-950 px-6 py-28 flex flex-col items-center text-center"
      >
        <div className="w-full max-w-4xl">
          <span className="text-xs font-semibold tracking-widest text-zinc-600 uppercase mb-4 block">
            {p2.num} — {p2.category}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-3">
            {p2.title}
          </h2>
          <p className="text-lg text-zinc-400 mb-6">{p2.subtitle}</p>
          <div className="mb-10">
            <DetailLink href={`/projeto/${p2.slug}`} dark />
          </div>
          <ProjectImage src={p2.listingImage} alt={p2.title} aspect="16/9" rounded="rounded-2xl" />
        </div>
      </motion.div>

      {/* ── Projetos 3 & 4 — Grid side-by-side ── */}
      <div className="bg-zinc-50 px-6 py-28 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-12 block text-center"
          >
            {p3.num} & {p4.num} — Uso Misto & Habitação
          </motion.span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[p3, p4].map((proj) => (
              <motion.div
                key={proj.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="bg-zinc-100 rounded-3xl p-8 flex flex-col"
              >
                <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-6">
                  {proj.num}
                </span>
                <div className="mb-6">
                  <ProjectImage
                    src={proj.listingImage}
                    alt={proj.title}
                    aspect="4/3"
                    rounded="rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 tracking-tight mb-1">
                  {proj.title}
                </h3>
                <p className="text-sm text-zinc-500 mb-5">{proj.subtitle}</p>
                <DetailLink href={`/projeto/${proj.slug}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Projeto 5 — Fundo branco, fechamento com impacto ── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="bg-white px-6 py-28 flex flex-col items-center text-center border-t border-zinc-100"
      >
        <div className="w-full max-w-4xl">
          <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4 block">
            {p5.num} — {p5.category}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 tracking-tight mb-3">
            {p5.title}
          </h2>
          <p className="text-lg text-zinc-500 mb-6">{p5.subtitle}</p>
          <div className="mb-10">
            <DetailLink href={`/projeto/${p5.slug}`} />
          </div>
          <ProjectImage src={p5.listingImage} alt={p5.title} aspect="16/9" rounded="rounded-2xl" />
        </div>
      </motion.div>
    </section>
  );
}
