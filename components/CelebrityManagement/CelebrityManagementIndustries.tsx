"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

const titleLinkClass =
  "relative z-20 inline-block text-inherit underline decoration-current/35 underline-offset-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:decoration-current/80";

const descLinkClass =
  "relative z-20 font-medium text-inherit underline decoration-current/35 underline-offset-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:decoration-current/80";

type IndustryItem = {
  tag: string;
  title: ReactNode;
  titleText: string;
  desc: ReactNode;
};

export default function CelebrityManagementIndustries() {
  const industries: IndustryItem[] = [
    {
      tag: "Luxury",
      title: (
        <Link
          href="https://www.dtsworld.in/blog/seo-for-luxury-brands-positioning-keywords-authority"
          className={titleLinkClass}
        >
          Luxury & Lifestyle Brands
        </Link>
      ),
      titleText: "Luxury & Lifestyle Brands",
      desc: "We work with luxury brands, fashion labels, beauty companies, wellness brands, premium retail businesses and lifestyle companies looking to create aspiration, visibility and audience engagement.",
    },
    {
      tag: "Hospitality",
      title: (
        <Link
          href="https://www.dtsworld.in/services/pr-media-marketing"
          className={titleLinkClass}
        >
          Hospitality & Experiences
        </Link>
      ),
      titleText: "Hospitality & Experiences",
      desc: "We support hotels, restaurants, lounges, nightlife venues, destination events, luxury experiences and private celebrations with celebrity and influencer coordination.",
    },
    {
      tag: "Corporate",
      title: (
        <Link
          href="https://www.dtsworld.in/services/pr-media-marketing"
          className={titleLinkClass}
        >
          Corporate & Consumer Brands
        </Link>
      ),
      titleText: "Corporate & Consumer Brands",
      desc: "We help corporate organizations, FMCG brands, automotive companies, real estate developers, technology companies, e-commerce businesses and retail brands use celebrity partnerships for campaigns and events.",
    },
    {
      tag: "Events",
      title: (
        <Link
          href="https://www.dtsworld.in/services/events-weddings"
          className={titleLinkClass}
        >
          Events & Entertainment Businesses
        </Link>
      ),
      titleText: "Events & Entertainment Businesses",
      desc: (
        <>
          We support{" "}
          <Link
            href="https://www.dtsworld.in/services/events-weddings"
            className={descLinkClass}
          >
            event management agencies
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/blog/luxury-event-wedding-planning-mumbai-india-2026"
            className={descLinkClass}
          >
            wedding planners
          </Link>
          , entertainment companies, production teams and experiential agencies
          with{" "}
          <Link
            href="https://www.dtsworld.in/blog/how-to-source-approach-celebrities-agencies-direct-contact"
            className={descLinkClass}
          >
            talent sourcing
          </Link>{" "}
          and celebrity coordination.
        </>
      ),
    },
  ];

  const IndustryCard = ({
    item,
    index,
    direction,
  }: {
    item: IndustryItem;
    index: number;
    direction: "left" | "right";
  }) => (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -28 : 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: "easeOut",
      }}
      className="group relative overflow-hidden rounded-[34px] border border-white/70 bg-white/60 p-7 shadow-[0_22px_70px_rgba(13,36,68,0.09)] backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:bg-[#0D2444] hover:shadow-[0_34px_95px_rgba(13,36,68,0.18)]"
    >
      <div className="absolute right-[-80px] top-[-80px] h-[180px] w-[180px] rounded-full bg-[#8ABDF0]/25 blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-white/15" />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-5">
          <span className="rounded-full border border-[#8ABDF0]/40 bg-[#F0F8FF] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#315E91] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-white/25 group-hover:bg-white/12 group-hover:text-white">
            {item.tag}
          </span>

          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0D2444] text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-white group-hover:text-[#0D2444]">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <h3
          className="mt-7 text-[28px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#0D2444] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white md:text-[30px]"
          style={{
            fontFamily:
              'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
          }}
        >
          {item.title}
        </h3>

        <p className="mt-5 text-[14px] font-medium leading-[1.85] text-slate-600 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-white/80">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section className="relative w-full overflow-hidden bg-[#EEF8FF] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,189,240,0.32),transparent_34%),linear-gradient(180deg,#F8FCFF_0%,#EAF6FF_100%)]" />
      <div className="absolute left-[-240px] top-[-220px] h-[560px] w-[560px] rounded-full bg-[#8ABDF0]/30 blur-3xl" />
      <div className="absolute bottom-[-260px] right-[-220px] h-[620px] w-[620px] rounded-full bg-[#0D2444]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1250px]">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[900px] text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0D2444]/10 bg-white/75 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#0D2444] shadow-[0_14px_40px_rgba(13,36,68,0.07)] backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-[#6288B9]" />
            Industries We Serve
          </span>

          <h2
            className="mx-auto mt-6 max-w-[900px] text-[34px] font-semibold leading-[0.96] tracking-[-0.055em] text-[#0D2444] sm:text-[44px] md:text-[54px] lg:text-[64px]"
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            Celebrity Management Across{" "}
            <span className="bg-gradient-to-r from-[#8ABDF0] via-[#315E91] to-[#0D2444] bg-clip-text text-transparent">
              Industries
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[15px] font-medium leading-[1.85] text-slate-600 md:text-[17px]">
            We support premium brands, hospitality businesses, corporate
            organizations and event companies with celebrity partnerships built
            around audience, positioning and experience value.
          </p>
        </motion.div>

        {/* DESKTOP LAYOUT - NO OVERLAP */}
        <div className="mt-16 hidden lg:grid lg:grid-cols-[1fr_340px_1fr] lg:items-center lg:gap-10">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-8">
            {industries.slice(0, 2).map((item, index) => (
              <IndustryCard
                key={item.titleText}
                item={item}
                index={index}
                direction="left"
              />
            ))}
          </div>

          {/* CENTER HUB */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative mx-auto flex h-[300px] w-[300px] flex-col items-center justify-center rounded-full border border-white/70 bg-white/55 text-center shadow-[0_28px_90px_rgba(13,36,68,0.12)] backdrop-blur-2xl"
          >
            <div className="absolute inset-4 rounded-full border border-[#8ABDF0]/35" />
            <div className="absolute inset-[-55px] rounded-full border border-[#0D2444]/5" />
            <div className="absolute inset-[-110px] rounded-full border border-[#0D2444]/5" />

            <p className="relative z-10 text-[10px] font-black uppercase tracking-[0.24em] text-[#6288B9]">
              DTS Expertise
            </p>

            <h3
              className="relative z-10 mt-4 max-w-[220px] text-[42px] font-semibold leading-[0.9] tracking-[-0.06em] text-[#0D2444]"
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              Brand Fit First
            </h3>

            <p className="relative z-10 mt-4 max-w-[220px] text-[13px] font-medium leading-[1.7] text-slate-600">
              Talent selected by audience, relevance, objective and positioning.
            </p>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-8">
            {industries.slice(2, 4).map((item, index) => (
              <IndustryCard
                key={item.titleText}
                item={item}
                index={index}
                direction="right"
              />
            ))}
          </div>
        </div>

        {/* MOBILE / TABLET LAYOUT */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:hidden">
          {industries.map((item, index) => (
            <motion.div
              key={item.titleText}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="rounded-[30px] border border-white/70 bg-white/65 p-6 shadow-[0_18px_55px_rgba(13,36,68,0.08)] backdrop-blur-xl"
            >
              <span className="rounded-full border border-[#8ABDF0]/40 bg-[#F0F8FF] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#315E91]">
                {item.tag}
              </span>

              <h3
                className="mt-6 text-[28px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#0D2444]"
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                {item.title}
              </h3>

              <p className="mt-5 text-[14px] font-medium leading-[1.85] text-slate-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}