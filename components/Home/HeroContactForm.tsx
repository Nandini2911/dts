"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
};

type ContactResponse = {
  success?: boolean;
  message?: string;
};

const INITIAL_FORM_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
};

const services = [
  "Branding & Creative Direction",
  "PR & Digital Marketing",
  "Events & Weddings",
  "Guest or Celebrity Management",
  "Website Development & SEO",
  "AI Video & VFX",
];

export default function HeroContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus("");
    setIsSuccess(false);

    const message = [
      `Phone: ${formData.phone.trim()}`,
      `Service needed: ${formData.service}`,
      "Lead source: Free strategy call form",
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message,
        }),
      });

      const responseData = (await response
        .json()
        .catch(() => ({}))) as ContactResponse;

      if (!response.ok || !responseData.success) {
        throw new Error(
          responseData.message ||
            "Your enquiry could not be sent. Please try again.",
        );
      }

      setIsSuccess(true);
      setStatus(
        responseData.message ||
          "Thank you. Our team will contact you to schedule the strategy call.",
      );
      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Your enquiry could not be sent. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    "h-[52px] w-full rounded-2xl border border-white/[0.15] bg-white/10 px-4 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-white/40 focus:border-white/[0.45] focus:bg-white/[0.15] focus:ring-2 focus:ring-white/10";

  return (
    <div className="relative w-full max-w-[500px] overflow-hidden rounded-[28px] border border-white/[0.15] bg-[#071120]/45 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-7 lg:p-8">
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#6288B9]/20 blur-3xl" />

      <div className="relative z-10">
        <p className="text-[10px] font-medium uppercase tracking-[2.4px] text-white/45">
          Free 30-Minute Consultation
        </p>
        <h2
          className="mt-3 text-[30px] font-bold leading-[1.05] tracking-[-2px] text-white sm:text-[36px]"
          style={{ fontFamily: "New York, ui-serif, Georgia, serif" }}
        >
          Get a Free Strategy Call
        </h2>
        <p className="mt-4 text-sm leading-7 text-white/60">
          Share the essentials. Our team will contact you to understand your goal
          and recommend the right next step.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4"
          aria-label="Free strategy call enquiry form"
        >
          <div>
            <label htmlFor="strategy-name" className="sr-only">
              Your name
            </label>
            <input
              id="strategy-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              autoComplete="name"
              className={fieldClass}
              required
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="strategy-email" className="sr-only">
                Email address
              </label>
              <input
                id="strategy-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                autoComplete="email"
                className={fieldClass}
                required
              />
            </div>

            <div>
              <label htmlFor="strategy-phone" className="sr-only">
                Phone number
              </label>
              <input
                id="strategy-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                autoComplete="tel"
                inputMode="tel"
                className={fieldClass}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="strategy-service" className="sr-only">
              Service required
            </label>
            <select
              id="strategy-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`${fieldClass} appearance-none`}
              required
            >
              <option value="" disabled className="text-slate-900">
                Select a Service
              </option>
              {services.map((service) => (
                <option key={service} value={service} className="text-slate-900">
                  {service}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group flex h-[54px] w-full items-center justify-center gap-3 rounded-2xl bg-white text-sm font-semibold text-[#0D2444] transition-all duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Get a Free Strategy Call"}
            {!loading && (
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </button>

          {status && (
            <div
              role="status"
              className={`flex items-start gap-2 rounded-2xl border px-4 py-3 text-sm leading-6 ${
                isSuccess
                  ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-100"
                  : "border-red-300/20 bg-red-300/10 text-red-100"
              }`}
            >
              {isSuccess && <CheckCircle2 className="mt-1 h-4 w-4 shrink-0" />}
              <span>{status}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}