"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Layers3,
  LineChart,
} from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "Category Intelligence",
    desc: "Strong research, market mapping and audience behaviour before execution begins.",
  },
  {
    icon: Layers3,
    title: "Signature Identity",
    desc: "Sharper visuals and sharper communication designed to feel instantly recognisable.",
  },
  {
    icon: LineChart,
    title: "Long-Term Value",
    desc: "Systems designed for sustainable growth — not temporary attention.",
  },
];

export default function StudioDNA() {
  return (
    <section className="relative overflow-hidden py-20 bg-[#F7FAFC]">
      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(49,80,122,0.08),transparent_30%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        {/* TOP */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DCE5F0] bg-white mb-6">
            <Sparkles className="w-4 h-4 text-[#31507A]" />

            <span className="text-[10px] tracking-[2px] uppercase text-[#31507A] font-medium">
              The Double Trouble Studio DNA
            </span>
          </div>

          <h2
            className="
              text-[40px]
              md:text-[58px]
              leading-[1]
              tracking-[-3px]
              font-bold
              text-[#10213D]
            "
            style={{
              fontFamily:
                "New York, ui-serif, Georgia, serif",
            }}
          >
            Clarity
            <span className="text-[#6288B9]"> Over Chaos</span>
          </h2>

          <p className="mt-5 text-[15px] leading-[28px] text-slate-500 max-w-[650px]">
            We build brands with intention — where
            creativity comes with structure, research and
            premium execution.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  rounded-[28px]
                  border
                  border-[#E4EBF3]
                  bg-white/90
                  p-7
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  hover:shadow-[0_15px_40px_rgba(15,23,42,0.05)]
                "
              >
                {/* ICON */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-[#EEF4FA]
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                >
                  <Icon className="w-5 h-5 text-[#31507A]" />
                </div>

                <span className="text-[10px] uppercase tracking-[2px] text-slate-400">
                  Principle
                </span>

                <h3
                  className="
                    mt-3
                    text-[26px]
                    leading-[1.1]
                    tracking-[-1px]
                    font-bold
                    text-[#10213D]
                  "
                  style={{
                    fontFamily:
                      "New York, ui-serif, Georgia, serif",
                  }}
                >
                  {item.title}
                </h3>

                <p className="mt-4 text-[14px] leading-[26px] text-slate-500">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM BOX */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            mt-10
            rounded-[30px]
            bg-[#10213D]
            px-8
            py-10
          "
        >
          <p
            className="
              text-[26px]
              md:text-[38px]
              leading-[1.15]
              tracking-[-2px]
              font-bold
              text-white
              max-w-4xl
            "
            style={{
              fontFamily:
                "New York, ui-serif, Georgia, serif",
            }}
          >
            This isn’t just marketing.
            <span className="text-[#A8BEDB]">
              {" "}
              It’s brand architecture.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}