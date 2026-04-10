"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
  href?: string;
  uppercase?: boolean;
}

export default function GradientButton({
  children,
  variant = "primary",
  size = "default",
  href,
  uppercase = false,
  className = "",
  ...props
}: GradientButtonProps) {
  const baseClasses = `inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-full ${
    uppercase ? "uppercase tracking-[0.1em]" : ""
  }`;

  const sizeClasses =
    size === "lg"
      ? "px-10 py-4 text-[clamp(0.9rem,1.3vw,1.1rem)] min-w-[200px]"
      : "px-7 py-3 text-sm min-w-[160px]";

  const variantClasses =
    variant === "primary"
      ? "bg-[#00bf63] text-black shadow-[0_4px_20px_rgba(0,191,99,0.3)] hover:bg-[#00d970] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,255,136,0.4)]"
      : "bg-transparent border border-white/25 text-white/80 backdrop-blur-sm hover:border-white/50 hover:bg-white/[0.06] hover:-translate-y-1 hover:text-white";

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
