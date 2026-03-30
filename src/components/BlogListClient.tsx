"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/content/blog";

export default function BlogListClient({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, i) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="group block bg-white border border-gray-200 rounded-2xl p-7 md:p-8 hover:border-primary-200 transition-all duration-300 h-full"
          >
            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold text-primary-500 uppercase tracking-wider bg-primary-50 px-2.5 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-primary-500 transition-colors duration-300">
              {post.title}
            </h2>

            <p className="text-gray-600 text-[14px] leading-relaxed mb-6">
              {post.description}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-4 text-[12px] text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
