"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const formats = [
  {
    size: "9:16",
    title: "Vertical Video Editing",
    use: "Instagram Reels, YouTube Shorts, Stories, vertical ads",
    text: "Ideal for AI-generated videos and professionally edited mobile-first content designed to capture attention quickly in vertical social media feeds.",
  },
  {
    size: "4:5",
    title: "Social Feed Videos",
    use: "Instagram feed, Facebook feed, paid ads, campaign posts",
    text: "A high-visibility social format for AI product videos, brand campaigns, promotional edits and advertisements that need more space within the feed.",
  },
  {
    size: "1:1",
    title: "Square Video Edits",
    use: "Feed posts, paid creatives, previews, product campaigns",
    text: "A versatile format for AI video campaigns, product demonstrations, service explainers, announcements and professionally edited social media content.",
  },
  {
    size: "16:9",
    title: "Wide-Screen Video Editing",
    use: "YouTube, websites, presentations, event screens, brand films",
    text: "Best suited for AI brand films, YouTube videos, commercial edits, website videos, event presentations and long-form visual storytelling.",
  },
];

const outputs = [
  "Instagram Reels",
  "YouTube Shorts",
  "Social Ads",
  "Brand Films",
  "Product Videos",
  "YouTube Videos",
  "Website Videos",
  "Event Screens",
];

export default function AIVideoVFXFormats() {
  return (
    <section
      className="relative isolate overflow-hidden bg-white px-4 py-24 text-[#0D2444] sm:px-6 lg:px-8"
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
    >
      {/* Pure white background */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-white" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-10 border-b border-[#6288B9]/20 pb-14 lg:grid-cols-[0.72fr_0.28fr] lg:items-end"
        >
          <motion.div variants={fadeUp}>
            <div className="mb-6 inline-flex rounded-full border border-[#6288B9]/20 bg-[#F7FAFF] px-4 py-2 shadow-sm">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#315E91] sm:text-xs">
                AI Video & Editing Formats
              </p>
            </div>

            <h2 className="max-w-5xl text-[38px] font-black leading-[0.98] tracking-[-0.06em] text-[#0D2444] sm:text-[56px] md:text-[78px]">
              Video formats created for
              <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
                every digital platform.
              </span>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-sm font-medium leading-7 text-[#49617F] sm:text-base lg:text-right"
          >
            Every AI-generated video and professionally edited project can be
            adapted into platform-ready formats for social media, YouTube,
            websites, advertisements, presentations and event screens.
          </motion.p>
        </motion.div>

        {/* Unique format stage */}
        <div className="mt-16 grid gap-14 lg:grid-cols-[0.42fr_0.58fr] lg:items-center lg:gap-16">
          {/* Left device frame visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative mx-auto flex min-h-[620px] w-full max-w-[560px] items-center justify-center"
          >
            {/* Wide frame */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-16 hidden h-[230px] w-[360px] rounded-[2rem] border border-[#6288B9]/18 bg-[#F7FAFF] p-3 shadow-2xl shadow-[#0D2444]/10 sm:block"
            >
              <div className="h-full rounded-[1.5rem] bg-[#0D2444]">
                <div className="flex h-full items-center justify-center">
                  <p className="text-[54px] font-black tracking-[-0.06em] text-white">
                    16:9
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Square frame */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-12 left-0 hidden h-[230px] w-[230px] rounded-[2rem] border border-[#6288B9]/18 bg-[#F7FAFF] p-3 shadow-2xl shadow-[#0D2444]/10 sm:block"
            >
              <div className="flex h-full items-center justify-center rounded-[1.5rem] bg-[#315E91]">
                <p className="text-[48px] font-black tracking-[-0.06em] text-white">
                  1:1
                </p>
              </div>
            </motion.div>

            {/* Main vertical frame */}
            <div className="relative z-10 h-[560px] w-[280px] rounded-[3rem] border border-[#6288B9]/20 bg-[#F7FAFF] p-3 shadow-2xl shadow-[#0D2444]/12">
              <div className="relative h-full overflow-hidden rounded-[2.4rem] bg-[#0D2444]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_22%,rgba(191,234,255,0.28),transparent_30%),radial-gradient(circle_at_75%_80%,rgba(103,183,232,0.22),transparent_35%)]" />

                <motion.div
                  animate={{ x: ["-40%", "130%"] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 h-full w-24 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md"
                />

                <div className="relative z-10 flex h-full flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-white/80" />
                      <span className="h-2 w-2 rounded-full bg-white/45" />
                      <span className="h-2 w-2 rounded-full bg-white/25" />
                    </div>

                    <p className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[8px] font-black uppercase tracking-[0.18em] text-[#BFEAFF]">
                      Video Preview
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#BFEAFF]">
                      Primary Vertical Format
                    </p>

                    <h3 className="mt-4 text-[72px] font-black leading-none tracking-[-0.075em] text-white">
                      9:16
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-white/62">
                      Created for AI Reels, professionally edited Shorts,
                      Stories, vertical advertisements and mobile-first
                      campaigns.
                    </p>
                  </div>

                  <div className="border-t border-white/15 pt-5">
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#BFEAFF]">
                      Edited & Platform Ready
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right format index */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.08 }}
            className="border-y border-[#6288B9]/20 bg-transparent"
          >
            {formats.map((item) => (
              <motion.div
                key={item.size}
                variants={fadeUp}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="group relative grid gap-5 border-b border-[#6288B9]/16 py-8 last:border-b-0 md:grid-cols-[0.18fr_0.34fr_0.48fr] md:items-start md:gap-8"
              >
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#6288B9]">
                    Format
                  </p>

                  <p className="mt-2 text-[44px] font-black leading-none tracking-[-0.07em] text-[#0D2444]/20 transition-colors duration-500 group-hover:text-[#315E91]/40">
                    {item.size}
                  </p>
                </div>

                <div>
                  <h3 className="text-[32px] font-black leading-[0.98] tracking-[-0.055em] text-[#0D2444] transition-colors duration-500 group-hover:text-[#315E91] sm:text-[44px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#6288B9]">
                    {item.use}
                  </p>
                </div>

                <div>
                  <p className="max-w-2xl text-sm leading-7 text-[#49617F] sm:text-base">
                    {item.text}
                  </p>

                  <div className="mt-6 h-px w-16 bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] transition-all duration-500 group-hover:w-32" />
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Output ticker */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mt-16 overflow-hidden border-y border-[#6288B9]/20 py-8"
        >
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#6288B9]">
                Video Deliverables
              </p>

              <h3 className="mt-2 text-[30px] font-black tracking-[-0.045em] text-[#0D2444] sm:text-[42px]">
                One master video. Multiple platform-ready edits.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#49617F] sm:text-right">
              AI videos and professionally edited content can be delivered as
              full-length films, cutdowns, Reels, Shorts, advertisements,
              website videos and event-screen versions.
            </p>
          </div>

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max items-center gap-6"
          >
            {[...outputs, ...outputs].map((item, index) => (
              <div key={`${item}-${index}`} className="flex items-center gap-6">
                <span className="text-[34px] font-black leading-none tracking-[-0.055em] text-[#0D2444]/85 sm:text-[48px]">
                  {item}
                </span>

                <span className="h-2 w-2 rounded-full bg-[#315E91]/60" />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}