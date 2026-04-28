import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Layers, Clock, SlidersHorizontal, Rocket } from "lucide-react";

const steps = [
  {
    icon: Layers,
    title: "Choose an asset",
    body: "BTC, ETH, SOL, indexes, narratives, or custom synthetic assets.",
    color: "#00ff88",
  },
  {
    icon: Clock,
    title: "Choose a time window",
    body: "Replay a historical period or compress a market cycle into minutes.",
    color: "#00f5d4",
  },
  {
    icon: SlidersHorizontal,
    title: "Choose scenario rules",
    body: "Add volatility, events, constraints, liquidity settings, and market duration.",
    color: "#ff69b4",
  },
  {
    icon: Rocket,
    title: "Launch the market",
    body: "Open the market for traders and let price action evolve in real time.",
    color: "#ff00ff",
  },
];

export default function LaunchMarketSection() {
  return (
    <section id="launch" className="px-[5vw] py-[10vh] z-[1] relative">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[420px] h-[420px] bg-[radial-gradient(ellipse,rgba(0,255,136,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto relative">
        <Reveal>
          <SectionHeading
            align="left"
            title="Launch your own market"
            description="Rewynd is not limited to markets created by the core team. The protocol is designed for creators, communities, and builders to launch their own synthetic markets using configurable assets, time periods, scenarios, and market rules."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={100 + i * 70}>
              <GlassCard accentColor="green" variant="quiet" className="p-7 h-full">
                <div
                  className="w-10 h-10 rounded-lg border flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: `${step.color}14`,
                    borderColor: `${step.color}26`,
                    color: step.color,
                  }}
                >
                  <step.icon className="w-4 h-4" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{step.title}</h3>
                <p className="text-white/35 text-xs leading-[1.7]">{step.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className="mt-8 text-xs text-white/30 font-mono tracking-wide">
            Early market creator access will be limited.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
