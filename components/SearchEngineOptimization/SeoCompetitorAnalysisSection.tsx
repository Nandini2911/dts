"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  FileText,
  Link2,
  MapPin,
  Search,
  Sparkles,
  Target,
} from "lucide-react";

const landscapeLayers = [
  {
    number: "01",
    eyebrow: "Market Visibility",
    title: "Ranking Competitors",
    text: "Identify the websites repeatedly appearing for the commercial, service and local searches that matter to your business.",
  },
  {
    number: "02",
    eyebrow: "Search Behaviour",
    title: "Search Intent",
    text: "Understand whether ranking pages are informational, commercial, transactional or location-led — and what users expect from each result.",
  },
  {
    number: "03",
    eyebrow: "Content Strength",
    title: "Topic & Page Coverage",
    text: "Compare how deeply competitors cover services, questions, supporting topics and customer decision journeys.",
  },
  {
    number: "04",
    eyebrow: "External Strength",
    title: "Authority Signals",
    text: "Review backlinks, mentions and external credibility signals that may be supporting stronger organic visibility.",
  },
  {
    number: "05",
    eyebrow: "Geographic Relevance",
    title: "Local Search Presence",
    text: "Assess how competitors appear across Mumbai, Navi Mumbai, Thane and other relevant service-area searches.",
  },
];

const opportunities = [
  {
    number: "01",
    title: "Keyword",
    label: "Search Demand",
    text: "Relevant searches where customer demand exists but your website is not positioned strongly yet.",
    icon: Search,
  },
  {
    number: "02",
    title: "Content",
    label: "Topic Coverage",
    text: "Services, questions and search journeys where clearer or more useful content can be created.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Authority",
    label: "Trust Signals",
    text: "Areas where stronger backlinks, brand mentions and digital PR can support credibility.",
    icon: Link2,
  },
  {
    number: "04",
    title: "Local",
    label: "Location Intent",
    text: "Location-led searches where stronger relevance can be built around genuine service areas.",
    icon: MapPin,
  },
];

