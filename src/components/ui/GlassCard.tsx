"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  accentColor?: "green" | "cyan" | "pink" | "magenta";
  variant?: "default" | "featured" | "quiet";
  hover?: boolean;
}

const accentMap = {
  green: {
    line: "via-[#00ff88]/40",
    border: "hover:border-[#00ff88]/20",
    glow: "hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(0,255,136,0.06)]",
    featuredBorder: "border-[#00ff88]/15",
    featuredGlow: "shadow-[0_0_50px_rgba(0,255,136,0.06)]",
  },
  cyan: {
    line: "via-[#00f5d4]/40",
    border: "hover:border-[#00f5d4]/20",
    glow: "hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(0,245,212,0.06)]",
    featuredBorder: "border-[#00f5d4]/15",
    featuredGlow: "shadow-[0_0_50px_rgba(0,245,212,0.06)]",
  },
  pink: {
    line: "via-[#ff69b4]/40",
    border: "hover:border-[#ff69b4]/20",
    glow: "hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(255,105,180,0.06)]",
    featuredBorder: "border-[#ff69b4]/15",
    featuredGlow: "shadow-[0_0_50px_rgba(255,105,180,0.06)]",
  },
  magenta: {
    line: "via-[#ff00ff]/40",
    border: "hover:border-[#ff00ff]/20",
    glow: "hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(255,0,255,0.06)]",
    featuredBorder: "border-[#ff00ff]/15",
    featuredGlow: "shadow-[0_0_50px_rgba(255,0,255,0.06)]",
  },
};

export default function GlassCard({
  children,
  className = "",
  accentColor = "green",
  variant = "default",
  hover = true,
}: GlassCardProps) {
  const accent = accentMap[accentColor];

  const variantClasses = {
    default: hover
      ? `hover:-translate-y-1.5 ${accent.border} ${accent.glow}`
      : "",
    featured: `${accent.featuredBorder} ${accent.featuredGlow} rounded-3xl`,
    quiet: "",
  };

  return (
    <div
      className={`group relative bg-[rgba(12,13,16,0.8)] border border-white/[0.06] rounded-2xl backdrop-blur-xl transition-all duration-500 overflow-hidden ${variantClasses[variant]} ${className}`}
    >
      {variant !== "quiet" && (
        <div
          className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${accent.line} to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
        />
      )}
      {children}
    </div>
  );
}
