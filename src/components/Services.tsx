"use client";

import { motion } from "motion/react";
import { Search, Code2, Zap, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "AI Audit",
    subtitle: "Free. 20 minutes.",
    description:
      "We look at your processes, your team's time, and where work is being repeated unnecessarily. You walk away with a clear picture of what AI can do for your business.",
    cta: { label: "Book a free audit", href: "#contact" },
  },
  {
    icon: Code2,
    title: "Custom Software",
    subtitle: "Built around your workflows.",
    description:
      "Apps, dashboards, internal tools — built for how your business actually works. Not off-the-shelf software you have to bend your processes around.",
    cta: { label: "See what we've built", href: "#portfolio" },
  },
  {
    icon: Zap,
    title: "AI Automation",
    subtitle: "Remove the work that doesn't need a human.",
    description:
      "Reports that build themselves. Data that flows between systems without anyone copying and pasting. AI that answers questions from your own company documents.",
    cta: { label: "Get in touch", href: "#contact" },
  },
  {
    icon: Users,
    title: "AI Training",
    subtitle: "Hands-on. Tailored to your team.",
    description:
      "Not a generic webinar. Training built around your business, your tools, and your team's actual workflows. They leave knowing exactly what to do on Monday morning.",
    cta: { label: "Get in touch", href: "#contact" },
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative z-10 py-16 md:py-24 px-8 md:px-12"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-14">
            <span className="text-[13px] font-semibold text-primary-400 uppercase tracking-wider block mb-4">
              What we do
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight max-w-[20ch]">
              Four ways we help your business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-7 md:p-8 flex flex-col gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-gray-900 leading-snug">
                        {service.title}
                      </h3>
                      <span className="text-[13px] font-semibold text-primary-400">
                        {service.subtitle}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-[15px] leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <a
                    href={service.cta.href}
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary-500 hover:text-primary-600 transition-colors mt-1"
                  >
                    {service.cta.label}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
