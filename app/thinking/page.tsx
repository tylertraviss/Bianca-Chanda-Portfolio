import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How I Think — Bianca Chanda",
  description:
    "An inside look at how Bianca Chanda approaches problems, what manufacturing taught her about organizations, and the questions that drive her work.",
};

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Observe",
    questions: [
      "What is actually happening?",
      "Who are the stakeholders?",
      "What is changing?",
    ],
  },
  {
    number: "02",
    title: "Investigate",
    questions: [
      "Gather information",
      "Ask questions",
      "Understand constraints and incentives",
    ],
  },
  {
    number: "03",
    title: "Find Patterns",
    questions: [
      "Connect customer behavior, operations, technology, and strategy",
      "Look beyond isolated issues",
    ],
  },
  {
    number: "04",
    title: "Develop a Perspective",
    questions: [
      "Form hypotheses about why something works or fails",
      "Identify root causes rather than symptoms",
    ],
  },
  {
    number: "05",
    title: "Translate Insight into Action",
    questions: [
      "Recommend practical changes",
      "Bridge strategy with implementation",
    ],
  },
];

const MANUFACTURING_QUESTIONS = [
  "How do organizations evolve?",
  "How do customer expectations change?",
  "Where does friction exist between teams and processes?",
  "How does strategy become operational reality?",
  "How can partnerships and technology enable transformation?",
];

const CURIOSITY_QUESTIONS = [
  "Why do consumers behave differently across countries?",
  "Why do some brands create communities while others don't?",
  "Why do certain experiences generate loyalty?",
  "How should organizations evolve alongside changing consumer behavior?",
  "Where does friction exist within an organization?",
  "What systemic changes would create better outcomes?",
  "How can strategy translate into execution?",
];

export default function ThinkingPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Top nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/95 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-[#F5F0E8] text-xl font-semibold tracking-wide"
          >
            BC
          </Link>
          <Link
            href="/"
            className="text-[#F5F0E8]/60 hover:text-[#C9A84C] text-xs tracking-[0.2em] uppercase transition-colors flex items-center gap-2"
          >
            <span>←</span> Back to portfolio
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#0A1628] pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">How I Think</span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-[#F5F0E8] text-5xl md:text-6xl font-semibold leading-tight max-w-2xl mb-6">
            Inside the thought process
          </h1>
          <p className="text-[#F5F0E8]/60 text-lg leading-relaxed max-w-xl">
            A look at how I approach problems, what has shaped my perspective, and the questions that connect everything I do.
          </p>
        </div>
      </section>

      {/* Section 1: How I Approach Problems */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Approach</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[#0A1628] text-4xl md:text-5xl font-semibold leading-tight mb-4">
            How I approach problems
          </h2>
          <p className="text-[#2D3142]/70 text-lg leading-relaxed max-w-xl mb-16">
            When I encounter a new problem, I rarely jump straight to solutions. I first try to understand the system behind it.
          </p>

          <div className="space-y-0.5">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="group border border-[#0A1628]/10 hover:border-[#C9A84C]/40 hover:bg-[#0A1628]/[0.02] transition-all duration-200"
              >
                <div className="p-7 md:p-8 flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                  <div className="flex-shrink-0 flex items-center gap-4 md:w-48">
                    <span className="font-[family-name:var(--font-display)] text-[#C9A84C]/40 text-3xl font-semibold">
                      {step.number}
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-[#0A1628] text-xl font-semibold">
                      {step.title}
                    </h3>
                  </div>
                  <ul className="flex-1 space-y-2">
                    {step.questions.map((q, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#2D3142]/70 text-base">
                        <span className="text-[#C9A84C] mt-1 flex-shrink-0">—</span>
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-l-2 border-[#C9A84C] pl-6 max-w-2xl">
            <p className="text-[#2D3142]/80 text-base leading-relaxed italic">
              &ldquo;My goal isn&apos;t simply to analyze problems — it&apos;s to help organizations make better decisions and execute them effectively.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: What Manufacturing Taught Me */}
      <section className="bg-[#0A1628] px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Perspective</span>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-[#F5F0E8] text-4xl md:text-5xl font-semibold leading-tight mb-6">
                What manufacturing taught me
              </h2>
              <p className="text-[#F5F0E8]/60 text-base leading-relaxed mb-6">
                Working in manufacturing made me realize that what interests me isn&apos;t the hardware itself.
              </p>
              <p className="text-[#F5F0E8]/60 text-base leading-relaxed">
                My focus shifts from engineering specifications or product mechanics to deeper organizational questions. It reinforced that my interest lies in understanding how organizations adapt their people, processes, and technology around changing business and customer needs.
              </p>
            </div>
            <div>
              <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-semibold mb-6">
                The questions that emerged
              </p>
              <ul className="space-y-4">
                {MANUFACTURING_QUESTIONS.map((q, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-[#C9A84C]/60 font-[family-name:var(--font-display)] text-lg mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[#F5F0E8]/80 text-base leading-snug">{q}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Questions That Drive Me */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Curiosity</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[#0A1628] text-4xl md:text-5xl font-semibold leading-tight mb-4">
            The questions that drive me
          </h2>
          <p className="text-[#2D3142]/60 text-lg leading-relaxed max-w-xl mb-16">
            These questions are what connect my interests across media, consumer strategy, hospitality, retail, and digital transformation.
          </p>

          <div className="grid md:grid-cols-2 gap-0.5">
            {CURIOSITY_QUESTIONS.map((q, i) => (
              <div
                key={i}
                className="border border-[#0A1628]/10 hover:border-[#C9A84C]/40 hover:bg-[#0A1628]/[0.02] p-7 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <span className="font-[family-name:var(--font-display)] text-[#C9A84C]/30 text-2xl font-semibold flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-[family-name:var(--font-display)] text-[#0A1628] text-lg leading-snug">
                    {q}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#0A1628] px-6 py-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-[family-name:var(--font-display)] text-[#F5F0E8] text-2xl font-semibold mb-2">
              Want to work together?
            </p>
            <p className="text-[#F5F0E8]/50 text-sm">
              If this way of thinking resonates, let&apos;s talk.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="mailto:bianca.chanda.marketing@gmail.com"
              className="px-8 py-3.5 bg-[#C9A84C] text-[#0A1628] text-sm tracking-widest uppercase font-semibold hover:bg-[#D4B96A] transition-colors"
            >
              Get in touch
            </a>
            <Link
              href="/"
              className="px-8 py-3.5 border border-[#F5F0E8]/20 text-[#F5F0E8]/70 text-sm tracking-widest uppercase hover:border-[#F5F0E8]/50 hover:text-[#F5F0E8] transition-all"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
