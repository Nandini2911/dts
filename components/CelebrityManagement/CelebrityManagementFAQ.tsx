"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

const serifFont = {
  fontFamily:
    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

const linkClass =
  "font-medium text-[#0D2444] underline underline-offset-4 transition-colors duration-300 hover:text-[#315E91]";

type FaqItem = {
  question: ReactNode;
  questionText: string;
  answer: ReactNode;
  schemaAnswer: string;
};

export default function CelebrityManagementFaq() {
  const faqs: FaqItem[] = [
    {
      question: "What is celebrity management?",
      questionText: "What is celebrity management?",
      schemaAnswer:
        "Celebrity management involves sourcing, booking, coordinating and managing public personalities for events, campaigns, endorsements, promotions and brand collaborations.",
      answer: (
        <>
          <Link
            href="https://www.dtsworld.in/blog/celebrity-management-in-india-guide"
            className={linkClass}
          >
            Celebrity management
          </Link>{" "}
          involves sourcing, booking, coordinating and managing public
          personalities for events, campaigns, endorsements, promotions and brand
          collaborations.
        </>
      ),
    },
    {
      question: "How does celebrity booking work?",
      questionText: "How does celebrity booking work?",
      schemaAnswer:
        "Celebrity booking usually includes requirement discovery, talent shortlisting, availability checks, fee negotiation, contract coordination, logistics planning and event-day management.",
      answer: (
        <>
          <Link
            href="https://www.dtsworld.in/blog/how-to-source-approach-celebrities-agencies-direct-contact"
            className={linkClass}
          >
            Celebrity booking
          </Link>{" "}
          usually includes requirement discovery, talent shortlisting,
          availability checks,{" "}
          <Link
            href="https://www.dtsworld.in/blog/negotiating-celebrity-fees-riders-contracts"
            className={linkClass}
          >
            fee negotiation
          </Link>
          , contract coordination, logistics planning and event-day management.
        </>
      ),
    },
    {
      question: (
        <>
          Can you arrange celebrities for{" "}
          <Link
            href="https://www.dtsworld.in/blog/celebrity-endorsement-vs-event-appearance-roi"
            className={linkClass}
          >
            brand endorsements
          </Link>
          ?
        </>
      ),
      questionText: "Can you arrange celebrities for brand endorsements?",
      schemaAnswer:
        "Yes. We help businesses secure suitable celebrities, influencers and public personalities for advertising campaigns, brand promotions, ambassador programs and digital collaborations.",
      answer: (
        <>
          Yes. We help businesses secure suitable celebrities, influencers and
          public personalities for advertising campaigns,{" "}
          <Link
            href="https://www.dtsworld.in/services/pr-media-marketing"
            className={linkClass}
          >
            brand promotions
          </Link>
          , ambassador programs and digital collaborations.
        </>
      ),
    },
    {
      question: "How much does it cost to hire a celebrity in India?",
      questionText: "How much does it cost to hire a celebrity in India?",
      schemaAnswer:
        "Celebrity booking costs depend on the celebrity’s profile, event type, city, appearance duration, campaign deliverables, usage rights, exclusivity, travel requirements and availability.",
      answer: (
        <>
          Celebrity booking costs depend on the celebrity’s profile, event type,
          city, appearance duration, campaign deliverables,{" "}
          <Link
            href="https://www.dtsworld.in/blog/negotiating-celebrity-fees-riders-contracts"
            className={linkClass}
          >
            usage rights
          </Link>
          , exclusivity, travel requirements and availability.
        </>
      ),
    },
    {
      question: (
        <>
          Can celebrities be booked for{" "}
          <Link
            href="https://www.dtsworld.in/services/pr-media-marketing"
            className={linkClass}
          >
            social media promotions
          </Link>
          ?
        </>
      ),
      questionText: "Can celebrities be booked for social media promotions?",
      schemaAnswer:
        "Yes. Celebrities, influencers and creators can be coordinated for reels, branded content, shoutouts, campaign videos, product promotions and digital collaborations depending on the campaign scope.",
      answer:
        "Yes. Celebrities, influencers and creators can be coordinated for reels, branded content, shoutouts, campaign videos, product promotions and digital collaborations depending on the campaign scope.",
    },
    {
      question: "Can you arrange Bollywood celebrities for private events?",
      questionText: "Can you arrange Bollywood celebrities for private events?",
      schemaAnswer:
        "Yes. Bollywood celebrities can be coordinated for private events, weddings, corporate events, hospitality experiences and luxury celebrations, subject to availability, budget and appearance requirements.",
      answer: (
        <>
          Yes. Bollywood celebrities can be coordinated for{" "}
          <Link
            href="https://www.dtsworld.in/services/events-weddings"
            className={linkClass}
          >
            private events
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/blog/luxury-event-wedding-planning-mumbai-india-2026"
            className={linkClass}
          >
            weddings
          </Link>
          , corporate events, hospitality experiences and luxury celebrations,
          subject to availability, budget and appearance requirements.
        </>
      ),
    },
    {
      question: "Do celebrity endorsement fees include usage rights?",
      questionText: "Do celebrity endorsement fees include usage rights?",
      schemaAnswer:
        "Not always. Usage rights for digital ads, print, outdoor, television, social media, brand campaigns and long-term promotions are usually discussed separately.",
      answer: (
        <>
          Not always.{" "}
          <Link
            href="https://www.dtsworld.in/blog/negotiating-celebrity-fees-riders-contracts"
            className={linkClass}
          >
            Usage rights
          </Link>{" "}
          for digital ads, print, outdoor, television, social media, brand
          campaigns and long-term promotions are usually discussed separately.
        </>
      ),
    },
    {
      question: "What types of events can include celebrity appearances?",
      questionText: "What types of events can include celebrity appearances?",
      schemaAnswer:
        "Corporate events, hospitality launches, weddings, product launches, brand activations, award ceremonies, fashion shows, conferences, private gatherings and promotional events can include celebrity appearances.",
      answer: (
        <>
          Corporate events, hospitality launches, weddings, product launches,
          brand activations, award ceremonies, fashion shows, conferences,
          private gatherings and promotional events can include{" "}
          <Link
            href="https://www.dtsworld.in/blog/managing-celebrity-appearances-logistics-security-coordination"
            className={linkClass}
          >
            celebrity appearances
          </Link>
          .
        </>
      ),
    },
    {
      question: (
        <>
          Do you manage{" "}
          <Link
            href="https://www.dtsworld.in/services/pr-media-marketing"
            className={linkClass}
          >
            influencer collaborations
          </Link>
          ?
        </>
      ),
      questionText: "Do you manage influencer collaborations?",
      schemaAnswer:
        "Yes. We coordinate influencer and creator partnerships for brand campaigns, product promotions, hospitality activations, lifestyle content, digital campaigns and social media engagement.",
      answer:
        "Yes. We coordinate influencer and creator partnerships for brand campaigns, product promotions, hospitality activations, lifestyle content, digital campaigns and social media engagement.",
    },
    {
      question: "How early should celebrity booking be planned?",
      questionText: "How early should celebrity booking be planned?",
      schemaAnswer:
        "Advance planning is recommended because celebrity availability, travel schedules, campaign approvals and contract timelines can vary depending on the personality and event date.",
      answer:
        "Advance planning is recommended because celebrity availability, travel schedules, campaign approvals and contract timelines can vary depending on the personality and event date.",
    },
    {
      question: (
        <>
          Do you manage{" "}
          <Link
            href="https://www.dtsworld.in/blog/managing-celebrity-appearances-logistics-security-coordination"
            className={linkClass}
          >
            celebrity logistics
          </Link>
          ?
        </>
      ),
      questionText: "Do you manage celebrity logistics?",
      schemaAnswer:
        "Yes. We coordinate travel, accommodation, scheduling, hospitality, green room requirements, backstage movement and event-day operations.",
      answer:
        "Yes. We coordinate travel, accommodation, scheduling, hospitality, green room requirements, backstage movement and event-day operations.",
    },
    {
      question: "Can you arrange celebrity hosts and speakers?",
      questionText: "Can you arrange celebrity hosts and speakers?",
      schemaAnswer:
        "Yes. We manage celebrity hosts, anchors, moderators, keynote speakers, motivational speakers, business leaders, performers and entertainment talent.",
      answer:
        "Yes. We manage celebrity hosts, anchors, moderators, keynote speakers, motivational speakers, business leaders, performers and entertainment talent.",
    },
    {
      question: (
        <>
          Do you provide{" "}
          <Link
            href="https://www.dtsworld.in/blog/managing-celebrity-appearances-logistics-security-coordination"
            className={linkClass}
          >
            event-day coordination
          </Link>
          ?
        </>
      ),
      questionText: "Do you provide event-day coordination?",
      schemaAnswer:
        "Yes. Our team oversees on-site coordination, arrivals, backstage communication, media interactions, stage entries, guest engagement and stakeholder communication.",
      answer:
        "Yes. Our team oversees on-site coordination, arrivals, backstage communication, media interactions, stage entries, guest engagement and stakeholder communication.",
    },
    {
      question: "What information is required to book a celebrity?",
      questionText: "What information is required to book a celebrity?",
      schemaAnswer:
        "We usually require the event date, city, venue, event type, preferred talent category, budget range, audience profile, appearance duration and expected deliverables.",
      answer:
        "We usually require the event date, city, venue, event type, preferred talent category, budget range, audience profile, appearance duration and expected deliverables.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.dtsworld.in/services/celebrity-management#faq",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.questionText,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.schemaAnswer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#F5F7FB] px-4 py-16 sm:px-6 md:py-20 lg:px-8"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(98,136,185,0.1),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(13,36,68,0.08),transparent_30%)]" />

      <div className="absolute left-[-180px] top-[-160px] h-[380px] w-[380px] rounded-full bg-[#6288B9]/10 blur-3xl" />

      <div className="absolute right-[-220px] bottom-[-180px] h-[460px] w-[460px] rounded-full bg-[#0D2444]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1100px]">
        {/* Header */}
        <div className="mx-auto max-w-[780px] text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)]">
            Frequently Asked Questions
          </span>

          <h2
            className="mx-auto mt-6 max-w-[820px] text-[34px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#071120] sm:text-[42px] md:text-[52px] lg:text-[60px]"
            style={serifFont}
          >
            Celebrity Management
            <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              FAQs
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-[15px] font-medium leading-[1.8] text-slate-600 md:text-[17px]">
            Every celebrity engagement has different requirements. These FAQs
            help you understand celebrity booking, endorsements, appearance
            fees, usage rights, logistics, influencer collaborations and
            event-day coordination.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="mt-12 space-y-5 md:mt-16">
          {faqs.map((item) => (
            <article
              key={item.questionText}
              className="rounded-[28px] border border-[#DCE6F3] bg-white p-7 shadow-[0_12px_38px_rgba(13,36,68,0.04)] transition-all duration-300 hover:border-[#BCD2EE] hover:shadow-[0_18px_55px_rgba(13,36,68,0.08)]"
            >
              <div className="flex items-center justify-between gap-5">
                <h3 className="text-[20px] font-semibold leading-[1.45] text-[#071120]">
                  {item.question}
                </h3>

                <div className="flex h-[46px] min-w-[46px] items-center justify-center rounded-2xl bg-[#EEF4FB]">
                  <Plus className="h-5 w-5 text-[#0D2444]" />
                </div>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-5">
                <p className="text-[15px] font-medium leading-[1.9] text-slate-600">
                  {item.answer}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}