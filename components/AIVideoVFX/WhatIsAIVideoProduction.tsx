"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const points = [
  {
    title: "Creative Direction",
    text: "The idea, mood, script, campaign message and visual flow are planned first so the video feels brand-aligned.",
  },
  {
    title: "AI Visual Creation",
    text: "AI tools help create scenes, environments, product moods, cinematic frames and experimental visual concepts.",
  },
  {
    title: "Editing & Post-Production",
    text: "The final video is shaped with editing, motion, sound design, typography, pacing and platform-ready formats.",
  },
];

const useCases = [
  "Product Videos",
  "Digital Ads",
  "Instagram Reels",
  "Event Promos",
  "Luxury Campaigns",
  "Fashion Visuals",
  "Hospitality Launches",
  "Brand Storytelling",
];

export default function WhatIsAIVideoProduction() {
  return (
    <section
      className="relative overflow-hidden bg-[#061D38] px-4 py-24 text-white sm:px-6 lg:px-8"
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(130deg,#061D38_0%,#0D2444_45%,#102F55_100%)]" />

        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 24, 0],
            scale: [1, 1.08, 0.98, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-52 top-[-180px] h-[560px] w-[560px] rounded-full bg-[#67B7E8]/18 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -36, 28, 0],
            y: [0, 28, -22, 0],
            scale: [1, 0.96, 1.08, 1],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-220px] bottom-[-220px] h-[620px] w-[620px] rounded-full bg-[#BFEAFF]/10 blur-3xl"
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#67B7E8]/35 to-transparent" />
      </div>

      {/* Moving cinematic light */}
      <motion.div
        animate={{
          x: ["-30%", "120%"],
          opacity: [0, 0.35, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-0 -z-10 h-full w-[280px] rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-lg"
      />

      <div className="mx-auto max-w-7xl">
        {/* Top intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16"
        >
          <motion.div variants={fadeUp}>
            <div className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#BFEAFF] sm:text-xs">
                AI Video Production Explained
              </p>
            </div>

            <h2 className="max-w-4xl text-[36px] font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-[48px] md:text-[64px]">
              What Is
              <span className="block bg-gradient-to-r from-white via-[#BFEAFF] to-[#67B7E8] bg-clip-text text-transparent">
                AI Video Production?
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="flex items-end"
          >
            <p className="max-w-3xl text-lg font-medium leading-9 text-white/78 sm:text-xl">
              AI video production is the process of creating or enhancing video
              content using artificial intelligence tools along with creative
              direction, scripting, editing, sound design, animation and
              post-production.
            </p>
          </motion.div>
        </motion.div>

        {/* Big definition spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative mt-16 overflow-hidden border-y border-white/15 py-14"
        >
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#BFEAFF]/40 to-transparent" />
          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#BFEAFF]/40 to-transparent" />

          <motion.div
            animate={{
              opacity: [0.18, 0.38, 0.18],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#67B7E8]/20 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#BFEAFF]">
              Simple Meaning
            </p>

            <h3 className="mt-5 text-[32px] font-black leading-tight tracking-[-0.045em] text-white sm:text-[46px] md:text-[58px]">
              AI creates the visual possibility.
              <span className="block text-white/55">
                Direction turns it into a brand campaign.
              </span>
            </h3>

            <p className="mx-auto mt-7 max-w-3xl text-sm leading-8 text-white/65 sm:text-base">
              AI can help generate scenes, create cinematic visuals, extend
              backgrounds, animate products, design surreal environments and
              support faster visual experimentation. A professional team makes
              sure the final video is clear, polished, brand-safe and suitable
              for marketing use.
            </p>
          </div>
        </motion.div>

        {/* Flow section */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#BFEAFF]">
              How it works
            </p>

            <h3 className="mt-4 text-[30px] font-black leading-tight tracking-[-0.04em] text-white sm:text-[42px]">
              AI video is not only generation. It is a complete visual
              production workflow.
            </h3>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[13px] top-0 h-full w-px bg-gradient-to-b from-[#BFEAFF]/0 via-[#BFEAFF]/45 to-[#BFEAFF]/0" />

            <div className="space-y-10">
              {points.map((item, index) => (
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
                      scale: [1, 1.25, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.25,
                    }}
                    className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-[#BFEAFF]/40 bg-[#BFEAFF]/15"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#BFEAFF]" />
                  </motion.span>

                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#BFEAFF]/75">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>

                  <h4 className="mt-2 text-2xl font-black tracking-[-0.035em] text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Use case typography strip */}
<motion.div
  initial={{ opacity: 0, y: 26 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.75, ease: "easeOut" }}
  className="mt-24"
>
  <div className="border-y border-white/15 py-10">
    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
      <div className="lg:w-[30%]">
        <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#BFEAFF]">
          Used For
        </p>

        <h3 className="mt-3 max-w-md text-[30px] font-black leading-tight tracking-[-0.045em] text-white sm:text-[42px]">
          AI videos built for real campaign use.
        </h3>
      </div>

      <div className="lg:w-[64%]">
        <p className="max-w-3xl text-sm leading-7 text-white/60 sm:text-base">
          From launch videos and digital ads to reels, hospitality campaigns,
          fashion visuals and brand storytelling, AI video production helps
          brands create visual content that feels modern, premium and
          platform-ready.
        </p>
      </div>
    </div>
  </div>

  <div className="relative overflow-hidden border-b border-white/15 py-8">
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        duration: 26,
        repeat: Infinity,
        ease: "linear",
      }}
      className="flex w-max items-center gap-8"
    >
      {[...useCases, ...useCases].map((item, index) => (
        <div key={`${item}-${index}`} className="flex items-center gap-8">
          <span className="text-[34px] font-black leading-none tracking-[-0.055em] text-white/90 sm:text-[48px] lg:text-[62px]">
            {item}
          </span>

          <span className="h-2 w-2 rounded-full bg-[#BFEAFF]/55" />
        </div>
      ))}
    </motion.div>

    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#061D38] to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#061D38] to-transparent" />
  </div>

  <div className="grid gap-0 border-b border-white/15 sm:grid-cols-2 lg:grid-cols-4">
    {[
      "Launches",
      "Ads",
      "Reels",
      "Brand Films",
    ].map((item, index) => (
      <motion.div
        key={item}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.55,
          delay: index * 0.08,
          ease: "easeOut",
        }}
        className="group relative py-7 sm:border-r sm:border-white/15 sm:px-6 last:border-r-0"
      >
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#BFEAFF]/70">
          0{index + 1}
        </p>

        <h4 className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">
          {item}
        </h4>

        <div className="absolute bottom-0 left-0 h-px w-0 bg-[#BFEAFF] transition-all duration-500 group-hover:w-full" />
      </motion.div>
    ))}
  </div>
</motion.div>
      </div>
    </section>
  );
}