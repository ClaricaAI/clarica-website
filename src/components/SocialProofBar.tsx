"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "Users across client sites", hasStars: true },
  { value: 100, prefix: "\u00a3", suffix: "k+", label: "Saved in software costs", hasStars: true },
  { value: 60, suffix: "hrs", label: "Saved per week", hasStars: true },
];

function useCountUp(target: number, trigger: boolean, duration = 1600) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out-quart
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(eased * target);
      if (current !== start) {
        start = current;
        setCount(current);
      }
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [trigger, target, duration]);

  return count;
}

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 star-gold fill-current" />
      ))}
    </div>
  );
}

function StatItem({ stat, visible }: { stat: (typeof stats)[0]; visible: boolean }) {
  const count = useCountUp(stat.value, visible);

  return (
    <div className="flex flex-col items-center gap-2 px-6 md:px-10">
      {stat.hasStars && <Stars />}
      <span className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight tabular-nums">
        {stat.prefix || ""}
        {count}
        {stat.suffix || ""}
      </span>
      <span className="text-[12px] md:text-[13px] text-gray-600 text-center">
        {stat.label}
      </span>
    </div>
  );
}

export default function SocialProofBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative z-10 py-8 md:py-10"
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div
          className={`flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 md:divide-x md:divide-gray-200/60 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} visible={visible} />
          ))}
          <div className="flex flex-col items-center gap-2 px-6 md:px-10">
            <div className="px-3 py-1 bg-primary-50 rounded-full">
              <span className="text-[11px] font-semibold text-primary-500 uppercase tracking-wider">
                Trusted
              </span>
            </div>
            <span className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              12
            </span>
            <span className="text-[12px] md:text-[13px] text-gray-600 text-center">
              Businesses across the UK
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
