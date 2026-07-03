// components/FaqSection.tsx

"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

const inlineLinkClass =
  "font-semibold text-[#0D2444] underline underline-offset-4 decoration-[#6288B9]/40 hover:decoration-[#0D2444] transition-colors";

type FAQItem = {
  question: ReactNode;
  answer: ReactNode;
};

export default function FaqSection() {
  const faqs: FAQItem[] = [
    {
      question: "What services does Double Trouble Studio offer?",
      answer: (
        <>
          Double Trouble Studio offers branding,{" "}
          <Link
            href="https://www.dtsworld.in/services/web-development-marketing"
            className={inlineLinkClass}
          >
            website design
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/web-development-marketing"
            className={inlineLinkClass}
          >
            website development
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/blog/what-is-seo-beginners-guide-search-engine-optimization"
            className={inlineLinkClass}
          >
            SEO
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/pr-media-marketing"
            className={inlineLinkClass}
          >
            social media management
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/pr-media-marketing"
            className={inlineLinkClass}
          >
            PR
          </Link>
          , digital marketing campaigns, creative direction,{" "}
          <Link
            href="https://www.dtsworld.in/services/events-weddings"
            className={inlineLinkClass}
          >
            event marketing
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/guest-management"
            className={inlineLinkClass}
          >
            guest management
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/celebrity-management"
            className={inlineLinkClass}
          >
            celebrity management
          </Link>
          ,{" "}
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
            VFX
          </Link>{" "}
          and premium visual identity systems tailored for modern brands.
        </>
      ),
    },
    {
      question: (
        <>
          Do you work with{" "}
          <Link
            href="https://www.dtsworld.in/blog/building-conversion-focused-marketing-funnels"
            className="transition-colors hover:text-[#0D2444]"
          >
            startups
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.dtsworld.in/blog/ai-automation-for-small-medium-businesses"
            className="transition-colors hover:text-[#0D2444]"
          >
            small businesses
          </Link>
          ?
        </>
      ),
      answer: (
        <>
          Yes. We work with modern{" "}
          <Link
            href="https://www.dtsworld.in/blog/building-conversion-focused-marketing-funnels"
            className={inlineLinkClass}
          >
            startups
          </Link>
          , founder-led businesses,{" "}
          <Link
            href="https://www.dtsworld.in/blog/ai-automation-for-small-medium-businesses"
            className={inlineLinkClass}
          >
            small businesses
          </Link>
          , growing companies and established brands that want stronger digital
          presence, premium positioning, better brand identity,{" "}
          <Link
            href="https://www.dtsworld.in/blog/on-page-seo-checklist-for-higher-rankings"
            className={inlineLinkClass}
          >
            SEO visibility
          </Link>{" "}
          and long-term growth.
        </>
      ),
    },
    {
      question: "How long does a branding or website project take?",
      answer: (
        <>
          Project timelines depend on the scope, but most branding,{" "}
          <Link
            href="https://www.dtsworld.in/services/web-development-marketing"
            className={inlineLinkClass}
          >
            website design
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.dtsworld.in/services/web-development-marketing"
            className={inlineLinkClass}
          >
            website development
          </Link>{" "}
          projects typically take between 2–6 weeks with strategy,{" "}
          <Link
            href="https://www.dtsworld.in/blog/ui-ux-design-principles-for-high-end-brand-websites"
            className={inlineLinkClass}
          >
            UI/UX direction
          </Link>
          , content structure,{" "}
          <Link
            href="https://www.dtsworld.in/blog/technical-seo-foundations-speed-mobile-core-web-vitals"
            className={inlineLinkClass}
          >
            SEO foundations
          </Link>
          , design revisions and launch support included.
        </>
      ),
    },
    {
      question: "Do you provide social media content creation?",
      answer: (
        <>
          Yes. We create premium social media strategies, visual content
          systems, reels direction, campaign ideas,{" "}
          <Link
            href="https://www.dtsworld.in/blog/content-strategy-brand-websites-blogs-galleries-lead-magnets"
            className={inlineLinkClass}
          >
            content calendars
          </Link>
          , digital assets, influencer campaign support and high-performing
          content for hospitality, luxury, restaurant, fashion, lifestyle and
          event brands.
        </>
      ),
    },
    {
      question: "Can we work together remotely?",
      answer: (
        <>
          Yes. We work with clients across{" "}
          <Link
            href="https://www.dtsworld.in/locations"
            className={inlineLinkClass}
          >
            Mumbai, Delhi, Chandigarh, Bangalore, Hyderabad, Pune, Ahmedabad,
            Goa, India
          </Link>{" "}
          and internationally through smooth remote collaboration, structured
          communication, organized workflows and clear project timelines.
        </>
      ),
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-20 bg-[#F5F7FB]"
      aria-label="Frequently asked questions about Double Trouble Studio branding, digital marketing, PR, website development and creative services"
    >
      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(98,136,185,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(143,181,232,0.08),transparent_28%)]" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        {/* TOP */}
        <div className="text-center max-w-[760px] mx-auto">
          <span
            className="
              inline-flex
              items-center
              gap-3
              text-[#6288B9]
              uppercase
              tracking-[4px]
              text-[11px]
              font-semibold
            "
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#6288B9]" />
            Frequently Asked Questions
          </span>

          <h2
            className="
              mt-7
              text-[42px]
              md:text-[60px]
              leading-[1]
              tracking-[-3px]
              font-semibold
              text-[#071120]
            "
            style={{
              fontFamily:
                'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
            }}
          >
            Answers to common
            <span className="block bg-gradient-to-r from-[#0D2444] to-[#6288B9] bg-clip-text text-transparent">
              questions we get
            </span>
          </h2>

          <p
            className="
              mt-8
              text-[17px]
              leading-9
              text-slate-600
            "
          >
            Everything you need to know about working with Double Trouble
            Studio, our branding process,{" "}
            <Link
              href="https://www.dtsworld.in/services/web-development-marketing"
              className={inlineLinkClass}
            >
              website development
            </Link>
            ,{" "}
            <Link
              href="https://www.dtsworld.in/services/pr-media-marketing"
              className={inlineLinkClass}
            >
              PR
            </Link>
            , digital marketing,{" "}
            <Link
              href="https://www.dtsworld.in/services/guest-management"
              className={inlineLinkClass}
            >
              guest management
            </Link>
            ,{" "}
            <Link
              href="https://www.dtsworld.in/services/ai-video-vfx"
              className={inlineLinkClass}
            >
              AI video production
            </Link>{" "}
            and creative services.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="mt-20 space-y-5">
          {faqs.map((item, index) => (
            <article
              key={index}
              className="
                rounded-[28px]
                border border-[#DCE6F3]
                bg-white
                p-7
                hover:border-[#BCD2EE]
                hover:shadow-[0_10px_40px_rgba(15,23,42,0.05)]
                transition-all
                duration-300
              "
              aria-label={
                typeof item.question === "string"
                  ? item.question
                  : `FAQ item ${index + 1}`
              }
            >
              {/* QUESTION */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-6
                "
              >
                <h3
                  className="
                    text-[20px]
                    leading-[1.5]
                    font-semibold
                    text-[#071120]
                    font-[family:var(--font-sora)]
                  "
                >
                  {item.question}
                </h3>

                <div
                  className="
                    min-w-[46px]
                    h-[46px]
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    bg-[#EEF4FB]
                  "
                >
                  <Plus
                    className="
                      w-5
                      h-5
                      text-[#0D2444]
                    "
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* ANSWER - ALWAYS VISIBLE */}
              <div className="mt-6">
                <p
                  className="
                    text-[15px]
                    leading-8
                    text-slate-600
                    pr-8
                  "
                >
                  {item.answer}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* AI + GEO SEO CONTEXT */}
        <div className="sr-only">
          <h2>
            Frequently asked questions about Double Trouble Studio, a creative
            branding agency, digital marketing agency, PR agency, website
            development company, guest management agency and AI video production
            studio in India.
          </h2>

          <p>
            Double Trouble Studio provides branding, brand strategy, logo
            design, visual identity, website design, website development, SEO,
            social media marketing, digital marketing, PR campaigns, media
            outreach, influencer marketing, event marketing, guest management,
            celebrity management, AI video production, VFX, creative direction
            and premium content systems.
          </p>

          <p>
            The agency works with hospitality brands, luxury brands,
            restaurants, cafés, wedding planners, event companies, fashion
            labels, lifestyle brands, creators, influencers, modern startups,
            corporate brands and founders across Mumbai, Delhi, Chandigarh,
            Bangalore, Hyderabad, Pune, Ahmedabad, Goa and across India.
          </p>
        </div>
      </div>
    </section>
  );
}