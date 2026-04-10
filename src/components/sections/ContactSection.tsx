"use client";

import { useState, FormEvent } from "react";
import { toast } from "sonner";
import GlassCard from "@/components/ui/GlassCard";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import GradientButton from "@/components/ui/GradientButton";

const categoryOptions = [
  { value: "partnerships", label: "Partnerships" },
  { value: "investors", label: "Investors" },
  { value: "data", label: "Data Buyers" },
  { value: "beta", label: "Beta Access" },
  { value: "general", label: "General Inquiries" },
];

interface FormErrors {
  name?: string;
  email?: string;
  category?: string;
  message?: string;
}

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (formData: FormData): FormErrors => {
    const errs: FormErrors = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const category = formData.get("category") as string;
    const message = formData.get("message") as string;

    if (!name?.trim()) errs.name = "Name is required";
    if (!email?.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Invalid email";
    if (!category) errs.category = "Please select a category";
    if (!message?.trim()) errs.message = "Message is required";

    return errs;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const honeypot = formData.get("company_url") as string;
    if (honeypot) return;

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          category: formData.get("category"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
      toast.success("Message sent. We'll get back to you soon.");
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-[5vw] py-[10vh] z-[1] relative">
      <div className="max-w-[600px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#00f5d4]/70 mb-4 font-mono">
            Get in touch
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-5 leading-tight tracking-tight">
            Contact{" "}
            <span className="bg-gradient-to-r from-[#00f5d4] to-[#00ff88] bg-clip-text text-transparent">
              us
            </span>
          </h2>
          <p className="text-[clamp(1rem,1.4vw,1.1rem)] text-white/45 max-w-[500px] mx-auto leading-relaxed">
            Partnerships, investment inquiries, data access, or beta requests.
          </p>
        </div>

        <GlassCard accentColor="cyan" hover={false} className="p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#00f5d4]/10 border border-[#00f5d4]/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-7 h-7 text-[#00f5d4]"
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
                Message sent
              </h3>
              <p className="text-white/40 text-sm">
                We&apos;ll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="company_url"
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

              <Select
                name="category"
                label="Category"
                placeholder="Select a category"
                options={categoryOptions}
                error={errors.category}
              />

              <Textarea
                name="message"
                label="Message"
                placeholder="Tell us what you're interested in..."
                error={errors.message}
              />

              <GradientButton
                type="submit"
                variant="primary"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </GradientButton>
            </form>
          )}
        </GlassCard>
      </div>
    </section>
  );
}
