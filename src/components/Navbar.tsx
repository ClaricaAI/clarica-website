"use client";

import { useEffect, useState } from "react";
import { Menu, X, Linkedin } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = links.map(
      (l) => document.querySelector(l.href) as HTMLElement | null,
    );

    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      setMenuOpen(false);

      const scrollY = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY) {
          setActive(links[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-8 md:px-12 py-5 max-w-[1400px] mx-auto">
        <a href="#home" className="flex items-center gap-2.5">
          <img src="/clarica-logo.png" alt="Clarica" className="w-8 h-8" />
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            Clarica
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-10 text-[13px] font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                active === link.href
                  ? "text-primary-500 transition-colors duration-300"
                  : "text-gray-500 hover:text-gray-900 transition-colors duration-300"
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/lewisrushton2004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#0A66C2] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4.5 h-4.5" />
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 text-[13px] font-semibold bg-primary-400 text-white rounded-lg hover:bg-primary-500 transition-all active:scale-95"
          >
            Book Free Audit
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-gray-900" />
          ) : (
            <Menu className="w-6 h-6 text-gray-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200 px-8 py-6 space-y-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-[15px] font-medium transition-colors py-3 ${
                active === link.href
                  ? "text-primary-500"
                  : "text-gray-700 hover:text-primary-500"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center px-6 py-3 text-[14px] font-semibold bg-primary-400 text-white rounded-lg hover:bg-primary-500 transition-all mt-4"
          >
            Book Free Audit
          </a>
        </div>
      </div>
    </nav>
  );
}
