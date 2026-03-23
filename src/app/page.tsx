"use client";

import { motion } from "motion/react";
import SocialProofBar from "@/components/SocialProofBar";
import PainPoints from "@/components/PainPoints";
import ServicesJourney from "@/components/ServicesJourney";
import {
  Check,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  Timer,
  ClipboardCheck,
  Linkedin,
  Building2,
  Bot,
  BarChart3,
} from "lucide-react";

const outcomeCards = [
  {
    icon: Clock,
    stat: "30 mins",
    context: "instead of 4 hours",
    label: "Care plan reviews",
  },
  {
    icon: ShieldCheck,
    stat: "42%",
    context: "improvement",
    label: "Compliance scores",
  },
  {
    icon: Timer,
    stat: "60 hrs",
    context: "saved per week",
    label: "Across 12 homes",
  },
  {
    icon: ClipboardCheck,
    stat: "3 days",
    context: "instead of 7",
    label: "New care plans",
  },
];

const portfolioCards = [
  {
    icon: Building2,
    title: "Quality & governance across 12 care homes",
    desc: "Replaced a fragmented manual system with a single platform. 500 users, 350 active weekly. Quality monitoring, incident tracking, and regulatory reporting \u2014 all in one place.",
    outcome: "Saved the organisation an estimated \u00a3100,000 in outsourced software costs",
  },
  {
    icon: Bot,
    title: "AI assistant inside Microsoft Teams",
    desc: "Care staff ask questions about policies, procedures, and guidance \u2014 and get instant, accurate answers. No searching through folders, no waiting for a manager.",
    outcome: "Instant access to organisational knowledge for every team member, every shift",
  },
  {
    icon: BarChart3,
    title: "Automated reporting and compliance tracking",
    desc: "AI drafts reports, flags overdue assessments, and monitors compliance across all locations. Managers review and approve \u2014 the admin is done for them.",
    outcome: "60 hours saved per week across 12 homes",
  },
];

