

"use client";

import { motion } from "framer-motion";


const badgeClass =
  "inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)] backdrop-blur-xl";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

export function WhyDoubleTroubleStudio() {
  const reasons = [
    {
      title: "Premium Event Experience",
      desc: "Built for luxury and high-visibility environments.",
    },
    {
      title: "Strategy + Execution",
      desc: "Planning and on-ground management under one roof.",
    },
    {
      title: "Calm Under Pressure",
      desc: "Experienced in handling VIPs, celebrities and large audiences.",
    },
    {
      title: "Structured Systems",
      desc: "Documented workflows, escalation protocols and access controls.",
    },
    {
      title: "Complete Confidentiality",
      desc: "Professional handling of guest information and event operations.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#07182E] px-5 py-16 md:py-24">
      <div className="absolute left-[-180px] top-[-160px] h-[460px] w-[460px] rounded-full bg-[#6288B9]/22 blur-3xl" />
      <div className="absolute right-[-200px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1250px]">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              Why Double Trouble Studio
            </span>

            <h2
              className="mt-7 max-w-[690px] text-[40px] font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-[56px] md:text-[68px]"
              style={serifFont}
            >
              We Don&apos;t Run Guest Lists.{" "}
              <span className="bg-gradient-to-r from-white via-[#BFD7F2] to-[#6288B9] bg-clip-text text-transparent">
                We Run Rooms.
              </span>
            </h2>

            <p className="mt-6 max-w-[560px] text-[15px] font-medium leading-[1.8] text-white/65 md:text-[17px]">
              From the first confirmation to the final guest movement, we bring
              structure, calm and control to rooms where perception matters.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {reasons.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 34 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[26px] border border-white/12 bg-white/8 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-300 hover:bg-white/14"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-white via-[#BFD7F2] to-[#6288B9]" />

                <div className="flex gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[12px] font-bold text-[#0D2444]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3
                      className="text-[24px] font-semibold leading-[1.1] tracking-[-0.04em] text-white"
                      style={serifFont}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[14px] font-medium leading-[1.65] text-white/65 md:text-[15px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}