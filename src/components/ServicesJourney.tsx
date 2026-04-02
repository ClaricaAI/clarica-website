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
      "We look at every workflow, every bottleneck, every hour lost. You get a clear picture of where AI saves you the most time — and what's not worth touching.",
    highlights: [
      "Full review of how your business operates",
      "We find the biggest time-saving opportunities",
      "You get a clear roadmap with realistic timelines",
      "Completely free — no commitment, no sales pitch",
    ],
    cta: { label: "Book a free audit", href: "#contact" },
    icon: Search,
  },
  {
    id: "build",
    step: "02",
    label: "Build",
    title: "We build AI that fits your team",
    description:
      "No off-the-shelf software. We build tools that match how your people actually work — automating admin, generating documents, answering staff questions, tracking compliance.",
    highlights: [
      "Built specifically for your workflows",
      "Works with the tools you already use",
      "AI does the heavy lifting, your team stays in control",
      "Tested and deployed in your environment",
    ],
    cta: { label: "See what we've built", href: "#portfolio" },
    icon: Hammer,
  },
  {
    id: "train",
    step: "03",
    label: "Train",
    title: "Your team knows exactly how to use it",
    description:
      "Hands-on training for your staff — not generic AI courses. We teach your people to use the specific tools we've built, so they're confident from day one.",
    highlights: [
      "Training built around your actual workflows",
      "For managers and frontline staff",
      "Covers safe, responsible AI use",
      "The system works long after we leave",
    ],
    cta: { label: "Get in touch", href: "#contact" },
    icon: GraduationCap,
  },
];

export default function ServicesJourney() {
  const [active, setActive] = useState(0);
  const phase = phases[active];

  return (
    <section
      id="services"
      className="relative z-10 py-16 md:py-24 px-8 md:px-12"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
            How we work
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-[55ch]">
            Three steps. We understand your business, build what you need, and
            make sure your team can use it.
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {phases.map((p, i) => {
            const Icon = p.icon;
            const isActive = i === active;
            return (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`text-left bg-white border rounded-2xl p-7 md:p-8 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "border-primary-400 shadow-lg shadow-primary-400/10"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      isActive
                        ? "bg-primary-400 text-white"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[13px] font-bold text-gray-400 uppercase tracking-wider">
                    Step {p.step}
                  </span>
                </div>
                <h3
                  className={`text-xl font-extrabold tracking-tight leading-snug transition-colors duration-300 ${
                    isActive ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  {p.label}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug tracking-tight mb-4">
                {phase.title}
              </h3>

              <p className="text-gray-600 text-[16px] leading-relaxed mb-8 max-w-[65ch]">
                {phase.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {phase.highlights.map((h, i) => (
                  <motion.div
                    key={h}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary-500" />
                    </div>
                    <span className="text-[15px] font-medium text-gray-700">
                      {h}
                    </span>
                  </motion.div>
                ))}
              </div>

              <a
                href={phase.cta.href}
                className="inline-block px-8 py-4 text-[15px] font-semibold bg-primary-400 text-white rounded-xl hover:bg-primary-500 transition-all active:scale-[0.98]"
              >
                {phase.cta.label}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
