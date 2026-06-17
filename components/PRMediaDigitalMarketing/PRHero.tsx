"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Pillar = {
  title: string;
  label: string;
  description: string;
};

const pillars: Pillar[] = [
  {
    title: "Public Relations",
    label: "PR",
    description: "Press communication, media visibility and reputation building.",
  },
  {
    title: "Media Management",
    label: "Media",
    description: "Journalist outreach, coverage planning and publication strategy.",
  },
  {
    title: "Digital Marketing",
    label: "Digital",
    description: "Social media, SEO, paid ads, content and performance campaigns.",
  },
  {
    title: "Influencer Marketing",
    label: "Creators",
    description: "Creator-led promotion for launches, events and brand campaigns.",
  },
];

const keywords: string[] = [
  "PR Agency in India",
  "Digital Marketing",
  "Media Coverage",
  "Social Media",
  "Influencer Campaigns",
  "SEO Strategy",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function PRHero() {
  return (
    <section
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
      className="relative overflow-hidden bg-[#F8FAFC] px-4 pb-20 pt-28 sm:px-6 md:pb-28 md:pt-36"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8FAFC] to-[#EAF1F8]" />
      <div className="absolute left-[-180px] top-20 h-[520px] w-[520px] rounded-full bg-[#6288B9]/16 blur-3xl" />
      <div className="absolute right-[-180px] bottom-0 h-[560px] w-[560px] rounded-full bg-[#0D2444]/10 blur-3xl" />

      {/* Huge Soft Word */}
      <div className="pointer-events-none absolute right-0 top-24 hidden text-[150px] font-black leading-none tracking-[-0.08em] text-[#0D2444]/[0.035] lg:block xl:text-[190px]">
        MEDIA
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Top Running Keywords */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mb-10 overflow-hidden rounded-full border border-slate-200 bg-white/75 px-4 py-3 shadow-[0_14px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl"
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-3 whitespace-nowrap"
          >
            {[...keywords, ...keywords].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="rounded-full bg-[#F8FAFC] px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#0D2444]/70"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          {/* Left Magazine Cover Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12 }}
            className="relative"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#6288B9]/25 bg-white/85 px-5 py-3 shadow-sm backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-[#6288B9]" />
              <p className="text-xs font-bold leading-snug text-[#0D2444] sm:text-sm">
                PR, Media & Digital Marketing Agency in India
              </p>
            </motion.div>

            <motion.h1
  variants={fadeUp}
  transition={{ duration: 0.75, ease: "easeOut" }}
  className="max-w-5xl text-[38px] font-black leading-[0.98] tracking-[-0.05em] text-[#0D2444] sm:text-[52px] md:text-[68px] xl:text-[84px]"
>
  Make your brand
  <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
    impossible to ignore.
  </span>
</motion.h1>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="mt-8 grid gap-6 lg:grid-cols-[0.72fr_0.28fr]"
            >
              <div>
                <p className="max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                  Double Trouble Studio provides integrated PR, media and
                  digital marketing services for brands, businesses, public
                  personalities, events and luxury experiences across India.
                </p>

                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                  We help brands build visibility, credibility and audience
                  engagement through public relations, media coverage, social
                  media marketing, influencer campaigns, SEO, paid ads and brand
                  communication.
                </p>
              </div>

              <div className="hidden border-l border-slate-200 pl-6 lg:block">
                <p className="text-4xl font-black text-[#0D2444]">360°</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#6288B9]">
                  Brand Communication
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group relative inline-flex overflow-hidden rounded-full px-8 py-4 text-sm font-bold text-white shadow-[0_18px_45px_rgba(13,36,68,0.22)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9]" />
                <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-700 group-hover:translate-x-[120%]" />
                <span className="relative z-10">Discuss Your Brand</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex rounded-full border border-[#0D2444]/15 bg-white/85 px-8 py-4 text-sm font-bold text-[#0D2444] shadow-[0_14px_35px_rgba(15,23,42,0.08)] backdrop-blur transition duration-300 hover:border-[#6288B9]/40 hover:bg-[#EAF1F8]"
              >
                Book A Consultation
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Vertical Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.2 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="relative overflow-hidden rounded-[48px] bg-[#0D2444] p-5 shadow-[0_30px_100px_rgba(13,36,68,0.25)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D2444] via-[#183A66] to-[#6288B9]" />
              <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
              <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

              {/* Dashboard Header */}
              <div className="relative mb-5 rounded-[34px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/55">
                  DTS Communication Framework
                </p>

                <h2 className="mt-4 text-4xl font-black leading-[1.05] text-white md:text-5xl">
                  Visibility.
                  <span className="block text-white/65">Credibility.</span>
                  Growth.
                </h2>
              </div>

              {/* Pillar Stack */}
              <div className="relative space-y-4">
                {pillars.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.45 + index * 0.1,
                    }}
                    className="group relative overflow-hidden rounded-[30px] bg-white p-5 shadow-[0_16px_45px_rgba(0,0,0,0.12)]"
                  >
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#EAF1F8] to-transparent" />

                    <div className="relative flex items-start gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0D2444] to-[#6288B9] text-xs font-black uppercase tracking-[0.1em] text-white">
                        {item.label}
                      </div>

                      <div>
                        <h3 className="text-xl font-black leading-tight text-[#0D2444]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Score Strip */}
              <div className="relative mt-5 grid grid-cols-3 gap-3">
                {[
                  { value: "PR", label: "Trust" },
                  { value: "SEO", label: "Search" },
                  { value: "Ads", label: "Reach" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[22px] border border-white/15 bg-white/10 px-4 py-4 text-center backdrop-blur"
                  >
                    <p className="text-2xl font-black text-white">
                      {item.value}
                    </p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/50">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}