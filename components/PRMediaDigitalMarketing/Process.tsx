"use client";

import { motion } from "framer-motion";

type ProcessStep = {
  title: string;
  description: string;
  phase: string;
};

const processSteps: ProcessStep[] = [
  {
    title: "Brand Discovery",
    phase: "Discover",
    description:
      "We understand your business, audience, industry, goals, current visibility, competitors, platforms and communication challenges.",
  },
  {
    title: "Strategy Development",
    phase: "Plan",
    description:
      "We create a PR and digital marketing strategy based on your brand goals, target audience, campaign requirement and desired outcomes.",
  },
  {
    title: "Messaging & Content Planning",
    phase: "Message",
    description:
      "We develop key messages, campaign ideas, content pillars, media angles, social media direction and digital communication themes.",
  },
  {
    title: "Media & Platform Planning",
    phase: "Map",
    description:
      "We identify suitable media categories, digital platforms, influencer profiles, ad channels and content formats.",
  },
  {
    title: "Campaign Execution",
    phase: "Execute",
    description:
      "We execute PR outreach, social media content, paid ads, influencer campaigns, SEO content, media communication and digital promotions.",
  },
  {
    title: "Monitoring & Optimization",
    phase: "Optimize",
    description:
      "We monitor campaign performance, media responses, audience engagement, website traffic, ad results and content performance.",
  },
  {
    title: "Reporting & Recommendations",
    phase: "Report",
    description:
      "We provide campaign updates, coverage details, performance insights and recommendations for future communication.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function Process() {
  return (
    <section
      style={{
        fontFamily: "New York, ui-serif, Georgia, serif",
      }}
      className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24 text-[#0F172A]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#FFFFFF_0%,#F8FAFC_42%,#EAF1F8_100%)]" />

      <div className="absolute inset-0 opacity-[0.35]">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(13,36,68,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(13,36,68,0.055)_1px,transparent_1px)] bg-[size:78px_78px]" />
      </div>

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.24, 0.48, 0.24] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-24 h-[440px] w-[440px] rounded-full bg-[#6288B9]/14 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-40 bottom-24 h-[440px] w-[440px] rounded-full bg-[#0D2444]/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.14 }}
          className="mx-auto mb-20 max-w-5xl text-center"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-5 inline-flex rounded-full border border-[#6288B9]/20 bg-white/80 px-5 py-2 shadow-sm backdrop-blur"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#6288B9]">
              Our Process
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-4xl font-black leading-tight tracking-tight text-[#0D2444] md:text-6xl"
          >
            Our PR, Media & Digital Marketing{" "}
            <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              Process
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg"
          >
            We follow a clear strategy-first process from brand discovery to
            reporting, so every campaign has direction, execution, monitoring
            and measurable learning.
          </motion.p>
        </motion.div>

        {/* Editorial Process System */}
        <div className="relative">
          {/* Large Background Word */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="pointer-events-none absolute -top-16 left-1/2 hidden -translate-x-1/2 text-[140px] font-black uppercase leading-none tracking-[-0.08em] text-[#0D2444]/[0.035] lg:block"
          >
            PROCESS
          </motion.div>

          {/* Top Flow Line */}
          <div className="relative mb-14 hidden lg:block">
            <div className="h-px w-full bg-[#0D2444]/10" />

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.3, ease: "easeOut" }}
              className="absolute left-0 top-0 h-px w-full origin-left bg-gradient-to-r from-[#0D2444] via-[#6288B9] to-transparent"
            />

            <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 justify-between">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0D2444] shadow-[0_0_0_8px_rgba(98,136,185,0.12)]"
                >
                  <span className="h-2 w-2 rounded-full bg-white" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process Rows */}
          <div className="divide-y divide-[#0D2444]/10 border-y border-[#0D2444]/10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.72,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                className="group relative grid gap-8 py-10 md:grid-cols-[0.22fr_0.32fr_0.46fr] md:items-start md:py-14"
              >
                {/* Number */}
                <div className="relative">
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.06,
                    }}
                    className="text-7xl font-black leading-none tracking-[-0.08em] text-[#0D2444]/10 transition duration-500 group-hover:text-[#0D2444]/18 md:text-8xl"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.p>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#6288B9]" />
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6288B9]">
                      {step.phase}
                    </p>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <motion.h3
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.25 }}
                    className="max-w-md text-3xl font-black leading-tight tracking-tight text-[#0D2444] md:text-5xl"
                  >
                    {step.title}
                  </motion.h3>
                </div>

                {/* Description */}
                <div>
                  <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                    {step.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {["Direction", "Action", "Review"].map((item, itemIndex) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                          delay: itemIndex * 0.06,
                        }}
                        className="rounded-full border border-[#0D2444]/10 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#0D2444] backdrop-blur transition duration-300 group-hover:border-[#6288B9]/35 group-hover:bg-[#EAF1F8]"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#0D2444] to-[#6288B9] transition-all duration-700 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}