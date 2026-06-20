"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const campaignGoals = [
  {
    title: "Product Launch",
    text: "Create visually strong product launch videos that introduce the product, build curiosity and make the launch feel premium and shareable.",
  },
  {
    title: "Brand Awareness",
    text: "Build high-impact visual campaigns that help brands stand out across Instagram, YouTube, ads, websites and digital platforms.",
  },
  {
    title: "Social Media Growth",
    text: "Create reels, shorts, teaser videos and CGI-style edits designed to attract attention and improve audience engagement.",
  },
  {
    title: "Event Promotion",
    text: "Create event teasers, countdown videos, invite films, hype reels, artist announcement videos and post-event recap edits.",
  },
  {
    title: "Luxury Positioning",
    text: "Create cinematic, premium and visually refined videos for luxury brands, high-end experiences, hospitality groups and lifestyle businesses.",
  },
  {
    title: "Lead Generation",
    text: "Create campaign videos and landing-page visuals that explain the offer, build trust and encourage inquiries, bookings or sign-ups.",
  },
  {
    title: "Product Demonstration",
    text: "Show product features, benefits, details, usage, packaging, design and visual appeal in a more engaging way.",
  },
  {
    title: "Storytelling & Brand Identity",
    text: "Create films and video concepts that communicate brand personality, mood, values, positioning and campaign message.",
  },
];

export default function AIVideoVFXCampaignGoals() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#F7FAFF] via-[#EAF3FF] to-[#DDEBFA] px-4 py-24 text-[#0D2444] sm:px-6 lg:px-8"
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
    >
      {/* Gradient background shade */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(98,136,185,0.28),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(49,94,145,0.18),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(13,36,68,0.14),transparent_38%)]" />

        <motion.div
          animate={{
            x: [0, 38, -22, 0],
            y: [0, -26, 18, 0],
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
            x: [0, -32, 24, 0],
            y: [0, 24, -18, 0],
            scale: [1, 0.96, 1.08, 1],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-180px] bottom-[-180px] h-[560px] w-[560px] rounded-full bg-[#315E91]/16 blur-3xl"
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6288B9]/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mx-auto mb-6 inline-flex rounded-full border border-[#6288B9]/25 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-xl"
          >
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#315E91] sm:text-xs">
              Campaign Goals
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-[34px] font-black leading-[1.02] tracking-[-0.045em] text-[#0D2444] sm:text-[46px] md:text-[60px]"
          >
            AI Video & VFX Services for
            <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              Different Campaign Goals
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-[#49617F] sm:text-base"
          >
            Every video should be planned around a clear objective. Whether the
            goal is awareness, launch impact, social media growth, luxury
            positioning or lead generation, the creative direction should match
            the campaign outcome.
          </motion.p>
        </motion.div>

        {/* Unique premium card grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {campaignGoals.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="group relative min-h-[310px] overflow-hidden rounded-[2.2rem] border border-[#6288B9]/20 bg-white/62 p-[1px] shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0D2444]/14"
            >
              {/* Gradient border shine */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D2444]/45 via-[#6288B9]/25 to-white/40" />
              </div>

              <div className="relative h-full rounded-[2.15rem] bg-white/78 p-6 backdrop-blur-xl transition-all duration-500 group-hover:bg-[#0D2444]">
                {/* Soft corner glow */}
                <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#6288B9]/16 blur-2xl transition-all duration-500 group-hover:bg-[#6288B9]/22" />
                <div className="absolute -bottom-24 left-[-60px] h-44 w-44 rounded-full bg-white/10 blur-2xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

                {/* Top meta */}
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#6288B9] transition-colors duration-500 group-hover:text-[#BFEAFF]">
                      Goal
                    </p>

                    <p className="mt-1 text-2xl font-black leading-none tracking-[-0.04em] text-[#0D2444] transition-colors duration-500 group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  <motion.div
                    animate={{
                      rotate: [0, 8, 0],
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.08,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#6288B9]/25 bg-[#F7FAFF]/90 text-lg font-black text-[#315E91] shadow-sm transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white"
                  >
                    ↗
                  </motion.div>
                </div>

                {/* Title */}
                <div className="relative z-10 mt-12">
                  <h3 className="text-[25px] font-black leading-tight tracking-[-0.045em] text-[#0D2444] transition-colors duration-500 group-hover:text-white">
                    {item.title}
                  </h3>

                  <div className="mt-4 h-px w-12 bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] transition-all duration-500 group-hover:w-24 group-hover:from-white group-hover:via-[#BFEAFF] group-hover:to-[#67B7E8]" />

                  <p className="mt-5 text-sm leading-7 text-[#49617F] transition-colors duration-500 group-hover:text-white/70">
                    {item.text}
                  </p>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-5 left-6 right-6 z-10 flex items-center justify-between border-t border-[#6288B9]/16 pt-4 transition-colors duration-500 group-hover:border-white/15">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#6288B9] transition-colors duration-500 group-hover:text-[#BFEAFF]">
                    Campaign Use
                  </p>

                  <span className="h-2 w-2 rounded-full bg-[#315E91] shadow-[0_0_18px_rgba(49,94,145,0.6)] transition-all duration-500 group-hover:bg-[#BFEAFF] group-hover:shadow-[0_0_18px_rgba(191,234,255,0.75)]" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}