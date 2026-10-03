"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Braces,
  FileCode2,
  Gauge,
  Link2,
  MonitorSmartphone,
  Route,
  Search,
  Sparkles,
  Tags,
} from "lucide-react";

const serifFont =
  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif';

const websiteItems = [
  {
    icon: Route,
    title: "Website Architecture",
    text: "Pages and navigation are structured around services, users and search demand so important content is easy to discover.",
  },
  {
    icon: Gauge,
    title: "Performance & Speed",
    text: "A faster technical foundation improves usability and supports stronger crawling, engagement and overall site quality.",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile Experience",
    text: "Layouts and interactions remain usable, responsive and conversion-focused across mobile, tablet and desktop devices.",
  },
  {
    icon: FileCode2,
    title: "CMS Structure",
    text: "Content systems should make important SEO elements easy to manage without compromising the website experience.",
  },
];

const seoItems = [
  {
    icon: Tags,
    title: "SEO-Friendly URLs",
    text: "Clear page relationships and readable URL structures support both search relevance and better website organization.",
  },
  {
    icon: Search,
    title: "Search-Led Pages",
    text: "Important services, topics and locations need dedicated pages aligned with real customer search intent.",
  },
  {
    icon: Link2,
    title: "Internal Linking",
    text: "Related services, articles and supporting pages should connect naturally across the website to strengthen relevance.",
  },
  {
    icon: Braces,
    title: "Metadata & Structured Data",
    text: "Technical implementation should support titles, descriptions and appropriate structured markup across important pages.",
  },
];

