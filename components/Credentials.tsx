"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CREDENTIALS } from "@/data/content";

export default function Credentials() {
  return (
    <SectionWrapper id="credentials" dark>
      <AnimatedSection>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Credentials</span>
        </div>
        <h2 className="font-[family-name:var(--font-display)] text-[#F5F0E8] text-4xl md:text-5xl font-semibold leading-tight mb-16">
          Education &amp; Certifications
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Education */}
        <div>
          <AnimatedSection>
            <h3 className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-semibold mb-8">
              Education
            </h3>
          </AnimatedSection>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-[#F5F0E8]/10" />
            <div className="space-y-8 pl-6">
              {CREDENTIALS.education.map((edu, i) => (
                <AnimatedSection key={i} delay={0.1 * i}>
                  <div className="relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-[27px] top-1.5 w-2 h-2 rounded-full border border-[#C9A84C] bg-[#0A1628]" />
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h4 className="font-[family-name:var(--font-display)] text-[#F5F0E8] font-semibold text-base leading-snug">
                        {edu.institution}
                      </h4>
                      <span className="text-[#F5F0E8]/40 text-xs whitespace-nowrap flex-shrink-0 mt-1">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-[#C9A84C]/80 text-sm mb-0.5">{edu.degree}</p>
                    <p className="text-[#F5F0E8]/40 text-xs">{edu.location}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications + tools */}
        <div>
          <AnimatedSection delay={0.1}>
            <h3 className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-semibold mb-8">
              Certifications
            </h3>
          </AnimatedSection>
          <div className="space-y-4">
            {CREDENTIALS.certifications.map((cert, i) => (
              <AnimatedSection key={i} delay={0.15 * (i + 1)}>
                <div className="border border-[#F5F0E8]/10 p-5 hover:border-[#C9A84C]/30 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[#F5F0E8] font-semibold text-sm">{cert.name}</p>
                      <p className="text-[#F5F0E8]/50 text-xs mt-1">
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

          <AnimatedSection delay={0.3}>
            <h3 className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-semibold mt-10 mb-5">
              Tools &amp; Platforms
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Qualtrics", "Screaming Frog", "Shopify Analytics",
                "Notion", "Canva", "Microsoft Teams",
                "Google Meet", "PowerPoint", "Outlook",
              ].map((tool) => (
                <span
                  key={tool}
                  className="text-xs px-3 py-1.5 border border-[#F5F0E8]/15 text-[#F5F0E8]/60 hover:border-[#C9A84C]/40 hover:text-[#C9A84C]/80 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </SectionWrapper>
  );
}
