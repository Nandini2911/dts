"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    title: "AI Commercial Video Production",
    text: "AI-generated commercial videos for products, services, brand campaigns, advertisements and digital promotions.",
  },
  {
    title: "AI Product Videos",
    text: "Product-focused AI videos with creative concepts, cinematic visuals, smooth movement and clear brand storytelling.",
  },
  {
    title: "AI Brand Films",
    text: "Concept-driven AI brand films created for business introductions, launches, campaigns and premium brand communication.",
  },
  {
    title: "AI Social Media Videos",
    text: "Scroll-stopping AI Reels, Shorts and vertical advertisements designed for Instagram, YouTube and paid social campaigns.",
  },
  {
    title: "AI Fashion Videos",
    text: "AI-generated fashion films for clothing brands, designers, collection launches, campaigns, lookbooks and luxury content.",
  },
  {
    title: "AI Hospitality Videos",
    text: "Cinematic AI videos for hotels, restaurants, cafes, lounges, resorts, clubs, venues and hospitality campaigns.",
  },
  {
    title: "Commercial Video Editing",
    text: "Professional editing for advertisements, promotional videos, brand films and marketing campaigns with strong visual flow.",
  },
  {
    title: "Reels & Shorts Editing",
    text: "Fast-paced vertical video editing for Instagram Reels, YouTube Shorts, social media ads and creator content.",
  },
  {
    title: "YouTube Video Editing",
    text: "Long-form and short-form YouTube video editing with pacing, transitions, graphics, subtitles and sound enhancement.",
  },
  {
    title: "Product & Brand Video Editing",
    text: "Professional editing for product demonstrations, brand stories, launch films, promotional content and business videos.",
  },
  {
    title: "Event Video Editing",
    text: "Teasers, highlights, countdown videos and aftermovies for corporate events, weddings, launches, concerts and live experiences.",
  },
  {
    title: "Motion Graphics & Text Animation",
    text: "Animated titles, logo reveals, kinetic typography, lower thirds, infographics and branded motion elements for videos.",
  },
  {
    title: "Video Post-Production",
    text: "Complete post-production including footage selection, colour correction, sound design, subtitles, transitions and final exports.",
  },
];

const orbitItems = [
  "AI Ads",
  "AI Films",
  "AI Reels",
  "Products",
  "Editing",
  "YouTube",
  "Events",
  "Motion",
];

export default function AIVideoVFXServices() {
  return (
    <section
      className="relative overflow-hidden bg-[#F7FAFF] px-4 py-24 text-[#0D2444] sm:px-6 lg:px-8"
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
    >
      {/* Unique background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#F7FAFF_0%,#EAF4FF_45%,#DDEBFA_100%)]" />

        <motion.div
          animate={{
            x: [0, 40, -22, 0],
            y: [0, -30, 22, 0],
            scale: [1, 1.08, 0.98, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-52 top-[-190px] h-[580px] w-[580px] rounded-full bg-[#6288B9]/25 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -38, 28, 0],
            y: [0, 28, -20, 0],
            scale: [1, 0.96, 1.08, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-240px] bottom-[-230px] h-[680px] w-[680px] rounded-full bg-[#315E91]/15 blur-3xl"
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6288B9]/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Center heading */}
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
              Our AI Video & Video Editing Services
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-[36px] font-black leading-[1.02] tracking-[-0.045em] text-[#0D2444] sm:text-[48px] md:text-[64px]"
          >
            Complete AI video production
            <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              and professional video editing.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-[#49617F] sm:text-base"
          >
            We combine AI-generated visuals, creative direction, professional
            editing, motion graphics and post-production to create polished
            videos for brands, products, advertising campaigns, events,
            YouTube and social media.
          </motion.p>
        </motion.div>

        {/* Service spectrum visual */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative mx-auto mt-18 hidden min-h-[560px] max-w-5xl items-center justify-center lg:flex"
        >
          {/* outer circles */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 44,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[520px] w-[520px] rounded-full border border-[#6288B9]/25"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 58,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[390px] w-[390px] rounded-full border border-dashed border-[#315E91]/25"
          />

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.22, 0.45, 0.22],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-[420px] w-[420px] rounded-full bg-[#6288B9]/18 blur-3xl"
          />

          {/* center */}
          <div className="relative z-10 flex h-[300px] w-[300px] flex-col items-center justify-center rounded-full border border-white/80 bg-white/60 text-center shadow-2xl shadow-[#0D2444]/12 backdrop-blur-2xl">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#6288B9]">
              DTS Video Stack
            </p>

            <h3 className="mt-4 text-[42px] font-black leading-none tracking-[-0.06em] text-[#0D2444]">
              AI Video
              <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
                +
              </span>
              Editing
            </h3>

            <p className="mt-5 max-w-[210px] text-sm leading-6 text-[#49617F]">
              One workflow for commercials, reels, films, products and digital
              campaigns.
            </p>
          </div>

          {/* orbit labels */}
          {orbitItems.map((item, index) => {
            const positions = [
              "left-[50%] top-0 -translate-x-1/2",
              "right-[13%] top-[13%]",
              "right-0 top-[50%] -translate-y-1/2",
              "right-[13%] bottom-[13%]",
              "left-[50%] bottom-0 -translate-x-1/2",
              "left-[13%] bottom-[13%]",
              "left-0 top-[50%] -translate-y-1/2",
              "left-[13%] top-[13%]",
            ];

            return (
              <motion.div
                key={item}
                animate={{
                  y: [0, index % 2 === 0 ? -12 : 12, 0],
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 4 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute z-20 ${positions[index]}`}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/75 bg-white/70 text-center shadow-xl shadow-[#0D2444]/10 backdrop-blur-xl">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#315E91]">
                    {item}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile mini spectrum */}
        <div className="mt-12 grid grid-cols-2 gap-3 lg:hidden">
          {orbitItems.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#6288B9]/20 bg-white/65 px-4 py-4 text-center shadow-sm backdrop-blur-xl"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#315E91]">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Service editorial list */}
        <div className="mt-18 border-t border-[#6288B9]/25">
          {services.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.025,
                ease: "easeOut",
              }}
              className="group relative grid gap-4 border-b border-[#6288B9]/25 py-8 md:grid-cols-[0.16fr_0.36fr_0.48fr] md:items-start md:gap-8"
            >
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#6288B9]">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>

              <h3 className="text-[26px] font-black leading-tight tracking-[-0.04em] text-[#0D2444] sm:text-[34px]">
                {item.title}
              </h3>

              <p className="max-w-3xl text-sm leading-7 text-[#49617F] sm:text-base">
                {item.text}
              </p>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}