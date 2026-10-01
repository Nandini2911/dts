"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Braces,
  FileText,
  Globe2,
  Megaphone,
  Search,
} from "lucide-react";

const serifFont =
  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif';

const advantages = [
  {
    number: "01",
    label: "SEO Strategy",
    title: "Search Decisions Built Around Business Priorities",
    text: "We connect SEO strategy to the services, locations, audiences and commercial opportunities that matter most to your business.",
    icon: Search,
    tone: "light",
  },
  {
    number: "02",
    label: "Website Development",
    title: "SEO and Website Structure Planned Together",
    text: "Technical requirements, page architecture, performance and landing pages can be planned together instead of being fixed after development.",
    icon: Braces,
    tone: "blue",
  },
  {
    number: "03",
    label: "Content Strategy",
    title: "Content Built Around Real Search Journeys",
    text: "Service pages, supporting content, FAQs and internal linking are developed around genuine search intent and business relevance.",
    icon: FileText,
    tone: "light",
  },
  {
    number: "04",
    label: "Digital PR",
    title: "Brand Visibility Supporting Digital Authority",
    text: "PR, credible mentions and wider digital visibility can strengthen authority when they support the wider search strategy.",
    icon: Megaphone,
    tone: "blue",
  },
  {
    number: "05",
    label: "Local + National",
    title: "Search Growth Structured Around Real Markets",
    text: "We can build visibility around Mumbai, Navi Mumbai and other genuine markets while keeping wider national search opportunities in view.",
    icon: Globe2,
    tone: "light",
  },
];

