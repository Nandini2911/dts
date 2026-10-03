"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Braces,
  FileSearch,
  Gauge,
  Link2,
  MapPin,
  Search,
  ShieldCheck,
  Target,
} from "lucide-react";

const auditPoints = [
  {
    number: "01",
    title: "Crawl & Indexation",
    icon: Braces,
    position: "left-[3%] top-[12%]",
  },
  {
    number: "02",
    title: "Page Speed",
    icon: Gauge,
    position: "right-[3%] top-[14%]",
  },
  {
    number: "03",
    title: "Keyword Gaps",
    icon: Target,
    position: "left-[1%] top-[48%]",
  },
  {
    number: "04",
    title: "Content Quality",
    icon: FileSearch,
    position: "right-[1%] top-[50%]",
  },
  {
    number: "05",
    title: "Authority Signals",
    icon: Link2,
    position: "left-[8%] bottom-[8%]",
  },
  {
    number: "06",
    title: "Local Search",
    icon: MapPin,
    position: "right-[8%] bottom-[8%]",
  },
];

const diagnosticNotes = [
  "Technical blockers affecting crawlability",
  "Pages competing for the same search intent",
  "Weak internal linking between important pages",
  "Missing local relevance for Mumbai searches",
  "Content gaps against ranking competitors",
  "Authority opportunities across PR and backlinks",
];

