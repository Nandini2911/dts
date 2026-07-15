"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";

const textLinkClass =
  "font-semibold text-white underline underline-offset-4 hover:text-[#B7D9FF]";

export default function CelebrityManagementHero() {
  return (
    <section
      className="relative flex min-h-[88vh] w-full items-center justify-center overflow-hidden bg-[#8ABDF0] bg-cover bg-center bg-no-repeat px-4 py-20 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/celebrity/celebrity4.jpg')",
      }}
    >
      {/* IMAGE OVERLAY */}
      <div className="absolute inset-0 bg-[#0D2444]/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#8ABDF0]/35 via-[#0D2444]/35 to-[#0D2444]/65" />

      {/* SOFT LIGHT EFFECT */}
      <div className="absolute left-[-220px] top-[-180px] h-[520px] w-[520px] rounded-full bg-white/20 blur-3xl" />
      <div className="absolute bottom-[-240px] right-[-180px] h-[560px] w-[560px] rounded-full bg-[#8ABDF0]/20 blur-3xl" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="relative z-10 mx-auto mt-12 max-w-[920px] text-center md:mt-16"
      >
        <span className="inline-flex rounded-full border border-white/45 bg-white/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_12px_35px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:px-5 sm:py-2.5">
          Celebrity Management
        </span>

        <h1
          className="mx-auto mt-6 max-w-[900px] bg-gradient-to-r from-white via-[#EAF6FF] to-[#B7D9FF] bg-clip-text text-[32px] font-semibold leading-[1.02] tracking-[-0.05em] text-transparent sm:text-[42px] md:text-[52px]"
          style={{
            fontFamily:
              'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
          }}
        >
         
            Celebrity Management Company in India
       {" "}
          for Brand Campaigns, Corporate Events & Luxury Experiences
        </h1>

        <p className="mx-auto mt-6 max-w-[780px] text-[14px] font-medium leading-[1.9] text-white/90 sm:text-[15px] md:text-[16px]">
          Connect your event,{" "}
          <Link
            href="https://www.dtsworld.in/services/pr-media-marketing"
            className={textLinkClass}
          >
            brand campaign
          </Link>{" "}
          or{" "}
          <Link
            href="https://www.dtsworld.in/services/events-weddings"
            className={textLinkClass}
          >
            corporate gathering
          </Link>{" "}
          with the right public personalities. From{" "}
          <Link
            href="https://www.dtsworld.in/blog/how-to-source-approach-celebrities-agencies-direct-contact"
            className={textLinkClass}
          >
            talent sourcing
          </Link>{" "}
          and negotiations to logistics,{" "}
          <Link
            href="https://www.dtsworld.in/blog/negotiating-celebrity-fees-riders-contracts"
            className={textLinkClass}
          >
            contracts
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.dtsworld.in/blog/managing-celebrity-appearances-logistics-security-coordination"
            className={textLinkClass}
          >
            on-ground coordination
          </Link>
          , our team manages the complete process for seamless celebrity
          appearances.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="https://www.dtsworld.in/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0D2444] shadow-[0_14px_35px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#EAF6FF]"
          >
            Discuss Your Requirement
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="https://www.dtsworld.in/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/15 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_14px_35px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/25"
          >
            <CalendarCheck className="h-3.5 w-3.5" />
            Book A Consultation
          </Link>
        </div>
      </motion.div>
    </section>
  );
}