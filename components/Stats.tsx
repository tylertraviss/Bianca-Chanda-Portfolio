"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const STATS = [
  { value: 4, suffix: "", label: "Degrees & Graduate Programs", detail: "Esade · Queen's · UCLA Anderson · TMU" },
  { value: 3, suffix: "+", label: "Consulting Engagements", detail: "Across CPG, B2B Manufacturing & Media" },
  { value: 150, suffix: "+", label: "Audience at APG × POCAM", detail: "Hackathon win against 3 competing teams" },
  { value: 3, suffix: "", label: "Countries Studied & Worked In", detail: "Canada · Spain · United States" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1400;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-semibold text-[#C9A84C]">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#0A1628] px-6 py-20 md:py-24 border-t border-[#F5F0E8]/05">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#F5F0E8]/08">
          {STATS.map((stat, i) => (
            <AnimatedSection key={i} delay={0.1 * i}>
              <div className="bg-[#0A1628] p-8 md:p-10 flex flex-col gap-3 group hover:bg-[#132238] transition-colors duration-300">
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="text-[#F5F0E8] text-sm font-semibold leading-snug">{stat.label}</p>
                <p className="text-[#F5F0E8]/40 text-xs leading-relaxed">{stat.detail}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
