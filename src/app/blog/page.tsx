import { getAllPosts } from "@/content/blog";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import BlogListClient from "@/components/BlogListClient";

export const metadata: Metadata = {
  title: "Blog | Clarica",
  description:
    "Insights on AI for business — how small and medium-sized companies are using AI to save time, cut costs, and grow.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <img src="/hero-bg.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 pt-40 pb-24">
        <div className="mb-16">
          <span className="text-[13px] font-semibold text-primary-400 uppercase tracking-wider block mb-4">
            Blog
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight max-w-[25ch]">
            AI insights for businesses that want to{" "}
            <span className="text-primary-400">move faster</span>
          </h1>
          <p className="text-gray-500 text-[15px] leading-relaxed mt-6 max-w-[60ch]">
            Practical thinking on how small and medium-sized businesses are using
            AI to save time, cut costs, and stay ahead.
          </p>
        </div>

        <BlogListClient posts={posts} />
      </div>
    </div>
  );
}
