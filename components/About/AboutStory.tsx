"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const linkClass =
  "font-medium text-[#0D2444] underline underline-offset-4 hover:text-[#315E91]";

const principles = [
  {
    key: "strategic-thinking",
    title:"strategic thinking", 
    titleText: "Strategic Thinking",
    desc: (
      <>
        Every creative decision is backed by brand positioning,{" "}
        <Link href="https://www.dtsworld.in/about" className={linkClass}>
          audience research
        </Link>
        , category understanding,{" "}
        <Link
          href="https://www.dtsworld.in/blog/on-page-seo-checklist-for-higher-rankings"
          className={linkClass}
        >
          SEO intent
        </Link>{" "}
        and long-term digital growth direction.
      </>
    ),
  },
{
  key: "premium-execution",
  title: "Premium Execution",
  titleText: "Premium Execution",
  desc: (
    <>
      From brand visuals to{" "}
      <Link
        href="https://www.dtsworld.in/services/web-development-marketing"
        className={linkClass}
      >
        websites
      </Link>
      ,{" "}
      <Link
        href="https://www.dtsworld.in/services/pr-media-marketing"
        className={linkClass}
      >
        PR communication
      </Link>
      ,{" "}
      <Link
        href="https://www.dtsworld.in/services/pr-media-marketing"
        className={linkClass}
      >
        social media content
      </Link>{" "}
      and{" "}
      <Link
        href="https://www.dtsworld.in/services/pr-media-marketing"
        className={linkClass}
      >
        digital campaigns
      </Link>
      , every detail is refined to feel elevated, modern and intentional.
    </>
  ),
},
  {
    key: "cultural-relevance",
    title: "Cultural Relevance",
    titleText: "Cultural Relevance",
    desc: "We build brands that connect emotionally with modern audiences across websites, social media, PR, events, digital platforms and premium brand touchpoints.",
  },
];

