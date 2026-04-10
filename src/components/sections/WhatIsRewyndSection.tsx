import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Database, Zap, ArrowRightLeft } from "lucide-react";

export default function WhatIsRewyndSection() {
  return (
    <section id="protocol" className="px-[5vw] py-[10vh] z-[1] relative">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <SectionHeading
            title="Markets that evolve, react, and"
            titleAccent="generate new outcomes."
            description="Trade inside generated market environments shaped by real structure, driven by world events, and fully executable."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal delay={100}>
            <GlassCard
              accentColor="green"
              variant="featured"
              className="p-10 h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00ff88]/[0.08] border border-[#00ff88]/10 flex items-center justify-center mb-6 text-[#00ff88]">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3 tracking-tight">
                Historical Structure
              </h3>
              <p className="text-white/45 text-sm leading-[1.8]">
                Markets are initialized from real historical data patterns,
                preserving the structural dynamics that shaped actual price
                movements. Every market world starts from a foundation of real
                data, not random noise.
              </p>
            </GlassCard>
          </Reveal>

          <div className="grid grid-rows-2 gap-6">
            <Reveal delay={200}>
              <GlassCard accentColor="cyan" className="p-8 h-full">
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-xl bg-[#00f5d4]/[0.08] border border-[#00f5d4]/10 flex items-center justify-center shrink-0 text-[#00f5d4]">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-2 tracking-tight">
                      Generative World Events
                    </h3>
                    <p className="text-white/40 text-sm leading-[1.7]">
                      AI-driven events inject volatility and narrative into each
                      market world, creating emergent dynamics no static replay
                      can produce.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={300}>
              <GlassCard accentColor="pink" className="p-8 h-full">
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-xl bg-[#ff69b4]/[0.08] border border-[#ff69b4]/10 flex items-center justify-center shrink-0 text-[#ff69b4]">
                    <ArrowRightLeft className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-2 tracking-tight">
                      Tradable Execution
                    </h3>
                    <p className="text-white/40 text-sm leading-[1.7]">
                      Every synthetic market is fully tradable. Execute
                      positions, manage risk, and generate real behavioral data
                      from every trade.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
