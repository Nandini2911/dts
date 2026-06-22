"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const requirements = [
  {
    title: "Brand Information",
    code: "BRAND",
    text: "Share your brand name, industry, target audience, logo, brand colours, fonts, visual guidelines and any existing marketing or video assets.",
  },
  {
    title: "Video Objective",
    code: "GOAL",
    text: "Tell us whether the video is for brand awareness, product promotion, lead generation, social media engagement, an event, a launch or business communication.",
  },
  {
    title: "Product, Service or Footage",
    code: "ASSETS",
    text: "Provide product images, service details, raw footage, interview clips, event recordings, screen recordings or other assets that need to appear in the final video.",
  },
  {
    title: "Creative References",
    code: "STYLE",
    text: "Share reference videos, moodboards, editing styles, AI visual examples, pacing preferences, music direction or brand films that match the look you want.",
  },
  {
    title: "Video Format & Duration",
    code: "FORMAT",
    text: "Confirm the required duration and formats such as 9:16 for Reels, 16:9 for YouTube, 4:5 for social feeds, 1:1 for square posts or custom event-screen dimensions.",
  },
  {
    title: "Script, Voiceover & CTA",
    code: "COPY",
    text: "Share the script, key message, voiceover copy, captions, on-screen text, offer details, call to action and any mandatory information that must appear.",
  },
  {
    title: "Deadline & Deliverables",
    code: "DELIVERY",
    text: "Confirm the deadline, number of videos, required cutdowns, language versions, revision expectations and where each final edit will be published or displayed.",
  },
];

const quickList = [
  "Brand Assets",
  "Video Objective",
  "Raw Footage",
  "References",
  "Script or Brief",
  "Video Format",
  "CTA",
  "Deadline",
];

export default function AIVideoVFXRequirements() {
  return (
    <section
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#F7FAFF] via-white to-[#EAF3FF] px-4 py-24 text-[#0D2444] sm:px-6 lg:px-8"
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
    >
      {/* Clean premium background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(98,136,185,0.18),transparent_30%),radial-gradient(circle_at_86%_20%,rgba(49,94,145,0.10),transparent_34%)]" />
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#6288B9]/25 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#6288B9]/20 to-transparent" />
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
            className="mx-auto mb-6 inline-flex rounded-full border border-[#6288B9]/20 bg-white px-4 py-2 shadow-sm"
          >
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#315E91] sm:text-xs">
              Project Requirements
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-[38px] font-black leading-[0.98] tracking-[-0.06em] text-[#0D2444] sm:text-[56px] md:text-[78px]"
          >
            What we need to start your
            <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              AI Video & Video Editing project.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-[#49617F] sm:text-base"
          >
            Clear project inputs help us plan the AI visuals, script, editing
            style, pacing, motion graphics, sound design and final
            platform-ready video deliverables.
          </motion.p>
        </motion.div>

        {/* Briefing desk layout */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.44fr_0.56fr] lg:items-start">
          {/* Left document stack */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:sticky lg:top-28"
          >
            <div className="relative min-h-[650px]">
              {/* Back papers */}
              <div className="absolute left-8 top-8 h-[540px] w-[86%] rotate-[-5deg] rounded-[2.5rem] border border-[#6288B9]/18 bg-[#EAF3FF] shadow-xl shadow-[#0D2444]/8" />
              <div className="absolute left-5 top-4 h-[560px] w-[88%] rotate-[4deg] rounded-[2.5rem] border border-[#6288B9]/18 bg-white shadow-xl shadow-[#0D2444]/8" />

              {/* Main paper */}
              <div className="relative overflow-hidden rounded-[2.8rem] border border-[#6288B9]/20 bg-white p-7 shadow-2xl shadow-[#0D2444]/12">
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#F7FAFF] to-transparent" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between border-b border-[#6288B9]/18 pb-5">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#6288B9]">
                        AI Video & Editing Brief
                      </p>

                      <h3 className="mt-2 text-[34px] font-black leading-none tracking-[-0.055em] text-[#0D2444]">
                        Input Checklist
                      </h3>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0D2444]">
                      <p className="text-[10px] font-black uppercase tracking-[0.12em] text-white">
                        DTS
                      </p>
                    </div>
                  </div>

                  <div className="mt-7">
                    <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#6288B9]">
                      Quick Checklist
                    </p>

                    <div className="mt-5 grid gap-3">
                      {quickList.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -18 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.05,
                            ease: "easeOut",
                          }}
                          className="group flex items-center justify-between border-b border-[#6288B9]/14 pb-3"
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#6288B9]/25 bg-[#F7FAFF] text-[10px] font-black text-[#315E91]">
                              {index + 1}
                            </span>

                            <p className="text-sm font-black uppercase tracking-[0.12em] text-[#0D2444]">
                              {item}
                            </p>
                          </div>

                          <span className="h-2 w-2 rounded-full bg-[#6288B9]/50 transition-all duration-500 group-hover:bg-[#0D2444]" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-9 overflow-hidden rounded-[2rem] bg-[#0D2444] p-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(191,234,255,0.24),transparent_30%)]" />

                    <div className="relative z-10">
                      <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#BFEAFF]">
                        Start Point
                      </p>

                      <p className="mt-3 text-[32px] font-black leading-tight tracking-[-0.05em] text-white">
                        You do not need a finished script or complete footage to
                        begin.
                      </p>

                      <p className="mt-4 text-sm leading-7 text-white/62">
                        Send us your objective, brand assets, available footage
                        and visual references. We can help develop the concept,
                        script, AI visuals and professional editing direction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right requirement files */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.08 }}
            className="grid gap-4"
          >
            {requirements.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-[2.2rem] border border-[#6288B9]/18 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#0D2444]/25 hover:shadow-2xl hover:shadow-[#0D2444]/10"
              >
                <div className="grid gap-5 md:grid-cols-[0.18fr_0.32fr_0.5fr] md:items-start">
                  <div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F7FAFF] transition-all duration-500 group-hover:bg-[#0D2444]">
                      <p className="text-sm font-black text-[#315E91] transition-colors duration-500 group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#6288B9]">
                      {item.code}
                    </p>

                    <h3 className="mt-3 text-[30px] font-black leading-[0.98] tracking-[-0.055em] text-[#0D2444] transition-colors duration-500 group-hover:text-[#315E91] sm:text-[38px]">
                      {item.title}
                    </h3>
                  </div>

                  <div>
                    <p className="text-sm leading-7 text-[#49617F] sm:text-base">
                      {item.text}
                    </p>

                    <div className="mt-5 h-px w-14 bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] transition-all duration-500 group-hover:w-32" />
                  </div>
                </div>

                <span className="pointer-events-none absolute -right-4 -top-5 text-[100px] font-black leading-none tracking-[-0.08em] text-[#0D2444]/[0.035] transition-colors duration-500 group-hover:text-[#315E91]/10">
                  {item.code}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}