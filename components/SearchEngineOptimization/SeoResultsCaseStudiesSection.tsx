"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Eye,
  Link2,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";

const serifFont =
  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif';

const beforeSignals = [
  "Unclear search intent",
  "Weak page relationships",
  "Limited topic coverage",
  "Technical friction",
];

const afterSignals = [
  "Intent-led page structure",
  "Clear internal relationships",
  "Stronger topic coverage",
  "SEO-ready technical foundation",
];

const proofSignals = [
  {
    icon: TrendingUp,
    number: "01",
    title: "Organic Traffic",
    text: "Relevant visits reaching important search-led pages.",
  },
  {
    icon: Eye,
    number: "02",
    title: "Search Visibility",
    text: "Presence across valuable service, topic and local searches.",
  },
  {
    icon: Search,
    number: "03",
    title: "Keyword Coverage",
    text: "Broader visibility around the searches that matter.",
  },
  {
    icon: Target,
    number: "04",
    title: "Qualified Enquiries",
    text: "Search contributing to meaningful business actions.",
  },
];

export default function SeoResultsCaseStudiesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-[120px] sm:py-[140px] lg:py-[160px]">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_50%,#EEF4F9_100%)]" />

        <div className="absolute left-[-240px] top-[22%] h-[520px] w-[520px] rounded-full bg-[#6288B9]/10 blur-[160px]" />

        <div className="absolute right-[-220px] bottom-[7%] h-[520px] w-[520px] rounded-full bg-[#456A9E]/8 blur-[160px]" />

        <div
          className="
            absolute
            right-[-30px]
            top-[45px]
            text-[120px]
            font-bold
            leading-none
            tracking-[-10px]
            text-[#0D2444]/[0.014]
            sm:text-[190px]
            lg:text-[270px]
          "
          style={{ fontFamily: serifFont }}
        >
          CHANGE
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-[100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#6288B9]" />

              <span className="text-[11px] font-semibold uppercase tracking-[3px] text-[#456A9E]">
                SEO Results in Practice
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
              style={{ fontFamily: serifFont }}
            >
              Good SEO Should Change
              <br />

              <span className="bg-gradient-to-r from-[#0D2444] via-[#456A9E] to-[#6288B9] bg-clip-text text-transparent">
                How the Website Performs in Search.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <p className="max-w-[690px] text-[16px] leading-[1.9] text-[#5B6472] sm:text-[18px]">
              A meaningful SEO result is easier to understand when you can see
              what was limiting search performance, what changed strategically
              and which signals improved afterwards.
            </p>

            <p className="mt-4 max-w-[690px] text-[15px] leading-[1.85] text-[#718094] sm:text-[16px]">
              We use verified analytics and search-performance data when
              presenting real case-study outcomes.
            </p>
          </motion.div>
        </div>

        {/* =========================================================
            TRANSFORMATION CANVAS
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative
            mt-20
            min-h-[700px]
            overflow-hidden
            rounded-[42px]
            border
            border-[#D5E0EA]
            bg-white
            shadow-[0_35px_100px_rgba(13,36,68,0.11)]
          "
        >
          {/* =====================================================
              DESKTOP BACKGROUNDS
          ===================================================== */}

          <div className="absolute inset-0 hidden lg:block">
            {/* BEFORE SIDE */}

            <div
              className="
                absolute
                inset-y-0
                left-0
                w-[56%]
                bg-[#F4F8FB]
                [clip-path:polygon(0_0,100%_0,82%_100%,0_100%)]
              "
            />

            {/* AFTER SIDE */}

            <div
              className="
                absolute
                inset-y-0
                right-0
                w-[56%]
                bg-[#0D2444]
                [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]
              "
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(98,136,185,0.35),transparent_30%),linear-gradient(145deg,#091A31_0%,#0D2444_56%,#173B66_100%)]" />

              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.045]
                  [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
                  [background-size:54px_54px]
                "
              />
            </div>
          </div>

          {/* =====================================================
              TOP LABEL
          ===================================================== */}

          <div className="relative z-20 flex items-center justify-between border-b border-[#D5E0EA] bg-white/90 px-7 py-5 backdrop-blur-md sm:px-9 lg:px-12">
            <div className="flex items-center gap-4">
              <span className="text-[8px] font-semibold uppercase tracking-[2.7px] text-[#6288B9]">
                Search Transformation
              </span>

              <div className="hidden h-px w-12 bg-[#D1DCE6] sm:block" />

              <span className="hidden text-[8px] font-semibold uppercase tracking-[2px] text-[#A0ACB9] sm:block">
                Case Study Framework
              </span>
            </div>

            <span className="text-[8px] font-semibold uppercase tracking-[2px] text-[#8C99A8]">
              Before → After
            </span>
          </div>

          {/* =====================================================
              DESKTOP CONTENT
          ===================================================== */}

          <div className="relative z-10 hidden min-h-[645px] lg:block">
            {/* -------------------------------------------------
                BEFORE
            -------------------------------------------------- */}

            <div className="absolute bottom-0 left-0 top-0 w-[44%] px-12 py-14 xl:px-14">
              <div className="flex h-full flex-col">
                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#8B99A8]">
                    Before SEO Strategy
                  </span>

                  <h3
                    className="mt-6 max-w-[520px] text-[39px] font-bold leading-[1.08] tracking-[-1.4px] text-[#0D2444]"
                    style={{ fontFamily: serifFont }}
                  >
                    Search signals exist,
                    <span className="text-[#8797A9]">
                      {" "}
                      but they are not working together.
                    </span>
                  </h3>

                  <p className="mt-7 max-w-[480px] text-[13px] leading-[1.9] text-[#667386]">
                    Many websites already have pages, content and technical
                    infrastructure — but the pieces are often disconnected from
                    real search demand.
                  </p>
                </div>

                {/* BROKEN SIGNALS */}

                <div className="mt-10">
                  {beforeSignals.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.06,
                      }}
                      className="
                        flex
                        items-center
                        gap-5
                        border-t
                        border-[#D6E0E9]
                        py-4
                      "
                    >
                      <span className="w-[28px] text-[8px] font-semibold tracking-[2px] text-[#A7B2BD]">
                        0{index + 1}
                      </span>

                      <div className="h-[7px] w-[7px] rounded-full border border-[#95A4B4]" />

                      <span className="text-[12px] font-semibold text-[#5B6878]">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto border-l-[3px] border-[#B6C4D2] pl-5">
                  <span className="text-[8px] font-semibold uppercase tracking-[2.3px] text-[#9AA7B5]">
                    Result
                  </span>

                  <p
                    className="mt-3 max-w-[430px] text-[21px] font-bold leading-[1.45] text-[#0D2444]"
                    style={{ fontFamily: serifFont }}
                  >
                    Search visibility remains fragmented.
                  </p>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------
                CENTER TRANSFORMATION
            -------------------------------------------------- */}

            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                absolute
                left-1/2
                top-1/2
                z-30
                flex
                h-[190px]
                w-[190px]
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border-[14px]
                border-white
                bg-[#0D2444]
                shadow-[0_25px_70px_rgba(13,36,68,0.26)]
              "
            >
              <div className="text-center">
                <Search className="mx-auto h-[24px] w-[24px] text-[#BCD0E7]" />

                <span className="mt-4 block text-[8px] font-semibold uppercase tracking-[2.6px] text-[#9EB8D6]">
                  SEO Strategy
                </span>

                <p
                  className="mt-2 text-[21px] font-bold leading-[1.2] text-white"
                  style={{ fontFamily: serifFont }}
                >
                  Align the
                  <br />
                  system
                </p>
              </div>
            </motion.div>

            {/* connector */}

            <div className="absolute left-[42%] top-1/2 z-20 h-px w-[16%] -translate-y-1/2 bg-gradient-to-r from-[#A5B5C6] via-[#6288B9] to-[#8FA9C7]" />

            {/* -------------------------------------------------
                AFTER
            -------------------------------------------------- */}

            <div className="absolute bottom-0 right-0 top-0 w-[44%] px-12 py-14 xl:px-14">
              <div className="flex h-full flex-col">
                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#9EB8D6]">
                    After SEO Alignment
                  </span>

                  <h3
                    className="mt-6 max-w-[520px] text-[39px] font-bold leading-[1.08] tracking-[-1.4px] text-white"
                    style={{ fontFamily: serifFont }}
                  >
                    Every search signal
                    <span className="text-[#BCD0E7]">
                      {" "}
                      supports the same growth direction.
                    </span>
                  </h3>

                  <p className="mt-7 max-w-[480px] text-[13px] leading-[1.9] text-white/48">
                    Technical structure, page intent, content depth and internal
                    relationships begin supporting one connected search
                    strategy.
                  </p>
                </div>

                {/* ALIGNED SIGNALS */}

                <div className="mt-10">
                  {afterSignals.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.06,
                      }}
                      className="
                        flex
                        items-center
                        gap-5
                        border-t
                        border-white/10
                        py-4
                      "
                    >
                      <span className="w-[28px] text-[8px] font-semibold tracking-[2px] text-white/25">
                        0{index + 1}
                      </span>

                      <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white/10">
                        <Check className="h-[10px] w-[10px] text-[#BCD0E7]" />
                      </div>

                      <span className="text-[12px] font-semibold text-white/70">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto border-l-[3px] border-[#7899C0] pl-5">
                  <span className="text-[8px] font-semibold uppercase tracking-[2.3px] text-[#8FA9C7]">
                    Result
                  </span>

                  <p
                    className="mt-3 max-w-[430px] text-[21px] font-bold leading-[1.45] text-white"
                    style={{ fontFamily: serifFont }}
                  >
                    Search visibility becomes more structured and measurable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              MOBILE VERSION
          ===================================================== */}

          <div className="lg:hidden">
            {/* BEFORE */}

            <div className="bg-[#F4F8FB] p-7 sm:p-9">
              <span className="text-[8px] font-semibold uppercase tracking-[2.5px] text-[#8B99A8]">
                Before
              </span>

              <h3
                className="mt-4 text-[30px] font-bold leading-[1.14] text-[#0D2444]"
                style={{ fontFamily: serifFont }}
              >
                Search signals exist, but they are disconnected.
              </h3>

              <div className="mt-7 border-t border-[#D6E0E9]">
                {beforeSignals.map((item) => (
                  <div
                    key={item}
                    className="border-b border-[#D6E0E9] py-4 text-[12px] font-semibold text-[#667386]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* TRANSFORM */}

            <div className="relative flex items-center justify-center bg-white py-7">
              <div className="absolute left-0 right-0 top-1/2 h-px bg-[#D5E0EA]" />

              <div className="relative z-10 flex h-[110px] w-[110px] items-center justify-center rounded-full border-[8px] border-white bg-[#0D2444] shadow-[0_18px_45px_rgba(13,36,68,0.22)]">
                <div className="text-center">
                  <Search className="mx-auto h-[18px] w-[18px] text-[#BCD0E7]" />

                  <span className="mt-2 block text-[7px] font-semibold uppercase tracking-[1.7px] text-[#9EB8D6]">
                    SEO Strategy
                  </span>
                </div>
              </div>
            </div>

            {/* AFTER */}

            <div className="bg-[#0D2444] p-7 sm:p-9">
              <span className="text-[8px] font-semibold uppercase tracking-[2.5px] text-[#9EB8D6]">
                After
              </span>

              <h3
                className="mt-4 text-[30px] font-bold leading-[1.14] text-white"
                style={{ fontFamily: serifFont }}
              >
                Search signals begin supporting one growth direction.
              </h3>

              <div className="mt-7 border-t border-white/10">
                {afterSignals.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-white/10 py-4"
                  >
                    <Check className="h-[13px] w-[13px] text-[#BCD0E7]" />

                    <span className="text-[12px] font-semibold text-white/65">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            EVIDENCE BAND
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <div className="flex flex-col gap-5 border-b border-[#D5E0EA] pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#8B99A8]">
                Evidence of Change
              </span>

              <h3
                className="mt-3 text-[30px] font-bold leading-[1.2] text-[#0D2444] sm:text-[36px]"
                style={{ fontFamily: serifFont }}
              >
                Then we verify whether the change is visible in the data.
              </h3>
            </div>

            <span className="text-[8px] font-semibold uppercase tracking-[2px] text-[#A0ACB9]">
              No fabricated metrics
            </span>
          </div>

          {/* PROOF STRIP */}

          <div className="grid lg:grid-cols-4">
            {proofSignals.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className={`
                    relative
                    py-9
                    lg:px-8

                    ${
                      index !== 0
                        ? "border-t border-[#D5E0EA] lg:border-l lg:border-t-0"
                        : ""
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[46px] font-bold leading-none text-[#0D2444]/[0.07]"
                      style={{ fontFamily: serifFont }}
                    >
                      {item.number}
                    </span>

                    <Icon className="h-[18px] w-[18px] text-[#6288B9]" />
                  </div>

                  <h4
                    className="mt-6 text-[22px] font-bold text-[#0D2444]"
                    style={{ fontFamily: serifFont }}
                  >
                    {item.title}
                  </h4>

                  <p className="mt-3 max-w-[300px] text-[12px] leading-[1.8] text-[#687386]">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* =========================================================
            FINAL BUSINESS IMPACT BAND
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[34px]
            bg-[#0D2444]
            px-7
            py-10
            sm:px-10
            lg:px-14
            lg:py-12
          "
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_20%,rgba(98,136,185,0.32),transparent_28%),linear-gradient(135deg,#091A31_0%,#0D2444_56%,#173B66_100%)]" />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-30px]
              right-[20px]
              text-[125px]
              font-bold
              leading-none
              tracking-[-8px]
              text-white/[0.025]
              sm:text-[180px]
            "
            style={{ fontFamily: serifFont }}
          >
            VALUE
          </div>

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#9EB8D6]">
                Business Impact
              </span>

              <p
                className="
                  mt-5
                  max-w-[980px]
                  text-[31px]
                  font-bold
                  leading-[1.27]
                  tracking-[-1px]
                  text-white
                  sm:text-[39px]
                  lg:text-[44px]
                "
                style={{ fontFamily: serifFont }}
              >
                Search improvement becomes more valuable
                <span className="text-[#BCD0E7]">
                  {" "}
                  when it contributes to meaningful business activity.
                </span>
              </p>
            </div>

            <div className="border-l border-white/12 pl-6">
              <p className="text-[12px] leading-[1.9] text-white/48 sm:text-[13px]">
                Traffic, ranking, visibility, enquiry and conversion figures
                should only be displayed where the supporting analytics or
                search-performance data is available.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            CTA
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-12
            flex
            flex-col
            gap-8
            border-t
            border-[#D5E0EA]
            pt-10
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <span className="text-[8px] font-semibold uppercase tracking-[2.5px] text-[#8B99A8]">
              Selected Work
            </span>

            <p
              className="mt-3 max-w-[760px] text-[25px] font-bold leading-[1.35] text-[#0D2444] sm:text-[30px]"
              style={{ fontFamily: serifFont }}
            >
              See how strategy, creative execution and digital growth come
              together across our work.
            </p>
          </div>

          <Link
            href="/work"
            className="
              group
              inline-flex
              shrink-0
              items-center
              justify-center
              gap-3
              rounded-[14px]
              bg-[#0D2444]
              px-7
              py-4
              text-[13px]
              font-semibold
              text-white
              shadow-[0_14px_35px_rgba(13,36,68,0.18)]
              transition-all
              duration-300
              hover:-translate-y-[2px]
              hover:bg-[#17365F]
            "
          >
            Explore Our Work

            <ArrowUpRight className="h-[16px] w-[16px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}