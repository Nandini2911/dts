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

export default function AIVideoVFXFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "What is AI video production?",
      answer:
        "AI video production is the process of creating video content using artificial intelligence tools, creative direction, prompts, visual planning, editing and post-production. It can be used for brand films, product videos, CGI ads, reels, launch videos, event promos and digital campaigns.",
    },
    {
      question: "What are VFX services?",
      answer:
        "VFX services include visual effects, compositing, CGI-style elements, object removal, screen replacement, background enhancement, motion graphics, lighting effects, clean-up and cinematic post-production to make videos look more polished and campaign-ready.",
    },
    {
      question: "Does Double Trouble Studio provide AI video production services in India?",
      answer:
        "Yes. Double Trouble Studio provides AI video production and VFX services in India for brands, startups, events, hospitality businesses, fashion labels, luxury brands, product launches, music videos, real estate campaigns and digital marketing projects.",
    },
    {
      question: "Can AI videos be used for brand campaigns?",
      answer:
        "Yes. AI videos can be used for brand awareness campaigns, product launches, Instagram Reels, YouTube Shorts, paid ads, website hero videos, event teasers, hospitality promotions, fashion campaigns, luxury brand films and social media marketing.",
    },
    {
      question: "Do you create CGI advertising videos?",
      answer:
        "Yes. We create CGI-style advertising videos where products, brand elements or digital objects are placed in visually striking environments. CGI ads are useful for product launches, luxury campaigns, social media ads, brand announcements and scroll-stopping digital content.",
    },
    {
      question: "What type of AI videos can you create?",
      answer:
        "We can create AI product videos, CGI ads, AI fashion videos, hospitality launch videos, event teasers, brand films, music video visuals, real estate project videos, website hero videos, explainer videos, motion graphic videos and social media reels.",
    },
    {
      question: "Can you create videos for Instagram and YouTube?",
      answer:
        "Yes. We create platform-ready videos for Instagram Reels, YouTube Shorts, feed posts, paid ads, website sections, landing pages, presentations and event screens. Videos can be adapted into different sizes and formats based on where they will be used.",
    },
    {
      question: "What video formats do you deliver?",
      answer:
        "We can deliver videos in 9:16 for reels and shorts, 4:5 for social media feed, 1:1 for square posts and 16:9 for YouTube, websites, presentations, brand films and event screens. The final format depends on the campaign requirement.",
    },
    {
      question: "Do I need a script before starting an AI video project?",
      answer:
        "Not always. You can share your brand details, campaign goal, product or service information, reference style, required video format, CTA, deadline and usage platform. Based on this, we can help plan the script, visual direction, shot flow and final edit structure.",
    },
    {
      question: "Can AI video and VFX be used for product launches?",
      answer:
        "Yes. AI video and VFX are very useful for product launches because they help create premium product visuals, teaser videos, reveal films, CGI-style ads, announcement reels and campaign content that can build curiosity before and after the launch.",
    },
    {
      question: "How long does an AI video or VFX project take?",
      answer:
        "The timeline depends on the video length, number of scenes, creative complexity, AI visuals, CGI or VFX work, editing style, sound design, revisions and final output formats. Simple reels can be quicker, while detailed campaign films need more planning and production time.",
    },
    {
      question: "How much does AI video production cost in India?",
      answer:
        "The cost depends on the concept, video duration, number of scenes, AI visual requirements, CGI or VFX complexity, editing work, motion graphics, voiceover, music, revisions and final delivery formats. We first understand the requirement and then share a customized quotation.",
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
            AI Video Production{" "}
            <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              & VFX FAQs
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-[15px] font-medium leading-[1.8] text-slate-600 md:text-[17px]">
            Everything you need to know about AI video production, CGI ads, VFX,
            motion graphics, reels, launch videos, output formats and digital
            campaign usage.
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