"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Hammer, GraduationCap, Check } from "lucide-react";

const phases = [
  {
    id: "audit",
    step: "01",
    label: "Audit",
    title: "We learn how your business runs",
    description:
      "We map every workflow, every bottleneck, every hour lost. You get a clear picture of where AI saves the most time \u2014 and what\u2019s not worth touching.",
    highlights: [
      "Full operational review across all your locations",
      "Identify highest-impact opportunities",
      "Clear roadmap with realistic timelines",
      "Free \u2014 no commitment, no sales pitch",
    ],
    cta: { label: "Book a free audit", href: "#contact" },
    footer: "Free as a starting point",
    icon: Search,
    visual: {
      stat: "30M",
      statLabel:
        "admin hours lost to manual processes in UK businesses annually. AI is the next step.",
      source: "GOV.UK, December 2025",
    },
  },
  {
    id: "build",
    step: "02",
    label: "Build",
    title: "Systems designed around your team",
    description:
      "No off-the-shelf software. We build bespoke AI tools that fit how your people actually work \u2014 compliance automation, document generation, governance dashboards, AI assistants your staff can talk to.",
    highlights: [
      "Custom-built for your specific workflows",
      "Integrates with your existing tools",
      "AI does the work, humans approve it \u2014 always",
      "Deployed and tested in your environment",
    ],
    cta: { label: "See what we\u2019ve built", href: "#portfolio" },
    footer: "AI does the work. Humans approve it.",
    icon: Hammer,
    visual: {
      stat: "45%",
      statLabel:
        "more time spent on admin since 2017. Output barely moved. Smarter processes are the answer.",
      source: "The Productivity Institute, 2025",
    },
  },
  {
    id: "train",
    step: "03",
    label: "Train",
    title: "Your team confident, not confused",
    description:
      "Practical training built for your team. Not generic AI literacy \u2014 specific to the tools we\u2019ve built and the workflows you use every day. Managers and frontline staff.",
    highlights: [
      "Tailored to your workflows",
      "Managers and frontline staff",
      "Safe, responsible AI use",
      "The technology sticks long after we leave",
    ],
    cta: { label: "Get in touch", href: "#contact" },
    footer: "The technology sticks long after we leave",
    icon: GraduationCap,
    visual: {
      stat: "83%",
      statLabel:
        "of employees say AI reduces admin. Only 47% feel confident using it. We close that gap.",
      source: "MIT Sloan, 2026",
    },
  },
];

export default function ServicesJourney() {
  const [active, setActive] = useState(0);
  const phase = phases[active];
  const PhaseIcon = phase.icon;

  return (
    <section
      id="services"
      className="relative z-10 py-16 md:py-24 px-8 md:px-12"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-14">
          <div className="md:col-span-7">
            <span className="text-[13px] font-semibold text-primary-400 uppercase tracking-wider block mb-4">
              How we work together
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              From audit to adoption
            </h2>
          </div>
          <div className="md:col-span-5 flex items-end">
            <p className="text-base text-gray-600 leading-relaxed max-w-[50ch]">
              We start by understanding your organisation. Then we build what
              you actually need. Then we make sure your team can use it.
            </p>
          </div>
        </div>

        {/* Journey Tabs */}
        <div className="relative mb-12">
          <div className="hidden md:block absolute top-5 left-0 right-0 h-[2px] bg-gray-200" />
          <div
            className="hidden md:block absolute top-5 left-0 h-[2px] bg-primary-400 transition-all duration-500 ease-out"
            style={{ width: `${(active / (phases.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
            {phases.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`relative text-left md:text-center group cursor-pointer transition-all duration-300 py-4 md:py-0 ${
                  i <= active ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold transition-all duration-300 shrink-0 ${
                      i === active
                        ? "bg-primary-400 text-white shadow-lg shadow-primary-400/30 scale-110"
                        : i < active
                          ? "bg-primary-400 text-white"
                          : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {p.step}
                  </div>
                  <div>
                    <span
                      className={`text-lg font-bold block transition-colors duration-300 ${
                        i === active ? "text-gray-900" : "text-gray-400"
                      }`}
                    >
                      {p.label}
                    </span>
                    <span className="text-[12px] text-gray-400 hidden md:block">
                      {i === 0
                        ? "Assess"
                        : i === 1
                          ? "Implement"
                          : "Empower"}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              {/* Left: Content */}
              <div className="md:col-span-7 border border-gray-200 rounded-2xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center">
                    <PhaseIcon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-primary-400 uppercase tracking-wider block">
                      Phase {phase.step}
                    </span>
                    <span className="text-[13px] font-semibold text-gray-900">
                      {phase.label}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-snug tracking-tight mb-6">
                  {phase.title}
                </h3>

                <p className="text-gray-600 text-[15px] leading-relaxed mb-8 max-w-[55ch]">
                  {phase.description}
                </p>

                <ul className="space-y-3 mb-10">
                  {phase.highlights.map((h, i) => (
                    <motion.li
                      key={h}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.3 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3 h-3 text-primary-500" />
                      </div>
                      <span className="text-[14px] text-gray-600">{h}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex items-center gap-4 flex-wrap">
                  <a
                    href={phase.cta.href}
                    className="px-7 py-3.5 text-[14px] font-semibold bg-primary-400 text-white rounded-xl hover:bg-primary-500 transition-all active:scale-[0.98] shadow-md shadow-primary-400/15"
                  >
                    {phase.cta.label}
                  </a>
                  <span className="text-[13px] text-gray-400 italic">
                    {phase.footer}
                  </span>
                </div>
              </div>

              {/* Right: Visual Stat */}
              <div className="md:col-span-5 bg-gray-900 rounded-2xl p-8 md:p-12 flex flex-col justify-between min-h-[420px]">
                <div>
                  <span className="text-[11px] font-semibold text-white/30 uppercase tracking-wider block mb-2">
                    By the numbers
                  </span>
                  <motion.span
                    key={phase.visual.stat}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                    className="text-6xl md:text-8xl font-extrabold text-primary-400 block leading-none tracking-tighter"
                  >
                    {phase.visual.stat}
                  </motion.span>
                </div>
                <div className="mt-auto pt-8">
                  <p className="text-white/50 text-[15px] leading-relaxed max-w-[35ch]">
                    {phase.visual.statLabel}
                  </p>
                  <span className="text-[11px] text-white/20 mt-3 block">
                    {phase.visual.source}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Trust Signal */}
        <div className="mt-12 border border-gray-200 bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <h3 className="md:col-span-7 text-xl md:text-2xl font-bold text-gray-900 leading-snug tracking-tight">
              Other consultants give you a report and leave.{" "}
              <span className="text-gray-500">
                We build the actual systems and train your team to use them.
              </span>
            </h3>
            <div className="md:col-span-5 flex flex-col justify-end">
              <p className="text-gray-600 text-[14px] leading-relaxed mb-5">
                AI is ready for business right now. Not in five years. Not as a
                gimmick. Real, practical AI that saves real time today.
              </p>
              <a
                className="text-primary-500 font-semibold text-[14px] hover:text-primary-400 transition-colors"
                href="#contact"
              >
                Book a free audit &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
