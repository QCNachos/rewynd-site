import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Database, SlidersHorizontal, ArrowRightLeft } from "lucide-react";

export default function WhatIsRewyndSection() {
  return (
    <section id="protocol" className="px-[5vw] py-[10vh] z-[1] relative">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <SectionHeading
            title="Structure, scenarios, and flow"
            titleAccent="under every tape"
            description="Markets start from historical baseline, run under explicit rules, and update from live trading, so the surface feels like a normal crypto market while the engine stays synthetic."
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
                Historical structure
              </h3>
              <p className="text-white/45 text-sm leading-[1.8]">
                Markets initialize from real historical patterns so the opening
                dynamics and baseline path respect how the asset actually
                behaved; then trading and scenarios take over.
              </p>
            </GlassCard>
          </Reveal>

          <div className="grid grid-rows-2 gap-6">
            <Reveal delay={200}>
              <GlassCard accentColor="cyan" className="p-8 h-full">
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-xl bg-[#00f5d4]/[0.08] border border-[#00f5d4]/10 flex items-center justify-center shrink-0 text-[#00f5d4]">
                    <SlidersHorizontal className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-2 tracking-tight">
                      Scenario inputs & volatility
                    </h3>
                    <p className="text-white/40 text-sm leading-[1.7]">
                      Rules, events, constraints, and volatility knobs shape how
                      far price can drift from the baseline while the window is
                      open.
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
                      Live trader flow
                    </h3>
                    <p className="text-white/40 text-sm leading-[1.7]">
                      Orders, positions, and two-way flow feed back into the
                      synthetic price path alongside the scripted inputs and the
                      same actions you expect from a token-like market.
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
