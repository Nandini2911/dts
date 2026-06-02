"use client";

import { motion } from "framer-motion";

export default function ChallengesWeSolve() {
  const challenges = [
    {
      title: "Confusion At Entry",
      desc: "Multiple guest lists, unclear confirmations and long waiting lines.",
    },
    {
      title: "No Clear Guest Segmentation",
      desc: "VIPs, media, sponsors and guests arriving through the same process.",
    },
    {
      title: "Last-Minute Chaos",
      desc: "Constant list changes and no structured escalation system.",
    },
    {
      title: "Reputation Risk",
      desc: "Poor entry management creates a poor first impression.",
    },
    {
      title: "Security Concerns",
      desc: "Uncontrolled access and inadequate verification.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#F6FAFF] px-5 py-14 md:py-20">
      {/* Background Design */}
      <div className="absolute left-[-180px] top-[-140px] h-[430px] w-[430px] rounded-full bg-[#6288B9]/16 blur-3xl" />
      <div className="absolute right-[-200px] bottom-[-160px] h-[500px] w-[500px] rounded-full bg-[#0D2444]/10 blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.035]" />

      <div className="relative z-10 mx-auto max-w-[1250px]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <span className="inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)] backdrop-blur-xl">
              Challenges We Solve
            </span>

            <h2
              className="mt-7 max-w-[650px] text-[38px] font-semibold leading-[0.98] tracking-[-0.06em] text-[#0D2444] sm:text-[54px] md:text-[64px]"
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              What Usually Goes Wrong{" "}
              <span className="bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
                Before We Step In
              </span>
            </h2>

            <p className="mt-5 max-w-[560px] text-[15px] font-medium leading-[1.75] text-[#203B5C]/75 md:text-[17px]">
              Guest flow problems usually happen when communication,
              verification, access and escalation are not connected through one
              clear system.
            </p>

            <div className="mt-8 hidden max-w-[450px] rounded-[24px] border border-[#0D2444]/10 bg-white/70 p-4 shadow-[0_18px_55px_rgba(13,36,68,0.09)] backdrop-blur-xl md:block">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-[#0D2444] to-[#315E91] text-[13px] font-bold text-white">
                  04
                </div>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6288B9]">
                    Problem Diagnosis
                  </p>
                  <p className="mt-1 text-[13px] font-semibold text-[#0D2444]">
                    We identify gaps before guests experience them.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COMPACT TIMELINE */}
          <div className="relative">
            <div className="absolute left-[19px] top-4 hidden h-[calc(100%-25px)] w-px bg-gradient-to-b from-[#0D2444] via-[#6288B9] to-transparent md:block" />

            <div className="space-y-3">
              {challenges.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="group relative md:pl-14"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-5 hidden h-10 w-10 items-center justify-center rounded-full border border-[#0D2444]/10 bg-white shadow-[0_10px_30px_rgba(13,36,68,0.10)] md:flex">
                    <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#0D2444] to-[#6288B9]" />
                  </div>

                  {/* Compact Issue Card */}
                  <div className="relative overflow-hidden rounded-[22px] border border-[#0D2444]/10 bg-white/82 px-4 py-4 shadow-[0_16px_48px_rgba(13,36,68,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#6288B9]/50 hover:shadow-[0_24px_70px_rgba(13,36,68,0.13)] md:px-5 md:py-4">
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#0D2444] via-[#315E91] to-[#6288B9]" />

                    <div className="absolute right-[-45px] top-[-45px] h-[110px] w-[110px] rounded-full bg-[#6288B9]/12 blur-2xl transition-all duration-500 group-hover:bg-[#0D2444]/16" />

                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div>
                        <div className="mb-2 inline-flex rounded-full bg-[#F1F6FC] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#315E91]">
                          Issue {String(index + 1).padStart(2, "0")}
                        </div>

                        <h3
                          className="text-[22px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#0D2444] md:text-[26px]"
                          style={{
                            fontFamily:
                              'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                          }}
                        >
                          {item.title}
                        </h3>

                        <p className="mt-2 max-w-[560px] text-[14px] font-medium leading-[1.55] text-[#203B5C]/72 md:text-[15px]">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] text-[16px] text-white shadow-[0_12px_32px_rgba(13,36,68,0.20)] transition-transform duration-500 group-hover:rotate-45">
                        +
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}