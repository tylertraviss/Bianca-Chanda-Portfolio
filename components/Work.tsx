"use client";

import { useState } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { WORK } from "@/data/content";

const WORK_PHOTOS: Record<string, string> = {
  "MORNINGS": "/team-mornings.jpeg",
};

export default function Work() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
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

      <div className="space-y-0.5">
        {WORK.map((item, i) => (
          <AnimatedSection key={i} delay={0.08 * i}>
            <div className="border border-[#0A1628]/10">
              {/* Header row */}
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full text-left p-6 md:p-8 flex items-start md:items-center justify-between gap-4 hover:bg-[#0A1628]/[0.02] transition-colors group"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase font-medium">
                      {item.sector}
                    </span>
                    <span className="text-[#0A1628]/20 text-xs">·</span>
                    <span className="text-[#0A1628]/50 text-xs">{item.period}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-[#0A1628] text-xl md:text-2xl font-semibold">
                    {item.company}
                  </h3>
                  <p className="text-[#2D3142]/60 text-sm mt-1">{item.role}</p>
                </div>
                <div
                  className={`text-[#C9A84C] text-2xl transition-transform duration-300 flex-shrink-0 mt-1 md:mt-0 ${
                    expanded === i ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </div>
              </button>

              {/* Expanded content */}
              {expanded === i && (
                <div className="px-6 md:px-8 pb-8 border-t border-[#0A1628]/08">
                  <p className="text-[#0A1628] font-[family-name:var(--font-display)] text-lg italic mt-6 mb-6 leading-snug">
                    &ldquo;{item.headline}&rdquo;
                  </p>

                  {WORK_PHOTOS[item.company] && (
                    <div className="relative w-full h-56 md:h-72 mb-8 overflow-hidden">
                      <Image
                        src={WORK_PHOTOS[item.company]}
                        alt={`${item.company} team`}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="text-[#0A1628] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                        Context
                      </h4>
                      <p className="text-[#2D3142]/70 text-sm leading-relaxed">{item.context}</p>
                    </div>
                    <div>
                      <h4 className="text-[#0A1628] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                        Contributions
                      </h4>
                      <ul className="space-y-2">
                        {item.contributions.map((c, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-sm text-[#2D3142]/70">
                            <span className="text-[#C9A84C] mt-1 flex-shrink-0">—</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-2 border-[#C9A84C] pl-5 mb-6">
                    <h4 className="text-[#0A1628] text-xs tracking-[0.2em] uppercase font-semibold mb-2">
                      Outcome
                    </h4>
                    <p className="text-[#2D3142]/80 text-sm leading-relaxed">{item.outcome}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-[#0A1628]/05 border border-[#0A1628]/10 text-[#0A1628]/60 tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
