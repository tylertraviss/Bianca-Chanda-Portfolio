"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS, CONTACT } from "@/data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A1628]/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-[family-name:var(--font-display)] text-[#F5F0E8] text-xl font-semibold tracking-wide"
        >
          BC
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#F5F0E8]/80 hover:text-[#C9A84C] text-sm tracking-widest uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${CONTACT.email}`}
            className="ml-2 px-5 py-2 border border-[#C9A84C] text-[#C9A84C] text-sm tracking-widest uppercase hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all duration-200"
          >
            Contact
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-[#F5F0E8] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-4 h-0.5 bg-current transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A1628]/98 backdrop-blur-sm px-6 py-6 flex flex-col gap-5 border-t border-[#C9A84C]/20">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#F5F0E8]/80 hover:text-[#C9A84C] text-sm tracking-widest uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-2 px-5 py-2 border border-[#C9A84C] text-[#C9A84C] text-sm tracking-widest uppercase text-center hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all duration-200"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
