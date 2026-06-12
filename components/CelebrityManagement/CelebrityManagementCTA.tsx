"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CalendarCheck, Sparkles } from "lucide-react";

export default function CelebrityManagementCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6FBFF] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(138,189,240,0.35),transparent_34%),radial-gradient(circle_at_85%_80%,rgba(13,36,68,0.14),transparent_36%),linear-gradient(180deg,#F8FCFF_0%,#EAF6FF_100%)]" />

      {/* SOFT SHAPES */}
      <div className="absolute left-[-240px] top-[-220px] h-[560px] w-[560px] rounded-full bg-[#8ABDF0]/28 blur-3xl" />
      <div className="absolute bottom-[-280px] right-[-260px] h-[650px] w-[650px] rounded-full bg-[#0D2444]/12 blur-3xl" />

      {/* TEXTURE */}
      <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(13,36,68,0.18)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 mx-auto max-w-[1180px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[48px] bg-[#0D2444] px-6 py-12 text-center shadow-[0_34px_110px_rgba(13,36,68,0.26)] sm:px-10 md:py-16 lg:px-16"
        >
          {/* INNER GLOWS */}
          <div className="absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#8ABDF0]/25 blur-3xl" />
          <div className="absolute right-[-180px] bottom-[-180px] h-[460px] w-[460px] rounded-full bg-white/10 blur-3xl" />

          {/* TOP LINE */}
          <div className="absolute left-1/2 top-0 h-[5px] w-[240px] -translate-x-1/2 rounded-b-full bg-gradient-to-r from-[#8ABDF0] via-white to-[#8ABDF0]" />

          <div className="relative z-10 mx-auto max-w-[920px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-[#8ABDF0]" />
              Let’s Plan Your Celebrity Engagement
            </span>

            <h2
              className="mx-auto mt-7 max-w-[900px] text-[36px] font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:text-[48px] md:text-[58px] lg:text-[70px]"
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              Looking for{" "}
              <span className="text-[#8ABDF0]">
                Celebrity Management Services?
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-[850px] text-[15px] font-medium leading-[1.9] text-white/76 md:text-[17px]">
              Whether you need celebrity booking for a corporate event, brand
              ambassador campaign, hospitality activation, product launch,
              wedding celebration, private event or luxury experience, Double
              Trouble Studio can help manage the complete process from talent
              sourcing to successful execution.
            </p>

            <p className="mx-auto mt-5 max-w-[820px] text-[15px] font-medium leading-[1.9] text-white/68 md:text-[16px]">
              Our team supports brands, event planners, agencies, hospitality
              businesses and corporate organizations with professional celebrity
              management, influencer collaborations, public figure appearances
              and talent coordination across India.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-[12px] font-black uppercase tracking-[0.16em] text-[#0D2444] shadow-[0_18px_50px_rgba(255,255,255,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#EAF6FF]"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#consultation"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-[12px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/18"
              >
                <CalendarCheck className="h-4 w-4" />
                Schedule A Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}