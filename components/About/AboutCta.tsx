"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden py-[60px] bg-[#8abdf0]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#F8FAFC]" />

      {/* GLOW */}
      <div className="absolute top-[-180px] left-[15%] w-[520px] h-[520px] rounded-full bg-[#6288B9]/15 blur-3xl" />

      <div className="absolute bottom-[-220px] right-[10%] w-[520px] h-[520px] rounded-full bg-[#A4B8D2]/20 blur-3xl" />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)]
          [background-size:90px_90px]
        "
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 text-center">
        {/* LABEL */}
       <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="inline-flex mb-8"
>
  <div
    className="
      px-6
      py-3
      rounded-full
      border
      border-[#0D2444]/10
      bg-gradient-to-r
      from-[#0D2444]
      via-[#16365F]
      to-[#1F4B7A]
      backdrop-blur-xl
      shadow-[0_10px_40px_rgba(13,36,68,0.25)]
    "
  >
    <span
      className="
        text-[12px]
        uppercase
        tracking-[0.22em]
        font-semibold
        text-white
      "
    >
      Let’s Build Something Iconic
    </span>
  </div>
</motion.div>
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="
            text-[40px]
            md:text-[58px]
            leading-[1.1]
            tracking-[-3px]
            font-black
          "
          style={{
            fontFamily:
              'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
          }}
        >
          <span className="text-[#0F172A]">
            Create A Brand
          </span>

          <br />

          <span
            className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-[#0D2444]
              via-[#6288B9]
              to-[#A4B8D2]
            "
          >
            People Remember
          </span>
        </motion.h2>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
          }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-10
            max-w-[760px]
            text-[17px]
            md:text-[19px]
            leading-[2]
            text-slate-500
          "
        >
          We partner with ambitious brands looking to build premium
          digital presence, timeless positioning and meaningful
          long-term growth through strategy, storytelling and refined
          creative execution.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="
            flex
            flex-wrap
            justify-center
            items-center
            gap-5
            mt-14
          "
        >
          <Link href="/contact">
            <button className="primary-btn flex items-center gap-2">
              Start Project
              <ArrowRight size={18} />
            </button>
          </Link>

          <Link href="/projects">
            <button className="secondary-btn">
              View Work
            </button>
          </Link>
        </motion.div>

        
              </div>
    </section>
  );
}
        
          
 