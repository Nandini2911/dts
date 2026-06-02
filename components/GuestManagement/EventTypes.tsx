"use client";

import { motion } from "framer-motion";


const badgeClass =
  "inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)] backdrop-blur-xl";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

export function EventTypes() {
  const eventTypes = [
    "Wedding Guest Management",
    "Destination Wedding Guest Management",
    "Corporate Event Guest Management",
    "Celebrity Event Guest Management",
    "Brand Launch Guest Management",
    "Networking Event Guest Management",
    "Product Launch Guest Management",
    "Private Event Guest Management",
  ];

  return (
    <section className="relative overflow-hidden bg-[#F6FAFF] px-5 py-14 md:py-20">
      <div className="relative z-10 mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-[900px] text-center">
          <span className={badgeClass}>Event Types</span>

          <h2
            className="mx-auto mt-6 text-[38px] font-semibold leading-[1] tracking-[-0.055em] text-[#0D2444] sm:text-[54px] md:text-[68px]"
            style={serifFont}
          >
            Guest Management For{" "}
            <span className="bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              Every Event Format
            </span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {eventTypes.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group flex items-center justify-between rounded-full border border-[#0D2444]/10 bg-white/80 px-5 py-4 shadow-[0_14px_45px_rgba(13,36,68,0.07)] backdrop-blur-xl transition-all duration-300 hover:border-[#6288B9]/60 hover:bg-[#0D2444]"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F1F6FC] text-[12px] font-bold text-[#0D2444] group-hover:bg-white">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-[15px] font-bold text-[#0D2444] transition-colors duration-300 group-hover:text-white">
                  {item}
                </p>
              </div>

              <span className="text-[20px] text-[#6288B9] transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
