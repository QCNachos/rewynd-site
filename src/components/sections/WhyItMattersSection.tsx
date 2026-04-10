import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Target, Cpu, RefreshCw } from "lucide-react";

export default function WhyItMattersSection() {
  return (
    <section id="why" className="px-[5vw] py-[10vh] z-[1] relative">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(0,245,212,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <SectionHeading
            align="left"
            title="A new asset class for trading, training, and"
            titleAccent="market intelligence"
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
                  Synthetic markets create a new category of tradable
                  environments
                </h3>
                <p className="text-white/45 text-sm leading-[1.8] max-w-[480px]">
                  Every market is unique, time-compressed, and data-rich.
                  Unlike static backtests or paper trading, synthetic markets
                  evolve, react to events, and produce outcomes that have never
                  existed before.
                </p>
              </div>
              <div className="flex gap-8 mt-8 pt-6 border-t border-white/[0.04]">
                {[
                  { value: "Unique", label: "Every session" },
                  { value: "Dynamic", label: "Event-driven" },
                  { value: "Tradable", label: "Full execution" },
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
                <Target className="w-4 h-4" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">
                Better Training Environments
              </h3>
              <p className="text-white/35 text-xs leading-[1.7]">
                Synthetic markets produce dynamic, non-repeating conditions
                that static backtesting cannot replicate.
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={300}>
            <GlassCard accentColor="pink" variant="quiet" className="p-7 h-full">
              <div className="w-10 h-10 rounded-lg bg-[#ff69b4]/[0.08] border border-[#ff69b4]/10 flex items-center justify-center mb-4 text-[#ff69b4]">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">
                Proprietary Synthetic Data
              </h3>
              <p className="text-white/35 text-xs leading-[1.7]">
                Every trade and event generates structured behavioral data
                that doesn&apos;t exist anywhere else.
              </p>
            </GlassCard>
          </Reveal>
        </div>

        <Reveal delay={400}>
          <div className="mt-8 flex items-center gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <RefreshCw className="w-5 h-5 text-[#ff00ff] shrink-0" />
            <p className="text-white/50 text-sm leading-relaxed">
              <span className="text-white/70 font-medium">
                Protocol-native flywheel:
              </span>{" "}
              More markets create more data. More data creates better agents.
              Better agents attract more traders. The system compounds.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
