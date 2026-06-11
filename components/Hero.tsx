"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HERO, CONTACT } from "@/data/content";

export default function Hero() {
  const taglineLines = HERO.tagline.split("\n");

  return (
    <section className="relative min-h-screen bg-[#0A1628] flex items-center overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A84C]/40 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 w-full py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">
                Strategy · Innovation · Digital
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-[family-name:var(--font-display)] text-[#F5F0E8] text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6"
            >
              {taglineLines.map((line, i) => (
                <span key={i} className={i === 1 ? "text-[#C9A84C]" : ""}>
                  {line}
                  {i < taglineLines.length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[#F5F0E8]/70 text-lg leading-relaxed mb-10 max-w-md"
            >
              {HERO.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={`mailto:${CONTACT.email}`}
                className="px-8 py-3.5 bg-[#C9A84C] text-[#0A1628] text-sm tracking-widest uppercase font-semibold hover:bg-[#D4B96A] transition-colors duration-200"
              >
                {HERO.cta}
              </a>
              <a
                href="#work"
                className="px-8 py-3.5 border border-[#F5F0E8]/30 text-[#F5F0E8]/80 text-sm tracking-widest uppercase hover:border-[#F5F0E8]/60 hover:text-[#F5F0E8] transition-all duration-200"
              >
                View Work
              </a>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-96 md:w-80 md:h-[440px]">
              {/* Gold border offset */}
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
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[#F5F0E8]/30 text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#C9A84C]/60 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
