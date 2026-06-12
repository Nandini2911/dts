"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

export default function EventWeddingHeroLuxury() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-[170px] text-[#0D2444] md:pt-[190px] lg:pt-[210px]">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/celebrity/celebrity2.jpg')",
        }}
      />

     
      {/* FINAL READABILITY OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/8 to-[#0D2444]/12" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center text-center">
        {/* BADGE - MOVED DOWN FROM NAVBAR */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#0D2444]/15 bg-white/40 px-7 py-4 shadow-[0_18px_55px_rgba(13,36,68,0.12)] backdrop-blur-xl"
        >
          <Sparkles size={16} className="text-[#0D2444]" />
          <span className="text-[12px] font-black uppercase tracking-[0.32em] text-[#0D2444]">
            Event & Wedding Management
          </span>
        </motion.div>

        {/* GRADIENT HEADING - SMALLER SIZE */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.08 }}
          style={serifFont}
          className="max-w-6xl text-[36px] font-bold leading-[1.08] tracking-[-0.045em] md:text-[56px] lg:text-[66px] xl:text-[72px]"
        >
          <span className="block bg-gradient-to-r from-[#071426] via-[#102B4F] to-[#5E7FAE] bg-clip-text text-transparent">
          Event Management   & Wedding Planning
          </span>
          
          <span className="block bg-gradient-to-r from-[#071426] via-[#183A66] to-[#6F8FB8] bg-clip-text text-transparent">
           Company in India
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.18 }}
          className="mt-8 max-w-5xl text-[16.5px] font-semibold leading-[1.9] text-white md:text-[19px]"
        >
          Double Trouble Studio provides end-to-end event management and wedding
          planning services for brands, businesses, families, hospitality groups
          and luxury experiences across India.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.25 }}
          className="mt-5 max-w-5xl text-[15px] font-medium leading-[1.9] text-white md:text-[17px]"
        >
          From corporate events, brand launches and celebrity-led experiences to
          destination weddings, private celebrations and large-scale social
          gatherings, our team manages planning, production, vendor coordination,
          guest experience, logistics and on-ground execution with professionalism
          and attention to detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.33 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0D2444] to-[#5579A6] px-8 py-4 text-[13px] font-black uppercase tracking-[0.18em] text-white shadow-[0_18px_55px_rgba(13,36,68,0.28)] transition-all duration-300 hover:-translate-y-1"
          >
            Plan Your Event
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/contact"
            className="inline-flex rounded-full border border-[#0D2444]/15 bg-white/40 px-8 py-4 text-[13px] font-black uppercase tracking-[0.18em] text-[#0D2444] shadow-[0_18px_55px_rgba(13,36,68,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/60"
          >
            Book A Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}