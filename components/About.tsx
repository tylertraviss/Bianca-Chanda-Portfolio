"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ABOUT } from "@/data/content";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-5 gap-16 items-start">
        {/* Left: heading + philosophy */}
        <div className="md:col-span-2">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">About</span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-[#0A1628] text-4xl md:text-5xl font-semibold leading-tight mb-10">
              {ABOUT.heading}
            </h2>
            <blockquote className="border-l-2 border-[#C9A84C] pl-5">
              <p className="text-[#0A1628]/60 text-sm leading-relaxed italic">
                &ldquo;{ABOUT.philosophy}&rdquo;
              </p>
            </blockquote>
          </AnimatedSection>
        </div>

        {/* Right: paragraphs */}
        <div className="md:col-span-3 space-y-6">
          {ABOUT.paragraphs.map((p, i) => (
            <AnimatedSection key={i} delay={0.1 * (i + 1)}>
              <p className="text-[#2D3142]/80 text-base md:text-lg leading-relaxed">{p}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
