import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Database, BarChart3, Brain, Network } from "lucide-react";

const dataPoints = [
  {
    icon: BarChart3,
    title: "Tape & flow",
    description:
      "How traders move size through synthetic windows: entries, exits, and reactions to reprices.",
    color: "text-[#00ff88]",
  },
  {
    icon: Brain,
    title: "Scenario markers",
    description:
      "When volatility shifts, events fire, or rules change, the protocol records structured markers alongside price.",
    color: "text-[#00f5d4]",
  },
  {
    icon: Database,
    title: "Settlement artifacts",
    description:
      "Final positions, funding, fees, and outcome states captured for audit and downstream research.",
    color: "text-[#ff69b4]",
  },
  {
    icon: Network,
    title: "Cross-market signals",
    description:
      "Aggregated behaviors across launches help tune the next generation of creator parameters.",
    color: "text-[#ff00ff]",
  },
];

const sampleData = [
  { field: "session_id", value: "mkt_8f3a2c91", type: "uuid" },
  { field: "event_type", value: '"liquidity_taper"', type: "string" },
  { field: "impact_score", value: "0.847", type: "float" },
  { field: "vol_delta", value: "+34.2%", type: "percent" },
  { field: "positions_closed", value: "1,247", type: "int" },
  { field: "avg_reaction_ms", value: "340", type: "int" },
];

export default function DataLayerSection() {
  return (
    <section id="data" className="px-[5vw] py-[10vh] z-[1] relative">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse,rgba(255,0,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">
          <div>
            <Reveal>
              <SectionHeading
                align="left"
                label="Data trail"
                title="Every market creates"
                titleAccent="a data trail"
                description="Trading is the core experience. As markets run, Rewynd also captures structured data from price action, trader behavior, event reactions, and market outcomes. This creates a valuable layer for agents, researchers, and future market design."
                accentGradient="from-[#ff00ff] to-[#ff69b4]"
              />
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dataPoints.map((point, i) => (
                <Reveal key={point.title} delay={i * 100}>
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.04] transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.08] h-full">
                    <point.icon
                      className={`w-5 h-5 shrink-0 mt-0.5 ${point.color}`}
                    />
                    <div>
                      <h4 className="text-white/90 font-semibold text-sm mb-1">
                        {point.title}
                      </h4>
                      <p className="text-white/35 text-xs leading-[1.7]">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={200} direction="right">
            <div className="rounded-2xl bg-[rgba(8,9,11,0.9)] border border-white/[0.06] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.04]">
                <div className="w-2 h-2 rounded-full bg-[#ff4976]/60" />
                <div className="w-2 h-2 rounded-full bg-[#ffb800]/60" />
                <div className="w-2 h-2 rounded-full bg-[#00ff88]/60" />
                <span className="text-white/20 text-[0.65rem] font-mono ml-2">
                  market_trail_sample.json
                </span>
              </div>
              <div className="p-4 font-mono text-xs space-y-1.5">
                <span className="text-white/20">{"{"}</span>
                {sampleData.map((row, i) => (
                  <div key={row.field} className="pl-4">
                    <span className="text-[#00f5d4]/70">
                      &quot;{row.field}&quot;
                    </span>
                    <span className="text-white/20">: </span>
                    <span
                      className={
                        row.type === "string"
                          ? "text-[#ff69b4]/70"
                          : "text-[#00ff88]/70"
                      }
                    >
                      {row.value}
                    </span>
                    {i < sampleData.length - 1 && (
                      <span className="text-white/20">,</span>
                    )}
                  </div>
                ))}
                <span className="text-white/20">{"}"}</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={400}>
          <GlassCard
            accentColor="green"
            variant="featured"
            className="p-8 mt-10"
          >
            <p className="text-white/60 text-sm leading-relaxed max-w-[640px]">
              <span className="text-[#00ff88] font-semibold">
                The tape stays primary.
              </span>{" "}
              Structured trails accrue beside execution so teams can study
              behavior, tune scenarios, and ship better markets, without turning
              Rewynd into a passive dataset shop.
            </p>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
