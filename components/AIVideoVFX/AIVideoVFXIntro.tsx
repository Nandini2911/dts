"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const introPoints = [
  {
    title: "AI Video Production",
    text: "We create AI-generated commercials, product videos, brand films and campaign visuals using creative direction, scripting and AI-assisted production.",
  },
  {
    title: "Professional Video Editing",
    text: "We edit advertisements, reels, YouTube videos, event films and branded content with strong pacing, transitions, graphics and sound design.",
  },
  {
    title: "Content For Every Platform",
    text: "Every video is adapted for Instagram, YouTube, websites, paid advertising, product launches, events and digital marketing campaigns.",
  },
];

export default function AIVideoVFXIntro() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#F7FAFF] via-white to-[#EAF3FF] px-4 py-20 text-[#0D2444] sm:px-6 lg:px-8"
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
    >
      {/* Background gradient shade */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-180px] top-[-160px] h-[460px] w-[460px] rounded-full bg-[#6288B9]/18 blur-3xl" />
        <div className="absolute right-[-180px] bottom-[-160px] h-[500px] w-[500px] rounded-full bg-[#315E91]/12 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6288B9]/30 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        {/* Left Premium Visual */}
        <motion.div
          initial={{ opacity: 0, x: -34, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[520px] lg:mx-0"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#6288B9]/18 bg-white/70 p-4 shadow-2xl shadow-[#0D2444]/10 backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#0D2444] p-5">
              {/* Moving light */}
              <motion.div
                animate={{ x: ["-40%", "120%"] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 h-full w-32 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md"
              />

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                </div>

                <p className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-white/70">
                  Video Production System
                </p>
              </div>

              <div className="relative z-10 mt-8 grid gap-4">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="rounded-[1.6rem] border border-white/15 bg-white/10 p-5 backdrop-blur-xl"
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#BFEAFF]">
                    Creative Concept
                  </p>

                  <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">
                    AI video creation and editing
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/68">
                    Strategy, scripting, AI visuals, editing and brand
                    storytelling developed as one complete production.
                  </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                      duration: 5.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="rounded-[1.4rem] border border-white/15 bg-white/10 p-4 backdrop-blur-xl"
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/50">
                      Output
                    </p>

                    <p className="mt-2 text-lg font-black text-white">9:16</p>

                    <p className="mt-1 text-xs text-white/55">
                      Reels & Shorts
                    </p>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="rounded-[1.4rem] border border-white/15 bg-white/10 p-4 backdrop-blur-xl"
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/50">
                      Service
                    </p>

                    <p className="mt-2 text-lg font-black text-white">
                      AI + Edit
                    </p>

                    <p className="mt-1 text-xs text-white/55">
                      Complete Production
                    </p>
                  </motion.div>
                </div>

                <div className="rounded-[1.4rem] border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/55">
                      Editing Workflow
                    </p>

                    <p className="text-xs font-black text-white">Live</p>
                  </div>

                  <div className="space-y-3">
                    {[88, 72, 56].map((width, index) => (
                      <div key={index} className="h-2 rounded-full bg-white/15">
                        <motion.div
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${width}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.1,
                            delay: 0.3 + index * 0.15,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full bg-[#BFEAFF]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 left-1/2 w-[84%] -translate-x-1/2 rounded-3xl border border-[#6288B9]/18 bg-white/85 px-5 py-4 text-center shadow-xl shadow-[#0D2444]/10 backdrop-blur-xl">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#315E91]">
              AI Video + Editing + Motion + Storytelling
            </p>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
          className="text-center lg:text-left"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mx-auto mb-5 inline-flex rounded-full border border-[#6288B9]/25 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-xl lg:mx-0"
          >
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#315E91] sm:text-xs">
              AI Video Production & Video Editing Services
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto max-w-4xl text-[34px] font-black leading-[1.02] tracking-[-0.045em] text-[#0D2444] sm:text-[46px] md:text-[58px] lg:mx-0"
          >
            AI-powered video production with
            <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              professional video editing.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-6 text-base font-medium leading-8 text-[#304B6F] sm:text-lg"
          >
            Video is one of the most effective ways for brands to attract
            attention, explain their value and build trust online. Today&apos;s
            audiences respond to content that is visually strong, fast-paced,
            platform-ready and supported by a clear story.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-4 text-sm leading-7 text-[#49617F] sm:text-base"
          >
            Double Trouble Studio provides AI video production and professional
            video editing services for businesses, brands, creators and
            agencies across India. We combine AI-generated visuals, creative
            direction, scripting, motion graphics, colour correction, sound
            design and precise editing to produce polished videos for marketing
            and advertising.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-8 grid gap-4 sm:grid-cols-3"
          >
            {introPoints.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.6rem] border border-[#6288B9]/18 bg-white/72 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0D2444]/10"
              >
                <h3 className="text-base font-black tracking-[-0.02em] text-[#0D2444]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#49617F]">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-8 rounded-[1.8rem] border border-[#6288B9]/18 bg-[#0D2444] p-6 shadow-xl shadow-[#0D2444]/10"
          >
            <p className="text-sm font-medium leading-7 text-white/78">
              Whether you need an AI commercial, product launch video, brand
              film, Instagram Reel, YouTube video, event teaser, hospitality
              campaign, music promotion or professionally edited advertisement,
              we turn your ideas and raw footage into high-quality video content
              built for digital platforms.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}