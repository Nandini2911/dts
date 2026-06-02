"use client";

import { motion } from "framer-motion";

export function WhatYouGet() {
  const deliverables = [
    "Guest List Management",
    "RSVP Tracking",
    "VIP Guest Coordination",
    "QR Code Check-In",
    "Access Control Systems",
    "Wristband & Pass Management",
    "Dedicated Event Coordinator",
    "Venue Coordination",
    "Security Coordination",
    "Real-Time Issue Resolution",
    "Post Event Reporting",
  ];

  return (
    <section className="relative overflow-hidden bg-[#07182E] px-5 py-14 md:py-20">
      <div className="absolute left-[-180px] top-[-120px] h-[430px] w-[430px] rounded-full bg-[#6288B9]/25 blur-3xl" />
      <div className="absolute right-[-180px] bottom-[-160px] h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1220px]">
        <div className="mx-auto max-w-[900px] text-center">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            What You Get
          </span>

          <h2
            className="mx-auto mt-6 text-[38px] font-semibold leading-[1] tracking-[-0.055em] text-white sm:text-[54px] md:text-[68px]"

          >
            Deliverables Designed{" "}
            <span className="bg-gradient-to-r from-white via-[#BFD7F2] to-[#6288B9] bg-clip-text text-transparent">
              For Control
            </span>
          </h2>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              viewport={{ once: true }}
              className="group flex items-center gap-4 rounded-[22px] border border-white/12 bg-white/8 px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/14"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[13px] font-bold text-[#0D2444]">
                ✓
              </span>

              <p className="text-[14px] font-semibold text-white/86">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}