"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  MapPin,
  Search,
  Star,
  Target,
} from "lucide-react";

const locationLayers = [
  {
    number: "01",
    city: "Mumbai",
    label: "Primary Market",
    description:
      "Build stronger relevance around high-intent local searches connected to your actual services.",
  },
  {
    number: "02",
    city: "Navi Mumbai",
    label: "Growth Market",
    description:
      "Expand local visibility where customers are actively searching for relevant businesses and services.",
  },
  {
    number: "03",
    city: "Thane",
    label: "Service Area",
    description:
      "Strengthen location signals where your business genuinely serves customers and competes for demand.",
  },
];

const localSignals = [
  {
    icon: Building2,
    title: "Google Business Profile",
    text: "Improve business information, service relevance and local discoverability.",
  },
  {
    icon: Search,
    title: "Local Keyword Strategy",
    text: "Map city-specific search terms to pages and relevant service intent.",
  },
  {
    icon: Star,
    title: "Reviews & Reputation",
    text: "Support local trust through consistent reputation and review signals.",
  },
  {
    icon: Target,
    title: "Location Relevance",
    text: "Connect content and landing pages with the markets you actually target.",
  },
];

const localQueries = [
  "SEO agency in Mumbai",
  "SEO company Mumbai",
  "local SEO Mumbai",
  "SEO services Navi Mumbai",
];

