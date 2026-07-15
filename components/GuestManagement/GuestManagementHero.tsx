"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const linkClass =
  "font-medium text-[#0D2444] underline underline-offset-4 hover:text-[#315E91]";

export default function GuestManagementHero() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-white px-4 pt-16 pb-8 sm:px-6 sm:pt-20 sm:pb-10 lg:px-8 lg:pt-24 lg:pb-12">
      {/* SOFT BACKGROUND ELEMENTS */}
      <div className="absolute top-[-180px] left-[-160px] h-[360px] w-[360px] rounded-full bg-[#6288B9]/20 blur-3xl sm:h-[420px] sm:w-[420px]" />
      <div className="absolute right-[-180px] bottom-[-220px] h-[420px] w-[420px] rounded-full bg-[#0D2444]/10 blur-3xl sm:h-[520px] sm:w-[520px]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D24440d_1px,transparent_1px),linear-gradient(to_bottom,#0D24440d_1px,transparent_1px)] bg-[size:42px_42px] sm:bg-[size:52px_52px]" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-[1250px]">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 mt-10">
          {/* LEFT CONTENT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)] backdrop-blur-xl sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.24em]">
                Guest Management Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="mt-7 max-w-[820px] text-[36px] font-semibold leading-[1.05] tracking-[-0.055em] sm:text-[42px] md:text-[34px] lg:text-[44px]"
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              <span className="block text-[#0D2444]">Guest Management</span>

              <span className="block">
                <span className="bg-gradient-to-r from-[#6288B9] via-[#8FA9C8] to-[#0D2444] bg-clip-text text-transparent">
                  Services For Weddings,
                </span>
              </span>

              <span className="block text-[#0D2444]">
                Corporate Events &
              </span>

              <span className="block bg-gradient-to-r from-[#6288B9] via-[#315E91] to-[#0D2444] bg-clip-text text-transparent">
                VIP Experiences
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-[720px] text-[14px] font-medium leading-[1.8] text-slate-600 sm:text-[15px] md:text-[16px] lg:text-[17px]"
            >
              <Link
                href="https://www.dtsworld.in/services/guest-management/mumbai"
                className={linkClass}
              >
                Guest Management Services In Mumbai
              </Link>{" "}
              & Across India
              <br />
              Professional Guest Management Services In Mumbai Including{" "}
              <Link
                href="https://www.dtsworld.in/blog/event-rsvp-management"
                className={linkClass}
              >
                RSVP Management
              </Link>
              ,{" "}
              <Link
                href="https://www.dtsworld.in/blog/How-to-build-segment-high-profile-guest-list"
                className={linkClass}
              >
                Guest List Management
              </Link>
              ,{" "}
              <Link
                href="https://www.dtsworld.in/blog/contactless-check-in-systems-high-end-events"
                className={linkClass}
              >
                Event Registration
              </Link>
              ,{" "}
              <Link
                href="https://www.dtsworld.in/services/celebrity-management"
                className={linkClass}
              >
                VIP Guest Coordination
              </Link>
              ,{" "}
              <Link
                href="https://www.dtsworld.in/blog/on-site-guest-flow-registration-entry-seating-experience-mapping"
                className={linkClass}
              >
                Check-In Management
              </Link>{" "}
              And{" "}
              <Link
                href="https://www.dtsworld.in/blog/contactless-check-in-systems-high-end-events"
                className={linkClass}
              >
                Access Control
              </Link>{" "}
              For{" "}
              <Link
                href="https://www.dtsworld.in/services/events-weddings"
                className={linkClass}
              >
                Weddings
              </Link>
              ,{" "}
              <Link
                href="https://www.dtsworld.in/services/events-weddings"
                className={linkClass}
              >
                Corporate Events
              </Link>
              ,{" "}
              <Link
                href="https://www.dtsworld.in/services/celebrity-management"
                className={linkClass}
              >
                Celebrity Events
              </Link>{" "}
              And{" "}
              <Link
                href="https://www.dtsworld.in/services/pr-media-marketing"
                className={linkClass}
              >
                Brand Launches
              </Link>{" "}
              Across India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:mt-10"
            >
              <Link
                href="https://www.dtsworld.in/contact"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-[16px] bg-gradient-to-r from-[#0D2444] to-[#6288B9] px-6 py-4 text-[14px] font-bold text-white shadow-[0_18px_45px_rgba(13,36,68,0.25)] transition-all duration-300 hover:-translate-y-1 sm:w-auto sm:rounded-[18px] sm:px-7 sm:text-[15px]"
              >
                Start A Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="https://www.dtsworld.in/contact"
                className="inline-flex w-full items-center justify-center rounded-[16px] border border-[#D5DFEC] bg-white px-6 py-4 text-[14px] font-bold text-[#0D2444] shadow-[0_14px_34px_rgba(13,36,68,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6288B9] sm:w-auto sm:rounded-[18px] sm:px-7 sm:text-[15px]"
              >
                Discuss Your Event
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-7 max-w-[660px] rounded-[20px] border border-[#DCE6F2] bg-[#F8FBFF] px-5 py-4 shadow-[0_16px_45px_rgba(13,36,68,0.07)] sm:mt-9 sm:rounded-[24px] sm:px-6"
            >
              <p className="text-[13px] font-semibold leading-[1.7] text-slate-600 sm:text-[14px] md:text-[15px]">
                Trusted by brands, founders, celebrities and premium events
                across India.
              </p>
            </motion.div>
          </div>

          {/* RIGHT SYSTEM CARD */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.22 }}
            className="relative w-full"
          >
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#6288B9]/20 to-[#0D2444]/5 blur-2xl sm:rounded-[40px]" />

            <div className="relative overflow-hidden rounded-[28px] border border-[#DCE6F2] bg-white p-4 shadow-[0_30px_90px_rgba(13,36,68,0.12)] sm:rounded-[40px] sm:p-6">
              <div className="rounded-[24px] bg-gradient-to-br from-[#0D2444] via-[#173B66] to-[#6288B9] p-5 text-white sm:rounded-[30px] sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div className="rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-xl sm:px-4">
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/85 sm:text-[11px] sm:tracking-[0.2em]">
                      Live Entry Flow
                    </span>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#0D2444] shadow-lg sm:h-11 sm:w-11">
                    ✓
                  </div>
                </div>

                <h2
                  className="mt-8 max-w-[360px] text-[32px] font-semibold leading-[0.98] tracking-[-0.045em] sm:mt-10 sm:text-[38px] lg:text-[42px]"
                  style={{
                    fontFamily:
                      'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                  }}
                >
                  Every guest.
                  <br />
                  Every gate.
                  <br />
                  Fully controlled.
                </h2>

                <div className="mt-7 h-[1px] w-full bg-white/20 sm:mt-8" />

                <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4">
                  {["VIP Flow", "Entry Desk", "Guest Lists", "RSVP Sync"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-[16px] border border-white/15 bg-white/10 px-3 py-4 backdrop-blur-xl sm:rounded-[20px] sm:px-4"
                      >
                        <p className="text-[12px] font-bold text-white sm:text-[13px]">
                          {item}
                        </p>
                        <div className="mt-3 h-[3px] w-8 rounded-full bg-white/70 sm:w-9" />
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 sm:mt-5 sm:gap-4">
                {[
                  {
                    number: "01",
                    label: "Segment",
                  },
                  {
                    number: "02",
                    label: "Coordinate",
                  },
                  {
                    number: "03",
                    label: "Control",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="rounded-[16px] border border-[#E1EAF5] bg-[#F8FBFF] px-2 py-4 text-center sm:rounded-[22px] sm:px-4 sm:py-5"
                  >
                    <p className="text-[15px] font-black text-[#0D2444] sm:text-[18px]">
                      {item.number}
                    </p>
                    <p className="mt-1 text-[10px] font-bold text-slate-500 sm:text-[12px]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}