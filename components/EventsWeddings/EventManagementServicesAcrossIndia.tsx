"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Building2,
  Hotel,
  Gem,
  Users,
  Sparkles,
  ArrowUpRight,
  Navigation,
  Compass,
} from "lucide-react";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

const cities = [
  { name: "Chandigarh", x: 22, y: 18 },
  { name: "Delhi NCR", x: 46, y: 12 },
  { name: "Mumbai", x: 72, y: 20 },
  { name: "Pune", x: 84, y: 38 },
  { name: "Bangalore", x: 68, y: 68 },
  { name: "Hyderabad", x: 46, y: 78 },
  { name: "Jaipur", x: 18, y: 42 },
  { name: "Udaipur", x: 31, y: 60 },
  { name: "Goa", x: 82, y: 78 },
  { name: "Ahmedabad", x: 12, y: 72 },
  { name: "Ludhiana", x: 34, y: 30 },
  { name: "Amritsar", x: 58, y: 27 },
  { name: "Kasauli", x: 76, y: 52 },
  { name: "Shimla", x: 55, y: 48 },
  { name: "Kolkata", x: 28, y: 86 },
  { name: "Chennai", x: 57, y: 90 },
];

const clientTypes = [
  {
    icon: Building2,
    title: "Corporate Clients",
    desc: "Business events, conferences, summits and award nights.",
  },
  {
    icon: Hotel,
    title: "Hospitality Brands",
    desc: "Hotel launches, restaurant openings and curated guest experiences.",
  },
  {
    icon: Gem,
    title: "Luxury Businesses",
    desc: "Premium previews, private experiences and lifestyle brand moments.",
  },
  {
    icon: Users,
    title: "Families & Organizations",
    desc: "Weddings, private celebrations and institutional gatherings.",
  },
];

