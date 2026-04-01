"use client";

import { motion } from "motion/react";
import { Shield } from "lucide-react";

const certifications = [
  {
    name: "Anthropic Certified",
    subtitle: "Claude Certified Architect",
    logo: "/certs/anthropic.svg",
  },
  {
    name: "Microsoft Certified",
    subtitle: "AI, Azure & Copilot",
    logo: "/certs/microsoft.svg",
  },
  {
    name: "Google Certified",
    subtitle: "Project Management",
    logo: "/certs/google.svg",
  },
  {
    name: "Cloudflare",
    subtitle: "Protected",
    logo: "/certs/cloudflare.svg",
  },
];

export default function CertificationBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="relative z-10 pb-6 md:pb-8"
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity"
            >
              <img
                src={cert.logo}
                alt={cert.name}
                className="h-6 md:h-7 w-auto"
              />
              <div className="hidden sm:block">
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider block leading-tight">
                  {cert.name}
                </span>
                <span className="text-[10px] text-gray-400 leading-tight">
                  {cert.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
