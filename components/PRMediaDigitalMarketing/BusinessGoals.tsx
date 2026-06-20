"use client";

import { motion } from "framer-motion";

type BusinessGoal = {
  title: string;
  description: string;
  channel: string;
};

const businessGoals: BusinessGoal[] = [
  {
    title: "Brand Launch",
    channel: "PR + Social + Influencers",
    description:
      "We help new brands build visibility through press announcements, launch campaigns, social media communication, influencer outreach and digital promotion.",
  },
  {
    title: "Product Launch",
    channel: "Media + Creators + Ads",
    description:
      "We create communication strategies for product introductions, including PR angles, media outreach, creator campaigns, launch content and paid promotion.",
  },
  {
    title: "Event Promotion",
    channel: "Event PR + Digital Buzz",
    description:
      "We manage event PR, influencer attendance, social media campaigns, media invites, post-event coverage and digital buzz.",
  },
  {
    title: "Reputation Building",
    channel: "PR + ORM + Thought Leadership",
    description:
      "We support brands, founders and public personalities with visibility, thought leadership, media presence, online reputation and credibility building.",
  },
  {
    title: "Lead Generation",
    channel: "SEO + Ads + Landing Pages",
    description:
      "We use SEO, paid ads, landing pages, content marketing and conversion-focused campaigns to support inquiry generation.",
  },
  {
    title: "Social Media Growth",
    channel: "Content + Reels + Campaigns",
    description:
      "We help brands improve social presence through creative content, consistent posting, campaign ideas, reels, influencer collaborations and performance review.",
  },
  {
    title: "Local Business Visibility",
    channel: "Local SEO + Social + Reviews",
    description:
      "We support restaurants, clinics, salons, hospitality brands, retail stores and local businesses with social media, local SEO and Google Business Profile strategy.",
  },
  {
    title: "Luxury Brand Positioning",
    channel: "Premium PR + Curated Content",
    description:
      "We help premium brands, hospitality businesses and lifestyle companies build aspirational communication through PR, high-quality content and curated media visibility.",
  },
];

const outcomes = [
  "Launch",
  "Awareness",
  "Trust",
  "Leads",
  "Growth",
  "Visibility",
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function BusinessGoals() {
  return (
    <section
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
      className="relative overflow-hidden px-6 py-24 text-[#0D2444]"
    >
      {/* Uploaded Background Image */}
      <div className="absolute inset-0 bg-[url('/bg1.avif')] bg-cover bg-center bg-no-repeat" />

      {/* Soft Overlay For Readability */}
      <div className="absolute inset-0 bg-white/72" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-[#F8FAFC]/10 to-[#EAF1F8]/82" />

      {/* Soft Glow */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-24 h-[460px] w-[460px] rounded-full bg-[#6288B9]/18 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-40 bottom-24 h-[460px] w-[460px] rounded-full bg-[#0D2444]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
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
              Business Goals
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-4xl font-black leading-tight tracking-tight text-[#0D2444] md:text-6xl"
          >
            PR & Digital Marketing Built Around{" "}
            <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              Your Business Goal
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg"
          >
            Every campaign should begin with the outcome. We map your goal first,
            then build the right mix of PR, media, social media, SEO, paid ads,
            influencer marketing and reputation communication.
          </motion.p>
        </motion.div>

        {/* Main Goal System Layout */}
        <div className="relative overflow-hidden rounded-[54px] border border-white/60 bg-white/70 p-5 shadow-[0_28px_100px_rgba(13,36,68,0.10)] backdrop-blur-xl md:p-8">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#6288B9]/14 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-white/80 blur-3xl" />

          {/* Top Goal Band */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative mb-8 overflow-hidden rounded-[42px] bg-gradient-to-br from-[#0D2444] via-[#244A78] to-[#6288B9] p-8 text-white shadow-[0_24px_80px_rgba(13,36,68,0.22)] md:p-10"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="mb-5 text-sm font-bold uppercase tracking-[0.26em] text-white/65">
                  Goal-First Campaign Planning
                </p>

                <h3 className="max-w-2xl text-3xl font-black leading-tight md:text-5xl">
                  We do not start with channels.
                  <span className="block text-white/72">
                    We start with outcomes.
                  </span>
                </h3>
              </div>

              <div>
                <p className="text-base leading-8 text-white/76 md:text-lg">
                  A brand launch, product launch, event promotion or lead
                  generation campaign needs a different mix of PR, media,
                  creators, SEO, paid campaigns and reputation communication.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {outcomes.map((tag, index) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        ease: "easeOut",
                        delay: index * 0.06,
                      }}
                      className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/65 backdrop-blur"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Roadmap Style Goal Rows */}
          <div className="relative">
            <div className="absolute left-7 top-0 hidden h-full w-px bg-gradient-to-b from-[#6288B9]/45 via-[#0D2444]/20 to-transparent md:block" />

            <div className="space-y-5">
              {businessGoals.map((goal, index) => (
                <motion.article
                  key={goal.title}
                  initial={{ opacity: 0, x: 36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{
                    duration: 0.62,
                    ease: "easeOut",
                    delay: index * 0.06,
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

                  {/* Goal Row */}
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.25 }}
                    className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white/88 px-6 py-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)] backdrop-blur transition duration-500 group-hover:border-[#6288B9]/35 group-hover:shadow-[0_24px_70px_rgba(13,36,68,0.12)]"
                  >
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#0D2444] to-[#6288B9]" />
                    <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#6288B9]/0 blur-3xl transition duration-500 group-hover:bg-[#6288B9]/18" />

                    <div className="relative grid gap-5 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
                      <div>
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#6288B9]">
                          {goal.channel}
                        </p>

                        <h3 className="text-2xl font-black leading-tight text-[#0D2444] md:text-3xl">
                          {goal.title}
                        </h3>
                      </div>

                      <p className="text-sm leading-7 text-slate-600 md:text-base">
                        {goal.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}