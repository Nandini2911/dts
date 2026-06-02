"use client";

import { motion } from "framer-motion";

const badgeClass =
  "inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)] backdrop-blur-xl";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

export function IndustriesWeServe() {
  const industries = [
    "Luxury Weddings",
    "Celebrity Events",
    "Corporate Events",
    "Brand Launches",
    "Fashion Events",
    "Media Events",
    "Award Nights",
    "Private Gatherings",
    "Founder & Investor Events",
  ];

  return (
    <section className="relative overflow-hidden bg-white px-5 py-14 md:py-20">
      <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#6288B9]/12 blur-3xl" />
      <div className="absolute right-[-220px] bottom-[-160px] h-[500px] w-[500px] rounded-full bg-[#0D2444]/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1200px] text-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: [0.9, 1.04, 1] }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={badgeClass}
        >
          Industries We Serve
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-[950px] text-[38px] font-semibold leading-[1] tracking-[-0.055em] sm:text-[54px] md:text-[68px]"
          style={serifFont}
        >
          <span className="bg-gradient-to-r from-[#06172D] via-[#0D2444] to-[#6288B9] bg-clip-text text-transparent">
            Built For High-Pressure Rooms
          </span>
        </motion.h2>

        <div className="mx-auto mt-12 grid max-w-[1050px] gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-full border border-[#0D2444]/10 bg-gradient-to-r from-white via-[#F4F9FF] to-[#D9E8F7] px-5 py-4 shadow-[0_16px_45px_rgba(13,36,68,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6288B9]/60"
            >
              <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] transition-transform duration-500 group-hover:translate-x-0" />
              <p className="relative z-10 text-[14px] font-bold text-[#0D2444] transition-colors duration-300 group-hover:text-white">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


