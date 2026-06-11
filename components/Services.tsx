"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TiltCard from "@/components/ui/TiltCard";
import { SERVICES } from "@/data/content";

export default function Services() {
  return (
    <SectionWrapper id="services" dark>
      <AnimatedSection>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Services</span>
        </div>
        <h2 className="font-[family-name:var(--font-display)] text-[#F5F0E8] text-4xl md:text-5xl font-semibold leading-tight mb-4">
          Where I can help
        </h2>
        <p className="text-[#F5F0E8]/60 text-lg max-w-xl mb-16">
          Three practice areas, one consistent approach: understand the real problem before proposing solutions.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-0.5">
        {SERVICES.map((service, i) => (
          <AnimatedSection key={i} delay={0.1 * (i + 1)}>
            <TiltCard className="h-full">
              <div className="border border-[#F5F0E8]/10 hover:border-[#C9A84C]/40 p-8 h-full transition-colors duration-300 hover:bg-[#132238] cursor-default">
                <div className="text-[#C9A84C] text-3xl mb-6">{service.icon}</div>
                <h3 className="font-[family-name:var(--font-display)] text-[#F5F0E8] text-xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-[#F5F0E8]/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 border border-[#C9A84C]/30 text-[#C9A84C]/70 tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
