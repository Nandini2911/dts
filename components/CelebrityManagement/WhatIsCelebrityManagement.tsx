"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BadgeCheck,
  CalendarCheck,
  Handshake,
  Plane,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const whiteLinkClass =
  "font-medium text-white underline underline-offset-4 transition-colors duration-300 hover:text-[#B7D9FF]";

const textLinkClass =
  "font-medium text-[#0D2444] underline underline-offset-4 transition-colors duration-300 hover:text-[#315E91]";

export default function WhatIsCelebrityManagement() {
  const processItems = [
    {
      icon: BadgeCheck,
      title: "Talent Shortlisting",
    },
    {
      icon: CalendarCheck,
      title: "Availability Checks",
    },
    {
      icon: Handshake,
      title: "Fee Negotiation",
    },
    {
      icon: ShieldCheck,
      title: "Contracts & Usage Rights",
    },
    {
      icon: Plane,
      title: "Travel & Hospitality",
    },
    {
      icon: Sparkles,
      title: "On-Ground Execution",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#F8FBFF] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FBFF] via-white to-[#EAF6FF]" />
      <div className="absolute left-[-220px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#8ABDF0]/25 blur-3xl" />
      <div className="absolute bottom-[-260px] right-[-220px] h-[560px] w-[560px] rounded-full bg-[#0D2444]/10 blur-3xl" />

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D244406_1px,transparent_1px),linear-gradient(to_bottom,#0D244406_1px,transparent_1px)] bg-[size:54px_54px]" />

      <div className="relative z-10 mx-auto max-w-[1250px]">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[900px] text-center"
        >
          <span className="inline-flex rounded-full border border-[#0D2444]/10 bg-white/85 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#0D2444] shadow-[0_14px_40px_rgba(13,36,68,0.07)] backdrop-blur-xl">
            What It Means
          </span>

          <h2
            className="mx-auto mt-6 max-w-[850px] text-[34px] font-semibold leading-[0.96] tracking-[-0.055em] text-[#0D2444] sm:text-[44px] md:text-[54px] lg:text-[64px]"
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            What Is{" "}
            <span className="bg-gradient-to-r from-[#6288B9] via-[#315E91] to-[#0D2444] bg-clip-text text-transparent">
              Celebrity Management?
            </span>
          </h2>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          {/* LEFT DEFINITION BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[36px] bg-[#0D2444] p-7 shadow-[0_28px_90px_rgba(13,36,68,0.2)] sm:p-9 lg:p-10"
          >
            <div className="absolute right-[-140px] top-[-140px] h-[340px] w-[340px] rounded-full bg-[#8ABDF0]/25 blur-3xl" />
            <div className="absolute bottom-[-160px] left-[-120px] h-[320px] w-[320px] rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#0D2444]">
                <Sparkles className="h-6 w-6" />
              </div>

              <p className="text-[17px] font-medium leading-[1.95] text-white/88 md:text-[19px]">
                <Link
                  href="https://www.dtsworld.in/blog/celebrity-management-in-india-guide"
                  className={whiteLinkClass}
                >
                  Celebrity management
                </Link>{" "}
                is the end-to-end process of identifying, booking and
                coordinating celebrities or public personalities for{" "}
                <Link
                  href="https://www.dtsworld.in/services/events-weddings"
                  className={whiteLinkClass}
                >
                  events
                </Link>
                ,{" "}
                <Link
                  href="https://www.dtsworld.in/services/pr-media-marketing"
                  className={whiteLinkClass}
                >
                  brand campaigns
                </Link>
                ,{" "}
                <Link
                  href="https://www.dtsworld.in/blog/celebrity-endorsement-vs-event-appearance-roi"
                  className={whiteLinkClass}
                >
                  endorsements
                </Link>
                ,{" "}
                <Link
                  href="https://www.dtsworld.in/services/events-weddings"
                  className={whiteLinkClass}
                >
                  corporate functions
                </Link>
                ,{" "}
                <Link
                  href="https://www.dtsworld.in/services/pr-media-marketing"
                  className={whiteLinkClass}
                >
                  hospitality launches
                </Link>
                , luxury experiences and promotional appearances.
              </p>
            </div>
          </motion.div>

          {/* RIGHT EXPLANATION */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
            className="rounded-[36px] border border-[#DCE6F2] bg-white/88 p-7 shadow-[0_22px_70px_rgba(13,36,68,0.08)] backdrop-blur-xl sm:p-9 lg:p-10"
          >
            <p className="text-[15px] font-medium leading-[1.95] text-slate-600 md:text-[17px]">
              It includes talent shortlisting, availability checks,{" "}
              <Link
                href="https://www.dtsworld.in/blog/negotiating-celebrity-fees-riders-contracts"
                className={textLinkClass}
              >
                fee negotiation
              </Link>
              ,{" "}
              <Link
                href="https://www.dtsworld.in/blog/negotiating-celebrity-fees-riders-contracts"
                className={textLinkClass}
              >
                contracts
              </Link>
              ,{" "}
              <Link
                href="https://www.dtsworld.in/blog/negotiating-celebrity-fees-riders-contracts"
                className={textLinkClass}
              >
                usage rights
              </Link>
              , scheduling, travel planning, hospitality coordination, backstage
              management,{" "}
              <Link
                href="https://www.dtsworld.in/services/pr-media-marketing"
                className={textLinkClass}
              >
                media interaction
              </Link>{" "}
              and on-ground execution.
            </p>

            <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-[#0D2444]/15 to-transparent" />

            <p className="text-[15px] font-medium leading-[1.95] text-slate-600 md:text-[17px]">
              Businesses often work with celebrity management companies to
              simplify communication, reduce operational challenges and ensure
              that collaborations between brands and talent are handled
              professionally.
            </p>
          </motion.div>
        </div>

        {/* PROCESS ITEMS */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6"
        >
          {processItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-[24px] border border-[#DCE6F2] bg-white/85 p-5 text-center shadow-[0_14px_40px_rgba(13,36,68,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#8ABDF0] hover:shadow-[0_24px_65px_rgba(13,36,68,0.12)]"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#F0F7FF] text-[#0D2444] transition-all duration-300 group-hover:bg-[#0D2444] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="mt-4 text-[12px] font-black uppercase leading-[1.45] tracking-[0.12em] text-[#173B66]">
                  {item.title}
                </p>

                <span className="mt-4 block text-[11px] font-black text-[#8ABDF0]">
                  0{index + 1}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}