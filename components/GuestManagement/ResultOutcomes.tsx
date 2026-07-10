"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const badgeClass =
  "inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)] backdrop-blur-xl sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.24em]";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

export function ResultsOutcomes() {
  const linkClass =
    "underline underline-offset-4 decoration-[#6288B9]/35 transition-colors duration-300 hover:text-[#315E91] hover:decoration-[#315E91] group-hover:hover:text-white group-hover:hover:decoration-white";

  const titleLinkClass =
    "transition-colors duration-300 hover:text-[#315E91] hover:underline hover:underline-offset-4 group-hover:hover:text-white";

  const results = [
    {
      stat: "95%",
      title: "Faster Verification",
      titleLink:
        "https://www.dtsworld.in/blog/contactless-check-in-systems-high-end-events",
      desc: (
        <>
          Guests are verified quickly through organized lists,{" "}
          <Link
            href="https://www.dtsworld.in/blog/contactless-check-in-systems-high-end-events"
            className={linkClass}
          >
            registrations
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.dtsworld.in/blog/on-site-guest-flow-registration-entry-seating-experience-mapping"
            className={linkClass}
          >
            check-in systems
          </Link>
          .
        </>
      ),
    },
    {
      stat: "70%",
      title: "Reduction In Entry Delays",
      titleLink:
        "https://www.dtsworld.in/blog/on-site-guest-flow-registration-entry-seating-experience-mapping",
      desc: "Structured entry flow helps reduce crowding, confusion and long waiting time at gates.",
    },
    {
      stat: "100%",
      title: "RSVP Visibility",
      titleLink: "https://www.dtsworld.in/blog/event-rsvp-management",
      desc: "Track confirmations, pending responses and expected attendance before event day.",
    },
    {
      stat: "VIP",
      title: "Dedicated VIP Handling",
      titleLink: "https://www.dtsworld.in/services/celebrity-management",
      desc: "Special coordination for celebrities, founders, dignitaries and premium guests.",
    },
    {
      stat: "LIVE",
      title: "Real-Time Guest Tracking",
      titleLink:
        "https://www.dtsworld.in/blog/event-guest-analytics-behavior-engagement-satisfaction",
      desc: "On-ground teams monitor guest movement, arrivals and access throughout the event.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      {/* SOFT BACKGROUND */}
      <div className="absolute right-[-180px] top-[-160px] h-[380px] w-[380px] rounded-full bg-[#6288B9]/14 blur-3xl sm:h-[440px] sm:w-[440px]" />
      <div className="absolute left-[-220px] bottom-[-180px] h-[420px] w-[420px] rounded-full bg-[#0D2444]/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1220px]">
        {/* HEADING */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <span className={badgeClass}>Results & Outcomes</span>

            <h2
              className="mt-6 max-w-[760px] text-[34px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#0D2444] sm:text-[42px] md:text-[52px] lg:text-[60px]"
              style={serifFont}
            >
              Event Management{" "}
              <span className="bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
                Results
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-[470px] text-[15px] font-medium leading-[1.8] text-[#203B5C]/72 md:text-[17px]"
          >
            Professional guest management creates faster verification, smoother
            entry, stronger control and a premium guest experience.
          </motion.p>
        </div>

        {/* RESULT CARDS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {results.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative min-h-[260px] overflow-hidden rounded-[28px] border border-[#0D2444]/10 bg-gradient-to-br from-white via-[#F4F9FF] to-[#D9E8F7] p-5 shadow-[0_18px_55px_rgba(13,36,68,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-[#6288B9]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D2444] via-[#16365F] to-[#6288B9] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[42px] font-black leading-none tracking-[-0.06em] text-[#0D2444] transition-colors duration-500 group-hover:text-white sm:text-[46px] lg:text-[40px] xl:text-[46px]">
                    {item.stat}
                  </p>

                  <span className="rounded-full border border-[#0D2444]/10 bg-white/70 px-3 py-1 text-[10px] font-black text-[#0D2444]/40 transition-colors duration-500 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  className="mt-10 text-[22px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#0D2444] transition-colors duration-500 group-hover:text-white lg:text-[21px]"
                  style={serifFont}
                >
                  <Link href={item.titleLink} className={titleLinkClass}>
                    {item.title}
                  </Link>
                </h3>

                <p className="mt-4 text-[14px] font-medium leading-[1.65] text-[#203B5C]/72 transition-colors duration-500 group-hover:text-white/75">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}