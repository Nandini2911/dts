"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Compass,
  MapPin,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";

const strategyPoints = [
  {
    number: "01",
    title: "Understand Search Demand",
    description:
      "We identify how people search for your services in Mumbai, what language they use and which search terms show real commercial intent.",
    icon: Search,
  },
  {
    number: "02",
    title: "Find Competitive Gaps",
    description:
      "We analyze competitors, ranking pages and missed search opportunities to understand where your brand can build stronger organic visibility.",
    icon: Target,
  },
  {
    number: "03",
    title: "Build Long-Term Search Growth",
    description:
      "We turn those insights into a structured SEO roadmap covering technical fixes, content, local visibility and ongoing optimization.",
    icon: TrendingUp,
  },
];

const searchLayers = [
  {
    title: "Informational",
    text: "Capture users researching solutions, services and industry questions.",
  },
  {
    title: "Commercial",
    text: "Reach people comparing providers, agencies and service options.",
  },
  {
    title: "Local",
    text: "Strengthen visibility for Mumbai and location-led search intent.",
  },
  {
    title: "Transactional",
    text: "Support searches from users ready to enquire, book or take action.",
  },
];

export default function SeoOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-white py-[110px] sm:py-[130px] lg:py-[150px]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFC] to-white" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)]
            [background-size:78px_78px]
          "
        />

        <div className="absolute left-[-160px] top-[18%] h-[420px] w-[420px] rounded-full bg-[#6288B9]/10 blur-3xl" />

        <div className="absolute bottom-[-180px] right-[-120px] h-[440px] w-[440px] rounded-full bg-[#0D2444]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-4"
        >
          <div className="h-px w-12 bg-[#6288B9]" />

          <span className="text-[11px] font-semibold uppercase tracking-[3px] text-[#456A9E] sm:text-[12px]">
            SEO Strategy for Mumbai Businesses
          </span>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          {/* LEFT */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                max-w-[760px]
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
              SEO That Goes
              <br />

              <span className="bg-gradient-to-r from-[#0D2444] via-[#456A9E] to-[#6288B9] bg-clip-text text-transparent">
                Beyond Rankings
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-8 max-w-[760px] text-[16px] leading-[1.95] text-[#5B6472] sm:text-[18px]"
            >
              Ranking on Google is useful only when the right audience
              discovers your business. Our SEO approach focuses on search
              intent, website performance, content relevance, technical health,
              authority and conversion opportunities instead of chasing
              rankings in isolation.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.16 }}
              className="mt-4 max-w-[760px] text-[15px] leading-[1.95] text-[#687386] sm:text-[17px]"
            >
              As an SEO agency in Mumbai, we study how your customers search,
              which competitors dominate important queries and where your
              website is missing opportunities across local, commercial and
              service-led searches.
            </motion.p>

            {/* FEATURE STATEMENT */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="
                relative
                mt-10
                overflow-hidden
                rounded-[30px]
                border
                border-[#DDE6EF]
                bg-[#F7FAFC]
                p-7
                shadow-[0_18px_60px_rgba(15,23,42,0.06)]
                sm:p-8
              "
            >
              <div
                className="
                  absolute
                  right-5
                  top-[-22px]
                  text-[105px]
                  font-bold
                  leading-none
                  text-[#0D2444]/[0.035]
                  sm:text-[135px]
                "
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                SEO
              </div>

              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-gradient-to-br from-[#0D2444] to-[#6288B9] shadow-[0_10px_28px_rgba(13,36,68,0.18)]">
                  <Compass className="h-5 w-5 text-white" />
                </div>

                <p
                  className="
                    mt-6
                    max-w-[640px]
                    text-[24px]
                    font-bold
                    leading-[1.35]
                    tracking-[-0.7px]
                    text-[#0D2444]
                    sm:text-[28px]
                  "
                  style={{
                    fontFamily:
                      'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                  }}
                >
                  Search visibility should connect your brand with people who
                  are actually looking for what you offer.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#DCE5EF] bg-white px-4 py-2 text-[12px] font-semibold text-[#496684]">
                    <MapPin className="h-3.5 w-3.5" />
                    Mumbai Search Intent
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-[#DCE5EF] bg-white px-4 py-2 text-[12px] font-semibold text-[#496684]">
                    <Building2 className="h-3.5 w-3.5" />
                    Service-Led SEO
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="absolute bottom-8 left-[25px] top-8 hidden w-px bg-gradient-to-b from-[#6288B9]/40 via-[#6288B9]/15 to-transparent sm:block" />

            <div className="space-y-5">
              {strategyPoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.12,
                    }}
                    className="
                      group
                      relative
                      rounded-[26px]
                      border
                      border-[#E0E7EF]
                      bg-white/90
                      p-6
                      shadow-[0_12px_40px_rgba(15,23,42,0.05)]
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:border-[#6288B9]/30
                      hover:shadow-[0_20px_55px_rgba(13,36,68,0.09)]
                      sm:ml-10
                    "
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-[16px]
                          border
                          border-[#6288B9]/15
                          bg-[#F2F6FA]
                          text-[#456A9E]
                          transition-all
                          duration-500
                          group-hover:bg-gradient-to-br
                          group-hover:from-[#0D2444]
                          group-hover:to-[#6288B9]
                          group-hover:text-white
                        "
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#8AA0B9]">
                            {item.number}
                          </span>

                          <ArrowUpRight className="h-4 w-4 text-[#9BAABD] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#456A9E]" />
                        </div>

                        <h3
                          className="
                            mt-2
                            text-[22px]
                            font-bold
                            leading-tight
                            text-[#0D2444]
                          "
                          style={{
                            fontFamily:
                              'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                          }}
                        >
                          {item.title}
                        </h3>

                        <p className="mt-3 text-[14px] leading-[1.8] text-[#687386] sm:text-[15px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SEARCH JOURNEY PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[34px]
            bg-[#0B1220]
            px-6
            py-8
            shadow-[0_30px_90px_rgba(13,36,68,0.16)]
            sm:px-8
            md:mt-20
            md:px-10
            md:py-10
          "
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#111B2C] to-[#1D3A66]" />

          <div
            className="
              absolute
              inset-0
              opacity-[0.05]
              [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
              [background-size:50px_50px]
            "
          />

          <div className="absolute right-[-80px] top-[-80px] h-[260px] w-[260px] rounded-full bg-[#6288B9]/20 blur-3xl" />

          <div className="relative z-10">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#8FA9C7]">
                  Search Journey
                </span>

                <h3
                  className="mt-4 max-w-[460px] text-[28px] font-bold leading-[1.2] text-white sm:text-[34px]"
                  style={{
                    fontFamily:
                      'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                  }}
                >
                  Build Visibility Across Every Stage of Search.
                </h3>

                <p className="mt-5 max-w-[500px] text-[14px] leading-[1.85] text-white/60 sm:text-[15px]">
                  Based on search behaviour, competition and business goals, we
                  build an SEO roadmap designed to improve visibility across
                  informational, commercial, local and transactional searches.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {searchLayers.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                    }}
                    className="
                      rounded-[20px]
                      border
                      border-white/10
                      bg-white/[0.07]
                      p-5
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-white/[0.10]
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold tracking-[2px] text-white/35">
                        0{index + 1}
                      </span>

                      <ArrowUpRight className="h-4 w-4 text-white/30" />
                    </div>

                    <h4
                      className="mt-4 text-[19px] font-bold text-white"
                      style={{
                        fontFamily:
                          'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                      }}
                    >
                      {item.title}
                    </h4>

                    <p className="mt-2 text-[12px] leading-[1.7] text-white/55 sm:text-[13px]">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}