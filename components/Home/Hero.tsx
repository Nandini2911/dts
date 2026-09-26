"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play, Star } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "120+", label: "Brand Projects" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "8+", label: "Years Experience" },
];


export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#020817]"
      aria-labelledby="home-hero-heading"
    >
      <div
        className="absolute inset-0 scale-[1.02] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/abouthero.jpg')" }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/40 to-[#020817]/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/85 via-transparent to-[#020817]/20" />

      <div
        className="
          relative z-10 mx-auto w-full
          max-w-[1240px] 2xl:max-w-[1500px] min-[1800px]:max-w-[1650px]
          px-5 pt-[120px] pb-[65px]
          sm:px-6 sm:pt-[135px] sm:pb-[75px]
          md:px-8 md:pt-[145px] md:pb-[85px]
          lg:px-10 lg:pt-[155px] lg:pb-[90px]
          xl:px-6 xl:pt-[160px]
          2xl:px-10 2xl:pt-[175px] 2xl:pb-[110px]
        "
      >
        <div className="grid min-h-[calc(100vh-175px)] grid-cols-1 items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-[760px]"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/15 px-4 py-2 backdrop-blur-xl sm:px-5 sm:py-2.5">
              <span className="h-2 w-2 rounded-full bg-white/75" aria-hidden="true" />
              <span className="text-[10px] font-medium uppercase tracking-[2.4px] text-white/75">
                Full-Service Growth Agency in Mumbai
              </span>
            </div>

            <h1
              id="home-hero-heading"
              className="max-w-[850px] text-[40px] font-bold leading-[1.04] tracking-[-2.5px] text-white sm:text-[50px] md:text-[62px] md:tracking-[-3.5px] lg:text-[64px] xl:text-[72px] 2xl:text-[86px] 2xl:tracking-[-5px]"
              style={{ fontFamily: "New York, ui-serif, Georgia, serif" }}
            >
              We Scale Brands Through
              <span className="block bg-gradient-to-r from-white via-[#A8BEDB] to-[#6288B9] bg-clip-text text-transparent">
                Strategy, Creative &
              </span>
              Performance Marketing
            </h1>

            <p className="mt-6 max-w-[680px] text-[15px] leading-[29px] text-white/72 sm:text-[16px] sm:leading-[31px] md:text-[17px] 2xl:text-[19px] 2xl:leading-[36px]">
              Double Trouble Studio is a full-service digital marketing and
              branding agency in Mumbai. We help hospitality, luxury, restaurant
              and lifestyle brands generate more leads, build a stronger online
              presence and create premium brand experiences — all under one roof.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl">
                <div className="flex" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-white text-white" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-white">4.8/5 on Google</span>
              </div>
              <span className="text-sm text-white/55">Trusted by growing brands across India</span>
            </div>

            <div className="mt-8 flex flex-col flex-wrap gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group flex h-[54px] w-full items-center justify-center gap-3 rounded-full bg-white px-7 text-[14px] font-semibold text-[#0D2444] transition-all duration-300 hover:-translate-y-1 sm:w-auto 2xl:h-[60px] 2xl:px-9 2xl:text-[15px]"
                aria-label="Book a free consultation with Double Trouble Studio"
              >
                Book Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/work"
                className="flex h-[54px] w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 text-[14px] font-medium text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 sm:w-auto 2xl:h-[60px] 2xl:px-9 2xl:text-[15px]"
                aria-label="View Double Trouble Studio work"
              >
                View Work
                <Play className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-7 sm:mt-12 sm:gap-10 2xl:gap-14">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[25px] font-bold text-white sm:text-[28px] 2xl:text-[36px]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-white/50 2xl:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.08 }}
            className="relative mx-auto w-full max-w-[520px] lg:ml-auto"
            aria-label="Double Trouble Studio growth approach"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-[#071120]/55 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-8 2xl:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#6288B9]/20 blur-3xl" />

              <div className="relative z-10">
                <p className="text-[10px] font-medium uppercase tracking-[2.5px] text-white/50">
                  Strategy Meets Performance
                </p>
                <h2
                  className="mt-4 max-w-[420px] text-[34px] font-bold leading-[1.02] tracking-[-2px] text-white sm:text-[42px] 2xl:text-[50px]"
                  style={{ fontFamily: "New York, ui-serif, Georgia, serif" }}
                >
                  One Team.
                  <span className="block text-[#A8BEDB]">One Growth System.</span>
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-white/65">
                  We combine brand strategy, creative storytelling, digital
                  experiences and performance marketing so every touchpoint builds
                  visibility, trust and measurable business growth.
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    "Clear positioning before execution",
                    "Premium creative built for conversion",
                    "Integrated campaigns across channels",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#A8BEDB]" />
                      <span className="text-sm text-white/75">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="group mt-8 flex h-[52px] items-center justify-center gap-3 rounded-2xl bg-white text-sm font-semibold text-[#0D2444] transition-all duration-300 hover:-translate-y-1"
                >
                  Get a Free Strategy Call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 border-t border-white/10 pt-7"
        >
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[2.5px] text-white/40">
            Trusted by
          </p>
        
          
          
        </motion.div>
      </div>
    </section>
  );
}