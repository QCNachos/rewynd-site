import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "A market world is initialized",
    description:
      "Historical data structures are loaded and parameterized to create a unique market environment with realistic price dynamics.",
    color: "text-[#00ff88]",
    borderColor: "border-[#00ff88]/15",
    glowColor: "shadow-[0_0_40px_rgba(0,255,136,0.04)]",
    lineColor: "from-[#00ff88]/30",
  },
  {
    number: "02",
    title: "Events and agents shape the environment",
    description:
      "World events inject volatility while AI agents create market pressure, producing dynamic conditions that evolve in real time.",
    color: "text-[#00f5d4]",
    borderColor: "border-[#00f5d4]/15",
    glowColor: "shadow-[0_0_40px_rgba(0,245,212,0.04)]",
    lineColor: "from-[#00f5d4]/30",
  },
  {
    number: "03",
    title: "Users trade inside the market",
    description:
      "Execute trades, manage positions, and react to events in a time-compressed environment where weeks unfold in minutes.",
    color: "text-[#ff69b4]",
    borderColor: "border-[#ff69b4]/15",
    glowColor: "shadow-[0_0_40px_rgba(255,105,180,0.04)]",
    lineColor: "from-[#ff69b4]/30",
  },
  {
    number: "04",
    title: "New data is produced",
    description:
      "Every market generates unique structured data: trading behavior, event impact metrics, execution patterns, and outcome distributions.",
    color: "text-[#ff00ff]",
    borderColor: "border-[#ff00ff]/15",
    glowColor: "shadow-[0_0_40px_rgba(255,0,255,0.04)]",
    lineColor: "from-[#ff00ff]/30",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how" className="px-[5vw] py-[10vh] z-[1] relative">
      <div className="max-w-[800px] mx-auto">
        <SectionHeading
          label="How it works"
          title="From initialization to"
          titleAccent="data output"
          description="Four steps define the lifecycle of every synthetic market."
        />

        <div className="relative">
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-[#00ff88]/20 via-[#ff69b4]/10 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="relative flex gap-6 group">
                <div
                  className={`relative z-10 w-14 h-14 rounded-2xl bg-[rgba(12,13,16,0.9)] border ${step.borderColor} flex items-center justify-center shrink-0 ${step.glowColor} transition-all duration-500 group-hover:scale-105`}
                >
                  <span
                    className={`text-sm font-bold font-mono ${step.color}`}
                  >
                    {step.number}
                  </span>
                </div>

                <div className="flex-1 pb-2">
                  <h3
                    className={`font-bold text-lg mb-2 tracking-tight ${step.color}`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-[1.8]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
