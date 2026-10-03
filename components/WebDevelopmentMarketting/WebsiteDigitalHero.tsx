"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MonitorSmartphone,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

const serifFont =
  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif';

const services = [
  "Custom Website Development",
  "Responsive UI/UX",
  "Website Management",
  "Maintenance & Support",
];

export default function WebsiteDigitalHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FAFD_58%,#EEF4F9_100%)]" />

        {/* Smaller Animated Grid Lines */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "38px 38px"] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            inset-0
            opacity-[0.08]
            bg-[linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)]
            bg-[size:38px_38px]
          "
        />

        {/* Soft Glow */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            x: [0, 24, 0],
            y: [0, 16, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-180px] top-[-100px] h-[440px] w-[440px] rounded-full bg-[#6288B9]/18 blur-[130px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-200px] bottom-[-120px] h-[480px] w-[480px] rounded-full bg-[#0D2444]/12 blur-[140px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 pb-[70px] pt-[120px] sm:px-6 md:px-8 lg:px-10 lg:pb-[90px] lg:pt-[135px]">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[1050px] text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-[#6288B9]" />

            <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#456A9E]">
              Website Development & Management
            </span>

            <div className="h-px w-10 bg-[#6288B9]" />
          </div>

          <h1
            className="
              mt-6
              text-[40px]
              font-bold
              leading-[1.03]
              tracking-[-2px]
              text-[#0D2444]
              sm:text-[48px]
              md:text-[56px]
              lg:text-[62px]
            "
            style={{ fontFamily: serifFont }}
          >
            Websites That Look Premium,
            <span className="text-[#6288B9]">
              {" "}
              Feel Effortless and Stay Reliable.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-[760px] text-[15px] leading-[1.85] text-[#5B6472] sm:text-[17px]">
            Double Trouble Studio designs, develops and manages modern websites
            for businesses that need a strong digital presence, smooth user
            experience and dependable long-term support.
          </p>

          <p className="mx-auto mt-3 max-w-[700px] text-[13px] leading-[1.8] text-[#718094] sm:text-[14px]">
            From custom website builds and landing pages to responsive design,
            updates, maintenance and technical management, we handle the full
            website lifecycle.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-[13px]
                bg-[#0D2444]
                px-6
                py-[14px]
                text-[13px]
                font-semibold
                text-white
                shadow-[0_14px_30px_rgba(13,36,68,0.18)]
                transition-all
                duration-300
                hover:-translate-y-[2px]
                hover:bg-[#17365F]
              "
            >
              Start Your Website

              <ArrowUpRight className="h-[15px] w-[15px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/work"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-[13px]
                border
                border-[#CAD6E2]
                bg-white
                px-6
                py-[14px]
                text-[13px]
                font-semibold
                text-[#0D2444]
                transition-all
                duration-300
                hover:-translate-y-[2px]
                hover:border-[#AFC1D3]
              "
            >
              View Our Work

              <ArrowRight className="h-[14px] w-[14px] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* =========================================================
            WEBSITE SHOWCASE
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.14 }}
          className="relative mx-auto mt-12 max-w-[1080px]"
        >
          <div className="absolute -inset-[18px] rounded-[36px] bg-gradient-to-br from-[#6288B9]/10 via-white/50 to-[#0D2444]/6" />

          <div className="relative min-h-[390px] sm:min-h-[450px]">
            {/* LEFT SMALL FRAME */}
            <div
              className="
                absolute
                left-[10px]
                top-[76px]
                hidden
                w-[28%]
                rotate-[-3deg]
                overflow-hidden
                rounded-[20px]
                border
                border-[#D8E2EB]
                bg-white
                shadow-[0_22px_50px_rgba(13,36,68,0.11)]
                md:block
              "
            >
              <div className="border-b border-[#E6EDF3] bg-[#F8FAFC] px-3 py-2.5">
                <div className="flex gap-1.5">
                  <span className="h-[6px] w-[6px] rounded-full bg-[#CBD5DF]" />
                  <span className="h-[6px] w-[6px] rounded-full bg-[#CBD5DF]" />
                  <span className="h-[6px] w-[6px] rounded-full bg-[#CBD5DF]" />
                </div>
              </div>

              <div className="bg-[#F4F8FC] p-4">
                <div className="flex items-center justify-between">
                  <div
                    className="text-[13px] font-bold text-[#0D2444]"
                    style={{ fontFamily: serifFont }}
                  >
                    Atelier.
                  </div>

                  <div className="h-[20px] w-[54px] rounded-full bg-[#0D2444]" />
                </div>

                <div className="mt-6">
                  <div className="h-[12px] w-[90%] rounded-[4px] bg-[#0D2444]" />
                  <div className="mt-2 h-[12px] w-[68%] rounded-[4px] bg-[#0D2444]" />

                  <div className="mt-4 h-[4px] w-[88%] rounded-full bg-[#BEC9D4]" />
                  <div className="mt-2 h-[4px] w-[72%] rounded-full bg-[#D0D9E1]" />

                  <div className="mt-5 h-[105px] rounded-[15px] bg-gradient-to-br from-[#0D2444] via-[#315E91] to-[#8FA8C2]" />
                </div>
              </div>
            </div>

            {/* CENTER MAIN WEBSITE */}
            <div
              className="
                relative
                z-20
                mx-auto
                w-full
                max-w-[690px]
                overflow-hidden
                rounded-[28px]
                border
                border-[#D5E0EA]
                bg-white
                shadow-[0_32px_80px_rgba(13,36,68,0.15)]
              "
            >
              <div className="flex items-center justify-between border-b border-[#E5ECF2] bg-[#F8FAFC] px-4 py-3">
                <div className="flex gap-2">
                  <span className="h-[7px] w-[7px] rounded-full bg-[#CBD5DF]" />
                  <span className="h-[7px] w-[7px] rounded-full bg-[#CBD5DF]" />
                  <span className="h-[7px] w-[7px] rounded-full bg-[#CBD5DF]" />
                </div>

                <div className="h-[23px] w-[46%] rounded-full border border-[#E0E7EE] bg-white" />

                <div className="h-[22px] w-[22px] rounded-full border border-[#E0E7EE] bg-white" />
              </div>

              <div className="relative overflow-hidden bg-[#F4F8FC] p-5 sm:p-6">
                <div className="absolute right-[-60px] top-[-60px] h-[220px] w-[220px] rounded-full bg-[#6288B9]/16 blur-[65px]" />

                <div className="relative z-10 flex items-center justify-between">
                  <div
                    className="text-[17px] font-bold text-[#0D2444]"
                    style={{ fontFamily: serifFont }}
                  >
                    Studio.
                  </div>

                  <div className="hidden items-center gap-4 sm:flex">
                    <span className="h-[4px] w-[28px] rounded-full bg-[#AAB7C4]" />
                    <span className="h-[4px] w-[28px] rounded-full bg-[#AAB7C4]" />
                    <span className="h-[4px] w-[28px] rounded-full bg-[#AAB7C4]" />

                    <div className="h-[25px] w-[66px] rounded-full bg-[#0D2444]" />
                  </div>
                </div>

                <div className="relative z-10 mt-8 grid gap-6 sm:grid-cols-[1fr_0.9fr] sm:items-center">
                  <div>
                    <div className="h-[5px] w-[78px] rounded-full bg-[#6288B9]" />

                    <div className="mt-4 h-[16px] w-[92%] rounded-[5px] bg-[#0D2444]" />
                    <div className="mt-3 h-[16px] w-[72%] rounded-[5px] bg-[#0D2444]" />

                    <div className="mt-5 space-y-2">
                      <div className="h-[4px] w-[90%] rounded-full bg-[#BDC9D4]" />
                      <div className="h-[4px] w-[82%] rounded-full bg-[#CAD4DD]" />
                      <div className="h-[4px] w-[65%] rounded-full bg-[#D3DBE3]" />
                    </div>

                    <div className="mt-6 flex gap-3">
                      <div className="h-[29px] w-[96px] rounded-[8px] bg-[#0D2444]" />
                      <div className="h-[29px] w-[80px] rounded-[8px] border border-[#D1DBE4] bg-white" />
                    </div>
                  </div>

                  <div className="aspect-[4/5] rounded-[20px] bg-gradient-to-br from-[#0D2444] via-[#315E91] to-[#8EA9C5] p-4">
                    <div className="flex h-full flex-col justify-between">
                      <div className="ml-auto flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white/20 bg-white/10">
                        <MonitorSmartphone className="h-[14px] w-[14px] text-white/80" />
                      </div>

                      <div>
                        <div className="h-[4px] w-[52%] rounded-full bg-white/50" />
                        <div className="mt-3 h-[11px] w-[86%] rounded-[4px] bg-white" />
                        <div className="mt-2 h-[11px] w-[64%] rounded-[4px] bg-white/80" />
                        <div className="mt-4 h-[26px] w-[78px] rounded-full bg-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SMALL FRAME */}
            <div
              className="
                absolute
                right-[10px]
                top-[96px]
                hidden
                w-[26%]
                rotate-[3deg]
                overflow-hidden
                rounded-[20px]
                border
                border-[#D8E2EB]
                bg-white
                shadow-[0_22px_50px_rgba(13,36,68,0.11)]
                lg:block
              "
            >
              <div className="border-b border-[#E6EDF3] bg-[#F8FAFC] px-3 py-2.5">
                <div className="flex gap-1.5">
                  <span className="h-[6px] w-[6px] rounded-full bg-[#CBD5DF]" />
                  <span className="h-[6px] w-[6px] rounded-full bg-[#CBD5DF]" />
                  <span className="h-[6px] w-[6px] rounded-full bg-[#CBD5DF]" />
                </div>
              </div>

              <div className="bg-[#F5F9FC] p-4">
                <div className="flex items-center justify-between">
                  <div
                    className="text-[13px] font-bold text-[#0D2444]"
                    style={{ fontFamily: serifFont }}
                  >
                    Nova.
                  </div>

                  <div className="h-[20px] w-[54px] rounded-full bg-[#0D2444]" />
                </div>

                <div className="mt-6 h-[92px] rounded-[15px] bg-gradient-to-br from-[#315E91] to-[#91ABC6]" />

                <div className="mt-5 h-[11px] w-[82%] rounded-[4px] bg-[#0D2444]" />
                <div className="mt-2 h-[11px] w-[58%] rounded-[4px] bg-[#0D2444]" />

                <div className="mt-4 h-[4px] w-[92%] rounded-full bg-[#C3CDD7]" />
                <div className="mt-2 h-[4px] w-[70%] rounded-full bg-[#D3DBE2]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            SERVICE RAIL
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-10 grid border-y border-[#D5E0EA] sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((item, index) => (
            <div
              key={item}
              className={`
                flex
                items-center
                gap-3
                py-4
                sm:px-5

                ${
                  index !== 0
                    ? "border-t border-[#D5E0EA] sm:border-l sm:border-t-0"
                    : ""
                }
              `}
            >
              <div className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-[#EAF1F7]">
                <Check className="h-[10px] w-[10px] text-[#456A9E]" />
              </div>

              <span className="text-[11px] font-semibold text-[#596879]">
                {item}
              </span>
            </div>
          ))}
        </motion.div>

        {/* =========================================================
            MANAGEMENT NOTE
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.34 }}
          className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[11px] bg-[#EDF3F8] text-[#456A9E]">
              <RefreshCw className="h-[14px] w-[14px]" />
            </div>

            <div>
              <span className="block text-[8px] font-semibold uppercase tracking-[2px] text-[#8B99A8]">
                Website Management
              </span>

              <span className="mt-1 block text-[11px] font-bold text-[#0D2444]">
                Updates, Maintenance & Ongoing Support
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="h-[14px] w-[14px] text-[#6288B9]" />

            <span
              className="text-[15px] font-bold text-[#0D2444]"
              style={{ fontFamily: serifFont }}
            >
              Built to stay useful after launch.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}