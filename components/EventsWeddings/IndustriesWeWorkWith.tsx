"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Hotel,
  HeartHandshake,
  Shirt,
  Landmark,
  Sparkles,
  Gem,
  ArrowUpRight,
} from "lucide-react";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

const industries = [
  {
    icon: Building2,
    title: "Corporate & Business",
    desc: "Corporate organizations, business groups, real estate companies, automotive brands, technology companies, retail brands and professional communities.",
  },
  {
    icon: Hotel,
    title: "Hospitality & Lifestyle",
    desc: "Hotels, restaurants, clubs, lounges, luxury venues, lifestyle brands, wellness brands and premium experience-led businesses.",
  },
  {
    icon: HeartHandshake,
    title: "Wedding & Social",
    desc: "Families, couples, wedding planners, private clients, luxury celebration hosts and destination wedding clients.",
  },
  {
    icon: Shirt,
    title: "Fashion & Entertainment",
    desc: "Designers, artists, performers, production houses, fashion labels, entertainment companies and lifestyle communities.",
  },
  {
    icon: Landmark,
    title: "Government & Institutional",
    desc: "Government bodies, associations, institutions, public organizations and formal event committees.",
  },
];

export default function IndustriesWeWorkWith() {
  return (
    <section className="relative overflow-hidden bg-[#F8FCFF] px-5 py-20 text-[#0D2444] md:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FCFF] via-[#EAF5FF] to-[#D7EBFA]" />

      <div className="absolute left-[-18%] top-[-24%] h-[700px] w-[700px] rounded-full bg-white/75 blur-3xl" />
      <div className="absolute right-[-20%] top-[12%] h-[780px] w-[780px] rounded-full bg-[#6288B9]/22 blur-3xl" />
      <div className="absolute bottom-[-30%] left-[18%] h-[660px] w-[660px] rounded-full bg-[#0D2444]/8 blur-3xl" />

      {/* ABSTRACT SHAPES */}
      <div className="absolute inset-0 overflow-hidden opacity-45">
        <div className="absolute left-[-160px] top-[8%] h-[650px] w-[360px] rotate-[-24deg] rounded-[50%] bg-gradient-to-b from-white/80 to-transparent blur-[2px]" />
        <div className="absolute left-[38%] top-[-190px] h-[780px] w-[330px] rotate-[18deg] rounded-[50%] bg-gradient-to-b from-[#7FA4CA]/24 to-transparent blur-[1px]" />
        <div className="absolute right-[-90px] bottom-[-120px] h-[660px] w-[520px] rotate-[31deg] rounded-[50%] bg-gradient-to-br from-[#0D2444]/12 to-transparent blur-[2px]" />
      </div>

      {/* GRID TEXTURE */}
      <div
        className="
          absolute inset-0 opacity-[0.025]
          [background-image:linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)]
          [background-size:52px_52px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#0D2444]/12 bg-white/50 px-6 py-3 shadow-[0_18px_55px_rgba(13,36,68,0.10)] backdrop-blur-xl">
            <Gem size={16} className="text-[#0D2444]" />
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#0D2444]">
              Industries We Work With
            </span>
          </div>

          <h2
            style={serifFont}
            className="text-[36px] font-bold leading-[1.08] tracking-[-0.045em] md:text-[56px] "
          >
            <span className="block bg-gradient-to-r from-[#071426] via-[#183A66] to-#B7CAE2] bg-clip-text text-transparent">
              Event Planning For Brands, Businesses,
            </span>
           
            <span className="block bg-gradient-to-r from-[#071426] via-[#183A66] to-[#6F8FB8] bg-clip-text text-transparent">
              Families & Institutions
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-[16px] font-medium leading-[1.9] text-[#40516A] md:text-[18px]">
            Double Trouble Studio works with corporate, hospitality, wedding,
            fashion, entertainment, government and institutional clients to
            plan premium events with structure, creativity and seamless
            execution.
          </p>
        </motion.div>

        {/* MAIN LAYOUT */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT PREMIUM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[38px] bg-gradient-to-br from-[#0D2444] via-[#16365F] to-[#5579A6] p-8 text-white shadow-[0_30px_90px_rgba(13,36,68,0.26)] md:p-10"
          >
            <div className="absolute right-[-130px] top-[-130px] h-[340px] w-[340px] rounded-full bg-white/12 blur-3xl" />
            <div className="absolute bottom-[-150px] left-[-120px] h-[360px] w-[360px] rounded-full bg-[#AFCBE5]/20 blur-3xl" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/14 backdrop-blur-xl">
                  <Sparkles size={30} />
                </div>

                <h3
                  style={serifFont}
                  className="text-[34px] font-bold leading-[1.1] tracking-[-0.04em] md:text-[44px]"
                >
                  Every industry needs a different event language.
                </h3>

                <p className="mt-6 text-[15.5px] leading-[1.9] text-white/78 md:text-[17px]">
                  A corporate summit requires structure. A wedding requires
                  emotion. A hospitality launch requires guest experience. Our
                  team adapts planning, production and execution according to
                  the industry, audience and occasion.
                </p>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {[
                  "Corporate Events",
                  "Luxury Weddings",
                  "Hospitality Launches",
                  "Institutional Events",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/16 bg-white/10 px-4 py-3 text-center text-[11px] font-black uppercase tracking-[0.16em] text-white/88 backdrop-blur-xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* INDUSTRY CARDS */}
          <div className="grid gap-5 md:grid-cols-2">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    ease: "easeOut",
                    delay: index * 0.05,
                  }}
                  className={`group relative overflow-hidden rounded-[30px] border border-[#0D2444]/8 bg-white/58 p-6 shadow-[0_22px_65px_rgba(13,36,68,0.10)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-[0_30px_85px_rgba(13,36,68,0.16)] ${
                    index === industries.length - 1 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="absolute right-[-90px] top-[-90px] h-[210px] w-[210px] rounded-full bg-[#6288B9]/18 blur-3xl transition-all duration-300 group-hover:bg-[#6288B9]/30" />

                  <div
                    style={serifFont}
                    className="absolute bottom-[-20px] right-5 text-[88px] font-bold leading-none text-[#0D2444]/5 transition-all duration-300 group-hover:text-[#0D2444]/8"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6 flex items-center justify-between gap-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0D2444] to-[#5579A6] text-white shadow-[0_16px_38px_rgba(13,36,68,0.25)] transition-transform duration-300 group-hover:scale-105">
                        <Icon size={23} />
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0D2444]/10 bg-white/55 text-[#0D2444] transition-all duration-300 group-hover:bg-[#0D2444] group-hover:text-white">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                    <h3 className="text-[18px] font-black leading-snug tracking-[-0.02em] text-[#0D2444]">
                      {industry.title}
                    </h3>

                    <p className="mt-4 text-[14.5px] leading-[1.85] text-[#52647C]">
                      {industry.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

       
      </div>
    </section>
  );
}