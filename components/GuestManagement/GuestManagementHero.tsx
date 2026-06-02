"use client";

import { motion } from "framer-motion";

const flowSteps = [
  "Guest List",
  "Segmentation",
  "Coordination",
  "Premium Entry",
];

export default function GuestManagementHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F6F8FC] px-5 py-24 sm:px-8 lg:px-16">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-grid" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D8E3F3] bg-white/70 px-4 py-2 text-sm font-medium text-[#0D2444] shadow-sm backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-[#6288B9]" />
            Guest Management Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="max-w-4xl text-[46px] leading-[0.95] tracking-[-0.04em] text-[#0F172A] sm:text-[64px] lg:text-[84px]"
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            Guest Entry,
            <span className="block bg-gradient-to-r from-[#0D2444] to-[#6288B9] bg-clip-text text-transparent">
              Done Like A System.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.8 }}
            className="mt-7 max-w-2xl text-base leading-8 text-[#475569] sm:text-lg"
          >
            We plan, segment, coordinate and control guest flow across weddings,
            celebrity events, corporate gatherings and brand launches — ensuring
            every arrival feels seamless, organised and premium.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.8 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#contact" className="primary-btn text-center">
              Start A Project
            </a>

            <a href="#discussion" className="secondary-btn text-center">
              Discuss Your Event
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.72, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-3 text-sm font-medium text-[#64748B]"
          >
            <div className="flex -space-x-3">
              <span className="trust-dot">D</span>
              <span className="trust-dot">T</span>
              <span className="trust-dot">S</span>
            </div>
            <p>
              Trusted by brands, founders, celebrities and premium events across
              India.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 35 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-[#0D2444]/10 to-[#6288B9]/20 blur-2xl" />

          <div className="glass relative rounded-[36px] p-5 shadow-[0_30px_90px_rgba(13,36,68,0.16)] sm:p-7">
            <div className="rounded-[28px] bg-white p-6 shadow-[inset_0_0_0_1px_rgba(226,232,240,0.9)] sm:p-8">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6288B9]">
                    Live Flow
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">
                    Guest Entry Control
                  </h3>
                </div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="grid h-16 w-16 place-items-center rounded-full border border-[#D8E3F3] bg-[#F8FAFC]"
                >
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#0D2444] to-[#6288B9]" />
                </motion.div>
              </div>

              <div className="space-y-4">
                {flowSteps.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.7 + index * 0.16,
                      duration: 0.6,
                    }}
                    className="guest-step"
                  >
                    <div className="flex items-center gap-4">
                      <span className="step-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="font-semibold text-[#0F172A]">
                          {step}
                        </h4>
                        <p className="text-sm text-[#64748B]">
                          {index === 0 && "Verified lists and RSVP tracking"}
                          {index === 1 && "VIP, family, media and team groups"}
                          {index === 2 && "On-ground teams with live updates"}
                          {index === 3 && "Smooth, premium arrival experience"}
                        </p>
                      </div>
                    </div>

                    <div className="step-pulse" />
                  </motion.div>
                ))}
              </div>

              <div className="mt-7 grid grid-cols-3 gap-3">
                <div className="mini-stat">
                  <strong>VIP</strong>
                  <span>Priority Flow</span>
                </div>
                <div className="mini-stat">
                  <strong>360°</strong>
                  <span>Coordination</span>
                </div>
                <div className="mini-stat">
                  <strong>Live</strong>
                  <span>Updates</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="floating-badge left-3 top-6 sm:-left-8"
          >
            RSVP Sorted
          </motion.div>

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="floating-badge bottom-8 right-2 sm:-right-8"
          >
            Entry Seamless
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}