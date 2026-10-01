"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Braces,
  Check,
  FileSearch,
  FileText,
  Link2,
  MapPin,
  Search,
  Target,
} from "lucide-react";

const services = [
  {
    number: "01",
    shortTitle: "Technical SEO",
    title: "Technical SEO",
    eyebrow: "Search Foundation",
    icon: Braces,

    description:
      "We identify and resolve technical issues that may prevent search engines from efficiently crawling, understanding and indexing your website.",

    statement:
      "Build a technically strong website that search engines can access, understand and index efficiently.",

    includes: [
      "Website crawl analysis",
      "Indexation review",
      "XML sitemap optimization",
      "Robots.txt analysis",
      "Canonical tag review",
      "Redirect management",
      "Broken link detection",
      "Core Web Vitals",
      "Page speed optimization",
      "Mobile SEO",
      "Website architecture",
      "HTTPS checks",
      "Duplicate content analysis",
      "JavaScript SEO where required",
    ],

    visual: [
      "Crawlability",
      "Indexation",
      "Performance",
      "Architecture",
    ],
  },

  {
    number: "02",
    shortTitle: "On-Page SEO",
    title: "On-Page SEO",
    eyebrow: "Page Relevance",
    icon: FileText,

    description:
      "We optimize individual website pages around relevant search intent while maintaining natural, useful and conversion-focused content.",

    statement:
      "Make every important page clearer for search engines and more useful for the people landing on it.",

    includes: [
      "Title tag optimization",
      "Meta description optimization",
      "Heading structure",
      "Keyword mapping",
      "URL optimization",
      "Internal linking",
      "Image alt text",
      "Content optimization",
      "Semantic keyword relevance",
      "Search intent alignment",
      "Conversion-focused content structure",
    ],

    visual: [
      "Page Titles",
      "Search Intent",
      "Internal Links",
      "Content Structure",
    ],
  },

  {
    number: "03",
    shortTitle: "Keyword Research",
    title: "Keyword Research & Search Intent",
    eyebrow: "Search Intelligence",
    icon: Target,

    description:
      "We identify the keywords your target audience uses at different stages of their search journey and prioritize them according to relevance, search intent, competition and business value.",

    statement:
      "Target search demand based on what matters to your business — not simply the keywords with the highest volume.",

    includes: [
      "Primary keyword research",
      "Secondary keywords",
      "Long-tail keywords",
      "Commercial keywords",
      "Transactional keywords",
      "Informational keywords",
      "Location-based keywords",
      "Competitor keyword gaps",
      "Keyword clustering",
      "Search intent mapping",
    ],

    visual: [
      "Commercial Intent",
      "Local Intent",
      "Long-Tail Search",
      "Keyword Gaps",
    ],
  },

  {
    number: "04",
    shortTitle: "Content SEO",
    title: "Content SEO",
    eyebrow: "Topical Authority",
    icon: FileSearch,

    description:
      "We create and optimize content strategies designed to answer customer questions, build topical authority and capture valuable organic searches.",

    statement:
      "Turn your website into a useful search resource that covers important topics across the customer journey.",

    includes: [
      "SEO blog strategy",
      "Topic clusters",
      "Service page optimization",
      "Landing page SEO",
      "Existing content refresh",
      "Content gap analysis",
      "FAQ optimization",
      "Internal linking strategy",
      "Semantic topic coverage",
    ],

    visual: [
      "Topic Clusters",
      "Service Pages",
      "SEO Blogs",
      "Content Gaps",
    ],
  },

  {
    number: "05",
    shortTitle: "Local SEO",
    title: "Local SEO in Mumbai",
    eyebrow: "Local Search Visibility",
    icon: MapPin,

    description:
      "For businesses targeting customers in Mumbai, Navi Mumbai and other service areas, we optimize the signals that help improve visibility in location-based searches and Google Maps.",

    statement:
      "Strengthen your presence when customers search for businesses, services and solutions within your target locations.",

    includes: [
      "Google Business Profile optimization",
      "Local keyword research",
      "Location page strategy",
      "NAP consistency",
      "Local citation review",
      "Review strategy",
      "Local competitor research",
      "Google Maps visibility",
      "Location-based landing pages",
    ],

    visual: [
      "Mumbai Search",
      "Google Maps",
      "Local Intent",
      "Location Pages",
    ],
  },

  {
    number: "06",
    shortTitle: "Authority Building",
    title: "Off-Page SEO & Authority Building",
    eyebrow: "Trust & Authority",
    icon: Link2,

    description:
      "Organic visibility is influenced by the authority and reputation of your website across the wider web. We support authority building through relevant digital PR, brand mentions and backlink opportunities.",

    statement:
      "Build stronger external signals that support your website's reputation, relevance and long-term search visibility.",

    includes: [
      "Backlink profile analysis",
      "Competitor backlink analysis",
      "Digital PR opportunities",
      "Brand mention opportunities",
      "Authority building",
      "Link quality analysis",
      "Relevant outreach strategy",
    ],

    visual: [
      "Backlinks",
      "Digital PR",
      "Brand Mentions",
      "Authority Signals",
    ],
  },
];

