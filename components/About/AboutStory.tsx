"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Strategic Thinking",
    desc: "Every creative decision is backed by positioning, audience understanding and long-term brand direction.",
  },
  {
    title: "Premium Execution",
    desc: "From visuals to interactions, every detail is refined to feel elevated, modern and intentional.",
  },
  {
    title: "Cultural Relevance",
    desc: "We build brands that connect emotionally with modern audiences across digital platforms.",
  },
];

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-[70px]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#F8FAFC]" />

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

      {/* GLOW */}
      <div className="absolute top-[-200px] left-[-120px] w-[520px] h-[520px] rounded-full bg-[#6288B9]/20 blur-3xl" />

      <div className="absolute bottom-[-220px] right-[-100px] w-[520px] h-[520px] rounded-full bg-[#A4B8D2]/20 blur-3xl" />

      <div className="relative z-10 max-w-[1450px] mx-auto px-5">
        {/* TOP CONTENT */}
        <div className="max-w-[900px]">
          {/* LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
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
                  text-[12px]
                  uppercase
                  tracking-[0.24em]
                  font-semibold
                  text-white
                "
              >
                Our Philosophy
              </span>
            </div>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: true }}
            className="
              mt-8
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
              Clarity
            </span>

           

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
              Over Chaos
            </span>
          </motion.h2>

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="
              mt-5
              text-[17px]
              md:text-[18px]
              leading-[2]
              text-slate-500
              max-w-[760px]
            "
          >
            We believe modern brands are built through intentional
            design, strategic clarity and emotional storytelling —
            not noise, trends or temporary attention.
          </motion.p>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-3 gap-7 mt-15">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group relative"
            >
              {/* OUTER GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-[38px]
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-700
                  bg-gradient-to-br
                  from-[#6288B9]/30
                  via-transparent
                  to-[#A4B8D2]/30
                  blur-xl
                "
              />

              {/* CARD */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[38px]
                  border
                  border-white/50
                  bg-white/70
                  backdrop-blur-2xl
                  p-5
                  h-full
                  transition-all
                  duration-500
                  shadow-[0_20px_80px_rgba(15,23,42,0.06)]
                  hover:shadow-[0_25px_100px_rgba(98,136,185,0.16)]
                "
              >
                {/* TOP GRADIENT */}
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    h-[5px]
                    w-0
                    bg-gradient-to-r
                    from-[#0D2444]
                    via-[#6288B9]
                    to-[#A4B8D2]
                    transition-all
                    duration-700
                    group-hover:w-full
                  "
                />

                {/* LIGHT */}
                <div
                  className="
                    absolute
                    top-[-60px]
                    right-[-40px]
                    w-[180px]
                    h-[180px]
                    rounded-full
                    bg-[#6288B9]/20
                    blur-3xl
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-700
                  "
                />

                {/* NUMBER */}
                {/* NUMBER */}
<motion.div
  whileHover={{
    rotate: 8,
    scale: 1.05,
  }}
  className="
    w-[58px]
    h-[58px]
    rounded-[18px]
    flex
    items-center
    justify-center
    bg-gradient-to-br
    from-[#0D2444]
    via-[#6288B9]
    to-[#A4B8D2]
    shadow-[0_8px_30px_rgba(98,136,185,0.22)]
  "
>
                  <span
                    className="
                      text-white
                      text-[24px]
                      font-black
                    "
                    style={{
                      fontFamily:
                        'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                    }}
                  >
                    0{index + 1}
                  </span>
                </motion.div>

                {/* TITLE */}
                <h3
                  className="
                    mt-10
                    text-[24px]
                    md:text-[25px]
                    leading-[1]
                    tracking-[-2px]
                    font-black
                    text-[#0F172A]
                    transition-all
                    duration-500
                    group-hover:text-[#0D2444]
                  "
                  style={{
                    fontFamily:
                      'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                  }}
                >
                  {item.title}
                </h3>

                {/* DESC */}
                <p
                  className="
                    mt-7
                    text-[16px]
                    leading-[2]
                    text-slate-500
                  "
                >
                  {item.desc}
                </p>

                {/* BOTTOM */}
                <div
                  className="
                    mt-10
                    flex
                    items-center
                    justify-between
                  "
                >
                  <div
                    className="
                      h-[1px]
                      flex-1
                      bg-gradient-to-r
                      from-[#6288B9]/30
                      to-transparent
                    "
                  />

                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      ml-5
                      w-3
                      h-3
                      rounded-full
                      bg-[#6288B9]
                    "
                  />
                </div>

                {/* HOVER OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-700
                    bg-gradient-to-br
                    from-white/10
                    via-transparent
                    to-[#6288B9]/5
                    pointer-events-none
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}