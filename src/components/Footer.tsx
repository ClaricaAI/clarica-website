import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 py-12 bg-gray-900 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <img
              src="/clarica-logo.png"
              alt="Clarica"
              className="w-7 h-7 brightness-0 invert"
            />
            <span className="text-lg font-bold text-white tracking-tight">
              Clarica
            </span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-8 text-[13px]">
            <a
              className="text-white/40 hover:text-white transition-colors"
              href="/#home"
            >
              Home
            </a>
            <a
              className="text-white/40 hover:text-white transition-colors"
              href="/#services"
            >
              Services
            </a>
            <a
              className="text-white/40 hover:text-white transition-colors"
              href="/#portfolio"
            >
              Portfolio
            </a>
            <a
              className="text-white/40 hover:text-white transition-colors"
              href="/#about"
            >
              About
            </a>
            <a
              className="text-white/40 hover:text-white transition-colors"
              href="/#contact"
            >
              Contact
            </a>
            <Link
              className="text-white/40 hover:text-white transition-colors"
              href="/blog"
            >
              Blog
            </Link>
            <a
              href="https://www.linkedin.com/in/lewisrushton2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#0A66C2] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[13px] text-white/30">
            &copy; 2026 Clarica. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
