"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutStudio() {
  return (
    <section className="overflow-hidden">
      {/* OUTSIDE GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6288B9]/10 rounded-full blur-3xl" />

      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-[42px]
            border
            border-white/30
            bg-[linear-gradient(135deg,#F4F7FB_0%,#E7EEF8_20%,#C7D5E8_45%,#8CA4C5_72%,#314765_100%)]
            px-8
            md:px-16
            py-20
            shadow-[0_25px_90px_rgba(15,23,42,0.08)]
          "
        >
          {/* TOP LIGHT GLOW */}
          <div className="absolute top-[-120px] left-[15%] w-[420px] h-[420px] bg-white/30 rounded-full blur-3xl" />

          {/* SOFT DARK GLOW */}
          <div className="absolute bottom-[-180px] right-[-120px] w-[450px] h-[450px] bg-[#0D2444]/25 rounded-full blur-3xl" />

          {/* BLUE GLOW */}
          <div className="absolute top-[20%] right-[-100px] w-[320px] h-[320px] bg-[#6288B9]/15 rounded-full blur-3xl" />

          {/* LIGHT OVERLAY */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.10),transparent)] pointer-events-none" />

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* LABEL */}
            <div
              className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                border
                border-white/40
                bg-white/30
                backdrop-blur-xl
                text-[12px]
                uppercase
                tracking-[1.5px]
                font-medium
                text-slate-600
                mb-10
              "
            >
              About Double Trouble Studio
            </div>

            {/* HEADING */}
           <h2
  className="
    text-[56px]
    md:text-[88px]
    leading-[0.9]
    tracking-[-5px]
    font-bold
    max-w-[950px]
  "
  style={{
    fontFamily:
      'New York, ui-serif, Georgia, serif',
  }}
>
  <span className="text-[#10213D]">
    Elevating
  </span>

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
    Brands Through
  </span>

  <span className="text-white">
    Creative Direction
  </span>
</h2>

            {/* TEXT */}
            <div className="max-w-[860px] mt-14">
              <p
                className="
                  text-[20px]
                  leading-[38px]
                  text-slate-700
                "
              >
                We sit at the intersection of strategy,
                design and culture. A creative studio for
                lifestyle, luxury, beauty, hospitality and
                automotive brands creating premium digital
                experiences with clarity, elegance and
                meaningful storytelling.
              </p>

              <p
                className="
                  mt-8
                  text-[20px]
                  leading-[38px]
                  text-slate-600
                "
              >
                We help brands build reputation, scale
                communities and drive measurable growth
                across digital experiences, PR, websites,
                campaigns, events and celebrity
                collaborations designed for modern
                audiences.
              </p>
            </div>

            {/* CTA */}
            <button
              className="
                group
                mt-14
                h-[60px]
                px-9
                rounded-[18px]
                bg-[#0D2444]
                text-white
                text-[15px]
                font-semibold
                flex
                items-center
                gap-3
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#16345C]
                shadow-[0_12px_30px_rgba(13,36,68,0.16)]
              "
            >
              Explore

              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}