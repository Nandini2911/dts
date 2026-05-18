"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function AboutStudio() {
  return (
    <section className="relative overflow-hidden bg-[#F6F7FB] py-20">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(98,136,185,0.12),transparent_30%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,33,61,0.08),transparent_28%)]" />

      {/* LIGHT GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(to_right,#0f172a_1px,transparent_1px)]
          [background-size:100px_100px]
        "
      />

      <div className="relative z-10 max-w-[1380px] mx-auto px-6">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-end">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
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
                border
                border-slate-200
                bg-white/90
                backdrop-blur-xl
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
                About Double Trouble Studio
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
                max-w-[900px]
              "
              style={{
                fontFamily:
                  "New York, ui-serif, Georgia, serif",
              }}
            >
              We Build
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
                Modern Brands
              </span>
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p
              className="
                text-[18px]
                leading-[36px]
                text-slate-600
                max-w-[420px]
              "
            >
              Double Trouble Studio is a Mumbai-based branding and digital marketing agency helping hospitality, luxury, lifestyle and event brands build stronger online presence through strategy, design and storytelling.
            </p>
          </motion.div>
        </div>

        {/* MAIN EDITORIAL SECTION */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 mt-24">
          {/* LEFT SIDEBAR */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* CARD */}
            <div
              className="
                rounded-[36px]
                bg-[#10213D]
                p-8
                text-white
                min-h-[300px]
                flex
                flex-col
                justify-between
                shadow-[0_20px_60px_rgba(16,33,61,0.12)]
              "
            >
              <div>
                <p className="text-[11px] uppercase tracking-[2px] text-white/50">
                  Creative Direction
                </p>

                <h3
                  className="
                    mt-5
                    text-[40px]
                    leading-[1]
                    tracking-[-2px]
                    font-bold
                  "
                  style={{
                    fontFamily:
                      "New York, ui-serif, Georgia, serif",
                  }}
                >
                  Strategy &
                  <span className="block text-[#BFD1E8]">
                    Emotion
                  </span>
                </h3>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm">
                 Strategic Creative Agency
                </span>

                <div
                  className="
                    w-[56px]
                    h-[56px]
                    rounded-full
                    bg-white/10
                    backdrop-blur-xl
                    flex
                    items-center
                    justify-center
                  "
                >
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* SMALL CARD */}
            <div
              className="
                rounded-[32px]
                bg-white
                border
                border-slate-100
                p-7
                shadow-[0_10px_40px_rgba(15,23,42,0.04)]
              "
            >
              <p className="text-[11px] uppercase tracking-[2px] text-slate-400">
                Philosophy
              </p>

              <p className="mt-4 text-[15px] leading-8 text-slate-500">
                We believe growth-driven brands are built through
                clarity, timeless aesthetics and emotional
                storytelling.
              </p>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden
              rounded-[42px]
              bg-white
              border
              border-slate-100
              p-10
              shadow-[0_20px_70px_rgba(15,23,42,0.05)]
            "
          >
            {/* BACKGROUND SHAPE */}
            <div className="absolute top-[-120px] right-[-80px] w-[260px] h-[260px] rounded-full bg-[#6288B9]/10 blur-3xl" />

            {/* TOP */}
            <div className="relative z-10 flex items-start justify-between gap-10">
              <div>
                <p className="text-[11px] uppercase tracking-[2px] text-slate-400">
                  What We Do
                </p>

                <h3
                  className="
                    mt-4
                    text-[52px]
                    leading-[0.95]
                    tracking-[-3px]
                    font-bold
                    text-[#10213D]
                    max-w-[520px]
                  "
                  style={{
                    fontFamily:
                      "New York, ui-serif, Georgia, serif",
                  }}
                >
                  Designing
                  <span className="block text-[#6288B9]">
                    Cultural Presence
                  </span>
                </h3>
              </div>

              <div className="hidden md:block text-right">
                <h4 className="text-[52px] font-bold text-[#10213D]">
                  08
                </h4>

                <p className="text-sm text-slate-400">
                  Years Experience
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="grid md:grid-cols-2 gap-10 mt-14">
              <p
                className="
                  text-[16px]
                  leading-[32px]
                  text-slate-600
                "
              >
                We create impactful visual systems,
                elevated digital experiences and modern
                storytelling designed for ambitious
                lifestyle and luxury brands.
              </p>

              <p
                className="
                  text-[16px]
                  leading-[32px]
                  text-slate-500
                "
              >
                Every interaction is intentionally crafted
                to feel timeless, refined and emotionally
                connected across every brand touchpoint.
              </p>
            </div>

            {/* SERVICES */}
            <div className="grid md:grid-cols-3 gap-5 mt-14">
              {[
                "Luxury Websites",
                "Brand Identity",
                "Creative Campaigns",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    rounded-[26px]
                    bg-[#F8FAFC]
                    border
                    border-slate-100
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  <div
                    className="
                      w-[48px]
                      h-[48px]
                      rounded-2xl
                      bg-white
                      flex
                      items-center
                      justify-center
                      shadow-[0_8px_20px_rgba(15,23,42,0.05)]
                    "
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#6288B9]" />
                  </div>

                  <h4 className="mt-5 text-[17px] font-semibold text-[#10213D]">
                    {item}
                  </h4>

                  <p className="mt-2 text-[14px] leading-7 text-slate-500">
                high-performance digital experiences with modern
                    visual direction.
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}