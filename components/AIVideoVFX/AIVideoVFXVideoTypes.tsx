"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const videoTypes = [
  {
    title: "AI Commercial Videos",
    label: "AI Ads",
    text: "AI-generated commercial videos for products, services, offers and digital advertising campaigns with creative concepts and branded storytelling.",
  },
  {
    title: "AI Product Videos",
    label: "AI Product",
    text: "Cinematic AI product videos for launches, promotions and demonstrations using creative scenes, product movement and premium visual presentation.",
  },
  {
    title: "AI Brand Films",
    label: "AI Brand",
    text: "Concept-driven AI brand films for business introductions, brand storytelling, campaign launches and premium digital communication.",
  },
  {
    title: "Reels & Shorts Editing",
    label: "Social Edit",
    text: "Fast-paced vertical video editing for Instagram Reels, YouTube Shorts, paid social advertisements and creator-led brand campaigns.",
  },
  {
    title: "Commercial Video Editing",
    label: "Ad Editing",
    text: "Professional editing for advertisements, promotional videos and brand films with strong pacing, clean sequencing, graphics, colour and sound.",
  },
  {
    title: "YouTube Video Editing",
    label: "YouTube",
    text: "Long-form and short-form YouTube editing with clean cuts, subtitles, transitions, motion graphics, audio enhancement and engaging visual flow.",
  },
  {
    title: "Event & Launch Video Editing",
    label: "Events",
    text: "Professional editing for event teasers, invitations, countdown videos, artist announcements, launch highlights and cinematic aftermovies.",
  },
  {
    title: "Product & Service Explainer Videos",
    label: "Explainer",
    text: "Clear explainer videos created with AI visuals, recorded footage, text animation and structured editing to communicate products and services.",
  },
  {
    title: "Motion Graphics & Post-Production",
    label: "Post",
    text: "Complete video post-production with animated titles, logo reveals, colour correction, sound design, subtitles, transitions and final exports.",
  },
];

const formats = [
  { value: "9:16", label: "Reels" },
  { value: "4:5", label: "Social" },
  { value: "1:1", label: "Feed" },
  { value: "16:9", label: "Film" },
];

