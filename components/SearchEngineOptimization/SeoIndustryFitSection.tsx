"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  Hotel,
  MapPinned,
  ShoppingBag,
  Sparkles,
  TentTree,
} from "lucide-react";

const serifFont =
  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif';

export default function SeoIndustryFitSection() {
  return (
    <section className="relative overflow-hidden bg-white py-[120px] sm:py-[140px] lg:py-[160px]">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_58%,#EEF4F9_100%)]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            [background-image:linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)]
            [background-size:90px_90px]
          "
        />

        <div className="absolute left-[-220px] top-[18%] h-[520px] w-[520px] rounded-full bg-[#6288B9]/10 blur-[150px]" />

        <div className="absolute right-[-200px] bottom-[8%] h-[520px] w-[520px] rounded-full bg-[#456A9E]/8 blur-[150px]" />

        <div
          className="
            absolute
            right-[-40px]
            top-[60px]
            whitespace-nowrap
            text-[120px]
            font-bold
            leading-none
            tracking-[-9px]
            text-[#0D2444]/[0.015]
            sm:text-[190px]
            lg:text-[280px]
          "
          style={{ fontFamily: serifFont }}
        >
          MARKETS
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
                Built Around Your Business
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
              Search Strategy Changes
              <br />
              <span className="bg-gradient-to-r from-[#0D2444] via-[#456A9E] to-[#6288B9] bg-clip-text text-transparent">
                When the Business Changes.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <p className="max-w-[700px] text-[16px] leading-[1.9] text-[#5B6472] sm:text-[18px]">
              Hospitality, luxury, events, professional services, startups and
              commerce businesses do not compete for attention in the same way.
              Their organic search strategy should not look the same either.
            </p>

            <p className="mt-4 max-w-[700px] text-[15px] leading-[1.85] text-[#718094] sm:text-[16px]">
              We adapt page structure, search intent, content depth and local
              relevance around how each business actually creates demand.
            </p>
          </motion.div>
        </div>

        {/* =========================================================
            EDITORIAL LANDSCAPE
        ========================================================= */}

        <div className="mt-20 border-y border-[#D9E3ED]">
          <div className="grid lg:grid-cols-12">
            {/* =====================================================
                LARGE FEATURE — HOSPITALITY
            ===================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                relative
                overflow-hidden
                bg-[#0D2444]
                px-7
                py-10
                sm:px-9
                lg:col-span-7
                lg:min-h-[540px]
                lg:px-12
                lg:py-12
              "
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(98,136,185,0.36),transparent_34%),linear-gradient(135deg,#091A31_0%,#0D2444_52%,#173B66_100%)]" />

              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.04]
                  [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
                  [background-size:54px_54px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-45px]
                  right-[10px]
                  text-[220px]
                  font-bold
                  leading-none
                  tracking-[-14px]
                  text-white/[0.035]
                "
                style={{ fontFamily: serifFont }}
              >
                01
              </div>

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[18px] border border-white/15 bg-white/10 text-[#BCD0E7]">
                    <Hotel className="h-[22px] w-[22px]" />
                  </div>

                  <span className="text-[9px] font-semibold uppercase tracking-[3px] text-white/35">
                    01 / Hospitality
                  </span>
                </div>

                <div className="mt-16 max-w-[720px]">
                  <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#9EB8D6]">
                    Properties · Destinations · Experiences
                  </span>

                  <h3
                    className="mt-4 text-[40px] font-bold leading-[1.05] tracking-[-2px] text-white sm:text-[48px] lg:text-[54px]"
                    style={{ fontFamily: serifFont }}
                  >
                    Hospitality & Hotels
                  </h3>

                  <p
                    className="mt-7 max-w-[680px] text-[23px] font-bold leading-[1.4] text-[#D8E5F1] sm:text-[27px]"
                    style={{ fontFamily: serifFont }}
                  >
                    Search visibility should begin before the traveller chooses
                    the property.
                  </p>

                  <p className="mt-6 max-w-[700px] text-[13px] leading-[1.9] text-white/55 sm:text-[14px]">
                    We connect destination demand, property discovery,
                    experience-led searches and booking intent to a search
                    structure that supports the complete hospitality journey.
                  </p>
                </div>

                <div className="mt-auto pt-12">
                  <div className="grid grid-cols-2 border-y border-white/10 sm:grid-cols-4">
                    {[
                      "Destination Search",
                      "Property Visibility",
                      "Experience Pages",
                      "Booking Intent",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className={`
                          min-h-[86px]
                          py-4
                          ${index % 2 !== 0 ? "border-l border-white/10 pl-4" : "pr-4"}
                          ${index > 1 ? "border-t border-white/10 sm:border-t-0" : ""}
                          ${index > 0 ? "sm:border-l sm:border-white/10 sm:pl-5" : ""}
                        `}
                      >
                        <span className="text-[8px] font-semibold tracking-[2px] text-[#8FA9C7]">
                          0{index + 1}
                        </span>

                        <p className="mt-2 text-[11px] font-semibold leading-[1.45] text-white/75">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =====================================================
                LUXURY
            ===================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.07 }}
              className="
                relative
                border-t
                border-[#D9E3ED]
                bg-[#F5F8FB]
                px-7
                py-10
                sm:px-9
                lg:col-span-5
                lg:min-h-[540px]
                lg:border-l
                lg:border-t-0
                lg:px-10
                lg:py-12
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  right-[20px]
                  top-[12px]
                  text-[110px]
                  font-bold
                  leading-none
                  tracking-[-7px]
                  text-[#0D2444]/[0.035]
                "
                style={{ fontFamily: serifFont }}
              >
                02
              </div>

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex h-[54px] w-[54px] items-center justify-center rounded-[17px] bg-[#0D2444] text-white shadow-[0_14px_34px_rgba(13,36,68,0.16)]">
                  <Sparkles className="h-[20px] w-[20px]" />
                </div>

                <div className="mt-14">
                  <span className="text-[9px] font-semibold uppercase tracking-[2.6px] text-[#6288B9]">
                    Premium Positioning · Organic Discovery
                  </span>

                  <h3
                    className="mt-3 text-[32px] font-bold leading-[1.08] tracking-[-1px] text-[#0D2444] sm:text-[38px]"
                    style={{ fontFamily: serifFont }}
                  >
                    Luxury Brands
                  </h3>

                  <p
                    className="mt-6 text-[20px] font-bold leading-[1.45] text-[#1D3A66]"
                    style={{ fontFamily: serifFont }}
                  >
                    Discoverability should increase without making the brand
                    feel less exclusive.
                  </p>

                  <p className="mt-5 text-[13px] leading-[1.85] text-[#687386]">
                    Luxury SEO should balance search visibility, editorial
                    authority and a refined digital experience while keeping
                    brand perception intact.
                  </p>
                </div>

                <div className="mt-auto border-t border-[#D5E0EA] pt-6">
                  <span className="text-[8px] font-semibold uppercase tracking-[2.4px] text-[#9AA7B5]">
                    Search Priority
                  </span>

                  <p className="mt-3 text-[13px] font-semibold text-[#0D2444]">
                    Premium search · authority · editorial depth
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =====================================================
                EVENTS
            ===================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="
                relative
                border-t
                border-[#D9E3ED]
                bg-white
                px-7
                py-10
                sm:px-9
                lg:col-span-4
                lg:min-h-[390px]
                lg:px-9
              "
            >
              <div className="flex items-start justify-between">
                <TentTree className="h-[22px] w-[22px] text-[#456A9E]" />

                <span className="text-[9px] font-semibold tracking-[2px] text-[#A1ADBA]">
                  03
                </span>
              </div>

              <div className="mt-12">
                <span className="text-[8px] font-semibold uppercase tracking-[2.4px] text-[#6288B9]">
                  Destinations · Venues · Planning
                </span>

                <h3
                  className="mt-3 text-[29px] font-bold leading-[1.1] text-[#0D2444]"
                  style={{ fontFamily: serifFont }}
                >
                  Events & Weddings
                </h3>

                <p className="mt-5 text-[13px] leading-[1.85] text-[#687386]">
                  Capture destination, venue, wedding and planning demand before
                  customers reach the final enquiry stage.
                </p>
              </div>

              <div className="absolute bottom-0 left-7 right-7 h-[3px] bg-gradient-to-r from-[#0D2444] via-[#6288B9] to-transparent sm:left-9 sm:right-9" />
            </motion.div>

            {/* =====================================================
                PROFESSIONAL SERVICES
            ===================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="
                relative
                border-t
                border-[#D9E3ED]
                bg-[#EDF3F8]
                px-7
                py-10
                sm:px-9
                lg:col-span-5
                lg:min-h-[390px]
                lg:border-l
                lg:px-10
              "
            >
              <div className="flex items-start justify-between">
                <BriefcaseBusiness className="h-[22px] w-[22px] text-[#0D2444]" />

                <span className="text-[9px] font-semibold tracking-[2px] text-[#8C9BAD]">
                  04
                </span>
              </div>

              <div className="mt-12">
                <span className="text-[8px] font-semibold uppercase tracking-[2.4px] text-[#6288B9]">
                  Expertise · Trust · Commercial Intent
                </span>

                <h3
                  className="mt-3 text-[29px] font-bold leading-[1.1] text-[#0D2444]"
                  style={{ fontFamily: serifFont }}
                >
                  Professional Services
                </h3>

                <p className="mt-5 max-w-[520px] text-[13px] leading-[1.85] text-[#687386]">
                  Focus visibility around commercially meaningful service
                  searches where expertise, trust and enquiry intent come
                  together.
                </p>
              </div>

              <p
                className="absolute bottom-8 right-8 hidden max-w-[180px] text-right text-[16px] font-bold leading-[1.4] text-[#456A9E]/40 xl:block"
                style={{ fontFamily: serifFont }}
              >
                Visibility where expertise matters.
              </p>
            </motion.div>

            {/* =====================================================
                STARTUPS
            ===================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="
                relative
                border-t
                border-[#D9E3ED]
                bg-white
                px-7
                py-10
                sm:px-9
                lg:col-span-3
                lg:min-h-[390px]
                lg:border-l
              "
            >
              <div className="flex items-start justify-between">
                <Building2 className="h-[22px] w-[22px] text-[#456A9E]" />

                <span className="text-[9px] font-semibold tracking-[2px] text-[#A1ADBA]">
                  05
                </span>
              </div>

              <div className="mt-12">
                <span className="text-[8px] font-semibold uppercase tracking-[2.2px] text-[#6288B9]">
                  Category · Solution
                </span>

                <h3
                  className="mt-3 text-[29px] font-bold leading-[1.1] text-[#0D2444]"
                  style={{ fontFamily: serifFont }}
                >
                  Startups
                </h3>

                <p className="mt-5 text-[12px] leading-[1.85] text-[#687386]">
                  Build visibility around the problem, solution and category
                  while the market is still learning what to search for.
                </p>
              </div>
            </motion.div>

            {/* =====================================================
                D2C / ECOMMERCE
            ===================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="
                relative
                border-t
                border-[#D9E3ED]
                bg-[#0D2444]
                px-7
                py-10
                sm:px-9
                lg:col-span-5
                lg:min-h-[360px]
                lg:px-10
              "
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(98,136,185,0.28),transparent_35%)]" />

              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <ShoppingBag className="h-[22px] w-[22px] text-[#BCD0E7]" />

                  <span className="text-[9px] font-semibold tracking-[2px] text-white/35">
                    06
                  </span>
                </div>

                <div className="mt-12">
                  <span className="text-[8px] font-semibold uppercase tracking-[2.4px] text-[#9EB8D6]">
                    Products · Categories · Transactions
                  </span>

                  <h3
                    className="mt-3 text-[31px] font-bold leading-[1.1] text-white"
                    style={{ fontFamily: serifFont }}
                  >
                    D2C & eCommerce
                  </h3>

                  <p className="mt-5 max-w-[560px] text-[13px] leading-[1.85] text-white/55">
                    Strengthen product discovery, category relevance and
                    transactional search journeys while improving the technical
                    structure behind organic growth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =====================================================
                MULTI-LOCATION
            ===================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="
                relative
                border-t
                border-[#D9E3ED]
                bg-[#F4F8FB]
                px-7
                py-10
                sm:px-9
                lg:col-span-7
                lg:min-h-[360px]
                lg:border-l
                lg:px-10
              "
            >
              <div className="grid gap-9 lg:grid-cols-[0.6fr_1.4fr] lg:items-center">
                <div>
                  <div className="flex h-[54px] w-[54px] items-center justify-center rounded-[17px] bg-[#0D2444] text-white">
                    <MapPinned className="h-[20px] w-[20px]" />
                  </div>

                  <span className="mt-6 block text-[9px] font-semibold tracking-[2px] text-[#9AA7B5]">
                    07
                  </span>
                </div>

                <div>
                  <span className="text-[8px] font-semibold uppercase tracking-[2.4px] text-[#6288B9]">
                    Cities · Service Areas · Local Search
                  </span>

                  <h3
                    className="mt-3 text-[32px] font-bold leading-[1.1] text-[#0D2444]"
                    style={{ fontFamily: serifFont }}
                  >
                    Multi-Location Businesses
                  </h3>

                  <p
                    className="mt-5 max-w-[700px] text-[19px] font-bold leading-[1.45] text-[#1D3A66]"
                    style={{ fontFamily: serifFont }}
                  >
                    Build local relevance across genuine markets without
                    producing repetitive city pages.
                  </p>

                  <p className="mt-4 max-w-[700px] text-[13px] leading-[1.85] text-[#687386]">
                    Location strategy should reflect where the business
                    genuinely operates and how customers search in those
                    markets.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =========================================================
            PRINCIPLE / CLOSING
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-16
            grid
            gap-9
            border-t
            border-[#D9E3ED]
            pt-10
            lg:grid-cols-[1.35fr_0.65fr]
            lg:items-end
          "
        >
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#8B9AAC]">
              Business-Led SEO
            </span>

            <p
              className="
                mt-4
                max-w-[980px]
                text-[30px]
                font-bold
                leading-[1.27]
                tracking-[-1px]
                text-[#0D2444]
                sm:text-[38px]
                lg:text-[43px]
              "
              style={{ fontFamily: serifFont }}
            >
              Same search fundamentals.
              <span className="text-[#6288B9]">
                {" "}
                Different priorities for every growth model.
              </span>
            </p>
          </div>

          <div className="border-l border-[#D9E3ED] pl-6">
            <p className="text-[12px] leading-[1.9] text-[#687386] sm:text-[13px]">
              Industry, customer intent, geography, competition and conversion
              journey determine what should be optimized first.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}