"use client";

import { motion } from "framer-motion";

type Industry = {
  title: string;
  description: string;
  focus: string;
  highlights: string[];
};

const industries: Industry[] = [
  {
    title: "Hospitality & Restaurants",
    focus: "Restaurant PR • Influencer Visits • Local Buzz",
    description:
      "PR, social media marketing, influencer campaigns, launch communication and digital visibility for hotels, restaurants, cafes, lounges, clubs and food brands.",
    highlights: ["Launch Buzz", "Food Creators", "Local Visibility"],
  },
  {
    title: "Luxury & Lifestyle",
    focus: "Premium PR • Brand Positioning • Curated Content",
    description:
      "Brand communication, media visibility, social media strategy and influencer campaigns for luxury brands, lifestyle labels, fashion, beauty and premium experiences.",
    highlights: ["Premium Content", "Luxury PR", "Brand Positioning"],
  },
  {
    title: "Events & Entertainment",
    focus: "Event PR • Media Invites • Digital Buzz",
    description:
      "PR, digital marketing, media relations and influencer-led promotion for events, concerts, festivals, shows, nightlife experiences and cultural programs.",
    highlights: ["Media Invites", "Influencer Buzz", "Event Coverage"],
  },
  {
    title: "Corporate & Startups",
    focus: "Founder Visibility • LinkedIn • Press Communication",
    description:
      "Corporate PR, founder visibility, LinkedIn content, press communication, SEO, paid campaigns and digital growth strategy for companies and startups.",
    highlights: ["Founder PR", "LinkedIn Growth", "Press Communication"],
  },
  {
    title: "Real Estate & Automotive",
    focus: "Launch Campaigns • Lead Generation • Paid Ads",
    description:
      "Brand campaigns, digital marketing, launch communication, PR visibility and lead-generation support for real estate developers and automotive brands.",
    highlights: ["Lead Generation", "Launch Campaigns", "Paid Ads"],
  },
  {
    title: "Beauty & Wellness",
    focus: "Creator Campaigns • ORM • Social Media",
    description:
      "Social media strategy, influencer collaborations, PR campaigns, content marketing and online visibility for salons, clinics, wellness brands and beauty businesses.",
    highlights: ["Creator Campaigns", "ORM", "Social Media"],
  },
  {
    title: "Public Personalities & Creators",
    focus: "Personal Branding • Media Coverage • Reputation",
    description:
      "PR positioning, media coverage, personal branding, social media strategy and reputation support for public figures, artists, founders and creators.",
    highlights: ["Personal Branding", "Media Coverage", "Reputation"],
  },
];