export default function SeoWhyDtsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-[120px] sm:py-[140px] lg:py-[160px]">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFE_55%,#EEF4F9_100%)]" />

        <div className="absolute left-[-220px] top-[25%] h-[520px] w-[520px] rounded-full bg-[#6288B9]/10 blur-[150px]" />

        <div className="absolute right-[-220px] bottom-[5%] h-[520px] w-[520px] rounded-full bg-[#456A9E]/8 blur-[150px]" />

        <div
          className="absolute right-[-20px] top-[60px] text-[110px] font-bold leading-none tracking-[-8px] text-[#0D2444]/[0.014] sm:text-[180px] lg:text-[250px]"
          style={{ fontFamily: serifFont }}
        >
          DTS
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-[100px]">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:pt-2"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#6288B9]" />

              <span className="text-[11px] font-semibold uppercase tracking-[3px] text-[#456A9E]">
                Why Double Trouble Studio
              </span>
            </div>

            <h2
              className="mt-7 max-w-[650px] text-[40px] font-bold leading-[1.05] tracking-[-2px] text-[#0D2444] md:text-[58px]"
              style={{ fontFamily: serifFont }}
            >
              SEO Is Stronger When
              <span className="text-[#6288B9]">
                {" "}
                Every Digital Layer Works Together.
              </span>
            </h2>

            <p className="mt-7 max-w-[570px] text-[16px] leading-[1.9] text-[#5B6472] sm:text-[18px]">
              Search growth is influenced by website quality, content depth,
              brand visibility and the wider digital strategy around the
              business.
            </p>

            <p className="mt-4 max-w-[570px] text-[15px] leading-[1.85] text-[#718094] sm:text-[16px]">
              Double Trouble Studio brings these disciplines together so SEO is
              easier to execute as one connected growth system.
            </p>

            {/* BRAND NOTE */}

            <div className="mt-10 border-l-[3px] border-[#6288B9] pl-6">
              <span className="text-[8px] font-semibold uppercase tracking-[2.5px] text-[#8B99A8]">
                The DTS Difference
              </span>

              <p
                className="mt-3 max-w-[500px] text-[24px] font-bold leading-[1.4] text-[#0D2444]"
                style={{ fontFamily: serifFont }}
              >
                Strategy is more useful when the teams executing it
                <span className="text-[#6288B9]">
                  {" "}
                  are working from the same direction.
                </span>
              </p>
            </div>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center justify-center gap-3 rounded-[14px] bg-[#0D2444] px-7 py-4 text-[13px] font-semibold text-white shadow-[0_14px_34px_rgba(13,36,68,0.18)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#17365F]"
            >
              Discuss Your SEO Strategy

              <ArrowUpRight className="h-[16px] w-[16px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* =====================================================
              RIGHT — STACKED BRAND BOARD
          ===================================================== */}

          <div className="space-y-4">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              const isBlue = item.tone === "blue";

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 22 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                  }}
                  className={
                    isBlue
                      ? "relative overflow-hidden rounded-[28px] bg-[#0D2444] px-7 py-7 sm:px-8 sm:py-8"
                      : "relative overflow-hidden rounded-[28px] border border-[#D6E0EA] bg-white px-7 py-7 shadow-[0_12px_32px_rgba(13,36,68,0.05)] sm:px-8 sm:py-8"
                  }
                >
                  {/* blue background accent */}

                  {isBlue && (
                    <>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_15%,rgba(98,136,185,0.32),transparent_30%),linear-gradient(135deg,#091A31_0%,#0D2444_60%,#173B66_100%)]" />

                      <div
                        className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px)] [background-size:60px_100%]"
                      />
                    </>
                  )}

                  {/* huge number */}

                  <div
                    className={
                      isBlue
                        ? "pointer-events-none absolute right-[18px] top-1/2 -translate-y-1/2 text-[100px] font-bold leading-none text-white/[0.035]"
                        : "pointer-events-none absolute right-[18px] top-1/2 -translate-y-1/2 text-[100px] font-bold leading-none text-[#0D2444]/[0.035]"
                    }
                    style={{ fontFamily: serifFont }}
                  >
                    {item.number}
                  </div>

                  <div className="relative z-10 grid gap-5 sm:grid-cols-[56px_1fr] sm:items-start">
                    {/* ICON */}

                    <div
                      className={
                        isBlue
                          ? "flex h-[50px] w-[50px] items-center justify-center rounded-[16px] border border-white/12 bg-white/[0.06] text-[#BCD0E7]"
                          : "flex h-[50px] w-[50px] items-center justify-center rounded-[16px] border border-[#D6E0EA] bg-[#F6F9FC] text-[#456A9E]"
                      }
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </div>

                    {/* CONTENT */}

                    <div className="pr-12">
                      <span
                        className={
                          isBlue
                            ? "text-[8px] font-semibold uppercase tracking-[2.5px] text-[#9EB8D6]"
                            : "text-[8px] font-semibold uppercase tracking-[2.5px] text-[#6288B9]"
                        }
                      >
                        {item.number} · {item.label}
                      </span>

                      <h3
                        className={
                          isBlue
                            ? "mt-3 text-[24px] font-bold leading-[1.2] text-white sm:text-[27px]"
                            : "mt-3 text-[24px] font-bold leading-[1.2] text-[#0D2444] sm:text-[27px]"
                        }
                        style={{ fontFamily: serifFont }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={
                          isBlue
                            ? "mt-4 max-w-[620px] text-[12px] leading-[1.85] text-white/48 sm:text-[13px]"
                            : "mt-4 max-w-[620px] text-[12px] leading-[1.85] text-[#687386] sm:text-[13px]"
                        }
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            SYSTEM EQUATION
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-y border-[#D6E0EA] py-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.28fr_0.72fr] lg:items-center">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#8B99A8]">
                One System
              </span>

              <p
                className="mt-3 text-[25px] font-bold leading-[1.3] text-[#0D2444]"
                style={{ fontFamily: serifFont }}
              >
                Connected growth.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-4">
              {[
                "SEO",
                "Website",
                "Content",
                "PR",
                "Markets",
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <span
                    className="text-[21px] font-bold text-[#0D2444] sm:text-[27px]"
                    style={{ fontFamily: serifFont }}
                  >
                    {item}
                  </span>

                  {index < 4 && (
                    <span className="text-[20px] text-[#A0AFBE]">+</span>
                  )}
                </div>
              ))}

              <ArrowUpRight className="mx-2 h-[18px] w-[18px] text-[#6288B9]" />

              <span
                className="text-[24px] font-bold text-[#6288B9] sm:text-[30px]"
                style={{ fontFamily: serifFont }}
              >
                Search Growth
              </span>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            FINAL BRAND STATEMENT
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-16 overflow-hidden rounded-[38px] bg-[#0D2444] px-7 py-10 shadow-[0_28px_80px_rgba(13,36,68,0.19)] sm:px-10 lg:px-14 lg:py-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_20%,rgba(98,136,185,0.34),transparent_30%),linear-gradient(135deg,#091A31_0%,#0D2444_56%,#173B66_100%)]" />

          <div
            className="pointer-events-none absolute bottom-[-40px] right-[20px] text-[125px] font-bold leading-none tracking-[-8px] text-white/[0.025] sm:text-[180px]"
            style={{ fontFamily: serifFont }}
          >
            DTS
          </div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#9EB8D6]">
                Integrated Digital Growth
              </span>

              <p
                className="mt-5 max-w-[920px] text-[31px] font-bold leading-[1.27] tracking-[-1px] text-white sm:text-[39px] lg:text-[44px]"
                style={{ fontFamily: serifFont }}
              >
                The difference is not having more services.
                <span className="text-[#BCD0E7]">
                  {" "}
                  It is making every service support the same growth objective.
                </span>
              </p>
            </div>

            <div className="border-l border-white/12 pl-6">
              <p className="text-[12px] leading-[1.9] text-white/48 sm:text-[13px]">
                SEO, website development, content and digital visibility become
                more useful when they are planned around one shared business
                direction.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}