export default function SeoWebsiteIntegrationSection() {
  return (
    <section className="relative overflow-hidden bg-white py-[120px] sm:py-[140px] lg:py-[160px]">
      {/* =========================================================
          GLOBAL LIGHT BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_52%,#EEF4F9_100%)]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            [background-image:linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)]
            [background-size:92px_92px]
          "
        />

        <div className="absolute left-[-220px] top-[18%] h-[500px] w-[500px] rounded-full bg-[#6288B9]/10 blur-[150px]" />

        <div className="absolute right-[-200px] bottom-[8%] h-[520px] w-[520px] rounded-full bg-[#456A9E]/8 blur-[150px]" />

        <div
          className="
            absolute
            right-[-25px]
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
          FOUNDATION
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-6 md:px-8 lg:px-10">
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
                SEO-Ready Digital Foundation
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
              SEO Performs Better When
              <br />

              <span className="bg-gradient-to-r from-[#0D2444] via-[#456A9E] to-[#6288B9] bg-clip-text text-transparent">
                the Website Is Built for Search.
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
              SEO works more efficiently when search requirements are
              considered while the website is being structured. Architecture,
              performance, mobile usability, URLs and content templates all
              influence how effectively organic growth can be built.
            </p>

            <p className="mt-4 max-w-[690px] text-[15px] leading-[1.85] text-[#718094] sm:text-[16px]">
              That is why SEO and website development should work as one
              connected system rather than treating optimization as something
              added after launch.
            </p>
          </motion.div>
        </div>

        {/* =========================================================
            SPLIT INTEGRATION AREA
        ========================================================= */}

        <div
          className="
            relative
            mt-20
            overflow-hidden
            rounded-[38px]
            border
            border-[#D7E1EB]
            shadow-[0_30px_90px_rgba(13,36,68,0.08)]
          "
        >
          {/* split bg only inside this block */}

          <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-full bg-[#F6F9FC] lg:w-1/2" />
            <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[#07111F] lg:block" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2">
            {/* =====================================================
                LEFT — WEBSITE FOUNDATION
            ===================================================== */}

            <div className="p-7 sm:p-9 lg:p-11 xl:p-12">
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="border-b border-[#D7E1EB] pb-7"
              >
                <span className="text-[8px] font-semibold uppercase tracking-[2.7px] text-[#8D9CAD]">
                  Layer 01
                </span>

                <div className="mt-3 flex items-center justify-between gap-6">
                  <h3
                    className="text-[30px] font-bold leading-[1.15] text-[#0D2444] sm:text-[34px]"
                    style={{ fontFamily: serifFont }}
                  >
                    Website Foundation
                  </h3>

                  <FileCode2 className="h-[22px] w-[22px] text-[#456A9E]" />
                </div>

                <p className="mt-4 max-w-[540px] text-[12px] leading-[1.85] text-[#718094] sm:text-[13px]">
                  The technical and structural layer that determines how easily
                  users and search engines can understand and navigate the site.
                </p>
              </motion.div>

              <div>
                {websiteItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.06,
                      }}
                      className="
                        group
                        grid
                        gap-5
                        border-b
                        border-[#D7E1EB]
                        py-7
                        sm:grid-cols-[50px_1fr]
                        sm:items-start
                      "
                    >
                      <div
                        className="
                          flex
                          h-[46px]
                          w-[46px]
                          items-center
                          justify-center
                          rounded-[15px]
                          border
                          border-[#D7E1EB]
                          bg-white
                          text-[#456A9E]
                          transition-all
                          duration-300
                          group-hover:bg-[#0D2444]
                          group-hover:text-white
                        "
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </div>

                      <div>
                        <span className="text-[8px] font-semibold tracking-[2px] text-[#A0ACB9]">
                          0{index + 1}
                        </span>

                        <h4
                          className="mt-1 text-[21px] font-bold text-[#0D2444]"
                          style={{ fontFamily: serifFont }}
                        >
                          {item.title}
                        </h4>

                        <p className="mt-3 max-w-[520px] text-[12px] leading-[1.85] text-[#687386]">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* =====================================================
                RIGHT — SEARCH LAYER
            ===================================================== */}

            <div className="bg-[#07111F] p-7 sm:p-9 lg:bg-transparent lg:p-11 xl:p-12">
              <motion.div
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="border-b border-white/10 pb-7"
              >
                <span className="text-[8px] font-semibold uppercase tracking-[2.7px] text-[#8FA9C7]">
                  Layer 02
                </span>

                <div className="mt-3 flex items-center justify-between gap-6">
                  <h3
                    className="text-[30px] font-bold leading-[1.15] text-white sm:text-[34px]"
                    style={{ fontFamily: serifFont }}
                  >
                    Search Layer
                  </h3>

                  <Search className="h-[22px] w-[22px] text-[#BCD0E7]" />
                </div>

                <p className="mt-4 max-w-[540px] text-[12px] leading-[1.85] text-white/42 sm:text-[13px]">
                  The search-focused layer that turns website structure into
                  clearer relevance around services, topics and customer
                  intent.
                </p>
              </motion.div>

              <div>
                {seoItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.06,
                      }}
                      className="
                        group
                        grid
                        gap-5
                        border-b
                        border-white/10
                        py-7
                        sm:grid-cols-[50px_1fr]
                        sm:items-start
                      "
                    >
                      <div
                        className="
                          flex
                          h-[46px]
                          w-[46px]
                          items-center
                          justify-center
                          rounded-[15px]
                          border
                          border-white/10
                          bg-white/[0.06]
                          text-[#BCD0E7]
                          transition-all
                          duration-300
                          group-hover:bg-white
                          group-hover:text-[#0D2444]
                        "
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </div>

                      <div>
                        <span className="text-[8px] font-semibold tracking-[2px] text-white/25">
                          0{index + 1}
                        </span>

                        <h4
                          className="mt-1 text-[21px] font-bold text-white"
                          style={{ fontFamily: serifFont }}
                        >
                          {item.title}
                        </h4>

                        <p className="mt-3 max-w-[520px] text-[12px] leading-[1.85] text-white/45">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =====================================================
              CENTER CONNECTION BADGE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.86 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="
              absolute
              left-1/2
              top-1/2
              z-30
              hidden
              h-[76px]
              w-[76px]
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border-[8px]
              border-white
              bg-[#0D2444]
              shadow-[0_16px_44px_rgba(13,36,68,0.22)]
              lg:flex
            "
          >
            <Sparkles className="h-[20px] w-[20px] text-[#BCD0E7]" />
          </motion.div>
        </div>

        {/* =========================================================
            MERGED OUTCOME
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-12
            overflow-hidden
            rounded-[30px]
            border
            border-[#D7E1EB]
            bg-white
          "
        >
          <div className="grid lg:grid-cols-[0.3fr_0.7fr]">
            <div className="bg-[#EDF3F8] px-7 py-8 sm:px-9">
              <span className="text-[8px] font-semibold uppercase tracking-[2.6px] text-[#6288B9]">
                Combined Outcome
              </span>

              <h3
                className="mt-3 text-[27px] font-bold leading-[1.15] text-[#0D2444]"
                style={{ fontFamily: serifFont }}
              >
                SEO-Ready
                <br />
                Website System
              </h3>
            </div>

            <div className="px-7 py-8 sm:px-9 lg:px-12">
              <p
                className="max-w-[940px] text-[24px] font-bold leading-[1.45] text-[#0D2444] sm:text-[29px]"
                style={{ fontFamily: serifFont }}
              >
                Architecture + performance + content structure + search intent
                <span className="text-[#6288B9]">
                  {" "}
                  create a stronger foundation for organic growth.
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            FULL-WIDTH CTA
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
            rounded-[38px]
            bg-[#0D2444]
            shadow-[0_28px_80px_rgba(13,36,68,0.20)]
          "
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_22%,rgba(98,136,185,0.34),transparent_28%),linear-gradient(135deg,#091A31_0%,#0D2444_52%,#173B66_100%)]" />

          <div
            className="
              absolute
              inset-0
              opacity-[0.045]
              [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
              [background-size:56px_56px]
            "
          />

          <div className="absolute right-[-100px] top-[-100px] h-[340px] w-[340px] rounded-full bg-[#6288B9]/20 blur-[100px]" />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-35px]
              right-[20px]
              text-[120px]
              font-bold
              leading-none
              tracking-[-8px]
              text-white/[0.025]
              sm:text-[170px]
              lg:text-[210px]
            "
            style={{ fontFamily: serifFont }}
          >
            BUILD
          </div>

          <div
            className="
              relative
              z-10
              grid
              gap-12
              p-7
              sm:p-9
              lg:grid-cols-[1.28fr_0.72fr]
              lg:items-end
              lg:p-12
              xl:p-14
            "
          >
            {/* LEFT */}

            <div>
              <div className="flex items-center gap-4">
                <div className="h-px w-10 bg-[#8FA9C7]" />

                <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#9EB8D6]">
                  SEO + Development
                </span>
              </div>

              <h3
                className="
                  mt-6
                  max-w-[900px]
                  text-[31px]
                  font-bold
                  leading-[1.18]
                  tracking-[-1.2px]
                  text-white
                  sm:text-[40px]
                  lg:text-[46px]
                "
                style={{ fontFamily: serifFont }}
              >
                Search strategy becomes easier to execute
                <span className="text-[#BCD0E7]">
                  {" "}
                  when the website supports it from the beginning.
                </span>
              </h3>

              <p className="mt-6 max-w-[760px] text-[13px] leading-[1.9] text-white/50 sm:text-[14px]">
                When SEO and development work together, website structure,
                performance, content architecture and search intent can support
                the same growth strategy from day one.
              </p>
            </div>

            {/* RIGHT */}

            <div className="lg:flex lg:justify-end">
              <div className="w-full max-w-[360px] border-t border-white/12 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <span className="text-[8px] font-semibold uppercase tracking-[2.5px] text-white/35">
                  Explore the Development Side
                </span>

                <p className="mt-3 text-[12px] leading-[1.75] text-white/48">
                  See how we approach website architecture, performance, UX and
                  digital infrastructure.
                </p>

                <Link
                  href="/services/web-development-marketing"
                  className="
                    group
                    mt-6
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-[14px]
                    bg-white
                    px-6
                    py-[15px]
                    text-[12px]
                    font-semibold
                    text-[#0D2444]
                    shadow-[0_12px_32px_rgba(0,0,0,0.16)]
                    transition-all
                    duration-300
                    hover:-translate-y-[2px]
                    hover:bg-[#F2F6FA]
                  "
                >
                  Explore Website Development

                  <ArrowUpRight className="h-[15px] w-[15px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}