"use client";

import { motion, type Variants } from "framer-motion";
import type { Project } from "@/lib/projects";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

interface Props {
  project: Project;
}

export default function ProjectTechnical({ project }: Props) {
  return (
    <section className="bg-white px-6 py-24 border-t border-zinc-100">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-12"
        >
          <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4 block">
            BIM & Engenharia
          </span>
          <h2 className="text-3xl font-bold text-zinc-900 tracking-tight mb-5">
            {project.technicalTitle}
          </h2>
          <p className="text-base text-zinc-600 leading-relaxed max-w-2xl">
            {project.technicalDescription}
          </p>
        </motion.div>

        {/* Technical images grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {project.technicalImages.map((img, i) => (
            <motion.figure
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="flex flex-col gap-3"
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 ring-1 ring-zinc-200/80">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="text-xs text-zinc-400 font-medium tracking-wide">
                {img.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mt-16 pt-10 border-t border-zinc-100 flex items-center justify-between flex-wrap gap-4"
        >
          <p className="text-sm text-zinc-400">
            Imagens e documentação técnica mediante solicitação.
          </p>
          <a
            href="/curriculo.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-zinc-900 text-zinc-900 text-sm font-semibold hover:bg-zinc-900 hover:text-white active:scale-95 transition-all duration-200"
          >
            Baixar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
