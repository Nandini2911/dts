"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Sparkles, MessageCircle } from "lucide-react";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

export default function EventWeddingFinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#061A31] px-5 py-20 text-white md:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#061A31] via-[#0D2444] to-[#5579A6]" />

      <div className="absolute left-[-18%] top-[-30%] h-[700px] w-[700px] rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-[-18%] bottom-[-30%] h-[760px] w-[760px] rounded-full bg-[#AFCBE5]/20 blur-3xl" />
      <div className="absolute left-[30%] bottom-[-35%] h-[620px] w-[620px] rounded-full bg-[#6288B9]/20 blur-3xl" />

      {/* ABSTRACT WAVES */}
      <div className="absolute inset-0 overflow-hidden opacity-45">
        <div className="absolute left-[-160px] top-[-60px] h-[650px] w-[360px] rotate-[-24deg] rounded-[50%] bg-gradient-to-b from-white/20 to-transparent blur-[2px]" />
        <div className="absolute left-[38%] top-[-200px] h-[780px] w-[330px] rotate-[18deg] rounded-[50%] bg-gradient-to-b from-[#D7EBFA]/18 to-transparent blur-[1px]" />
        <div className="absolute right-[-120px] bottom-[-140px] h-[680px] w-[540px] rotate-[31deg] rounded-[50%] bg-gradient-to-br from-white/12 to-transparent blur-[2px]" />
      </div>

      {/* GRID */}
      <div
        className="
          absolute inset-0 opacity-[0.035]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:52px_52px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[42px] border border-white/14 bg-white/10 px-6 py-14 text-center shadow-[0_35px_110px_rgba(0,0,0,0.30)] backdrop-blur-2xl md:px-12 md:py-20"
        >
          <div className="absolute right-[-140px] top-[-140px] h-[360px] w-[360px] rounded-full bg-white/12 blur-3xl" />
          <div className="absolute bottom-[-160px] left-[-140px] h-[390px] w-[390px] rounded-full bg-[#AFCBE5]/16 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/10 px-6 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl">
              <Sparkles size={16} className="text-[#D7EBFA]" />
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-white/86">
                Looking For Event & Wedding Management Services?
              </span>
            </div>

            <h2
              style={serifFont}
              className="text-[36px] font-bold leading-[1.08] tracking-[-0.045em] md:text-[56px] lg:text-[68px]"
            >
              Let’s Plan Your Next
              <span className="block bg-gradient-to-r from-white via-[#D7EBFA] to-[#8FB0CF] bg-clip-text text-transparent">
                Premium Event Experience
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-[16px] font-medium leading-[1.9] text-white/78 md:text-[18px]">
              Whether you are planning a corporate event, destination wedding,
              luxury celebration, hospitality launch, brand activation, fashion
              show, private party or entertainment experience, Double Trouble
              Studio can manage the complete process from planning to execution.
            </p>

            <p className="mx-auto mt-5 max-w-4xl text-[15.5px] leading-[1.9] text-white/66 md:text-[17px]">
              Our team supports brands, businesses, families, hospitality groups
              and event partners with professional event management and wedding
              planning services across India.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[13px] font-black uppercase tracking-[0.18em] text-[#0D2444] shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(0,0,0,0.34)]"
              >
                <CalendarCheck size={18} />
                Start Planning Your Event
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/22 bg-white/10 px-8 py-4 text-[13px] font-black uppercase tracking-[0.18em] text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/16"
              >
                <MessageCircle size={18} />
                Schedule A Consultation
              </Link>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
              {[
                "Corporate Events",
                "Destination Weddings",
                "Luxury Celebrations",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/14 bg-white/8 px-4 py-3 text-center text-[11px] font-black uppercase tracking-[0.16em] text-white/75 backdrop-blur-xl"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}