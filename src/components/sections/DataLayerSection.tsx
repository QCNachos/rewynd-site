import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { Database, BarChart3, Brain, Network } from "lucide-react";

const dataPoints = [
  {
    icon: BarChart3,
    title: "Behavioral Data",
    description: "How traders and agents react to events, volatility shifts, and market structure changes.",
    color: "text-[#00ff88]",
  },
  {
    icon: Brain,
    title: "Event Impact Metrics",
    description: "Measured effects of world events on price action, volume, and trader positioning.",
    color: "text-[#00f5d4]",
  },
  {
    icon: Database,
    title: "Execution Patterns",
    description: "Order flow, timing distributions, risk management behaviors, and outcome correlations.",
    color: "text-[#ff69b4]",
  },
  {
    icon: Network,
    title: "Market Microstructure",
    description: "Liquidity dynamics, spread behavior, and depth patterns across synthetic market conditions.",
    color: "text-[#ff00ff]",
  },
];

export default function DataLayerSection() {
  return (
    <section id="data" className="px-[5vw] py-[10vh] z-[1] relative">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading
          label="Data Layer"
          title="More than trading:"
          titleAccent="a new data engine"
          description="Every synthetic market generates unique behavioral and market data that can power research, agents, and future data products."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {dataPoints.map((point) => (
            <div
              key={point.title}
              className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.04] transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.08]"
            >
              <point.icon className={`w-5 h-5 shrink-0 mt-0.5 ${point.color}`} />
              <div>
                <h4 className="text-white/90 font-semibold text-sm mb-1">
                  {point.title}
                </h4>
                <p className="text-white/35 text-xs leading-[1.7]">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <GlassCard accentColor="green" className="p-8 text-center">
          <p className="text-white/60 text-sm leading-relaxed max-w-[500px] mx-auto">
            <span className="text-[#00ff88] font-semibold">
              Synthetic markets are both a venue and a data factory.
            </span>{" "}
            Every market session produces structured, labeled datasets that
            traditional markets cannot generate, creating a compounding data
            advantage over time.
          </p>
        </GlassCard>
      </div>
    </section>
  );
}
