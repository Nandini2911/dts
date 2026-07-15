"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Gift,
  Hotel,
  MapPin,
  Music2,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
  UsersRound,
  Utensils,
  Wallet,
} from "lucide-react";

const headingLinkClass =
  "inline-block underline decoration-[#315E91]/45 underline-offset-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:decoration-[#0D2444]";

const titleLinkClass =
  "relative z-20 inline-block text-inherit underline decoration-current/35 underline-offset-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:decoration-current/80";

const textLinkClass =
  "font-medium text-[#0D2444] underline underline-offset-4 transition-colors duration-300 hover:text-[#315E91]";

type UseCaseItem = {
  title: ReactNode;
  titleText: string;
  desc: ReactNode;
  icon: typeof Hotel;
  tag: string;
};

export default function CelebrityUseCasesBookingInfoPremium() {
  const useCases: UseCaseItem[] = [
    {
      title: (
        <Link
          href="https://www.dtsworld.in/services/pr-media-marketing"
          className={titleLinkClass}
        >
          Luxury Hotel Launch
        </Link>
      ),
      titleText: "Luxury Hotel Launch",
      desc: (
        <>
          Celebrity appearance coordination for hospitality launches, premium
          guest experiences, media moments,{" "}
          <Link
            href="https://www.dtsworld.in/blog/managing-celebrity-appearances-logistics-security-coordination"
            className={textLinkClass}
          >
            red-carpet entries
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.dtsworld.in/services/pr-media-marketing"
            className={textLinkClass}
          >
            social media visibility
          </Link>
          .
        </>
      ),
      icon: Hotel,
      tag: "Hospitality",
    },
    {
      title: (
        <Link
          href="https://www.dtsworld.in/services/pr-media-marketing"
          className={titleLinkClass}
        >
          Fashion Brand Campaign
        </Link>
      ),
      titleText: "Fashion Brand Campaign",
      desc: "Talent onboarding, campaign scheduling, content planning and influencer coordination for fashion launches, seasonal campaigns and premium brand promotions.",
      icon: Star,
      tag: "Fashion",
    },
    {
      title: (
        <Link
          href="https://www.dtsworld.in/services/events-weddings"
          className={titleLinkClass}
        >
          Corporate Leadership Summit
        </Link>
      ),
      titleText: "Corporate Leadership Summit",
      desc: "Speaker management, celebrity host coordination, stage flow planning, logistics and on-ground support for business conferences and leadership events.",
      icon: BriefcaseBusiness,
      tag: "Corporate",
    },
    {
      title: (
        <Link
          href="https://www.dtsworld.in/services/pr-media-marketing"
          className={titleLinkClass}
        >
          Restaurant & Nightlife Opening
        </Link>
      ),
      titleText: "Restaurant & Nightlife Opening",
      desc: "Celebrity and influencer coordination for launch visibility, guest engagement, social media content and PR-driven openings.",
      icon: Utensils,
      tag: "F&B",
    },
    {
      title: (
        <Link
          href="https://www.dtsworld.in/blog/celebrity-endorsement-vs-event-appearance-roi"
          className={titleLinkClass}
        >
          Product Launch Campaign
        </Link>
      ),
      titleText: "Product Launch Campaign",
      desc: "Celebrity endorsement, event appearance, digital content coordination and media-facing moments for new product introductions.",
      icon: Gift,
      tag: "Launch",
    },
    {
      title: (
        <Link
          href="https://www.dtsworld.in/blog/luxury-event-wedding-planning-mumbai-india-2026"
          className={titleLinkClass}
        >
          Wedding & Private Celebration
        </Link>
      ),
      titleText: "Wedding & Private Celebration",
      desc: "Singer, performer, celebrity guest, host or entertainer coordination for luxury weddings, sangeet nights, receptions and private events.",
      icon: Music2,
      tag: "Private",
    },
  ];

  const bookingInfo = [
    { title: "Event date", icon: CalendarDays },
    { title: "Event city and venue", icon: MapPin },
    { title: "Type of event or campaign", icon: BadgeCheck },
    { title: "Preferred celebrity category", icon: UserRound },
    { title: "Expected appearance duration", icon: Clock3 },
    { title: "Brand or client details", icon: Building2 },
    { title: "Audience profile", icon: UsersRound },
    { title: "Budget range", icon: Wallet },
    { title: "Required deliverables", icon: CheckCircle2 },
    { title: "Travel and hospitality expectations", icon: Plane },
    { title: "Content rights or media usage requirement", icon: ShieldCheck },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#F7FBFF] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(138,189,240,0.32),transparent_32%),radial-gradient(circle_at_82%_80%,rgba(13,36,68,0.10),transparent_34%),linear-gradient(180deg,#F9FDFF_0%,#EAF6FF_100%)]" />
      <div className="absolute left-[-240px] top-[-220px] h-[540px] w-[540px] rounded-full bg-[#8ABDF0]/25 blur-3xl" />
      <div className="absolute bottom-[-280px] right-[-240px] h-[640px] w-[640px] rounded-full bg-[#0D2444]/10 blur-3xl" />

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
            Use Cases & Booking Brief
          </span>

          <h2
            className="mx-auto mt-6 max-w-[900px] text-[34px] font-semibold leading-[0.96] tracking-[-0.055em] text-[#0D2444] sm:text-[44px] md:text-[54px] lg:text-[64px]"
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            
              Celebrity Management{" "}
              <span className="bg-gradient-to-r from-[#8ABDF0] via-[#315E91] to-[#0D2444] bg-clip-text text-transparent">
                Use Cases
              </span>
          
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[15px] font-medium leading-[1.85] text-slate-600 md:text-[17px]">
            From luxury launches and fashion campaigns to private celebrations
            and corporate summits, we help brands plan celebrity engagements
            with clarity, structure and premium execution.
          </p>
        </motion.div>

        {/* PREMIUM USE CASE SHOWCASE */}
        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {useCases.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.titleText}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                className={`group relative overflow-hidden rounded-[36px] border border-white/75 bg-white/62 p-6 shadow-[0_24px_80px_rgba(13,36,68,0.09)] backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_34px_100px_rgba(13,36,68,0.16)] sm:p-7 ${
                  index === 0 || index === 5
                    ? "lg:col-span-6"
                    : "lg:col-span-3"
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-[5px] bg-gradient-to-r from-[#8ABDF0] via-[#315E91] to-[#0D2444]" />
                <div className="absolute right-[-90px] top-[-90px] h-[220px] w-[220px] rounded-full bg-[#8ABDF0]/20 blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-5">
                    <span className="rounded-full border border-[#8ABDF0]/45 bg-[#F0F8FF] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#315E91]">
                      {item.tag}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D2444] text-white shadow-[0_16px_42px_rgba(13,36,68,0.22)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:bg-[#8ABDF0] group-hover:text-[#0D2444]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3
                    className="mt-8 max-w-[580px] text-[28px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#0D2444] md:text-[34px]"
                    style={{
                      fontFamily:
                        'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-[680px] text-[14px] font-medium leading-[1.85] text-slate-600 md:text-[15px]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOOKING INFO PREMIUM PANEL */}
        <div className="mt-20 overflow-hidden rounded-[46px] bg-[#0D2444] shadow-[0_34px_110px_rgba(13,36,68,0.24)]">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="relative overflow-hidden p-7 sm:p-9 lg:p-11"
            >
              <div className="absolute right-[-160px] top-[-160px] h-[360px] w-[360px] rounded-full bg-[#8ABDF0]/25 blur-3xl" />
              <div className="absolute bottom-[-160px] left-[-140px] h-[320px] w-[320px] rounded-full bg-white/10 blur-3xl" />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white backdrop-blur-xl">
                  <CheckCircle2 className="h-4 w-4 text-[#8ABDF0]" />
                  Booking Information
                </span>

                <h2
                  className="mt-7 max-w-[560px] text-[36px] font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:text-[46px] md:text-[54px] lg:text-[62px]"
                  style={{
                    fontFamily:
                      'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                  }}
                >
                  Information Required for{" "}
                  <span className="text-[#8ABDF0]">Celebrity Booking</span>
                </h2>

                <p className="mt-7 max-w-[540px] text-[15px] font-medium leading-[1.9] text-white/72 md:text-[17px]">
                  To begin the celebrity booking process, we usually require
                  event, brand, budget, audience and deliverable details. These
                  details help us shortlist suitable personalities and check
                  availability more efficiently.
                </p>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
              className="bg-white/[0.06] p-5 sm:p-7 lg:p-9"
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {bookingInfo.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.03,
                        ease: "easeOut",
                      }}
                      className="group flex items-center gap-4 rounded-[24px] border border-white/10 bg-white/[0.08] p-4 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white hover:shadow-[0_22px_60px_rgba(0,0,0,0.18)]"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#8ABDF0] text-[#0D2444] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#0D2444] group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      <p className="text-[12px] font-black uppercase leading-[1.45] tracking-[0.11em] text-white/82 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#0D2444]">
                        {item.title}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}