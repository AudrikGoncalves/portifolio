"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

interface Props {
  title: string;
  subtitle: string;
  category: string;
  num: string;
  heroImage: string;
}

export default function ProjectHero({ title, subtitle, category, num, heroImage }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: image moves down 150px as hero scrolls out of view
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax image — scale-125 gives ±12.5% buffer */}
      <motion.div style={{ y }} className="absolute inset-0 scale-125 origin-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      </motion.div>

      {/* Gradient overlay — bottom to top for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

      {/* Back button — top left, clears navbar h-14 */}
      <div className="absolute top-16 left-6 z-10">
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors duration-150"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Voltar
        </Link>
      </div>

      {/* Title — bottom-center */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-16 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-xs font-semibold tracking-widest text-white/60 uppercase mb-3"
        >
          {num} — {category}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.06]"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="mt-3 text-lg text-white/70 font-medium"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}
