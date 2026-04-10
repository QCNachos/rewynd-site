import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { Layers, Target, Cpu, RefreshCw } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "A New Asset Class",
    description:
      "Synthetic markets create a new category of tradable environments. Every market is unique, time-compressed, and data-rich.",
    accent: "green" as const,
    iconColor: "text-[#00ff88]",
    numColor: "text-[#00ff88]",
  },
  {
    icon: Target,
    title: "Better Training Environments",
    description:
      "Traditional backtesting is static and deterministic. Synthetic markets produce dynamic, non-repeating conditions for better skill development.",
    accent: "cyan" as const,
    iconColor: "text-[#00f5d4]",
    numColor: "text-[#00f5d4]",
  },
  {
    icon: Cpu,
    title: "Proprietary Synthetic Data",
    description:
      "Every trade, event reaction, and outcome generates structured behavioral data that doesn't exist anywhere else.",
    accent: "pink" as const,
    iconColor: "text-[#ff69b4]",
    numColor: "text-[#ff69b4]",
  },
  {
    icon: RefreshCw,
    title: "Protocol-Native Flywheel",
    description:
      "More markets create more data. More data creates better agents. Better agents attract more traders. The system compounds.",
    accent: "magenta" as const,
    iconColor: "text-[#ff00ff]",
    numColor: "text-[#ff00ff]",
  },
];

export default function WhyItMattersSection() {
  return (
    <section id="why" className="px-[5vw] py-[10vh] z-[1] relative">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeading
          label="Why it matters"
          title="A new asset class for trading, training, and"
          titleAccent="market intelligence"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <GlassCard
              key={reason.title}
              accentColor={reason.accent}
              className="p-8"
            >
              <div className="flex items-start gap-5">
                <div
                  className={`w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 ${reason.iconColor}`}
                >
                  <reason.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-2 tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-[1.7]">
                    {reason.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
