"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const benefits = [
  {
    title: "Premium Visual Appeal",
    text: "AI video production and VFX help brands create cinematic visuals that look polished, modern and campaign-ready.",
  },
  {
    title: "Faster Content Creation",
    text: "AI-assisted workflows speed up concept development, visual creation, editing and format adaptation for campaigns.",
  },
  {
    title: "Better Campaign Recall",
    text: "CGI, motion graphics and VFX create visual moments that audiences notice, remember and associate with the brand.",
  },
  {
    title: "Platform-Ready Outputs",
    text: "Videos can be adapted for Instagram Reels, YouTube Shorts, ads, websites, landing pages, event screens and presentations.",
  },
  {
    title: "Stronger Product Storytelling",
    text: "AI visuals and VFX allow products, services and brand ideas to be shown with more mood, drama, clarity and visual depth.",
  },
  {
    title: "Luxury Brand Positioning",
    text: "Premium pacing, cinematic effects, refined edits and clean post-production help brands look more elevated online.",
  },
  {
    title: "More Creative Freedom",
    text: "AI and CGI make it possible to create scenes, worlds, product moments and campaign visuals that are difficult to shoot traditionally.",
  },
  {
    title: "Reusable Campaign Assets",
    text: "One visual concept can be converted into multiple edits, cutdowns, sizes, teasers, ads and social media formats.",
  },
];

const keywords = ["Impact", "Speed", "Recall", "Scale"];

export default function AIVideoVFXBenefits() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#061D38] px-4 py-24 text-white sm:px-6 lg:px-8"
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
    >
      {/* Dark premium background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,#061D38_0%,#0D2444_48%,#123B68_100%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(191,234,255,0.16),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(103,183,232,0.12),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.08),transparent_42%)]" />

        <motion.div
          animate={{
            x: [0, 42, -24, 0],
            y: [0, -28, 20, 0],
            scale: [1, 1.08, 0.98, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-56 top-[-200px] h-[620px] w-[620px] rounded-full bg-[#67B7E8]/14 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -38, 26, 0],
            y: [0, 30, -22, 0],
            scale: [1, 0.96, 1.08, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-240px] bottom-[-240px] h-[680px] w-[680px] rounded-full bg-[#BFEAFF]/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: ["-35%", "125%"],
            opacity: [0, 0.22, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 h-full w-[280px] rotate-12 bg-gradient-to-r from-transparent via-white/16 to-transparent blur-lg"
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#67B7E8]/35 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top editorial heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-10 border-b border-white/15 pb-14 lg:grid-cols-[0.72fr_0.28fr] lg:items-end"
        >
          <motion.div variants={fadeUp}>
            <div className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#BFEAFF] sm:text-xs">
                Benefits
              </p>
            </div>

            <h2 className="max-w-5xl text-[38px] font-black leading-[0.98] tracking-[-0.06em] text-white sm:text-[56px] md:text-[78px]">
              Why brands invest in
              <span className="block bg-gradient-to-r from-white via-[#BFEAFF] to-[#67B7E8] bg-clip-text text-transparent">
                AI Video & VFX.
              </span>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-sm font-medium leading-7 text-white/64 sm:text-base lg:text-right"
          >
            AI video and VFX help brands create content that feels premium,
            flexible, fast, memorable and ready for digital campaigns.
          </motion.p>
        </motion.div>

        {/* New no-card editorial layout */}
        <div className="mt-16 grid gap-14 lg:grid-cols-[0.34fr_0.66fr] lg:gap-16">
          {/* Left sticky impact text */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:sticky lg:top-28 lg:h-fit"
          >
            <div className="border-y border-white/15 py-10">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#BFEAFF]">
                Visual Advantage
              </p>

              <h3 className="mt-5 text-[42px] font-black leading-[0.94] tracking-[-0.06em] text-white sm:text-[60px]">
                Better visuals.
                <span className="block text-white/45">
                  Stronger campaigns.
                </span>
              </h3>

              <p className="mt-6 text-sm leading-7 text-white/62 sm:text-base">
                In digital marketing, the first impression is visual. AI, CGI
                and VFX help brands create videos that look premium, communicate
                quickly and give campaigns a stronger creative edge.
              </p>
            </div>

            <div className="mt-8 border-b border-white/15 pb-7">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#BFEAFF]">
                Campaign Value
              </p>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                {keywords.map((item) => (
                  <span
                    key={item}
                    className="text-[28px] font-black leading-none tracking-[-0.05em] text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right large editorial flow */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.07 }}
            className="relative"
          >
            <div className="absolute left-[28px] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#BFEAFF]/28 to-transparent md:block" />

            {benefits.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="group relative border-b border-white/15 py-8 md:pl-20"
              >
                <div className="absolute left-0 top-10 hidden h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-xl transition-all duration-500 group-hover:border-[#BFEAFF]/40 group-hover:bg-[#BFEAFF]/10 md:flex">
                  <span className="text-xs font-black text-[#BFEAFF]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div
                  className={`grid gap-5 lg:items-start ${
                    index % 2 === 0
                      ? "lg:grid-cols-[0.42fr_0.58fr]"
                      : "lg:grid-cols-[0.58fr_0.42fr]"
                  }`}
                >
                  <div className={index % 2 === 0 ? "" : "lg:order-2"}>
                    <p className="mb-3 text-[11px] font-black uppercase tracking-[0.22em] text-[#BFEAFF]/70 md:hidden">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="text-[34px] font-black leading-[0.98] tracking-[-0.055em] text-white transition-colors duration-500 group-hover:text-[#BFEAFF] sm:text-[46px]">
                      {item.title}
                    </h3>
                  </div>

                  <div className={index % 2 === 0 ? "" : "lg:order-1"}>
                    <p className="max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
                      {item.text}
                    </p>

                    <div className="mt-6 h-px w-16 bg-gradient-to-r from-white via-[#BFEAFF] to-[#67B7E8] transition-all duration-500 group-hover:w-32" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}