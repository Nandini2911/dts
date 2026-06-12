"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Megaphone,
  Heart,
  PartyPopper,
  Hotel,
  Shirt,
  Music2,
  Landmark,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

const events = [
  {
    icon: Briefcase,
    title: "Corporate Events",
    desc: "Professional event planning for conferences, summits, annual days, award nights, dealer meets, networking events and leadership gatherings.",
  },
  {
    icon: Megaphone,
    title: "Brand Events",
    desc: "Launches, activations, influencer events, media events, product showcases, pop-ups, store openings and promotional experiences.",
  },
  {
    icon: Heart,
    title: "Weddings",
    desc: "Complete planning and execution for weddings, destination weddings, luxury weddings and family celebrations.",
  },
  {
    icon: PartyPopper,
    title: "Social Events",
    desc: "Birthdays, anniversaries, private dinners, festive celebrations, family gatherings and intimate experiences.",
  },
  {
    icon: Hotel,
    title: "Hospitality Events",
    desc: "Hotel launches, restaurant openings, luxury dining events, club nights, chef-led experiences and curated guest evenings.",
  },
  {
    icon: Shirt,
    title: "Fashion & Lifestyle Events",
    desc: "Fashion shows, designer previews, styling events, lifestyle pop-ups, luxury showcases and premium brand experiences.",
  },
  {
    icon: Music2,
    title: "Entertainment Events",
    desc: "Music nights, celebrity appearances, comedy shows, live performances, DJ nights and cultural experiences.",
  },
  {
    icon: Landmark,
    title: "Government & Institutional Events",
    desc: "Formal events, public functions, award ceremonies, official gatherings, cultural programs and institutional experiences.",
  },
];

export default function EventsWePlanManage() {
  return (
    <section className="relative overflow-hidden bg-[#F8FCFF] px-5 py-20 text-[#0D2444] md:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_8%,#E4F1FF_0%,transparent_34%),radial-gradient(circle_at_85%_78%,#D7E8FA_0%,transparent_36%),linear-gradient(135deg,#FFFFFF_0%,#F5FAFF_42%,#E9F4FF_100%)]" />

      <div className="absolute left-[-260px] top-[-260px] h-[620px] w-[620px] rounded-full border border-[#0D2444]/8" />
      <div className="absolute right-[-320px] bottom-[-320px] h-[760px] w-[760px] rounded-full border border-[#0D2444]/8" />

      <div
        className="
          absolute inset-0 opacity-[0.025]
          [background-image:linear-gradient(to_right,#0D2444_1px,transparent_1px)]
          [background-size:120px_120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* CENTER HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto flex max-w-6xl flex-col items-center border-b border-[#0D2444]/12 pb-14 text-center"
        >
          <div className="mb-7 flex items-center justify-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0D2444]/12 bg-white/70 text-[#0D2444] shadow-[0_14px_40px_rgba(13,36,68,0.08)] backdrop-blur-xl">
              <Sparkles size={17} />
            </span>

            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#5579A6]">
              Events We Plan & Manage
            </span>
          </div>

          <h2
            style={serifFont}
            className="max-w-6xl text-[38px] font-bold leading-[1.02] tracking-[-0.055em] md:text-[58px]"
          >
            <span className="inline bg-gradient-to-r from-[#071426] via-[#244B7C] via-[#6F8FB8] to-[#B7CAE2] bg-clip-text text-transparent">
              From Corporate Stages To Luxury Celebrations, We Manage It All
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-[16px] font-medium leading-[1.9] text-[#4F627B] md:text-[18px]">
            Double Trouble Studio plans and manages business, brand, wedding,
            social, hospitality, fashion, entertainment and institutional events
            with a clear process and premium execution.
          </p>

          <div className="mt-8 flex w-full max-w-2xl items-center gap-4">
            <div className="h-px flex-1 bg-[#0D2444]/14" />
            <span className="whitespace-nowrap text-[11px] font-black uppercase tracking-[0.24em] text-[#5579A6]">
              360° Event Execution
            </span>
            <div className="h-px flex-1 bg-[#0D2444]/14" />
          </div>
        </motion.div>

        {/* LIGHT EDITORIAL EVENT LIST */}
        <div className="mt-16 grid border-y border-[#0D2444]/12 lg:grid-cols-2">
          {events.map((event, index) => {
            const Icon = event.icon;

            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  ease: "easeOut",
                  delay: index * 0.04,
                }}
                className="
                  group relative border-b border-[#0D2444]/12 py-9 transition-all duration-500
                  hover:bg-white/55
                  lg:min-h-[245px] lg:px-8
                  lg:odd:border-r lg:odd:border-[#0D2444]/12
                  [&:nth-last-child(-n+2)]:lg:border-b-0
                "
              >
                <div className="grid gap-6 md:grid-cols-[72px_1fr_42px] md:items-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#0D2444]/12 bg-white/65 text-[#244B7C] shadow-[0_14px_36px_rgba(13,36,68,0.08)] backdrop-blur-xl transition-all duration-300 group-hover:border-[#244B7C]/40 group-hover:bg-[#0D2444] group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3
                      style={serifFont}
                      className="max-w-xl text-[30px] font-bold leading-[1.05] tracking-[-0.045em] text-[#0D2444] md:text-[36px]"
                    >
                      {event.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-[14.5px] font-medium leading-[1.85] text-[#52647C] md:text-[15.5px]">
                      {event.desc}
                    </p>

                    <div className="mt-8 h-px w-14 bg-[#6F8FB8]/70 transition-all duration-500 group-hover:w-32 group-hover:bg-[#0D2444]" />
                  </div>

                  <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#0D2444]/12 text-[#0D2444]/60 transition-all duration-300 group-hover:border-[#0D2444] group-hover:bg-[#0D2444] group-hover:text-white md:flex">
                    <ArrowUpRight size={17} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM LINE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="border-b border-[#0D2444]/12 py-9 text-center"
        >
          <p className="text-[12px] font-black uppercase tracking-[0.26em] text-[#5579A6]">
            Corporate · Brand · Wedding · Social · Hospitality · Fashion · Entertainment · Institutional
          </p>
        </motion.div>
      </div>
    </section>
  );
}