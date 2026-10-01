"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  FileText,
  MapPin,
  Search,
  ShoppingBag,
  Target,
} from "lucide-react";

const queries = [
  {
    query: "how does SEO work",
    type: "Informational",
  },
  {
    query: "best SEO agency in Mumbai",
    type: "Commercial",
  },
  {
    query: "SEO company near me",
    type: "Local",
  },
  {
    query: "hire SEO agency Mumbai",
    type: "Transactional",
  },
];

const intentFlow = [
  {
    number: "01",
    label: "Informational",
    action: "Learn",
  },
  {
    number: "02",
    label: "Commercial",
    action: "Compare",
  },
  {
    number: "03",
    label: "Local",
    action: "Find Nearby",
  },
  {
    number: "04",
    label: "Transactional",
    action: "Take Action",
  },
];

const pageMapping = [
  {
    icon: FileText,
    title: "Educational Content",
    text: "Blogs, guides and supporting content answer research-led searches.",
  },
  {
    icon: Target,
    title: "Service Pages",
    text: "High-intent service pages target commercial and solution-led searches.",
  },
  {
    icon: MapPin,
    title: "Location Pages",
    text: "Local landing pages support Mumbai, Navi Mumbai and relevant service areas.",
  },
  {
    icon: ShoppingBag,
    title: "Conversion Pages",
    text: "Focused landing pages guide action-ready users towards enquiry or conversion.",
  },
];

