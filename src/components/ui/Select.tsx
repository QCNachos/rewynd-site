"use client";

import { SelectHTMLAttributes, forwardRef } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, placeholder, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-white/50 mb-2">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={`w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white/90 text-sm focus:outline-none focus:border-[#00ff88]/30 focus:bg-white/[0.06] transition-all duration-200 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22rgba(255%2C255%2C255%2C0.4)%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_12px_center] ${
            error ? "border-[#ff4976]/40" : ""
          } ${className}`}
          {...props}
        >
          {placeholder && (
            <option value="" className="bg-[#0a0b0d] text-white/40">
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              className="bg-[#0a0b0d] text-white/90"
            >
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1.5 text-xs text-[#ff4976]/80">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
