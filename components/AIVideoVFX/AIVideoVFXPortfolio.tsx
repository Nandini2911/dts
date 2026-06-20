"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const portfolioItems = [
  {
    title: "AI Product Launch Film",
    category: "Product Campaign",
    text: "A premium product-focused video concept using AI visuals, cinematic movement, CGI-style scenes and platform-ready edits.",
  },
  {
    title: "CGI Social Media Ad",
    category: "Digital Ad",
    text: "A scroll-stopping CGI-style visual campaign designed for reels, paid ads, launch announcements and brand awareness.",
  },
  {
    title: "Luxury Brand Visual",
    category: "Luxury Film",
    text: "A refined AI and VFX-led visual direction for jewellery, fashion, beauty, lifestyle and premium brand campaigns.",
  },
  {
    title: "Hospitality Launch Video",
    category: "Hotel / Restaurant",
    text: "A cinematic launch video for cafes, hotels, lounges, restaurants and hospitality experiences with ambience-led storytelling.",
  },
  {
    title: "Event Teaser Film",
    category: "Events",
    text: "A high-energy teaser video for launches, artist announcements, luxury events, club nights, concerts and invite campaigns.",
  },
  {
    title: "Website Hero Video",
    category: "Web Visual",
    text: "A looping visual asset for websites, landing pages and digital campaigns with strong brand mood and clean motion.",
  },
];

const showcaseTags = [
  "AI Visuals",
  "CGI Ads",
  "VFX Polish",
  "Brand Films",
  "Reels",
  "Launches",
];

