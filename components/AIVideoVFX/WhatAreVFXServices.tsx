"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const videoElements = [
  "AI Visual Creation",
  "Script Development",
  "Creative Direction",
  "Video Editing",
  "Colour Correction",
  "Sound Design",
  "Motion Graphics",
  "Text Animation",
  "Transitions",
  "Platform Optimisation",
];

const videoUses = [
  {
    title: "Product Launches",
    text: "Create AI-powered product videos and professionally edited launch films that present products with clarity, creativity and premium visual appeal.",
  },
  {
    title: "Advertising Campaigns",
    text: "Produce AI commercials, promotional videos and edited digital advertisements designed to capture attention and communicate your brand message.",
  },
  {
    title: "Brand & Event Films",
    text: "Transform AI visuals and recorded footage into brand films, event teasers, highlights, countdown videos and cinematic aftermovies.",
  },
  {
    title: "Social Media Content",
    text: "Create engaging Instagram Reels, YouTube Shorts, vertical ads and platform-ready videos with strong pacing, graphics and sound.",
  },
];

export default function WhatAreVFXServices() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#F7FAFF] via-[#EDF5FF] to-[#DCEBFA] px-4 py-24 text-[#0D2444] sm:px-6 lg:px-8"
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{
            x: [0, 40, -24, 0],
            y: [0, -24, 18, 0],
            scale: [1, 1.08, 0.98, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-48 top-[-170px] h-[540px] w-[540px] rounded-full bg-[#6288B9]/24 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -34, 26, 0],
            y: [0, 24, -20, 0],
            scale: [1, 0.96, 1.08, 1],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-190px] bottom-[-190px] h-[580px] w-[580px] rounded-full bg-[#315E91]/14 blur-3xl"
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6288B9]/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Top heading layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20"
        >
          <motion.div variants={fadeUp}>
            <div className="mb-6 inline-flex rounded-full border border-[#6288B9]/25 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-xl">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#315E91] sm:text-xs">
                AI Video & Video Editing Explained
              </p>
            </div>

            <h2 className="max-w-4xl text-[36px] font-black leading-[1.02] tracking-[-0.045em] text-[#0D2444] sm:text-[48px] md:text-[64px]">
              What Are AI Video
              <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
                & Video Editing Services?
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="flex items-end"
          >
            <p className="max-w-3xl text-lg font-medium leading-9 text-[#304B6F] sm:text-xl">
              AI video production uses artificial intelligence and creative
              direction to generate original visual content, while professional
              video editing transforms AI visuals or recorded footage into a
              polished story through sequencing, graphics, colour, sound and
              platform-specific formatting.
            </p>
          </motion.div>
        </motion.div>

        {/* Big visual typography section */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative mt-16 overflow-hidden border-y border-[#6288B9]/25 py-12"
        >
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <motion.p
                animate={{
                  opacity: [0.55, 1, 0.55],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-[92px] font-black leading-none tracking-[-0.09em] text-[#0D2444]/10 sm:text-[130px] md:text-[170px]"
              >
                AI+EDIT
              </motion.p>
            </div>

            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#6288B9]">
                Simple Meaning
              </p>

              <h3 className="mt-4 max-w-4xl text-[30px] font-black leading-tight tracking-[-0.045em] text-[#0D2444] sm:text-[44px] md:text-[54px]">
                AI creates new visual possibilities, and professional editing
                turns them into clear, engaging and campaign-ready videos.
              </h3>

              <p className="mt-6 max-w-3xl text-sm leading-8 text-[#49617F] sm:text-base">
                The process can include concept development, scriptwriting,
                AI-generated visuals, footage selection, scene sequencing,
                colour correction, sound design, motion graphics, text
                animation, transitions and final optimisation for different
                digital platforms.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Video elements line grid */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#6288B9]">
                What Our Video Services Include
              </p>

              <h3 className="mt-3 text-[30px] font-black leading-tight tracking-[-0.04em] text-[#0D2444] sm:text-[42px]">
                AI production and editing for complete brand videos.
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#49617F] sm:text-base">
              These services work together to create videos that are visually
              original, professionally edited, easy to understand and ready for
              marketing across multiple digital platforms.
            </p>
          </motion.div>

          <div className="grid border-t border-[#6288B9]/25 sm:grid-cols-2 lg:grid-cols-5">
            {videoElements.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.04,
                  ease: "easeOut",
                }}
                className="group relative border-b border-[#6288B9]/25 py-6 sm:px-5 lg:border-r lg:last:border-r-0"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#6288B9]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h4 className="mt-3 text-xl font-black tracking-[-0.035em] text-[#0D2444]">
                  {item}
                </h4>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom use section */}
        <div className="mt-18 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="pt-4"
          >
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#6288B9]">
              AI Video & Editing for Marketing
            </p>

            <h3 className="mt-4 text-[30px] font-black leading-tight tracking-[-0.04em] text-[#0D2444] sm:text-[42px]">
              Used when brands need original visuals and professional execution.
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#49617F] sm:text-base">
              AI video production and video editing services are commonly used
              for product launches, digital advertisements, luxury brand films,
              hospitality campaigns, real estate videos, fashion content, music
              promotions, event teasers, YouTube videos and social media
              campaigns.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[13px] top-0 h-full w-px bg-gradient-to-b from-[#6288B9]/0 via-[#315E91]/45 to-[#6288B9]/0" />

            <div className="space-y-10">
              {videoUses.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="relative pl-12"
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.22, 1],
                      opacity: [0.65, 1, 0.65],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.24,
                    }}
                    className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-[#6288B9]/40 bg-white/60 shadow-sm backdrop-blur-xl"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#315E91]" />
                  </motion.span>

                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#6288B9]">
                    Use {String(index + 1).padStart(2, "0")}
                  </p>

                  <h4 className="mt-2 text-2xl font-black tracking-[-0.035em] text-[#0D2444]">
                    {item.title}
                  </h4>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#49617F] sm:text-base">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}