"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const useCases = [
  {
    title: "AI Commercial Videos",
    label: "Advertising",
    text: "Create concept-driven AI commercials for products, services, offers and digital advertising campaigns with branded visuals, clear messaging and platform-ready edits.",
  },
  {
    title: "AI Product Videos",
    label: "Product",
    text: "Produce cinematic AI product videos for launches, demonstrations and promotions that highlight features, packaging, benefits, applications and design details.",
  },
  {
    title: "AI Brand Films",
    label: "Brand",
    text: "Develop AI-assisted brand films that communicate a company’s story, positioning, values and campaign message through consistent visuals and cinematic storytelling.",
  },
  {
    title: "Reels & Shorts Editing",
    label: "Social Media",
    text: "Professionally edit Instagram Reels, YouTube Shorts and vertical advertisements with strong hooks, fast pacing, subtitles, transitions, music and sound effects.",
  },
  {
    title: "Commercial Video Editing",
    label: "Video Editing",
    text: "Edit advertisements, promotional films and campaign videos with clean sequencing, colour correction, motion graphics, sound design and polished brand presentation.",
  },
  {
    title: "YouTube Video Editing",
    label: "YouTube",
    text: "Edit long-form and short-form YouTube videos, interviews, podcasts and educational content with clean cuts, graphics, captions, audio enhancement and engaging pacing.",
  },
  {
    title: "Event & Launch Video Editing",
    label: "Events",
    text: "Create event teasers, invitation films, countdown videos, artist announcements, launch highlights, recap Reels and professionally edited cinematic aftermovies.",
  },
  {
    title: "Motion Graphics & Post-Production",
    label: "Post-Production",
    text: "Complete videos with animated typography, logo reveals, lower thirds, transitions, colour grading, subtitles, audio mixing and final platform-specific exports.",
  },
];

const campaignWords = [
  "Create",
  "Edit",
  "Promote",
  "Explain",
  "Engage",
  "Convert",
];

export default function AIVideoVFXUseCases() {
  return (
    <section
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#F7FAFF] via-[#EAF3FF] to-[#DDEBFA] px-4 py-24 text-[#0D2444] sm:px-6 lg:px-8"
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
    >
      {/* Premium gradient background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(98,136,185,0.28),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(49,94,145,0.18),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(13,36,68,0.11),transparent_42%)]" />

        <motion.div
          animate={{
            x: [0, 36, -22, 0],
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
            x: [0, -32, 24, 0],
            y: [0, 24, -18, 0],
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
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
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
              AI Video & Video Editing Services
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-[38px] font-black leading-[0.98] tracking-[-0.06em] text-[#0D2444] sm:text-[56px] md:text-[78px]"
          >
            AI Video Production &
            <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              Professional Video Editing
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-[#49617F] sm:text-base"
          >
            We create AI-generated commercials, product videos and brand films,
            along with professional editing for Reels, YouTube videos, events,
            advertisements, motion graphics and complete digital campaigns.
          </motion.p>
        </motion.div>

        {/* Premium showcase layout */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:gap-8">
          {/* Left visual showcase */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[3rem] bg-[#0D2444] p-7 shadow-2xl shadow-[#0D2444]/18 lg:sticky lg:top-28 lg:h-fit"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_18%,rgba(191,234,255,0.25),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(98,136,185,0.22),transparent_34%)]" />

            <motion.div
              animate={{ x: ["-40%", "130%"] }}
              transition={{
                duration: 5.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 h-full w-28 rotate-12 bg-gradient-to-r from-transparent via-white/18 to-transparent blur-md"
            />

            <div className="relative z-10">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#BFEAFF]">
                Complete Video Solutions
              </p>

              <h3 className="mt-5 text-[44px] font-black leading-[0.92] tracking-[-0.065em] text-white sm:text-[64px]">
                Create with AI.
                <span className="block text-white/45">
                  Refine through editing.
                </span>
              </h3>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/64 sm:text-base">
                We combine AI-generated visuals with professional video editing
                to create polished commercials, product videos, brand films,
                Reels, YouTube content and campaign-ready deliverables.
              </p>

              {/* Center visual */}
              <div className="relative mt-10 flex min-h-[360px] items-center justify-center">
                <div className="absolute h-[320px] w-[320px] rounded-full border border-white/10" />
                <div className="absolute h-[235px] w-[235px] rounded-full border border-white/10" />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-[320px] w-[320px] rounded-full"
                >
                  {campaignWords.map((word, index) => {
                    const angle = (index / campaignWords.length) * 360;

                    return (
                      <div
                        key={word}
                        className="absolute left-1/2 top-1/2"
                        style={{
                          transform: `rotate(${angle}deg) translate(160px) rotate(-${angle}deg)`,
                        }}
                      >
                        <div className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl">
                          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#BFEAFF]">
                            {word}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>

                <div className="relative z-10 flex h-[210px] w-[210px] flex-col items-center justify-center rounded-full border border-white/15 bg-white/10 text-center shadow-2xl shadow-black/20 backdrop-blur-2xl">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#BFEAFF]">
                    AI Video
                  </p>

                  <h4 className="mt-3 text-[42px] font-black leading-none tracking-[-0.075em] text-white">
                    Editing
                  </h4>

                  <p className="mt-3 max-w-[150px] text-xs leading-5 text-white/55">
                    Production and post-production for modern campaigns
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/15 pt-6">
                {["Reels", "Ads", "Films"].map((item) => (
                  <div key={item}>
                    <p className="text-[26px] font-black tracking-[-0.05em] text-white">
                      {item}
                    </p>

                    <p className="mt-1 text-[9px] font-black uppercase tracking-[0.16em] text-[#BFEAFF]/70">
                      Video Output
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right attractive tiles */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.08 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {useCases.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className={`group relative overflow-hidden rounded-[2.3rem] border border-[#6288B9]/20 bg-white/72 p-[1px] shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0D2444]/14 ${
                  index === 0 || index === 7 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0D2444]/50 via-[#315E91]/30 to-[#6288B9]/20" />
                </div>

                <div className="relative min-h-[270px] rounded-[2.25rem] bg-white/82 p-6 transition-all duration-500 group-hover:bg-[#0D2444]">
                  <span className="pointer-events-none absolute bottom-[-20px] right-[-10px] text-[108px] font-black leading-none tracking-[-0.08em] text-[#0D2444]/5 transition-colors duration-500 group-hover:text-white/8">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-8 flex items-center justify-between gap-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#6288B9] transition-colors duration-500 group-hover:text-[#BFEAFF]">
                          {item.label}
                        </p>

                        <span className="h-2.5 w-2.5 rounded-full bg-[#315E91] transition-colors duration-500 group-hover:bg-[#BFEAFF]" />
                      </div>

                      <h3 className="text-[30px] font-black leading-[0.98] tracking-[-0.055em] text-[#0D2444] transition-colors duration-500 group-hover:text-white sm:text-[38px]">
                        {item.title}
                      </h3>
                    </div>

                    <div className="mt-8">
                      <div className="mb-5 h-px w-14 bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] transition-all duration-500 group-hover:w-28 group-hover:from-white group-hover:via-[#BFEAFF] group-hover:to-[#67B7E8]" />

                      <p className="text-sm leading-7 text-[#49617F] transition-colors duration-500 group-hover:text-white/70">
                        {item.text}
                      </p>
                    </div>
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