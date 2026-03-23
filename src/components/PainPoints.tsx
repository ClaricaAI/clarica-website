"use client";

import { motion } from "motion/react";
import {
  FileText,
  ShieldAlert,
  Lightbulb,
  Wrench,
  TrendingUp,
  BarChart3,
} from "lucide-react";

const pains = [
  {
    icon: FileText,
    pain: "\"I spend more time on paperwork than with my residents.\"",
    fix: "AI drafts documentation. You approve it.",
  },
  {
    icon: ShieldAlert,
    pain: "\"Something always falls through the cracks before CQC comes.\"",
    fix: "Continuous monitoring flags gaps before they become violations.",
  },
  {
    icon: Lightbulb,
    pain: "\"We know we should be using AI but don't know where to start.\"",
    fix: "A free audit shows you exactly where AI fits.",
  },
  {
    icon: Wrench,
    pain: "\"We're paying for a system that only does half the job.\"",
    fix: "Bespoke systems built around your workflows.",
  },
  {
    icon: TrendingUp,
    pain: "\"Everyone's talking about AI and we haven't started.\"",
    fix: "Start with an audit. No commitment, no jargon.",
  },
  {
    icon: BarChart3,
    pain: "\"I spend hours pulling numbers from five different systems.\"",
    fix: "One dashboard. Real-time. Across all locations.",
  },
];

export default function PainPoints() {
  return (
    <section className="relative z-10 py-24 md:py-32 px-8 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-[13px] font-semibold text-primary-400 uppercase tracking-wider block mb-4">
            Sound familiar?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight max-w-[20ch]">
            The problems we solve
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pains.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="pain-card rounded-2xl p-8 flex flex-col gap-5"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary-500" />
                </div>
                <p className="text-[15px] text-gray-900 font-semibold leading-snug italic">
                  {item.pain}
                </p>
                <p className="text-[14px] text-gray-500 leading-relaxed mt-auto">
                  {item.fix}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-4 text-[14px] text-gray-500"
        >
          <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-[12px] font-semibold text-gray-700 shrink-0">
            DHSC 2025
          </span>
          <p>
            73% of care providers say set-up costs stop them adopting technology.
            27% still use no care tech at all.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
