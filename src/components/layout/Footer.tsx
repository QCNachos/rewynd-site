"use client";

import Image from "next/image";

const footerLinks = {
  protocol: [
    { label: "Synthetic Markets", href: "#protocol" },
    { label: "How It Works", href: "#how" },
    { label: "Data Layer", href: "#data" },
    { label: "Waitlist", href: "#waitlist" },
  ],
  company: [
    { label: "About", href: "#protocol" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#" },
  ],
  community: [
    { label: "Twitter", href: "#" },
    { label: "Discord", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0b0d]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Rewynd"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="text-lg font-bold text-white">Rewynd</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-[280px]">
              Building the protocol layer for synthetic markets.
              Time-compressed, tradable, and intelligent.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-white/60 uppercase tracking-wider">
              Protocol
            </h3>
            <ul className="space-y-2">
              {footerLinks.protocol.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/30 transition-colors hover:text-white/60"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-white/60 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/30 transition-colors hover:text-white/60"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-white/60 uppercase tracking-wider">
              Community
            </h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/30 transition-colors hover:text-white/60"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6">
          <p className="text-center text-xs text-white/20">
            &copy; {new Date().getFullYear()} Rewynd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