export default function SeoAuditSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFC] py-[120px] sm:py-[140px] lg:py-[160px]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F7FAFC] to-[#EDF3F8]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.022]
            [background-image:linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)]
            [background-size:84px_84px]
          "
        />

        <div className="absolute left-[-180px] top-[20%] h-[460px] w-[460px] rounded-full bg-[#6288B9]/10 blur-3xl" />

        <div className="absolute right-[-160px] bottom-[10%] h-[460px] w-[460px] rounded-full bg-[#0D2444]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* HEADER */}
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#6288B9]" />

              <span className="text-[11px] font-semibold uppercase tracking-[3px] text-[#456A9E] sm:text-[12px]">
                SEO Audit
              </span>
            </div>

            <h2
              className="
                mt-7
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
              See What Search Engines
              <br />

              <span className="bg-gradient-to-r from-[#0D2444] via-[#456A9E] to-[#6288B9] bg-clip-text text-transparent">
                See in Your Website.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              delay: 0.08,
            }}
          >
            <p className="max-w-[720px] text-[16px] leading-[1.9] text-[#5B6472] sm:text-[18px]">
              Before building an SEO strategy, we examine how your website is
              being crawled, understood and discovered. Our SEO audit uncovers
              technical weaknesses, content gaps, keyword opportunities, local
              search issues and authority signals that may be limiting organic
              growth.
            </p>
          </motion.div>
        </div>

        {/* =========================================================
            X-RAY AUDIT STAGE
        ========================================================= */}

        <div className="mt-16 grid gap-7 xl:grid-cols-[1.45fr_0.55fr]">
          {/* WEBSITE X-RAY */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            className="
              relative
              min-h-[720px]
              overflow-hidden
              rounded-[40px]
              bg-[#0B1220]
              shadow-[0_35px_110px_rgba(13,36,68,0.20)]
            "
          >
            {/* BG */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#07101D] via-[#0E1928] to-[#1D3A66]" />

            <div
              className="
                absolute
                inset-0
                opacity-[0.055]
                [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
                [background-size:48px_48px]
              "
            />

            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6288B9]/10 blur-3xl" />

            {/* TOP STATUS */}
            <div className="absolute left-7 right-7 top-7 z-20 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[3px] text-white/35">
                  Website Search Diagnostic
                </p>

                <p className="mt-1 text-[14px] font-semibold text-white">
                  SEO X-Ray View
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[#BCD0E7]" />

                <span className="text-[10px] text-white/60">
                  Diagnostic Mode
                </span>
              </div>
            </div>

            {/* CENTRAL WEBSITE BLUEPRINT */}
            <div className="absolute left-1/2 top-[53%] w-[58%] -translate-x-1/2 -translate-y-1/2">
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/15
                  bg-white/[0.065]
                  shadow-[0_28px_80px_rgba(0,0,0,0.22)]
                  backdrop-blur-xl
                "
              >
                {/* Browser Bar */}
                <div className="flex h-12 items-center gap-2 border-b border-white/10 px-5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />

                  <div className="ml-4 h-6 flex-1 rounded-full bg-white/[0.07]" />
                </div>

                {/* Website */}
                <div className="relative p-6">
                  {/* fake navigation */}
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-20 rounded-[8px] bg-white/10" />

                    <div className="flex gap-3">
                      <div className="h-3 w-12 rounded-full bg-white/[0.08]" />
                      <div className="h-3 w-12 rounded-full bg-white/[0.08]" />
                      <div className="h-3 w-12 rounded-full bg-white/[0.08]" />
                    </div>
                  </div>

                  {/* Hero blocks */}
                  <div className="mt-10 grid grid-cols-[1.1fr_0.9fr] gap-5">
                    <div>
                      <div className="h-4 w-24 rounded-full bg-[#6288B9]/35" />

                      <div className="mt-4 h-7 w-[88%] rounded-[8px] bg-white/20" />

                      <div className="mt-3 h-7 w-[70%] rounded-[8px] bg-white/15" />

                      <div className="mt-5 h-3 w-[92%] rounded-full bg-white/[0.08]" />

                      <div className="mt-2 h-3 w-[75%] rounded-full bg-white/[0.08]" />

                      <div className="mt-6 h-10 w-32 rounded-[12px] bg-[#6288B9]/30" />
                    </div>

                    <div className="rounded-[20px] border border-white/10 bg-white/[0.06] p-4">
                      <div className="h-full min-h-[155px] rounded-[14px] bg-gradient-to-br from-[#6288B9]/20 to-white/[0.04]" />
                    </div>
                  </div>

                  {/* content */}
                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="rounded-[15px] border border-white/10 bg-white/[0.045] p-3"
                      >
                        <div className="h-7 w-7 rounded-[8px] bg-[#6288B9]/25" />

                        <div className="mt-3 h-3 w-[80%] rounded-full bg-white/10" />

                        <div className="mt-2 h-2.5 w-full rounded-full bg-white/[0.06]" />

                        <div className="mt-1.5 h-2.5 w-[70%] rounded-full bg-white/[0.06]" />
                      </div>
                    ))}
                  </div>

                  {/* SCANNING BEAM */}
                  <motion.div
                    animate={{
                      top: ["5%", "92%", "5%"],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-0 right-0 z-30 h-[2px] bg-gradient-to-r from-transparent via-[#A4C3E6] to-transparent shadow-[0_0_25px_rgba(164,195,230,0.8)]"
                  />

                  <motion.div
                    animate={{
                      top: ["5%", "92%", "5%"],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-0 right-0 z-20 h-[60px] -translate-y-1/2 bg-gradient-to-b from-transparent via-[#6288B9]/10 to-transparent"
                  />
                </div>
              </div>
            </div>

            {/* AUDIT CALLOUTS */}
            {auditPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  className={`
                    absolute
                    ${item.position}
                    z-30
                    hidden
                    xl:flex
                    items-center
                    gap-3
                    rounded-[18px]
                    border
                    border-white/10
                    bg-white/[0.08]
                    px-4
                    py-3
                    backdrop-blur-xl
                    shadow-[0_12px_30px_rgba(0,0,0,0.15)]
                  `}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-white/10">
                    <Icon className="h-4 w-4 text-[#BCD0E7]" />
                  </div>

                  <div>
                    <span className="block text-[8px] tracking-[2px] text-white/30">
                      {item.number}
                    </span>

                    <span className="mt-0.5 block text-[11px] font-semibold text-white/75">
                      {item.title}
                    </span>
                  </div>
                </motion.div>
              );
            })}

            {/* MOBILE LABELS */}
            <div className="absolute bottom-6 left-6 right-6 z-30 grid grid-cols-2 gap-2 xl:hidden">
              {auditPoints.slice(0, 4).map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="flex items-center gap-2 rounded-[14px] border border-white/10 bg-white/[0.07] px-3 py-2 backdrop-blur-xl"
                  >
                    <Icon className="h-3.5 w-3.5 text-[#BCD0E7]" />

                    <span className="text-[10px] text-white/60">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT DIAGNOSTIC NOTES */}
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="rounded-[32px] border border-[#DDE6EF] bg-white p-7 shadow-[0_20px_65px_rgba(15,23,42,0.06)] sm:p-8">
              <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#8C9DB2]">
                Diagnostic Notes
              </span>

              <h3
                className="mt-3 text-[28px] font-bold leading-[1.2] text-[#0D2444]"
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                What the audit is designed to uncover.
              </h3>

              <div className="mt-7 space-y-3">
                {diagnosticNotes.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                    className="
                      flex
                      items-start
                      gap-3
                      border-b
                      border-[#E8EDF2]
                      py-4
                      last:border-b-0
                    "
                  >
                    <span className="mt-0.5 text-[9px] font-semibold tracking-[2px] text-[#A1AFBE]">
                      0{index + 1}
                    </span>

                    <p className="text-[13px] leading-[1.65] text-[#5D697A]">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* MINI CTA */}
            <div className="mt-6 rounded-[30px] bg-[#0D2444] p-7 text-white shadow-[0_20px_60px_rgba(13,36,68,0.16)]">
              <span className="text-[9px] uppercase tracking-[3px] text-white/35">
                Audit Outcome
              </span>

              <p
                className="mt-3 text-[23px] font-bold leading-[1.3]"
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                Not just a list of issues.
                <br />
                A prioritized action plan.
              </p>

              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[#BCD0E7]"
              >
                Request Your SEO Audit

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            PRIORITY ROADMAP
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="
            mt-8
            overflow-hidden
            rounded-[30px]
            border
            border-[#DDE6EF]
            bg-white
            shadow-[0_18px_60px_rgba(15,23,42,0.05)]
          "
        >
          <div className="grid md:grid-cols-[0.72fr_1.28fr]">
            <div className="border-b border-[#E5EBF1] p-7 md:border-b-0 md:border-r sm:p-8">
              <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#8C9DB2]">
                Priority Roadmap
              </span>

              <h3
                className="mt-3 text-[27px] font-bold leading-[1.2] text-[#0D2444]"
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                Every issue gets a priority, not just a label.
              </h3>
            </div>

            <div className="grid sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Fix Now",
                  text: "Critical technical and indexing problems affecting discoverability.",
                },
                {
                  number: "02",
                  title: "Improve Next",
                  text: "Content, keyword and internal-link opportunities with near-term value.",
                },
                {
                  number: "03",
                  title: "Build Over Time",
                  text: "Authority, topical depth and long-term organic growth opportunities.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`
                    p-6
                    sm:p-7
                    ${
                      index < 2
                        ? "border-b border-[#E7EDF3] sm:border-b-0 sm:border-r"
                        : ""
                    }
                  `}
                >
                  <span className="text-[9px] font-semibold tracking-[2px] text-[#A1AFBE]">
                    {item.number}
                  </span>

                  <h4
                    className="mt-3 text-[19px] font-bold text-[#0D2444]"
                    style={{
                      fontFamily:
                        'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                    }}
                  >
                    {item.title}
                  </h4>

                  <p className="mt-2 text-[12px] leading-[1.7] text-[#687386] sm:text-[13px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}