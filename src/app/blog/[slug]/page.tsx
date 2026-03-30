import { getAllPosts, getPost } from "@/content/blog";
import type { ContentBlock } from "@/content/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import BlogPostClient from "@/components/BlogPostClient";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Clarica Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <img src="/hero-bg.png" alt="" className="w-full h-full object-cover" />
      </div>

      <article className="relative z-10 max-w-[780px] mx-auto px-8 md:px-12 pt-40 pb-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[13px] text-gray-400 hover:text-primary-500 transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Blog
        </Link>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold text-primary-500 uppercase tracking-wider bg-primary-50 px-2.5 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl md:text-[2.75rem] font-extrabold text-gray-900 leading-[1.15] tracking-tight mb-6">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-[13px] text-gray-400 mb-12 pb-8 border-b border-gray-200">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        <BlogPostClient content={post.content} />

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="border border-primary-200 bg-primary-50/50 rounded-2xl p-8 md:p-10">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Want to explore what AI could do for your business?
            </h3>
            <p className="text-[14px] text-gray-600 leading-relaxed mb-5">
              We offer a free AI audit — no commitment, no sales pitch. Just an
              honest look at where AI saves you the most time.
            </p>
            <a
              href="/#contact"
              className="inline-block px-6 py-3 text-[14px] font-semibold bg-primary-400 text-white rounded-lg hover:bg-primary-500 transition-all active:scale-95"
            >
              Book a Free AI Audit
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
