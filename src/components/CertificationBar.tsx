"use client";

import { motion } from "motion/react";

const certifications = [
  {
    name: "Anthropic Certified",
    logo: "/certs/anthropic.svg",
  },
  {
    name: "Microsoft Certified",
    logo: "/certs/microsoft.svg",
  },
  {
    name: "Google Certified",
    logo: "/certs/google.svg",
  },
  {
    name: "Cloudflare Protected",
    logo: "/certs/cloudflare.svg",
  },
];

export default function CertificationBar() {
  // Double the items for seamless infinite scroll
  const items = [...certifications, ...certifications, ...certifications, ...certifications];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="relative z-10 pb-4 md:pb-6 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Fade edges */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-scroll-x">
            {items.map((cert, i) => (
              <div
                key={`${cert.name}-${i}`}
                className="flex items-center gap-3 shrink-0 px-8 md:px-10"
              >
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="h-6 md:h-7 w-auto opacity-70"
                />
                <span className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider whitespace-nowrap">
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
