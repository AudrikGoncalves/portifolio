"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const milestones = [
  {
    year: "2019 – 2024",
    title: "Engenharia Civil",
    org: "PUC Minas",
    desc: "Formação com ênfase em estruturas, materiais e projetos de infraestrutura urbana e habitacional.",
  },
  {
    year: "2019 – 2024",
    title: "Arquitetura e Urbanismo",
    org: "PUC Minas",
    desc: "Formação em projeto arquitetônico, planejamento urbano e design de espaços construídos.",
  },
  {
    year: "2022 – 2023",
    title: "Monitor — Laboratório de Engenharia Civil",
    org: "PUC Minas",
    desc: "Atuação como monitor técnico, conduzindo experimentos, apoiando práticas laboratoriais e orientando colegas em ensaios de materiais e estruturas.",
  },
];

export default function CurriculoSection() {
  return (
    <section
      id="curriculo"
      className="bg-zinc-50 px-6 py-28 border-t border-zinc-100"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-20"
        >
          <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4 block">
            Trajetória
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 tracking-tight leading-[1.1]">
            Trajetória e<br />Rigor Técnico.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 top-2 bottom-0 w-px bg-zinc-200 hidden md:block" />

          <div className="flex flex-col">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className={`relative md:pl-12 ${i < milestones.length - 1 ? "pb-14" : "pb-0"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-4.5px] top-[6px] w-2.5 h-2.5 rounded-full bg-zinc-900 hidden md:block" />

                <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-2 block">
                  {m.year}
                </span>
                <h3 className="text-xl font-bold text-zinc-900 tracking-tight mb-1">
                  {m.title}
                </h3>
                <p className="text-sm font-semibold text-zinc-400 mb-3">{m.org}</p>
                <p className="text-sm text-zinc-500 leading-relaxed max-w-xl">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="mt-20"
        >
          <a
            href="/audrik-duarte-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full border border-zinc-900 text-zinc-900 text-sm font-semibold hover:bg-zinc-900 hover:text-white active:scale-95 transition-all duration-200"
          >
            Baixar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
