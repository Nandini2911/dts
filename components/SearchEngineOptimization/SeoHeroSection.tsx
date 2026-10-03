"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  MapPin,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

const seoCapabilities = [
  "Technical SEO",
  "On-Page SEO",
  "Local SEO",
  "Content Strategy",
  "Keyword Research",
  "SEO Reporting",
];

const searchIntentItems = [
  {
    keyword: "SEO agency in Mumbai",
    intent: "Commercial",
  },
  {
    keyword: "SEO company in Mumbai",
    intent: "High Intent",
  },
  {
    keyword: "local SEO Mumbai",
    intent: "Local",
  },
];

export default function SeoHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFC] pb-[110px] pt-[170px] sm:pb-[125px] lg:pb-[135px]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F7FAFC] to-[#EDF3F8]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />

        <div className="absolute left-[-140px] top-[100px] h-[440px] w-[440px] rounded-full bg-[#6288B9]/10 blur-3xl" />

        <div className="absolute right-[-100px] top-[220px] h-[460px] w-[460px] rounded-full bg-[#456A9E]/10 blur-3xl" />

        <div className="absolute bottom-[-260px] left-[35%] h-[520px] w-[520px] rounded-full bg-[#0D2444]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.03fr_0.97fr] xl:gap-20">
          {/* LEFT CONTENT */}
          <div>
            {/* EYEBROW */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#6288B9]/20
                bg-white/75
                px-5
                py-2.5
                shadow-[0_8px_30px_rgba(15,23,42,0.05)]
                backdrop-blur-xl
              "
            >
              <Sparkles className="h-4 w-4 text-[#456A9E]" />

              <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#456A9E] sm:text-[12px]">
                SEO Agency in Mumbai
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="
                mt-7
                max-w-[800px]
                text-[40px]
                font-bold
                leading-[1.05]
                tracking-[-2px]
                text-[#0D2444]
                md:text-[58px]
              "
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              SEO Agency in Mumbai
              <br />

              <span className="bg-gradient-to-r from-[#0D2444] via-[#456A9E] to-[#6288B9] bg-clip-text text-transparent">
                for Brands That Want
              </span>

              <br />
              Real Search Growth
            </motion.h1>

            {/* INTRO */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="mt-7 max-w-[770px] text-[16px] leading-[1.9] text-[#5B6472] sm:text-[18px]"
            >
              Double Trouble Studio is an SEO agency in Mumbai helping
              businesses improve Google visibility, organic traffic and quality
              enquiries. We plan SEO around your services, city and competition
              — not generic checklists.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              className="mt-4 max-w-[770px] text-[15px] leading-[1.9] text-[#687386] sm:text-[17px]"
            >
              From technical SEO and on-page optimization to local SEO and
              content strategy, our SEO company in Mumbai builds a system that
              supports long-term rankings.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[18px]
                  bg-gradient-to-r
                  from-[#0D2444]
                  via-[#1D3A66]
                  to-[#6288B9]
                  px-7
                  py-4
                  text-[15px]
                  font-semibold
                  text-white
                  shadow-[0_12px_35px_rgba(13,36,68,0.20)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_18px_45px_rgba(13,36,68,0.28)]
                "
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get a Free SEO Consultation

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>

                <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-[#6288B9] to-[#A4B8D2] transition-transform duration-500 group-hover:translate-y-0" />
              </Link>

              <Link
                href="/work"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-[18px]
                  border
                  border-[#0D2444]/10
                  bg-white/75
                  px-7
                  py-4
                  text-[15px]
                  font-semibold
                  text-[#0D2444]
                  shadow-[0_8px_30px_rgba(15,23,42,0.05)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                "
              >
                View Our Work
              </Link>
            </motion.div>

            {/* CAPABILITY TAGS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="mt-8 flex max-w-[760px] flex-wrap gap-3"
            >
              {seoCapabilities.map((item) => (
                <div
                  key={item}
                  className="
                    rounded-full
                    border
                    border-[#DCE5EF]
                    bg-white/70
                    px-4
                    py-2
                    text-[12px]
                    font-semibold
                    text-[#496684]
                    shadow-[0_6px_20px_rgba(15,23,42,0.04)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#6288B9]/35
                    hover:bg-white
                  "
                >
                  {item}
                </div>
              ))}
            </motion.div>

            {/* WEB DEVELOPMENT INTERNAL LINK */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="mt-7 flex flex-wrap items-center gap-2 text-[13px] text-[#6A7687]"
            >
              <span>Planning a new website?</span>

              <Link
                href="/services/web-development-marketing"
                className="
                  group
                  inline-flex
                  items-center
                  gap-1
                  font-semibold
                  text-[#456A9E]
                  transition-colors
                  hover:text-[#0D2444]
                "
              >
                Explore our SEO-ready website development

                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div
              className="
                relative
                h-[625px]
                overflow-hidden
                rounded-[38px]
                border
                border-white/10
                bg-[#0B1220]
                shadow-[0_35px_100px_rgba(13,36,68,0.24)]
              "
            >
              {/* BACKGROUND */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#08111F] via-[#101A2A] to-[#1D3A66]" />

              {/* GRID */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.055]
                  [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
                  [background-size:52px_52px]
                "
              />

              {/* GLOW */}
              <motion.div
                animate={{
                  x: [0, 35, 0],
                  y: [0, -28, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[10px] top-[20px] h-[280px] w-[280px] rounded-full bg-[#6288B9]/25 blur-3xl"
              />

              {/* DASHBOARD HEADER */}
              <div className="absolute left-8 right-8 top-8 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[3px] text-white/40">
                    Search Growth Intelligence
                  </p>

                  <p className="mt-2 text-[15px] font-semibold text-white">
                    Mumbai SEO Strategy
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[10px] text-white/65 backdrop-blur-xl">
                  <MapPin className="h-3.5 w-3.5 text-[#BCD0E7]" />
                  Mumbai
                </div>
              </div>

              {/* SEARCH INTENT */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-[30px]
                  top-[105px]
                  w-[360px]
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/10
                  p-5
                  backdrop-blur-xl
                "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[2px] text-white/40">
                      Search Intent Mapping
                    </p>

                    <p className="mt-1 text-[18px] font-semibold text-white">
                      Mumbai Search Demand
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-[15px] bg-white/10">
                    <Search className="h-5 w-5 text-[#BCD0E7]" />
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {searchIntentItems.map((item) => (
                    <div
                      key={item.keyword}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-[15px]
                        border
                        border-white/5
                        bg-black/10
                        px-4
                        py-3
                      "
                    >
                      <div>
                        <p className="text-[12px] font-medium text-white">
                          {item.keyword}
                        </p>

                        <p className="mt-1 text-[9px] uppercase tracking-[1px] text-white/35">
                          Search opportunity
                        </p>
                      </div>

                      <span className="rounded-full bg-[#6288B9]/20 px-3 py-1 text-[9px] font-medium text-[#C9D9EB]">
                        {item.intent}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* TECHNICAL SEO CARD */}
              <motion.div
                animate={{
                  y: [0, 14, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  right-[25px]
                  top-[190px]
                  w-[190px]
                  rounded-[25px]
                  border
                  border-white/10
                  bg-white/10
                  p-5
                  backdrop-blur-xl
                "
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#6288B9]/20">
                    <Zap className="h-5 w-5 text-[#BCD0E7]" />
                  </div>

                  <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                </div>

                <p className="mt-5 text-[11px] text-white/40">
                  Technical SEO
                </p>

                <p className="mt-1 text-[17px] font-semibold text-white">
                  Search Ready
                </p>

                <div className="mt-4 space-y-2">
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "82%" }}
                      transition={{
                        duration: 1.4,
                        delay: 0.5,
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-[#6288B9] to-[#A4B8D2]"
                    />
                  </div>

                  <p className="text-[9px] text-white/30">
                    Crawl · Index · Performance
                  </p>
                </div>
              </motion.div>

              {/* ORGANIC GROWTH GRAPH */}
              <motion.div
                animate={{
                  y: [0, -9, 0],
                }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-[58px]
                  left-[55px]
                  w-[355px]
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/10
                  p-5
                  backdrop-blur-xl
                "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[2px] text-white/40">
                      Organic Search Strategy
                    </p>

                    <p className="mt-1 text-[18px] font-semibold text-white">
                      Long-Term Growth System
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6288B9]/15">
                    <TrendingUp className="h-5 w-5 text-[#BCD0E7]" />
                  </div>
                </div>

                <div className="relative mt-6 h-[105px]">
                  <svg
                    viewBox="0 0 320 105"
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id="seoMumbaiLine"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#456A9E" />
                        <stop offset="100%" stopColor="#A4B8D2" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0 90 C35 87,55 78,85 80 C125 82,142 58,175 61 C213 64,230 36,265 38 C293 39,305 18,320 14"
                      fill="none"
                      stroke="url(#seoMumbaiLine)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />

                    <path
                      d="M0 90 C35 87,55 78,85 80 C125 82,142 58,175 61 C213 64,230 36,265 38 C293 39,305 18,320 14 L320 105 L0 105 Z"
                      fill="rgba(98,136,185,0.08)"
                    />
                  </svg>

                  <div className="absolute inset-x-0 bottom-0 flex justify-between text-[8px] uppercase tracking-[1px] text-white/25">
                    <span>Audit</span>
                    <span>Optimize</span>
                    <span>Content</span>
                    <span>Measure</span>
                  </div>
                </div>
              </motion.div>

              {/* TARGET CARD */}
              <motion.div
                animate={{
                  x: [0, 8, 0],
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-[28px]
                  right-[22px]
                  flex
                  items-center
                  gap-3
                  rounded-[20px]
                  border
                  border-white/10
                  bg-white/10
                  px-4
                  py-3
                  backdrop-blur-xl
                "
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#6288B9]/20">
                  <Target className="h-5 w-5 text-[#BCD0E7]" />
                </div>

                <div>
                  <p className="text-[9px] text-white/40">
                    Search Strategy
                  </p>

                  <p className="text-[12px] font-semibold text-white">
                    Intent-Led SEO
                  </p>
                </div>
              </motion.div>

              {/* ANALYTICS MINI CARD */}
              <div className="absolute bottom-[190px] right-[28px] flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/[0.07] px-4 py-3 backdrop-blur-xl">
                <BarChart3 className="h-4 w-4 text-[#BCD0E7]" />

                <span className="text-[10px] text-white/55">
                  Search performance
                </span>
              </div>
            </div>

            {/* BACK PLATE */}
            <div
              className="
                absolute
                -bottom-6
                -right-6
                -z-10
                h-[88%]
                w-[88%]
                rounded-[38px]
                border
                border-[#6288B9]/10
                bg-gradient-to-br
                from-[#6288B9]/10
                to-transparent
              "
            />
          </motion.div>
        </div>

        {/* MOBILE VISUAL */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="
            mt-14
            overflow-hidden
            rounded-[28px]
            bg-gradient-to-br
            from-[#0B1220]
            via-[#111827]
            to-[#1D3A66]
            p-5
            shadow-[0_25px_70px_rgba(13,36,68,0.20)]
            lg:hidden
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[2px] text-white/40">
                Mumbai SEO Strategy
              </p>

              <p className="mt-1 text-[17px] font-semibold text-white">
                Search Growth System
              </p>
            </div>

            <Search className="h-5 w-5 text-[#BCD0E7]" />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[18px] border border-white/10 bg-white/10 p-4">
              <p className="text-[10px] text-white/40">
                Technical SEO
              </p>

              <p className="mt-1 text-[14px] font-semibold text-white">
                Crawl & Index Optimization
              </p>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-white/10 p-4">
              <p className="text-[10px] text-white/40">
                Local Search
              </p>

              <p className="mt-1 text-[14px] font-semibold text-white">
                Mumbai Search Visibility
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}