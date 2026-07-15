"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

export function IndustriesWeServe() {
  const industries = [
    {
      title: "Luxury Weddings",
      link: "https://www.dtsworld.in/services/events-weddings",
      x: "17%",
      y: "26%",
      size: "lg",
    },
    {
      title: "Celebrity Events",
      link: "https://www.dtsworld.in/services/celebrity-management",
      x: "50%",
      y: "13%",
      size: "xl",
    },
    {
      title: "Corporate Events",
      link: "https://www.dtsworld.in/services/events-weddings",
      x: "82%",
      y: "26%",
      size: "lg",
    },
    {
      title: "Brand Launches",
      link: "https://www.dtsworld.in/services/pr-media-marketing",
      x: "14%",
      y: "54%",
      size: "md",
    },
    {
      title: "Fashion Events",
      link: "https://www.dtsworld.in/services/events-weddings",
      x: "86%",
      y: "54%",
      size: "md",
    },
    {
      title: "Media Events",
      link: "https://www.dtsworld.in/services/pr-media-marketing",
      x: "24%",
      y: "80%",
      size: "md",
    },
    {
      title: "Award Nights",
      link: "https://www.dtsworld.in/services/events-weddings",
      x: "50%",
      y: "88%",
      size: "lg",
    },
    {
      title: "Private Gatherings",
      link: "https://www.dtsworld.in/services/events-weddings",
      x: "76%",
      y: "80%",
      size: "md",
    },
    {
      title: "Founder & Investor Events",
      link: "https://www.dtsworld.in/services/events-weddings",
      x: "50%",
      y: "52%",
      size: "center",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-12 md:py-16"
      style={{
        backgroundImage: "url('/abouthero.jpg')",
      }}
    >
      {/* Light background image overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/30 to-white/50" />

      {/* Premium glow effects */}
      <div className="absolute left-[-180px] top-[-140px] h-[420px] w-[420px] rounded-full bg-[#0D2444]/12 blur-3xl" />
      <div className="absolute right-[-200px] bottom-[-160px] h-[480px] w-[480px] rounded-full bg-[#6288B9]/16 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(13,36,68,0.07),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mx-auto max-w-[860px] text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="inline-flex rounded-full border border-[#0D2444]/15 bg-white/70 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.26em] text-[#0D2444] shadow-[0_14px_45px_rgba(13,36,68,0.10)] backdrop-blur-xl"
          >
            Industries We Serve
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-5 text-[36px] font-semibold leading-[0.96] tracking-[-0.06em] sm:text-[50px] md:text-[62px]"
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
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-[640px] text-[14px] font-medium leading-6 text-[#0D2444]/75 md:text-[16px]"
          >
            From private celebrations to brand-defining experiences, we execute
            moments where presence, precision and pressure meet.
          </motion.p>
        </div>

        {/* Desktop Compact Orbit UI */}
        <div className="relative mx-auto mt-10 hidden h-[430px] max-w-[1050px] lg:block">
          {/* Orbit rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.86 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0D2444]/12"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.82 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12 }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-1/2 h-[285px] w-[285px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6288B9]/35"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.78 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.24 }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-1/2 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0D2444]/16"
          />

          {/* Center glow */}
          <div className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6288B9]/16 blur-2xl" />

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
                  duration: 0.6,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                style={{ left: item.x, top: item.y }}
                className={`group absolute -translate-x-1/2 -translate-y-1/2 ${
                  isCenter ? "z-20" : "z-10"
                }`}
              >
                {isCenter ? (
                  <Link
                    href={item.link}
                    className="relative flex h-[150px] w-[150px] items-center justify-center rounded-full border border-[#0D2444]/15 bg-white/60 text-center shadow-[0_22px_70px_rgba(13,36,68,0.16)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-[#6288B9]/55 hover:bg-white/75"
                  >
                    <div className="absolute inset-2.5 rounded-full border border-[#6288B9]/35" />

                    <h3
                      className="relative z-10 max-w-[118px] bg-gradient-to-r from-[#06172D] via-[#0D2444] to-[#1F4B7A] bg-clip-text text-[20px] font-semibold leading-[0.95] tracking-[-0.055em] text-transparent"
                      style={serifFont}
                    >
                      {item.title}
                    </h3>
                  </Link>
                ) : (
                  <Link
                    href={item.link}
                    className="relative flex items-center gap-2.5"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#0D2444] shadow-[0_0_18px_rgba(13,36,68,0.45)] transition-all duration-500 group-hover:scale-[1.7] group-hover:bg-[#6288B9]" />

                    <h3
                      className={`whitespace-nowrap bg-gradient-to-r from-[#06172D] via-[#0D2444] to-[#6288B9] bg-clip-text font-semibold leading-none tracking-[-0.05em] text-transparent transition-all duration-500 group-hover:-translate-y-1 ${
                        item.size === "xl"
                          ? "text-[34px]"
                          : item.size === "lg"
                          ? "text-[29px]"
                          : "text-[24px]"
                      }`}
                      style={serifFont}
                    >
                      {item.title}
                    </h3>

                    <span className="absolute -bottom-2 left-5 h-px w-0 bg-gradient-to-r from-[#06172D] via-[#0D2444] to-[#6288B9] transition-all duration-500 group-hover:w-full" />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Compact UI */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-4 gap-y-4 lg:hidden">
          {industries.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Link href={item.link} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0D2444]" />

                <span
                  className="bg-gradient-to-r from-[#06172D] via-[#0D2444] to-[#6288B9] bg-clip-text text-[21px] font-semibold leading-none tracking-[-0.05em] text-transparent"
                  style={serifFont}
                >
                  {item.title}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}