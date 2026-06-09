"use client";

import { motion } from "framer-motion";

export default function ServiceOverview() {
  const services = [
    "RSVP Management",
    "Guest List Management",
    "Event Registration",
    "VIP Guest Coordination",
    "Check-In Management",
    "Access Control",
    "Hospitality Support",
    "On-Ground Guest Assistance",

    
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      {/* Soft Background */}
      <div className="absolute left-[-180px] top-[20%] h-[320px] w-[320px] rounded-full bg-[#6288B9]/10 blur-3xl sm:h-[380px] sm:w-[380px]" />
      <div className="absolute right-[-220px] bottom-[-180px] h-[380px] w-[380px] rounded-full bg-[#0D2444]/8 blur-3xl sm:h-[460px] sm:w-[460px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        whileInView={{ opacity: 1, scale: [0.88, 1.03, 1] }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-10 mx-auto max-w-[1150px] text-center"
      >
        {/* CENTER HEADING */}
        <motion.div>
          <span className="inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)] backdrop-blur-xl sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.24em]">
            Service Overview
          </span>

          <h2
            className="mx-auto mt-6 max-w-[950px] text-[34px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#0D2444] sm:text-[42px] md:text-[52px] lg:text-[60px]"
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

          <p className="mx-auto mt-7 max-w-[850px] text-[15px] font-medium leading-[1.8] text-slate-600 md:text-[17px]">
            Guest management is the process of planning, organizing and
            coordinating attendees before, during and after an event.
          </p>

          <p className="mx-auto mt-5 max-w-[850px] text-[15px] font-medium leading-[1.8] text-slate-600 md:text-[17px]">
            Professional guest management services include:
          </p>
        </motion.div>

        {/* SERVICE LIST */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-9 grid max-w-[920px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: [0.85, 1.05, 1] }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.3 + index * 0.06,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-[20px] border border-[#DCE6F2] bg-white px-5 py-5 shadow-[0_14px_40px_rgba(13,36,68,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6288B9]"
            >
              <span className="relative z-10 text-[13px] font-bold leading-[1.4] text-[#0D2444] transition-colors duration-300 group-hover:text-white sm:text-[14px]">
                {service}
              </span>

              <div className="absolute inset-0 translate-y-full bg-gradient-to-r from-[#0D2444] to-[#315E91] transition-transform duration-300 group-hover:translate-y-0" />
            </motion.div>
          ))}
        </motion.div>

        {/* FINAL PARAGRAPH */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mx-auto mt-9 max-w-[900px] text-[15px] font-medium leading-[1.8] text-slate-600 md:text-[17px]"
        >
          Whether it's a luxury wedding, corporate conference, celebrity event
          or brand launch, effective guest management ensures smooth operations
          and an exceptional guest experience.
        </motion.p>

        {/* SMALL BOTTOM LINE */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mx-auto mt-10 h-px max-w-[520px] origin-center bg-gradient-to-r from-transparent via-[#0D2449] to-transparent"
        />
      </motion.div>
    </section>
  );
}