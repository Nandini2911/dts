"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const linkClass =
  "font-medium text-[#0D2444] underline underline-offset-4 hover:text-[#315E91]";

const values = [
  {
    title: "Timeless Brand Aesthetics",
    href: "",
  },
  {
    title: "Luxury Brand Positioning",
  },
  {
    title: "Modern Storytelling",
    href: "",
  },
  {
    title: "Digital Brand Experiences",
  },
  {
    title: "Creative Direction",
  },
  {
    title: "Strategic Branding",
  },
];

export default function AboutExperience() {
  return (
    <section
      className="relative overflow-hidden bg-[#F8FAFC] py-[60px]"
      aria-label="What makes Double Trouble Studio different as a creative agency, branding agency and digital marketing agency in India"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#F8FAFC]" />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)]
          [background-size:100px_100px]
        "
      />

      {/* LIGHTS */}
      <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#6288B9]/15 blur-3xl" />

      <div className="absolute bottom-[-250px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#A4B8D2]/20 blur-3xl" />

      <div className="relative z-10 max-w-[1450px] mx-auto px-5">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-16">
          {/* LEFT */}
          <div className="max-w-[850px]">
            {/* LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="inline-flex"
            >
              <div
                className="
                  px-6
                  py-3
                  rounded-full
                  border
                  border-[#0D2444]/10
                  bg-gradient-to-r
                  from-[#0D2444]
                  via-[#16365F]
                  to-[#1F4B7A]
                  backdrop-blur-xl
                  shadow-[0_10px_40px_rgba(13,36,68,0.25)]
                "
              >
                <span
                  className="
                    text-[12px]
                    uppercase
                    tracking-[0.24em]
                    font-semibold
                    text-white
                  "
                >
                  What Makes Us Different
                </span>
              </div>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              viewport={{ once: true }}
              className="
                mt-8
                text-[40px]
                md:text-[58px]
                leading-[1.1]
                tracking-[-3px]
                font-black
              "
              style={{
                fontFamily:
                  'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
              }}
            >
              <span className="text-[#0F172A]">Beyond</span>

              <br />

              <span
                className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-[#0D2444]
                  via-[#6288B9]
                  to-[#A4B8D2]
                "
              >
                Visual Identity
              </span>
            </motion.h2>
          </div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="
              max-w-[320px]
              border-l
              border-[#6288B9]/20
              pl-6
            "
          >
            <p className="text-slate-500 leading-[2] text-[15px]">
              We create premium digital perception systems designed for{" "}
              <Link
                href="https://www.dtsworld.in/blog/seo-for-luxury-brands-positioning-keywords-authority"
                className={linkClass}
              >
                luxury brands
              </Link>
              ,{" "}
              <Link
                href="https://www.dtsworld.in/services/pr-media-marketing"
                className={linkClass}
              >
                hospitality brands
              </Link>
              ,{" "}
              <Link
                href="https://www.dtsworld.in/services/pr-media-marketing"
                className={linkClass}
              >
                lifestyle businesses
              </Link>
              ,{" "}
              <Link
                href="https://www.dtsworld.in/services/pr-media-marketing"
                className={linkClass}
              >
                restaurants
              </Link>
              ,{" "}
              <Link
                href="https://www.dtsworld.in/services/events-weddings"
                className={linkClass}
              >
                event companies
              </Link>{" "}
              and culturally-led modern brands.
            </p>
          </motion.div>
        </div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 mt-15">
          {/* BIG CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="group relative"
            aria-label="Double Trouble Studio creates brand perception through strategy, digital marketing, PR, websites and storytelling"
          >
            {/* OUTER GLOW */}
            <div
              className="
                absolute
                inset-0
                rounded-[42px]
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-700
                bg-gradient-to-br
                from-[#6288B9]/20
                via-transparent
                to-[#A4B8D2]/20
                blur-2xl
              "
            />

            {/* CARD */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[42px]
                border
                border-white/50
                bg-gradient-to-br
                from-white
                via-[#F8FAFC]
                to-[#EEF4FF]
                group-hover:from-[#FFFFFF]
                group-hover:via-[#F8FAFC]
                group-hover:to-[#EAF2FF]
                backdrop-blur-2xl
                p-10
                md:p-14
                h-full
                transition-all
                duration-700
                shadow-[0_20px_80px_rgba(15,23,42,0.06)]
              "
            >
              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-700
                  bg-gradient-to-br
                  from-[#6288B9]/5
                  via-transparent
                  to-[#A4B8D2]/10
                "
              />

              {/* LIGHT */}
              <div className="absolute top-[-80px] right-[-50px] w-[220px] h-[220px] rounded-full bg-[#6288B9]/20 blur-3xl" />

              <div className="relative z-10">
                {/* TOP */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#6288B9]" />

                    <span className="text-[13px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
                      Perception Driven
                    </span>
                  </div>

                  <div
                    className="
                      w-[60px]
                      h-[60px]
                      rounded-[20px]
                      bg-gradient-to-br
                      from-[#0D2444]
                      via-[#6288B9]
                      to-[#A4B8D2]
                      flex
                      items-center
                      justify-center
                      shadow-[0_10px_40px_rgba(98,136,185,0.22)]
                    "
                  >
                    <span
                      className="
                        text-white
                        text-[20px]
                        font-black
                      "
                      style={{
                        fontFamily:
                          'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                      }}
                    >
                      DTS
                    </span>
                  </div>
                </div>

                {/* TEXT */}
                <h3
                  className="
                    mt-14
                    text-[34px]
                    md:text-[48px]
                    leading-[1.2]
                    tracking-[-2px]
                    font-black
                    text-[#0F172A]
                  "
                  style={{
                    fontFamily:
                      'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                  }}
                >
                  Most agencies create visuals.

                  <span
                    className="
                      block
                      mt-3
                      text-transparent
                      bg-clip-text
                      bg-gradient-to-r
                      from-[#0D2444]
                      via-[#6288B9]
                      to-[#A4B8D2]
                    "
                  >
                    We create perception.
                  </span>
                </h3>

                {/* DESC */}
                <p
                  className="
                    mt-10
                    max-w-[700px]
                    text-[17px]
                    leading-[2]
                    text-slate-500
                  "
                >
                  Every interaction is intentionally crafted to feel elevated,
                  emotional and culturally relevant — from{" "}
                  <Link
                    href="https://www.dtsworld.in/blog/luxury-brand-strategy-roadmap-india"
                    className={linkClass}
                  >
                    brand strategy
                  </Link>
                  ,{" "}
                  <Link
                    href="https://www.dtsworld.in/services/web-development-marketing"
                    className={linkClass}
                  >
                    digital experiences
                  </Link>
                  ,{" "}
                  <Link
                    href="https://www.dtsworld.in/services/web-development-marketing"
                    className={linkClass}
                  >
                    website development
                  </Link>{" "}
                  and storytelling to{" "}
                  <Link
                    href="https://www.dtsworld.in/services/pr-media-marketing"
                    className={linkClass}
                  >
                    PR communication
                  </Link>
                  ,{" "}
                  <Link
                    href="https://www.dtsworld.in/blog/technical-seo-complete-website-optimization-guide"
                    className={linkClass}
                  >
                    SEO structure
                  </Link>
                  , strategic positioning and premium brand systems.
                </p>

                {/* LINE */}
                <div
                  className="
                    mt-12
                    h-[1px]
                    w-full
                    bg-gradient-to-r
                    from-[#6288B9]/30
                    via-transparent
                    to-transparent
                  "
                />
              </div>
            </div>
          </motion.div>

          {/* SMALL CARDS */}
          <div className="grid grid-cols-2 gap-5">
            {values.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  scale: 0.92,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="group relative"
                aria-label={`${item.title} by Double Trouble Studio`}
              >
                {/* GLOW */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[28px]
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    bg-gradient-to-br
                    from-[#6288B9]/20
                    via-transparent
                    to-[#A4B8D2]/20
                    blur-xl
                  "
                />

                {/* CARD */}
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/50
                    bg-gradient-to-br
                    from-white
                    via-[#174f84]
                    to-[#031537]
                   
                    backdrop-blur-xl
                    p-7
                    min-h-[180px]
                    flex
                    flex-col
                    justify-between
                    transition-all
                    duration-700
                    shadow-[0_10px_40px_rgba(15,23,42,0.05)]
                  "
                >
                  {/* OVERLAY */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-700
                      bg-gradient-to-br
                      from-[#6288B9]/5
                      via-transparent
                      to-[#A4B8D2]/10
                    "
                  />

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    {/* NUMBER */}
                    <span
                      className="
                        text-[13px]
                        font-semibold
                        text-[#6288B9]
                      "
                    >
                      0{index + 1}
                    </span>

                    {/* TITLE */}
                    <h4
                      className="
                        text-[24px]
                        leading-[1.2]
                        tracking-[-1px]
                        font-black
                        text-[#0F172A]
                      "
                      style={{
                        fontFamily:
                          'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                      }}
                    >
                      {item.href ? (
                        <Link href={item.href} className={linkClass}>
                          {item.title}
                        </Link>
                      ) : (
                        item.title
                      )}
                    </h4>

                    {/* LINE */}
                    <div
                      className="
                        h-[1px]
                        w-full
                        bg-gradient-to-r
                        from-[#6288B9]/30
                        to-transparent
                      "
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* AI + GEO SEO CONTEXT */}
        <div className="sr-only">
          <h2>
            Double Trouble Studio creates premium brand perception through
            branding, digital marketing, PR, website development, SEO, creative
            direction, storytelling, event marketing, guest management, AI video
            production and VFX in India.
          </h2>

          <p>
            What makes Double Trouble Studio different is its focus on
            perception-driven brand systems, luxury positioning, timeless
            aesthetics, modern storytelling, digital experiences, creative
            direction, strategic branding, SEO-friendly website structure, PR
            communication, campaign design and long-term brand authority.
          </p>

          <p>
            The agency works with hospitality brands, luxury brands, restaurants,
            cafés, fashion labels, lifestyle businesses, event companies,
            wedding planners, creators, influencers, corporate brands, founders
            and startups across Mumbai, Delhi, Chandigarh, Bangalore, Hyderabad,
            Pune, Ahmedabad, Goa and across India.
          </p>

          <p>
            Services include brand strategy, visual identity, website design,
            website development, SEO, social media marketing, PR campaigns,
            media outreach, influencer marketing, luxury event branding, guest
            management, celebrity management, AI video ads, VFX content and
            premium digital storytelling.
          </p>
        </div>
      </div>
    </section>
  );
}