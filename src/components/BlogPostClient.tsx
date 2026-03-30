"use client";

import { motion } from "motion/react";
import type { ContentBlock } from "@/content/blog";

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={index}
          className="text-[15px] text-gray-600 leading-[1.85] mb-6"
        >
          {block.text}
        </p>
      );
    case "heading":
      return (
        <h2
          key={index}
          className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mt-12 mb-5"
        >
          {block.text}
        </h2>
      );
    case "subheading":
      return (
        <h3
          key={index}
          className="text-lg font-bold text-gray-900 tracking-tight mt-8 mb-4"
        >
          {block.text}
        </h3>
      );
    case "list":
      return (
        <ul key={index} className="space-y-3 mb-6 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2.5 shrink-0" />
              <span className="text-[15px] text-gray-600 leading-[1.85]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );
    case "stat":
      return (
        <div
          key={index}
          className="border border-primary-200 bg-primary-50/50 rounded-xl p-6 my-8 text-center"
        >
          <span className="text-4xl md:text-5xl font-extrabold text-primary-500 block mb-2">
            {block.value}
          </span>
          <span className="text-[14px] text-gray-500">{block.label}</span>
        </div>
      );
    case "quote":
      return (
        <blockquote
          key={index}
          className="border-l-3 border-primary-400 pl-6 my-8"
        >
          <p className="text-[16px] text-gray-700 leading-[1.8] italic font-medium">
            &ldquo;{block.text}&rdquo;
          </p>
          {block.source && (
            <cite className="text-[13px] text-gray-400 mt-2 block not-italic">
              — {block.source}
            </cite>
          )}
        </blockquote>
      );
  }
}

export default function BlogPostClient({
  content,
}: {
  content: ContentBlock[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {content.map(renderBlock)}
    </motion.div>
  );
}