export default function SeoServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex];
  const ActiveIcon = activeService.icon;

  return (
    <section className="relative overflow-hidden bg-[#F4F8FC] py-[120px] sm:py-[140px] lg:py-[160px]">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F5F9FC] to-[#EDF3F8]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.024]
            [background-image:linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)]
            [background-size:76px_76px]
          "
        />

        <div className="absolute left-[-190px] top-[18%] h-[480px] w-[480px] rounded-full bg-[#6288B9]/10 blur-3xl" />

        <div className="absolute right-[-180px] top-[45%] h-[500px] w-[500px] rounded-full bg-[#456A9E]/8 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#6288B9]" />

              <span className="text-[11px] font-semibold uppercase tracking-[3px] text-[#456A9E] sm:text-[12px]">
                Complete SEO Services
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
              Search Growth Needs
              <br />

              <span className="bg-gradient-to-r from-[#0D2444] via-[#456A9E] to-[#6288B9] bg-clip-text text-transparent">
                More Than One SEO Tactic.
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
            <p className="max-w-[700px] text-[16px] leading-[1.9] text-[#5B6472] sm:text-[18px]">
              Our SEO services in Mumbai combine technical improvements,
              on-page optimization, keyword research, content strategy, local
              search and authority building into one connected organic growth
              system.
            </p>

            <p className="mt-4 max-w-[700px] text-[15px] leading-[1.85] text-[#6C7788] sm:text-[16px]">
              Each layer solves a different search problem. Together, they help
              your website become easier to discover, more relevant to search
              intent and better positioned to generate meaningful enquiries.
            </p>
          </motion.div>
        </div>

        {/* =========================================================
            MAIN SERVICE EXPERIENCE
        ========================================================= */}

        <div className="mt-16 grid gap-6 lg:grid-cols-[330px_1fr] xl:grid-cols-[355px_1fr]">
          {/* =====================================================
              LEFT SERVICE NAVIGATION
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="
              overflow-hidden
              rounded-[30px]
              border
              border-[#DCE5EE]
              bg-white/80
              p-3
              shadow-[0_18px_60px_rgba(15,23,42,0.06)]
              backdrop-blur-xl
            "
          >
            <div className="px-4 pb-4 pt-3">
              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#91A0B4]">
                Explore Capabilities
              </p>
            </div>

            <div className="space-y-2">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeIndex === index;

                return (
                  <button
                    key={service.number}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`
                      group
                      relative
                      flex
                      w-full
                      items-center
                      gap-4
                      overflow-hidden
                      rounded-[20px]
                      px-4
                      py-4
                      text-left
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "bg-[#0D2444] text-white shadow-[0_12px_30px_rgba(13,36,68,0.20)]"
                          : "text-[#0D2444] hover:bg-[#F1F5F9]"
                      }
                    `}
                  >
                    {/* active glow */}
                    {isActive && (
                      <div className="absolute right-[-30px] top-[-40px] h-[120px] w-[120px] rounded-full bg-[#6288B9]/25 blur-2xl" />
                    )}

                    <div
                      className={`
                        relative
                        z-10
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-[14px]
                        border
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "border-white/10 bg-white/10 text-white"
                            : "border-[#DCE5EE] bg-[#F5F8FB] text-[#456A9E]"
                        }
                      `}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="relative z-10 min-w-0 flex-1">
                      <span
                        className={`
                          block
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[2px]

                          ${
                            isActive
                              ? "text-white/40"
                              : "text-[#9AA9BA]"
                          }
                        `}
                      >
                        {service.number}
                      </span>

                      <span className="mt-1 block text-[14px] font-semibold sm:text-[15px]">
                        {service.shortTitle}
                      </span>
                    </div>

                    <ArrowRight
                      className={`
                        relative
                        z-10
                        h-4
                        w-4
                        shrink-0
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "translate-x-0 text-white/70"
                            : "-translate-x-1 text-[#A5B2C0] group-hover:translate-x-0"
                        }
                      `}
                    />
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT ACTIVE SERVICE STAGE
          ===================================================== */}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.38,
              }}
              className="
                overflow-hidden
                rounded-[34px]
                border
                border-[#DCE5EE]
                bg-white
                shadow-[0_28px_80px_rgba(13,36,68,0.08)]
              "
            >
              <div className="grid min-h-[650px] xl:grid-cols-[0.9fr_1.1fr]">
                {/* ===============================================
                    SERVICE INTRO
                =============================================== */}

                <div className="relative overflow-hidden bg-[#0B1220] p-7 sm:p-9 lg:p-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#08111F] via-[#101B2C] to-[#1D3A66]" />

                  <div
                    className="
                      absolute
                      inset-0
                      opacity-[0.05]
                      [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
                      [background-size:48px_48px]
                    "
                  />

                  <motion.div
                    animate={{
                      x: [0, 35, 0],
                      y: [0, -25, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-[-60px] top-[-60px] h-[290px] w-[290px] rounded-full bg-[#6288B9]/25 blur-3xl"
                  />

                  <div
                    className="
                      absolute
                      bottom-[-30px]
                      right-[-10px]
                      text-[190px]
                      font-bold
                      leading-none
                      text-white/[0.025]
                    "
                    style={{
                      fontFamily:
                        'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                    }}
                  >
                    {activeService.number}
                  </div>

                  <div className="relative z-10 flex h-full flex-col">
                    {/* icon / number */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-white/10 bg-white/10 text-white">
                        <ActiveIcon className="h-6 w-6" />
                      </div>

                      <span className="text-[10px] font-semibold uppercase tracking-[3px] text-white/35">
                        Service {activeService.number}
                      </span>
                    </div>

                    {/* content */}
                    <div className="mt-12">
                      <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#91AAC7]">
                        {activeService.eyebrow}
                      </span>

                      <h3
                        className="
                          mt-4
                          max-w-[480px]
                          text-[32px]
                          font-bold
                          leading-[1.12]
                          tracking-[-1px]
                          text-white
                          sm:text-[38px]
                        "
                        style={{
                          fontFamily:
                            'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                        }}
                      >
                        {activeService.title}
                      </h3>

                      <p className="mt-6 max-w-[500px] text-[15px] leading-[1.9] text-white/62 sm:text-[16px]">
                        {activeService.description}
                      </p>
                    </div>

                    {/* statement */}
                    <div className="mt-auto pt-12">
                      <div className="h-px bg-white/10" />

                      <p
                        className="
                          mt-7
                          max-w-[470px]
                          text-[20px]
                          font-bold
                          leading-[1.45]
                          text-white/90
                          sm:text-[22px]
                        "
                        style={{
                          fontFamily:
                            'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                        }}
                      >
                        {activeService.statement}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ===============================================
                    CAPABILITIES + VISUAL
                =============================================== */}

                <div className="p-7 sm:p-9 lg:p-10">
                  <div className="flex flex-wrap items-start justify-between gap-5">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#8D9EB3]">
                        What's Included
                      </span>

                      <h4
                        className="
                          mt-3
                          max-w-[500px]
                          text-[25px]
                          font-bold
                          leading-[1.2]
                          tracking-[-0.5px]
                          text-[#0D2444]
                          sm:text-[29px]
                        "
                        style={{
                          fontFamily:
                            'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                        }}
                      >
                        A focused set of actions for this SEO layer.
                      </h4>
                    </div>

                    <div className="rounded-full border border-[#DCE5EE] bg-[#F6F9FC] px-4 py-2 text-[10px] font-semibold text-[#456A9E]">
                      {activeService.includes.length} Capabilities
                    </div>
                  </div>

                  {/* visual map */}
                  <div
                    className="
                      relative
                      mt-8
                      overflow-hidden
                      rounded-[25px]
                      border
                      border-[#E2E8F0]
                      bg-[#F8FAFC]
                      p-5
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        opacity-[0.03]
                        [background-image:linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)]
                        [background-size:38px_38px]
                      "
                    />

                    <div className="relative z-10 flex items-center justify-between gap-5">
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[2px] text-[#92A1B3]">
                          SEO Layer
                        </p>

                        <p className="mt-1 text-[15px] font-semibold text-[#0D2444]">
                          {activeService.shortTitle}
                        </p>
                      </div>

                      <Search className="h-5 w-5 text-[#6288B9]" />
                    </div>

                    <div className="relative z-10 mt-5 grid grid-cols-2 gap-3">
                      {activeService.visual.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{
                            opacity: 0,
                            scale: 0.96,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.05,
                          }}
                          className="
                            rounded-[15px]
                            border
                            border-[#E1E8F0]
                            bg-white
                            px-4
                            py-3
                            shadow-[0_7px_20px_rgba(15,23,42,0.04)]
                          "
                        >
                          <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#6288B9]" />

                            <span className="text-[11px] font-semibold text-[#4E6176] sm:text-[12px]">
                              {item}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* list */}
                  <div className="mt-7 grid gap-x-7 gap-y-3 sm:grid-cols-2">
                    {activeService.includes.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{
                          opacity: 0,
                          y: 8,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: Math.min(index * 0.025, 0.22),
                        }}
                        className="
                          group
                          flex
                          items-start
                          gap-3
                          rounded-[14px]
                          px-2
                          py-2
                          transition-colors
                          duration-300
                          hover:bg-[#F6F9FC]
                        "
                      >
                        <div
                          className="
                            mt-[1px]
                            flex
                            h-[21px]
                            w-[21px]
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#6288B9]/20
                            bg-[#EEF4F9]
                            transition-all
                            duration-300
                            group-hover:bg-[#0D2444]
                          "
                        >
                          <Check className="h-3 w-3 text-[#456A9E] transition-colors duration-300 group-hover:text-white" />
                        </div>

                        <span className="text-[13px] leading-[1.65] text-[#566477] sm:text-[14px]">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =========================================================
            BOTTOM CONNECTED SEO STRIP
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="
            mt-8
            grid
            overflow-hidden
            rounded-[28px]
            border
            border-[#DCE5EE]
            bg-white/80
            shadow-[0_14px_45px_rgba(15,23,42,0.05)]
            backdrop-blur-xl
            md:grid-cols-3
          "
        >
          {[
            {
              number: "01",
              title: "Technical Foundation",
              text: "Make your website easier for search engines to crawl, render and understand.",
            },
            {
              number: "02",
              title: "Search Relevance",
              text: "Connect pages and content with the intent behind valuable customer searches.",
            },
            {
              number: "03",
              title: "Organic Authority",
              text: "Strengthen trust, local visibility and authority signals around your brand.",
            },
          ].map((item, index) => (
            <div
              key={item.number}
              className={`
                relative
                p-6
                sm:p-7

                ${
                  index < 2
                    ? "border-b border-[#E2E8F0] md:border-b-0 md:border-r"
                    : ""
                }
              `}
            >
              <span className="text-[9px] font-semibold tracking-[2px] text-[#9AABBC]">
                {item.number}
              </span>

              <h5
                className="mt-3 text-[19px] font-bold text-[#0D2444]"
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                {item.title}
              </h5>

              <p className="mt-2 text-[13px] leading-[1.7] text-[#687386]">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}