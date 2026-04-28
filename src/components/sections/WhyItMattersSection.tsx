import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Layers, ShieldCheck } from "lucide-react";

export default function WhyItMattersSection() {
  return (
    <section id="why" className="px-[5vw] py-[10vh] z-[1] relative">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(0,245,212,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <SectionHeading
            align="left"
            title="Synthetic markets built for"
            titleAccent="trading first"
            accentGradient="from-[#00f5d4] to-[#00d4aa]"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Reveal delay={100} className="lg:col-span-2 lg:row-span-2">
            <GlassCard
              accentColor="green"
              variant="featured"
              className="p-10 h-full flex flex-col justify-between"
            >
              <div>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#00ff88]/50 font-mono">
                  Core thesis
                </span>
                <h3 className="text-white font-bold text-2xl mt-3 mb-4 tracking-tight leading-snug">
                  Token-like markets on Solana for windows that do not exist on
                  spot venues
                </h3>
                <p className="text-white/45 text-sm leading-[1.8] max-w-[480px]">
                  Each Rewynd market is a live, tradable surface: visible price,
                  positions, fees, and settlement designed around Solana vaults
                  and onchain-first accounting, with compressed cycles, scenarios, and
                  narratives without leaving the trading loop.
                </p>
              </div>
              <div className="flex gap-8 mt-8 pt-6 border-t border-white/[0.04]">
                {[
                  { value: "Live", label: "Tape + flow" },
                  { value: "Token-like", label: "Positions" },
                  { value: "Solana", label: "Vaults + state" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-[#00ff88] font-bold text-sm mb-0.5">
                      {stat.value}
                    </div>
                    <div className="text-white/30 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={200}>
            <GlassCard accentColor="cyan" variant="quiet" className="p-7 h-full">
              <div className="w-10 h-10 rounded-lg bg-[#00f5d4]/[0.08] border border-[#00f5d4]/10 flex items-center justify-center mb-4 text-[#00f5d4]">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">
                Creator-owned surfaces
              </h3>
              <p className="text-white/35 text-xs leading-[1.7]">
                Selected creators configure assets, windows, scenarios, and
                parameters, then open the market to traders on the same
                execution rails.
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={300}>
            <GlassCard accentColor="pink" variant="quiet" className="p-7 h-full">
              <div className="w-10 h-10 rounded-lg bg-[#ff69b4]/[0.08] border border-[#ff69b4]/10 flex items-center justify-center mb-4 text-[#ff69b4]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">
                Transparent settlement path
              </h3>
              <p className="text-white/35 text-xs leading-[1.7]">
                Outcomes, funding, and fees are designed to land onchain at
                resolution. Traders see the same lifecycle they expect from
                serious crypto markets.
              </p>
            </GlassCard>
          </Reveal>
        </div>

        <Reveal delay={400}>
          <div className="mt-8 flex items-center gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <p className="text-white/45 text-sm leading-relaxed">
              <span className="text-white/70 font-medium">Trading is the core loop.</span>{" "}
              As markets run, structured outputs accumulate for agents,
              researchers, and the next generation of market design, secondary to
              the tape, not a replacement for it.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