export default function AboutStory() {
  return (
    <section
      className="relative overflow-hidden bg-[#F8FAFC] py-[70px]"
      aria-label="Double Trouble Studio philosophy for brand strategy, premium execution, cultural relevance and digital growth"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#F8FAFC]" />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#0D2444_1px,transparent_1px),linear-gradient(to_bottom,#0D2444_1px,transparent_1px)]
          [background-size:90px_90px]
        "
      />

      {/* GLOW */}
      <div className="absolute top-[-200px] left-[-120px] w-[520px] h-[520px] rounded-full bg-[#6288B9]/20 blur-3xl" />

      <div className="absolute bottom-[-220px] right-[-100px] w-[520px] h-[520px] rounded-full bg-[#A4B8D2]/20 blur-3xl" />

      <div className="relative z-10 max-w-[1450px] mx-auto px-5">
        {/* TOP CONTENT */}
        <div className="max-w-[900px]">
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
                Our Brand Philosophy
              </span>
            </div>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
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
            <span className="text-[#0F172A]">Clarity</span>

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
              {" "}
              Over Chaos
            </span>
          </motion.h2>

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="
              mt-5
              text-[17px]
              md:text-[18px]
              leading-[2]
              text-slate-500
              max-w-[760px]
            "
          >
            We believe modern brands are built through intentional design,
            strategic clarity,{" "}
            <Link
              href="https://www.dtsworld.in/blog/luxury-brand-strategy-roadmap-india"
              className={linkClass}
            >
              premium brand positioning
            </Link>
            ,{" "}
            <Link
              href="https://www.dtsworld.in/services/pr-media-marketing"
              className={linkClass}
            >
              digital marketing intelligence
            </Link>
            ,{" "}
            <Link
              href="https://www.dtsworld.in/services/web-development-marketing"
              className={linkClass}
            >
              SEO-ready structure
            </Link>{" "}
            and{" "}
            <Link href="https://www.dtsworld.in/about" className={linkClass}>
              emotional storytelling
            </Link>{" "}
            — not noise, trends or temporary attention.
          </motion.p>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-3 gap-7 mt-15">
          {principles.map((item, index) => (
            <motion.article
              key={item.key}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group relative"
              aria-label={`${item.titleText} principle by Double Trouble Studio`}
            >
              {/* OUTER GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-[38px]
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-700
                  bg-gradient-to-br
                  from-[#6288B9]/30
                  via-transparent
                  to-[#A4B8D2]/30
                  blur-xl
                "
              />

              {/* CARD */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[38px]
                  border
                  border-white/50
                  bg-white/70
                  backdrop-blur-2xl
                  p-5
                  h-full
                  transition-all
                  duration-500
                  shadow-[0_20px_80px_rgba(15,23,42,0.06)]
                  hover:shadow-[0_25px_100px_rgba(98,136,185,0.16)]
                "
              >
                {/* TOP GRADIENT */}
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    h-[5px]
                    w-0
                    bg-gradient-to-r
                    from-[#0D2444]
                    via-[#6288B9]
                    to-[#A4B8D2]
                    transition-all
                    duration-700
                    group-hover:w-full
                  "
                />

                {/* LIGHT */}
                <div
                  className="
                    absolute
                    top-[-60px]
                    right-[-40px]
                    w-[180px]
                    h-[180px]
                    rounded-full
                    bg-[#6288B9]/20
                    blur-3xl
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-700
                  "
                />

                {/* NUMBER */}
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.05,
                  }}
                  className="
                    w-[58px]
                    h-[58px]
                    rounded-[18px]
                    flex
                    items-center
                    justify-center
                    bg-gradient-to-br
                    from-[#0D2444]
                    via-[#6288B9]
                    to-[#A4B8D2]
                    shadow-[0_8px_30px_rgba(98,136,185,0.22)]
                  "
                >
                  <span
                    className="
                      text-white
                      text-[24px]
                      font-black
                    "
                    style={{
                      fontFamily:
                        'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                    }}
                  >
                    0{index + 1}
                  </span>
                </motion.div>

                {/* TITLE */}
                <h3
                  className="
                    mt-10
                    text-[24px]
                    md:text-[25px]
                    leading-[1]
                    tracking-[-2px]
                    font-black
                    text-[#0F172A]
                    transition-all
                    duration-500
                    group-hover:text-[#0D2444]
                  "
                  style={{
                    fontFamily:
                      'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
                  }}
                >
                  {item.title}
                </h3>

                {/* DESC */}
                <p
                  className="
                    mt-7
                    text-[16px]
                    leading-[2]
                    text-slate-500
                  "
                >
                  {item.desc}
                </p>

                {/* BOTTOM */}
                <div
                  className="
                    mt-10
                    flex
                    items-center
                    justify-between
                  "
                >
                  <div
                    className="
                      h-[1px]
                      flex-1
                      bg-gradient-to-r
                      from-[#6288B9]/30
                      to-transparent
                    "
                  />

                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      ml-5
                      w-3
                      h-3
                      rounded-full
                      bg-[#6288B9]
                    "
                  />
                </div>

                {/* HOVER OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-700
                    bg-gradient-to-br
                    from-white/10
                    via-transparent
                    to-[#6288B9]/5
                    pointer-events-none
                  "
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* AI + GEO SEO CONTEXT */}
        <div className="sr-only">
          <h2>
            Double Trouble Studio philosophy is built on strategic thinking,
            premium execution and cultural relevance for modern branding,
            digital marketing, PR, website development, SEO, guest management,
            event marketing, AI video production and VFX in India.
          </h2>

          <p>
            The agency builds brands through brand strategy, audience research,
            market positioning, luxury brand positioning, visual identity,
            website design, website development, SEO foundations, social media
            marketing, public relations, media campaigns, event branding, guest
            management, celebrity management, influencer marketing, AI video
            production, VFX and premium content systems.
          </p>

          <p>
            Double Trouble Studio works with hospitality brands, luxury brands,
            restaurants, cafés, fashion labels, lifestyle businesses, wedding
            planners, event companies, creators, influencers, corporate brands,
            founders and modern startups across Mumbai, Delhi, Chandigarh,
            Bangalore, Hyderabad, Pune, Ahmedabad, Goa and across India.
          </p>

          <p>
            The studio helps businesses build clarity, digital presence, brand
            authority, SEO visibility, premium positioning, cultural relevance,
            long-term growth and emotional connection with modern audiences.
          </p>
        </div>
      </div>
    </section>
  );
}