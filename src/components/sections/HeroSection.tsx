"use client";

import GradientButton from "@/components/ui/GradientButton";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[95vh] items-center justify-center px-[5vw] text-center z-[1]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse,rgba(0,255,136,0.05)_0%,rgba(0,245,212,0.03)_30%,rgba(255,0,255,0.02)_60%,transparent_75%)] pointer-events-none" />

      <div className="relative max-w-[950px] w-full px-8 animate-fade-up">
        <span className="inline-block text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[#00ff88]/60 mb-6 font-mono">
          Synthetic Markets Protocol
        </span>

        <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-extrabold text-white leading-[1.1] mb-8 tracking-[-0.02em] uppercase [text-shadow:0_0_80px_rgba(0,255,136,0.06)]">
          A protocol for{" "}
          <span className="bg-gradient-to-r from-[#00f5d4] to-[#00ff88] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,245,212,0.3)]">
            synthetic
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#00ff88] to-[#50ffaa] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,255,136,0.3)]">
            markets
          </span>
        </h1>

        <p className="text-[clamp(1.05rem,1.4vw,1.18rem)] text-white/50 leading-[1.8] mb-12 max-w-[620px] mx-auto font-light">
          Rewynd creates time-compressed, tradable markets shaped by historical
          structure, world events, and agent behavior.
        </p>

        <div className="flex gap-5 justify-center items-center flex-wrap animate-fade-up-delay-2">
          <GradientButton variant="primary" size="lg" href="#waitlist">
            Join Waitlist
          </GradientButton>
          <GradientButton variant="secondary" size="lg" href="#contact">
            Contact
          </GradientButton>
        </div>

        <p className="mt-8 text-xs text-white/25 font-mono tracking-wide animate-fade-up-delay-3">
          For traders, builders, funds, and researchers exploring the next market
          primitive.
        </p>
      </div>
    </section>
  );
}
