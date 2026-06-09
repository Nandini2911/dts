"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function WhyBrandsInvestCelebrityManagement() {
  const benefits = [
    {
      title: "Increase Brand Visibility & Recall",
      desc: "Recognizable personalities help brands attract attention, improve recall and create stronger visibility across digital, PR, social media and on-ground platforms.",
    },
    {
      title: "Strengthen Brand Credibility",
      desc: "The right celebrity or public figure can improve trust, add aspiration and strengthen how audiences perceive a brand, product or event.",
    },
    {
      title: "Generate Media Attention",
      desc: "Celebrity participation can create stronger press interest, social media conversations, photo opportunities and post-event visibility.",
    },
    {
      title: "Improve Audience Engagement",
      desc: "Well-matched talent collaborations can increase guest participation, campaign interaction, event attendance and audience excitement.",
    },
    {
      title: "Support Marketing Campaign Performance",
      desc: "Celebrity endorsements and creator collaborations can help strengthen campaign reach, content performance, brand association and consumer recall.",
    },
    {
      title: "Create Memorable Experiences",
      desc: "A well-managed celebrity appearance can turn an event into a stronger brand experience, leaving a lasting impression on guests, media and stakeholders.",
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#8ABDF0] bg-cover bg-center bg-no-repeat px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24"
      style={{
        backgroundImage: "url('/celebrity/celebrity2.jpg')",
      }}
    >
      {/* BG OVERLAY */}
      <div className="absolute inset-0 bg-[#0D2444]/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#8ABDF0]/35 via-[#0D2444]/35 to-[#0D2444]/75" />

      {/* SOFT LIGHT */}
      <div className="absolute left-[-220px] top-[-180px] h-[520px] w-[520px] rounded-full bg-white/20 blur-3xl" />
      <div className="absolute bottom-[-260px] right-[-220px] h-[560px] w-[560px] rounded-full bg-[#8ABDF0]/20 blur-3xl" />

      
      <div className="relative z-10 mx-auto max-w-[1180px]">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[900px] text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/20 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_14px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Brand Value
          </span>

          <h2
            className="mx-auto mt-6 max-w-[900px] text-[34px] font-semibold leading-[1.10] tracking-[-0.055em] text-white sm:text-[44px] md:text-[54px] lg:text-[64px]"
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            Why Brands Invest in{" "}
            <span className="bg-gradient-to-r from-white via-[#0d243b] to-[#0d243b] bg-clip-text text-transparent">
              Celebrity Management
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[15px] font-medium leading-[1.85] text-white/88 md:text-[17px]">
            Celebrity collaborations help brands build attention, credibility,
            media value and stronger audience experiences when managed with the
            right strategy and execution.
          </p>
        </motion.div>

        {/* BENEFIT ROWS */}
        <div className="mt-14 overflow-hidden rounded-[34px] border border-white/25 bg-white/16 shadow-[0_28px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl">
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
                ease: "easeOut",
              }}
              className="group grid grid-cols-1 border-b border-white/22 px-6 py-8 transition-all duration-300 last:border-b-0 hover:bg-white/18 md:grid-cols-[0.85fr_1.15fr_48px] md:items-center md:gap-8 md:px-8 lg:px-10"
            >
              <h3
                className="max-w-[420px] text-[24px] font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-[28px]"
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                {item.title}
              </h3>

              <p className="mt-5 max-w-[650px] text-[14px] font-medium leading-[1.85] text-white/78 md:mt-0 md:text-[15px]">
                {item.desc}
              </p>

              <div className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0D2444] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#8ABDF0] group-hover:text-white md:mt-0">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}