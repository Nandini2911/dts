"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  CheckCircle2,
} from "lucide-react";

export default function GuestManagementHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -top-40
            -left-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#6288B9]/20
            blur-[120px]
          "
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-0
            top-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#0D2444]/10
            blur-[120px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-screen items-center gap-14 py-28 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                glass
                inline-flex
                items-center
                gap-2
                rounded-full
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[3px]
                text-[#6288B9]
              "
            >
              <CheckCircle2 size={14} />
              Guest Management Services
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="
                mt-8
                text-5xl
                font-bold
                leading-[1]
                text-[#0D2444]
                sm:text-6xl
                lg:text-7xl
              "
            >
              Guest Entry,
              <br />
              Done Like A
              <span className="block text-[#6288B9]">
                System.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
                mt-8
                max-w-xl
                text-lg
                leading-relaxed
                text-slate-600
              "
            >
              We plan, segment, coordinate and control guest
              flow across weddings, celebrity events,
              corporate gatherings and brand launches—
              ensuring every arrival feels seamless,
              organised and premium.
            </motion.p>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button className="primary-btn flex items-center gap-2">
                Start A Project
                <ArrowRight size={18} />
              </button>

              <button className="secondary-btn">
                Discuss Your Event
              </button>
            </motion.div>

            {/* Trust */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex items-center gap-3"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="
                      h-11
                      w-11
                      rounded-full
                      border-2
                      border-white
                      bg-gradient-to-br
                      from-[#6288B9]
                      to-[#0D2444]
                    "
                  />
                ))}
              </div>

              <p className="max-w-md text-sm text-slate-500">
                Trusted by brands, founders, celebrities and
                premium events across India.
              </p>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative"
          >
            <div className="premium-card relative overflow-hidden">
              {/* Glow */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#6288B9]/10
                  via-transparent
                  to-[#0D2444]/10
                "
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      Live Guest Tracking
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-[#0D2444]">
                      Event Dashboard
                    </h3>
                  </div>

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#0D2444]
                      text-white
                    "
                  >
                    <Users size={30} />
                  </div>
                </div>

                <div className="mt-10 space-y-5">
                  {[
                    "VIP Guest Segmentation",
                    "Real-Time Check-In Flow",
                    "RSVP Management",
                    "Access Control & Verification",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        p-4
                      "
                    >
                      <CheckCircle2
                        size={18}
                        className="text-[#6288B9]"
                      />

                      <span className="font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4">
                  <div className="glass rounded-2xl p-5 text-center">
                    <h4 className="text-3xl font-bold text-[#0D2444]">
                      5K+
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">
                      Guests Managed
                    </p>
                  </div>

                  <div className="glass rounded-2xl p-5 text-center">
                    <h4 className="text-3xl font-bold text-[#0D2444]">
                      100+
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">
                      Events
                    </p>
                  </div>

                  <div className="glass rounded-2xl p-5 text-center">
                    <h4 className="text-3xl font-bold text-[#0D2444]">
                      99%
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">
                      Accuracy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                glass
                absolute
                -left-8
                top-16
                hidden
                rounded-2xl
                p-4
                lg:block
              "
            >
              <p className="text-xs text-slate-500">
                VIP Arrival
              </p>

              <h4 className="mt-1 font-semibold text-[#0D2444]">
                Successfully Checked In
              </h4>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
                glass
                absolute
                -right-8
                bottom-12
                hidden
                rounded-2xl
                p-4
                lg:block
              "
            >
              <p className="text-xs text-slate-500">
                Guest Flow
              </p>

              <h4 className="mt-1 font-semibold text-[#0D2444]">
                Running Smoothly
              </h4>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}