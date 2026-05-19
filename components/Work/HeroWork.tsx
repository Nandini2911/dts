"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroWork() {
  return (
    <section className="relative overflow-hidden bg-[#f7fafc] pt-[170px] pb-[120px]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f7fafc] to-[#eef3f9]" />

        {/* Glow */}
        <div className="absolute top-[-120px] left-[10%] w-[380px] h-[380px] rounded-full bg-[#6288B9]/10 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[5%] w-[320px] h-[320px] rounded-full bg-[#0D2444]/5 blur-3xl" />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      <div className="relative z-10 max-w-[1380px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_520px]">
          {/* LEFT SIDE */}
          <div>
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#6288B9]/20
                bg-white/70
                backdrop-blur-xl
                px-5
                py-2.5
                shadow-[0_8px_30px_rgba(15,23,42,0.05)]
              "
            >
              <Sparkles className="w-4 h-4 text-[#456A9E]" />

              <span
                className="
                  text-[11px]
                  sm:text-[12px]
                  font-semibold
                  tracking-[2px]
                  uppercase
                  text-[#456A9E]
                "
              >
                Selected Creative Projects
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="
                mt-7
                text-[40px]
                leading-[1.05]
               
                md:text-[58px]
             
                font-bold
                tracking-[-2px]
                text-[#0D2444]
              "
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              Luxury Branding,
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-[#0D2444]
                  via-[#456A9E]
                  to-[#6288B9]
                  bg-clip-text
                  text-transparent
                "
              >
                Website Design &
              </span>

              <br />
              Digital Marketing Projects
            </motion.h1>

            {/* PARAGRAPH */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="
                mt-7
                max-w-[720px]
                text-[16px]
                leading-[1.9]
                sm:text-[18px]
                text-[#5B6472]
              "
            >
              Explore premium branding, website design,
              PR campaigns, AI content and digital marketing
              projects crafted for hospitality, luxury,
              restaurant and lifestyle brands across India.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              {/* PRIMARY */}
              <Link href="/contact">
                <button
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[18px]
                    px-7
                    py-4
                    text-white
                    font-semibold
                    text-[15px]
                    bg-gradient-to-r
                    from-[#0D2444]
                    via-[#1D3A66]
                    to-[#6288B9]
                    shadow-[0_12px_35px_rgba(13,36,68,0.18)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                  "
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Projects

                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>

                  <div
                    className="
                      absolute
                      inset-0
                      translate-y-full
                      bg-gradient-to-r
                      from-[#6288B9]
                      to-[#A4B8D2]
                      transition-transform
                      duration-500
                      group-hover:translate-y-0
                    "
                  />
                </button>
              </Link>

              {/* SECONDARY */}
              <Link href="/contact">
                <button
                  className="
                    rounded-[18px]
                    border
                    border-[#0D2444]/10
                    bg-white/70
                    backdrop-blur-xl
                    px-7
                    py-4
                    text-[#0D2444]
                    font-semibold
                    text-[15px]
                    transition-all
                    duration-300
                    hover:bg-white
                  "
                >
                  Start Your Brand
                </button>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div
              className="
                relative
                h-[560px]
                rounded-[36px]
                border
                border-white/10
                bg-[#0B1220]
                overflow-hidden
                shadow-[0_30px_90px_rgba(0,0,0,0.22)]
              "
            >
              {/* BG */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#0B1220]
                  via-[#111827]
                  to-[#1D3A66]
                "
              />

              {/* GRID */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.05]
                  [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
                  [background-size:50px_50px]
                "
              />

              {/* GLOW */}
              <motion.div
                animate={{
                  x: [0, 40, 0],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  top-[30px]
                  right-[30px]
                  w-[220px]
                  h-[220px]
                  rounded-full
                  bg-[#6288B9]/20
                  blur-3xl
                "
              />

              {/* MAIN PROJECT CARD */}
              <motion.div
                animate={{
                  y: [0, -14, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  top-[45px]
                  left-[35px]
                  w-[300px]
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/10
                  backdrop-blur-xl
                  overflow-hidden
                "
              >
                {/* IMAGE */}
                <div className="relative h-[180px] overflow-hidden">
                  <img
                    src="/abouthero.jpg"
                    alt="Luxury Project"
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* TAG */}
                  <div
                    className="
                      absolute
                      top-4
                      left-4
                      rounded-full
                      border
                      border-white/20
                      bg-black/30
                      backdrop-blur-md
                      px-3
                      py-1
                      text-[11px]
                      font-medium
                      tracking-[2px]
                      uppercase
                      text-white
                    "
                  >
                    Hospitality
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className="
                          text-[22px]
                          leading-tight
                          font-bold
                          text-white
                        "
                        style={{
                          fontFamily:
                            'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                        }}
                      >
                        The Royal Lounge
                      </h3>

                      <p className="mt-2 text-[14px] leading-[1.7] text-white/65">
                        Branding, website design and luxury
                        campaign crafted for a modern
                        hospitality experience.
                      </p>
                    </div>

                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        w-11
                        h-11
                        rounded-full
                        bg-white/10
                        border
                        border-white/10
                        text-white
                      "
                    >
                      ↗
                    </div>
                  </div>

                  {/* TAGS */}
                  <div className="mt-5 flex items-center gap-3 flex-wrap">
                    <div
                      className="
                        rounded-full
                        bg-white/10
                        px-4
                        py-2
                        text-[12px]
                        text-white/80
                      "
                    >
                      Luxury Branding
                    </div>

                    <div
                      className="
                        rounded-full
                        bg-white/10
                        px-4
                        py-2
                        text-[12px]
                        text-white/80
                      "
                    >
                      Web Design
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* SMALL CARD */}
              <motion.div
                animate={{
                  y: [0, 16, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-[55px]
                  right-[35px]
                  w-[220px]
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/10
                  backdrop-blur-xl
                  p-5
                "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white text-[14px] font-semibold">
                      Campaign Reach
                    </p>

                    <span className="text-white/60 text-[12px]">
                      Digital Performance
                    </span>
                  </div>

                  <div
                    className="
                      w-10
                      h-10
                      rounded-full
                      bg-gradient-to-r
                      from-[#6288B9]
                      to-[#A4B8D2]
                    "
                  />
                </div>

                {/* GRAPH */}
                <div className="mt-5 flex items-end gap-2 h-[80px]">
                  <motion.div
                    animate={{ height: [30, 65, 40] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="w-full rounded-full bg-white/20"
                  />

                  <motion.div
                    animate={{ height: [65, 35, 75] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="w-full rounded-full bg-[#6288B9]"
                  />

                  <motion.div
                    animate={{ height: [40, 80, 55] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                    }}
                    className="w-full rounded-full bg-white/30"
                  />

                  <motion.div
                    animate={{ height: [55, 45, 85] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                    }}
                    className="w-full rounded-full bg-[#456A9E]"
                  />
                </div>
              </motion.div>

              {/* TEXT */}
              <div className="absolute bottom-10 left-10">
                <p
                  className="
                    text-[13px]
                    uppercase
                    tracking-[4px]
                    text-white/40
                  "
                >
                  Featured Creative Work
                </p>

                <h3
                  className="
                    mt-3
                    text-[42px]
                    leading-none
                    font-bold
                    text-white
                  "
                  style={{
                    fontFamily:
                      'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                  }}
                >
                  Modern
                  <br />
                  Luxury
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}