"use client";

import { motion } from "framer-motion";

export default function ServiceOverview() {
  const points = [
    "Faster Entry",
    "Better Guest Experience",
    "Controlled Access",
    "VIP Coordination",
    "Real-Time Visibility",
    "Stress-Free Execution",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white px-5 py-16 md:py-20">
      {/* SOFT BG */}
      <div className="absolute left-[-160px] top-[80px] h-[360px] w-[360px] rounded-full bg-[#6288B9]/12 blur-3xl" />
      <div className="absolute right-[-180px] bottom-[-160px] h-[420px] w-[420px] rounded-full bg-[#0D2444]/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1250px]">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex rounded-full border border-[#DCE6F2] bg-white px-5 py-3 shadow-[0_14px_40px_rgba(13,36,68,0.08)]">
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#0D2444]">
                Service Overview
              </span>
            </div>

            <h2
              className="mt-6 text-[38px] font-semibold leading-[1] tracking-[-0.055em] text-[#0D2444] sm:text-[52px] md:text-[62px]"
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              What Is Guest
              <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
                Management?
              </span>
            </h2>

            <p className="mt-6 max-w-[610px] text-[15px] font-medium leading-[1.8] text-slate-600 md:text-[17px]">
              Guest management is the planning, coordination and execution of
              guest journeys before, during and after an event. From invitation
              tracking and RSVP management to VIP handling, access control and
              on-ground support, every touchpoint is designed to create a smooth
              and memorable experience.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-[34px] border border-[#DCE6F2] bg-white p-6 shadow-[0_28px_80px_rgba(13,36,68,0.10)] md:p-8"
          >
            <div className="rounded-[28px] bg-gradient-to-br from-[#0D2444] via-[#173B66] to-[#6288B9] p-6 text-white">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/75">
                Why It Matters
              </span>

              <h3
                className="mt-4 text-[30px] font-semibold leading-[1.05] tracking-[-0.04em] md:text-[42px]"
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                Experience starts before the venue.
              </h3>

              <p className="mt-5 text-[15px] font-medium leading-[1.75] text-white/72">
                A guest&apos;s experience begins long before they enter the
                venue. Poor coordination, delayed entry or unclear communication
                can affect the perception of the entire event.
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
              {points.map((item) => (
                <div
                  key={item}
                  className="rounded-[18px] border border-[#E1EAF5] bg-[#F8FBFF] px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#6288B9]"
                >
                  <p className="text-[13px] font-sm text-[#0D2444]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}