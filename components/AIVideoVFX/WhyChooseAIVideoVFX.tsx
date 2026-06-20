"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const reasons = [
  {
    title: "Creative Direction First",
    text: "Every video starts with the campaign idea, brand mood, audience, message and visual direction before AI or VFX work begins.",
  },
  {
    title: "Premium Visual Quality",
    text: "We focus on refined styling, clean motion, cinematic pacing, polished edits and brand-aligned visual treatment.",
  },
  {
    title: "AI + CGI + VFX Workflow",
    text: "Our production approach combines AI visuals, CGI-style concepts, VFX polish, motion graphics and professional post-production.",
  },
  {
    title: "Campaign-Ready Outputs",
    text: "Videos are adapted for reels, ads, websites, YouTube, launch campaigns, event screens and social media formats.",
  },
  {
    title: "Fast Execution",
    text: "AI-assisted workflows help brands create high-quality visual campaigns faster without depending on heavy traditional production every time.",
  },
  {
    title: "End-to-End Support",
    text: "From concept, script and prompts to editing, sound, VFX, subtitles and final exports, the full production flow is managed.",
  },
];

const pillars = ["Strategy", "AI Visuals", "CGI", "VFX", "Editing", "Delivery"];

export default function WhyChooseAIVideoVFX() {
  return (
    <section
      className="relative isolate overflow-hidden bg-gradient-to-br from-white via-[#F7FAFF] to-[#EAF3FF] px-4 py-24 text-[#0D2444] sm:px-6 lg:px-8"
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
    >
      {/* Premium light background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(98,136,185,0.18),transparent_32%),radial-gradient(circle_at_88%_18%,rgba(49,94,145,0.10),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(13,36,68,0.08),transparent_42%)]" />

        <motion.div
          animate={{
            x: [0, 34, -22, 0],
            y: [0, -24, 16, 0],
            scale: [1, 1.06, 0.98, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-56 top-[-200px] h-[620px] w-[620px] rounded-full bg-[#EAF3FF] blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 22, 0],
            y: [0, 24, -16, 0],
            scale: [1, 0.96, 1.08, 1],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-240px] bottom-[-220px] h-[660px] w-[660px] rounded-full bg-[#DDEBFA]/70 blur-3xl"
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6288B9]/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
          className="mx-auto max-w-5xl text-center"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mx-auto mb-6 inline-flex rounded-full border border-[#6288B9]/22 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl"
          >
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#315E91] sm:text-xs">
              Why Choose DTS
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-[38px] font-black leading-[0.98] tracking-[-0.06em] text-[#0D2444] sm:text-[56px] md:text-[78px]"
          >
            Why choose Double Trouble Studio
            <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              for AI Video & VFX.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-[#49617F] sm:text-base"
          >
            We create AI videos, CGI ads and VFX-led campaign visuals with a
            balance of creative strategy, premium styling and platform-ready
            execution.
          </motion.p>
        </motion.div>

        {/* Premium brand system layout */}
        <div className="mt-16 overflow-hidden rounded-[3rem] border border-[#6288B9]/20 bg-white/78 p-4 shadow-2xl shadow-[#0D2444]/10 backdrop-blur-xl">
          <div className="grid gap-0 overflow-hidden rounded-[2.55rem] lg:grid-cols-[0.4fr_0.6fr]">
            {/* Left premium visual */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative overflow-hidden bg-[#0D2444] p-8 sm:p-10"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(191,234,255,0.25),transparent_30%),radial-gradient(circle_at_82%_82%,rgba(98,136,185,0.22),transparent_34%)]" />

              <motion.div
                animate={{ x: ["-40%", "130%"] }}
                transition={{
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 h-full w-28 rotate-12 bg-gradient-to-r from-transparent via-white/18 to-transparent blur-md"
              />

              <div className="relative z-10 flex min-h-[650px] flex-col justify-between">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#BFEAFF]">
                    DTS Creative System
                  </p>

                  <h3 className="mt-5 text-[48px] font-black leading-[0.9] tracking-[-0.07em] text-white sm:text-[70px]">
                    Idea.
                    <span className="block text-white/45">Image.</span>
                    <span className="block bg-gradient-to-r from-white via-[#BFEAFF] to-[#67B7E8] bg-clip-text text-transparent">
                      Impact.
                    </span>
                  </h3>

                  <p className="mt-6 max-w-md text-sm leading-7 text-white/62 sm:text-base">
                    We do not create AI videos only for effects. We create them
                    as campaign assets that help brands look sharper, launch
                    faster and communicate better.
                  </p>
                </div>

                <div>
                  <div className="grid grid-cols-2 gap-4 border-y border-white/15 py-6">
                    {pillars.slice(0, 4).map((item, index) => (
                      <motion.div
                        key={item}
                        animate={{
                          y: [0, index % 2 === 0 ? -6 : 6, 0],
                        }}
                        transition={{
                          duration: 4 + index * 0.25,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <p className="text-[28px] font-black leading-none tracking-[-0.05em] text-white">
                          {item}
                        </p>

                        <p className="mt-1 text-[9px] font-black uppercase tracking-[0.16em] text-[#BFEAFF]/70">
                          Layer
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-[2rem] border border-white/15 bg-white/10 p-5">
                    <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#BFEAFF]">
                      Best For
                    </p>

                    <p className="mt-3 text-2xl font-black leading-tight tracking-[-0.04em] text-white">
                      Brands that need premium, modern and scroll-stopping video
                      content.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right premium reasons */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ staggerChildren: 0.08 }}
              className="bg-white p-5 sm:p-7"
            >
              <div className="grid gap-4">
                {reasons.map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    className="group relative overflow-hidden rounded-[2.1rem] border border-[#6288B9]/18 bg-[#F7FAFF] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#0D2444]/25 hover:bg-[#0D2444] hover:shadow-2xl hover:shadow-[#0D2444]/12"
                  >
                    <div className="grid gap-5 md:grid-cols-[0.16fr_0.34fr_0.5fr] md:items-start">
                      <div>
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white transition-all duration-500 group-hover:bg-white/10">
                          <p className="text-xs font-black text-[#315E91] transition-colors duration-500 group-hover:text-[#BFEAFF]">
                            {String(index + 1).padStart(2, "0")}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#6288B9] transition-colors duration-500 group-hover:text-[#BFEAFF]">
                          Advantage
                        </p>

                        <h3 className="mt-3 text-[28px] font-black leading-[1] tracking-[-0.055em] text-[#0D2444] transition-colors duration-500 group-hover:text-white sm:text-[34px]">
                          {item.title}
                        </h3>
                      </div>

                      <div>
                        <p className="text-sm leading-7 text-[#49617F] transition-colors duration-500 group-hover:text-white/70 sm:text-base">
                          {item.text}
                        </p>

                        <div className="mt-5 h-px w-14 bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] transition-all duration-500 group-hover:w-32 group-hover:from-white group-hover:via-[#BFEAFF] group-hover:to-[#67B7E8]" />
                      </div>
                    </div>

                    <span className="pointer-events-none absolute -right-3 -top-5 text-[92px] font-black leading-none tracking-[-0.08em] text-[#0D2444]/[0.035] transition-colors duration-500 group-hover:text-white/[0.06]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

    
      </div>
    </section>
  );
}