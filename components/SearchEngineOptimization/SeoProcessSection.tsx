"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  FileSearch,
  Gauge,
  Layers3,
  Search,
  Settings2,
  Sparkles,
  Target,
} from "lucide-react";

type ProcessStep = {
  number: string;
  title: string;
  label: string;
  text: string;
  icon: React.ElementType;
};

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    label: "Business Context",
    text: "We understand your services, customers, target locations, website and organic growth goals before deciding what SEO needs to achieve.",
    icon: Search,
  },
  {
    number: "02",
    title: "Audit",
    label: "Current Performance",
    text: "We review technical SEO, indexing, rankings, website structure, existing content and current search visibility to identify priorities.",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "Research",
    label: "Search Opportunity",
    text: "We identify target keywords, search intent, competitor opportunities, content gaps and relevant customer search demand.",
    icon: Target,
  },
  {
    number: "04",
    title: "Strategy",
    label: "Priority Roadmap",
    text: "Research is converted into a practical roadmap based on relevance, technical urgency, search opportunity and business impact.",
    icon: Layers3,
  },
  {
    number: "05",
    title: "Optimize",
    label: "SEO Implementation",
    text: "We improve technical foundations, on-page SEO, metadata, internal linking, page relevance and existing website content.",
    icon: Settings2,
  },
  {
    number: "06",
    title: "Build",
    label: "Search Coverage",
    text: "We expand useful content, strengthen service and location relevance and develop appropriate authority-building opportunities.",
    icon: Sparkles,
  },
  {
    number: "07",
    title: "Measure",
    label: "Performance Tracking",
    text: "We track organic clicks, impressions, landing-page performance, search visibility and meaningful conversion activity.",
    icon: BarChart3,
  },
  {
    number: "08",
    title: "Improve",
    label: "Continuous Growth",
    text: "Performance data, competitor movement and new search opportunities are used to continuously refine the SEO strategy.",
    icon: Gauge,
  },
];

const topSteps = [
  processSteps[0],
  processSteps[2],
  processSteps[4],
  processSteps[6],
];

const bottomSteps = [
  processSteps[1],
  processSteps[3],
  processSteps[5],
  processSteps[7],
];

const topColumns = [1, 3, 5, 7];
const bottomColumns = [2, 4, 6, 8];