export default function EventManagementServicesAcrossIndia() {
  return (
    <section className="relative overflow-hidden bg-[#FBFDFF] px-5 py-20 text-[#0D2444] md:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,#E4F2FF_0%,transparent_32%),radial-gradient(circle_at_88%_22%,#D8EAFB_0%,transparent_30%),linear-gradient(180deg,#FFFFFF_0%,#F7FBFF_46%,#EAF5FF_100%)]" />

      <div className="absolute left-[-260px] top-[-260px] h-[620px] w-[620px] rounded-full bg-white/80 blur-3xl" />
      <div className="absolute right-[-300px] bottom-[-300px] h-[740px] w-[740px] rounded-full bg-[#7FA4CA]/16 blur-3xl" />

      {/* SOFT MAP DOTS */}
      <div
        className="
          absolute inset-0 opacity-[0.13]
          [background-image:radial-gradient(#0D2444_1px,transparent_1px)]
          [background-size:28px_28px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto flex max-w-6xl flex-col items-center text-center"
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#0D2444]/10 bg-white/75 px-5 py-3 shadow-[0_16px_45px_rgba(13,36,68,0.08)] backdrop-blur-xl">
            <Navigation size={16} className="text-[#0D2444]" />
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#5579A6]">
              Event Management Services Across India
            </span>
          </div>

          <h2
            style={serifFont}
            className="mx-auto max-w-5xl text-[34px] font-bold leading-[1.08] tracking-[-0.045em] md:text-[50px] lg:text-[58px]"
          >
            <span className="block bg-gradient-to-r from-[#071426] via-[#183A66] to-[#5579A6] bg-clip-text text-transparent">
              Premium Event Planning
            </span>
            <span className="block bg-gradient-to-r from-[#244B7C] via-[#6F8FB8] to-[#B7CAE2] bg-clip-text text-transparent">
              Across India’s Leading
            </span>
            <span className="block bg-gradient-to-r from-[#071426] via-[#183A66] to-[#6F8FB8] bg-clip-text text-transparent">
              Cities & Destinations
            </span>
          </h2>

          <p className="mt-7 max-w-3xl text-[16px] font-medium leading-[1.9] text-[#4F627B] md:text-[18px]">
            Double Trouble Studio provides event management and wedding planning
            services across major cities and event destinations in India.
          </p>
        </motion.div>

        {/* INDIA NETWORK MAP */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mt-16 overflow-hidden rounded-[48px] border border-[#0D2444]/10 bg-white/62 p-6 shadow-[0_32px_100px_rgba(13,36,68,0.10)] backdrop-blur-2xl md:p-10"
        >
          {/* TOP BAR */}
          <div className="mb-8 flex flex-col gap-5 border-b border-[#0D2444]/10 pb-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#6F8FB8]">
                Nationwide Planning Network
              </p>

              <h3
                style={serifFont}
                className="mt-2 max-w-3xl text-[32px] font-bold leading-[1.08] tracking-[-0.045em] text-[#0D2444] md:text-[46px]"
              >
                One creative team connecting cities, venues, vendors and guests.
              </h3>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-[#0D2444]/10 bg-[#F7FBFF] px-5 py-3">
              <Compass size={17} className="text-[#244B7C]" />
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#5579A6]">
                India Coverage
              </span>
            </div>
          </div>

          {/* DESKTOP MAP */}
          <div className="relative hidden h-[560px] overflow-hidden rounded-[36px] border border-[#0D2444]/10 bg-[#F7FBFF]/70 lg:block">
            {/* MAP RINGS */}
            <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0D2444]/8" />
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0D2444]/10" />
            <div className="absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0D2444]/12" />

            <div className="absolute left-1/2 top-1/2 h-px w-[82%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#0D2444]/12 to-transparent" />
            <div className="absolute left-1/2 top-1/2 h-[82%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#0D2444]/12 to-transparent" />

            {/* CENTER HUB */}
            <div className="absolute left-1/2 top-1/2 z-20 flex h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#0D2444] via-[#16365F] to-[#5579A6] text-center text-white shadow-[0_28px_70px_rgba(13,36,68,0.25)]">
              <Sparkles size={22} />
              <p className="mt-3 text-[11px] font-black uppercase tracking-[0.24em]">
                DTS
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">
                Planning Hub
              </p>
            </div>

            {/* CITY NODES */}
            {cities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: index * 0.025,
                }}
                style={{ left: `${city.x}%`, top: `${city.y}%` }}
                className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="flex items-center gap-2 rounded-full border border-[#0D2444]/10 bg-white/85 px-4 py-2.5 shadow-[0_12px_35px_rgba(13,36,68,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#0D2444] hover:text-white hover:shadow-[0_18px_45px_rgba(13,36,68,0.16)]">
                  <span className="h-2 w-2 rounded-full bg-[#5579A6] transition-colors duration-300 group-hover:bg-white" />
                  <span className="whitespace-nowrap text-[11px] font-black uppercase tracking-[0.14em]">
                    {city.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* MOBILE CITY FLOW */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">
            {cities.map((city) => (
              <div
                key={city.name}
                className="rounded-full border border-[#0D2444]/10 bg-white/75 px-4 py-3 text-center text-[12px] font-black uppercase tracking-[0.14em] text-[#0D2444] shadow-[0_12px_30px_rgba(13,36,68,0.06)] backdrop-blur-xl"
              >
                {city.name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CLIENT TYPE STRIP */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {clientTypes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                className="group flex items-start gap-4 border-t border-[#0D2444]/12 pt-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0D2444] text-white shadow-[0_14px_36px_rgba(13,36,68,0.18)] transition-all duration-300 group-hover:scale-105">
                  <Icon size={20} />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-[13px] font-black uppercase tracking-[0.17em] text-[#0D2444]">
                      {item.title}
                    </h4>

                    <ArrowUpRight
                      size={15}
                      className="text-[#5579A6] transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>

                  <p className="mt-3 text-[14px] font-medium leading-[1.75] text-[#52647C]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM LINE */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto mt-14 max-w-5xl rounded-full border border-[#0D2444]/10 bg-white/70 px-6 py-5 text-center shadow-[0_18px_60px_rgba(13,36,68,0.08)] backdrop-blur-xl"
        >
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#5579A6] md:text-[13px]">
            Corporate Events • Brand Launches • Weddings • Hospitality Events • Luxury Experiences
          </p>
        </motion.div>
      </div>
    </section>
  );
}