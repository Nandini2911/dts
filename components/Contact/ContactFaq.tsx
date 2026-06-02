// components/FaqSection.tsx

"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

const faqs = [
  {
    question:
      "What branding services does Double Trouble Studio offer in Mumbai?",
    answer:
      "Double Trouble Studio helps businesses build memorable brands through strategic brand development, visual identity design, brand positioning, messaging, creative direction and integrated marketing solutions designed for long-term growth.",
  },
  {
    question:
      "Why should I hire a branding agency in Mumbai?",
    answer:
      "A professional branding agency helps businesses create a strong market presence, improve customer trust, communicate their value effectively and stand out from competitors through strategy-led branding and marketing.",
  },
  {
    question:
      "How much does professional website design cost in Mumbai?",
    answer:
      "Website design costs vary depending on project scope, functionality, design requirements and business goals. We provide customized website solutions tailored to your brand, objectives and budget.",
  },
  {
    question:
      "Do you provide website design and branding services together?",
    answer:
      "Yes. We offer complete branding and website design services to create a seamless brand experience across every customer touchpoint, ensuring consistency in design, messaging and user experience.",
  },
  {
    question:
      "What digital marketing services does Double Trouble Studio provide?",
    answer:
      "Our services include social media marketing, content creation, performance marketing, PR campaigns, media outreach, brand strategy, digital consulting and growth-focused marketing solutions.",
  },
  {
    question:
      "Do you work with startups and growing businesses?",
    answer:
      "Yes. We work with startups, founders, hospitality brands, luxury businesses and growing companies looking to build stronger brands, launch websites and scale their digital presence.",
  },
  {
    question:
      "How long does it take to complete a branding or website project?",
    answer:
      "Project timelines depend on the scope and complexity of the work. Most branding and website projects are completed within a few weeks following the discovery, planning, design and development phases.",
  },
  {
    question:
      "Do you work with clients outside Mumbai and India?",
    answer:
      "Absolutely. We collaborate with businesses across Mumbai, Navi Mumbai, Thane, Pune, India and international markets through remote meetings, streamlined workflows and dedicated project management.",
  },
  {
    question:
      "Why choose Double Trouble Studio for branding, website design and marketing?",
    answer:
      "Double Trouble Studio combines strategy, creativity, technology and marketing expertise to create premium brands, websites and digital experiences that drive visibility, engagement and long-term business growth.",
  },
  {
    question:
      "How can I get a quote for branding, website design or digital marketing services?",
    answer:
      "Simply contact us through our website, email, phone or WhatsApp. Our team will understand your requirements, discuss your goals and provide a customized proposal tailored to your business needs.",
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