function ProcessCard({
  step,
  delay = 0,
}: {
  step: ProcessStep;
  delay?: number;
}) {
  const Icon = step.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.55,
        delay,
      }}
      className="
        group
        relative
        flex
        h-[330px]
        w-[292px]
        flex-col
        overflow-hidden
        rounded-[28px]
        border
        border-white/[0.10]
        bg-[#15263C]/90
        p-7
        shadow-[0_24px_70px_rgba(0,0,0,0.22)]
        backdrop-blur-xl
        transition-all
        duration-500

        xl:h-[335px]
        xl:w-[305px]

        2xl:w-[315px]

        hover:-translate-y-[5px]
        hover:border-[#8FA9C7]/35
        hover:bg-[#192D46]
        hover:shadow-[0_30px_85px_rgba(0,0,0,0.28)]
      "
    >
      {/* CARD GLOW */}
      <div className="pointer-events-none absolute right-[-70px] top-[-70px] h-[210px] w-[210px] rounded-full bg-[#6288B9]/10 blur-[72px]" />

      {/* LARGE BACKGROUND NUMBER */}
      <div
        className="
          pointer-events-none
          absolute
          right-[12px]
          top-[5px]
          text-[84px]
          font-bold
          leading-none
          tracking-[-5px]
          text-white/[0.028]
        "
        style={{
          fontFamily:
            'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
        }}
      >
        {step.number}
      </div>

      <div className="relative z-10 flex h-full flex-col">
        {/* ICON + NUMBER */}
        <div className="flex items-start justify-between">
          <div
            className="
              flex
              h-[52px]
              w-[52px]
              items-center
              justify-center
              rounded-[16px]
              border
              border-white/10
              bg-white/[0.075]
              text-[#BCD0E7]
              shadow-[0_8px_24px_rgba(0,0,0,0.12)]
              transition-all
              duration-300
              group-hover:border-[#8FA9C7]/30
              group-hover:bg-[#6288B9]/20
            "
          >
            <Icon className="h-[20px] w-[20px]" />
          </div>

          <span className="pt-1 text-[9px] font-semibold tracking-[2.5px] text-white/28">
            {step.number}
          </span>
        </div>

        {/* LABEL */}
        <span className="mt-7 block text-[8px] font-semibold uppercase leading-[1.45] tracking-[2.5px] text-[#8FA9C7]">
          {step.label}
        </span>

        {/* TITLE */}
        <h4
          className="mt-2 text-[27px] font-bold leading-[1.08] tracking-[-0.5px] text-white"
          style={{
            fontFamily:
              'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
          }}
        >
          {step.title}
        </h4>

        {/* DESCRIPTION */}
        <p className="mt-5 text-[11.5px] leading-[1.82] text-white/48 xl:text-[12px]">
          {step.text}
        </p>
      </div>
    </motion.article>
  );
}

export default function SeoProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#07111F] py-[120px] sm:py-[140px] lg:py-[150px]">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(98,136,185,0.18),transparent_28%),radial-gradient(circle_at_88%_78%,rgba(69,106,158,0.16),transparent_31%),linear-gradient(135deg,#06101D_0%,#091625_48%,#102641_100%)]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.05]
            [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
            [background-size:58px_58px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.045]
            [background-image:radial-gradient(rgba(255,255,255,0.75)_0.7px,transparent_0.7px)]
            [background-size:28px_28px]
          "
        />

        <div className="absolute left-[-190px] top-[25%] h-[520px] w-[520px] rounded-full bg-[#6288B9]/10 blur-[150px]" />

        <div className="absolute right-[-190px] bottom-[8%] h-[520px] w-[520px] rounded-full bg-[#456A9E]/12 blur-[155px]" />

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[2%]
            -translate-x-1/2
            whitespace-nowrap
            text-[110px]
            font-bold
            leading-none
            tracking-[-8px]
            text-white/[0.014]
            sm:text-[175px]
            lg:text-[250px]
          "
          style={{
            fontFamily:
              'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
          }}
        >
          PROCESS
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1620px] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#8FA9C7]" />

              <span className="text-[11px] font-semibold uppercase tracking-[3px] text-[#9DB6D2]">
                How We Work
              </span>
            </div>

            <h2
              className="
                mt-7
                text-[40px]
                font-bold
                leading-[1.05]
                tracking-[-2px]
                text-white
                md:text-[58px]
              "
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              A Structured SEO Process
              <br />

              <span className="bg-gradient-to-r from-white via-[#BCD0E7] to-[#7899C0] bg-clip-text text-transparent">
                From Audit to Organic Growth.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.08,
            }}
          >
            <p className="max-w-[720px] text-[16px] leading-[1.9] text-white/60 sm:text-[18px]">
              SEO performs best when improvements are made in the right order.
              Our process combines research, technical optimization, content
              and continuous measurement into a structured long-term strategy.
            </p>

            <p className="mt-4 max-w-[720px] text-[15px] leading-[1.85] text-white/40 sm:text-[16px]">
              Each stage builds on the one before it, creating a connected
              search-growth system instead of disconnected SEO activity.
            </p>
          </motion.div>
        </div>

        {/* =========================================================
            INTRO STRIP
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="
            mt-16
            flex
            flex-col
            gap-6
            border-b
            border-white/10
            pb-7
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#8FA9C7]">
              SEO Growth System
            </span>

            <h3
              className="mt-2 max-w-[720px] text-[28px] font-bold leading-[1.2] text-white sm:text-[34px]"
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              Eight stages. One connected growth process.
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <Target className="h-4 w-4 text-[#9DB6D2]" />

            <span className="text-[10px] font-semibold text-white/45">
              Research → Implement → Measure → Improve
            </span>
          </div>
        </motion.div>

        {/* =========================================================
            DESKTOP TIMELINE
        ========================================================= */}

        <div className="relative mt-16 hidden lg:block">
          <div
            className="
              relative
              grid
              grid-cols-8
              grid-rows-[335px_110px_54px_110px_335px]
            "
          >
            {/* CENTER LINE */}
            <div className="pointer-events-none absolute left-[6.25%] right-[6.25%] top-[509px] z-10">
              <div className="h-px w-full bg-white/10" />

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-[2px]
                  origin-left
                  bg-gradient-to-r
                  from-[#456A9E]
                  via-[#8FA9C7]
                  to-[#BCD0E7]
                "
              />

              <div className="absolute left-[10%] right-[10%] top-1/2 h-[28px] -translate-y-1/2 bg-[#6288B9]/10 blur-[25px]" />
            </div>

            {/* TOP CARDS */}
            {topSteps.map((step, index) => {
              const column = topColumns[index];

              return (
                <div
                  key={step.number}
                  className="relative flex justify-center"
                  style={{
                    gridColumn: `${column} / span 1`,
                    gridRow: "1",
                  }}
                >
                  <ProcessCard step={step} delay={index * 0.07} />

                  <div
                    className="
                      absolute
                      left-1/2
                      top-full
                      h-[174px]
                      w-px
                      -translate-x-1/2
                      bg-gradient-to-b
                      from-[#8FA9C7]/65
                      via-[#8FA9C7]/38
                      to-[#8FA9C7]/55
                    "
                  />
                </div>
              );
            })}

            {/* BOTTOM CARDS */}
            {bottomSteps.map((step, index) => {
              const column = bottomColumns[index];

              return (
                <div
                  key={step.number}
                  className="relative flex items-end justify-center"
                  style={{
                    gridColumn: `${column} / span 1`,
                    gridRow: "5",
                  }}
                >
                  <div
                    className="
                      absolute
                      bottom-full
                      left-1/2
                      h-[174px]
                      w-px
                      -translate-x-1/2
                      bg-gradient-to-t
                      from-[#8FA9C7]/65
                      via-[#8FA9C7]/38
                      to-[#8FA9C7]/55
                    "
                  />

                  <ProcessCard
                    step={step}
                    delay={0.05 + index * 0.07}
                  />
                </div>
              );
            })}

            {/* TIMELINE NODES */}
            {processSteps.map((step, index) => (
              <div
                key={`node-${step.number}`}
                className="relative z-30 flex items-center justify-center"
                style={{
                  gridColumn: `${index + 1}`,
                  gridRow: "3",
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.07,
                  }}
                  className="
                    flex
                    h-[23px]
                    w-[23px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#8FA9C7]/45
                    bg-[#091625]
                    shadow-[0_0_25px_rgba(98,136,185,0.30)]
                  "
                >
                  <div className="h-[7px] w-[7px] rounded-full bg-[#BCD0E7]" />
                </motion.div>
              </div>
            ))}

            {/* START LABEL */}
            <div
              className="flex items-start justify-center pt-[42px]"
              style={{
                gridColumn: "1",
                gridRow: "3",
              }}
            >
              <span className="text-[8px] font-semibold uppercase tracking-[2.2px] text-white/22">
                Start
              </span>
            </div>

            {/* END LABEL */}
            <div
              className="flex items-start justify-center pt-[42px]"
              style={{
                gridColumn: "8",
                gridRow: "3",
              }}
            >
              <span className="whitespace-nowrap text-[8px] font-semibold uppercase tracking-[2px] text-[#9DB6D2]">
                Continuous Growth
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================
            MOBILE / TABLET
        ========================================================= */}

        <div className="relative mt-12 lg:hidden">
          <div className="absolute bottom-[25px] left-[23px] top-[25px] w-px bg-gradient-to-b from-[#456A9E] via-[#8FA9C7] to-[#BCD0E7]" />

          <div className="space-y-7">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.04,
                  }}
                  className="relative pl-[62px]"
                >
                  <div
                    className="
                      absolute
                      left-[11px]
                      top-[28px]
                      z-20
                      flex
                      h-[24px]
                      w-[24px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#8FA9C7]/45
                      bg-[#091625]
                    "
                  >
                    <div className="h-[7px] w-[7px] rounded-full bg-[#BCD0E7]" />
                  </div>

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[26px]
                      border
                      border-white/[0.09]
                      bg-[#15263C]/90
                      p-6
                      shadow-[0_18px_50px_rgba(0,0,0,0.18)]
                      backdrop-blur-xl
                    "
                  >
                    <div className="absolute right-[-50px] top-[-50px] h-[160px] w-[160px] rounded-full bg-[#6288B9]/10 blur-[60px]" />

                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        <div
                          className="
                            flex
                            h-[48px]
                            w-[48px]
                            shrink-0
                            items-center
                            justify-center
                            rounded-[15px]
                            border
                            border-white/10
                            bg-white/[0.075]
                            text-[#BCD0E7]
                          "
                        >
                          <Icon className="h-[19px] w-[19px]" />
                        </div>

                        <div>
                          <span className="text-[8px] font-semibold uppercase tracking-[2.2px] text-[#8FA9C7]">
                            {step.number} · {step.label}
                          </span>

                          <h4
                            className="mt-1 text-[24px] font-bold text-white"
                            style={{
                              fontFamily:
                                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                            }}
                          >
                            {step.title}
                          </h4>
                        </div>
                      </div>

                      <p className="mt-5 text-[12px] leading-[1.85] text-white/48">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            CONTINUOUS GROWTH BLOCK
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="
            relative
            mt-20
            overflow-hidden
            rounded-[38px]
            border
            border-white/[0.10]
            bg-white/[0.05]
            shadow-[0_28px_85px_rgba(0,0,0,0.22)]
            backdrop-blur-xl
          "
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2444]/40 via-transparent to-[#456A9E]/20" />

          <div className="absolute right-[-100px] top-[-100px] h-[330px] w-[330px] rounded-full bg-[#6288B9]/18 blur-[100px]" />

          <div className="relative z-10 grid gap-9 p-7 sm:p-9 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:p-10">
            <div>
              <div className="flex items-center gap-3">
                <Sparkles className="h-4 w-4 text-[#BCD0E7]" />

                <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#9DB6D2]">
                  Continuous SEO Growth
                </span>
              </div>

              <h3
                className="
                  mt-4
                  max-w-[900px]
                  text-[30px]
                  font-bold
                  leading-[1.24]
                  text-white
                  sm:text-[38px]
                  lg:text-[43px]
                "
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                SEO is not a one-time checklist.
                <span className="text-[#BCD0E7]">
                  {" "}
                  It is an ongoing system of better decisions.
                </span>
              </h3>
            </div>

            <div className="border-l border-white/10 pl-6">
              <p className="text-[12px] leading-[1.85] text-white/43 sm:text-[13px]">
                Research informs implementation. Performance data informs the
                next decision. The strategy evolves as search demand,
                competition and your business change.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            FINAL LINE
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="
            mt-10
            flex
            flex-col
            gap-6
            border-t
            border-white/10
            pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="max-w-[850px] text-[21px] font-bold leading-[1.4] text-white sm:text-[26px]"
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            Fix the foundation. Build relevance.
            <span className="text-[#9DB6D2]">
              {" "}
              Measure the impact. Then improve again.
            </span>
          </p>

          <div className="flex shrink-0 items-center gap-3">
            <span className="text-[9px] font-semibold uppercase tracking-[2px] text-white/30">
              Discover
            </span>

            <ArrowRight className="h-3.5 w-3.5 text-[#8FA9C7]" />

            <span className="text-[9px] font-semibold uppercase tracking-[2px] text-[#BCD0E7]">
              Improve
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}