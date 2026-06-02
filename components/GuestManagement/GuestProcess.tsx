"use client";

import { motion } from "framer-motion";

export function OurProcess() {
  const steps = [
    {
      no: "01",
      title: "Discovery & Planning",
      desc: "Understanding audience types, VIP priorities and event objectives.",
    },
    {
      no: "02",
      title: "Guest System Setup",
      desc: "Creating guest categories, access tiers and RSVP workflows.",
    },
    {
      no: "03",
      title: "Coordination & Communication",
      desc: "Invitations, reminders and confirmations.",
    },
    {
      no: "04",
      title: "On-Ground Execution",
      desc: "Check-ins, access control and real-time coordination.",
    },
    {
      no: "05",
      title: "Reporting & Wrap-Up",
      desc: "Attendance insights and post-event review.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F6FAFF] px-5 py-14 md:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)] bg-[size:90px_90px] opacity-[0.035]" />

      <div className="relative z-10 mx-auto max-w-[1250px]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <span className="inline-block rounded-full bg-gradient-to-r from-[#0D2444] to-[#315E91] px-4 py-2 text-white">
              Our Process
            </span>

            <h2
              className="mt-7 text-[42px] font-semibold leading-[0.95] tracking-[-0.06em] text-[#0D2444] sm:text-[58px] md:text-[72px]"
             
            >
              How It{" "}
              <span className="bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
                Works
              </span>
            </h2>

            <p className="mt-6 max-w-[520px] text-[15px] font-medium leading-[1.75] text-[#203B5C]/72 md:text-[17px]">
              A structured system from planning to post-event reporting, built
              to keep guest movement clear, calm and controlled.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-8 hidden h-[calc(100%-60px)] w-px bg-gradient-to-b from-[#0D2444] via-[#6288B9] to-transparent md:block" />

            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.no}
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="relative md:pl-16"
                >
                  <div className="absolute left-0 top-5 hidden h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#0D2444] to-[#315E91] text-[12px] font-bold text-white shadow-[0_14px_40px_rgba(13,36,68,0.22)] md:flex">
                    {step.no}
                  </div>

                  <div className="rounded-[26px] border border-[#0D2444]/10 bg-white/82 px-5 py-5 shadow-[0_18px_55px_rgba(13,36,68,0.08)] backdrop-blur-xl">
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#6288B9] md:hidden">
                      Step {step.no}
                    </p>

                    <h3
                      className="text-[25px] font-semibold tracking-[-0.04em] text-[#0D2444]"
                      
                    >
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[14px] font-medium leading-[1.65] text-[#203B5C]/72 md:text-[15px]">
                      {step.desc}
                    </p>
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