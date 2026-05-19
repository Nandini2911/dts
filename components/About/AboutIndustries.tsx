"use client";

import { motion } from "framer-motion";

const industries = [
  "Hospitality Brands",
  "Luxury Businesses",
  "Restaurants & Cafés",
  "Wedding Planners",
  "Creators & Influencers",
  "Event Companies",
  "Fashion & Lifestyle",
  "Modern Startups",
];

export default function AboutIndustries() {
  return (
    <section className="relative overflow-hidden py-[150px] bg-[#F8FAFC]">
      {/* BG */}
      <div className="absolute inset-0 bg-[#F8FAFC]" />

      {/* Glow */}
      <div className="absolute top-[20%] right-[-120px] w-[420px] h-[420px] rounded-full bg-[#6288B9]/10 blur-3xl" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5">
        {/* TOP */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-end">
          {/* LEFT */}
          <div>
            {/* LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="
                glass
                inline-flex
                px-5
                py-2.5
                rounded-full
                mb-8
              "
            >
              <span
                className="
                  text-[12px]
                  uppercase
                  tracking-[0.22em]
                  font-semibold
                  text-[#456A9E]
                "
              >
                Industries We Work With
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="
                text-[56px]
                md:text-[82px]
                leading-[0.95]
                tracking-[-5px]
                font-black
              "
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              <span className="text-[#0F172A]">
                Built For
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
                Modern Brands
              </span>
            </motion.h2>
          </div>

          {/* RIGHT */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="
              text-[17px]
              leading-[2]
              text-slate-500
              max-w-[620px]
            "
          >
            We collaborate with ambitious businesses looking to build
            stronger digital presence, premium positioning and long-term
            cultural relevance across modern platforms.
          </motion.p>
        </div>

        {/* INDUSTRY GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {industries.map((item, index) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="
                premium-card
                relative
                overflow-hidden
                min-h-[220px]
                flex
                items-end
                group
                cursor-default
              "
            >
              {/* Hover Glow */}
              <div
                className="
                  absolute
                  top-[-80px]
                  right-[-60px]
                  w-[220px]
                  h-[220px]
                  rounded-full
                  bg-[#6288B9]/10
                  blur-3xl
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Number */}
              <span
                className="
                  absolute
                  top-8
                  left-8
                  text-[18px]
                  font-black
                  tracking-[-1px]
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-[#0D2444]
                  to-[#6288B9]
                "
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                0{index + 1}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className="
                    text-[34px]
                    leading-[1]
                    tracking-[-2px]
                    font-black
                    text-[#0F172A]
                  "
                  style={{
                    fontFamily:
                      'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                  }}
                >
                  {item}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}