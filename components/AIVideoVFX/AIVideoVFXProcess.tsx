"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const processSteps = [
  {
    title: "Requirement Understanding",
    tag: "Discovery",
    text: "We understand the brand, campaign goal, target audience, product, service, platform requirement and final video purpose.",
  },
  {
    title: "Creative Concept Planning",
    tag: "Concept",
    text: "We define the video idea, mood, visual direction, reference style, storytelling angle and campaign message.",
  },
  {
    title: "Script & Shot Breakdown",
    tag: "Structure",
    text: "We prepare the video flow, scene structure, text direction, visual prompts, shot ideas and edit sequence.",
  },
  {
    title: "AI Visual Creation",
    tag: "AI Build",
    text: "We generate or design AI visuals, CGI-style scenes, character looks, product environments and visual assets.",
  },
  {
    title: "VFX & Motion Design",
    tag: "VFX Polish",
    text: "We add compositing, motion graphics, transitions, effects, clean-up, animated text and visual enhancements.",
  },
  {
    title: "Editing & Sound Design",
    tag: "Post",
    text: "We edit the video with pacing, music, sound effects, color tone, subtitles and platform-specific energy.",
  },
  {
    title: "Final Export & Adaptation",
    tag: "Delivery",
    text: "We export videos in formats such as 9:16, 4:5, 1:1 and 16:9 for reels, ads, websites and campaigns.",
  },
];

const formats = ["9:16", "4:5", "1:1", "16:9"];

export default function AIVideoVFXProcess() {
  return (
    <section
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#F7FAFF] via-[#EAF3FF] to-[#DDEBFA] px-4 py-24 text-[#0D2444] sm:px-6 lg:px-8"
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
    >
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(98,136,185,0.30),transparent_30%),radial-gradient(circle_at_88%_22%,rgba(49,94,145,0.20),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(13,36,68,0.13),transparent_42%)]" />

        <motion.div
          animate={{
            x: [0, 38, -24, 0],
            y: [0, -24, 18, 0],
            scale: [1, 1.08, 0.98, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-52 top-[-180px] h-[560px] w-[560px] rounded-full bg-[#6288B9]/24 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -34, 24, 0],
            y: [0, 26, -18, 0],
            scale: [1, 0.96, 1.08, 1],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-220px] bottom-[-220px] h-[640px] w-[640px] rounded-full bg-[#315E91]/15 blur-3xl"
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6288B9]/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-10 border-b border-[#6288B9]/25 pb-14 lg:grid-cols-[0.7fr_0.3fr] lg:items-end"
        >
          <motion.div variants={fadeUp}>
            <div className="mb-6 inline-flex rounded-full border border-[#6288B9]/25 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-xl">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#315E91] sm:text-xs">
                Our Process
              </p>
            </div>

            <h2 className="max-w-5xl text-[38px] font-black leading-[0.98] tracking-[-0.06em] text-[#0D2444] sm:text-[56px] md:text-[78px]">
              How we create AI Video
              <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
                & VFX campaigns.
              </span>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-sm font-medium leading-7 text-[#49617F] sm:text-base lg:text-right"
          >
            A clean workflow keeps every AI video, CGI ad and VFX campaign
            purposeful, premium and ready for final platform use.
          </motion.p>
        </motion.div>

        {/* Unique process ladder */}
        <div className="mt-16">
          {/* Top production strip */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2.5rem] border border-[#6288B9]/20 bg-[#0D2444] p-6 shadow-2xl shadow-[#0D2444]/14"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(191,234,255,0.22),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(98,136,185,0.18),transparent_34%)]" />

            <motion.div
              animate={{ x: ["-35%", "125%"] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 h-full w-28 rotate-12 bg-gradient-to-r from-transparent via-white/18 to-transparent blur-md"
            />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-center">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#BFEAFF]">
                  Production Journey
                </p>

                <h3 className="mt-4 text-[34px] font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-[50px]">
                  From brief to final export, every step has a purpose.
                </h3>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {formats.map((item, index) => (
                  <motion.div
                    key={item}
                    animate={{
                      y: [0, index % 2 === 0 ? -6 : 6, 0],
                    }}
                    transition={{
                      duration: 4 + index * 0.25,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="border-l border-white/15 px-3 py-4 text-center"
                  >
                    <p className="text-[24px] font-black tracking-[-0.05em] text-white">
                      {item}
                    </p>
                    <p className="mt-1 text-[9px] font-black uppercase tracking-[0.16em] text-[#BFEAFF]/70">
                      Export
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Ladder steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.08 }}
            className="relative mt-14"
          >
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#315E91]/35 to-transparent lg:block" />

            {processSteps.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className={`group relative grid gap-6 border-b border-[#6288B9]/22 py-9 lg:grid-cols-2 lg:gap-20 ${
                  index % 2 === 0 ? "" : "lg:text-right"
                }`}
              >
                {/* Center marker */}
                <div className="absolute left-1/2 top-10 hidden h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border border-[#6288B9]/25 bg-white/70 shadow-xl shadow-[#0D2444]/10 backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-[#0D2444] lg:flex">
                  <span className="text-xs font-black text-[#315E91] transition-colors duration-500 group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title side */}
                <div
                  className={
                    index % 2 === 0
                      ? "lg:pr-16"
                      : "lg:order-2 lg:pl-16"
                  }
                >
                  <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#6288B9]">
                    Step {String(index + 1).padStart(2, "0")} / {item.tag}
                  </p>

                  <h3 className="mt-3 text-[34px] font-black leading-[0.98] tracking-[-0.055em] text-[#0D2444] transition-colors duration-500 group-hover:text-[#315E91] sm:text-[48px]">
                    {item.title}
                  </h3>
                </div>

                {/* Text side */}
                <div
                  className={
                    index % 2 === 0
                      ? "lg:pl-16"
                      : "lg:order-1 lg:pr-16"
                  }
                >
                  <p className="max-w-2xl text-sm leading-7 text-[#49617F] sm:text-base">
                    {item.text}
                  </p>

                  <div
                    className={`mt-6 h-px w-16 bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] transition-all duration-500 group-hover:w-32 ${
                      index % 2 === 0 ? "" : "lg:ml-auto"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}