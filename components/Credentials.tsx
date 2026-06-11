"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CREDENTIALS } from "@/data/content";

const FLAGS: Record<string, string> = {
  "Barcelona, Spain": "🇪🇸",
  "Kingston, Ontario": "🇨🇦",
  "Los Angeles, California": "🇺🇸",
  "Toronto, Ontario": "🇨🇦",
};

export default function Credentials() {
  return (
    <section id="credentials">
      {/* Education — full dark section, big emphasis */}
      <div className="bg-[#0A1628] px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Education</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
              <h2 className="font-[family-name:var(--font-display)] text-[#F5F0E8] text-4xl md:text-5xl font-semibold leading-tight">
                Educated across<br />three countries
              </h2>
              <p className="text-[#F5F0E8]/40 text-sm max-w-xs md:text-right leading-relaxed">
                Canada · Spain · United States<br />
                4 graduate &amp; undergraduate programs
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-0.5">
            {CREDENTIALS.education.map((edu, i) => (
              <AnimatedSection key={i} delay={0.1 * i}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="group border border-[#F5F0E8]/08 hover:border-[#C9A84C]/30 p-7 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors hover:bg-[#132238] cursor-default"
                >
                  <div className="flex items-start gap-5">
                    <span className="text-2xl mt-0.5 flex-shrink-0">{FLAGS[edu.location]}</span>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-[#F5F0E8] text-lg md:text-xl font-semibold leading-snug mb-1">
                        {edu.institution}
                      </h3>
                      <p className="text-[#C9A84C]/80 text-sm">{edu.degree}</p>
                      <p className="text-[#F5F0E8]/30 text-xs mt-1">{edu.location}</p>
                    </div>
                  </div>
                  <span className="text-[#F5F0E8]/30 group-hover:text-[#C9A84C]/60 text-sm font-[family-name:var(--font-display)] flex-shrink-0 transition-colors">
                    {edu.year}
                  </span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications + Tools — lighter section */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Certifications</span>
              </div>
            </AnimatedSection>
            <div className="space-y-3">
              {CREDENTIALS.certifications.map((cert, i) => (
                <AnimatedSection key={i} delay={0.1 * (i + 1)}>
                  <div className="border border-[#0A1628]/10 p-5 hover:border-[#C9A84C]/30 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[#0A1628] font-semibold text-sm">{cert.name}</p>
                        <p className="text-[#2D3142]/50 text-xs mt-1">
                          {cert.issuer} · {cert.author}
                        </p>
                      </div>
                      {cert.note && (
                        <span className="text-xs px-2 py-0.5 border border-[#C9A84C]/40 text-[#C9A84C]/70 flex-shrink-0">
                          {cert.note}
                        </span>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div>
            <AnimatedSection delay={0.1}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Tools &amp; Platforms</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="flex flex-wrap gap-2">
                {[
                  "Qualtrics", "Screaming Frog", "Shopify Analytics",
                  "Notion", "Canva", "Microsoft Teams",
                  "Google Meet", "PowerPoint", "Outlook",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-3 py-1.5 border border-[#0A1628]/15 text-[#0A1628]/60 hover:border-[#C9A84C]/40 hover:text-[#C9A84C]/80 transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
