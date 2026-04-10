"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { TrendingUp, Code2, FlaskConical, LucideIcon } from "lucide-react";

interface Audience {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  color: string;
}

const audiences: Audience[] = [
  {
    id: "traders",
    icon: TrendingUp,
    title: "Traders",
    description:
      "Trade in dynamic, non-repeating market environments. Develop and test strategies against conditions that evolve with every session.",
    details: [
      "Time-compressed market cycles",
      "AI-driven event volatility",
      "Real execution dynamics",
      "Performance analytics per session",
    ],
    color: "#00ff88",
  },
  {
    id: "builders",
    icon: Code2,
    title: "Builders & Agent Teams",
    description:
      "Build, test, and deploy trading agents inside synthetic markets. Access structured environments purpose-built for autonomous execution.",
    details: [
      "Agent-ready market environments",
      "Behavioral performance data",
      "Structured API access",
      "Multi-agent competition support",
    ],
    color: "#00f5d4",
  },
  {
    id: "funds",
    icon: FlaskConical,
    title: "Funds, Labs & Researchers",
    description:
      "Access proprietary synthetic market data for research, model training, and market intelligence. Data that doesn't exist anywhere else.",
    details: [
      "Proprietary behavioral datasets",
      "Event-impact analytics",
      "Market microstructure data",
      "Custom scenario generation",
    ],
    color: "#ff69b4",
  },
];

export default function AudienceSection() {
  const [active, setActive] = useState(0);
  const current = audiences[active];

  return (
    <section className="px-[5vw] py-[10vh] z-[1] relative">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <SectionHeading
            align="left"
            title="Built for the next generation of"
            titleAccent="market participants"
            accentGradient="from-[#ff69b4] to-[#ff00ff]"
          />
        </Reveal>

        <Reveal delay={150}>
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
            <div className="flex lg:flex-col gap-2">
              {audiences.map((audience, i) => (
                <button
                  key={audience.id}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all duration-300 w-full ${
                    active === i
                      ? "bg-white/[0.06] border border-white/[0.1]"
                      : "bg-transparent border border-transparent hover:bg-white/[0.03]"
                  }`}
                >
                  <audience.icon
                    className="w-5 h-5 shrink-0 transition-colors duration-300"
                    style={{ color: active === i ? audience.color : "rgba(255,255,255,0.3)" }}
                  />
                  <span
                    className={`text-sm font-medium transition-colors duration-300 ${
                      active === i ? "text-white" : "text-white/40"
                    }`}
                  >
                    {audience.title}
                  </span>
                </button>
              ))}
            </div>

            <div
              className="rounded-2xl bg-[rgba(12,13,16,0.8)] border border-white/[0.06] p-8 sm:p-10 backdrop-blur-xl relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-60"
                style={{
                  backgroundImage: `linear-gradient(to right, transparent, ${current.color}66, transparent)`,
                }}
              />

              <div className="flex items-center gap-3 mb-5">
                <current.icon
                  className="w-6 h-6"
                  style={{ color: current.color }}
                />
                <h3 className="text-white font-bold text-xl tracking-tight">
                  {current.title}
                </h3>
              </div>

              <p className="text-white/45 text-sm leading-[1.8] mb-8 max-w-[520px]">
                {current.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.details.map((detail) => (
                  <div
                    key={detail}
                    className="flex items-center gap-3 text-sm text-white/40 py-2"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: `${current.color}99` }}
                    />
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
