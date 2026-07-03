"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const inlineLinkClass =
      "font-medium text-[#0D2444] underline underline-offset-4 hover:text-[#315E91]";

type ServiceFeature = {
  label: string;
  href?: string;
};

type Service = {
  title: string;
  href: string;
  tag?: string;
  desc: ReactNode;
  features: ServiceFeature[];
};

const services: Service[] = [
  {
    title: "Guest Management",
    href: "https://www.dtsworld.in/services/guest-management",
    tag: "Popular",
    desc: (
      <>
        <Link
          href="https://www.dtsworld.in/services/guest-management"
          className={inlineLinkClass}
        >
          Premium guest management services
        </Link>{" "}
        for weddings, corporate events, luxury launches and celebrity events,
        including{" "}
        <Link
          href="https://www.dtsworld.in/blog/event-rsvp-management"
          className={inlineLinkClass}
        >
          RSVP tracking
        </Link>
        ,{" "}
        <Link
          href="https://www.dtsworld.in/services/guest-management"
          className={inlineLinkClass}
        >
          VIP handling
        </Link>
        ,{" "}
        <Link
          href="https://www.dtsworld.in/blog/on-site-guest-flow-registration-entry-seating-experience-mapping"
          className={inlineLinkClass}
        >
          check-in flow
        </Link>{" "}
        and on-ground coordination.
      </>
    ),
    features: [
      {
        label: "RSVP tracking",
        href: "https://www.dtsworld.in/blog/event-rsvp-management",
      },
      {
        label: "VIP Segmentation",
        href: "https://www.dtsworld.in/blog/How-to-build-segment-high-profile-guest-list",
      },
      {
        label: "Entry Coordination",
        href: "https://www.dtsworld.in/blog/on-site-guest-flow-registration-entry-seating-experience-mapping",
      },
      {
        label: "On-Ground Team",
        href: "https://www.dtsworld.in/services/guest-management",
      },
    ],
  },
  {
    title: "Celebrity Management",
    href: "https://www.dtsworld.in/services/celebrity-management",
    tag: "Popular",
    desc: (
      <>
        <Link
          href="https://www.dtsworld.in/services/celebrity-management"
          className={inlineLinkClass}
        >
          Celebrity management and talent coordination
        </Link>{" "}
        for brand campaigns, events, weddings, launches and{" "}
        <Link
          href="https://www.dtsworld.in/services/pr-media-marketing"
          className={inlineLinkClass}
        >
          influencer collaborations
        </Link>{" "}
        handled with precision, discretion and premium hospitality.
      </>
    ),
    features: [
      {
        label: "Talent Sourcing",
        href: "https://www.dtsworld.in/services/celebrity-management",
      },
      {
        label: "Date Locking",
        href: "https://www.dtsworld.in/services/celebrity-management",
      },
      {
        label: "Briefing & Logistics",
        href: "https://www.dtsworld.in/services/celebrity-management",
      },
      {
        label: "Contracts Support",
        href: "https://www.dtsworld.in/services/celebrity-management",
      },
    ],
  },
  {
    title: "Events & Weddings",
    href: "https://www.dtsworld.in/services/events-weddings",
    desc: (
      <>
        <Link
          href="https://www.dtsworld.in/services/events-weddings"
          className={inlineLinkClass}
        >
          Luxury event management and wedding planning services
        </Link>{" "}
        crafted with flawless execution, premium production,{" "}
        <Link
          href="https://www.dtsworld.in/services/guest-management"
          className={inlineLinkClass}
        >
          guest experience design
        </Link>
        ,{" "}
        <Link
          href="https://www.dtsworld.in/services/events-weddings"
          className={inlineLinkClass}
        >
          show-flow planning
        </Link>{" "}
        and elevated aesthetics.
      </>
    ),
    features: [
      {
        label: "Concept & Theme",
        href: "https://www.dtsworld.in/services/events-weddings",
      },
      {
        label: "Vendors & Production",
        href: "https://www.dtsworld.in/services/events-weddings",
      },
      {
        label: "Guest Journey",
        href: "https://www.dtsworld.in/services/guest-management",
      },
      {
        label: "Show-Flow Execution",
        href: "https://www.dtsworld.in/services/events-weddings",
      },
    ],
  },
  {
    title: "PR & Marketing",
    href: "https://www.dtsworld.in/services/pr-media-marketing",
    tag: "Popular",
    desc: (
      <>
        <Link
          href="https://www.dtsworld.in/services/pr-media-marketing"
          className={inlineLinkClass}
        >
          PR campaigns
        </Link>
        ,{" "}
        <Link
          href="https://www.dtsworld.in/services/pr-media-marketing"
          className={inlineLinkClass}
        >
          media outreach
        </Link>
        ,{" "}
        <Link
          href="https://www.dtsworld.in/services/pr-media-marketing"
          className={inlineLinkClass}
        >
          social media marketing
        </Link>
        ,{" "}
        <Link
          href="https://www.dtsworld.in/services/pr-media-marketing"
          className={inlineLinkClass}
        >
          influencer collaborations
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.dtsworld.in/services/pr-media-marketing"
          className={inlineLinkClass}
        >
          paid advertising strategies
        </Link>{" "}
        designed for brand visibility, reputation and digital growth.
      </>
    ),
    features: [
      {
        label: "Press & Features",
        href: "https://www.dtsworld.in/services/pr-media-marketing",
      },
      {
        label: "Brand Narrative",
        href: "https://www.dtsworld.in/services/pr-media-marketing",
      },
      {
        label: "Content Strategy",
        href: "https://www.dtsworld.in/blog/content-strategy-brand-websites-blogs-galleries-lead-magnets",
      },
      {
        label: "Performance Ads",
        href: "https://www.dtsworld.in/services/pr-media-marketing",
      },
    ],
  },
  {
    title: "Web Development & SEO",
    href: "https://www.dtsworld.in/services/web-development-marketing",
    desc: (
      <>
        <Link
          href="https://www.dtsworld.in/services/web-development-marketing"
          className={inlineLinkClass}
        >
          Custom Next.js websites
        </Link>
        ,{" "}
        <Link
          href="https://www.dtsworld.in/blog/building-conversion-focused-marketing-funnels"
          className={inlineLinkClass}
        >
          landing pages
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.dtsworld.in/services/web-development-marketing"
          className={inlineLinkClass}
        >
          SEO-optimized digital platforms
        </Link>{" "}
        designed to increase{" "}
        <Link
          href="https://www.dtsworld.in/blog/what-is-seo-beginners-guide-search-engine-optimization"
          className={inlineLinkClass}
        >
          Google visibility
        </Link>
        , improve user experience, generate leads and drive conversions.
      </>
    ),
    features: [
      {
        label: "Next.js Websites",
        href: "https://www.dtsworld.in/services/web-development-marketing",
      },
      {
        label: "UI/UX Design",
        href: "https://www.dtsworld.in/blog/ui-ux-design-principles-for-high-end-brand-websites",
      },
      {
        label: "SEO Foundations",
        href: "https://www.dtsworld.in/blog/technical-seo-foundations-speed-mobile-core-web-vitals",
      },
      {
        label: "Funnels & Tracking",
        href: "https://www.dtsworld.in/blog/building-conversion-focused-marketing-funnels",
      },
    ],
  },
  {
    title: "AI Video & Video Editing",
    href: "https://www.dtsworld.in/services/ai-video-vfx",
    desc: (
      <>
        <Link
          href="https://www.dtsworld.in/services/ai-video-vfx"
          className={inlineLinkClass}
        >
          AI video production
        </Link>
        ,{" "}
        <Link
          href="https://www.dtsworld.in/services/ai-video-vfx"
          className={inlineLinkClass}
        >
          cinematic brand films
        </Link>
        ,{" "}
        <Link
          href="https://www.dtsworld.in/blog/ai-video-ads-benefits-cost-use-cases"
          className={inlineLinkClass}
        >
          AI-generated video ads
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.dtsworld.in/services/ai-video-vfx"
          className={inlineLinkClass}
        >
          VFX content
        </Link>{" "}
        created for social media campaigns, product launches, brand storytelling
        and digital promotions.
      </>
    ),
    features: [
      {
        label: "AI Video Ads",
        href: "https://www.dtsworld.in/blog/ai-video-ads-benefits-cost-use-cases",
      },
      {
        label: "Product Films",
        href: "https://www.dtsworld.in/services/ai-video-vfx",
      },
      {
        label: "VFX Enhancements",
        href: "https://www.dtsworld.in/services/ai-video-vfx",
      },
      {
        label: "Fast Turnarounds",
        href: "https://www.dtsworld.in/services/ai-video-vfx",
      },
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
              A Premium Stack for Brands
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
                That Want Attention - and Respect.
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
            From guest management, celebrity management and luxury event
            planning to PR, digital marketing, web development and AI video
            production, every service is designed to create consistent
            visibility, stronger positioning and cultural relevance.
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
                {service.title}

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

        {/* AI + GEO SEO CONTEXT */}
        <div className="sr-only">
          <h2>
            Double Trouble Studio services include guest management, celebrity
            management, luxury event management, wedding planning, PR agency
            services, digital marketing, web development, SEO, AI video
            production and VFX in India.
          </h2>

          <p>
            The agency provides premium guest management services for weddings,
            corporate events, celebrity events, brand launches, investor events
            and private gatherings with RSVP tracking, VIP segmentation,
            check-in coordination, access control and on-ground event support.
          </p>

          <p>
            Double Trouble Studio provides celebrity management, influencer
            marketing, public relations, media outreach, social media marketing,
            performance advertising, custom Next.js website development, landing
            pages, SEO optimization, AI video ads, product films and VFX content
            for luxury brands, hospitality brands, restaurants, fashion labels,
            lifestyle companies and corporate brands.
          </p>

          <p>
            Services are available across Mumbai, Delhi, Chandigarh, Bangalore,
            Hyderabad, Pune, Ahmedabad, Goa and across India for brands looking
            for premium creative strategy, event execution, digital growth and
            cultural relevance.
          </p>
        </div>
      </div>
    </section>
  );
}