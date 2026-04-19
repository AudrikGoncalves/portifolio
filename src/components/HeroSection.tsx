"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start pt-36 pb-20 px-6">
      <div className="w-full max-w-4xl flex flex-col items-center text-center">
        {/* Eyebrow */}
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-block mb-6 text-xs font-semibold tracking-widest text-zinc-400 uppercase"
        >
          Arquitetura & Engenharia Civil
        </motion.span>

        {/* H1 */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.08] mb-6"
        >
          Firmitas, Utilitas,
          <br />
          <span className="text-zinc-400 font-semibold">Venustas.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="text-lg sm:text-xl font-normal text-zinc-500 max-w-xl leading-relaxed mb-10"
        >
          Estrutura que suporta. Espaço que serve.{" "}
          <span className="text-zinc-700 font-medium">Arquitetura que inspira.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="flex items-center gap-4 mb-16"
        >
          <a
            href="#projetos"
            className="px-7 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-150 shadow-sm shadow-blue-200"
          >
            Ver Projetos
          </a>
          <a
            href="/audrik-duarte-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="px-7 py-2.5 rounded-full border border-blue-600 text-blue-600 text-sm font-semibold hover:bg-blue-50 active:scale-95 transition-all duration-150"
          >
            Baixar
          </a>
        </motion.div>

        {/* Hero Image Placeholder */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
          className="w-full max-w-5xl"
        >
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-100 ring-1 ring-zinc-200/80">
            {/* Inner shimmer lines simulating an architectural render */}
            <div className="absolute inset-0 flex items-end justify-center pb-10 gap-1 opacity-20">
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={i}
                  className="w-0.5 bg-zinc-400 rounded-full"
                  style={{ height: `${30 + Math.sin(i * 0.6) * 25}%` }}
                />
              ))}
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <div className="w-12 h-12 rounded-full border-2 border-zinc-300 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-zinc-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 20.25h18M3.75 3h16.5M12 3v4.5"
                  />
                </svg>
              </div>
              <p className="text-xs text-zinc-400 font-medium tracking-wide">
                Imagem do projeto em destaque
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
