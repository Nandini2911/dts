// components/FaqSection.tsx

"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
const faqs = [
  {
    question: "How can I contact Double Trouble Studio?",
    answer:
      "You can contact Double Trouble Studio through our website contact form, email, phone number, or WhatsApp. Simply submit your inquiry and our team will respond as quickly as possible.",
  },
  {
    question: "How quickly can I expect a response?",
    answer:
      "Most inquiries receive a response within 24 business hours. For urgent projects, we recommend contacting us directly via phone or WhatsApp for faster communication.",
  },
  {
    question: "Do you work with clients outside Mumbai?",
    answer:
      "Yes. Double Trouble Studio works with businesses across Mumbai, India, and international markets through structured online collaboration, virtual meetings, and streamlined project management processes.",
  },
  {
    question: "Can I schedule a consultation before starting a project?",
    answer:
      "Absolutely. We offer discovery calls and consultation sessions to understand your goals, discuss project requirements, and recommend the most suitable creative solutions for your business.",
  },
  {
    question: "What information should I provide when contacting your team?",
    answer:
      "To help us understand your needs, include details about your business, project goals, timeline, budget expectations, and any specific services you are interested in.",
  },
  {
    question: "Do you provide custom proposals and pricing?",
    answer:
      "Yes. Every project is unique, so we create customized proposals based on your objectives, scope of work, deliverables, and long-term business goals.",
  },
  {
    question: "Can I contact Double Trouble Studio for branding and marketing services?",
    answer:
      "Yes. We provide branding, creative strategy, content creation, social media marketing, visual identity design, website experiences, and digital growth solutions tailored to modern businesses.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "We work with hospitality brands, restaurants, cafés, luxury businesses, lifestyle brands, wedding companies, startups, creators, personal brands, and service-based businesses seeking premium positioning and growth.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes. Depending on the engagement, we can provide ongoing creative support, content creation, marketing assistance, brand management, and long-term strategic guidance.",
  },
  {
    question: "Why should I choose Double Trouble Studio?",
    answer:
      "Double Trouble Studio combines strategy, storytelling, branding, content, and digital experiences to help businesses build stronger brand perception, connect with audiences, and achieve sustainable growth."
  }
];
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden py-20 bg-[#F5F7FB]">
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
              }}>
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
            Everything you need to know about working with
            Double Trouble Studio, our process and the
            services we offer.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="mt-20 space-y-5">
          {faqs.map((item, index) => (
            <div
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
            >
              {/* BUTTON */}
              <button
                onClick={() => toggleFaq(index)}
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
                      openIndex === index
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
                        openIndex === index
                          ? "text-white rotate-45"
                          : "text-[#0D2444]"
                      }
                    `}
                  />
                </div>
              </button>

              {/* ANSWER */}
              <div
                className={`
                  grid
                  transition-all
                  duration-500
                  ease-in-out

                  ${
                    openIndex === index
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}