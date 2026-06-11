"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HERO, CONTACT } from "@/data/content";
import MagneticButton from "@/components/ui/MagneticButton";

const LINE1 = "Strategy that moves.";
const LINE2 = "Digital that delivers.";

export default function Hero() {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [phase, setPhase] = useState<"line1" | "line2" | "done">("line1");

  useEffect(() => {
    if (phase === "line1") {
      if (line1.length < LINE1.length) {
        const t = setTimeout(() => setLine1(LINE1.slice(0, line1.length + 1)), 55);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("line2"), 180);
        return () => clearTimeout(t);
      }
    }
    if (phase === "line2") {
      if (line2.length < LINE2.length) {
        const t = setTimeout(() => setLine2(LINE2.slice(0, line2.length + 1)), 55);
        return () => clearTimeout(t);
      } else {
        setPhase("done");
      }
    }
  }, [line1, line2, phase]);

  const showCursor = phase !== "done";

  return (
    <section className="relative min-h-screen bg-[#0A1628] flex items-center overflow-hidden">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A84C]/40 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 w-full py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">
                Strategy · Innovation · Digital
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h1 className="font-[family-name:var(--font-display)] text-[#F5F0E8] text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6 min-h-[2.4em]">
                <span>{line1}</span>
                {phase === "line1" && showCursor && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    className="inline-block w-[3px] h-[0.85em] bg-[#C9A84C] ml-1 align-middle"
                  />
                )}
                {line2 && (
                  <>
                    <br />
                    <span className="text-[#C9A84C]">{line2}</span>
                    {phase === "line2" && showCursor && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                        className="inline-block w-[3px] h-[0.85em] bg-[#C9A84C] ml-1 align-middle"
                      />
                    )}
                  </>
                )}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-[#F5F0E8]/70 text-lg leading-relaxed mb-10 max-w-md"
            >
              {HERO.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.0 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton
                href={`mailto:${CONTACT.email}`}
                className="block px-8 py-3.5 bg-[#C9A84C] text-[#0A1628] text-sm tracking-widest uppercase font-semibold hover:bg-[#D4B96A] transition-colors duration-200"
              >
                {HERO.cta}
              </MagneticButton>
              <MagneticButton
                href="#work"
                className="block px-8 py-3.5 border border-[#F5F0E8]/30 text-[#F5F0E8]/80 text-sm tracking-widest uppercase hover:border-[#F5F0E8]/60 hover:text-[#F5F0E8] transition-all duration-200"
              >
                View Work
              </MagneticButton>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-96 md:w-80 md:h-[440px]">
              <div className="absolute -top-3 -right-3 w-full h-full border border-[#C9A84C]/40" />
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={HERO.photo}
                  alt="Bianca Chanda — Strategy & Digital Transformation Consultant"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[#F5F0E8]/30 text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#C9A84C]/60 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
