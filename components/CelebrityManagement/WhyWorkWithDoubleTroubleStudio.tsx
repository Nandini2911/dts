"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

export default function WhyWorkWithDoubleTroubleStudio() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reasons = [
    {
      title: "Strategic Talent Recommendations",
      desc: "We recommend talent based on brand fit, audience profile, campaign objective, event format and desired impact, not only popularity.",
    },
    {
      title: "PR + Event + Talent Coordination Expertise",
      desc: "Our experience across PR, brand campaigns, events and celebrity coordination allows us to manage both visibility and execution.",
    },
    {
      title: "Luxury & Hospitality Sensibility",
      desc: "We understand the expectations of premium brands, luxury launches, hospitality experiences, private celebrations and high-value guest environments.",
    },
    {
      title: "End-to-End Project Management",
      desc: "From celebrity sourcing and negotiations to contracts, logistics, hospitality and event-day handling, we manage the complete process.",
    },
    {
      title: "Discreet & Professional Communication",
      desc: "Celebrity coordination requires confidentiality, timing discipline, stakeholder management and clear communication. Our team handles every step professionally.",
    },
    {
      title: "Nationwide Execution Capability",
      desc: "We support celebrity management and talent coordination across major cities and event destinations in India.",
    },
    {
      title: "Strong Vendor & Event Ecosystem",
      desc: "Our network across events, production, PR, hospitality, logistics and creative execution helps deliver smoother celebrity engagements.",
    },
    {
      title: "On-Ground Coordination Team",
      desc: "We manage arrivals, backstage movement, media moments, stage entries, guest interactions and departure planning during the event.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#EEF8FF] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(138,189,240,0.38),transparent_34%),radial-gradient(circle_at_90%_90%,rgba(13,36,68,0.12),transparent_34%),linear-gradient(180deg,#F8FCFF_0%,#EAF6FF_100%)]" />
      <div className="absolute left-[-240px] top-[-220px] h-[560px] w-[560px] rounded-full bg-[#8ABDF0]/28 blur-3xl" />
      <div className="absolute bottom-[-280px] right-[-240px] h-[620px] w-[620px] rounded-full bg-[#0D2444]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1250px]">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[900px] text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0D2444]/10 bg-white/80 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#0D2444] shadow-[0_14px_40px_rgba(13,36,68,0.07)] backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-[#6288B9]" />
            Why DTS
          </span>

          <h2
            className="mx-auto mt-6 max-w-[900px] text-[34px] font-semibold leading-[0.96] tracking-[-0.055em] text-[#0D2444] sm:text-[44px] md:text-[54px] lg:text-[64px]"
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            Why Work With{" "}
            <span className="bg-gradient-to-r from-[#8ABDF0] via-[#315E91] to-[#0D2444] bg-clip-text text-transparent">
              Double Trouble Studio
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[15px] font-medium leading-[1.85] text-slate-600 md:text-[17px]">
            We combine strategy, PR thinking, talent coordination, event
            execution and luxury hospitality sensibility to deliver celebrity
            engagements that feel smooth, professional and brand-aligned.
          </p>
        </motion.div>

        {/* INTERACTIVE SELECTOR */}
        <div className="mt-16 grid grid-cols-1 gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          {/* LEFT LIST */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="rounded-[42px] border border-white/75 bg-white/55 p-4 shadow-[0_28px_90px_rgba(13,36,68,0.10)] backdrop-blur-2xl sm:p-5"
          >
            <div className="space-y-3">
              {reasons.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`group flex w-full items-center justify-between gap-4 rounded-[26px] px-5 py-5 text-left transition-all duration-300 ${
                      isActive
                        ? "bg-[#0D2444] text-white shadow-[0_20px_60px_rgba(13,36,68,0.20)]"
                        : "bg-white/70 text-[#0D2444] hover:bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-[#8ABDF0] text-[#0D2444]"
                            : "bg-[#F0F8FF] text-[#315E91]"
                        }`}
                      >
                        <CheckCircle2 className="h-4 w-4" />
                      </span>

                      <span className="text-[15px] font-black uppercase leading-[1.45] tracking-[0.11em]">
                        {item.title}
                      </span>
                    </div>

                    <ArrowUpRight
                      className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                        isActive
                          ? "translate-x-1 -translate-y-1 text-[#8ABDF0]"
                          : "text-[#6288B9] group-hover:translate-x-1 group-hover:-translate-y-1"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT PREMIUM DISPLAY */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[46px] bg-[#0D2444] p-7 shadow-[0_34px_110px_rgba(13,36,68,0.25)] sm:p-9 lg:p-11"
          >
            <div className="absolute right-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#8ABDF0]/25 blur-3xl" />
            <div className="absolute bottom-[-180px] left-[-160px] h-[360px] w-[360px] rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10 flex h-full min-h-[520px] flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-5">
                  <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white backdrop-blur-xl">
                    Selected Strength
                  </span>

                  <span className="flex h-13 w-13 items-center justify-center rounded-full bg-white text-[#0D2444] shadow-[0_18px_55px_rgba(0,0,0,0.18)]">
                    <Sparkles className="h-5 w-5" />
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="mt-12"
                  >
                    <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#8ABDF0]">
                      Reason {String(activeIndex + 1).padStart(2, "0")}
                    </p>

                    <h3
                      className="mt-5 max-w-[720px] text-[42px] font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:text-[52px] lg:text-[64px]"
                      style={{
                        fontFamily:
                          'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                      }}
                    >
                      {reasons[activeIndex].title}
                    </h3>

                    <p className="mt-7 max-w-[680px] text-[16px] font-medium leading-[1.9] text-white/74 md:text-[18px]">
                      {reasons[activeIndex].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-12 rounded-[30px] border border-white/12 bg-white/[0.08] p-5 backdrop-blur-xl">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[520px] text-[13px] font-medium leading-[1.8] text-white/68">
                    From recommendation to on-ground delivery, every celebrity
                    engagement is handled with structure, discretion and premium
                    execution.
                  </p>

                  <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#8ABDF0]">
                    DTS Celebrity Management
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}