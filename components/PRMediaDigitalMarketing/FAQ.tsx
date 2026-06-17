"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

type FaqItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "What is PR, media and digital marketing?",
      answer:
        "PR, media and digital marketing is an integrated communication approach that helps brands build visibility, credibility and audience engagement through public relations, media coverage, social media marketing, influencer campaigns, SEO, paid ads, content strategy and online reputation management.",
    },
    {
      question: "What does a PR and digital marketing agency do?",
      answer:
        "A PR and digital marketing agency helps brands plan their communication, manage media visibility, create digital campaigns, improve social media presence, increase search visibility, collaborate with influencers, run paid ads and build a strong online reputation.",
    },
    {
      question: "Does Double Trouble Studio provide PR services in India?",
      answer:
        "Yes. Double Trouble Studio provides PR services in India for brands, businesses, startups, hospitality companies, luxury brands, events, public personalities and growing organizations. Our services include PR strategy, media relations, press release writing, event PR, corporate PR and reputation communication.",
    },
    {
      question: "Can PR and digital marketing work together?",
      answer:
        "Yes. PR builds credibility through media coverage and public communication, while digital marketing improves reach, visibility, engagement, website traffic and lead generation. When PR and digital marketing work together, the brand message becomes stronger across both media and online platforms.",
    },
    {
      question: "What digital marketing services do you offer?",
      answer:
        "We offer social media marketing, SEO, paid ads, content marketing, influencer marketing, online reputation management, campaign strategy, website and landing page content, email marketing and WhatsApp campaign communication based on the brand goal.",
    },
    {
      question: "Do you manage social media marketing?",
      answer:
        "Yes. We manage social media marketing through content planning, creative direction, reels, captions, campaign ideas, posting strategy, platform growth, engagement planning and performance review for brands across Instagram, Facebook, LinkedIn, YouTube and other platforms.",
    },
    {
      question: "Do you provide influencer marketing services?",
      answer:
        "Yes. We help brands collaborate with influencers, creators and digital personalities for product launches, hospitality promotions, event campaigns, lifestyle content, brand awareness and audience engagement. We also support creator shortlisting, communication, campaign briefing and execution planning.",
    },
    {
      question: "Can you manage PR for events and launches?",
      answer:
        "Yes. We manage PR for events, brand launches, product launches, hospitality launches, luxury experiences, corporate events and public campaigns. This can include media invites, press notes, influencer attendance, pre-event buzz, post-event coverage and digital promotion.",
    },
    {
      question: "Do you provide SEO and paid advertising?",
      answer:
        "Yes. We provide SEO strategy, SEO content, service page planning, local SEO, Google Business Profile recommendations, Meta Ads, Google Ads, YouTube campaigns and paid promotion strategy to support search visibility, traffic, inquiries and lead generation.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work with hospitality brands, restaurants, cafes, luxury labels, lifestyle brands, events, entertainment companies, startups, corporate organizations, beauty and wellness businesses, real estate brands, automotive companies, public personalities and creators.",
    },
    {
      question: "How do we start a PR or digital marketing campaign?",
      answer:
        "To start a PR or digital marketing campaign, we usually need your brand details, business goals, target audience, website or social links, campaign objective, creative assets, timeline, budget range and expected outcomes. After understanding the requirement, we create a strategy based on your goal.",
    },
    {
      question: "How much do PR and digital marketing services cost?",
      answer:
        "The cost depends on the scope of work, campaign duration, number of platforms, PR requirement, media outreach, content volume, influencer involvement, SEO work, paid ad budget and reporting needs. We usually understand the brand requirement first and then share a customized plan and quotation.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#F5F7FB] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(98,136,185,0.1),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(13,36,68,0.08),transparent_30%)]" />
      <div className="absolute left-[-180px] top-[-160px] h-[380px] w-[380px] rounded-full bg-[#6288B9]/10 blur-3xl" />
      <div className="absolute right-[-220px] bottom-[-180px] h-[460px] w-[460px] rounded-full bg-[#0D2444]/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1100px]">
        {/* TOP */}
        <div className="mx-auto max-w-[780px] text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)] backdrop-blur-xl sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.24em]">
            Frequently Asked Questions
          </span>

          <h2
            className="mx-auto mt-6 max-w-[820px] text-[34px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#071120] sm:text-[42px] md:text-[52px] lg:text-[60px]"
            style={serifFont}
          >
            PR, Media & Digital{" "}
            <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              Marketing FAQs
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-[15px] font-medium leading-[1.8] text-slate-600 md:text-[17px]">
            Everything you need to know about PR services, media coverage,
            social media marketing, influencer campaigns, SEO, paid ads and
            digital brand communication.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="mt-12 space-y-4 md:mt-16">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="group rounded-[22px] border border-[#DCE6F3] bg-white p-5 shadow-[0_12px_38px_rgba(13,36,68,0.04)] transition-all duration-500 hover:border-[#BCD2EE] hover:shadow-[0_18px_55px_rgba(13,36,68,0.08)] sm:rounded-[28px] sm:p-7"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-5 text-left"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-[17px] font-semibold leading-[1.45] text-[#071120] sm:text-[20px]">
                    {item.question}
                  </h3>

                  <div
                    className={`flex h-11 min-w-11 items-center justify-center rounded-2xl transition-all duration-500 sm:h-[46px] sm:min-w-[46px] ${
                      isOpen ? "rotate-180 bg-[#0D2444]" : "bg-[#EEF4FB]"
                    }`}
                  >
                    <Plus
                      className={`h-5 w-5 transition-all duration-500 ${
                        isOpen ? "rotate-45 text-white" : "text-[#0D2444]"
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "mt-5 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pr-2 text-[14px] font-medium leading-[1.9] text-slate-600 sm:pr-8 sm:text-[15px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}