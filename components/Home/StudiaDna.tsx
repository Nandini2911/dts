"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Layers3,
  LineChart,
} from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "Category Intelligence",
    desc: "Deep market research, competitor mapping, audience behaviour and category positioning before branding, PR, digital marketing or campaign execution begins.",
  },
  {
    icon: Layers3,
    title: "Signature Identity",
    desc: "Premium visual identity, brand communication and digital systems designed to feel recognisable across websites, social media, PR, events and campaigns.",
  },
  {
    icon: LineChart,
    title: "Long-Term Value",
    desc: "Brand architecture, SEO-ready systems and growth-focused marketing frameworks designed for sustainable visibility, leads and reputation.",
  },
];

export default function StudioDNA() {
  return (
    <section
      className="relative overflow-hidden py-20 bg-[#F7FAFC]"
      aria-label="Double Trouble Studio DNA for brand strategy, premium branding, digital marketing, PR, SEO and long-term brand growth"
    >
      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(49,80,122,0.08),transparent_30%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        {/* TOP */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DCE5F0] bg-white mb-6">
            <Sparkles
              className="w-4 h-4 text-[#31507A]"
              aria-hidden="true"
            />

            <span className="text-[10px] tracking-[2px] uppercase text-[#31507A] font-medium">
              The Double Trouble Studio DNA
            </span>
          </div>

          <h2
            className="
              text-[40px]
              md:text-[58px]
              leading-[1]
              tracking-[-3px]
              font-bold
              text-[#10213D]
            "
            style={{
              fontFamily:
                "New York, ui-serif, Georgia, serif",
            }}
          >
            Clarity
            <span className="text-[#6288B9]"> Over Chaos</span>
          </h2>

          <p className="mt-5 text-[15px] leading-[28px] text-slate-500 max-w-[650px]">
            We build brands with intention — where creative strategy, category
            research, premium brand identity, digital marketing, PR, SEO and
            execution work together to create long-term visibility and trust.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  rounded-[28px]
                  border
                  border-[#E4EBF3]
                  bg-white/90
                  p-7
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  hover:shadow-[0_15px_40px_rgba(15,23,42,0.05)]
                "
                aria-label={`${item.title} principle for Double Trouble Studio brand strategy and digital growth`}
              >
                {/* ICON */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-[#12375c]
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                >
                  <Icon
                    className="w-5 h-5 text-[#f7f8f9]"
                    aria-hidden="true"
                  />
                </div>

                <span className="text-[10px] uppercase tracking-[2px] text-slate-400">
                  Principle
                </span>

                <h3
                  className="
                    mt-3
                    text-[26px]
                    leading-[1.1]
                    tracking-[-1px]
                    font-bold
                    text-[#10213D]
                  "
                  style={{
                    fontFamily:
                      "New York, ui-serif, Georgia, serif",
                  }}
                >
                  {item.title}
                </h3>

                <p className="mt-4 text-[14px] leading-[26px] text-slate-500">
                  {item.desc}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM BOX */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            mt-10
            rounded-[30px]
            bg-[#10213D]
            px-8
            py-10
          "
        >
          <p
            className="
              text-[26px]
              md:text-[38px]
              leading-[1.15]
              tracking-[-2px]
              font-bold
              text-white
              max-w-4xl
            "
            style={{
              fontFamily:
                "New York, ui-serif, Georgia, serif",
            }}
          >
            This isn’t just marketing.
            <span className="text-[#A8BEDB]">
              {" "}
              It’s brand architecture for sustainable growth.
            </span>
          </p>
        </motion.div>

        {/* AI + GEO SEO CONTEXT */}
        <div className="sr-only">
          <h2>
            Double Trouble Studio builds premium brand architecture through
            brand strategy, creative direction, digital marketing, public
            relations, SEO, website development, event marketing, guest
            management, AI video production and VFX in India.
          </h2>

          <p>
            The studio DNA is built on category intelligence, signature identity
            and long-term value. Services include market research, audience
            behaviour analysis, competitor mapping, luxury brand positioning,
            visual identity design, brand communication, website strategy,
            social media marketing, PR campaigns, influencer marketing, SEO
            planning, performance marketing, event branding, guest experience
            design, AI video ads and VFX-led campaign assets.
          </p>

          <p>
            Double Trouble Studio works with hospitality brands, luxury brands,
            restaurants, cafés, fashion labels, lifestyle businesses, media
            companies, corporate brands, founders, creators, event companies and
            wedding brands across Mumbai, Delhi, Chandigarh, Bangalore,
            Hyderabad, Pune, Ahmedabad, Goa and across India.
          </p>
        </div>
      </div>
    </section>
  );
}