export default function SeoCompetitorAnalysisSection() {
  return (
    <section className="relative overflow-hidden bg-white py-[120px] sm:py-[140px] lg:py-[160px]">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFC] to-[#EEF3F8]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            [background-image:linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)]
            [background-size:92px_92px]
          "
        />

        <div className="absolute left-[-180px] top-[15%] h-[460px] w-[460px] rounded-full bg-[#6288B9]/10 blur-[135px]" />

        <div className="absolute right-[-180px] bottom-[10%] h-[480px] w-[480px] rounded-full bg-[#456A9E]/8 blur-[145px]" />

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[6%]
            -translate-x-1/2
            whitespace-nowrap
            text-[100px]
            font-bold
            leading-none
            tracking-[-7px]
            text-[#0D2444]/[0.018]
            sm:text-[160px]
            lg:text-[245px]
          "
          style={{
            fontFamily:
              'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
          }}
        >
          LANDSCAPE
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-end lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#6288B9]" />

              <span className="text-[11px] font-semibold uppercase tracking-[3px] text-[#456A9E] sm:text-[12px]">
                Competitor & SERP Opportunity Analysis
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
              Read the Search
              <br />

              <span className="bg-gradient-to-r from-[#0D2444] via-[#456A9E] to-[#6288B9] bg-clip-text text-transparent">
                Landscape Before Competing.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            <p className="max-w-[720px] text-[16px] leading-[1.9] text-[#5B6472] sm:text-[18px]">
              Competitor analysis helps us understand what already performs
              strongly across your search market — which websites appear,
              which pages earn visibility and what may be supporting those
              results.
            </p>

            <p className="mt-4 max-w-[720px] text-[15px] leading-[1.85] text-[#687386] sm:text-[16px]">
              Instead of copying those competitors, we use the landscape to
              identify gaps where your business can create a stronger, clearer
              and more relevant search experience.
            </p>
          </motion.div>
        </div>

        {/* =========================================================
            SECTION INTRO
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-col gap-6 border-b border-[#DCE5EE] pb-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#8C9CAE]">
              Competitive Search Terrain
            </span>

            <h3
              className="mt-3 max-w-[680px] text-[30px] font-bold leading-[1.2] text-[#0D2444] sm:text-[36px]"
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              Five layers help reveal where the real opportunity sits.
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <Target className="h-4 w-4 text-[#456A9E]" />

            <span className="text-[11px] font-semibold text-[#687A8E]">
              Analyse → Compare → Reveal
            </span>
          </div>
        </motion.div>

        {/* =========================================================
            LAYERED SEARCH TERRAIN
        ========================================================= */}

        <div className="relative mt-12">
          {/* left depth rail */}
          <div className="absolute bottom-[40px] left-[23px] top-[34px] hidden w-px bg-gradient-to-b from-[#6288B9] via-[#A4B8D2]/40 to-transparent md:block" />

          <div className="space-y-5 lg:space-y-0">
            {landscapeLayers.map((item, index) => {
              const offsets = [
                "lg:ml-0 lg:mr-[11%]",
                "lg:ml-[5%] lg:mr-[7%]",
                "lg:ml-[10%] lg:mr-[3%]",
                "lg:ml-[15%] lg:mr-0",
                "lg:ml-[20%] lg:mr-0",
              ];

              const verticalOffsets = [
                "",
                "lg:-mt-3",
                "lg:-mt-3",
                "lg:-mt-3",
                "lg:-mt-3",
              ];

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                  }}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-[#DCE5EE]
                    bg-white/90
                    shadow-[0_16px_48px_rgba(13,36,68,0.055)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-[#6288B9]/35
                    hover:shadow-[0_24px_65px_rgba(13,36,68,0.09)]
                    ${offsets[index]}
                    ${verticalOffsets[index]}
                  `}
                >
                  {/* hover sweep */}
                  <div
                    className="
                      absolute
                      inset-0
                      -translate-x-full
                      bg-gradient-to-r
                      from-[#EEF4F9]/70
                      via-[#F8FAFC]
                      to-transparent
                      transition-transform
                      duration-700
                      group-hover:translate-x-0
                    "
                  />

                  {/* huge number */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-5
                      top-1/2
                      -translate-y-1/2
                      text-[86px]
                      font-bold
                      leading-none
                      text-[#0D2444]/[0.035]
                      sm:right-8
                      sm:text-[110px]
                    "
                    style={{
                      fontFamily:
                        'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                    }}
                  >
                    {item.number}
                  </div>

                  <div className="relative z-10 grid gap-6 px-6 py-7 sm:px-8 md:grid-cols-[80px_0.55fr_1fr] md:items-center lg:px-9">
                    {/* layer number */}
                    <div className="relative">
                      <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#DCE5EE] bg-[#F7FAFC] shadow-[0_7px_20px_rgba(13,36,68,0.05)]">
                        <span className="text-[10px] font-bold tracking-[1px] text-[#456A9E]">
                          {item.number}
                        </span>
                      </div>

                      <div className="absolute left-[19px] top-[48px] hidden h-[40px] w-px bg-[#DCE5EE] md:block" />
                    </div>

                    {/* title */}
                    <div>
                      <span className="text-[8px] font-semibold uppercase tracking-[2.3px] text-[#91A0B0]">
                        {item.eyebrow}
                      </span>

                      <h4
                        className="mt-2 text-[21px] font-bold text-[#0D2444] sm:text-[23px]"
                        style={{
                          fontFamily:
                            'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                        }}
                      >
                        {item.title}
                      </h4>
                    </div>

                    {/* copy */}
                    <p className="max-w-[650px] text-[12px] leading-[1.8] text-[#687386] sm:text-[13px]">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* =====================================================
              CONNECTOR INTO OPPORTUNITY
          ===================================================== */}

          <div className="relative mx-auto mt-6 flex w-fit flex-col items-center">
            <div className="h-12 w-px bg-gradient-to-b from-[#6288B9]/20 to-[#456A9E]" />

            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6288B9]/30 bg-white shadow-[0_10px_30px_rgba(13,36,68,0.08)]">
              <ArrowDownRight className="h-4 w-4 text-[#456A9E]" />
            </div>
          </div>
        </div>

        {/* =========================================================
            OPPORTUNITY DECK
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative
            mt-5
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-br
            from-[#091526]
            via-[#102644]
            to-[#456A9E]
            shadow-[0_32px_90px_rgba(13,36,68,0.24)]
          "
        >
          {/* texture */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.045]
              [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
              [background-size:46px_46px]
            "
          />

          <div className="absolute right-[-100px] top-[-100px] h-[360px] w-[360px] rounded-full bg-[#6288B9]/30 blur-[110px]" />

          <div className="absolute bottom-[-120px] left-[15%] h-[300px] w-[300px] rounded-full bg-white/[0.06] blur-[100px]" />

          <div className="relative z-10 p-7 sm:p-9 lg:p-11">
            {/* top */}
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <Sparkles className="h-4 w-4 text-[#BCD0E7]" />

                  <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#BCD0E7]">
                    Opportunity Reveal
                  </span>
                </div>

                <h3
                  className="mt-4 max-w-[760px] text-[31px] font-bold leading-[1.2] text-white sm:text-[39px] lg:text-[44px]"
                  style={{
                    fontFamily:
                      'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                  }}
                >
                  Find the part of the search landscape your competitors have
                  not fully owned.
                </h3>
              </div>

              <p className="max-w-[500px] text-[12px] leading-[1.85] text-white/50 sm:text-[13px]">
                We prioritize opportunities that connect with real search
                demand, your services, customer intent and the markets your
                business genuinely wants to grow in.
              </p>
            </div>

            {/* =====================================================
                OPPORTUNITY STRIPS
            ===================================================== */}

            <div className="mt-10 border-y border-white/10">
              {opportunities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                    className="
                      group
                      relative
                      grid
                      gap-5
                      border-b
                      border-white/10
                      py-6
                      last:border-b-0
                      sm:grid-cols-[58px_0.45fr_0.38fr_1fr_40px]
                      sm:items-center
                    "
                  >
                    {/* number */}
                    <span
                      className="text-[28px] font-bold text-white/[0.12]"
                      style={{
                        fontFamily:
                          'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                      }}
                    >
                      {item.number}
                    </span>

                    {/* title */}
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-[13px]
                          border
                          border-white/10
                          bg-white/[0.07]
                          text-[#BCD0E7]
                          transition-all
                          duration-300
                          group-hover:bg-white
                          group-hover:text-[#0D2444]
                        "
                      >
                        <Icon className="h-4 w-4" />
                      </div>

                      <h4
                        className="text-[18px] font-bold text-white"
                        style={{
                          fontFamily:
                            'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                        }}
                      >
                        {item.title}
                      </h4>
                    </div>

                    {/* label */}
                    <span className="text-[9px] font-semibold uppercase tracking-[2px] text-[#9DB6D2]">
                      {item.label}
                    </span>

                    {/* description */}
                    <p className="max-w-[590px] text-[11px] leading-[1.75] text-white/45 sm:text-[12px]">
                      {item.text}
                    </p>

                    <ArrowDownRight className="hidden h-4 w-4 text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#BCD0E7] sm:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            END STATEMENT
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="mt-16"
        >
          <div className="grid gap-9 border-t border-[#DCE5EE] pt-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#8C9CAD]">
                Competitive Strategy Principle
              </span>

              <p
                className="
                  mt-4
                  max-w-[970px]
                  text-[30px]
                  font-bold
                  leading-[1.27]
                  tracking-[-1px]
                  text-[#0D2444]
                  sm:text-[38px]
                  lg:text-[44px]
                "
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                What competitors rank for gives us context.
                <span className="text-[#6288B9]">
                  {" "}
                  What they still leave unanswered gives us direction.
                </span>
              </p>
            </div>

            <div className="border-l border-[#DCE5EE] pl-6">
              <p className="text-[12px] leading-[1.8] text-[#687386] sm:text-[13px]">
                The strongest opportunities are prioritized around relevance,
                customer intent, genuine market demand and long-term organic
                value — not simply because a competitor ranks for them.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}