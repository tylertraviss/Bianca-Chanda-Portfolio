"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { WORK } from "@/data/content";

const WORK_PHOTOS: Record<string, string> = {
  "MORNINGS": "/team-mornings.jpeg",
};

type WorkItem = typeof WORK[number];

function Overlay({ item, onClose }: { item: WorkItem; onClose: () => void }) {
  const photo = WORK_PHOTOS[item.company];

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-[#0A1628]/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        className="relative z-10 ml-auto w-full max-w-3xl h-full bg-[#F5F0E8] overflow-y-auto"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center border border-[#0A1628]/20 hover:border-[#0A1628] hover:bg-[#0A1628] hover:text-[#F5F0E8] text-[#0A1628] transition-all duration-200 text-lg"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Photo header */}
        {photo && (
          <div className="relative w-full h-56 md:h-72 overflow-hidden">
            <Image
              src={photo}
              alt={`${item.company} team`}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F5F0E8]" />
          </div>
        )}

        <div className={`px-8 md:px-12 pb-16 ${!photo ? "pt-20" : "pt-8"}`}>
          {/* Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase font-semibold">{item.sector}</span>
            <span className="text-[#0A1628]/20">·</span>
            <span className="text-[#0A1628]/40 text-xs">{item.period}</span>
          </div>

          <h2 className="font-[family-name:var(--font-display)] text-[#0A1628] text-3xl md:text-4xl font-semibold leading-tight mb-1">
            {item.company}
          </h2>
          <p className="text-[#0A1628]/50 text-sm mb-8">{item.role}</p>

          {/* Headline quote */}
          <blockquote className="border-l-2 border-[#C9A84C] pl-5 mb-10">
            <p className="font-[family-name:var(--font-display)] text-[#0A1628] text-lg italic leading-snug">
              &ldquo;{item.headline}&rdquo;
            </p>
          </blockquote>

          {/* Context */}
          <div className="mb-8">
            <h3 className="text-[#0A1628] text-xs tracking-[0.2em] uppercase font-semibold mb-3">Context</h3>
            <p className="text-[#2D3142]/70 text-base leading-relaxed">{item.context}</p>
          </div>

          {/* Contributions */}
          <div className="mb-8">
            <h3 className="text-[#0A1628] text-xs tracking-[0.2em] uppercase font-semibold mb-4">Contributions</h3>
            <ul className="space-y-3">
              {item.contributions.map((c, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="flex items-start gap-3 text-[#2D3142]/70 text-sm leading-relaxed"
                >
                  <span className="text-[#C9A84C] flex-shrink-0 mt-0.5">—</span>
                  {c}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div className="bg-[#0A1628] p-6 mb-8">
            <h3 className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase font-semibold mb-3">Outcome</h3>
            <p className="text-[#F5F0E8]/80 text-sm leading-relaxed">{item.outcome}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1.5 border border-[#0A1628]/15 text-[#0A1628]/50 tracking-wide">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Work() {
  const [selected, setSelected] = useState<WorkItem | null>(null);

  return (
    <>
      <SectionWrapper id="work">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Work</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[#0A1628] text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Selected engagements
          </h2>
          <p className="text-[#2D3142]/60 text-lg max-w-xl mb-16">
            A sample of consulting work across digital transformation, market strategy, and competitive positioning.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-0.5">
          {WORK.map((item, i) => (
            <AnimatedSection key={i} delay={0.08 * i}>
              <button
                onClick={() => setSelected(item)}
                className="group w-full text-left border border-[#0A1628]/10 hover:border-[#C9A84C]/60 p-8 transition-all duration-300 hover:bg-[#0A1628]/[0.02] relative overflow-hidden"
              >
                {/* Hover fill */}
                <motion.div
                  className="absolute inset-0 bg-[#0A1628] origin-bottom"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-[family-name:var(--font-display)] text-[#C9A84C]/40 group-hover:text-[#C9A84C]/60 text-4xl font-semibold transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mb-1">
                    <span className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase group-hover:text-[#C9A84C] transition-colors">
                      {item.sector}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-[#0A1628] group-hover:text-[#F5F0E8] text-xl font-semibold mb-2 transition-colors">
                    {item.company}
                  </h3>
                  <p className="text-[#2D3142]/50 group-hover:text-[#F5F0E8]/50 text-xs mb-6 transition-colors">
                    {item.role} · {item.period}
                  </p>
                  <p className="text-[#2D3142]/70 group-hover:text-[#F5F0E8]/70 text-sm leading-relaxed line-clamp-3 transition-colors">
                    {item.headline}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[#C9A84C] text-xs tracking-widest uppercase font-semibold">
                    <span>Open case study</span>
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      <AnimatePresence>
        {selected && <Overlay item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  );
}
