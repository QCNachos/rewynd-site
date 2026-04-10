import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { TrendingUp, Code2, FlaskConical } from "lucide-react";

const audiences = [
  {
    icon: TrendingUp,
    title: "Traders",
    description:
      "Trade in dynamic, non-repeating market environments. Develop and test strategies against conditions that evolve with every session.",
    details: [
      "Time-compressed market cycles",
      "AI-driven event volatility",
      "Real execution dynamics",
    ],
    accent: "green" as const,
    iconColor: "text-[#00ff88]",
    dotColor: "bg-[#00ff88]/60",
  },
  {
    icon: Code2,
    title: "Builders & Agent Teams",
    description:
      "Build, test, and deploy trading agents inside synthetic markets. Access structured environments purpose-built for autonomous execution.",
    details: [
      "Agent-ready market environments",
      "Behavioral performance data",
      "Structured API access",
    ],
    accent: "cyan" as const,
    iconColor: "text-[#00f5d4]",
    dotColor: "bg-[#00f5d4]/60",
  },
  {
    icon: FlaskConical,
    title: "Funds, Labs & Researchers",
    description:
      "Access proprietary synthetic market data for research, model training, and market intelligence. Data that doesn't exist anywhere else.",
    details: [
      "Proprietary behavioral datasets",
      "Event-impact analytics",
      "Market microstructure data",
    ],
    accent: "pink" as const,
    iconColor: "text-[#ff69b4]",
    dotColor: "bg-[#ff69b4]/60",
  },
];

export default function AudienceSection() {
  return (
    <section className="px-[5vw] py-[10vh] z-[1] relative">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading
          label="Who it's for"
          title="Built for the next generation of"
          titleAccent="market participants"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((audience) => (
            <GlassCard
              key={audience.title}
              accentColor={audience.accent}
              className="p-8 flex flex-col"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-6 ${audience.iconColor}`}
              >
                <audience.icon className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3 tracking-tight">
                {audience.title}
              </h3>
              <p className="text-white/40 text-sm leading-[1.7] mb-6">
                {audience.description}
              </p>
              <ul className="mt-auto space-y-2.5">
                {audience.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-center gap-2.5 text-xs text-white/35"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${audience.dotColor}`}
                    />
                    {detail}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