export default function AIVideoVFXPortfolio() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#061D38] px-4 py-24 text-white sm:px-6 lg:px-8"
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
    >
      {/* Premium dark background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,#061D38_0%,#0D2444_48%,#123B68_100%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(191,234,255,0.16),transparent_30%),radial-gradient(circle_at_86%_24%,rgba(103,183,232,0.13),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.08),transparent_42%)]" />

        <motion.div
          animate={{
            x: [0, 42, -24, 0],
            y: [0, -28, 20, 0],
            scale: [1, 1.08, 0.98, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-56 top-[-200px] h-[620px] w-[620px] rounded-full bg-[#67B7E8]/14 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -38, 26, 0],
            y: [0, 30, -22, 0],
            scale: [1, 0.96, 1.08, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-240px] bottom-[-240px] h-[680px] w-[680px] rounded-full bg-[#BFEAFF]/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: ["-35%", "125%"],
            opacity: [0, 0.22, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 h-full w-[280px] rotate-12 bg-gradient-to-r from-transparent via-white/16 to-transparent blur-lg"
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#67B7E8]/35 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-10 border-b border-white/15 pb-14 lg:grid-cols-[0.7fr_0.3fr] lg:items-end"
        >
          <motion.div variants={fadeUp}>
            <div className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#BFEAFF] sm:text-xs">
                Portfolio Style
              </p>
            </div>

            <h2 className="max-w-5xl text-[38px] font-black leading-[0.98] tracking-[-0.06em] text-white sm:text-[56px] md:text-[78px]">
              AI Video & VFX work
              <span className="block bg-gradient-to-r from-white via-[#BFEAFF] to-[#67B7E8] bg-clip-text text-transparent">
                built for campaigns.
              </span>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-sm font-medium leading-7 text-white/64 sm:text-base lg:text-right"
          >
            Our portfolio direction includes product launches, CGI ads, luxury
            videos, hospitality films, event teasers and website visuals.
          </motion.p>
        </motion.div>

        {/* Premium showcase wall */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:gap-14">
          {/* Left visual reel panel */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:sticky lg:top-28 lg:h-fit"
          >
            <div className="relative overflow-hidden rounded-[3rem] border border-white/15 bg-white/10 p-7 shadow-2xl shadow-black/20 backdrop-blur-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_18%,rgba(191,234,255,0.22),transparent_30%),radial-gradient(circle_at_82%_82%,rgba(98,136,185,0.16),transparent_34%)]" />

              <div className="relative z-10">
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#BFEAFF]">
                  Visual Showcase
                </p>

                <h3 className="mt-5 text-[46px] font-black leading-[0.9] tracking-[-0.07em] text-white sm:text-[68px]">
                  Made
                  <span className="block text-white/45">to look</span>
                  <span className="block bg-gradient-to-r from-white via-[#BFEAFF] to-[#67B7E8] bg-clip-text text-transparent">
                    premium.
                  </span>
                </h3>

                <p className="mt-6 text-sm leading-7 text-white/62 sm:text-base">
                  Every project direction is planned to feel campaign-ready,
                  visually modern and suitable for digital platforms.
                </p>

                {/* Reel mockup stack */}
                <div className="relative mt-10 min-h-[430px]">
                  <motion.div
                    animate={{ rotate: [-4, 0, -4], y: [0, -8, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-4 top-10 h-[310px] w-[190px] rounded-[2.2rem] border border-white/15 bg-white/10 p-3 backdrop-blur-xl"
                  >
                    <div className="h-full rounded-[1.6rem] bg-[#123B68]" />
                  </motion.div>

                  <motion.div
                    animate={{ rotate: [5, 0, 5], y: [0, 10, 0] }}
                    transition={{
                      duration: 5.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-4 top-24 h-[270px] w-[170px] rounded-[2rem] border border-white/15 bg-white/10 p-3 backdrop-blur-xl"
                  >
                    <div className="h-full rounded-[1.45rem] bg-[#315E91]" />
                  </motion.div>

                  <div className="absolute left-1/2 top-0 h-[390px] w-[225px] -translate-x-1/2 rounded-[2.6rem] border border-white/20 bg-white/12 p-3 shadow-2xl shadow-black/25 backdrop-blur-2xl">
                    <div className="relative h-full overflow-hidden rounded-[2rem] bg-[#071A33]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(191,234,255,0.28),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(103,183,232,0.22),transparent_36%)]" />

                      <motion.div
                        animate={{ x: ["-40%", "130%"] }}
                        transition={{
                          duration: 4.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute top-0 h-full w-24 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md"
                      />

                      <div className="relative z-10 flex h-full flex-col justify-between p-5">
                        <div className="flex items-center justify-between">
                          <span className="h-2 w-2 rounded-full bg-[#BFEAFF]" />
                          <p className="text-[8px] font-black uppercase tracking-[0.18em] text-[#BFEAFF]">
                            Preview
                          </p>
                        </div>

                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#BFEAFF]">
                            AI + VFX
                          </p>

                          <h4 className="mt-3 text-[46px] font-black leading-none tracking-[-0.07em] text-white">
                            Reel
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 border-t border-white/15 pt-6">
                  {showcaseTags.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-white/75"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right portfolio panels */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.08 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className={`group relative overflow-hidden rounded-[2.4rem] border border-white/15 bg-white/[0.08] p-[1px] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl hover:shadow-black/20 ${
                  index === 0 || index === 5 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="relative min-h-[295px] rounded-[2.35rem] p-6">
                  <span className="pointer-events-none absolute -right-4 bottom-[-26px] text-[120px] font-black leading-none tracking-[-0.08em] text-white/[0.035] transition-colors duration-500 group-hover:text-[#BFEAFF]/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-8 flex items-center justify-between gap-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#BFEAFF]/75">
                          {item.category}
                        </p>

                        <span className="h-2.5 w-2.5 rounded-full bg-[#BFEAFF]/70" />
                      </div>

                      <h3 className="text-[32px] font-black leading-[0.98] tracking-[-0.055em] text-white transition-colors duration-500 group-hover:text-[#BFEAFF] sm:text-[42px]">
                        {item.title}
                      </h3>
                    </div>

                    <div className="mt-8">
                      <div className="mb-5 h-px w-14 bg-gradient-to-r from-white via-[#BFEAFF] to-[#67B7E8] transition-all duration-500 group-hover:w-28" />

                      <p className="text-sm leading-7 text-white/62 transition-colors duration-500 group-hover:text-white/78">
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