export default function SeoLocalSeoSection() {
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
            opacity-[0.022]
            [background-image:linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)]
            [background-size:88px_88px]
          "
        />

        <div className="absolute left-[-170px] top-[15%] h-[430px] w-[430px] rounded-full bg-[#6288B9]/10 blur-[120px]" />

        <div className="absolute right-[-150px] top-[35%] h-[460px] w-[460px] rounded-full bg-[#456A9E]/8 blur-[130px]" />

        <div
          className="
            pointer-events-none
            absolute
            right-[2%]
            top-[4%]
            text-[130px]
            font-bold
            leading-none
            text-[#0D2444]/[0.022]
            sm:text-[190px]
            lg:text-[250px]
          "
          style={{
            fontFamily:
              'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
          }}
        >
          LOCAL
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
                Local SEO
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
              Local SEO in Mumbai
              <br />

              <span className="bg-gradient-to-r from-[#0D2444] via-[#456A9E] to-[#6288B9] bg-clip-text text-transparent">
                Built Around Real Search Intent.
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
              Local SEO helps businesses appear more relevant when customers
              search for services within a particular city, location or service
              area.
            </p>

            <p className="mt-4 max-w-[720px] text-[15px] leading-[1.85] text-[#687386] sm:text-[16px]">
              For businesses targeting Mumbai, Navi Mumbai, Thane and other
              relevant markets, we strengthen local search signals through
              location-focused keywords, business information, local content
              and search intent alignment.
            </p>
          </motion.div>
        </div>

        {/* =========================================================
            MAIN VISUAL LAYOUT
        ========================================================= */}

        <div className="mt-18 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          {/* =====================================================
              LEFT — EDITORIAL STRATEGY
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="border-l border-[#6288B9]/25 pl-6 sm:pl-8">
              <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#8A9CAF]">
                Local Search Strategy
              </span>

              <h3
                className="mt-5 max-w-[540px] text-[31px] font-bold leading-[1.25] text-[#0D2444] sm:text-[37px]"
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                Local visibility should follow where your customers actually
                search.
              </h3>

              <p className="mt-6 max-w-[570px] text-[14px] leading-[1.9] text-[#687386] sm:text-[15px]">
                We do not create location pages simply to increase website
                volume. Each location should support genuine business coverage,
                relevant search demand and a useful customer experience.
              </p>
            </div>

            {/* LOCAL QUERY LINES */}
            <div className="mt-12">
              <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#95A3B3]">
                Example Local Searches
              </span>

              <div className="mt-5 border-t border-[#DDE5ED]">
                {localQueries.map((query, index) => (
                  <motion.div
                    key={query}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      gap-5
                      border-b
                      border-[#DDE5ED]
                      py-5
                    "
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[9px] font-semibold tracking-[2px] text-[#A2AFBC]">
                        0{index + 1}
                      </span>

                      <Search className="h-4 w-4 text-[#6288B9]" />

                      <span className="text-[13px] font-medium text-[#526579] sm:text-[14px]">
                        {query}
                      </span>
                    </div>

                    <ArrowRight className="h-4 w-4 text-[#A0ADBA] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#456A9E]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — LAYERED LOCATION COMPOSITION
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            className="relative min-h-[690px]"
          >
            {/* ambient circular background */}
            <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6288B9]/10" />

            <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6288B9]/10" />

            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6288B9]/5 blur-xl" />

            {/* connector line */}
            <div className="absolute left-[47px] top-[115px] hidden h-[395px] w-px bg-gradient-to-b from-[#6288B9] via-[#6288B9]/25 to-transparent sm:block" />

            <div className="relative z-10 space-y-5 pt-8 sm:pl-4">
              {locationLayers.map((item, index) => (
                <motion.div
                  key={item.city}
                  initial={{
                    opacity: 0,
                    y: 22,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                  }}
                  className={`
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    bg-white/90
                    p-6
                    shadow-[0_18px_55px_rgba(13,36,68,0.07)]
                    backdrop-blur-xl
                    sm:p-7

                    ${
                      index === 0
                        ? "border-[#6288B9]/30 sm:ml-0"
                        : index === 1
                        ? "border-[#DCE5EE] sm:ml-12"
                        : "border-[#DCE5EE] sm:ml-24"
                    }
                  `}
                >
                  <div className="absolute right-[-50px] top-[-55px] h-[180px] w-[180px] rounded-full bg-[#6288B9]/8 blur-3xl" />

                  <div className="relative z-10 flex items-start gap-5">
                    <div className="relative shrink-0">
                      <div
                        className={`
                          flex
                          items-center
                          justify-center
                          rounded-full
                          border
                          bg-white
                          shadow-[0_8px_24px_rgba(13,36,68,0.08)]

                          ${
                            index === 0
                              ? "h-[66px] w-[66px] border-[#6288B9]/30"
                              : "h-[58px] w-[58px] border-[#DCE5EE]"
                          }
                        `}
                      >
                        <MapPin
                          className={
                            index === 0
                              ? "h-6 w-6 text-[#456A9E]"
                              : "h-5 w-5 text-[#6288B9]"
                          }
                        />
                      </div>

                      {index === 0 && (
                        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#6288B9]/10" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <span className="text-[9px] font-semibold uppercase tracking-[2px] text-[#93A1B2]">
                            {item.number} · {item.label}
                          </span>

                          <h3
                            className="mt-1 text-[28px] font-bold text-[#0D2444] sm:text-[33px]"
                            style={{
                              fontFamily:
                                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                            }}
                          >
                            {item.city}
                          </h3>
                        </div>

                        {index === 0 && (
                          <span className="rounded-full bg-[#EEF4F9] px-3 py-2 text-[9px] font-semibold uppercase tracking-[1.5px] text-[#456A9E]">
                            Core Market
                          </span>
                        )}
                      </div>

                      <p className="mt-3 max-w-[500px] text-[12px] leading-[1.75] text-[#687386] sm:text-[13px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* floating location indicator */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-[25px]
                right-[10px]
                z-20
                hidden
                rounded-[20px]
                border
                border-[#DCE5EE]
                bg-white/90
                px-5
                py-4
                shadow-[0_14px_40px_rgba(13,36,68,0.08)]
                backdrop-blur-xl
                md:block
              "
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#EEF4F9]">
                  <Target className="h-4 w-4 text-[#456A9E]" />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[2px] text-[#97A5B5]">
                    Strategy
                  </p>

                  <p className="mt-1 text-[12px] font-semibold text-[#526579]">
                    Real service areas only
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* =========================================================
            LOCAL SIGNALS — EDITORIAL ROWS
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="
            mt-16
            overflow-hidden
            rounded-[32px]
            border
            border-[#DCE5EE]
            bg-white
            shadow-[0_18px_60px_rgba(15,23,42,0.05)]
          "
        >
          <div className="grid lg:grid-cols-[0.38fr_1.62fr]">
            <div className="border-b border-[#E5EBF1] bg-gradient-to-br from-[#0D2444] to-[#456A9E] p-7 lg:border-b-0 lg:border-r sm:p-8">
              <span className="text-[9px] font-semibold uppercase tracking-[3px] text-white/45">
                Local Signals
              </span>

              <h3
                className="mt-4 text-[27px] font-bold leading-[1.2] text-white"
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                What builds local relevance?
              </h3>

              <p className="mt-4 text-[12px] leading-[1.8] text-white/55">
                Local visibility comes from multiple signals working together,
                not a single optimization.
              </p>
            </div>

            <div>
              {localSignals.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                    className="
                      group
                      grid
                      gap-4
                      border-b
                      border-[#E5EBF1]
                      px-6
                      py-6
                      last:border-b-0
                      sm:grid-cols-[60px_0.48fr_1fr]
                      sm:items-center
                      sm:px-8
                    "
                  >
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#DCE5EE]
                        bg-[#F8FAFC]
                        text-[#456A9E]
                        transition-all
                        duration-300
                        group-hover:bg-[#0D2444]
                        group-hover:text-white
                      "
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </div>

                    <div>
                      <span className="text-[9px] font-semibold tracking-[2px] text-[#A0ADBB]">
                        0{index + 1}
                      </span>

                      <h4
                        className="mt-1 text-[17px] font-bold text-[#0D2444]"
                        style={{
                          fontFamily:
                            'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                        }}
                      >
                        {item.title}
                      </h4>
                    </div>

                    <p className="max-w-[650px] text-[12px] leading-[1.75] text-[#687386] sm:text-[13px]">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            FINAL PRINCIPLE + CTA
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 grid gap-8 border-t border-[#DCE5EE] pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
        >
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#8B9CAF]">
              Location Strategy Principle
            </span>

            <p
              className="mt-4 max-w-[850px] text-[27px] font-bold leading-[1.3] text-[#0D2444] sm:text-[34px]"
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              Build location relevance around markets your business genuinely
              serves —
              <span className="text-[#6288B9]">
                {" "}
                not hundreds of repetitive city pages.
              </span>
            </p>
          </div>

          <div className="lg:text-right">
            <Link
              href="/contact"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-[17px]
                bg-gradient-to-r
                from-[#0D2444]
                via-[#1D3A66]
                to-[#6288B9]
                px-7
                py-4
                text-[13px]
                font-semibold
                text-white
                shadow-[0_12px_30px_rgba(13,36,68,0.18)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_18px_42px_rgba(13,36,68,0.24)]
              "
            >
              Discuss Local SEO

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}