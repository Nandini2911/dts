"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const linkClass =
  "font-semibold text-[#0D2444] underline underline-offset-4 hover:text-[#315E91]";

const cardLinkClass =
  "text-[15px] font-bold text-[#0D2444] underline underline-offset-4 transition-colors duration-300 hover:text-[#315E91] md:text-[16px]";

export default function WhyItMatters() {
  const points = [
    {
      title: "Faster Entry",
      href: "https://www.dtsworld.in/blog/on-site-guest-flow-registration-entry-seating-experience-mapping",
    },
    {
      title: "Better Guest Experience",
      href: "https://www.dtsworld.in/blog/how-to-design-seamless-guest-journey-luxury-events",
    },
    {
      title: "Controlled Access",
      href: "https://www.dtsworld.in/blog/contactless-check-in-systems-high-end-events",
    },
    {
      title: "VIP Coordination",
      href: "https://www.dtsworld.in/services/celebrity-management",
    },
    {
      title: "Real-Time Visibility",
      href: "https://www.dtsworld.in/blog/event-guest-analytics-behavior-engagement-satisfaction",
    },
    {
      title: "Stress-Free Execution",
      href: "https://www.dtsworld.in/services/events-weddings",
    },
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
            A{" "}
            <Link
              href="https://www.dtsworld.in/blog/how-to-design-seamless-guest-journey-luxury-events"
              className={linkClass}
            >
              guest experience
            </Link>{" "}
            begins long before they enter the venue. Poor coordination, delayed
            entry or unclear communication can affect the perception of the
            entire event.
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
            <Link
              href="https://www.dtsworld.in/services/guest-management"
              className={linkClass}
            >
              Professional Guest Management
            </Link>{" "}
            Ensures
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {points.map((point, index) => (
              <motion.div
                key={point.title}
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

                <h3>
                  <Link href={point.href} className={cardLinkClass}>
                    {point.title}
                  </Link>
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