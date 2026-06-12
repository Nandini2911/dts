"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  HeartHandshake,
  Lightbulb,
  Network,
  Users,
  Gem,
  Headset,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

const reasons = [
  {
    icon: ClipboardCheck,
    title: "End-to-End Event Expertise",
    desc: "We manage everything from planning and vendor coordination to logistics, production and event-day execution.",
  },
  {
    icon: HeartHandshake,
    title: "Wedding & Corporate Event Experience",
    desc: "Our team understands both emotional family-led celebrations and structured corporate event requirements.",
  },
  {
    icon: Lightbulb,
    title: "Creative + Operational Strength",
    desc: "We combine creative event ideas with practical execution planning, timelines and vendor coordination.",
  },
  {
    icon: Network,
    title: "Strong Vendor Network",
    desc: "We work with trusted vendors across décor, production, catering, photography, entertainment, hospitality and logistics.",
  },
  {
    icon: Users,
    title: "Guest Experience Focus",
    desc: "We plan events with attention to guest comfort, hospitality, movement, communication and experience quality.",
  },
  {
    icon: Gem,
    title: "Luxury & Hospitality Understanding",
    desc: "Our experience with premium brands, hospitality events and luxury experiences helps us manage high-expectation events professionally.",
  },
  {
    icon: Headset,
    title: "On-Ground Execution Team",
    desc: "Our team remains involved during the event to manage flow, coordination, vendor timing, backstage requirements and guest-facing moments.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    desc: "We maintain clear communication with clients, families, vendors and stakeholders throughout the planning and execution process.",
  },
];

const pillars = [
  "Planning Control",
  "Creative Direction",
  "Vendor Strength",
  "Guest Experience",
];

