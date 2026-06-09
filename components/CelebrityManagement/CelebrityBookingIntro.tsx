"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CelebrityBookingIntro() {
  const sections = [
    {
      number: "01",
      title: "Visibility, Trust & Recall",
      text: "Celebrity appearances can help brands increase visibility, strengthen audience trust and create memorable experiences. Whether you are planning a product launch, corporate conference, hospitality activation, luxury event, wedding celebration, award ceremony or marketing campaign, the right personality can help amplify your message and create stronger audience recall.",
    },
    {
      number: "02",
      title: "Talent Matched With Brand Fit",
      text: "Double Trouble Studio works across celebrity management, brand campaigns, influencer collaborations, event coordination, PR-led experiences and luxury activations. This allows us to recommend talent not only by popularity, but also by brand fit, audience relevance, media value, event objective and campaign positioning.",
    },
    {
      number: "03",
      title: "Planning To Execution",
      text: "Our team manages celebrity booking, endorsement partnerships, influencer collaborations, public figure appearances, talent logistics, stakeholder communication and event-day coordination to ensure every engagement runs smoothly from planning to execution.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#F4FAFF] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F4FAFF] via-white to-[#EAF6FF]" />
      <div className="absolute left-[-220px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#8ABDF0]/30 blur-3xl" />
      <div className="absolute bottom-[-260px] right-[-220px] h-[560px] w-[560px] rounded-full bg-[#0D2444]/10 blur-3xl" />

      {/* LIGHT GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D244406_1px,transparent_1px),linear-gradient(to_bottom,#0D244406_1px,transparent_1px)] bg-[size:54px_54px]" />

      <div className="relative z-10 mx-auto max-w-[1250px]">
        {/* CENTER HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[920px] text-center"
        >
          <span className="inline-flex rounded-full border border-[#0D2444]/10 bg-white/80 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#0D2444] shadow-[0_14px_40px_rgba(13,36,68,0.07)] backdrop-blur-xl">
            Celebrity Booking Services
          </span>

          <h2
            className="mx-auto mt-6 max-w-[920px] text-[34px] font-semibold leading-[0.96] tracking-[-0.055em] text-[#0D2444] sm:text-[44px] md:text-[54px] lg:text-[64px]"
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            End-to-End Celebrity Management &{" "}
            <span className="bg-gradient-to-r from-[#6288B9] via-[#315E91] to-[#0D2444] bg-clip-text text-transparent">
              Celebrity Booking Services
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[15px] font-medium leading-[1.85] text-slate-600 md:text-[17px]">
            We connect the right public personalities with the right event,
            audience and brand objective through structured planning, talent
            sourcing, negotiation and on-ground coordination.
          </p>
        </motion.div>

        {/* THREE SECTIONS */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-16">
          {sections.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-[34px] border border-[#DCE6F2] bg-white/85 p-6 shadow-[0_18px_55px_rgba(13,36,68,0.07)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#8ABDF0] hover:shadow-[0_28px_80px_rgba(13,36,68,0.13)] md:p-7"
            >
              {/* TOP LINE */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#8ABDF0] via-[#315E91] to-[#0D2444]" />

              {/* NUMBER */}
              <div
                className="text-[72px] font-semibold leading-none tracking-[-0.08em] text-[#8ABDF0]/55 transition-colors duration-300 group-hover:text-[#0D2444]"
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                {item.number}
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <h3 className="max-w-[260px] text-[20px] font-black uppercase leading-[1.15] tracking-[0.08em] text-[#0D2444] md:text-[22px]">
                  {item.title}
                </h3>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F0F7FF] text-[#0D2444] transition-all duration-300 group-hover:bg-[#0D2444] group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <p className="mt-6 text-[14px] font-medium leading-[1.85] text-slate-600 md:text-[15px]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}