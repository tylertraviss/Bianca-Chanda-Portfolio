"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CONTACT } from "@/data/content";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-2xl">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Contact</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[#0A1628] text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Let&apos;s work together
          </h2>
          <p className="text-[#2D3142]/70 text-lg leading-relaxed mb-12">
            I&apos;m currently open to new consulting engagements — strategy, digital transformation, and market
            intelligence. If you&apos;re working on something meaningful and want a thoughtful partner to help you
            navigate the complexity, reach out.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={`mailto:${CONTACT.email}`}
              className="group flex items-center gap-3 px-8 py-4 bg-[#0A1628] text-[#F5F0E8] hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all duration-200"
            >
              <span className="text-sm tracking-widest uppercase font-semibold">Send an email</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 border border-[#0A1628]/20 text-[#0A1628] hover:border-[#0A1628] transition-all duration-200"
            >
              <span className="text-sm tracking-widest uppercase font-semibold">LinkedIn</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-[#2D3142]/50">
            <span className="flex items-center gap-2">
              <span className="text-[#C9A84C]">◈</span>
              {CONTACT.location}
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#C9A84C]">◉</span>
              {CONTACT.email}
            </span>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