export default function AIVideoVFXVideoTypes() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#F7FAFF] via-[#EAF3FF] to-[#DDEBFA] px-4 py-24 text-[#0D2444] sm:px-6 lg:px-8"
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
    >
      {/* Premium gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(98,136,185,0.28),transparent_30%),radial-gradient(circle_at_88%_25%,rgba(49,94,145,0.18),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(13,36,68,0.14),transparent_42%)]" />

        <motion.div
          animate={{
            x: [0, 38, -22, 0],
            y: [0, -26, 20, 0],
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
          className="absolute right-[-220px] bottom-[-220px] h-[640px] w-[640px] rounded-full bg-[#315E91]/14 blur-3xl"
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6288B9]/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
          className="mx-auto max-w-5xl text-center"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mx-auto mb-6 inline-flex rounded-full border border-[#6288B9]/25 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-xl"
          >
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#315E91] sm:text-xs">
              AI Video Production & Video Editing
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-[34px] font-black leading-[1.02] tracking-[-0.045em] text-[#0D2444] sm:text-[46px] md:text-[60px]"
          >
            Types of AI Videos
            <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              & Professional Video Edits We Create
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-[#49617F] sm:text-base"
          >
            We create AI-generated videos and provide professional video editing
            for commercials, product campaigns, brand films, Instagram Reels,
            YouTube videos, events, explainers and digital marketing content.
          </motion.p>
        </motion.div>

        {/* Main cinematic board */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-stretch">
          {/* Left lens panel */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2.8rem] border border-[#6288B9]/20 bg-[#0D2444] p-6 shadow-2xl shadow-[#0D2444]/16"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(191,234,255,0.25),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(98,136,185,0.24),transparent_35%)]" />

            <motion.div
              animate={{ x: ["-45%", "130%"] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 h-full w-28 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md"
            />

            <div className="relative z-10">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#BFEAFF]">
                Complete Video Production
              </p>

              <h3 className="mt-5 text-[40px] font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-[56px]">
                One
                <span className="block text-white/50">creative system.</span>
              </h3>

              {/* Lens */}
              <div className="relative mx-auto my-10 flex h-[280px] w-[280px] items-center justify-center rounded-full border border-white/15 bg-white/5 sm:h-[340px] sm:w-[340px]">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-5 rounded-full border border-dashed border-[#BFEAFF]/25"
                />

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.35, 0.65, 0.35],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute h-[170px] w-[170px] rounded-full bg-[#BFEAFF]/20 blur-2xl"
                />

                <div className="relative flex h-[190px] w-[190px] flex-col items-center justify-center rounded-full border border-white/20 bg-white/10 text-center backdrop-blur-xl sm:h-[230px] sm:w-[230px]">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#BFEAFF]">
                    AI Video + Editing
                  </p>

                  <p className="mt-3 text-[42px] font-black leading-none tracking-[-0.06em] text-white">
                    360°
                  </p>

                  <p className="mt-3 max-w-[150px] text-xs leading-5 text-white/60">
                    Complete videos for ads, Reels, products, brand films and
                    digital campaigns.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {formats.map((item, index) => (
                  <motion.div
                    key={item.value}
                    animate={{
                      y: [0, index % 2 === 0 ? -6 : 6, 0],
                    }}
                    transition={{
                      duration: 4 + index * 0.25,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="rounded-[1.4rem] border border-white/15 bg-white/10 p-4 text-center backdrop-blur-xl"
                  >
                    <p className="text-[28px] font-black tracking-[-0.05em] text-white">
                      {item.value}
                    </p>

                    <p className="mt-1 text-[9px] font-black uppercase tracking-[0.18em] text-[#BFEAFF]/75">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

         {/* Right production blocks */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
  transition={{ staggerChildren: 0.07 }}
  className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
>
  {videoTypes.map((item, index) => (
    <motion.div
      key={item.title}
      variants={fadeUp}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        group
        relative
        h-full
        overflow-hidden
        rounded-[2.1rem]
        border
        border-[#6288B9]/20
        bg-white/70
        p-[1px]
        shadow-sm
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#6288B9]/40
        hover:shadow-2xl
        hover:shadow-[#0D2444]/14
      "
    >
      {/* Same gradient hover background for every card */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D2444]/45 via-[#6288B9]/25 to-white/35" />
      </div>

      <div
        className="
          relative
          flex
          h-full
          min-h-[300px]
          flex-col
          justify-between
          overflow-hidden
          rounded-[2rem]
          bg-white/82
          p-5
          transition-all
          duration-500
          group-hover:bg-[#0D2444]
        "
      >
        {/* Same hover glow for every card */}
        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-44
            w-44
            rounded-full
            bg-[#6288B9]/10
            blur-2xl
            transition-all
            duration-500
            group-hover:bg-[#6288B9]/25
          "
        />

        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <p
              className="
                text-[10px]
                font-black
                uppercase
                tracking-[0.22em]
                text-[#6288B9]
                transition-colors
                duration-500
                group-hover:text-[#BFEAFF]
              "
            >
              {item.label}
            </p>

            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#6288B9]/25
                bg-[#F7FAFF]
                text-xs
                font-black
                text-[#315E91]
                transition-all
                duration-500
                group-hover:rotate-6
                group-hover:border-white/20
                group-hover:bg-white/10
                group-hover:text-white
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3
            className="
              mt-9
              text-[25px]
              font-black
              leading-tight
              tracking-[-0.045em]
              text-[#0D2444]
              transition-colors
              duration-500
              group-hover:text-white
            "
          >
            {item.title}
          </h3>
        </div>

        <div className="relative z-10 mt-8">
          <div
            className="
              mb-5
              h-px
              w-12
              bg-gradient-to-r
              from-[#0D2444]
              via-[#315E91]
              to-[#6288B9]
              transition-all
              duration-500
              group-hover:w-24
              group-hover:from-white
              group-hover:via-[#BFEAFF]
              group-hover:to-[#67B7E8]
            "
          />

          <p
            className="
              text-sm
              leading-7
              text-[#49617F]
              transition-colors
              duration-500
              group-hover:text-white/70
            "
          >
            {item.text}
          </p>
        </div>

        <span
          className="
            pointer-events-none
            absolute
            bottom-[-24px]
            right-[-4px]
            text-[105px]
            font-black
            leading-none
            tracking-[-0.08em]
            text-[#0D2444]/5
            transition-colors
            duration-500
            group-hover:text-white/8
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  ))}
</motion.div>
        </div>
      </div>
    </section>
  );
}