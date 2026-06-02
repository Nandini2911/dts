"use client";

import { motion } from "framer-motion";

export default function GuestManagementHero() {
  return (
    <section className="relative min-h-screen overflow-hidden py-[110px] flex items-center">
      {/* BG IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/guest.jpg)",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#07111F]/60" />

      {/* PREMIUM LIGHTS */}
      <div className="absolute top-[-180px] left-[-120px] w-[460px] h-[460px] rounded-full bg-[#6288B9]/25 blur-3xl" />
      <div className="absolute bottom-[-220px] right-[-160px] w-[520px] h-[520px] rounded-full bg-[#0D2444]/50 blur-3xl" />
      <div className="absolute top-[25%] right-[12%] w-[220px] h-[220px] rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-5 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-[780px]">
            {/* LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex"
            >
              <div
                className="
                  px-6
                  py-3
                  rounded-full
                  border
                  border-white/15
                  bg-white/10
                  backdrop-blur-xl
                  shadow-[0_10px_40px_rgba(0,0,0,0.18)]
                "
              >
                <span
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.24em]
                    font-semibold
                    text-white
                  "
                >
                  Guest Management Services
                </span>
              </div>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="
                mt-7
                text-[46px]
                sm:text-[58px]
                md:text-[78px]
                lg:text-[92px]
                leading-[0.92]
                tracking-[-4px]
                font-black
              "
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              <span className="text-white">Guest Entry,</span>

              <br />

              <span
                className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-white
                  via-[#C7D7EC]
                  to-[#8FB1DA]
                "
              >
                Done Like A System.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.22 }}
              className="
                mt-7
                max-w-[700px]
                text-[16px]
                md:text-[18px]
                leading-[1.9]
                text-white/70
                font-medium
              "
            >
              We plan, segment, coordinate and control guest flow across
              weddings, celebrity events, corporate gatherings and brand
              launches—ensuring every arrival feels seamless, organised and
              premium.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.34 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-7
                  py-4
                  rounded-[18px]
                  bg-gradient-to-r
                  from-[#0D2444]
                  via-[#315E91]
                  to-[#6288B9]
                  text-white
                  text-[15px]
                  font-bold
                  shadow-[0_18px_45px_rgba(98,136,185,0.28)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                Start A Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#discussion"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-7
                  py-4
                  rounded-[18px]
                  border
                  border-white/20
                  bg-white/10
                  backdrop-blur-xl
                  text-white
                  text-[15px]
                  font-bold
                  shadow-[0_14px_35px_rgba(0,0,0,0.14)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/15
                "
              >
                Discuss Your Event
              </a>
            </motion.div>

            {/* TRUST LINE */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.46 }}
              className="
                mt-9
                max-w-[650px]
                rounded-[24px]
                border
                border-white/15
                bg-white/10
                backdrop-blur-xl
                px-6
                py-4
                shadow-[0_16px_45px_rgba(0,0,0,0.14)]
              "
            >
              <p className="text-[14px] md:text-[15px] leading-[1.7] text-white/75 font-medium">
                Trusted by brands, founders, celebrities and premium events
                across India.
              </p>
            </motion.div>
          </div>

          {/* RIGHT PREMIUM CARD */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="relative hidden lg:block"
          >
            {/* OUTER GLOW */}
            <div
              className="
                absolute
                inset-0
                rounded-[38px]
                bg-gradient-to-br
                from-[#6288B9]/25
                via-transparent
                to-white/10
                blur-2xl
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[38px]
                border
                border-white/20
                bg-white/10
                backdrop-blur-[20px]
                p-7
                shadow-[0_25px_70px_rgba(0,0,0,0.24)]
              "
            >
              {/* CARD LIGHT */}
              <div className="absolute top-[-100px] right-[-80px] w-[260px] h-[260px] rounded-full bg-[#6288B9]/25 blur-3xl" />

              {/* IMAGE PANEL */}
              <div
                className="
                  relative
                  min-h-[330px]
                  rounded-[30px]
                  overflow-hidden
                  border
                  border-white/15
                  bg-cover
                  bg-center
                "
                style={{
                  backgroundImage: "url('/guest-management-card.jpg')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/85 via-[#07111F]/25 to-transparent" />

                <div className="absolute left-6 bottom-6 right-6">
                  <div
                    className="
                      inline-flex
                      px-4
                      py-2
                      rounded-full
                      bg-white/15
                      backdrop-blur-xl
                      border
                      border-white/15
                      text-white
                      text-[11px]
                      font-bold
                      tracking-[0.18em]
                      uppercase
                    "
                  >
                    Live Guest Flow
                  </div>

                  <h2
                    className="
                      mt-4
                      text-[34px]
                      leading-[1]
                      tracking-[-2px]
                      font-black
                      text-white
                    "
                    style={{
                      fontFamily:
                        'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                    }}
                  >
                    Every Arrival.
                    <br />
                    Fully Controlled.
                  </h2>
                </div>
              </div>

              {/* SYSTEM POINTS */}
              <div className="grid grid-cols-2 gap-4 mt-5">
                {[
                  "VIP Flow",
                  "Entry Desk",
                  "Guest Lists",
                  "RSVP Sync",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      rounded-[22px]
                      border
                      border-white/15
                      bg-white/10
                      backdrop-blur-xl
                      px-5
                      py-5
                      shadow-[0_12px_30px_rgba(0,0,0,0.12)]
                    "
                  >
                    <p className="text-[13px] font-bold text-white">
                      {item}
                    </p>
                    <div className="mt-3 h-[3px] w-10 rounded-full bg-gradient-to-r from-[#6288B9] to-white/70" />
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