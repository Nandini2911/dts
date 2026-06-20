"use client";

import { motion } from "framer-motion";

type Requirement = {
  title: string;
  description: string;
  items: string[];
};

const requirements: Requirement[] = [
  {
    title: "Brand Details",
    description:
      "We begin by understanding your business identity, positioning, target audience and current communication status.",
    items: [
      "Brand name",
      "Website or social links",
      "Business category",
      "Target audience",
    ],
  },
  {
    title: "Campaign Objective",
    description:
      "Your campaign goal helps us decide the right mix of PR, media, social media, SEO, influencers and paid ads.",
    items: [
      "Brand launch",
      "Event promotion",
      "Lead generation",
      "Reputation building",
    ],
  },
  {
    title: "Current Digital Presence",
    description:
      "We review your existing online presence to understand what is working, what is missing and what needs improvement.",
    items: [
      "Instagram page",
      "Google profile",
      "Website pages",
      "Previous campaigns",
    ],
  },
  {
    title: "Media & PR Requirement",
    description:
      "For PR campaigns, we need clarity on your announcement, story angle, spokesperson and preferred media direction.",
    items: [
      "Press release topic",
      "Founder profile",
      "Media kit",
      "Announcement details",
    ],
  },
  {
    title: "Creative Assets",
    description:
      "Strong campaigns need the right visual and written assets for social media, press, ads and digital platforms.",
    items: [
      "Brand logo",
      "Photos or videos",
      "Product images",
      "Existing content",
    ],
  },
  {
    title: "Timeline & Budget",
    description:
      "Timeline and budget help us plan campaign phases, deliverables, ad spends, influencer strategy and reporting structure.",
    items: [
      "Campaign dates",
      "Launch timeline",
      "Monthly budget",
      "Expected outcomes",
    ],
  },
];

const stats = [
  { number: "06", label: "Input Categories" },
  { number: "24", label: "Key Details" },
  { number: "01", label: "Clear Strategy" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function StartRequirements() {
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
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(13,36,68,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(13,36,68,0.10)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(98,136,185,0.22),transparent_34%),radial-gradient(circle_at_84%_78%,rgba(13,36,68,0.10),transparent_32%)]" />

      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.28, 0.52, 0.28] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-[#6288B9]/20 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.24, 0.45, 0.24] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-40 bottom-24 h-96 w-96 rounded-full bg-[#0D2444]/10 blur-3xl"
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
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-[#6288B9]"
          >
            Information Required
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-4xl font-black leading-tight tracking-tight text-[#0D2444] md:text-6xl"
          >
            Information We Need To Start Your PR & Digital Marketing Campaign
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg"
          >
            Before we begin, we collect the right brand, campaign, audience,
            platform and creative information so the strategy is planned with
            clarity from day one.
          </motion.p>
        </motion.div>

        {/* Main Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass relative overflow-hidden rounded-[54px] p-5 shadow-2xl md:p-8"
        >
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, -18, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/70 blur-3xl"
          />

          <motion.div
            animate={{ x: [0, -20, 0], y: [0, 18, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#6288B9]/10 blur-3xl"
          />

          {/* Top Intro Strip */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative mb-8 overflow-hidden rounded-[42px] bg-gradient-to-br from-[#0D2444] via-[#244A78] to-[#6288B9] p-8 text-white shadow-xl md:p-10"
          >
            <div className="absolute inset-0 opacity-[0.16]">
              <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:48px_48px]" />
            </div>

            <motion.div
              animate={{ x: [0, 18, 0], y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl"
            />

            <motion.div
              animate={{ x: [0, -18, 0], y: [0, 14, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-white/10 blur-3xl"
            />

            <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: "easeOut" }}
              >
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                  Campaign Brief
                </p>

                <h3 className="text-3xl font-black leading-tight md:text-5xl">
                  The better the input, the sharper the campaign.
                </h3>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
                className="text-base leading-8 text-white/80 md:text-lg"
              >
                We use this information to understand your business, campaign
                objective, digital presence, PR requirement, creative assets and
                execution timeline before building the strategy.
              </motion.p>
            </div>
          </motion.div>

          {/* Stats Row */}
          <div className="relative mb-8 grid gap-4 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 26, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="rounded-[28px] border border-slate-200 bg-white/85 p-7 text-center shadow-[0_14px_45px_rgba(15,23,42,0.06)] backdrop-blur transition duration-500 hover:border-[#6288B9]/35 hover:shadow-[0_24px_70px_rgba(13,36,68,0.11)]"
              >
                <motion.p
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: 0.12 + index * 0.08,
                  }}
                  className="text-4xl font-black text-[#0D2444]"
                >
                  {stat.number}
                </motion.p>

                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6288B9]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Requirement Cards */}
          <div className="relative grid gap-6 lg:grid-cols-3">
            {requirements.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 34, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.62,
                  ease: "easeOut",
                  delay: index * 0.06,
                }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.07)] transition duration-500 hover:shadow-[0_30px_90px_rgba(15,23,42,0.12)] ${
                  index === 0 || index === 5 ? "lg:col-span-2" : ""
                }`}
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    ease: "easeOut",
                    delay: 0.15 + index * 0.06,
                  }}
                  className="absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-[#0D2444] to-[#6288B9]"
                />

                <span className="pointer-events-none absolute -right-3 -top-5 text-8xl font-black leading-none text-[#0D2444]/5 transition duration-500 group-hover:text-[#6288B9]/12">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#6288B9]/0 blur-3xl transition duration-500 group-hover:bg-[#6288B9]/18" />

                <div className="relative">
                  <div className="mb-7 flex items-center justify-between gap-4">
                    <motion.div
                      whileHover={{ rotate: 4, scale: 1.04 }}
                      transition={{ duration: 0.25 }}
                      className="primary-btn flex h-16 w-16 items-center justify-center rounded-[22px] p-0 text-lg"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.div>

                    <span className="secondary-btn px-4 py-2 text-xs uppercase tracking-[0.16em]">
                      Required
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold leading-tight text-[#0D2444] md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                    {item.description}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {item.items.map((point, pointIndex) => (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.38,
                          ease: "easeOut",
                          delay: pointIndex * 0.04,
                        }}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm font-semibold text-slate-600 transition duration-300 hover:border-[#6288B9]/35 hover:bg-[#EAF1F8] hover:text-[#0D2444]"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0D2444] to-[#6288B9] text-xs font-black text-white">
                          ✓
                        </span>
                        {point}
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.65,
                        ease: "easeOut",
                        delay: 0.12,
                      }}
                      className="h-px flex-1 origin-left bg-gradient-to-r from-[#6288B9]/60 to-transparent"
                    />

                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Ready To Plan
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}