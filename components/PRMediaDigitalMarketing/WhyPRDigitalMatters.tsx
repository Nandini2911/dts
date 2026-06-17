"use client";

import { motion } from "framer-motion";

type MatterPoint = {
  title: string;
  description: string;
  label: string;
};

const matterPoints: MatterPoint[] = [
  {
    title: "Builds Brand Visibility",
    label: "Visibility",
    description:
      "PR and digital marketing help your brand become more visible across search engines, media platforms, social media and public conversations.",
  },
  {
    title: "Strengthens Credibility",
    label: "Trust",
    description:
      "Media coverage, consistent content and strong brand communication help audiences trust your business.",
  },
  {
    title: "Improves Online Discoverability",
    label: "Search",
    description:
      "SEO, content marketing and digital campaigns help potential customers find your brand when they search online.",
  },
  {
    title: "Supports Lead Generation",
    label: "Leads",
    description:
      "Paid ads, landing pages, SEO and social media campaigns can support inquiries, bookings, sales and customer acquisition.",
  },
  {
    title: "Creates Media & Social Conversations",
    label: "Buzz",
    description:
      "PR campaigns, influencer collaborations and event promotions help create conversations around your brand.",
  },
  {
    title: "Protects Brand Reputation",
    label: "ORM",
    description:
      "Clear communication, reputation monitoring and strategic messaging help brands manage public perception more effectively.",
  },
  {
    title: "Connects Brand Story With Audience",
    label: "Story",
    description:
      "Strong communication makes your brand easier to understand, remember and engage with.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyPRDigitalMatters() {
  return (
    <section
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
      className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24 text-[#0F172A]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_45%,#EAF1F8_100%)]" />

      <div className="absolute inset-0 opacity-[0.45]">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(13,36,68,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(13,36,68,0.07)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.58, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-180px] top-16 h-[440px] w-[440px] rounded-full bg-[#6288B9]/16 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.26, 0.5, 0.26] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-180px] bottom-16 h-[440px] w-[440px] rounded-full bg-[#0D2444]/10 blur-3xl"
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
            className="mb-5 inline-flex rounded-full border border-[#6288B9]/20 bg-white/80 px-5 py-2 shadow-sm backdrop-blur"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#6288B9]">
              Why It Matters
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-4xl font-black leading-tight tracking-tight text-[#0D2444] md:text-6xl"
          >
            Why PR & Digital Marketing{" "}
            <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              Matters For Brand Growth
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg"
          >
            A strong communication strategy helps your brand become visible,
            trusted, searchable and easier to engage with across media, social
            platforms, search engines and digital campaigns.
          </motion.p>
        </motion.div>

        {/* Brand Impact Radar */}
        <div className="relative overflow-hidden rounded-[56px] border border-slate-200 bg-white/78 p-5 shadow-[0_28px_100px_rgba(15,23,42,0.09)] backdrop-blur-xl md:p-8">
          <div className="absolute -right-40 -top-40 h-[460px] w-[460px] rounded-full bg-[#6288B9]/14 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[460px] w-[460px] rounded-full bg-white/80 blur-3xl" />

          {/* Top Formula Strip */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative mb-8 overflow-hidden rounded-[42px] bg-gradient-to-br from-[#0D2444] via-[#244A78] to-[#6288B9] p-8 text-white shadow-[0_24px_80px_rgba(13,36,68,0.22)] md:p-10"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="mb-5 text-sm font-bold uppercase tracking-[0.26em] text-white/65">
                  Brand Growth Formula
                </p>

                <h3 className="text-3xl font-black leading-tight md:text-5xl">
                  Credibility + Visibility + Discovery
                  <span className="block text-white/70">
                    = Stronger Brand Growth
                  </span>
                </h3>
              </div>

              <p className="text-base leading-8 text-white/76 md:text-lg">
                PR creates credibility. Media management creates visibility.
                Digital marketing creates search discovery, social reach,
                audience engagement and campaign performance.
              </p>
            </div>
          </motion.div>

          {/* Radar Grid Layout */}
          <div className="relative grid gap-6 lg:grid-cols-3">
            {/* Left Column */}
            <div className="grid gap-6">
              {matterPoints.slice(0, 2).map((point, index) => (
                <ImpactPanel key={point.title} point={point} index={index} />
              ))}
            </div>

            {/* Center Radar Core */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex min-h-[520px] items-center justify-center overflow-hidden rounded-[44px] border border-[#0D2444]/20 bg-[#0D2444] p-8 text-white shadow-[0_28px_90px_rgba(13,36,68,0.28)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(98,136,185,0.32),rgba(13,36,68,0.95)_55%,rgba(13,36,68,1)_100%)]" />
              <div className="absolute inset-8 rounded-full border border-white/10" />
              <div className="absolute inset-20 rounded-full border border-white/10" />
              <div className="absolute inset-32 rounded-full border border-white/10" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute h-[82%] w-[82%] rounded-full border border-dashed border-[#9DB8DA]/35"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="absolute h-[62%] w-[62%] rounded-full border border-dashed border-white/20"
              />

              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.65, 1, 0.65] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute h-44 w-44 rounded-full bg-[#6288B9]/20 blur-2xl"
              />

              <div className="relative z-10 flex h-56 w-56 flex-col items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-center backdrop-blur-xl">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9DB8DA]">
                  Impact Core
                </p>

                <h3 className="mt-4 text-4xl font-black leading-none">
                  PR
                  <span className="mx-2 text-white/35">+</span>
                  Digital
                </h3>

                <p className="mt-4 max-w-[160px] text-sm leading-6 text-white/62">
                  One connected growth communication system.
                </p>
              </div>
            </motion.div>

            {/* Right Column */}
            <div className="grid gap-6">
              {matterPoints.slice(2, 4).map((point, index) => (
                <ImpactPanel
                  key={point.title}
                  point={point}
                  index={index + 2}
                />
              ))}
            </div>

            {/* Bottom Wide Panels */}
            <div className="grid gap-6 lg:col-span-3 lg:grid-cols-3">
              {matterPoints.slice(4).map((point, index) => (
                <ImpactPanel
                  key={point.title}
                  point={point}
                  index={index + 4}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactPanel({
  point,
  index,
}: {
  point: MatterPoint;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.62,
        ease: "easeOut",
        delay: index * 0.06,
      }}
      whileHover={{ y: -8 }}
      className="group relative min-h-[250px] overflow-hidden rounded-[34px] border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.065)] transition duration-500 hover:border-[#6288B9]/35 hover:shadow-[0_28px_90px_rgba(13,36,68,0.12)]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0D2444] via-[#6288B9] to-transparent" />

      <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#6288B9]/0 blur-3xl transition duration-500 group-hover:bg-[#6288B9]/18" />

      <span className="pointer-events-none absolute right-6 top-5 text-7xl font-black leading-none text-[#0D2444]/5 transition duration-500 group-hover:text-[#6288B9]/12">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative">
        <div className="mb-6 flex items-center justify-between gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0D2444] to-[#6288B9] text-sm font-black text-white shadow-lg">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="rounded-full border border-[#6288B9]/20 bg-[#EAF1F8] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#6288B9]">
            {point.label}
          </span>
        </div>

        <h3 className="text-2xl font-black leading-tight text-[#0D2444] md:text-3xl">
          {point.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
          {point.description}
        </p>

        <div className="mt-7 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-[#6288B9]/60 to-transparent" />
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
            Impact
          </p>
        </div>
      </div>
    </motion.article>
  );
}