"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const ctaPoints = [
  "AI Video Production",
  "CGI Advertising Videos",
  "VFX & Motion Graphics",
  "Product Launch Films",
  "Reels & Social Ads",
  "Website Hero Videos",
];

export default function AIVideoVFXCTA() {
  return (
    <section
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#F7FAFF] via-[#EAF3FF] to-[#DDEBFA] px-4 py-24 text-[#0D2444] sm:px-6 lg:px-8"
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
    >
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(98,136,185,0.28),transparent_30%),radial-gradient(circle_at_86%_20%,rgba(49,94,145,0.18),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(13,36,68,0.12),transparent_42%)]" />

        <motion.div
          animate={{
            x: [0, 38, -22, 0],
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
          className="absolute right-[-220px] bottom-[-220px] h-[640px] w-[640px] rounded-full bg-[#315E91]/14 blur-3xl"
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6288B9]/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
          className="relative overflow-hidden rounded-[3.2rem] border border-[#6288B9]/20 bg-white/70 p-6 shadow-2xl shadow-[#0D2444]/12 backdrop-blur-2xl sm:p-10 lg:p-14"
        >
          {/* Inner premium gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-[#F7FAFF]/70 to-[#EAF3FF]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(98,136,185,0.22),transparent_32%),radial-gradient(circle_at_85%_82%,rgba(13,36,68,0.12),transparent_34%)]" />

          <motion.div
            animate={{ x: ["-35%", "125%"] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 h-full w-[260px] rotate-12 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-xl"
          />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[0.68fr_0.32fr] lg:items-end">
            {/* Left content */}
            <div>
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="mb-6 inline-flex rounded-full border border-[#6288B9]/25 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl"
              >
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#315E91] sm:text-xs">
                  Start Your Project
                </p>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="max-w-5xl text-[40px] font-black leading-[0.92] tracking-[-0.065em] text-[#0D2444] sm:text-[62px] md:text-[84px]"
              >
                Ready to create an
                <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
                  AI Video or VFX campaign?
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mt-7 max-w-3xl text-sm font-medium leading-7 text-[#49617F] sm:text-base"
              >
                Whether you need a product launch video, CGI ad, luxury brand
                film, event teaser, social media reel, website hero video or
                VFX-led campaign visual, Double Trouble Studio can help plan and
                create the complete video from concept to final export.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mt-9 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#0D2444] px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-xl shadow-[#0D2444]/20 transition-all duration-500 hover:-translate-y-1 hover:bg-[#315E91]"
                >
                  Start A Video Project
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#6288B9]/30 bg-white/75 px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#0D2444] shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#315E91]/40 hover:bg-[#F7FAFF]"
                >
                  Book A Consultation
                </a>
              </motion.div>
            </div>

            {/* Right service list */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="rounded-[2.3rem] border border-[#6288B9]/22 bg-white/78 p-6 shadow-xl shadow-[#0D2444]/8 backdrop-blur-xl"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#6288B9]">
                We Can Create
              </p>

              <div className="mt-5 grid gap-3">
                {ctaPoints.map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center justify-between border-b border-[#6288B9]/16 pb-3 last:border-b-0"
                  >
                    <p className="text-[18px] font-black leading-tight tracking-[-0.035em] text-[#0D2444] transition-colors duration-500 group-hover:text-[#315E91] sm:text-[22px]">
                      {item}
                    </p>

                    <span className="text-xs font-black text-[#6288B9]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}