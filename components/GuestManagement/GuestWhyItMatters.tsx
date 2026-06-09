"use client";

import { motion } from "framer-motion";

export default function WhyItMatters() {
  const points = [
    "Faster Entry",
    "Better Guest Experience",
    "Controlled Access",
    "VIP Coordination",
    "Real-Time Visibility",
    "Stress-Free Execution",
  ];

  return (
    <section
      className="relative w-full overflow-hidden px-5 py-16 md:py-24"
      style={{
        backgroundImage: "url('/guesthero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
     

      {/* Soft premium glows */}
      <div className="absolute left-[-160px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#6288B9]/25 blur-3xl" />
      <div className="absolute right-[-180px] bottom-[-170px] h-[460px] w-[460px] rounded-full bg-[#0D2444]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: [0.92, 1.04, 1] }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto max-w-[980px] text-center"
        >
          <span className="inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)] backdrop-blur-xl">
            Why It Matters
          </span>

          <h2
            className="mx-auto mt-6 max-w-[980px] text-[38px] font-semibold leading-[1] tracking-[-0.055em] text-[#0D2444] sm:text-[54px] md:text-[70px]"
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              textShadow: "0 8px 35px rgba(255,255,255,0.75)",
            }}
          >
            Why Guest Management Matters
          </h2>

          <p className="mx-auto mt-7 max-w-[850px] text-[15px] font-semibold leading-[1.85] text-[#203B5C] md:text-[18px]">
            A guest&apos;s experience begins long before they enter the venue.
            Poor coordination, delayed entry or unclear communication can affect
            the perception of the entire event.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-[1000px]"
        >
          <p className="text-center text-[12px] font-bold uppercase tracking-[0.24em] text-[#0D2444]/70">
            Professional Guest Management Ensures
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {points.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.28 + index * 0.07,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[24px] border border-[#0D2444]/10 bg-white/72 px-5 py-5 text-center shadow-[0_20px_60px_rgba(13,36,68,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6288B9]/50 hover:bg-white/90"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0D2444]/25 to-transparent" />

                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] text-[12px] font-bold text-white shadow-[0_10px_30px_rgba(13,36,68,0.25)]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-[15px] font-bold text-[#0D2444] md:text-[16px]">
                  {point}
                </h3>

                <div className="mx-auto mt-4 h-px w-12 bg-[#0D2444]/20 transition-all duration-300 group-hover:w-20 group-hover:bg-[#0D2444]/50" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}