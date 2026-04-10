"use client";

import { useState, FormEvent } from "react";
import { toast } from "sonner";
import GlassCard from "@/components/ui/GlassCard";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import GradientButton from "@/components/ui/GradientButton";
import Reveal from "@/components/ui/Reveal";

const roleOptions = [
  { value: "trader", label: "Trader" },
  { value: "builder", label: "Builder" },
  { value: "fund", label: "Fund / Investor" },
  { value: "research", label: "Research / Lab" },
  { value: "other", label: "Other" },
];

interface FormErrors {
  name?: string;
  email?: string;
  role?: string;
}

export default function WaitlistSection() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (formData: FormData): FormErrors => {
    const errs: FormErrors = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const role = formData.get("role") as string;

    if (!name?.trim()) errs.name = "Name is required";
    if (!email?.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Invalid email";
    if (!role) errs.role = "Please select a role";

    return errs;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const honeypot = formData.get("website") as string;
    if (honeypot) return;

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          role: formData.get("role"),
          company: formData.get("company"),
          notes: formData.get("notes"),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
      toast.success("You're on the list. We'll be in touch.");
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="px-[5vw] py-[10vh] z-[1] relative">
      <div className="max-w-[600px] mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#00ff88]/70 mb-4 font-mono">
              Early Access
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-5 leading-tight tracking-tight">
              Join the{" "}
              <span className="bg-gradient-to-r from-[#00f5d4] to-[#00ff88] bg-clip-text text-transparent">
                waitlist
              </span>
            </h2>
            <p className="text-[clamp(1rem,1.4vw,1.1rem)] text-white/45 max-w-[500px] mx-auto leading-relaxed">
              We&apos;re onboarding early users interested in trading, agents,
              and synthetic market data.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <GlassCard accentColor="green" hover={false} className="p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/20 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-7 h-7 text-[#00ff88]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  You&apos;re on the list
                </h3>
                <p className="text-white/40 text-sm">
                  We&apos;ll reach out when your access is ready.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="website"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input
                    name="name"
                    label="Name"
                    placeholder="Your name"
                    error={errors.name}
                  />
                  <Input
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    error={errors.email}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Select
                    name="role"
                    label="Role"
                    placeholder="Select your role"
                    options={roleOptions}
                    error={errors.role}
                  />
                  <Input
                    name="company"
                    label="Company (optional)"
                    placeholder="Company or project"
                  />
                </div>

                <Textarea
                  name="notes"
                  label="Notes (optional)"
                  placeholder="What interests you about synthetic markets?"
                />

                <GradientButton
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Join Waitlist"}
                </GradientButton>
              </form>
            )}
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
