"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const works = [
  {
    logo: "/logos/26.webp",
    category: "Digital • Web • PR",
    title: "RNK Rentals",
    desc: "A complete digital transformation for India’s premier luxury car rental network through brand storytelling, PR communication, SEO-friendly website development, performance systems and premium web experience.",
  },

  {
    logo: "/logos/13.webp",
    category: "Brand • Web • PR",
    title: "House of Stars",
    desc: "Brand positioning, website development and narrative system for a celebrity management and talent engagement platform connecting brands with India’s top celebrities, influencers and creators.",
  },

  {
    logo: "/cafeholiday.png",
    category: "Social • Events",
    title: "Café Holiday",
    desc: "A three-month hospitality brand revamp focused on social media marketing, café storytelling, event-led experiences, community engagement and modern digital growth.",
  },

  {
    logo: "/india.jpg",
    category: "Digital • Media • AI",
    title: "India Today",
    desc: "AI-powered visual campaigns, premium creative assets and digital media storytelling designed for one of India’s leading media platforms.",
  },

  {
    logo: "/Golf Final Logo - 1.png",
    category: "Events • Branding • Production",
    title: "All India Police Golf Tournament",
    desc: "Creative support, event branding, sponsor communication and premium production identity for the prestigious All India Police Golf Tournament Chandigarh 2026.",
  },

  {
    logo: "/BRlogo.webp",
    category: "AI Video • VFX • Campaigns",
    title: "Bhart Rehma",
    desc: "AI-generated cinematic visuals, VFX-led storytelling and high-impact digital campaign assets designed for premium brand communication.",
  },
];

export default function FeaturedWork() {
  return (
    <section
      className="relative overflow-hidden py-20 bg-[#EEF3F8]"
      aria-label="Featured work by Double Trouble Studio including branding, PR, web development, events, AI video and digital marketing case studies"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(49,80,122,0.14),transparent_28%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(98,136,185,0.10),transparent_30%)]" />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(to_right,#0f172a_1px,transparent_1px)]
          [background-size:90px_90px]
        "
      />

      <div className="relative z-10 max-w-[1380px] mx-auto px-6">
        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-[920px]"
        >
          {/* LABEL */}
          <div
            className="
              inline-flex
              items-center
              gap-3
              px-5
              py-2
              rounded-full
              border
              border-white/60
              bg-white/70
              backdrop-blur-xl
              mb-8
            "
          >
            <Sparkles
              className="w-4 h-4 text-[#6288B9]"
              aria-hidden="true"
            />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[2px]
                font-medium
                text-[#31507A]
              "
            >
              Featured Work
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
              text-[40px]
              md:text-[58px]
              leading-[1.1]
              tracking-[-3px]
              font-bold
              text-[#10213D]
            "
            style={{
              fontFamily:
                "New York, ui-serif, Georgia, serif",
            }}
          >
            Work That
            <span
              className="
                block
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#31507A]
                via-[#6288B9]
                to-[#A8BEDB]
              "
            >
              Builds Brand Presence
            </span>
          </h2>

          {/* TEXT */}
          <p
            className="
              mt-7
              text-[16px]
              leading-[32px]
              text-slate-500
              max-w-[720px]
            "
          >
            A curated look at brands, media platforms, event properties and
            businesses we have helped grow across branding, PR, web development,
            social media marketing, AI video production and experiential
            campaigns — where aesthetics, systems and measurable outcomes work
            together.
          </p>

          {/* MINI TEXT */}
          <p
            className="
              mt-6
              text-[12px]
              uppercase
              tracking-[3px]
              text-slate-400
            "
          >
            Select case studies • Branding • PR • Web • Events • AI Video
          </p>
        </motion.div>

        {/* WORK LIST */}
        <div className="mt-24 space-y-6">
          {works.map((work, index) => (
            <motion.article
              key={work.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-[38px]
                border
                border-[#DCE5F0]
                bg-[linear-gradient(180deg,#ffffff_0%,#F7FAFD_100%)]
                p-8
                md:p-10
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_20px_60px_rgba(15,23,42,0.06)]
              "
              aria-label={`${work.title} case study by Double Trouble Studio`}
            >
              {/* TOP LINE */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-[4px]
                  bg-gradient-to-r
                  from-[#10213D]
                  via-[#31507A]
                  to-[#6288B9]
                "
              />

              {/* GLOW */}
              <div
                className="
                  absolute
                  top-[-120px]
                  right-[-120px]
                  w-[260px]
                  h-[260px]
                  rounded-full
                  bg-[#6288B9]/10
                  blur-3xl
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div className="relative z-10 grid lg:grid-cols-[120px_220px_1fr_80px] gap-10 items-start">
                {/* LOGO */}
                <div className="flex items-center">
                  <div
                    className="
                      w-[82px]
                      h-[82px]
                      rounded-[26px]
                      border
                      border-[#DCE5F0]
                      bg-white/80
                      backdrop-blur-xl
                      flex
                      items-center
                      justify-center
                      shadow-[0_10px_30px_rgba(15,23,42,0.05)]
                      overflow-hidden
                    "
                  >
                    <img
                      src={work.logo}
                      alt={`${work.title} logo - Double Trouble Studio featured work case study`}
                      className="w-[48px] h-[48px] object-contain"
                    />
                  </div>
                </div>

                {/* CATEGORY */}
                <div>
                  <p
                    className="
                      text-[11px]
                      uppercase
                      tracking-[2px]
                      text-slate-400
                    "
                  >
                    {work.category}
                  </p>
                </div>

                {/* CONTENT */}
                <div>
                  <h3
                    className="
                      text-[38px]
                      md:text-[48px]
                      leading-[0.95]
                      tracking-[-3px]
                      font-bold
                      text-[#10213D]
                    "
                    style={{
                      fontFamily:
                        "New York, ui-serif, Georgia, serif",
                    }}
                  >
                    {work.title}
                  </h3>

                  <p
                    className="
                      mt-6
                      text-[15px]
                      leading-[30px]
                      text-slate-500
                      max-w-[720px]
                    "
                  >
                    {work.desc}
                  </p>
                </div>

                {/* BUTTON */}
                <div className="flex lg:justify-end">
                  <button
                    type="button"
                    aria-label={`View ${work.title} featured work case study`}
                    className="
                      w-[56px]
                      h-[56px]
                      rounded-full
                      bg-gradient-to-br
                      from-[#10213D]
                      to-[#31507A]
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    <ArrowUpRight
                      className="w-5 h-5 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* AI + GEO SEO CONTEXT */}
        <div className="sr-only">
          <h2>
            Double Trouble Studio featured work includes branding, PR campaigns,
            digital marketing, web development, luxury event branding, guest
            management, celebrity management, AI video production, VFX and
            social media marketing case studies in India.
          </h2>

          <p>
            Case studies include RNK Rentals for luxury car rental digital
            transformation and SEO website development, House of Stars for
            celebrity management platform branding and web development, Café
            Holiday for restaurant and hospitality social media marketing, India
            Today for AI-powered media campaign creative assets, All India Police
            Golf Tournament for premium event branding and sponsor communication,
            and Bhart Rehma for AI video production and VFX campaign assets.
          </p>

          <p>
            Double Trouble Studio works with hospitality brands, luxury brands,
            restaurants, cafés, fashion labels, lifestyle companies, media
            companies, corporate brands, event properties, wedding brands and
            founders across Mumbai, Delhi, Chandigarh, Bangalore, Hyderabad,
            Pune, Ahmedabad, Goa and across India.
          </p>
        </div>
      </div>
    </section>
  );
}