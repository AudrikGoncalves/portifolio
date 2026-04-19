"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

interface Props {
  project: Project;
}

export default function ProjectSpecs({ project }: Props) {
  return (
    <>
      {/* ── Info Section — 2-col grid ── */}
      <section className="bg-white px-6 py-24 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_280px] gap-16">
          {/* Left — description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4 block">
              Sobre o Projeto
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-6 leading-[1.15]">
              {project.title}
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed max-w-prose">
              {project.shortDescription}
            </p>
          </motion.div>

          {/* Right — metadata card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="flex flex-col gap-6 pt-1"
          >
            {[
              { label: "Localização", value: project.location },
              { label: "Área", value: project.area },
              { label: "Ano", value: project.year },
              { label: "Categoria", value: project.category },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-1">
                  {label}
                </p>
                <p className="text-sm font-medium text-zinc-900">{value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Specs Table — estilo Apple iPhone comparison ── */}
      <section className="bg-zinc-50 px-6 py-24 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="mb-12"
          >
            <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4 block">
              Ficha Técnica
            </span>
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">
              Especificações Técnicas
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="divide-y divide-zinc-200"
          >
            {project.specs.map(({ label, value }) => (
              <div
                key={label}
                className="flex items-baseline justify-between py-4 gap-8"
              >
                <span className="text-sm text-zinc-500 flex-shrink-0">{label}</span>
                <span className="text-sm font-semibold text-zinc-900 text-right">
                  {value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
