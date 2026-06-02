"use client";

import { motion } from "framer-motion";

export default function ServiceOverview() {
  const benefits = [
    {
      title: "Faster Entry",
      text: "Smooth check-ins with planned guest flow.",
      number: "01",
    },
    {
      title: "Better Guest Experience",
      text: "Clear communication from invite to arrival.",
      number: "02",
    },
    {
      title: "Controlled Access",
      text: "Right guests, right zones, right permissions.",
      number: "03",
    },
    {
      title: "VIP Coordination",
      text: "Dedicated movement and attention for priority guests.",
      number: "04",
    },
    {
      title: "Real-Time Visibility",
      text: "Track arrivals, confirmations and guest movement.",
      number: "05",
    },
    {
      title: "Stress-Free Execution",
      text: "Your team stays focused while the flow stays managed.",
      number: "06",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white px-5 py-24 ">
      {/* SOFT BACKGROUND DETAILS */}
      <div className="absolute left-[-180px] top-[120px] h-[420px] w-[420px] rounded-full bg-[#6288B9]/12 blur-3xl" />
      <div className="absolute bottom-[-220px] right-[-180px] h-[520px] w-[520px] rounded-full bg-[#0D2444]/8 blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D24440a_1px,transparent_1px),linear-gradient(to_bottom,#0D24440a_1px,transparent_1px)] bg-[size:54px_54px]" />

      <div className="relative z-10 mx-auto max-w-[1250px]">
        {/* TOP SECTION */}
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-[#DCE6F2] bg-white px-5 py-3 shadow-[0_14px_40px_rgba(13,36,68,0.08)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#6288B9] shadow-[0_0_0_7px_rgba(98,136,185,0.16)]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#0D2444]">
                Service Overview
              </span>
            </div>

            <h2
              className="mt-7 max-w-[620px] text-[42px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#0D2444] sm:text-[56px] md:text-[68px]"
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              What Is
              <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
                Guest Management?
              </span>
            </h2>
          </motion.div>

          {/* RIGHT DESCRIPTION CARD */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-[#6288B9]/18 to-[#0D2444]/5 blur-2xl" />

            <div className="relative rounded-[36px] border border-[#DCE6F2] bg-white p-7 shadow-[0_28px_80px_rgba(13,36,68,0.10)] md:p-9">
              <p className="text-[17px] font-medium leading-[1.95] text-slate-600 md:text-[18px]">
                Guest management is the planning, coordination and execution of
                guest journeys before, during and after an event. From
                invitation tracking and RSVP management to VIP handling, access
                control and on-ground support, every touchpoint is designed to
                create a smooth and memorable experience.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  {
                    label: "Before",
                    text: "Invite & RSVP",
                  },
                  {
                    label: "During",
                    text: "Entry & Flow",
                  },
                  {
                    label: "After",
                    text: "Closure & Data",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[22px] border border-[#E1EAF5] bg-[#F8FBFF] px-4 py-5 text-center"
                  >
                    <p className="text-[14px] font-black text-[#0D2444]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-[11px] font-bold text-slate-500">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* WHY IT MATTERS */}
        <div className="mt-30 grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* DARK PREMIUM CARD */}
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#0D2444] via-[#173B66] to-[#6288B9] p-8 text-white shadow-[0_30px_90px_rgba(13,36,68,0.22)] md:p-10"
          >
            <div className="absolute right-[-100px] top-[-100px] h-[260px] w-[260px] rounded-full bg-white/15 blur-3xl" />
            <div className="absolute bottom-[-140px] left-[-120px] h-[320px] w-[320px] rounded-full bg-[#6288B9]/30 blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/85">
                  Why It Matters
                </span>
              </div>

              <h3
                className="mt-8 max-w-[430px] text-[38px] font-semibold leading-[1] tracking-[-0.045em] text-white md:text-[52px]"
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                Experience starts before the venue.
              </h3>

              <p className="mt-7 text-[16px] font-medium leading-[1.9] text-white/72">
                A guest&apos;s experience begins long before they enter the
                venue. Poor coordination, delayed entry or unclear communication
                can affect the perception of the entire event.
              </p>

              <div className="mt-10 h-[1px] w-full bg-white/18" />

              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0D2444] shadow-lg">
                  ✓
                </div>

                <p className="text-[15px] font-bold leading-[1.6] text-white">
                  Professional guest management keeps the event premium,
                  controlled and stress-free.
                </p>
              </div>
            </div>
          </motion.div>

          {/* BENEFITS GRID */}
          <motion.div
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {benefits.map((item) => (
              <div
                key={item.title}
                className="group rounded-[28px] border border-[#DCE6F2] bg-white p-6 shadow-[0_18px_50px_rgba(13,36,68,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#BFD1E8] hover:shadow-[0_24px_70px_rgba(13,36,68,0.11)]"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[12px] font-black tracking-[0.18em] text-[#6288B9]">
                      {item.number}
                    </p>

                    <h4 className="mt-4 text-[20px] font-black tracking-[-0.03em] text-[#0D2444]">
                      {item.title}
                    </h4>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F1F7FF] text-[#0D2444] transition-all duration-300 group-hover:bg-[#0D2444] group-hover:text-white">
                    ✓
                  </div>
                </div>

                <p className="mt-4 text-[14px] font-medium leading-[1.7] text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}