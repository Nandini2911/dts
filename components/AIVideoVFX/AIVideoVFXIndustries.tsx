"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const industries = [
  {
    title: "Fashion & Apparel",
    text: "AI fashion videos, collection launch films, lookbook Reels and professionally edited campaign content for clothing brands, designers and fashion labels.",
  },
  {
    title: "Jewellery & Luxury",
    text: "Premium AI product videos, cinematic brand films and refined video editing for jewellery, watches, luxury accessories and lifestyle campaigns.",
  },
  {
    title: "Hospitality & Restaurants",
    text: "AI-assisted promotional videos, food Reels, ambience films and professionally edited content for hotels, restaurants, cafes, lounges and resorts.",
  },
  {
    title: "Events & Entertainment",
    text: "Event teaser videos, invitation films, artist announcements, countdown edits, highlight videos and cinematic aftermovies for live experiences.",
  },
  {
    title: "Real Estate & Architecture",
    text: "AI property videos, project launch films, location showcases, walkthrough edits and premium promotional content for real estate and architecture brands.",
  },
  {
    title: "Automotive & Mobility",
    text: "AI car commercials, vehicle reveal videos, launch films, lifestyle edits and professionally produced promotional videos for mobility brands.",
  },
  {
    title: "Beauty & Wellness",
    text: "AI product films, treatment explainers, clinic Reels, transformation videos and edited campaigns for beauty, skincare, wellness and healthcare brands.",
  },
  {
    title: "Corporate & Startups",
    text: "AI brand films, founder videos, service explainers, product demonstrations, recruitment videos and professional editing for corporate communication.",
  },
];

const orbitLabels = [
  "Luxury",
  "Fashion",
  "Events",
  "Hotels",
  "Real Estate",
  "Automotive",
  "Beauty",
  "Corporate",
];

export default function AIVideoVFXIndustries() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#F4FAFF] px-4 py-24 text-[#06213D] sm:px-6 lg:px-8"
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
    >
      {/* Visible uploaded smoke background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover opacity-100"
          style={{
            backgroundImage: "url('/bg4.jpg')",
            backgroundPosition: "left center",
          }}
        />

        {/* Soft overlays - reduced opacity so image is visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7FCFF]/70 via-[#F7FCFF]/45 to-[#F7FCFF]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/25 to-[#E9F5FF]/62" />

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
          className="absolute -left-48 top-[-160px] h-[560px] w-[560px] rounded-full bg-[#164B73]/14 blur-3xl"
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
          className="absolute bottom-[-220px] right-[-220px] h-[640px] w-[640px] rounded-full bg-[#87B9D8]/18 blur-3xl"
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#164B73]/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-10 border-b border-[#164B73]/20 pb-14 lg:grid-cols-[0.68fr_0.32fr] lg:items-end"
        >
          <motion.div variants={fadeUp}>
            <div className="mb-6 inline-flex rounded-full border border-[#164B73]/18 bg-white/65 px-4 py-2 shadow-sm backdrop-blur-xl">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#164B73] sm:text-xs">
                Industries We Create Videos For
              </p>
            </div>

            <h2 className="max-w-5xl text-[36px] font-black leading-[1] tracking-[-0.055em] text-[#06213D] sm:text-[52px] md:text-[72px]">
              AI Video & Video Editing for
              <span className="block bg-gradient-to-r from-[#06213D] via-[#164B73] to-[#6FA6C9] bg-clip-text text-transparent">
                industry-specific brand content.
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="lg:text-right"
          >
            <p className="text-sm font-medium leading-7 text-[#395B74] sm:text-base">
              Every industry requires a different video style. Fashion needs
              visual mood, hospitality needs ambience, events need energy,
              products need clarity and luxury brands need refined cinematic
              storytelling.
            </p>

            <div className="mt-6 flex items-center gap-3 lg:justify-end">
              <span className="h-px w-16 bg-[#164B73]/35" />

              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#164B73]">
                08 Industry Categories
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Middle unique alignment */}
        <div className="mt-16 grid gap-14 lg:grid-cols-[0.44fr_0.56fr] lg:items-center">
          {/* Left orbit visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative mx-auto flex min-h-[520px] w-full max-w-[560px] items-center justify-center"
          >
            <div className="absolute h-[520px] w-[520px] rounded-full border border-[#164B73]/18 bg-white/22 backdrop-blur-[2px]" />
            <div className="absolute h-[390px] w-[390px] rounded-full border border-dashed border-[#164B73]/22" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 42,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[470px] w-[470px] rounded-full border border-[#6FA6C9]/20"
            />

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.25, 0.5, 0.25],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-[360px] w-[360px] rounded-full bg-[#6FA6C9]/22 blur-3xl"
            />

            {/* Center */}
            <div className="relative z-10 flex h-[280px] w-[280px] flex-col items-center justify-center rounded-full border border-white/85 bg-white/68 text-center shadow-2xl shadow-[#06213D]/14 backdrop-blur-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#164B73]">
                DTS Video Engine
              </p>

              <h3 className="mt-4 text-[40px] font-black leading-none tracking-[-0.06em] text-[#06213D]">
                AI Video
                <span className="block bg-gradient-to-r from-[#06213D] via-[#164B73] to-[#6FA6C9] bg-clip-text text-transparent">
                  +
                </span>
                Editing
              </h3>

              <p className="mt-5 max-w-[190px] text-sm leading-6 text-[#395B74]">
                Video production adapted for every industry, platform and
                campaign objective.
              </p>
            </div>

            {/* Orbit Labels */}
            {orbitLabels.map((item, index) => {
              const positions = [
                "left-1/2 top-0 -translate-x-1/2",
                "right-[9%] top-[14%]",
                "right-0 top-1/2 -translate-y-1/2",
                "right-[9%] bottom-[14%]",
                "left-1/2 bottom-0 -translate-x-1/2",
                "left-[9%] bottom-[14%]",
                "left-0 top-1/2 -translate-y-1/2",
                "left-[9%] top-[14%]",
              ];

              return (
                <motion.div
                  key={item}
                  animate={{
                    y: [0, index % 2 === 0 ? -10 : 10, 0],
                    scale: [1, 1.04, 1],
                  }}
                  transition={{
                    duration: 4 + index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute z-20 ${positions[index]}`}
                >
                  <div className="flex h-20 min-w-20 items-center justify-center rounded-full border border-[#164B73]/16 bg-white/70 px-5 text-center shadow-xl shadow-[#06213D]/10 backdrop-blur-xl">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#164B73]">
                      {item}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right industry index */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.07 }}
            className="border-y border-[#164B73]/20 bg-white/28 backdrop-blur-[2px]"
          >
            {industries.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="group relative grid gap-5 border-b border-[#164B73]/16 py-7 last:border-b-0 md:grid-cols-[0.12fr_0.34fr_0.54fr] md:items-start md:gap-7"
              >
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#164B73]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="text-[26px] font-black leading-tight tracking-[-0.045em] text-[#06213D] transition-colors duration-500 group-hover:text-[#164B73] sm:text-[34px]">
                  {item.title}
                </h3>

                <p className="max-w-2xl text-sm leading-7 text-[#395B74] sm:text-base">
                  {item.text}
                </p>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#06213D] via-[#164B73] to-[#6FA6C9] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}