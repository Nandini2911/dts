"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  Layers3,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Layers3,
    title: "Structured Creativity",
    desc: "Clean systems, premium visuals and intentional execution for modern brands.",
  },
  {
    icon: Globe,
    title: "Digital Presence",
    desc: "Elegant experiences crafted to feel premium across every platform.",
  },
];

export default function PremiumSection() {
  return (
  <section className="relative overflow-hidden py-24">

  {/* BG IMAGE */}
  <div className="absolute inset-0">
    <img
      src="/promis.png"
      alt=""
      className="
        w-full
        h-full
      
     
        scale-105
      "
    />
  </div>


  {/* YOUR CONTENT */}



      
     

      {/* FLOAT BLUR */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-0 left-0 w-[320px] h-[320px] bg-[#6288B9]/10 blur-[100px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        {/* TOP */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              glass
              bg-white/60
              mb-6
            "
          >
            <Sparkles className="w-4 h-4 text-[#6288B9]" />

            <span className="text-[11px] tracking-[2px] uppercase text-[#0D2444] font-medium">
              Premium Identity
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              text-4xl
              md:text-6xl
              font-semibold
              tracking-[-2px]
              leading-[1]
              text-[#0D2444]
            
            "
              style={{
              fontFamily:
                "New York, ui-serif, Georgia, serif",
            }}
          >
            Beautiful brands

            <span className="block mt-2 bg-gradient-to-r from-[#0D2444] via-[#6288B9] to-[#9FC1E9] bg-clip-text text-transparent">
              built with clarity
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="
              mt-5
              text-[15px]
              leading-7
              text-slate-500
            "
          >
            Minimal aesthetics, refined interactions and
            premium execution designed to elevate modern
            digital brands.
          </motion.p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-5 mt-16">
          {/* BIG CARD */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden
              rounded-[30px]
              glass
              bg-white/65
              border border-white/50
              p-7
              md:p-8
            "
          >
            {/* GRADIENT */}
            <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-[#6288B9]/10 blur-[80px]" />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0D2444] to-[#6288B9] flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>

                <div className="px-3 py-1 rounded-full bg-[#EDF4FC] text-[#0D2444] text-[11px] font-medium tracking-wide">
                  DTS WORLD
                </div>
              </div>

              <h3
                className="
                  mt-8
                  text-3xl
                  md:text-[42px]
                  leading-[1]
                  tracking-[-2px]
                  text-[#0F172A]
                  font-semibold
                  font-[family:var(--font-sora)]
                "
              >
                Elegant design

                <span className="block mt-2 text-[#6288B9]">
                  with strategic depth
                </span>
              </h3>

              <p className="mt-5 text-[14px] leading-7 text-slate-500 max-w-lg">
                Every interaction is designed to feel
                modern, premium and intentional — from
                visuals to storytelling and execution.
              </p>

              {/* MINI FEATURES */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {features.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -4 }}
                      className="
                        rounded-2xl
                        border
                        border-white/60
                        bg-white/70
                        p-5
                        backdrop-blur-xl
                      "
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#EDF4FC] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#0D2444]" />
                      </div>

                      <h4 className="mt-4 text-[16px] font-semibold text-[#0F172A]">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-[13px] leading-6 text-slate-500">
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* SIDE STACK */}
          <div className="flex flex-col gap-5">
            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="
                relative
                overflow-hidden
                rounded-[28px]
                glass
                bg-gradient-to-br
                from-[#0D2444]
                to-[#27476E]
                p-6
                text-white
                min-h-[220px]
              "
            >
              <div className="absolute -top-10 -right-10 w-[180px] h-[180px] rounded-full bg-white/10 blur-3xl" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-xl">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[2px] text-white/60">
                    Performance
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold leading-tight font-[family:var(--font-sora)]">
                    Crafted to feel premium everywhere
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#D9E5F2]
                bg-white/75
                backdrop-blur-xl
                p-6
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[2px] text-slate-400">
                    Experience
                  </p>

                  <h3 className="mt-2 text-2xl leading-tight font-semibold text-[#0F172A] font-[family:var(--font-sora)]">
                    Clean visuals

                    <span className="block text-[#6288B9]">
                      smooth motion
                    </span>
                  </h3>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0D2444] to-[#6288B9]" />
              </div>

              <div className="mt-8 flex items-center gap-3">
                <div className="h-2 flex-1 rounded-full bg-[#E9EEF5] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "78%" }}
                    transition={{
                      duration: 1.2,
                      delay: 0.3,
                    }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-gradient-to-r from-[#0D2444] to-[#6288B9]"
                  />
                </div>

                <span className="text-sm font-medium text-[#0D2444]">
                  78%
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}