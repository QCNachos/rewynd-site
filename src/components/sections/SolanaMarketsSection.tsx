import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Coins, Zap, Rocket } from "lucide-react";

const cards = [
  {
    icon: Coins,
    title: "Tradable market tokens",
    body: "Each synthetic market behaves like a normal tradable asset inside the Rewynd interface, with price movement, positions, and market history.",
    accent: "green" as const,
    iconClass: "text-[#00ff88]",
    boxClass: "bg-[#00ff88]/[0.08] border-[#00ff88]/10",
  },
  {
    icon: Zap,
    title: "Solana-native execution",
    body: "Markets are designed around Solana vaults, fast settlement, transparent state, and onchain-first accounting.",
    accent: "cyan" as const,
    iconClass: "text-[#00f5d4]",
    boxClass: "bg-[#00f5d4]/[0.08] border-[#00f5d4]/10",
  },
  {
    icon: Rocket,
    title: "Creator-launched markets",
    body: "Market creators can launch new synthetic markets by selecting an asset, time period, scenario, rules, and market parameters.",
    accent: "pink" as const,
    iconClass: "text-[#ff69b4]",
    boxClass: "bg-[#ff69b4]/[0.08] border-[#ff69b4]/10",
  },
];

export default function SolanaMarketsSection() {
  return (
    <section id="markets" className="px-[5vw] py-[10vh] z-[1] relative">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <SectionHeading
            title="Synthetic markets that trade like"
            titleAccent="Solana assets"
            description="Every Rewynd market is designed to feel familiar to crypto traders: a live market, a visible price, buy and sell actions, position tracking, and settlement logic. Under the hood, the market is generated from historical data, scenario rules, volatility inputs, and real-time trader activity."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={100 + i * 80}>
              <GlassCard accentColor={card.accent} className="p-8 h-full">
                <div
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 shrink-0 ${card.boxClass}`}
                >
                  <card.icon className={`w-5 h-5 ${card.iconClass}`} />
                </div>
                <h3 className="text-white font-bold text-base mb-2 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-white/40 text-sm leading-[1.75]">{card.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
