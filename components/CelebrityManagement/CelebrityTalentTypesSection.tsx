"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function TalentTypesSection() {
  const talentTypes = [
    "Bollywood Actors",
    "Regional Film Actors",
    "OTT Actors",
    "Television Personalities",
    "Sports Personalities",
    "Influencers",
    "Content Creators",
    "Fashion Models",
    "Luxury Lifestyle Creators",
    "Motivational Speakers",
    "Business Leaders",
    "Industry Experts",
    "Celebrity Chefs",
    "Musicians & Singers",
    "Playback Singers",
    "Stand-Up Comedians",
    "Anchors & Hosts",
    "Reality Show Personalities",
    "Public Figures",
    "Digital Creators",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#F7FBFF] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(138,189,240,0.34),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(13,36,68,0.10),transparent_34%),linear-gradient(180deg,#F7FBFF_0%,#EAF6FF_100%)]" />

      {/* LARGE TEXT WATERMARK */}
      <div className="pointer-events-none absolute left-1/2 top-10 hidden -translate-x-1/2 select-none text-[120px] font-black uppercase leading-none tracking-[-0.08em] text-[#0D2444]/[0.035] lg:block">
        Talent
      </div>

      <div className="relative z-10 mx-auto max-w-[1250px]">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[900px] text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0D2444]/10 bg-white/80 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#0D2444] shadow-[0_14px_40px_rgba(13,36,68,0.07)] backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-[#6288B9]" />
            Talent Network
          </span>

          <h2
            className="mx-auto mt-6 max-w-[850px] text-[34px] font-semibold leading-[0.96] tracking-[-0.055em] text-[#0D2444] sm:text-[44px] md:text-[54px] lg:text-[64px]"
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            Types of Talent{" "}
            <span className="bg-gradient-to-r from-[#8ABDF0] via-[#315E91] to-[#0D2444] bg-clip-text text-transparent">
              We Manage
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[15px] font-medium leading-[1.85] text-slate-600 md:text-[17px]">
            From film celebrities and sports personalities to creators,
            speakers, performers and public figures, we help brands connect with
            the right talent for the right audience.
          </p>
        </motion.div>

        {/* TALENT CLOUD */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative mt-14 overflow-hidden rounded-[42px] border border-white/70 bg-white/55 px-5 py-8 shadow-[0_30px_100px_rgba(13,36,68,0.11)] backdrop-blur-2xl sm:px-8 sm:py-10 lg:px-10"
        >
          {/* INNER GLOW */}
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8ABDF0]/20 blur-3xl" />

          {/* TOP STRIP */}
          <div className="relative z-10 mb-8 flex flex-col gap-4 border-b border-[#0D2444]/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#6288B9]">
                Curated Talent Categories
              </p>
              <h3
                className="mt-2 text-[28px] font-semibold leading-[1] tracking-[-0.045em] text-[#0D2444] sm:text-[34px]"
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                Celebrities. Creators. Performers. Leaders.
              </h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D2444] text-white shadow-[0_16px_40px_rgba(13,36,68,0.22)]">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>

          {/* TAG WALL */}
          <div className="relative z-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            {talentTypes.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.025,
                  ease: "easeOut",
                }}
                className={`group inline-flex items-center gap-3 rounded-full border px-5 py-3 text-[12px] font-black uppercase tracking-[0.12em] shadow-[0_12px_35px_rgba(13,36,68,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(13,36,68,0.13)] ${
                  index % 5 === 0
                    ? "border-[#0D2444]/15 bg-[#0D2444] text-white hover:bg-[#173B66]"
                    : index % 3 === 0
                    ? "border-[#8ABDF0]/45 bg-[#EAF6FF] text-[#0D2444] hover:bg-white"
                    : "border-white/70 bg-white/75 text-[#173B66] hover:bg-[#0D2444] hover:text-white"
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-current opacity-45" />
                {item}
              </motion.div>
            ))}
          </div>

          {/* BOTTOM NOTE */}
          <div className="relative z-10 mt-9 border-t border-[#0D2444]/10 pt-6 text-center">
            <p className="mx-auto max-w-[760px] text-[13px] font-medium leading-[1.8] text-slate-600 md:text-[14px]">
              Every talent recommendation is filtered by audience relevance,
              event requirement, brand positioning, availability and campaign
              objective.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}