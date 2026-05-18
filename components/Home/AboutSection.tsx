"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Globe,
  Layers3,
} from "lucide-react";

export default function AboutStudio() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(98,136,185,0.16),transparent_28%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,33,61,0.08),transparent_30%)]" />

      {/* BLUR ORBS */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-[#6288B9]/15 blur-3xl" />

      <div className="absolute bottom-[-140px] right-[-120px] w-[340px] h-[340px] rounded-full bg-[#10213D]/10 blur-3xl" />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(to_right,#0f172a_1px,transparent_1px)]
          [background-size:85px_85px]
        "
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_0.95fr] gap-20 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* LABEL */}
            <div
              className="
                inline-flex
                items-center
                gap-3
                px-5
                py-2
                rounded-full
                bg-white/80
                border
                border-white
                backdrop-blur-xl
                shadow-[0_8px_30px_rgba(15,23,42,0.04)]
                mb-8
              "
            >
              <Sparkles className="w-4 h-4 text-[#6288B9]" />

              <span
                className="
                  text-[11px]
                  uppercase
                  tracking-[2px]
                  font-medium
                  text-[#31507A]
                "
              >
                strategic Creative Studio
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                text-[40px]
                md:text-[58px]
                leading-[1]
                tracking-[-3px]
                font-bold
                text-[#10213D]
                   max-w-[580px]
              "
              style={{
                fontFamily:
                  "New York, ui-serif, Georgia, serif",
              }}
            >
We Build Brands  

              <span
                className="
                  block
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-[#31507A]
                  via-[#6288B9]
                  to-[#A8BEDB]
                "
              >
That Look Premium 
              </span>

              And Perform Better
            </h2>

            {/* TEXT */}
            <div className="mt-8 max-w-[560px] space-y-5">
              <p
                className="
                  text-[16px]
                  leading-[32px]
                  text-slate-600
                "
              >
                Double Trouble Studio is a Mumbai-based branding and digital marketing agency helping hospitality, luxury, lifestyle and event brands build stronger online presence through strategy, design and storytelling.

                
              </p>

              <p
                className="
                  text-[16px]
                  leading-[32px]
                  text-slate-500
                "
              >
                Every detail is designed to feel timeless,
                emotional and culturally relevant across
                digital experiences and brand touchpoints.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* MAIN CARD */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-white
                bg-white/80
                backdrop-blur-2xl
                p-8
                shadow-[0_25px_80px_rgba(15,23,42,0.08)]
              "
            >
              {/* TOP GRADIENT */}
              <div className="absolute top-0 left-0 w-full h-[180px] bg-gradient-to-br from-[#10213D] via-[#31507A] to-[#A8BEDB]" />

              {/* FLOATING CIRCLE */}
              <div className="absolute top-[120px] right-[-40px] w-[140px] h-[140px] rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl" />

              <div className="relative z-10">
                {/* HERO PANEL */}
                <div className="rounded-[30px] p-8 bg-white shadow-[0_15px_50px_rgba(15,23,42,0.06)]">
                  <p className="text-[11px] uppercase tracking-[2px] text-slate-400">
                    Creative Philosophy
                  </p>

                  <h3
                    className="
                      mt-4
                      text-[36px]
                      leading-[1]
                      tracking-[-2px]
                      font-bold
                      text-[#10213D]
                    "
                    style={{
                      fontFamily:
                        "New York, ui-serif, Georgia, serif",
                    }}
                  >
                    Strategy Meets
                    <span className="block text-[#6288B9]">
                      Visual Emotion
                    </span>
                  </h3>

                  <p className="mt-5 text-[15px] leading-8 text-slate-500">
                    We merge design, storytelling and
                    culture into experiences that feel
                    elevated and unforgettable.
                  </p>
                </div>

                {/* FEATURE CARDS */}
                <div className="grid grid-cols-2 gap-5 mt-6">
                  {/* CARD */}
                  <div
                    className="
                      rounded-[28px]
                      bg-[#F8FAFC]
                      border
                      border-slate-100
                      p-6
                    "
                  >
                    <div
                      className="
                        w-[52px]
                        h-[52px]
                        rounded-2xl
                        bg-white
                        shadow-[0_10px_30px_rgba(15,23,42,0.05)]
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Globe className="w-5 h-5 text-[#6288B9]" />
                    </div>

                    <h4 className="mt-5 text-[16px] font-semibold text-[#10213D]">
                      Global Presence
                    </h4>

                    <p className="mt-2 text-[14px] leading-7 text-slate-500">
                     growth-driven experiences designed for
                      modern audiences.
                    </p>
                  </div>

                  {/* CARD */}
                  <div
                    className="
                      rounded-[28px]
                      bg-[#10213D]
                      p-6
                      text-white
                    "
                  >
                    <div
                      className="
                        w-[52px]
                        h-[52px]
                        rounded-2xl
                        bg-white/10
                        backdrop-blur-xl
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Layers3 className="w-5 h-5 text-white" />
                    </div>

                    <h4 className="mt-5 text-[16px] font-semibold">
                      Brand Systems
                    </h4>

                    <p className="mt-2 text-[14px] leading-7 text-white/60">
                      Timeless digital identity with
                      clarity and consistency.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING TAG */}
            <div
              className="
                hidden
                md:flex
                absolute
                -left-10
                top-1/2
                -translate-y-1/2
                px-5
                py-4
                rounded-[22px]
                bg-white
                border
                border-slate-100
                shadow-[0_15px_40px_rgba(15,23,42,0.06)]
                items-center
                gap-4
              "
            >
              <div className="w-3 h-3 rounded-full bg-[#6288B9]" />

              <div>
                <h5 className="text-[15px] font-semibold text-[#10213D]">
                  Luxury Positioning
                </h5>

                <p className="text-xs text-slate-500 mt-1">
                  Modern Creative Agency
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}