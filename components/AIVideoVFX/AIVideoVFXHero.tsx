"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const heroTags = [
  "AI Video Production",
  "Commercial Video Editing",
  "Social Media Reels",
  "Brand Launch Films",
];

const visualCards = [
  {
    title: "AI Product Video",
    text: "Launch-ready product visuals",
    position: "left-0 top-[18%]",
  },
  {
    title: "Video Editing",
    text: "Premium campaign edits",
    position: "right-0 top-[30%]",
  },
  {
    title: "Reels Editing",
    text: "Engaging social media videos",
    position: "left-8 bottom-[18%]",
  },
];

export default function AIVideoVFXHero() {
  return (
    <section
      className="relative isolate min-h-screen overflow-hidden bg-[#061D38] px-4 pt-28 pb-20 text-white sm:px-6 sm:pt-32 lg:px-8 lg:pt-36"
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-30">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('/bg3.jpg')] bg-cover bg-center"
        />

        {/* Dark overlay for readable text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061D38]/95 via-[#061D38]/78 to-[#061D38]/1" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061D38]/30 via-transparent to-[#061D38]/2" />
      </div>

      {/* Animated glass light sweep */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          animate={{
            x: ["-40%", "120%"],
            opacity: [0, 0.55, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 h-full w-[220px] rotate-12 bg-gradient-to-r from-transparent via-white/22 to-transparent blur-md"
        />

        <motion.div
          animate={{
            x: ["110%", "-35%"],
            opacity: [0, 0.35, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
          className="absolute top-0 h-full w-[180px] rotate-12 bg-gradient-to-r from-transparent via-[#9DD8FF]/18 to-transparent blur-lg"
        />
      </div>

      {/* Decorative animated blue blur */}
      <motion.div
        animate={{
          y: [0, -28, 0],
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.75, 0.45],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[-160px] top-[18%] -z-10 h-[520px] w-[520px] rounded-full bg-[#4CB7E8]/20 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.13 }}
          className="relative z-10 text-center lg:text-left"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mx-auto mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 shadow-sm backdrop-blur-xl lg:mx-0"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9DD8FF] opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#9DD8FF]" />
            </span>

            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/85 sm:text-xs">
              AI Video • Reels • Video Editing
            </p>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-5xl text-[34px] font-black leading-[0.96] tracking-[-0.045em] text-white sm:text-[46px] md:text-[60px] lg:mx-0 xl:text-[74px]"
          >
            AI Video Production
            <span className="block bg-gradient-to-r from-white via-[#BFEAFF] to-[#67B7E8] bg-clip-text text-transparent">
              & Video Editing
            </span>
            <span className="block text-white">in India</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-base font-semibold leading-8 text-white/82 sm:text-lg lg:mx-0"
          >
            Double Trouble Studio creates AI videos, professionally edited brand
            films, product launch videos, event teasers, Instagram reels,
            YouTube videos, commercial ads and engaging visual campaigns for
            brands across India.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/68 sm:text-base lg:mx-0"
          >
            From AI-generated commercial videos to social media reels, YouTube
            edits and branded promotional films, we help businesses create
            premium, modern and scroll-stopping video content.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-[#0D2444] shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#BFEAFF] sm:w-auto"
            >
              Create Your Video
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/18 sm:w-auto"
            >
              Start A Video Campaign
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {heroTags.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 text-center shadow-sm backdrop-blur-xl"
              >
                <p className="text-xs font-black leading-snug text-white">
                  {item}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.95, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto h-[570px] w-full max-w-[570px] lg:mx-0"
        >
          {/* Floating glass cards */}
          {visualCards.map((card, index) => (
            <motion.div
              key={card.title}
              animate={{
                y: [0, index % 2 === 0 ? -16 : 16, 0],
                rotate: [0, index % 2 === 0 ? -2 : 2, 0],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute z-20 hidden rounded-3xl border border-white/20 bg-white/12 px-5 py-4 shadow-xl shadow-black/15 backdrop-blur-xl sm:block ${card.position}`}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#BFEAFF]">
                {card.title}
              </p>
              <p className="mt-1 text-sm font-black text-white">
                {card.text}
              </p>
            </motion.div>
          ))}

          {/* Main cinematic preview panel */}
          <div className="absolute left-1/2 top-1/2 z-10 h-[500px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] border border-white/20 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:w-[390px]">
            <div className="relative h-full overflow-hidden rounded-[2.4rem] bg-[#071A33]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_22%,rgba(255,255,255,0.38),transparent_24%),radial-gradient(circle_at_70%_75%,rgba(103,183,232,0.72),transparent_36%),linear-gradient(145deg,#071A33,#0D2444,#315E91)]" />

              {/* moving light sweep */}
              <motion.div
                animate={{ x: ["-40%", "120%"] }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 h-full w-28 rotate-12 bg-gradient-to-r from-transparent via-white/24 to-transparent blur-md"
              />

              {/* Top UI */}
              <div className="relative z-10 flex items-center justify-between p-5">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                </div>

                <p className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-white/75">
                  Edit Preview
                </p>
              </div>

              {/* Central 3D visual object */}
              <motion.div
                animate={{
                  y: [0, -18, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 5.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-[36%] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-[2.4rem] border border-white/28 bg-white/12 shadow-2xl shadow-white/10 backdrop-blur-md"
              >
                <div className="absolute inset-4 rounded-[1.9rem] bg-gradient-to-br from-white/80 via-white/20 to-transparent" />
                <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/35 bg-white/16" />
                <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70" />
              </motion.div>

              {/* Bottom editor */}
              <div className="absolute bottom-5 left-5 right-5 z-10 rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                    Video Editing Preview
                  </p>
                  <p className="text-xs font-black text-white">9:16</p>
                </div>

                <div className="space-y-3">
                  {[86, 70, 54].map((width, index) => (
                    <div key={index} className="h-2 rounded-full bg-white/15">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: `${width}%` }}
                        transition={{
                          duration: 1.2,
                          delay: 0.65 + index * 0.16,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-[#BFEAFF]"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {["AI", "REELS", "EDIT"].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/15 bg-white/10 py-2 text-center"
                    >
                      <p className="text-[10px] font-black tracking-[0.18em] text-white">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom badge */}
          <div className="absolute bottom-1 left-1/2 z-20 w-[86%] -translate-x-1/2 rounded-3xl border border-white/20 bg-white/12 px-5 py-4 shadow-xl shadow-black/15 backdrop-blur-xl">
            <p className="text-center text-[11px] font-black uppercase tracking-[0.18em] text-[#BFEAFF]">
              Edited for Reels, Ads, Launches & Websites
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}