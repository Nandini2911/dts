"use client";

import { motion } from "framer-motion";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

export function IndustriesWeServe() {
  const industries = [
    { title: "Luxury Weddings", x: "16%", y: "25%", size: "lg" },
    { title: "Celebrity Events", x: "48%", y: "13%", size: "xl" },
    { title: "Corporate Events", x: "80%", y: "25%", size: "lg" },
    { title: "Brand Launches", x: "10%", y: "52%", size: "md" },
    { title: "Fashion Events", x: "86%", y: "52%", size: "md" },
    { title: "Media Events", x: "20%", y: "78%", size: "md" },
    { title: "Award Nights", x: "50%", y: "88%", size: "lg" },
    { title: "Private Gatherings", x: "78%", y: "78%", size: "md" },
    {
      title: "Founder & Investor Events",
      x: "50%",
      y: "50%",
      size: "center",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-20 md:py-28"
      style={{
        backgroundImage: "url('/guesthero.jpg')",
      }}
    >
      

      
      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mx-auto max-w-[920px] text-center">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex rounded-full border border-[#0D2444]/15 bg-white/70 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#0D2444] shadow-[0_18px_60px_rgba(13,36,68,0.10)] backdrop-blur-xl"
          >
            Industries We Serve
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-7 text-[42px] font-semibold leading-[0.95] tracking-[-0.06em] sm:text-[58px] md:text-[78px]"
            style={serifFont}
          >
            <span className="bg-gradient-to-r from-[#06172D] via-[#0D2444] to-[#1F4B7A] bg-clip-text text-transparent">
              Designed For Every
            </span>{" "}
            <span className="bg-gradient-to-r from-[#0D2444] via-[#1F4B7A] to-[#6288B9] bg-clip-text text-transparent">
              High-Value Moment
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-[700px] text-[15px] font-medium leading-7 text-[#0D2444]/75 md:text-[17px]"
          >
            From private celebrations to brand-defining experiences, we execute
            moments where presence, precision and pressure meet.
          </motion.p>
        </div>

        {/* Desktop Orbit UI */}
        <div className="relative mx-auto mt-20 hidden h-[680px] max-w-[1100px] lg:block">
          {/* Orbit rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.86 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0D2444]/12"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.82 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.12 }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6288B9]/35"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.78 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.24 }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0D2444]/16"
          />

          {/* Center soft glow */}
          <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6288B9]/18 blur-2xl" />

          {/* Industry items */}
          {industries.map((item, index) => {
            const isCenter = item.size === "center";

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  scale: 0.75,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                style={{ left: item.x, top: item.y }}
                className={`group absolute -translate-x-1/2 -translate-y-1/2 cursor-default ${
                  isCenter ? "z-20" : "z-10"
                }`}
              >
                {isCenter ? (
                  <div className="relative flex h-[215px] w-[215px] items-center justify-center rounded-full border border-[#0D2444]/15 bg-white/55 text-center shadow-[0_28px_90px_rgba(13,36,68,0.18)] backdrop-blur-2xl">
                    <div className="absolute inset-3 rounded-full border border-[#6288B9]/35" />

                    <h3
                      className="relative z-10 max-w-[170px] bg-gradient-to-r from-[#06172D] via-[#0D2444] to-[#1F4B7A] bg-clip-text text-[29px] font-semibold leading-[0.95] tracking-[-0.055em] text-transparent"
                      style={serifFont}
                    >
                      {item.title}
                    </h3>
                  </div>
                ) : (
                  <div className="relative flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#0D2444] shadow-[0_0_22px_rgba(13,36,68,0.45)] transition-all duration-500 group-hover:scale-[1.8] group-hover:bg-[#6288B9]" />

                    <h3
                      className={`whitespace-nowrap bg-gradient-to-r from-[#06172D] via-[#0D2444] to-[#6288B9] bg-clip-text font-semibold leading-none tracking-[-0.05em] text-transparent transition-all duration-500 group-hover:-translate-y-1 ${
                        item.size === "xl"
                          ? "text-[46px]"
                          : item.size === "lg"
                          ? "text-[38px]"
                          : "text-[30px]"
                      }`}
                      style={serifFont}
                    >
                      {item.title}
                    </h3>

                    <span className="absolute -bottom-3 left-6 h-px w-0 bg-gradient-to-r from-[#06172D] via-[#0D2444] to-[#6288B9] transition-all duration-500 group-hover:w-full" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile UI */}
        <div className="mt-14 flex flex-wrap justify-center gap-x-5 gap-y-5 lg:hidden">
          {industries.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-[#0D2444]" />

              <span
                className="bg-gradient-to-r from-[#06172D] via-[#0D2444] to-[#6288B9] bg-clip-text text-[26px] font-semibold leading-none tracking-[-0.05em] text-transparent"
                style={serifFont}
              >
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}