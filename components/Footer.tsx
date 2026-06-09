"use client";

import { CONTACT } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-[#F5F0E8]/05 px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-[family-name:var(--font-display)] text-[#F5F0E8] text-lg font-semibold tracking-wide">
          Bianca Chanda
        </span>
        <p className="text-[#F5F0E8]/30 text-xs tracking-wide">
          © {new Date().getFullYear()} · Strategy · Innovation · Digital
        </p>
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F5F0E8]/40 hover:text-[#C9A84C] text-xs tracking-widest uppercase transition-colors"
        >
          LinkedIn ↗
        </a>
      </div>
    </footer>
  );
}
