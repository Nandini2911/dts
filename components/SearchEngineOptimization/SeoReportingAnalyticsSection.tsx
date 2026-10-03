"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Eye,
  MousePointerClick,
  Search,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const serifFont =
  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif';

const metrics = [
  {
    number: "01",
    title: "Organic Clicks",
    label: "Search Demand",
    icon: MousePointerClick,
  },
  {
    number: "02",
    title: "Search Impressions",
    label: "Visibility",
    icon: Eye,
  },
  {
    number: "03",
    title: "Keyword Visibility",
    label: "Search Presence",
    icon: Search,
  },
  {
    number: "04",
    title: "Landing Performance",
    label: "Page Quality",
    icon: BarChart3,
  },
  {
    number: "05",
    title: "Qualified Enquiries",
    label: "Business Impact",
    icon: Users,
  },
  {
    number: "06",
    title: "Conversions",
    label: "Action",
    icon: Target,
  },
];

export default function SeoReportingAnalyticsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-[120px] sm:py-[140px] lg:py-[160px]">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_55%,#EEF4F9_100%)]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            [background-image:linear-gradient(to_right,#0D2444_1px,transparent_1px)]
            [background-size:96px_100%]
          "
        />

        <div className="absolute left-[-220px] top-[26%] h-[500px] w-[500px] rounded-full bg-[#6288B9]/10 blur-[150px]" />

        <div className="absolute right-[-180px] bottom-[8%] h-[520px] w-[520px] rounded-full bg-[#456A9E]/8 blur-[150px]" />

        <div
          className="
            absolute
            right-[-30px]
            top-[4%]
            whitespace-nowrap
            text-[110px]
            font-bold
            leading-none
            tracking-[-9px]
            text-[#0D2444]/[0.014]
            sm:text-[180px]
            lg:text-[260px]
          "
          style={{ fontFamily: serifFont }}
        >
          DATA
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1480px] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:gap-[100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#6288B9]" />

              <span className="text-[11px] font-semibold uppercase tracking-[3px] text-[#456A9E]">
                Measurement That Makes Sense
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
              Understand What Your SEO
              <br />

              <span className="bg-gradient-to-r from-[#0D2444] via-[#456A9E] to-[#6288B9] bg-clip-text text-transparent">
                Is Actually Achieving.
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
              SEO reporting should do more than show charts. It should explain
              what changed, where visibility improved, which pages are gaining
              traction and whether organic search is contributing to meaningful
              business activity.
            </p>

            <p className="mt-4 max-w-[690px] text-[15px] leading-[1.85] text-[#718094] sm:text-[16px]">
              We focus reporting on signals that help guide the next decision,
              not vanity metrics presented without context.
            </p>
          </motion.div>
        </div>

        {/* =========================================================
            PERFORMANCE LEDGER
        ========================================================= */}

        <div className="mt-20">
          <div className="flex items-end justify-between border-b border-[#D7E1EB] pb-5">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#8B9AAA]">
                Performance Ledger
              </span>

              <h3
                className="mt-3 text-[28px] font-bold leading-[1.2] text-[#0D2444] sm:text-[34px]"
                style={{ fontFamily: serifFont }}
              >
                Measure the journey from visibility to action.
              </h3>
            </div>

            <TrendingUp className="hidden h-[22px] w-[22px] text-[#456A9E] sm:block" />
          </div>

          {/* RAIL */}
          <div className="relative mt-12 hidden lg:block">
            <div className="absolute left-[4%] right-[4%] top-[32px] h-px bg-[#C8D5E2]" />

            <div className="grid grid-cols-6">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;

                return (
                  <motion.div
                    key={metric.number}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="relative px-3 text-center"
                  >
                    <div className="relative z-10 mx-auto flex h-[64px] w-[64px] items-center justify-center rounded-full border border-[#BFD0E1] bg-white shadow-[0_10px_28px_rgba(13,36,68,0.07)]">
                      <Icon className="h-[20px] w-[20px] text-[#456A9E]" />
                    </div>

                    <span className="mt-6 block text-[8px] font-semibold tracking-[2px] text-[#A1ADBA]">
                      {metric.number}
                    </span>

                    <h4
                      className="mt-2 text-[18px] font-bold leading-[1.25] text-[#0D2444]"
                      style={{ fontFamily: serifFont }}
                    >
                      {metric.title}
                    </h4>

                    <span className="mt-2 block text-[8px] font-semibold uppercase tracking-[2px] text-[#6288B9]">
                      {metric.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* MOBILE */}
          <div className="mt-8 grid gap-0 border-t border-[#D7E1EB] lg:hidden">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.number}
                  className="grid grid-cols-[48px_1fr] items-center gap-4 border-b border-[#D7E1EB] py-5"
                >
                  <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#D7E1EB] bg-white text-[#456A9E]">
                    <Icon className="h-[17px] w-[17px]" />
                  </div>

                  <div>
                    <span className="text-[8px] font-semibold tracking-[2px] text-[#A1ADBA]">
                      0{index + 1}
                    </span>

                    <h4
                      className="mt-1 text-[18px] font-bold text-[#0D2444]"
                      style={{ fontFamily: serifFont }}
                    >
                      {metric.title}
                    </h4>

                    <span className="mt-1 block text-[8px] font-semibold uppercase tracking-[2px] text-[#6288B9]">
                      {metric.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            INSIGHT BLOCK
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            mt-20
            overflow-hidden
            rounded-[38px]
            bg-[#0D2444]
            p-7
            shadow-[0_28px_80px_rgba(13,36,68,0.18)]
            sm:p-9
            lg:p-12
          "
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_20%,rgba(98,136,185,0.34),transparent_28%),linear-gradient(135deg,#091A31_0%,#0D2444_52%,#173B66_100%)]" />

          <div
            className="
              absolute
              inset-0
              opacity-[0.045]
              [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
              [background-size:56px_56px]
            "
          />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#9EB8D6]">
                Data → Meaning
              </span>

              <p
                className="mt-5 max-w-[900px] text-[31px] font-bold leading-[1.25] tracking-[-1px] text-white sm:text-[40px] lg:text-[46px]"
                style={{ fontFamily: serifFont }}
              >
                Data tells us what happened.
                <span className="text-[#BCD0E7]">
                  {" "}
                  Strategy determines what we do next.
                </span>
              </p>
            </div>

            <div className="border-l border-white/12 pl-6">
              <p className="text-[12px] leading-[1.9] text-white/50 sm:text-[13px]">
                Reporting becomes useful when changes in clicks, impressions,
                landing-page performance, conversions and search visibility are
                connected to clear next actions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            THREE-STAGE INTERPRETATION STRIP
        ========================================================= */}

        <div className="mt-16 border-y border-[#D7E1EB]">
          <div className="grid lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "What We Track",
                text: "Organic clicks, search impressions, keyword visibility, landing-page performance, conversions, local visibility and relevant technical signals.",
              },
              {
                number: "02",
                title: "What It Means",
                text: "We interpret whether visibility is improving, where search demand is growing, which pages are gaining traction and where performance is being lost.",
              },
              {
                number: "03",
                title: "What We Do Next",
                text: "Reporting informs the next priorities — technical fixes, content updates, new search opportunities, page improvements and strategy adjustments.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                className={`
                  relative
                  px-0
                  py-9
                  lg:px-9

                  ${
                    index !== 0
                      ? "border-t border-[#D7E1EB] lg:border-l lg:border-t-0"
                      : ""
                  }
                `}
              >
                <span
                  className="text-[52px] font-bold leading-none text-[#0D2444]/[0.07]"
                  style={{ fontFamily: serifFont }}
                >
                  {item.number}
                </span>

                <h3
                  className="mt-5 text-[25px] font-bold text-[#0D2444]"
                  style={{ fontFamily: serifFont }}
                >
                  {item.title}
                </h3>

                <p className="mt-4 max-w-[420px] text-[12px] leading-[1.85] text-[#687386] sm:text-[13px]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================================
            CLOSING LINE
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 flex flex-col gap-6 border-t border-[#D7E1EB] pt-9 sm:flex-row sm:items-end sm:justify-between"
        >
          <p
            className="max-w-[960px] text-[28px] font-bold leading-[1.35] text-[#0D2444] sm:text-[36px]"
            style={{ fontFamily: serifFont }}
          >
            The goal is not more reporting.
            <span className="text-[#6288B9]">
              {" "}
              It is better decisions from clearer search data.
            </span>
          </p>

          <div className="flex shrink-0 items-center gap-3">
            <span className="text-[9px] font-semibold uppercase tracking-[2px] text-[#8D9CAD]">
              Measure
            </span>

            <ArrowRight className="h-[14px] w-[14px] text-[#6288B9]" />

            <span className="text-[9px] font-semibold uppercase tracking-[2px] text-[#456A9E]">
              Improve
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}