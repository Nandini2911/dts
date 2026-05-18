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
        "We specialize in branding, website design, social media management, PR, digital campaigns, creative direction and premium visual identity systems tailored for modern brands.",
    },
    {
      question: "Do you work with startups and small businesses?",
      answer:
        "Yes. We work with modern startups, growing businesses and established brands looking to elevate their digital presence and positioning.",
    },
    {
      question: "How long does a branding or website project take?",
      answer:
        "Project timelines depend on the scope, but most branding and website projects typically take between 2–6 weeks with proper strategy and revisions included.",
    },
    {
      question: "Do you provide social media content creation?",
      answer:
        "Absolutely. We create premium social media strategies, visual content systems, reels direction and high-converting digital assets for brands.",
    },
    {
      question: "Can we work together remotely?",
      answer:
        "Yes. We work with clients across India and internationally through smooth remote collaboration, structured communication and organized workflows.",
    },
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