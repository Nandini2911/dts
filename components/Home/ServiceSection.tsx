"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Guest Management",
    tag: "Popular",
    desc: "Guest entry, RSVP tracking and VIP coordination designed with premium execution.",
    features: [
      "RSVP System",
      "VIP Segmentation",
      "Entry Coordination",
      "On-Ground Team",
    ],
  },
  {
    title: "Celebrity Management",
    tag: "Popular",
    desc: "Celebrity coordination handled with precision, discretion and luxury experience.",
    features: [
      "Talent Sourcing",
      "Date Locking",
      "Briefing & Logistics",
      "Contracts Support",
    ],
  },
  {
    title: "Events & Weddings",
    desc: "Luxury experiences crafted with flawless execution, flow and elevated aesthetics.",
    features: [
      "Concept & Theme",
      "Vendors & Production",
      "Guest Journey",
      "Show-Flow Execution",
    ],
  },
  {
    title: "PR & Marketing",
    tag: "Popular",
    desc: "Narratives and digital growth systems designed for authority and attention.",
    features: [
      "Press & Features",
      "Brand Narrative",
      "Content Strategy",
      "Performance Ads",
    ],
  },
  {
    title: "Web Development",
    desc: "Modern websites and premium digital systems built for growth and conversion.",
    features: [
      "Next.js Websites",
      "UI/UX Design",
      "SEO Foundations",
      "Funnels & Tracking",
    ],
  },
  {
    title: "AI Video & VFX",
    desc: "Cinematic AI visuals and premium campaigns designed to stop scrolling instantly.",
    features: [
      "AI Video Ads",
      "Product Films",
      "VFX Enhancements",
      "Fast Turnarounds",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden py-32 bg-[#EEF3F8]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(49,80,122,0.18),transparent_30%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,33,61,0.10),transparent_30%)]" />

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
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10"
        >
          <div>
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
                bg-white/60
                backdrop-blur-xl
                mb-8
              "
            >
              <Sparkles className="w-4 h-4 text-[#6288B9]" />

              <span
                className="
                  text-[11px]
                  uppercase
                  tracking-[2px]
                  font-medium
                  text-[#31507A]
                "
              >
                Our Services
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                text-[40px]
                md:text-[58px]
                leading-[1]
                tracking-[-3px]
                font-bold
                text-[#10213D]
                  max-w-[580px]
              "
              style={{
                fontFamily:
                  "New York, ui-serif, Georgia, serif",
              }}
            >
             A premium stack for brands 
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
              that want attention - and respect.
              </span>
            </h2>
          </div>

          {/* SIDE TEXT */}
          <p
            className="
              max-w-[420px]
              text-[17px]
              leading-[34px]
              text-slate-500
            "
          >
            Every service is designed to work together —
            creating a premium brand experience with
            consistency, visibility and cultural relevance.
          </p>
        </motion.div>

        {/* SERVICES */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7 mt-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
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
                rounded-[36px]
                border
                border-[#D9E4F2]
                bg-[linear-gradient(180deg,#ffffff_0%,#F7FAFD_100%)]
                p-8
                shadow-[0_15px_50px_rgba(15,23,42,0.05)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_25px_70px_rgba(15,23,42,0.08)]
              "
            >
              {/* TOP GLOW */}
              <div
                className="
                  absolute
                  top-[-120px]
                  right-[-100px]
                  w-[240px]
                  h-[240px]
                  rounded-full
                  bg-[#6288B9]/10
                  blur-3xl
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* DARK TOP STRIP */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-[20px]
                  bg-gradient-to-r
                  from-[#10213D]
                  via-[#31507A]
                  to-[#6288B9]
                "
              />

              {/* TAG */}
              {service.tag && (
                <div
                  className="
                    inline-flex
                    items-center
                    px-4
                    py-2
                    rounded-full
                    bg-[#10213D]
                    text-white
                    text-[10px]
                    uppercase
                    tracking-[2px]
                    font-medium
                  "
                >
                  {service.tag}
                </div>
              )}

              {/* TITLE */}
              <h3
                className="
                  mt-6
                  text-[34px]
                  leading-[1]
                  tracking-[-2px]
                  font-bold
                  text-[#10213D]
                "
                style={{
                  fontFamily:
                    "New York, ui-serif, Georgia, serif",
                }}
              >
                {service.title}
              </h3>

              {/* DESC */}
              <p
                className="
                  mt-5
                  text-[15px]
                  leading-8
                  text-slate-500
                "
              >
                {service.desc}
              </p>

              {/* FEATURES */}
              <div className="space-y-3 mt-8">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="
                      flex
                      items-center
                      justify-between
                      px-4
                      py-3
                      rounded-2xl
                      bg-white/80
                      border
                      border-[#E6EDF6]
                      backdrop-blur-xl
                    "
                  >
                    <span className="text-[14px] text-slate-700 font-medium">
                      {feature}
                    </span>

                    <div className="w-2 h-2 rounded-full bg-[#6288B9]" />
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <button
                className="
                  mt-8
                  flex
                  items-center
                  gap-3
                  text-[14px]
                  font-semibold
                  text-[#10213D]
                "
              >
                Learn More

                <div
                  className="
                    w-[44px]
                    h-[44px]
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
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}