"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "Strategy", "·", "Digital Transformation", "·",
  "Innovation", "·", "Market Intelligence", "·",
  "Executive Advisory", "·", "Change Management", "·",
  "Discovery Facilitation", "·", "Stakeholder Alignment", "·",
];

export default function Marquee() {
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="bg-[#C9A84C] py-4 overflow-hidden border-y border-[#C9A84C]">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className={`text-[#0A1628] text-sm tracking-[0.2em] uppercase font-semibold flex-shrink-0 ${
              item === "·" ? "opacity-40" : ""
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