const founderHighlights = [
  "Works in quality and governance across 12 care homes every day",
  "Built and deployed a governance platform to 500 users across 12 care homes",
  "Saved an organisation an estimated \u00a3100,000 in outsourced software costs",
  "Built an AI assistant inside Microsoft Teams for frontline care staff",
  "Led a team of 6 developers on an NHS-partnered project predicting falls",
  "27 professional certifications across Anthropic and Microsoft",
  "6,500+ LinkedIn followers in AI and social care",
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img src="/hero-bg.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* ===================== HERO ===================== */}
      <section
        id="home"
        className="relative min-h-[100dvh] w-full overflow-hidden"
      >
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 pt-40 pb-24 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="lg:col-span-6 space-y-8">
              <div
                className="animate-fade-rise"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="text-[13px] font-semibold text-primary-500 uppercase tracking-wider">
                  AI for Social Care
                </span>
              </div>
              <div
                className="animate-fade-rise"
                style={{ animationDelay: "0.2s" }}
              >
                <h1 className="text-4xl md:text-[3.5rem] font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                  AI systems built for how your care teams{" "}
                  <span className="text-primary-400">actually work</span>
                </h1>
              </div>
              <div
                className="animate-fade-rise"
                style={{ animationDelay: "0.4s" }}
              >
                <p className="text-lg md:text-xl text-gray-500 max-w-[50ch] leading-relaxed">
                  We audit your operations, build bespoke AI tools, and train
                  your team to use them. For care organisations ready to work
                  smarter.
                </p>
              </div>
              <div
                className="animate-fade-rise"
                style={{ animationDelay: "0.5s" }}
              >
                <p className="text-[14px] text-gray-400 max-w-[50ch] leading-relaxed">
                  Digital records already save care workers 20 minutes every
                  shift.{" "}
                  <span className="text-primary-500 font-medium">
                    AI takes that further.
                  </span>
                </p>
              </div>
              <div
                className="animate-fade-rise pt-4 flex flex-col sm:flex-row items-start gap-4"
                style={{ animationDelay: "0.6s" }}
              >
                <a
                  href="#contact"
                  className="px-8 py-4 text-[15px] font-semibold bg-primary-400 text-white rounded-lg hover:bg-primary-500 transition-all active:scale-95 shadow-lg shadow-primary-400/20"
                >
                  Book a Free AI Audit
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 text-[15px] font-semibold text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all"
                >
                  See How We Work
                </a>
              </div>
            </div>

            {/* Right: Outcome Cards */}
            <div className="lg:col-span-6 hidden lg:block">
              <div
                className="relative h-[500px] animate-fade-rise"
                style={{ animationDelay: "0.8s" }}
              >
                {outcomeCards.map((card, i) => {
                  const Icon = card.icon;
                  const positions = [
                    "left-0 top-0",
                    "right-0 top-[5%]",
                    "left-[5%] bottom-[10%]",
                    "right-[3%] bottom-[5%]",
                  ];
                  const floatClass = [
                    "mockup-float",
                    "mockup-float-delayed",
                    "mockup-float-slow",
                    "mockup-float",
                  ];
                  const widths = [
                    "w-[280px]",
                    "w-[260px]",
                    "w-[270px]",
                    "w-[250px]",
                  ];

                  return (
                    <div
                      key={card.label}
                      className={`absolute ${positions[i]} ${floatClass[i]} ${widths[i]} outcome-card rounded-2xl p-6`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-primary-500" />
                        </div>
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
                              {card.stat}
                            </span>
                            <span className="text-[12px] text-gray-400">
                              {card.context}
                            </span>
                          </div>
                          <span className="text-[13px] text-gray-500 mt-1 block">
                            {card.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SOCIAL PROOF ===================== */}
      <SocialProofBar />

      {/* Section Divider */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="border-t border-gray-200/40" />
      </div>

      {/* ===================== PAIN POINTS ===================== */}
      <PainPoints />

      {/* Section Divider */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="border-t border-gray-200/40" />
      </div>

      {/* ===================== SERVICES ===================== */}
      <ServicesJourney />

      {/* Section Divider */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="border-t border-gray-200/40" />
      </div>

      {/* ===================== PORTFOLIO ===================== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <section
          id="portfolio"
          className="relative z-10 py-24 md:py-32 px-8 md:px-12"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-16">
              <span className="text-[13px] font-semibold text-primary-400 uppercase tracking-wider block mb-4">
                Built for a multi-site care group
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight max-w-[20ch]">
                Real systems, running in real care homes
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              {portfolioCards.map((card, i) => {
                const CardIcon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="border border-gray-200 rounded-2xl p-8 md:p-10 flex flex-col gap-5"
                  >
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                      <CardIcon className="w-6 h-6 text-primary-500" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-gray-500 text-[14px] leading-relaxed flex-1">
                      {card.desc}
                    </p>
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-[13px] font-semibold text-primary-500">
                        {card.outcome}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <p className="text-[13px] text-gray-400 italic">
              Every project is different. Pricing is custom &mdash; built around
              what your organisation actually needs.
            </p>
          </div>
        </section>
      </motion.div>

      {/* Section Divider */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="border-t border-gray-200/40" />
      </div>

      {/* ===================== ABOUT ===================== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <section
          id="about"
          className="relative z-10 py-24 md:py-32 px-8 md:px-12"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-12">
              <span className="text-[13px] font-semibold text-primary-400 uppercase tracking-wider block mb-4">
                About Clarica
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* About Card */}
              <div className="md:col-span-7 border border-gray-200 rounded-2xl p-10 md:p-14 space-y-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-[1.15] tracking-tight">
                  We help care organisations understand what AI can do for them,
                  build it, and make it stick.
                </h2>
                <div className="space-y-5 text-gray-500 text-[15px] leading-relaxed">
                  <p>
                    Clarica audits your operations, builds bespoke AI systems
                    that fit how your teams actually work, and trains your people
                    to use them confidently and safely.
                  </p>
                  <p>
                    We work with residential care, domiciliary care, and
                    supported living providers across the UK. Every system we
                    build is designed around your workflows &mdash; not the other
                    way around.
                  </p>
                </div>
              </div>

              {/* Founder Card */}
              <div className="md:col-span-5 border border-gray-200 rounded-2xl p-10 md:p-14 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[13px] font-semibold text-gray-400 uppercase tracking-wider block mb-1">
                      The Founder
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight">
                      Lewis Rushton
                    </h3>
                    <span className="text-[14px] text-gray-400">21 years old</span>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/lewisrushton2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center hover:bg-[#0A66C2]/20 transition-colors"
                    aria-label="Lewis Rushton on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                  </a>
                </div>

                <ul className="space-y-3">
                  {founderHighlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3 h-3 text-primary-500" />
                      </div>
                      <span className="text-[14px] text-gray-500 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-gray-900 font-semibold text-[15px] pt-2">
                  Lewis isn&apos;t pitching theory. He&apos;s built real systems
                  that run in real care homes &mdash; and he works in one.
                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      {/* ===================== CONTACT ===================== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <section
          id="contact"
          className="relative z-10 py-24 md:py-32 px-8 md:px-12 bg-gray-900"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left: Heading */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
                  Let&apos;s find out what AI can do for your care organisation
                </h2>
                <div className="space-y-5">
                  <p className="text-white/50 text-[15px] leading-relaxed">
                    Book a free AI audit. We&apos;ll look at how your
                    organisation runs, identify where AI saves the most time,
                    and give you a clear, honest picture of what&apos;s worth
                    doing. No commitment. No sales pitch.
                  </p>
                  <div className="pt-2">
                    <span className="text-[12px] uppercase tracking-wider text-white/30 block mb-1">
                      Email
                    </span>
                    <a
                      href="mailto:lewis.rushton@clarica.co.uk"
                      className="text-primary-400 text-lg font-semibold hover:text-primary-200 transition-colors"
                    >
                      lewis.rushton@clarica.co.uk
                    </a>
                  </div>
                  <div className="pt-1">
                    <a
                      href="https://www.linkedin.com/in/lewisrushton2004"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-[14px]"
                    >
                      <Linkedin className="w-4 h-4" />
                      Follow on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Cal.com Embed */}
              <div className="lg:col-span-7">
                <div className="glass-card-dark rounded-2xl p-8 md:p-10">
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-primary-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ArrowUpRight className="w-8 h-8 text-primary-400" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                      Book your free AI audit
                    </h3>
                    <p className="text-white/50 text-[15px] mb-8 max-w-[40ch] mx-auto">
                      Pick a time that works for you. We&apos;ll have an honest
                      conversation about where AI fits in your organisation.
                    </p>
                    {/* Cal.com embed placeholder — replace data-cal-link with your actual link */}
                    <a
                      href="https://cal.com/lewisrushton"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 text-[15px] font-semibold bg-primary-400 text-white rounded-xl hover:bg-primary-500 transition-all active:scale-[0.98] shadow-lg shadow-primary-400/20"
                    >
                      Book a Time
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
