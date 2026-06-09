"use client";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export default function SectionWrapper({ id, className = "", children, dark = false }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`w-full px-6 py-20 md:py-28 ${dark ? "bg-[#0A1628] text-[#F5F0E8]" : "bg-[#F5F0E8] text-[#2D3142]"} ${className}`}
    >
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  );
}
