"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarCheck,
  Crown,
  Film,
  Handshake,
  Share2,
  Megaphone,
  Mic2,
  Music2,
  Sparkles,
  Star,
  Trophy,
  UsersRound,
} from "lucide-react";

export default function CelebrityManagementServices() {
  const services = [
    {
      number: "01",
      title: "Celebrity Booking & Talent Acquisition",
      desc: "We help brands, event organizers and businesses connect with suitable celebrities, actors, performers, public figures, speakers and digital personalities based on campaign goals, audience profile, event type and budget.",
      icon: Star,
      className: "lg:col-span-2",
    },
    {
      number: "02",
      title: "Bollywood Celebrity Booking",
      desc: "We coordinate Bollywood celebrity appearances for brand campaigns, product launches, corporate events, luxury experiences, private celebrations, hospitality openings and promotional activities, subject to availability and event requirements.",
      icon: Film,
      className: "",
    },
    {
      number: "03",
      title: "Celebrity Endorsement Campaigns",
      desc: "We manage celebrity endorsement partnerships for advertising campaigns, brand promotions, digital content, product launches, brand ambassador programs and integrated marketing campaigns.",
      icon: Megaphone,
      className: "",
    },
    {
      number: "04",
      title: "Celebrity Appearance Management",
      desc: "We coordinate celebrity appearances for launches, conferences, private events, award ceremonies, corporate functions, luxury events, weddings and hospitality experiences, including arrival, stage flow, media moments and departure planning.",
      icon: CalendarCheck,
      className: "lg:col-span-2",
    },
    {
      number: "05",
      title: "Influencer & Creator Collaborations",
      desc: "We help brands collaborate with influencers, content creators and digital personalities for targeted audience engagement across Instagram, YouTube, short-form video, branded content and social media campaigns.",
      icon: Share2,
      className: "lg:col-span-2",
    },
    {
      number: "06",
      title: "Corporate Event Talent Management",
      desc: "We arrange celebrity hosts, anchors, keynote speakers, moderators, performers, comedians, singers, business leaders and motivational speakers for conferences, summits, leadership events and corporate gatherings.",
      icon: BriefcaseBusiness,
      className: "",
    },
    {
      number: "07",
      title: "Hospitality & Luxury Brand Activations",
      desc: "We manage celebrity and influencer appearances for hotels, restaurants, luxury brands, destination experiences, private previews, premium launches and curated guest experiences.",
      icon: Crown,
      className: "",
    },
    {
      number: "08",
      title: "Celebrity Host & Anchor Booking",
      desc: "We coordinate celebrity hosts, emcees, anchors and presenters for award nights, corporate events, conferences, product launches, fashion shows and luxury experiences.",
      icon: Mic2,
      className: "lg:col-span-2",
    },
    {
      number: "09",
      title: "Singer & Performer Booking",
      desc: "We help brands and event planners book singers, musicians, performers, comedians and entertainment talent for corporate events, weddings, festivals, private celebrations and large-format experiences.",
      icon: Music2,
      className: "",
    },
    {
      number: "10",
      title: "Sports Personality Booking",
      desc: "We coordinate sports personalities and athletes for brand campaigns, sports events, corporate interactions, motivational sessions, product launches and promotional appearances.",
      icon: Trophy,
      className: "",
    },
    {
      number: "11",
      title: "Public Figure & Speaker Management",
      desc: "We manage industry experts, motivational speakers, business leaders, thought leaders and public personalities for business events, leadership summits and knowledge-led experiences.",
      icon: UsersRound,
      className: "",
    },
    {
      number: "12",
      title: "Brand Ambassador Programs",
      desc: "We help businesses develop long-term talent partnerships aligned with brand identity, campaign objectives, audience relevance and commercial goals.",
      icon: Handshake,
      className: "lg:col-span-2",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#F4FAFF] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F4FAFF] via-white to-[#EAF6FF]" />
      <div className="absolute left-[-220px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#8ABDF0]/30 blur-3xl" />
      <div className="absolute bottom-[-260px] right-[-220px] h-[560px] w-[560px] rounded-full bg-[#0D2444]/10 blur-3xl" />

      {/* GRID TEXTURE */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D244406_1px,transparent_1px),linear-gradient(to_bottom,#0D244406_1px,transparent_1px)] bg-[size:54px_54px]" />

      {/* WATERMARK */}
      <div className="pointer-events-none absolute left-1/2 top-8 hidden -translate-x-1/2 select-none text-[130px] font-black uppercase leading-none tracking-[-0.08em] text-[#0D2444]/[0.035] lg:block">
        Services
      </div>

      <div className="relative z-10 mx-auto max-w-[1250px]">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[920px] text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0D2444]/10 bg-white/85 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#0D2444] shadow-[0_14px_40px_rgba(13,36,68,0.07)] backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-[#6288B9]" />
            Our Services
          </span>

          <h2
            className="mx-auto mt-6 max-w-[900px] text-[34px] font-semibold leading-[0.96] tracking-[-0.055em] text-[#0D2444] sm:text-[44px] md:text-[54px] lg:text-[64px]"
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            Our Celebrity Management{" "}
            <span className="bg-gradient-to-r from-[#6288B9] via-[#315E91] to-[#0D2444] bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[780px] text-[15px] font-medium leading-[1.85] text-slate-600 md:text-[17px]">
            From celebrity booking and endorsements to luxury activations,
            public appearances, influencer collaborations and brand ambassador
            programs, we manage talent partnerships with complete planning and
            execution.
          </p>
        </motion.div>

        {/* SERVICES BENTO GRID */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.04,
                  ease: "easeOut",
                }}
                className={`group relative overflow-hidden rounded-[30px] border border-[#DCE6F2] bg-white/85 p-6 shadow-[0_18px_55px_rgba(13,36,68,0.07)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#8ABDF0] hover:shadow-[0_30px_85px_rgba(13,36,68,0.14)] ${service.className}`}
              >
                {/* HOVER BACKGROUND */}
                <div className="absolute inset-0 translate-y-full bg-gradient-to-br from-[#0D2444] via-[#173B66] to-[#6288B9] transition-transform duration-500 group-hover:translate-y-0" />

                {/* TOP DECOR */}
                <div className="absolute right-[-70px] top-[-70px] h-[170px] w-[170px] rounded-full bg-[#8ABDF0]/20 blur-2xl transition-all duration-500 group-hover:bg-white/15" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0F7FF] text-[#0D2444] transition-all duration-300 group-hover:bg-white group-hover:text-[#0D2444]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span
                      className="text-[42px] font-semibold leading-none tracking-[-0.08em] text-[#8ABDF0]/70 transition-colors duration-300 group-hover:text-white/30"
                      style={{
                        fontFamily:
                          'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                      }}
                    >
                      {service.number}
                    </span>
                  </div>

                  <h3
                    className="mt-7 max-w-[520px] text-[24px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#0D2444] transition-colors duration-300 group-hover:text-white md:text-[26px]"
                    style={{
                      fontFamily:
                        'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                    }}
                  >
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-[620px] text-[14px] font-medium leading-[1.85] text-slate-600 transition-colors duration-300 group-hover:text-white/82 md:text-[15px]">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}