export default function WhyChooseDoubleTroubleStudioEvents() {
  return (
    <section className="relative overflow-hidden bg-[#F9FCFF] px-5 py-20 text-[#0D2444] md:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,#E3F1FF_0%,transparent_32%),radial-gradient(circle_at_86%_18%,#D7E8FA_0%,transparent_30%),linear-gradient(180deg,#FFFFFF_0%,#F8FCFF_48%,#EAF5FF_100%)]" />

      <div className="absolute left-[-300px] top-[-300px] h-[720px] w-[720px] rounded-full bg-white/85 blur-3xl" />
      <div className="absolute right-[-340px] bottom-[-340px] h-[820px] w-[820px] rounded-full bg-[#7FA4CA]/16 blur-3xl" />

      {/* SUBTLE DOT TEXTURE */}
      <div
        className="
          absolute inset-0 opacity-[0.12]
          [background-image:radial-gradient(#0D2444_1px,transparent_1px)]
          [background-size:26px_26px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto flex max-w-6xl flex-col items-center text-center"
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#0D2444]/10 bg-white/80 px-5 py-3 shadow-[0_16px_45px_rgba(13,36,68,0.08)] backdrop-blur-xl">
            <Sparkles size={16} className="text-[#0D2444]" />
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#5579A6]">
              Why Choose Double Trouble Studio
            </span>
          </div>

          <h2
            style={serifFont}
            className="mx-auto max-w-5xl text-[34px] font-bold leading-[1.08] tracking-[-0.045em] md:text-[50px] lg:text-[58px]"
          >
            <span className="block bg-gradient-to-r from-[#071426] via-[#183A66] to-[#5579A6] bg-clip-text text-transparent">
              Built For Premium Events,
            </span>
            <span className="block bg-gradient-to-r from-[#244B7C] via-[#6F8FB8] to-[#B7CAE2] bg-clip-text text-transparent">
              Weddings & Brand Experiences
            </span>
          </h2>

          <p className="mt-7 max-w-3xl text-[16px] font-medium leading-[1.9] text-[#4F627B] md:text-[18px]">
            Double Trouble Studio brings together creative direction, vendor
            coordination, luxury hospitality understanding and on-ground control
            to deliver events that feel seamless, refined and professionally
            managed.
          </p>
        </motion.div>

        {/* COMPASS LAYOUT */}
        <div className="relative mt-18 md:mt-20">
          {/* DESKTOP COMPASS */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_420px_1fr] lg:items-center lg:gap-8">
            {/* LEFT REASONS */}
            <div className="space-y-6">
              {reasons.slice(0, 4).map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.65,
                      ease: "easeOut",
                      delay: index * 0.06,
                    }}
                    className="group relative border-b border-[#0D2444]/12 pb-6 text-right"
                  >
                    <div className="mb-4 flex items-center justify-end gap-4">
                      <h3
                        style={serifFont}
                        className="text-[30px] font-bold leading-[1.05] tracking-[-0.045em] text-[#0D2444]"
                      >
                        {reason.title}
                      </h3>

                      <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-[#0D2444]/10 bg-white/80 text-[#244B7C] shadow-[0_14px_35px_rgba(13,36,68,0.07)] backdrop-blur-xl transition-all duration-300 group-hover:bg-[#0D2444] group-hover:text-white">
                        <Icon size={22} />
                      </div>
                    </div>

                    <p className="ml-auto max-w-[460px] text-[14.5px] font-medium leading-[1.8] text-[#52647C]">
                      {reason.desc}
                    </p>

                    <div className="mt-5 ml-auto h-px w-14 bg-[#6F8FB8]/70 transition-all duration-500 group-hover:w-32 group-hover:bg-[#0D2444]" />
                  </motion.div>
                );
              })}
            </div>

            {/* CENTER SEAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="relative mx-auto flex h-[520px] w-[420px] items-center justify-center"
            >
              {/* RINGS */}
              <div className="absolute h-[420px] w-[420px] rounded-full border border-[#0D2444]/10" />
              <div className="absolute h-[320px] w-[320px] rounded-full border border-[#0D2444]/12" />
              <div className="absolute h-[220px] w-[220px] rounded-full border border-[#0D2444]/14" />

              <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-[#0D2444]/14 to-transparent" />
              <div className="absolute left-1/2 top-1/2 h-full w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#0D2444]/14 to-transparent" />

              {/* PILLARS */}
              <div className="absolute top-7 rounded-full border border-[#0D2444]/10 bg-white/80 px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#5579A6] shadow-[0_12px_32px_rgba(13,36,68,0.07)] backdrop-blur-xl">
                {pillars[0]}
              </div>

              <div className="absolute bottom-7 rounded-full border border-[#0D2444]/10 bg-white/80 px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#5579A6] shadow-[0_12px_32px_rgba(13,36,68,0.07)] backdrop-blur-xl">
                {pillars[1]}
              </div>

              <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 rounded-full border border-[#0D2444]/10 bg-white/80 px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#5579A6] shadow-[0_12px_32px_rgba(13,36,68,0.07)] backdrop-blur-xl">
                {pillars[2]}
              </div>

              <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 rounded-full border border-[#0D2444]/10 bg-white/80 px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#5579A6] shadow-[0_12px_32px_rgba(13,36,68,0.07)] backdrop-blur-xl">
                {pillars[3]}
              </div>

              {/* MAIN SEAL */}
              <div className="relative z-10 flex h-[190px] w-[190px] flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#0D2444] via-[#16365F] to-[#5579A6] text-center text-white shadow-[0_30px_80px_rgba(13,36,68,0.28)]">
                <ShieldCheck size={34} />

                <p className="mt-5 text-[11px] font-black uppercase tracking-[0.28em]">
                  DTS
                </p>

                <p className="mt-2 max-w-[120px] text-[10px] font-bold uppercase leading-[1.6] tracking-[0.18em] text-white/66">
                  Premium Event Standard
                </p>
              </div>
            </motion.div>

            {/* RIGHT REASONS */}
            <div className="space-y-6">
              {reasons.slice(4).map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.65,
                      ease: "easeOut",
                      delay: index * 0.06,
                    }}
                    className="group relative border-b border-[#0D2444]/12 pb-6"
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-[#0D2444]/10 bg-white/80 text-[#244B7C] shadow-[0_14px_35px_rgba(13,36,68,0.07)] backdrop-blur-xl transition-all duration-300 group-hover:bg-[#0D2444] group-hover:text-white">
                        <Icon size={22} />
                      </div>

                      <h3
                        style={serifFont}
                        className="text-[30px] font-bold leading-[1.05] tracking-[-0.045em] text-[#0D2444]"
                      >
                        {reason.title}
                      </h3>
                    </div>

                    <p className="max-w-[460px] text-[14.5px] font-medium leading-[1.8] text-[#52647C]">
                      {reason.desc}
                    </p>

                    <div className="mt-5 h-px w-14 bg-[#6F8FB8]/70 transition-all duration-500 group-hover:w-32 group-hover:bg-[#0D2444]" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* MOBILE / TABLET VERSION */}
          <div className="lg:hidden">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="mx-auto mb-8 flex max-w-sm flex-col items-center rounded-[34px] border border-[#0D2444]/10 bg-white/75 p-8 text-center shadow-[0_24px_70px_rgba(13,36,68,0.09)] backdrop-blur-xl"
            >
              <div className="flex h-18 w-18 items-center justify-center rounded-full bg-gradient-to-br from-[#0D2444] via-[#16365F] to-[#5579A6] text-white shadow-[0_20px_50px_rgba(13,36,68,0.22)]">
                <ShieldCheck size={32} />
              </div>

              <p className="mt-5 text-[11px] font-black uppercase tracking-[0.28em] text-[#5579A6]">
                DTS Standard
              </p>

              <h3
                style={serifFont}
                className="mt-4 text-[34px] font-bold leading-[1.05] tracking-[-0.045em] text-[#0D2444]"
              >
                Creative thinking with calm execution.
              </h3>
            </motion.div>

            <div className="divide-y divide-[#0D2444]/10 border-y border-[#0D2444]/10">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.035,
                    }}
                    className="group py-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0D2444] text-white">
                        <Icon size={21} />
                      </div>

                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <h3
                            style={serifFont}
                            className="text-[27px] font-bold leading-[1.06] tracking-[-0.045em] text-[#0D2444]"
                          >
                            {reason.title}
                          </h3>

                          <ArrowUpRight
                            size={17}
                            className="mt-2 shrink-0 text-[#5579A6]"
                          />
                        </div>

                        <p className="mt-3 text-[14.5px] font-medium leading-[1.8] text-[#52647C]">
                          {reason.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM PILLARS */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((pillar) => (
            <div
              key={pillar}
              className="group flex items-center justify-between gap-4 rounded-full border border-[#0D2444]/10 bg-white/72 px-5 py-4 shadow-[0_14px_40px_rgba(13,36,68,0.07)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#0D2444] hover:text-white"
            >
              <span className="text-[11px] font-black uppercase tracking-[0.22em]">
                {pillar}
              </span>

              <ArrowUpRight
                size={16}
                className="text-[#5579A6] transition-all duration-300 group-hover:text-white"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}