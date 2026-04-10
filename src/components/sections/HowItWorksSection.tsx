"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "A market world is initialized",
    description:
      "Historical data structures are loaded and parameterized to create a unique market environment with realistic price dynamics.",
    color: "#00ff88",
  },
  {
    number: "02",
    title: "Events and agents shape the environment",
    description:
      "World events inject volatility while AI agents create market pressure, producing dynamic conditions that evolve in real time.",
    color: "#00f5d4",
  },
  {
    number: "03",
    title: "Users trade inside the market",
    description:
      "Execute trades, manage positions, and react to events in a time-compressed environment where weeks unfold in minutes.",
    color: "#ff69b4",
  },
  {
    number: "04",
    title: "New data is produced",
    description:
      "Every market generates unique structured data: trading behavior, event impact metrics, execution patterns, and outcome distributions.",
    color: "#ff00ff",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how" className="px-[5vw] py-[10vh] z-[1] relative">
      <div className="max-w-[1000px] mx-auto">
        <Reveal>
          <SectionHeading
            label="How it works"
            title="From initialization to"
            titleAccent="data output"
            description="Four steps define the lifecycle of every synthetic market."
          />
        </Reveal>

        <div className="space-y-0">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <Reveal
                key={step.number}
                delay={i * 120}
                direction={isEven ? "left" : "right"}
              >
                <div
                  className={`flex items-start gap-6 sm:gap-10 py-8 ${
                    i < steps.length - 1
                      ? "border-b border-white/[0.04]"
                      : ""
                  } ${isEven ? "" : "sm:flex-row-reverse sm:text-right"}`}
                >
                  <div
                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 hover:scale-110"
                    style={{
                      background: `rgba(${hexToRgb(step.color)}, 0.06)`,
                      border: `1px solid rgba(${hexToRgb(step.color)}, 0.12)`,
                    }}
                  >
                    <span
                      className="text-sm font-bold font-mono"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3
                      className="font-bold text-lg mb-2 tracking-tight"
                      style={{ color: step.color }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-[1.8] max-w-[460px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}
