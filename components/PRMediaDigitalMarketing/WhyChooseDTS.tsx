"use client";

import { motion } from "framer-motion";

type Reason = {
  title: string;
  description: string;
  short: string;
};

const reasons: Reason[] = [
  {
    title: "Integrated PR & Digital Approach",
    short: "Integrated",
    description:
      "We combine public relations, media management, social media, SEO, content, influencer marketing and paid campaigns instead of treating every service separately.",
  },
  {
    title: "Strategy Before Execution",
    short: "Strategy",
    description:
      "Every campaign begins with brand understanding, audience mapping, communication goals, platform selection and campaign direction.",
  },
  {
    title: "Media & Brand Communication Experience",
    short: "Media",
    description:
      "We understand how to shape brand stories, press communication, media angles, launch announcements, event visibility and reputation-focused messaging.",
  },
  {
    title: "Creative + Performance Thinking",
    short: "Performance",
    description:
      "Our work balances premium creative communication with practical digital outcomes such as reach, engagement, search visibility, inquiries and conversions.",
  },
  {
    title: "Support For Multiple Industries",
    short: "Industries",
    description:
      "We work with hospitality brands, events, luxury businesses, startups, corporate brands, public personalities, lifestyle brands and local businesses.",
  },
  {
    title: "End-To-End Campaign Handling",
    short: "End-To-End",
    description:
      "From planning and content direction to media outreach, influencer coordination, digital execution and reporting, we manage the complete communication flow.",
  },
];

const advantagePoints = ["Visibility", "Credibility", "Consistency", "Growth"];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyChooseDTS() {
  return (
    <section
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
      className="relative overflow-hidden bg-[#0D2444] px-6 py-24 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D2444] via-[#12365F] to-[#6288B9]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.18),transparent_34%),radial-gradient(circle_at_85%_78%,rgba(255,255,255,0.12),transparent_34%)]" />

      <div className="absolute inset-0 opacity-[0.07]">
        <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:74px_74px]" />
      </div>

      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.22, 0.46, 0.22] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-44 top-24 h-[460px] w-[460px] rounded-full bg-white/10 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.42, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-44 bottom-24 h-[460px] w-[460px] rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.14 }}
          className="mx-auto mb-20 max-w-5xl text-center"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-white/60"
          >
            Why Choose Us
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl"
          >
            Why Choose Double Trouble Studio For PR & Digital Marketing?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/72 md:text-lg"
          >
            We help brands communicate better, become more visible and build a
            stronger digital presence through a connected PR, media and
            marketing approach.
          </motion.p>
        </motion.div>

        {/* Editorial Manifesto Layout */}
        <div className="relative">
          {/* Large Background Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="pointer-events-none absolute -top-12 left-1/2 hidden -translate-x-1/2 text-[150px] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.035] lg:block"
          >
            DTS
          </motion.div>

          {/* Top Manifesto Statement */}
          <motion.div
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative border-y border-white/15 py-12 md:py-16"
          >
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-white/48">
                  DTS Advantage
                </p>

                <h3 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-tight text-white md:text-7xl">
                  One brand system.
                  <span className="block text-white/55">
                    Not scattered services.
                  </span>
                </h3>
              </div>

              <div>
                <p className="max-w-2xl text-base leading-8 text-white/72 md:text-lg">
                  Your PR, media, content, social, SEO, influencers, paid ads
                  and reporting work better when they are planned as one
                  connected communication system.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {advantagePoints.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.48,
                        ease: "easeOut",
                        delay: index * 0.07,
                      }}
                      className="group flex items-center gap-4 border-t border-white/15 pt-4"
                    >
                      <motion.span
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                        className="h-2.5 w-2.5 rounded-full bg-white/70"
                      />

                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/76 transition duration-300 group-hover:text-white">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Advantage Timeline */}
          <div className="relative mt-10">
            {/* Vertical Progress Line */}
            <div className="absolute left-0 top-0 hidden h-full w-px bg-white/12 lg:block" />

            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="absolute left-0 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-white/75 via-white/35 to-transparent lg:block"
            />

            <div className="divide-y divide-white/12 border-y border-white/12 lg:ml-16">
              {reasons.map((reason, index) => (
                <motion.article
                  key={reason.title}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{
                    duration: 0.68,
                    ease: "easeOut",
                    delay: index * 0.06,
                  }}
                  className="group relative grid gap-8 py-10 md:grid-cols-[0.22fr_0.34fr_0.44fr] md:items-start md:py-12"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.65 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.08,
                    }}
                    className="absolute -left-[73px] top-12 hidden h-4 w-4 rounded-full bg-white shadow-[0_0_0_10px_rgba(255,255,255,0.08)] lg:block"
                  />

                  {/* Number + Short */}
                  <div>
                    <p className="text-7xl font-black leading-none tracking-[-0.08em] text-white/10 transition duration-500 group-hover:text-white/18 md:text-8xl">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <div className="mt-5 flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-white/60" />
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-white/48">
                        {reason.short}
                      </p>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <motion.h3
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.25 }}
                      className="max-w-xl text-3xl font-black leading-tight tracking-tight text-white md:text-5xl"
                    >
                      {reason.title}
                    </motion.h3>
                  </div>

                  {/* Description */}
                  <div>
                    <p className="max-w-2xl text-base leading-8 text-white/68 md:text-lg">
                      {reason.description}
                    </p>

                    <div className="mt-7 flex items-center gap-4">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.65,
                          ease: "easeOut",
                          delay: 0.12,
                        }}
                        className="h-px flex-1 origin-left bg-gradient-to-r from-white/50 via-white/20 to-transparent"
                      />

                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/34">
                        PR • Media • Digital
                      </p>
                    </div>
                  </div>

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-white via-white/50 to-transparent transition-all duration-700 group-hover:w-full" />
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}