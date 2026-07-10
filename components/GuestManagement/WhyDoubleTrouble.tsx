"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

const titleLinkClass =
  "underline underline-offset-4 transition-colors duration-300 hover:text-[#D9E8F7]";

const descLinkClass =
  "font-medium text-white underline underline-offset-4 transition-colors duration-300 hover:text-[#D9E8F7]";

export function WhyDoubleTroubleStudio() {
  const reasons = [
    {
      title: (
        <Link
          href="https://www.dtsworld.in/services/events-weddings"
          className={titleLinkClass}
        >
          Premium Event Experience
        </Link>
      ),
      titleText: "Premium Event Experience",
      desc: (
        <>
          Built for{" "}
          <Link
            href="https://www.dtsworld.in/services/events-weddings"
            className={descLinkClass}
          >
            luxury and high-visibility environments
          </Link>
          .
        </>
      ),
    },
    {
      title: (
        <Link href="https://www.dtsworld.in/about" className={titleLinkClass}>
          Strategy + Execution
        </Link>
      ),
      titleText: "Strategy + Execution",
      desc: (
        <>
          Planning and{" "}
          <Link
            href="https://www.dtsworld.in/services/guest-management"
            className={descLinkClass}
          >
            on-ground management
          </Link>{" "}
          under one roof.
        </>
      ),
    },
    {
      title: "Calm Under Pressure",
      titleText: "Calm Under Pressure",
      desc: (
        <>
          Experienced in handling{" "}
          <Link
            href="https://www.dtsworld.in/services/celebrity-management"
            className={descLinkClass}
          >
            VIPs
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/celebrity-management"
            className={descLinkClass}
          >
            celebrities
          </Link>{" "}
          and large audiences.
        </>
      ),
    },
    {
      title: (
        <Link
          href="https://www.dtsworld.in/blog/event-rsvp-management"
          className={titleLinkClass}
        >
          Structured Systems
        </Link>
      ),
      titleText: "Structured Systems",
      desc: (
        <>
          Documented workflows, escalation protocols and{" "}
          <Link
            href="https://www.dtsworld.in/blog/contactless-check-in-systems-high-end-events"
            className={descLinkClass}
          >
            access controls
          </Link>
          .
        </>
      ),
    },
    {
      title: (
        <Link
          href="https://www.dtsworld.in/blog/guest-data-privacy-luxury-events"
          className={titleLinkClass}
        >
          Complete Confidentiality
        </Link>
      ),
      titleText: "Complete Confidentiality",
      desc: "Professional handling of guest information and event operations.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden px-5 py-16 md:py-24"
      style={{
        background:
          "radial-gradient(circle at 12% 18%, rgba(210, 223, 238, 0.24), transparent 30%), radial-gradient(circle at 88% 78%, rgba(255, 255, 255, 0.38), transparent 34%), linear-gradient(135deg, #1d4880 0%, #6d8fba 38%, #173257 68%, #1e3453 100%)",
      }}
    >
      {/* Soft light wash */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.61),transparent_35%,rgba(191,215,242,0.31)_100%)]" />

      {/* Premium glow elements */}
      <div className="absolute left-[-180px] top-[-160px] h-[460px] w-[460px] rounded-full bg-[#BFD7F2]/20 blur-3xl" />
      <div className="absolute right-[-220px] bottom-[-180px] h-[540px] w-[540px] rounded-full bg-white/14 blur-3xl" />
      <div className="absolute right-[8%] top-[8%] h-[220px] w-[220px] rounded-full bg-[#6288B9]/18 blur-2xl" />

      {/* Light diagonal premium layer */}
      <div className="absolute right-[-120px] top-[-80px] h-[120%] w-[42%] rotate-[-10deg] bg-gradient-to-b from-white/18 via-[#BFD7F2]/10 to-transparent blur-xl" />

      <div className="relative z-10 mx-auto max-w-[1250px]">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex rounded-full border border-white/18 bg-white/12 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              Why Double Trouble Studio
            </span>

            <h2
              className="mt-7 max-w-[690px] text-[40px] font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-[56px]"
              style={serifFont}
            >
              We Don&apos;t Run Guest Lists.{" "}
              <span className="bg-gradient-to-r from-white via-[#D9E8F7] to-[#8FB7E8] bg-clip-text text-transparent">
                We Run Rooms.
              </span>
            </h2>

            <p className="mt-6 max-w-[560px] text-[15px] font-medium leading-[1.8] text-white/72 md:text-[17px]">
              From the first confirmation to the final guest movement, we bring
              structure, calm and control to rooms where perception matters.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {reasons.map((item, index) => (
              <motion.div
                key={item.titleText}
                initial={{ opacity: 0, x: 34 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[26px] border border-white/14 bg-gradient-to-r from-white/15 via-white/9 to-[#BFD7F2]/10 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/16"
              >
                <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.12),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-white via-[#D9E8F7] to-[#6288B9]" />

                <div className="relative z-10 flex gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-white to-[#D9E8F7] text-[12px] font-bold text-[#0D2444] shadow-[0_10px_30px_rgba(255,255,255,0.16)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3
                      className="text-[24px] font-semibold leading-[1.1] tracking-[-0.04em] text-white"
                      style={serifFont}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[14px] font-medium leading-[1.65] text-white/68 md:text-[15px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}