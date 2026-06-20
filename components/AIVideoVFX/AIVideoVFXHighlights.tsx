"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "AI Video Production",
    description: "AI-assisted visuals for campaigns, launches and brand films.",
  },
  {
    title: "CGI Ads",
    description: "Premium CGI-style videos for products, events and promotions.",
  },
  {
    title: "VFX for Advertising",
    description: "Visual effects, compositing and cinematic post-production.",
  },
  {
    title: "Social Media Videos",
    description: "Reels, shorts, vertical ads and digital-first video content.",
  },
  {
    title: "Brand Launch Films",
    description: "Launch videos for products, venues, events and luxury brands.",
  },
  {
    title: "3D Animation",
    description: "Animated concepts, digital objects and visual storytelling.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export default function AIVideoVFXHighlights() {
  return (
    <section
  className="relative overflow-hidden bg-gradient-to-br from-[#F7FAFF] via-[#EAF3FF] to-[#DDEBFA] px-4 py-20 text-[#0D2444] sm:px-6 lg:px-8"
  style={{
    fontFamily: "New York, ui-serif, Georgia, serif",
  }}
>
    
    {/* Gradient shade background */}
<div className="pointer-events-none absolute inset-0 -z-10">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(98,136,185,0.28),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(49,94,145,0.18),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(13,36,68,0.14),transparent_38%)]" />

  <motion.div
    animate={{
      x: [0, 35, -20, 0],
      y: [0, -24, 18, 0],
      scale: [1, 1.08, 0.98, 1],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -left-40 top-[-140px] h-[460px] w-[460px] rounded-full bg-[#6288B9]/25 blur-3xl"
  />

  <motion.div
    animate={{
      x: [0, -30, 25, 0],
      y: [0, 20, -18, 0],
      scale: [1, 0.96, 1.08, 1],
    }}
    transition={{
      duration: 17,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute right-[-160px] bottom-[-150px] h-[500px] w-[500px] rounded-full bg-[#315E91]/18 blur-3xl"
  />

  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6288B9]/35 to-transparent" />
  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
</div>

      <div className="mx-auto max-w-7xl">
        {/* Top Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mx-auto mb-4 inline-flex rounded-full border border-[#6288B9]/25 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-xl"
          >
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#315E91] sm:text-xs">
              What We Create
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-[34px] font-black leading-[1.02] tracking-[-0.045em] text-[#0D2444] sm:text-[46px] md:text-[58px]"
          >
            AI, CGI & VFX content built for
            <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              modern brand campaigns.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-[#49617F] sm:text-base"
          >
            From launch films to CGI product ads and social media videos, this
            page covers the core visual production services brands need for
            digital-first campaigns.
          </motion.p>
        </motion.div>

        {/* Highlight Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[2rem] border border-[#6288B9]/18 bg-white/72 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6288B9]/35 hover:shadow-xl hover:shadow-[#0D2444]/10"
            >
              {/* Card glow */}
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#6288B9]/12 blur-2xl transition-all duration-300 group-hover:bg-[#6288B9]/22" />

              {/* Number */}
              <div className="relative z-10 mb-8 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#6288B9]/20 bg-[#F7FAFF] shadow-sm">
                  <span className="text-sm font-black text-[#315E91]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.12,
                  }}
                  className="text-xl font-black text-[#6288B9]"
                >
                  →
                </motion.span>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-black tracking-[-0.025em] text-[#0D2444]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-medium leading-7 text-[#49617F]">
                  {item.description}
                </p>
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom mini strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-8 rounded-[2rem] border border-[#6288B9]/18 bg-[#0D2444] p-5 shadow-xl shadow-[#0D2444]/10"
        >
          <div className="grid gap-4 text-center sm:grid-cols-3">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#BFEAFF]">
                Formats
              </p>
              <p className="mt-1 text-sm font-bold text-white">
                9:16 • 4:5 • 1:1 • 16:9
              </p>
            </div>

            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#BFEAFF]">
                Platforms
              </p>
              <p className="mt-1 text-sm font-bold text-white">
                Instagram • YouTube • Ads • Websites
              </p>
            </div>

            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#BFEAFF]">
                Best For
              </p>
              <p className="mt-1 text-sm font-bold text-white">
                Launches • Brands • Events • Products
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}