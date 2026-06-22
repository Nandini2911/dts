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
        "AI video production is the process of creating video content using artificial intelligence, creative direction, scripting, visual prompts, scene planning and professional post-production. It can be used for commercials, product videos, brand films, social media campaigns, explainers, launch videos and website content.",
    },
    {
      question: "What does professional video editing include?",
      answer:
        "Professional video editing includes selecting and arranging footage, removing unwanted sections, improving pacing, adding transitions, motion graphics, subtitles, music, sound effects, colour correction, audio enhancement and exporting the final video in the required format.",
    },
    {
      question:
        "Does Double Trouble Studio provide AI video and video editing services in India?",
      answer:
        "Yes. Double Trouble Studio provides AI video production and professional video editing services for brands, startups, restaurants, hospitality businesses, fashion labels, luxury brands, real estate companies, events, creators and businesses across India.",
    },
    {
      question: "What types of AI videos can you create?",
      answer:
        "We can create AI commercial videos, product launch films, product demonstrations, brand films, fashion videos, hospitality promotions, real estate videos, event teasers, service explainers, website hero videos, Instagram Reels and YouTube Shorts.",
    },
    {
      question: "What types of videos can you professionally edit?",
      answer:
        "We edit Instagram Reels, YouTube Shorts, advertisements, brand films, product videos, interviews, podcasts, corporate videos, event highlights, aftermovies, music videos, educational content, founder videos and long-form YouTube content.",
    },
    {
      question: "Can you combine AI-generated visuals with my existing footage?",
      answer:
        "Yes. We can combine AI-generated scenes with your product photographs, recorded footage, interviews, event clips, screen recordings, logos and other brand assets. The final edit can include transitions, motion graphics, text, music, colour correction and sound design.",
    },
    {
      question: "Can you edit videos for Instagram, YouTube and websites?",
      answer:
        "Yes. We create and edit videos for Instagram Reels, YouTube Shorts, YouTube videos, social media advertisements, websites, landing pages, presentations and event screens. Each video can be adapted according to the platform, duration and audience.",
    },
    {
      question: "What video formats do you deliver?",
      answer:
        "We can deliver videos in 9:16 for Reels, Shorts and Stories, 4:5 for social media feeds, 1:1 for square posts and 16:9 for YouTube, websites, presentations, brand films and event screens. Custom dimensions can also be prepared when required.",
    },
    {
      question: "Do I need to provide a script or raw footage?",
      answer:
        "Not always. For an AI video, you can share your brand information, objective, product details, references and key message, and we can help develop the concept and script. For video editing, you can provide the available footage and brief, and we can organise it into a complete edit.",
    },
    {
      question: "Can one video be adapted into multiple shorter edits?",
      answer:
        "Yes. A master video can be converted into shorter Reels, Shorts, advertisements, teasers, cutdowns and platform-specific versions. We can also adapt the same content into vertical, square, portrait and landscape formats for different campaign requirements.",
    },
    {
      question: "How long does an AI video or video editing project take?",
      answer:
        "The timeline depends on the video duration, number of scenes, amount of raw footage, AI visual requirements, editing complexity, motion graphics, sound design, revision rounds and final output formats. Short social videos may take less time, while detailed commercials and brand films require a longer production schedule.",
    },
    {
      question: "How much do AI video production and video editing cost?",
      answer:
        "The cost depends on the video duration, creative concept, number of scenes, AI-generated visuals, amount of raw footage, editing requirements, motion graphics, subtitles, voiceover, sound design, revisions and final delivery formats. We review the complete brief before sharing a customised quotation.",
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
              & Video Editing FAQs
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-[15px] font-medium leading-[1.8] text-slate-600 md:text-[17px]">
            Everything you need to know about AI video production, professional
            video editing, social media videos, commercials, brand films,
            output formats, timelines and project requirements.
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