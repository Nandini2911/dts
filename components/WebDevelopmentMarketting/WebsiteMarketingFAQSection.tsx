"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

const serifFont = {
  fontFamily: 'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What does a website development company do?",
    answer:
      "A website development company plans, designs, builds and maintains websites for businesses. It manages structure, design, coding, content placement, mobile responsiveness, forms, integrations and launch support.",
  },
  {
    question: "What is the difference between web design and web development?",
    answer:
      "Web design focuses on the visual layout, user experience and look of a website. Web development focuses on building the website technically so it works properly across devices and browsers.",
  },
  {
    question: "Do you provide website development and SEO together?",
    answer:
      "Yes. Double Trouble Studio provides website development with SEO-ready structure, including service pages, headings, metadata, internal links, FAQs, alt text and technical SEO recommendations.",
  },
  {
    question: "Why is SEO important for a website?",
    answer:
      "SEO helps search engines understand your website and helps users find your services online. It improves discoverability, website structure, content quality and long-term organic visibility.",
  },
  {
    question: "Can you build a website that ranks on Google?",
    answer:
      "We can build an SEO-ready website with proper structure, content, technical setup and optimization. Rankings depend on competition, content quality, authority, backlinks, technical performance, local signals and ongoing SEO work.",
  },
  {
    question: "How much does website development cost in India?",
    answer:
      "Website development cost depends on the number of pages, design complexity, features, content requirements, ecommerce functionality, integrations, SEO setup and timeline.",
  },
  {
    question: "How long does website development take?",
    answer:
      "Website timelines depend on project size, page count, design complexity, content availability, feedback speed and technical requirements.",
  },
  {
    question: "Do you provide ecommerce website development?",
    answer:
      "Yes. We develop ecommerce websites with product pages, category structure, cart flow, checkout setup, payment integration and conversion-focused design.",
  },
  {
    question: "Do you provide digital marketing after website launch?",
    answer:
      "Yes. We support SEO, social media marketing, paid ads, performance marketing, content marketing, influencer campaigns and lead generation after website launch.",
  },
  {
    question: "What is digital marketing?",
    answer:
      "Digital marketing is the promotion of a brand online through search engines, social media, paid ads, content, email, websites, influencer collaborations and digital campaigns.",
  },
  {
    question: "Do you provide social media marketing?",
    answer:
      "Yes. We manage social media strategy, content calendars, creative direction, captions, reels ideas, posting plans and campaign communication.",
  },
  {
    question: "Do you run Google Ads and Meta Ads?",
    answer:
      "Yes. We plan and manage Google Ads and Meta Ads campaigns for awareness, traffic, leads, inquiries, bookings and conversions.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO usually takes time because results depend on competition, website quality, content depth, technical health, backlinks, local signals and consistency. It is a long-term visibility strategy.",
  },
  {
    question: "Do you provide local SEO?",
    answer:
      "Yes. We help businesses improve local visibility through location keywords, city pages, local content, Google Business Profile recommendations, reviews and service-area optimization.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can redesign your existing website with better design, stronger structure, improved content, mobile responsiveness, SEO readiness and conversion-focused sections.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We provide website maintenance, content updates, page additions, bug fixes, performance checks and ongoing website improvements.",
  },
];

export default function WebsiteDevelopmentFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(98,136,185,0.10),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(13,36,68,0.08),transparent_32%)]" />
      <div className="absolute left-[-180px] top-[-160px] h-[380px] w-[380px] rounded-full bg-[#6288B9]/10 blur-3xl" />
      <div className="absolute right-[-220px] bottom-[-180px] h-[460px] w-[460px] rounded-full bg-[#0D2444]/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1100px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[780px] text-center"
        >
          <span className="inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)] backdrop-blur-xl sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.24em]">
            Frequently Asked Questions
          </span>

          <h2
            className="mx-auto mt-6 max-w-[820px] text-[34px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#071120] sm:text-[42px] md:text-[52px] lg:text-[60px]"
            style={serifFont}
          >
           
            <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              Website Development  FAQs
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-[15px] font-medium leading-[1.8] text-slate-600 md:text-[17px]">
            Everything you need to know about website development, SEO, digital
            marketing, ecommerce websites, paid ads, local SEO and ongoing
            website support.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="mt-12 space-y-4 md:mt-16">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                viewport={{ once: true, margin: "-60px" }}
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}