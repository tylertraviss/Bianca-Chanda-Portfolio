"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";

const QUESTIONS = [
  "Why do some brands create communities while others don't?",
  "Where does friction exist within an organization?",
  "How does strategy become operational reality?",
  "Why do consumers behave differently across countries?",
  "What systemic changes would create better outcomes?",
  "How can strategy translate into execution?",
  "Why do certain experiences generate loyalty?",
];

export default function ThinkingTeaser() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const question = QUESTIONS[index];
    if (typing) {
      if (displayed.length < question.length) {
        const timeout = setTimeout(() => {
          setDisplayed(question.slice(0, displayed.length + 1));
        }, 38);
        return () => clearTimeout(timeout);
      } else {
        // Pause then start erasing
        const timeout = setTimeout(() => setTyping(false), 2400);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayed.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 18);
        return () => clearTimeout(timeout);
      } else {
        setIndex((i) => (i + 1) % QUESTIONS.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, index]);

  return (
    <section className="relative bg-[#0A1628] px-6 py-28 md:py-36 overflow-hidden">
      {/* Decorative large faded number */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-[family-name:var(--font-display)] text-[20rem] font-semibold text-[#F5F0E8]/[0.02] select-none leading-none pointer-events-none">
        ?
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">How I Think</span>
          </div>
        </AnimatedSection>

        <div className="mb-6">
          <p className="text-[#F5F0E8]/40 text-sm tracking-[0.2em] uppercase mb-6">
            Questions I keep coming back to —
          </p>
          <div className="min-h-[120px] md:min-h-[100px] flex items-start">
            <h2 className="font-[family-name:var(--font-display)] text-[#F5F0E8] text-3xl md:text-5xl font-semibold leading-tight max-w-3xl">
              {displayed}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-[3px] h-[1em] bg-[#C9A84C] ml-1 align-middle"
              />
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-6 mt-12">
          <MagneticButton
            href="/thinking"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#C9A84C] text-[#0A1628] text-sm tracking-widest uppercase font-semibold hover:bg-[#D4B96A] transition-colors duration-200"
          >
            See how I get there
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </MagneticButton>
          <div className="flex gap-1.5">
            {QUESTIONS.map((_, i) => (
              <div
                key={i}
                className={`h-px transition-all duration-300 ${
                  i === index ? "w-6 bg-[#C9A84C]" : "w-2 bg-[#F5F0E8]/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
