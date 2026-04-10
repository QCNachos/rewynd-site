"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#protocol", label: "Protocol" },
  { href: "#why", label: "Why Rewynd" },
  { href: "#data", label: "Data" },
  { href: "#waitlist", label: "Waitlist" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen, closeMobileMenu]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    closeMobileMenu();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] border-b transition-all duration-300 ${
        scrolled
          ? "border-white/5 bg-[#0a0b0d]/90 backdrop-blur-xl"
          : "border-transparent bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Rewynd"
            width={28}
            height={28}
            className="rounded-md"
          />
          <span className="text-lg font-extrabold tracking-tight text-[#00bf63] uppercase">
            Rewynd
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5 ${
                activeSection === link.href
                  ? "text-white/90"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {link.label}
              {activeSection === link.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[#00ff88]/70 transition-all duration-300" />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#waitlist"
            onClick={(e) => handleNavClick(e, "#waitlist")}
            className="hidden sm:inline-flex items-center px-5 py-2 bg-[#00bf63] rounded-full text-sm text-black font-bold uppercase tracking-[0.08em] transition-all duration-300 hover:bg-[#00d970] hover:shadow-[0_4px_20px_rgba(0,255,136,0.3)]"
          >
            Join Waitlist
          </a>

          <button
            className="md:hidden rounded-lg p-2 text-white/50 hover:bg-white/5 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-[-1] bg-black/50 md:hidden"
            onClick={closeMobileMenu}
          />
          <div className="border-t border-white/5 bg-[#0a0b0d]/95 backdrop-blur-xl md:hidden">
            <div className="space-y-1 px-4 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-white/5 ${
                    activeSection === link.href
                      ? "text-white/90 bg-white/[0.04]"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#waitlist"
                onClick={(e) => handleNavClick(e, "#waitlist")}
                className="flex items-center justify-center rounded-full px-3 py-2.5 mt-2 text-sm font-bold text-black bg-[#00bf63] uppercase tracking-[0.08em]"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
