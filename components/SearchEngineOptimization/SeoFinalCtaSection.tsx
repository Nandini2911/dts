"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Search,
  Sparkles,
} from "lucide-react";

const serifFont =
  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif';

const growthAreas = [
  {
    number: "01",
    title: "Find the Opportunity",
    text: "Understand where relevant search demand exists around your services, audience and market.",
  },
  {
    number: "02",
    title: "Build the Search System",
    text: "Connect technical SEO, pages, content and website structure around the opportunities that matter.",
  },
  {
    number: "03",
    title: "Grow What Performs",
    text: "Use search and analytics data to improve visibility, landing pages and organic business outcomes.",
  },
];

export default function SeoFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-white py-[120px] sm:py-[140px] lg:py-[160px]">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_48%,#EEF4F9_100%)]" />

        <div className="absolute left-[-240px] top-[18%] h-[520px] w-[520px] rounded-full bg-[#6288B9]/10 blur-[160px]" />

        <div className="absolute right-[-220px] bottom-[14%] h-[500px] w-[500px] rounded-full bg-[#456A9E]/8 blur-[155px]" />

        <div
          className="
            absolute
            left-1/2
            top-[70px]
            -translate-x-1/2
            whitespace-nowrap
            text-[110px]
            font-bold
            leading-none
            tracking-[-9px]
            text-[#0D2444]/[0.014]
            sm:text-[185px]
            lg:text-[265px]
          "
          style={{ fontFamily: serifFont }}
        >
          GROW
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* =========================================================
            TOP META
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="flex flex-col gap-5 border-y border-[#D5E0EA] py-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-4">
            <Search className="h-[16px] w-[16px] text-[#456A9E]" />

            <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#456A9E]">
              Ready to Grow Through Search?
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <MapPin className="h-[13px] w-[13px] text-[#6288B9]" />

            {["Mumbai", "Navi Mumbai", "India"].map((location, index) => (
              <div key={location} className="flex items-center gap-4">
                <span className="text-[8px] font-semibold uppercase tracking-[2.2px] text-[#8290A0]">
                  {location}
                </span>

                {index < 2 && (
                  <span className="h-[3px] w-[3px] rounded-full bg-[#B8C4CF]" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* =========================================================
            MAIN STATEMENT
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="mx-auto max-w-[1250px] py-[80px] text-center sm:py-[95px] lg:py-[110px]"
        >
          <div className="mx-auto flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#D5E0EA] bg-white shadow-[0_12px_36px_rgba(13,36,68,0.07)]">
            <Sparkles className="h-[20px] w-[20px] text-[#456A9E]" />
          </div>

          <span className="mt-7 block text-[9px] font-semibold uppercase tracking-[3px] text-[#6288B9]">
            Your Next Search Opportunity
          </span>

          <h2
            className="
              mx-auto
              mt-6
              max-w-[1180px]
              text-[42px]
              font-bold
              leading-[1.02]
              tracking-[-2px]
              text-[#0D2444]
              sm:text-[54px]
              md:text-[64px]
              lg:text-[72px]
            "
            style={{ fontFamily: serifFont }}
          >
            Build an SEO Strategy Around
            <span className="text-[#6288B9]">
              {" "}
              the Searches That Can Move Your Business Forward.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[850px] text-[15px] leading-[1.95] text-[#687386] sm:text-[17px]">
            From local visibility and technical SEO to service pages, content
            and website structure, the strategy should begin with the searches
            that matter to your customers and your business.
          </p>
        </motion.div>

        {/* =========================================================
            GROWTH SEQUENCE
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border-y border-[#D5E0EA]"
        >
          <div className="grid lg:grid-cols-3">
            {growthAreas.map((item, index) => (
              <div
                key={item.number}
                className={`
                  relative
                  py-9
                  lg:px-9

                  ${
                    index !== 0
                      ? "border-t border-[#D5E0EA] lg:border-l lg:border-t-0"
                      : ""
                  }
                `}
              >
                <div className="flex items-start justify-between gap-7">
                  <div>
                    <span className="text-[8px] font-semibold tracking-[2.3px] text-[#A0ACB9]">
                      {item.number}
                    </span>

                    <h3
                      className="mt-3 text-[24px] font-bold leading-[1.2] text-[#0D2444]"
                      style={{ fontFamily: serifFont }}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-[390px] text-[12px] leading-[1.85] text-[#687386] sm:text-[13px]">
                      {item.text}
                    </p>
                  </div>

                  {index < growthAreas.length - 1 && (
                    <ArrowRight className="mt-1 hidden h-[16px] w-[16px] shrink-0 text-[#6288B9] lg:block" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =========================================================
            SERVICES LINE
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="text-[8px] font-semibold uppercase tracking-[2.7px] text-[#8B99A8]">
            Connected Digital Growth
          </span>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {[
              "SEO",
              "Website Development",
              "Content",
              "Digital Strategy",
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-4">
                <span
                  className="text-[15px] font-bold text-[#0D2444]"
                  style={{ fontFamily: serifFont }}
                >
                  {item}
                </span>

                {index < 3 && (
                  <span className="text-[14px] text-[#A5B2BF]">·</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* =========================================================
            DARK ACTION DOCK
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[40px]
            bg-[#0D2444]
            shadow-[0_30px_90px_rgba(13,36,68,0.20)]
          "
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_20%,rgba(98,136,185,0.34),transparent_28%),linear-gradient(135deg,#091A31_0%,#0D2444_55%,#173B66_100%)]" />

          <div
            className="
              absolute
              inset-0
              opacity-[0.04]
              [background-image:linear-gradient(to_right,white_1px,transparent_1px)]
              [background-size:68px_100%]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-45px]
              right-[20px]
              text-[120px]
              font-bold
              leading-none
              tracking-[-8px]
              text-white/[0.025]
              sm:text-[180px]
              lg:text-[220px]
            "
            style={{ fontFamily: serifFont }}
          >
            START
          </div>

          <div
            className="
              relative
              z-10
              grid
              gap-12
              p-7
              sm:p-10
              lg:grid-cols-[1.18fr_0.82fr]
              lg:items-center
              lg:p-14
            "
          >
            {/* LEFT */}

            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#9EB8D6]">
                Start With a Conversation
              </span>

              <p
                className="
                  mt-5
                  max-w-[850px]
                  text-[30px]
                  font-bold
                  leading-[1.28]
                  tracking-[-1px]
                  text-white
                  sm:text-[39px]
                  lg:text-[44px]
                "
                style={{ fontFamily: serifFont }}
              >
                Tell us where your business wants to grow.
                <span className="text-[#BCD0E7]">
                  {" "}
                  We’ll identify where search can support it.
                </span>
              </p>

              <p className="mt-6 max-w-[690px] text-[13px] leading-[1.9] text-white/46 sm:text-[14px]">
                Start with your website, services, market and growth priorities.
                From there, we can define the search opportunities worth
                building around.
              </p>
            </div>

            {/* RIGHT */}

            <div className="lg:flex lg:justify-end">
              <div className="w-full max-w-[420px] border-t border-white/12 pt-7 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
                <span className="text-[8px] font-semibold uppercase tracking-[2.5px] text-white/30">
                  Ready When You Are
                </span>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="
                      group
                      inline-flex
                      w-full
                      items-center
                      justify-between
                      rounded-[14px]
                      bg-white
                      px-6
                      py-[16px]
                      text-[13px]
                      font-semibold
                      text-[#0D2444]
                      shadow-[0_14px_34px_rgba(0,0,0,0.16)]
                      transition-all
                      duration-300
                      hover:-translate-y-[2px]
                      hover:bg-[#EEF3F8]
                    "
                  >
                    <span>Get Free SEO Consultation</span>

                    <ArrowUpRight className="h-[16px] w-[16px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href="/contact"
                    className="
                      group
                      inline-flex
                      w-full
                      items-center
                      justify-between
                      rounded-[14px]
                      border
                      border-white/14
                      bg-white/[0.05]
                      px-6
                      py-[16px]
                      text-[13px]
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-[2px]
                      hover:border-white/24
                      hover:bg-white/[0.09]
                    "
                  >
                    <span>Start Your Project</span>

                    <ArrowRight className="h-[15px] w-[15px] transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <MapPin className="h-[13px] w-[13px] text-[#7899C0]" />

                  <span className="text-[8px] font-semibold uppercase tracking-[2px] text-white/28">
                    Mumbai · Navi Mumbai · India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            FINAL SIGN-OFF
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mt-10 flex flex-col gap-4 border-t border-[#D5E0EA] pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="text-[8px] font-semibold uppercase tracking-[2.5px] text-[#8B99A8]">
            Double Trouble Studio · SEO
          </span>

          <p
            className="text-[17px] font-bold text-[#0D2444]"
            style={{ fontFamily: serifFont }}
          >
            Search visibility built around real business priorities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}