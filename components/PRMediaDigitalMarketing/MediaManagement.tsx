"use client";

import { motion } from "framer-motion";

type MediaService = {
  title: string;
  description: string;
};

const mediaServices: MediaService[] = [
  {
    title: "Media Outreach",
    description:
      "We help brands connect with relevant publications, journalists, digital platforms and media professionals based on their industry and campaign objective.",
  },
  {
    title: "Media Coverage Planning",
    description:
      "We identify media angles, story opportunities, announcement timelines and publication categories that can support brand visibility.",
  },
  {
    title: "Interview Coordination",
    description:
      "We coordinate interviews, quotes, features, media interactions and spokesperson opportunities for founders, leaders, artists and brand representatives.",
  },
  {
    title: "Press Conference Management",
    description:
      "We support press meets, launch announcements, media briefings, media desk coordination, invite management and coverage planning.",
  },
  {
    title: "Media Kit Development",
    description:
      "We create brand media kits, press notes, founder profiles, company factsheets, event briefs, campaign documents and spokesperson notes.",
  },
  {
    title: "Post-Coverage Reporting",
    description:
      "We help track media coverage, links, mentions, publication details and communication outcomes after PR campaigns.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function MediaManagement() {
  return (
    <section
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
      className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24"
    >
      {/* Light Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8FAFC] to-[#EAF1F8]" />

      <div className="absolute inset-0 opacity-[0.55]">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(13,36,68,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(13,36,68,0.08)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#6288B9]/15 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#0D2444]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.14 }}
          className="mx-auto mb-16 max-w-5xl text-center"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-5 inline-flex rounded-full bg-gradient-to-r from-[#0D2444] to-[#6288B9] px-5 py-3 shadow-[0_14px_40px_rgba(13,36,68,0.22)]"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white">
              Media Management
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-4xl font-black leading-tight tracking-tight text-[#0D2444] md:text-6xl"
          >
            Media Management Built Around{" "}
            <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              Story, Timing & Coverage
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg"
          >
            We help brands plan, coordinate and track communication with
            relevant journalists, publications, digital portals, editors, media
            houses and news platforms.
          </motion.p>
        </motion.div>

        {/* Media Flow Layout */}
        <div className="relative overflow-hidden rounded-[52px] border border-slate-200 bg-white/72 p-5 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-8">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#6288B9]/12 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-white/70 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
            {/* Left Sticky Index */}
            <motion.div
              initial={{ opacity: 0, x: -34 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#0D2444] via-[#244A78] to-[#6288B9] p-8 text-white shadow-2xl lg:sticky lg:top-24 lg:self-start"
            >
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
              <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/65">
                  Media Flow
                </p>

                <h3 className="mt-5 text-4xl font-black leading-[1.05] md:text-5xl">
                  Right story.
                  <span className="block text-white/72">Right platform.</span>
                  Right result.
                </h3>

                <p className="mt-6 text-sm leading-7 text-white/74 md:text-base">
                  Media management is a structured flow — from finding the story
                  angle to preparing the material, coordinating outreach and
                  tracking coverage after the campaign.
                </p>

                <div className="mt-9 grid gap-4">
                  {[
                    { value: "06", label: "Media Service Stages" },
                    { value: "PR+", label: "Coverage Planning" },
                    { value: "360°", label: "Media Coordination" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between border-t border-white/15 pt-5"
                    >
                      <p className="text-3xl font-black text-white">
                        {item.value}
                      </p>
                      <p className="max-w-[150px] text-right text-xs font-bold uppercase tracking-[0.15em] text-white/55">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Flow Rows */}
            <div className="relative">
              <div className="absolute left-7 top-0 hidden h-full w-px bg-gradient-to-b from-[#6288B9]/40 via-[#0D2444]/20 to-transparent md:block" />

              <div className="space-y-5">
                {mediaServices.map((service, index) => (
                  <motion.article
                    key={service.title}
                    initial={{ opacity: 0, x: 36 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.22 }}
                    transition={{
                      duration: 0.62,
                      ease: "easeOut",
                      delay: index * 0.07,
                    }}
                    className="group relative grid gap-5 md:grid-cols-[74px_1fr]"
                  >
                    {/* Number Node */}
                    <div className="relative z-10 flex justify-start">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.25 }}
                        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0D2444] to-[#6288B9] text-sm font-black text-white shadow-[0_16px_40px_rgba(13,36,68,0.18)]"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </motion.div>
                    </div>

                    {/* Flow Content */}
                    <motion.div
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.25 }}
                      className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white/92 px-6 py-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)] backdrop-blur transition duration-500 group-hover:border-[#6288B9]/35 group-hover:shadow-[0_24px_70px_rgba(15,23,42,0.11)]"
                    >
                      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#0D2444] to-[#6288B9]" />
                      <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#6288B9]/0 blur-3xl transition duration-500 group-hover:bg-[#6288B9]/18" />

                      <div className="relative grid gap-4 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
                        <div>
                          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#6288B9]">
                            Media Stage {String(index + 1).padStart(2, "0")}
                          </p>

                          <h3 className="text-2xl font-black leading-tight text-[#0D2444] md:text-3xl">
                            {service.title}
                          </h3>
                        </div>

                        <p className="text-sm leading-7 text-slate-600 md:text-base">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}