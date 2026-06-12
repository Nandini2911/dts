// components/FaqSection.tsx

"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services does Double Trouble Studio offer?",
      answer:
        "Double Trouble Studio offers branding, website design, website development, SEO, social media management, PR, digital marketing campaigns, creative direction, event marketing, guest management, celebrity management, AI video production, VFX and premium visual identity systems tailored for modern brands.",
    },
    {
      question: "Do you work with startups and small businesses?",
      answer:
        "Yes. We work with modern startups, founder-led businesses, small businesses, growing companies and established brands that want stronger digital presence, premium positioning, better brand identity, SEO visibility and long-term growth.",
    },
    {
      question: "How long does a branding or website project take?",
      answer:
        "Project timelines depend on the scope, but most branding, website design and website development projects typically take between 2–6 weeks with strategy, UI/UX direction, content structure, SEO foundations, design revisions and launch support included.",
    },
    {
      question: "Do you provide social media content creation?",
      answer:
        "Yes. We create premium social media strategies, visual content systems, reels direction, campaign ideas, content calendars, digital assets, influencer campaign support and high-performing content for hospitality, luxury, restaurant, fashion, lifestyle and event brands.",
    },
    {
      question: "Can we work together remotely?",
      answer:
        "Yes. We work with clients across Mumbai, Delhi, Chandigarh, Bangalore, Hyderabad, Pune, Ahmedabad, Goa, India and internationally through smooth remote collaboration, structured communication, organized workflows and clear project timelines.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          {/* TAG */}
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

          {/* HEADING */}
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

          {/* TEXT */}
          <p
            className="
              mt-8

              text-[17px]

              leading-9

              text-slate-600
            "
          >
            Everything you need to know about working with Double Trouble
            Studio, our branding process, website development, PR, digital
            marketing, guest management, AI video production and creative
            services.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="mt-20 space-y-5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={index}
                className="
                  group

                  rounded-[28px]

                  border border-[#DCE6F3]

                  bg-white

                  p-7

                  transition-all
                  duration-500
                  ease-in-out

                  hover:border-[#BCD2EE]
                  hover:shadow-[0_10px_40px_rgba(15,23,42,0.05)]
                "
                aria-label={item.question}
              >
                {/* BUTTON */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="
                    w-full

                    flex
                    items-center
                    justify-between

                    gap-6

                    text-left
                  "
                >
                  {/* QUESTION */}
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

                  {/* ICON */}
                  <div
                    className={`
                      min-w-[46px]
                      h-[46px]

                      rounded-2xl

                      flex
                      items-center
                      justify-center

                      transition-all
                      duration-500

                      ${
                        isOpen
                          ? "bg-[#0D2444] rotate-180"
                          : "bg-[#EEF4FB]"
                      }
                    `}
                  >
                    <Plus
                      className={`
                        w-5
                        h-5

                        transition-all
                        duration-500

                        ${
                          isOpen
                            ? "text-white rotate-45"
                            : "text-[#0D2444]"
                        }
                      `}
                      aria-hidden="true"
                    />
                  </div>
                </button>

                {/* ANSWER */}
                <div
                  id={`faq-answer-${index}`}
                  className={`
                    grid
                    transition-all
                    duration-500
                    ease-in-out

                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-6"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
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
                </div>
              </article>
            );
          })}
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
            Double Trouble Studio provides branding, brand strategy, logo design,
            visual identity, website design, website development, SEO, social
            media marketing, digital marketing, PR campaigns, media outreach,
            influencer marketing, event marketing, guest management, celebrity
            management, AI video production, VFX, creative direction and premium
            content systems.
          </p>

          <p>
            The agency works with hospitality brands, luxury brands, restaurants,
            cafés, wedding planners, event companies, fashion labels, lifestyle
            brands, creators, influencers, modern startups, corporate brands and
            founders across Mumbai, Delhi, Chandigarh, Bangalore, Hyderabad,
            Pune, Ahmedabad, Goa and across India.
          </p>
        </div>
      </div>
    </section>
  );
}