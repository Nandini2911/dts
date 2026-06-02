"use client";

import { motion } from "framer-motion";

export default function GuestManagementHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white px-5 py-24 flex items-center justify-center">
      {/* SOFT BACKGROUND ELEMENTS */}
      <div className="absolute top-[-180px] left-[-140px] h-[420px] w-[420px] rounded-full bg-[#6288B9]/20 blur-3xl" />
      <div className="absolute bottom-[-200px] right-[-160px] h-[520px] w-[520px] rounded-full bg-[#0D2444]/10 blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D24440d_1px,transparent_1px),linear-gradient(to_bottom,#0D24440d_1px,transparent_1px)] bg-[size:52px_52px]" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-[1250px]">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT CONTENT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 rounded-full border border-[#DCE6F2] bg-white px-5 py-3 shadow-[0_14px_40px_rgba(13,36,68,0.08)]"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#6288B9] shadow-[0_0_0_7px_rgba(98,136,185,0.16)]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#0D2444]">
                Guest Management Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="mt-8 max-w-[820px] text-[35px] font-semibold leading-[0.95] tracking-[-0.06em] text-[#0D2444] sm:text-[64px] md:text-[62px] "
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              Guest Entry,
              <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
                Done Like A System.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 max-w-[690px] text-[16px] font-medium leading-[1.9] text-slate-600 md:text-[18px]"
            >
              We plan, segment, coordinate and control guest flow across
              weddings, celebrity events, corporate gatherings and brand
              launches—ensuring every arrival feels seamless, organised and
              premium.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-[18px] bg-gradient-to-r from-[#0D2444] to-[#6288B9] px-7 py-4 text-[15px] font-bold text-white shadow-[0_18px_45px_rgba(13,36,68,0.25)] transition-all duration-300 hover:-translate-y-1"
              >
                Start A Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#discussion"
                className="inline-flex items-center justify-center rounded-[18px] border border-[#D5DFEC] bg-white px-7 py-4 text-[15px] font-bold text-[#0D2444] shadow-[0_14px_34px_rgba(13,36,68,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6288B9]"
              >
                Discuss Your Event
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 max-w-[660px] rounded-[24px] border border-[#DCE6F2] bg-[#F8FBFF] px-6 py-4 shadow-[0_16px_45px_rgba(13,36,68,0.07)]"
            >
              <p className="text-[14px] font-semibold leading-[1.7] text-slate-600 md:text-[15px]">
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
            className="relative"
          >
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#6288B9]/20 to-[#0D2444]/5 blur-2xl" />

            <div className="relative overflow-hidden rounded-[40px] border border-[#DCE6F2] bg-white p-6 shadow-[0_30px_90px_rgba(13,36,68,0.12)]">
              <div className="rounded-[30px] bg-gradient-to-br from-[#0D2444] via-[#173B66] to-[#6288B9] p-7 text-white">
                <div className="mb-16 flex items-center justify-between">
                  <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/85">
                      Live Entry Flow
                    </span>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0D2444] shadow-lg">
                    ✓
                  </div>
                </div>

                <h2
                  className="max-w-[360px] text-[42px] font-semibold leading-[0.98] tracking-[-0.045em]"
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

                <div className="mt-8 h-[1px] w-full bg-white/20" />

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    "VIP Flow",
                    "Entry Desk",
                    "Guest Lists",
                    "RSVP Sync",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[20px] border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-xl"
                    >
                      <p className="text-[13px] font-bold text-white">
                        {item}
                      </p>
                      <div className="mt-3 h-[3px] w-9 rounded-full bg-white/70" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-4">
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
                    className="rounded-[22px] border border-[#E1EAF5] bg-[#F8FBFF] px-4 py-5 text-center"
                  >
                    <p className="text-[18px] font-black text-[#0D2444]">
                      {item.number}
                    </p>
                    <p className="mt-1 text-[12px] font-bold text-slate-500">
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