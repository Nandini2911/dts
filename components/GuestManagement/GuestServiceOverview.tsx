"use client";

import { motion } from "framer-motion";

export default function ServiceOverview() {
  const tags = [
    "Invitation Tracking",
    "RSVP Management",
    "VIP Handling",
    "Access Control",
    "On-Ground Support",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white px-5 py-14 md:py-20">
      {/* Soft Background */}
      <div className="absolute left-[-180px] top-[20%] h-[380px] w-[380px] rounded-full bg-[#6288B9]/10 blur-3xl" />
      <div className="absolute right-[-220px] bottom-[-180px] h-[460px] w-[460px] rounded-full bg-[#0D2444]/8 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: [0.88, 1.05, 1] }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-10 mx-auto max-w-[1150px] text-center"
      >
        {/* CENTER HEADING */}
        <motion.div>
          <span className="inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)] backdrop-blur-xl">
            Service Overview
          </span>

          <h2
            className="mx-auto mt-6 max-w-[1100px] text-[34px] font-semibold leading-[0.98] tracking-[-0.06em] text-[#0D2444] sm:text-[48px] md:text-[64px] lg:text-[72px]"
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            What Is Guest{" "}
            <span className="bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#7BA0CC] bg-clip-text text-transparent">
              Management?
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[850px] text-[15px] font-medium leading-[1.8] text-slate-600 md:text-[18px]">
            Guest management is the planning, coordination and execution of
            guest journeys before, during and after an event. From invitation
            tracking and RSVP management to VIP handling, access control and
            on-ground support, every touchpoint is designed to create a smooth
            and memorable experience.
          </p>
        </motion.div>

        {/* CENTER TAGS */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mx-auto mt-10 flex max-w-[850px] flex-wrap items-center justify-center gap-3"
        >
          {tags.map((tag, index) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: [0.85, 1.08, 1] }}
              transition={{
                duration: 0.55,
                delay: 0.45 + index * 0.08,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-full border border-[#DCE6F2] bg-white px-5 py-3 shadow-[0_14px_40px_rgba(13,36,68,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6288B9]"
            >
              <span className="relative z-10 text-[13px] font-semibold text-[#0D2444] transition-colors duration-300 group-hover:text-white">
                {tag}
              </span>

              <div className="absolute inset-0 translate-y-full bg-[#0D2444] transition-transform duration-300 group-hover:translate-y-0" />
            </motion.div>
          ))}
        </motion.div>

        {/* SMALL BOTTOM LINE */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mx-auto mt-10 h-px max-w-[520px] origin-center bg-gradient-to-r from-transparent via-[#0D2449] to-transparent"
        />
      </motion.div>
    </section>
  );
}