export default function SeoKeywordIntentSection() {
  return (
    <section className="relative overflow-hidden bg-white py-[120px] sm:py-[140px] lg:py-[160px]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAFCFE] to-[#F2F6FA]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.022]
            [background-image:linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)]
            [background-size:82px_82px]
          "
        />

        <div className="absolute left-[-170px] top-[20%] h-[430px] w-[430px] rounded-full bg-[#6288B9]/10 blur-3xl" />

        <div className="absolute right-[-150px] bottom-[5%] h-[470px] w-[470px] rounded-full bg-[#0D2444]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="mx-auto max-w-[1000px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-px w-10 bg-[#6288B9]" />

            <span className="text-[11px] font-semibold uppercase tracking-[3px] text-[#456A9E] sm:text-[12px]">
              Keyword Research & Search Intent
            </span>

            <div className="h-px w-10 bg-[#6288B9]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
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
            We Don&apos;t Just Find Keywords.
            <br />

            <span className="bg-gradient-to-r from-[#0D2444] via-[#456A9E] to-[#6288B9] bg-clip-text text-transparent">
              We Decide Where They Should Lead.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="mx-auto mt-7 max-w-[850px] text-[16px] leading-[1.9] text-[#5B6472] sm:text-[18px]"
          >
            Search volume alone does not make a keyword valuable. We study what
            people search, why they search and which page should answer that
            intent — creating a clearer connection between search demand,
            website structure and business opportunity.
          </motion.p>
        </div>

        {/* =========================================================
            SEARCH MAPPING STUDIO
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[38px]
            border
            border-[#DCE5EE]
            bg-white
            shadow-[0_30px_90px_rgba(13,36,68,0.09)]
          "
        >
          {/* top bar */}
          <div className="flex flex-col gap-4 border-b border-[#E5EBF1] bg-[#F8FAFC] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#95A4B6]">
                Search Mapping Studio
              </span>

              <p className="mt-1 text-[14px] font-semibold text-[#0D2444]">
                Search Demand → Intent → Destination
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-[#DCE5EE] bg-white px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#6288B9]" />

              <span className="text-[10px] font-semibold text-[#607086]">
                Mumbai Search Strategy
              </span>
            </div>
          </div>

          {/* DESKTOP FLOW */}
          <div className="hidden min-h-[660px] lg:grid lg:grid-cols-[1fr_210px_1fr]">
            {/* LEFT — QUERIES */}
            <div className="relative border-r border-[#E5EBF1] p-8 xl:p-10">
              <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#8D9FB3]">
                01 · What People Search
              </span>

              <h3
                className="mt-3 text-[30px] font-bold text-[#0D2444]"
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                Raw Search Demand
              </h3>

              <p className="mt-3 max-w-[420px] text-[13px] leading-[1.75] text-[#687386]">
                Search queries reveal different levels of awareness, location
                relevance and purchase intent.
              </p>

              <div className="mt-9 space-y-4">
                {queries.map((item, index) => (
                  <motion.div
                    key={item.query}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[20px]
                      border
                      border-[#E1E8F0]
                      bg-[#FBFCFE]
                      px-5
                      py-4
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:border-[#6288B9]/30
                      hover:bg-white
                      hover:shadow-[0_12px_30px_rgba(13,36,68,0.06)]
                    "
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-[#EEF4F9]">
                        <Search className="h-4 w-4 text-[#456A9E]" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[13px] font-semibold text-[#324960]">
                          {item.query}
                        </p>

                        <p className="mt-1 text-[9px] uppercase tracking-[2px] text-[#9AA8B8]">
                          {item.type} intent
                        </p>
                      </div>

                      <ArrowRight className="h-4 w-4 text-[#A0ADBB] transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CENTER — INTENT ROUTER */}
            <div className="relative overflow-hidden bg-[#0B1220] px-5 py-8">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-[#111B2B] to-[#1D3A66]" />

              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.05]
                  [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
                  [background-size:38px_38px]
                "
              />

              <div className="relative z-10 flex h-full flex-col items-center">
                <span className="text-center text-[9px] font-semibold uppercase tracking-[3px] text-white/35">
                  02 · Why They Search
                </span>

                <div className="relative mt-8 flex flex-1 flex-col items-center justify-center">
                  {/* main vertical rail */}
                  <div className="absolute bottom-[35px] top-[35px] left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#6288B9]/50 to-transparent" />

                  <div className="relative z-10 space-y-7">
                    {intentFlow.map((item, index) => (
                      <motion.div
                        key={item.number}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.08,
                        }}
                        className="relative"
                      >
                        <div
                          className="
                            flex
                            h-[92px]
                            w-[150px]
                            flex-col
                            items-center
                            justify-center
                            rounded-[24px]
                            border
                            border-white/10
                            bg-white/[0.08]
                            text-center
                            backdrop-blur-xl
                          "
                        >
                          <span className="text-[8px] tracking-[2px] text-white/30">
                            {item.number}
                          </span>

                          <p className="mt-1 text-[13px] font-semibold text-white">
                            {item.label}
                          </p>

                          <p className="mt-1 text-[9px] uppercase tracking-[2px] text-[#9EB9D6]">
                            {item.action}
                          </p>
                        </div>

                        {index < intentFlow.length - 1 && (
                          <div className="absolute -bottom-[22px] left-1/2 -translate-x-1/2">
                            <ArrowDown className="h-3.5 w-3.5 text-white/20" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — DESTINATIONS */}
            <div className="p-8 xl:p-10">
              <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#8D9FB3]">
                03 · Where They Should Land
              </span>

              <h3
                className="mt-3 text-[30px] font-bold text-[#0D2444]"
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                Search Destination
              </h3>

              <p className="mt-3 max-w-[440px] text-[13px] leading-[1.75] text-[#687386]">
                Every important keyword is mapped to the page type most capable
                of satisfying the user&apos;s intent.
              </p>

              <div className="mt-9 space-y-4">
                {pageMapping.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.08,
                      }}
                      className="
                        relative
                        rounded-[20px]
                        border
                        border-[#E1E8F0]
                        bg-white
                        p-5
                        shadow-[0_8px_26px_rgba(15,23,42,0.04)]
                      "
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#0D2444] to-[#6288B9] text-white">
                          <Icon className="h-4.5 w-4.5" />
                        </div>

                        <div>
                          <div className="flex items-center gap-3">
                            <span className="text-[9px] font-semibold tracking-[2px] text-[#A0ADBB]">
                              0{index + 1}
                            </span>

                            <h4
                              className="text-[18px] font-bold text-[#0D2444]"
                              style={{
                                fontFamily:
                                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                              }}
                            >
                              {item.title}
                            </h4>
                          </div>

                          <p className="mt-2 text-[12px] leading-[1.7] text-[#687386]">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* MOBILE / TABLET */}
          <div className="lg:hidden">
            {/* Queries */}
            <div className="p-6 sm:p-8">
              <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#8D9FB3]">
                01 · Search Demand
              </span>

              <h3
                className="mt-3 text-[26px] font-bold text-[#0D2444]"
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                What People Search
              </h3>

              <div className="mt-6 space-y-3">
                {queries.map((item) => (
                  <div
                    key={item.query}
                    className="flex items-center gap-3 rounded-[17px] border border-[#E2E8F0] bg-[#FAFCFE] px-4 py-3"
                  >
                    <Search className="h-4 w-4 text-[#456A9E]" />

                    <div>
                      <p className="text-[12px] font-semibold text-[#3F5368]">
                        {item.query}
                      </p>

                      <span className="text-[8px] uppercase tracking-[2px] text-[#9AA8B8]">
                        {item.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Intent Flow */}
            <div className="bg-[#0B1220] p-6">
              <span className="text-[9px] font-semibold uppercase tracking-[3px] text-white/35">
                02 · Search Intent
              </span>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {intentFlow.map((item) => (
                  <div
                    key={item.number}
                    className="rounded-[18px] border border-white/10 bg-white/[0.07] p-4"
                  >
                    <span className="text-[8px] tracking-[2px] text-white/30">
                      {item.number}
                    </span>

                    <p className="mt-2 text-[13px] font-semibold text-white">
                      {item.label}
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[2px] text-[#9EB9D6]">
                      {item.action}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Page destination */}
            <div className="p-6 sm:p-8">
              <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#8D9FB3]">
                03 · Page Mapping
              </span>

              <h3
                className="mt-3 text-[26px] font-bold text-[#0D2444]"
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                Where Searchers Land
              </h3>

              <div className="mt-6 space-y-3">
                {pageMapping.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-[18px] border border-[#E2E8F0] bg-[#FAFCFE] p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-[#0D2444] text-white">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div>
                        <h4 className="text-[14px] font-semibold text-[#0D2444]">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-[11px] leading-[1.6] text-[#687386]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            BOTTOM STRATEGY STATEMENT
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-8
            grid
            overflow-hidden
            rounded-[28px]
            border
            border-[#DDE6EF]
            bg-white
            shadow-[0_16px_50px_rgba(15,23,42,0.05)]
            md:grid-cols-[1.3fr_0.7fr]
          "
        >
          <div className="p-6 sm:p-8">
            <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#8D9FB3]">
              Keyword Strategy Principle
            </span>

            <h3
              className="mt-3 max-w-[750px] text-[26px] font-bold leading-[1.25] text-[#0D2444] sm:text-[30px]"
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              The right keyword is not only relevant. It also has the right
              page, the right intent and the right business purpose.
            </h3>
          </div>

          <div className="flex items-center border-t border-[#E5EBF1] bg-[#F7FAFC] p-6 md:border-l md:border-t-0 sm:p-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[2px] text-[#94A3B8]">
                Location Strategy
              </p>

              <div className="mt-3 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#456A9E]" />

                <p className="text-[13px] font-semibold text-[#4D6278]">
                  Mumbai · Navi Mumbai · Relevant Indian Markets
                </p>
              </div>

              <p className="mt-3 text-[12px] leading-[1.7] text-[#748194]">
                Location keywords are mapped only where they match actual
                business targeting and customer demand.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}