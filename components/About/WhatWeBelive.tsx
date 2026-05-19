"use client";

import { motion } from "framer-motion";

export default function WhatWeBelieve() {
  return (
    <section className="relative overflow-hidden py-[90px]">
      {/* BG IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero_img.png')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#0B1220]/45" />

      {/* LIGHT */}
      <div className="absolute top-[-180px] left-[-100px] w-[420px] h-[420px] rounded-full bg-[#6288B9]/20 blur-3xl" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-5">
        {/* TOP */}
        <div className="max-w-[760px]">
          {/* LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex"
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
                  text-[11px]
                  uppercase
                  tracking-[0.22em]
                  font-semibold
                  text-white
                "
              >
                What We Believe
              </span>
            </div>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="
              mt-7
              text-[34px]
              sm:text-[40px]
              md:text-[58px]
              leading-[1]
              tracking-[-3px]
              font-black
            "
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            <span className="text-white">
              Building brands
            </span>

            <br />

            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-white
                via-[#C7D7EC]
                to-[#8FB1DA]
              "
            >
              with clarity,
            </span>

            <span className="text-white">
              {" "}
              emotion &
            </span>

            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-white
                via-[#C7D7EC]
                to-[#8FB1DA]
              "
            >
              {" "}
              intention
            </span>
          </motion.h2>
        </div>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="group relative mt-14"
        >
          {/* OUTER GLOW */}
          <div
            className="
              absolute
              inset-0
              rounded-[34px]
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-700
              bg-gradient-to-br
              from-[#6288B9]/15
              via-transparent
              to-[#A4B8D2]/15
              blur-2xl
            "
          />

          {/* MAIN CARD */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[34px]
              border
              border-white/20
              bg-white/10
              backdrop-blur-[18px]
              p-7
              md:p-10
              shadow-[0_10px_40px_rgba(0,0,0,0.12)]
            "
          >
            {/* OVERLAY */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-700
                bg-gradient-to-br
                from-white/5
                via-transparent
                to-[#A4B8D2]/10
              "
            />

            {/* LIGHT */}
            <div className="absolute top-[-80px] right-[-50px] w-[220px] h-[220px] rounded-full bg-[#6288B9]/20 blur-3xl" />

            <div className="relative z-10">
              {/* TOP */}
              <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
                {/* LEFT */}
                <div className="max-w-[720px]">
                  <p
                    className="
                      text-[20px]
                      md:text-[28px]
                      leading-[1.7]
                      tracking-[-1px]
                      text-white/80
                      font-medium
                    "
                    style={{
                      fontFamily:
                        'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                    }}
                  >
                    We believe modern brands are no longer built only
                    through advertising —
                    <span className="text-white font-black">
                      {" "}
                      they are built through perception, consistency
                      and emotional connection.
                    </span>
                  </p>

                  <p
                    className="
                      mt-7
                      text-[15px]
                      md:text-[16px]
                      leading-[2]
                      text-white/60
                      max-w-[680px]
                    "
                  >
                    At Double Trouble Studio, strategy, storytelling
                    and visual systems work together to create
                    experiences that feel refined, memorable and
                    culturally relevant across every platform.
                  </p>
                </div>

                {/* RIGHT BOX */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    w-[90px]
                    h-[90px]
                    rounded-[28px]
                    bg-gradient-to-br
                    from-[#0D2444]
                    via-[#6288B9]
                    to-[#A4B8D2]
                    flex
                    items-center
                    justify-center
                    shadow-[0_15px_40px_rgba(98,136,185,0.2)]
                  "
                >
                  <span
                    className="
                      text-white
                      text-[24px]
                      font-black
                      tracking-[-1px]
                    "
                    style={{
                      fontFamily:
                        'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                    }}
                  >
                    DTS
                  </span>
                </motion.div>
              </div>

              {/* LINE */}
              <div
                className="
                  mt-10
                  h-[1px]
                  w-full
                  bg-gradient-to-r
                  from-white/20
                  via-transparent
                  to-transparent
                "
              />

              {/* TAGS */}
              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "Strategic Clarity",
                  "Emotional Storytelling",
                  "Luxury Positioning",
                  "Modern Identity",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      px-4
                      py-2.5
                      rounded-full
                      border
                      border-white/10
                      bg-white/10
                      backdrop-blur-xl
                      text-[13px]
                      font-semibold
                      text-white
                      shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}