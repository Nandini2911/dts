"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutStudio() {
  return (
    <section className="relative overflow-hidden py-32 bg-[#F7FAFD]">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-[-120px] w-[500px] h-[500px] bg-[#6288B9]/15 blur-3xl rounded-full" />

      <div className="absolute bottom-[-220px] right-[-120px] w-[520px] h-[520px] bg-[#10213D]/10 blur-3xl rounded-full" />

      {/* GRID LIGHT */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(to_right,#0f172a_1px,transparent_1px)]
          [background-size:90px_90px]
        "
      />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* LABEL */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-10 h-[1px] bg-[#31507A]" />

              <span
                className="
                  uppercase
                  tracking-[3px]
                  text-[12px]
                  font-semibold
                  text-[#31507A]
                "
              >
                About Double Trouble Studio
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                text-[42px]
                md:text-[68px]
                leading-[1]
                tracking-[-3px]
                font-bold
                max-w-[720px]
              "
              style={{
                fontFamily:
                  "New York, ui-serif, Georgia, serif",
              }}
            >
              <span className="text-[#10213D]">
                We Build
              </span>

              <span
                className="
                  ml-3
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-[#31507A]
                  via-[#6288B9]
                  to-[#A8BEDB]
                "
              >
                Cultural Brands
              </span>

              <br />

              <span className="text-[#10213D]">
                With Modern Presence
              </span>
            </h2>

            {/* DESCRIPTION */}
            <div className="mt-10 max-w-[620px] space-y-7">
              <p
                className="
                  text-[19px]
                  leading-[36px]
                  text-slate-700
                "
              >
                We create elevated digital identities for
                luxury, hospitality, beauty and lifestyle
                brands through strategy, storytelling,
                creative direction and premium experiences.
              </p>

              <p
                className="
                  text-[18px]
                  leading-[34px]
                  text-slate-500
                "
              >
                From websites and campaigns to celebrity
                collaborations, PR and immersive events —
                every touchpoint is designed to feel
                intentional, modern and culturally relevant.
              </p>
            </div>

            {/* CTA */}
            <button
              className="
                group
                mt-12
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  h-[58px]
                  px-8
                  rounded-full
                  bg-[#10213D]
                  text-white
                  text-[15px]
                  font-semibold
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  group-hover:bg-[#1B355B]
                  shadow-[0_12px_30px_rgba(16,33,61,0.15)]
                "
              >
                Explore Studio
              </span>

              <div
                className="
                  w-[58px]
                  h-[58px]
                  rounded-full
                  bg-white
                  border
                  border-[#10213D]/10
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <ArrowRight className="w-5 h-5 text-[#10213D]" />
              </div>
            </button>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* BIG TEXT */}
            <div
              className="
                text-[220px]
                leading-none
                font-bold
                tracking-[-14px]
                text-transparent
                bg-clip-text
                bg-gradient-to-b
                from-[#31507A]/20
                to-[#10213D]/5
                select-none
              "
            >
              DTS
            </div>

            {/* FLOATING GLASS CARD */}
            <div
              className="
                absolute
                backdrop-blur-2xl
                bg-white/65
                border
                border-white/50
                rounded-[30px]
                p-10
                w-[340px]
                shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              "
            >
              <div className="space-y-8">
                <div>
                  <h4 className="text-[15px] font-semibold text-[#10213D]">
                    Strategy
                  </h4>

                  <p className="mt-2 text-[14px] leading-7 text-slate-500">
                    Clear positioning and meaningful brand
                    direction.
                  </p>
                </div>

                <div>
                  <h4 className="text-[15px] font-semibold text-[#10213D]">
                    Digital
                  </h4>

                  <p className="mt-2 text-[14px] leading-7 text-slate-500">
                    Modern websites and elevated digital
                    experiences.
                  </p>
                </div>

                <div>
                  <h4 className="text-[15px] font-semibold text-[#10213D]">
                    Culture
                  </h4>

                  <p className="mt-2 text-[14px] leading-7 text-slate-500">
                    Campaigns designed to feel aspirational
                    and relevant.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}