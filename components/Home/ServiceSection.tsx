"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

type ServiceFeature = {
  label: string;
  href?: string;
};

type Service = {
  title: string;
  href: string;
  tag?: string;
  price: string;
  desc: string;
  features: ServiceFeature[];
};

const services: Service[] = [
  {
    title: "Guest Management",
    href: "/services/guest-management",
    tag: "Popular",
    price: "Custom Pricing",
    desc: "From large-scale launches to intimate VIP gatherings, we manage every guest touchpoint so your team can focus on the experience and the brand.",
    features: [
      { label: "RSVP Tracking", href: "/blog/event-rsvp-management" },
      { label: "VIP Segmentation", href: "/blog/How-to-build-segment-high-profile-guest-list" },
      { label: "Entry Coordination", href: "/blog/on-site-guest-flow-registration-entry-seating-experience-mapping" },
      { label: "On-Ground Team", href: "/services/guest-management" },
    ],
  },
  {
    title: "Celebrity Management",
    href: "/services/celebrity-management",
    tag: "Popular",
    price: "Custom Pricing",
    desc: "We source, coordinate and manage the right talent for campaigns and events, protecting timelines, brand fit and the complete celebrity experience.",
    features: [
      { label: "Talent Sourcing", href: "/services/celebrity-management" },
      { label: "Date Locking", href: "/services/celebrity-management" },
      { label: "Briefing & Logistics", href: "/services/celebrity-management" },
      { label: "Contract Support", href: "/services/celebrity-management" },
    ],
  },
  {
    title: "Events & Weddings",
    href: "/services/events-weddings",
    price: "Custom Pricing",
    desc: "We turn ambitious concepts into seamless celebrations and brand experiences, aligning creative direction, production, vendors and guest journeys under one plan.",
    features: [
      { label: "Concept & Theme", href: "/services/events-weddings" },
      { label: "Vendors & Production", href: "/services/events-weddings" },
      { label: "Guest Journey", href: "/services/guest-management" },
      { label: "Show-Flow Execution", href: "/services/events-weddings" },
    ],
  },
  {
    title: "PR & Marketing",
    href: "/services/pr-media-marketing",
    tag: "Popular",
    price: "Custom Retainer",
    desc: "We build visibility and demand through clear brand narratives, media outreach, social campaigns and performance marketing that work as one growth system.",
    features: [
      { label: "Press & Features", href: "/services/pr-media-marketing" },
      { label: "Brand Narrative", href: "/services/pr-media-marketing" },
      { label: "Content Strategy", href: "/blog/content-strategy-brand-websites-blogs-galleries-lead-magnets" },
      { label: "Performance Ads", href: "/services/pr-media-marketing" },
    ],
  },
  {
    title: "Web Development & SEO",
    href: "/services/web-development-marketing",
    price: "Custom Pricing",
    desc: "We build fast, conversion-focused websites with strong SEO foundations so your brand is easier to discover, easier to trust and easier to contact.",
    features: [
      { label: "Next.js Websites", href: "/services/web-development-marketing" },
      { label: "UI/UX Design", href: "/blog/ui-ux-design-principles-for-high-end-brand-websites" },
      { label: "SEO Foundations", href: "/blog/technical-seo-foundations-speed-mobile-core-web-vitals" },
      { label: "Funnels & Tracking", href: "/blog/building-conversion-focused-marketing-funnels" },
    ],
  },
  {
    title: "AI Video & Video Editing",
    href: "/services/ai-video-vfx",
    price: "Custom Pricing",
    desc: "We create cinematic, platform-ready visual content that helps brands explain ideas faster, launch with impact and maintain a premium creative presence.",
    features: [
      { label: "AI Video Ads", href: "/blog/ai-video-ads-benefits-cost-use-cases" },
      { label: "Product Films", href: "/services/ai-video-vfx" },
      { label: "VFX Enhancements", href: "/services/ai-video-vfx" },
      { label: "Fast Turnarounds", href: "/services/ai-video-vfx" },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      className="relative overflow-hidden py-20 bg-[#EEF3F8]"
      aria-label="Double Trouble Studio services including guest management, celebrity management, events, PR, web development and AI video production in India"
    >
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
              <Sparkles
                className="w-4 h-4 text-[#6288B9]"
                aria-hidden="true"
              />

              <span
                className="
                  text-[11px]
                  uppercase
                  tracking-[2px]
                  font-medium
                  text-[#31507A]
                "
              >
                Our Creative Services
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
                fontFamily: "New York, ui-serif, Georgia, serif",
              }}
            >
              Services That
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
                Drive Real Growth
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
            Choose one specialist service or build an integrated growth system.
            Every engagement is shaped around a clear business outcome, defined
            scope and measurable next step.
          </p>
        </motion.div>

        {/* SERVICES */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7 mt-24">
          {services.map((service, index) => (
            <motion.article
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
              aria-label={`${service.title} service by Double Trouble Studio`}
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
                  fontFamily: "New York, ui-serif, Georgia, serif",
                }}
              >
                <Link
                  href={service.href}
                  aria-label={`${service.title} service`}
                  className="transition-colors hover:text-[#31507A]"
                >
                  {service.title}
                </Link>
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

              <div className="mt-7 inline-flex rounded-full border border-[#DCE5F0] bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[1.4px] text-[#31507A]">
                {service.price}
              </div>

              {/* FEATURES */}
              <div className="space-y-3 mt-8">
                {service.features.map((feature) => (
                  <div
                    key={feature.label}
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
                    {feature.href ? (
                      <Link
                        href={feature.href}
                        className="text-[14px] text-slate-700 font-medium transition-colors hover:text-[#10213D]"
                      >
                        {feature.label}
                      </Link>
                    ) : (
                      <span className="text-[14px] text-slate-700 font-medium">
                        {feature.label}
                      </span>
                    )}

                    <div className="w-2 h-2 rounded-full bg-[#6288B9]" />
                  </div>
                ))}
              </div>

              <Link
                href={service.href}
                aria-label={`${service.title} service by Double Trouble Studio`}
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
                  <ArrowUpRight
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}