const featureSteps = [
  {
    title: "Industry Research",
    desc: "Understand audience, category and market position.",
  },
  {
    title: "Story Mapping",
    desc: "Find the strongest media and content angles.",
  },
  {
    title: "Platform Mix",
    desc: "Choose PR, social, creators, SEO or ads.",
  },
  {
    title: "Campaign Rollout",
    desc: "Execute visibility with clarity and consistency.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function Industries() {
  return (
    <section
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
      className="relative overflow-hidden bg-white px-6 py-24 text-[#0F172A]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_45%,#EAF1F8_100%)]" />

      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.62, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-160px] top-20 h-[420px] w-[420px] rounded-full bg-[#6288B9]/14 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-160px] bottom-20 h-[420px] w-[420px] rounded-full bg-[#0D2444]/10 blur-3xl"
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
            className="mb-5 inline-flex rounded-full border border-[#6288B9]/20 bg-[#EAF1F8] px-5 py-2"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#6288B9]">
              Industries We Work With
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-4xl font-black leading-tight tracking-tight text-[#0D2444] md:text-6xl"
          >
            Different Industries Need Different Communication Playbooks
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg"
          >
            We do not use the same PR and digital marketing strategy for every
            business. Each industry gets a different mix of media, social,
            influencer marketing, SEO, paid ads and reputation communication.
          </motion.p>
        </motion.div>

        {/* Top Feature Bar */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mb-10 overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]"
        >
          <div className="grid lg:grid-cols-4">
            {featureSteps.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.58,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden border-b border-slate-200 p-7 transition duration-500 hover:bg-gradient-to-br hover:from-[#0D2444] hover:via-[#244A78] hover:to-[#6288B9] lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#6288B9]/0 blur-3xl transition duration-500 group-hover:bg-white/15" />

                <span className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0D2444] to-[#6288B9] text-sm font-black text-white transition duration-500 group-hover:bg-white group-hover:from-white group-hover:to-white group-hover:text-[#0D2444]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="relative text-lg font-bold text-[#0D2444] transition duration-500 group-hover:text-white">
                  {item.title}
                </h3>

                <p className="relative mt-3 text-sm leading-6 text-slate-600 transition duration-500 group-hover:text-white/70">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Playbook Cards */}
        <div className="space-y-7">
          {industries.map((industry, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={industry.title}
                initial={{
                  opacity: 0,
                  x: isEven ? -42 : 42,
                  y: 18,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.72,
                  ease: "easeOut",
                  delay: index * 0.04,
                }}
                className="group relative overflow-hidden rounded-[38px] border border-slate-200 bg-white shadow-[0_18px_65px_rgba(15,23,42,0.07)] transition duration-500 hover:shadow-[0_30px_100px_rgba(15,23,42,0.13)]"
              >
                <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#6288B9]/0 blur-3xl transition duration-500 group-hover:bg-[#6288B9]/18" />

                <div
                  className={`grid min-h-[320px] lg:grid-cols-[0.42fr_0.58fr] ${
                    isEven ? "" : "lg:grid-cols-[0.58fr_0.42fr]"
                  }`}
                >
                  {/* Visual / Number Block */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                      delay: index * 0.05,
                    }}
                    className={`relative overflow-hidden bg-gradient-to-br from-[#0D2444] via-[#244A78] to-[#6288B9] p-8 text-white ${
                      isEven ? "" : "lg:order-2"
                    }`}
                  >
                    <motion.div
                      animate={{ x: [0, 18, 0], y: [0, -14, 0] }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/15 blur-3xl"
                    />

                    <motion.div
                      animate={{ x: [0, -16, 0], y: [0, 14, 0] }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
                    />

                    <div className="relative flex h-full min-h-[260px] flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/70">
                          Industry Playbook
                        </p>

                        <motion.span
                          initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.15,
                          }}
                          className="text-6xl font-black leading-none text-white/15"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </motion.span>
                      </div>

                      <div>
                        <motion.div
                          whileHover={{ rotate: 4, scale: 1.04 }}
                          transition={{ duration: 0.25 }}
                          className="mb-6 flex h-20 w-20 items-center justify-center rounded-[24px] border border-white/20 bg-white/12 text-2xl font-black backdrop-blur"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </motion.div>

                        <h3 className="max-w-md text-3xl font-black leading-tight md:text-4xl">
                          {industry.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Block */}
                  <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.68,
                      ease: "easeOut",
                      delay: index * 0.05 + 0.08,
                    }}
                    className="relative p-8 md:p-10"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.52,
                        ease: "easeOut",
                        delay: 0.1,
                      }}
                      className="mb-6 inline-flex rounded-full border border-[#6288B9]/20 bg-[#EAF1F8] px-5 py-2"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#6288B9]">
                        {industry.focus}
                      </p>
                    </motion.div>

                    <p className="max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                      {industry.description}
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                      {industry.highlights.map((item, highlightIndex) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 18 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.45,
                            ease: "easeOut",
                            delay: highlightIndex * 0.07,
                          }}
                          whileHover={{ y: -4 }}
                          className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 text-sm font-semibold text-[#0D2444] transition duration-300 hover:border-[#6288B9]/35 hover:bg-[#EAF1F8]"
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-9 flex items-center gap-4">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.7,
                          ease: "easeOut",
                          delay: 0.15,
                        }}
                        className="h-px flex-1 origin-left bg-gradient-to-r from-[#6288B9]/60 to-transparent"
                      />

                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                        PR • Media • Digital
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}