"use client";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
const steps = [
  {
    number: "01",
    timeline: "Week 1–2",
    title: "Discover",
    desc: "Brand audit, competitor analysis, audience research and a clear positioning framework aligned with the business goal.",
  },
  {
    number: "02",
    timeline: "Week 2–3",
    title: "Design",
    desc: "Brand narrative, visual direction, content architecture and campaign concepts translated into one consistent creative system.",
  },
  {
    number: "03",
    timeline: "Week 3–6",
    title: "Develop",
    desc: "Websites, campaign assets, PR material, content systems and tracking foundations built for launch and conversion.",
  },
  {
    number: "04",
    timeline: "Launch + Optimise",
    title: "Deploy",
    desc: "Campaign rollout, channel coordination, performance reviews and ongoing refinement based on real audience response.",
  },
];
export default function StudioMethod() {
  return (
    <section
      className="relative overflow-hidden py-15"
      aria-label="Double Trouble Studio creative agency process for branding, digital marketing, websites, PR and AI video production"
    >
      {/* BG IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/methode.jpg')",
        }}
        role="img"
        aria-label="Premium creative studio method background for branding, digital marketing, PR campaigns and website development"
      />

      {/* PREMIUM OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,31,0.82)_0%,rgba(8,17,31,0.70)_40%,rgba(8,17,31,0.82)_100%)]" />

      {/* EXTRA SOFT BLUE OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(98,136,185,0.18),transparent_28%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_25%)]" />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:90px_90px]
        "
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6">
        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-[760px]"
        >
          {/* LABEL */}
          <div
            className="
              inline-flex
              items-center
              gap-3
              px-5
              py-2
              rounded-full
              border
              border-white/10
              bg-[#223252]/40
              backdrop-blur-2xl
              mb-8
              shadow-[0_8px_30px_rgba(0,0,0,0.18)]
            "
          >
            <Sparkles
              className="w-4 h-4 text-[#A8BEDB]"
              aria-hidden="true"
            />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[2px]
                font-medium
                text-white/75
              "
            >
              The Double Trouble Studio Method
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
              text-[40px]
              md:text-[58px]
              leading-[1.1]
              tracking-[-4px]
              font-bold
              text-white
              [text-shadow:0_4px_30px_rgba(0,0,0,0.45)]
            "
            style={{
              fontFamily:
                "New York, ui-serif, Georgia, serif",
            }}
          >
            A Process Built

            <span
              className="
                block
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#A8BEDB]
                via-white
                to-[#6288B9]
              "
            >
              For Modern Brand Growth
            </span>
          </h2>

          {/* TEXT */}
          <p
            className="
              mt-7
              text-[15px]
              leading-[30px]
              text-white/75
              max-w-[560px]
              [text-shadow:0_2px_20px_rgba(0,0,0,0.35)]
            "
          >
            A clear four-stage system that turns business goals into focused
            strategy, consistent creative execution and measurable next steps.
          </p>
        </motion.div>

        {/* FLOW */}
        <div className="relative mt-24">
          {/* LINE */}
          <div
            className="
              hidden
              xl:block
              absolute
              top-[42px]
              left-0
              w-full
              h-[1px]
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
            "
          />

          {/* ITEMS */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 relative z-10">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                }}
                viewport={{ once: true }}
                className="group relative"
                aria-label={`Step ${step.number}: ${step.title} in the Double Trouble Studio creative agency process`}
              >
                {/* TOP */}
                <div className="flex items-center gap-5">
                  {/* NUMBER BOX */}
                  <div
                    className="
                      relative
                      w-[84px]
                      h-[84px]
                      rounded-[28px]
                      border
                      border-white/10
                      bg-[#08111F]/35
                      backdrop-blur-2xl
                      flex
                      items-center
                      justify-center
                      shadow-[0_15px_40px_rgba(0,0,0,0.22)]
                    "
                  >
                    <span
                      className="
                        text-[24px]
                        font-bold
                        text-white
                        [text-shadow:0_4px_20px_rgba(0,0,0,0.45)]
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* ICON */}
                  <div
                    className="
                      hidden
                      xl:flex
                      w-[48px]
                      h-[48px]
                      rounded-full
                      border
                      border-white/10
                      bg-[#08111F]/30
                      backdrop-blur-xl
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    <ArrowUpRight
                      className="w-4 h-4 text-white"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="mt-8">
                  <span
                    className="
                      text-[11px]
                      uppercase
                      tracking-[3px]
                      text-white/45
                    "
                  >
                    {step.timeline}
                  </span>

                  <h3
                    className="
                      mt-4
                      text-[34px]
                      leading-[1]
                      tracking-[-2px]
                      font-bold
                      text-white
                      [text-shadow:0_4px_25px_rgba(0,0,0,0.45)]
                    "
                    style={{
                      fontFamily:
                        "New York, ui-serif, Georgia, serif",
                    }}
                  >
                    {step.title}
                  </h3>

                 <p
  className="
    mt-5
    text-[14px]
    leading-[28px]
    text-white/70
    max-w-[260px]
    [text-shadow:0_2px_18px_rgba(0,0,0,0.35)]
  "
>
  {step.desc}
</p>
                </div>

                {/* GLOW */}
                <div
                  className="
                    absolute
                    top-[-40px]
                    left-0
                    w-[180px]
                    h-[180px]
                    rounded-full
                    bg-[#6288B9]/10
                    blur-3xl
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}