"use client";

import GradientButton from "@/components/ui/GradientButton";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[95vh] items-center justify-center px-[5vw] z-[1]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse,rgba(0,255,136,0.05)_0%,rgba(0,245,212,0.03)_30%,rgba(255,0,255,0.02)_60%,transparent_75%)] pointer-events-none" />

      <div className="relative max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-center">
        <div className="text-center lg:text-left animate-fade-up">
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

          <p className="text-[clamp(1.05rem,1.4vw,1.18rem)] text-white/50 leading-[1.8] mb-12 max-w-[620px] mx-auto lg:mx-0 font-light">
            Rewynd creates time-compressed, tradable markets shaped by
            historical structure, world events, and agent behavior.
          </p>

          <div className="flex gap-5 justify-center lg:justify-start items-center flex-wrap animate-fade-up-delay-2">
            <GradientButton variant="primary" size="lg" href="#waitlist">
              Join Waitlist
            </GradientButton>
            <GradientButton variant="secondary" size="lg" href="#contact">
              Contact
            </GradientButton>
          </div>

          <p className="mt-8 text-xs text-white/25 font-mono tracking-wide animate-fade-up-delay-3">
            For traders, builders, funds, and researchers exploring the next
            market primitive.
          </p>
        </div>

        <div className="hidden lg:block animate-fade-up-delay-3">
          <HeroArtifact />
        </div>
      </div>
    </section>
  );
}

function HeroArtifact() {
  return (
    <div className="rounded-2xl bg-[rgba(8,9,11,0.9)] border border-white/[0.06] overflow-hidden backdrop-blur-xl shadow-[0_0_80px_rgba(0,255,136,0.04)]">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.04]">
        <div className="w-2 h-2 rounded-full bg-[#00ff88]/50" />
        <div className="w-2 h-2 rounded-full bg-[#ffb800]/40" />
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <span className="text-white/15 text-[0.6rem] font-mono ml-auto">
          rewynd protocol
        </span>
      </div>

      <div className="px-4 py-3 border-b border-white/[0.04] font-mono text-[0.65rem]">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[#00ff88]/60">MARKET</span>
          <span className="text-white/20">BTC-USD-SYN-7a3f</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#00f5d4]/50">STATUS</span>
          <span className="inline-flex items-center gap-1.5 text-[#00ff88]/70">
            <span className="w-1 h-1 rounded-full bg-[#00ff88] animate-pulse" />
            ACTIVE
          </span>
        </div>
      </div>

      <div className="px-4 py-3 space-y-2 font-mono text-[0.62rem]">
        {[
          { time: "14:32:08", event: "World event: FOMC rate hold", color: "#ff69b4" },
          { time: "14:32:09", event: "Vol spike +18.4%", color: "#ffb800" },
          { time: "14:32:11", event: "3 agents repositioned", color: "#00f5d4" },
          { time: "14:32:14", event: "New spread: 0.042%", color: "#00ff88" },
          { time: "14:32:16", event: "Session data: 847 records", color: "#ff00ff" },
        ].map((log) => (
          <div key={log.time} className="flex gap-3 items-start">
            <span className="text-white/15 shrink-0">{log.time}</span>
            <span style={{ color: `${log.color}99` }}>{log.event}</span>
          </div>
        ))}
      </div>

      <div className="px-4 py-2.5 border-t border-white/[0.04] font-mono text-[0.6rem] text-white/15">
        <span className="text-[#00ff88]/30">$</span> awaiting next cycle...
      </div>
    </div>
  );
}
