"use client";

import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-white/50 mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white/90 text-sm placeholder:text-white/25 focus:outline-none focus:border-[#00ff88]/30 focus:bg-white/[0.06] transition-all duration-200 ${
            error ? "border-[#ff4976]/40" : ""
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs text-[#ff4976]/80">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
