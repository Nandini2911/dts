"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function CelebrityEventTypes() {
  const eventTypes = [
    {
      category: "Business",
      title: "Corporate Events",
      desc: "We manage celebrities, speakers, hosts and performers for conferences, annual days, leadership summits, employee events and business gatherings.",
    },
    {
      category: "Launches",
      title: "Product Launches",
      desc: "We help brands identify celebrities, influencers or hosts who can create launch visibility, media interest and audience engagement for new products.",
    },
    {
      category: "Campaigns",
      title: "Brand Activations",
      desc: "We coordinate talent for mall activations, retail launches, experiential campaigns, pop-ups, consumer engagement campaigns and promotional events.",
    },
    {
      category: "Hospitality",
      title: "Hotel Launches",
      desc: "We manage celebrity appearances for luxury hotel openings, hospitality previews, guest experiences, media interactions and premium brand moments.",
    },
    {
      category: "F&B",
      title: "Restaurant Openings",
      desc: "We help restaurants, cafes, lounges and nightlife brands collaborate with celebrities, influencers and creators for launch visibility and social media reach.",
    },
    {
      category: "Premium",
      title: "Luxury Experiences",
      desc: "We coordinate public personalities for curated experiences, private previews, fashion showcases, lifestyle events and premium audience engagements.",
    },
    {
      category: "Fashion",
      title: "Fashion Shows",
      desc: "We manage showstoppers, celebrity guests, hosts, influencers, models and media-facing appearances for fashion events and designer showcases.",
    },
    {
      category: "Recognition",
      title: "Award Ceremonies",
      desc: "We coordinate celebrity presenters, hosts, performers, chief guests and public personalities for award nights and recognition events.",
    },
    {
      category: "Private",
      title: "Weddings & Private Celebrations",
      desc: "We help clients book celebrities, singers, performers, hosts and entertainers for weddings, sangeet nights, receptions and private celebrations.",
    },
    {
      category: "Knowledge",
      title: "Conferences & Summits",
      desc: "We arrange keynote speakers, moderators, celebrity hosts, industry leaders and thought leaders for business conferences and summits.",
    },
    {
      category: "Exhibition",
      title: "Trade Shows & Exhibitions",
      desc: "We coordinate celebrity appearances for booth launches, brand unveilings, audience engagement, media moments and exhibition visibility.",
    },
    {
      category: "Entertainment",
      title: "Entertainment Events",
      desc: "We manage singers, comedians, performers, anchors, celebrity guests and digital creators for large-format entertainment events.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#F3FAFF] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(138,189,240,0.35),transparent_32%),radial-gradient(circle_at_90%_80%,rgba(13,36,68,0.10),transparent_35%),linear-gradient(180deg,#F8FCFF_0%,#EAF6FF_100%)]" />

      {/* DIAGONAL LINES */}
      <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(135deg,rgba(13,36,68,0.08)_1px,transparent_1px)] [background-size:34px_34px]" />

      <div className="relative z-10 mx-auto max-w-[1220px]">
        {/* CENTER HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[900px] text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0D2444]/10 bg-white/75 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#0D2444] shadow-[0_14px_40px_rgba(13,36,68,0.07)] backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-[#6288B9]" />
            Event Types
          </span>

          <h2
            className="mx-auto mt-6 max-w-[920px] text-[34px] font-semibold leading-[0.96] tracking-[-0.055em] text-[#0D2444] sm:text-[44px] md:text-[54px] lg:text-[64px]"
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            Celebrity Booking Services for{" "}
            <span className="bg-gradient-to-r from-[#8ABDF0] via-[#315E91] to-[#0D2444] bg-clip-text text-transparent">
              Different Event Types
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[15px] font-medium leading-[1.85] text-slate-600 md:text-[17px]">
            From corporate events and product launches to luxury experiences,
            fashion shows, weddings and entertainment formats, we help match the
            right celebrity or public personality to the right audience.
          </p>
        </motion.div>

        {/* DIRECTORY STYLE LIST */}
        <div className="mt-14 overflow-hidden rounded-[38px] border border-[#DCE6F2] bg-white/55 shadow-[0_30px_90px_rgba(13,36,68,0.10)] backdrop-blur-2xl">
          {eventTypes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.035,
                ease: "easeOut",
              }}
              className="group grid grid-cols-1 border-b border-[#DCE6F2] px-5 py-6 transition-all duration-300 last:border-b-0 hover:bg-[#0D2444] sm:px-7 md:grid-cols-[180px_0.8fr_1.2fr_44px] md:items-center md:gap-7 lg:px-9"
            >
              {/* CATEGORY */}
              <div>
                <span className="inline-flex rounded-full border border-[#8ABDF0]/45 bg-[#F0F8FF] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#315E91] transition-all duration-300 group-hover:border-white/25 group-hover:bg-white/12 group-hover:text-white">
                  {item.category}
                </span>
              </div>

              {/* TITLE */}
              <h3
                className="mt-5 text-[24px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#0D2444] transition-colors duration-300 group-hover:text-white md:mt-0 md:text-[28px]"
                style={{
                  fontFamily:
                    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                }}
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-4 max-w-[650px] text-[14px] font-medium leading-[1.8] text-slate-600 transition-colors duration-300 group-hover:text-white/78 md:mt-0 md:text-[15px]">
                {item.desc}
              </p>

              {/* ARROW */}
              <div className="mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#0D2444] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-white group-hover:text-[#0D2444] md:mt-0">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}