import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { Database, Zap, ArrowRightLeft } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Historical Structure",
    description:
      "Markets are initialized from real historical data patterns, preserving the structural dynamics that shaped actual price movements.",
    accent: "green" as const,
    iconColor: "text-[#00ff88]",
  },
  {
    icon: Zap,
    title: "Generative World Events",
    description:
      "AI-driven events inject volatility and narrative into each market world, creating emergent dynamics no static replay can produce.",
    accent: "cyan" as const,
    iconColor: "text-[#00f5d4]",
  },
  {
    icon: ArrowRightLeft,
    title: "Tradable Execution",
    description:
      "Every synthetic market is fully tradable. Execute positions, manage risk, and generate real behavioral data from every trade.",
    accent: "pink" as const,
    iconColor: "text-[#ff69b4]",
  },
];

export default function WhatIsRewyndSection() {
  return (
    <section id="protocol" className="px-[5vw] py-[10vh] z-[1] relative">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading
          label="What is Rewynd"
          title="Markets that evolve, react, and"
          titleAccent="generate new outcomes."
          description="Trade inside generated market environments shaped by real structure, driven by world events, and fully executable."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <GlassCard
              key={feature.title}
              accentColor={feature.accent}
              className={`p-8 animate-fade-up-delay-${i + 1}`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-6 ${feature.iconColor}`}
              >
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-white/40 text-sm leading-[1.7]">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
