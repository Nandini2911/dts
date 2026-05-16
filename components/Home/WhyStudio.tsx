"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Strategy-first",
    description:
      "We build brands with clarity — not guesswork. Every move ties back to business intent and long-term positioning.",
  },
  {
    title: "Story-led",
    description:
      "Your brand feels consistent everywhere — from Instagram and websites to PR, events and celebrity collaborations.",
  },
  {
    title: "Performance-aware",
    description:
      "We combine aesthetics with analytics to refine experiences, improve visibility and create measurable growth.",
  },
];

export default function WhyStudio() {
  return (
    <section className="relative py-[120px] overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#6288B9]/10 rounded-full blur-3xl" />

      <div className="max-w-[1280px] mx-auto px-6">
        {/* TOP CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-[950px] mx-auto"
        >
          {/* LABEL */}
          <div
            className="
              inline-flex
              items-center
              px-4
              py-2
              rounded-full
              border
              border-slate-200
              bg-white
              text-[12px]
              uppercase
              tracking-[1.5px]
              font-medium
              text-slate-500
              mb-8
            "
          >
            Why Double Trouble Studio
          </div>

          {/* HEADING */}
          <h2
            className="
              text-[54px]
              md:text-[84px]
              leading-[0.92]
              tracking-[-5px]
              font-bold
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-[#6B7C93]
              via-[#AFC2D9]
              to-[#E2EAF4]
            "
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, serif',
            }}
          >
            We Fix The Two

            <span className="block">
              Biggest Brand Problems
            </span>
          </h2>

          {/* SUBTEXT */}
          <p
            className="
              mt-10
              text-[20px]
              leading-[38px]
              text-slate-600
              max-w-[850px]
              mx-auto
            "
          >
            Growth isn’t about volume. It’s about meaning.
            We merge digital, PR, events, celebrity
            integrations and web experience into one clear
            and memorable brand language.
          </p>
        </motion.div>

        {/* FEATURE CARDS */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/40
                bg-[linear-gradient(135deg,#F8FBFF_0%,#EEF4FB_45%,#DCE7F5_100%)]
                p-8
                shadow-[0_20px_60px_rgba(15,23,42,0.05)]
              "
            >
              {/* CARD GLOW */}
              <div className="absolute top-[-80px] right-[-60px] w-[220px] h-[220px] bg-[#6288B9]/10 rounded-full blur-3xl" />

              {/* NUMBER */}
              <div
                className="
                  w-14
                  h-14
                  rounded-[18px]
                  bg-[#0D2444]
                  text-white
                  flex
                  items-center
                  justify-center
                  text-[18px]
                  font-semibold
                  shadow-[0_10px_25px_rgba(13,36,68,0.18)]
                "
              >
                0{index + 1}
              </div>

              {/* TITLE */}
              <h3
                className="
                  mt-8
                  text-[32px]
                  leading-[1]
                  tracking-[-1.5px]
                  font-bold
                  text-[#10213D]
                "
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, serif',
                }}
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-5
                  text-[17px]
                  leading-[32px]
                  text-slate-600
                "
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}