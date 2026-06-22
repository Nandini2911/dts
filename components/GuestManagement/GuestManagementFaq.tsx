
"use client";

import { Plus } from "lucide-react";

const serifFont = {
  fontFamily:
    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

type FaqItem = {
  question: string;
  answer: string;
};

export default function GuestManagementFaq() {
  const faqs: FaqItem[] = [
    {
      question: "What is guest management in event management?",
      answer:
        "Guest management in event management is the process of planning, organizing and coordinating attendees before, during and after an event. It includes guest list management, RSVP tracking, event registration, check-in management, VIP guest coordination, access control and on-ground guest assistance to create a smooth event experience.",
    },
    {
      question: "What services are included in guest management?",
      answer:
        "Professional guest management services include RSVP management, guest list management, event registration, guest communication, check-in coordination, VIP guest handling, access control, hospitality support, attendee verification and on-ground guest assistance throughout the event.",
    },
    {
      question: "Why is RSVP management important?",
      answer:
        "RSVP management is important because it helps event organizers track confirmations, declines, pending responses, guest preferences and expected attendance. A proper RSVP management system reduces confusion, improves planning accuracy and helps the team prepare seating, hospitality, entry flow and VIP arrangements in advance.",
    },
    {
      question: "How does guest check-in work?",
      answer:
        "Guest check-in works through a structured verification process at the event entry point. Guests are matched with the approved guest list or event registration database, verified by name, QR code, invite status or category, and then guided to the right access area. This helps reduce waiting time and keeps entry organized.",
    },
    {
      question: "Can you manage VIP guests?",
      answer:
        "Yes. We manage VIP guests, celebrities, founders, dignitaries, speakers, investors and high-profile attendees with dedicated coordination. This includes private entry planning, arrival tracking, access control, hospitality assistance, media-sensitive movement and discreet on-ground support.",
    },
    {
      question: "Do you provide wedding guest management?",
      answer:
        "Yes. We provide wedding guest management services for luxury weddings, destination weddings, private celebrations and high-value family events. Our team handles guest lists, RSVP tracking, family guest coordination, VIP arrivals, hospitality support, check-ins and venue entry management.",
    },
    {
      question: "Do you provide corporate event guest management?",
      answer:
        "Yes. We provide corporate event guest management for conferences, product launches, brand events, investor meets, networking events, award nights and business gatherings. We manage event registration, delegate check-ins, speaker coordination, VIP guests, access control and attendee experience.",
    },
    {
      question: "Can guest management improve event security?",
      answer:
        "Yes. Guest management improves event security by ensuring only approved attendees enter the venue. Through guest verification, access control, segmented entry systems, VIP movement planning and real-time coordination, unauthorized access is reduced and crowd movement becomes easier to manage.",
    },
    {
      question: "Do you work across India?",
      answer:
        "Yes. Double Trouble Studio provides guest management services across India for weddings, corporate events, celebrity events, brand launches, media events and private gatherings. We work across major cities including Mumbai, Delhi, Gurgaon, Bangalore, Hyderabad, Pune, Goa, Jaipur, Chandigarh and other event destinations.",
    },
    {
      question: "What types of events do you manage?",
      answer:
        "We manage luxury weddings, celebrity events, corporate conferences, product launches, brand launches, fashion events, media events, award nights, investor events, private gatherings, founder events, social celebrations and high-profile VIP experiences.",
    },
    {
      question: "Why choose Double Trouble Studio?",
      answer:
        "Double Trouble Studio combines strategic planning, guest coordination and on-ground event execution. Our team focuses on smooth entry flow, clear guest communication, VIP handling, access control and premium hospitality, ensuring every guest experience feels organized, professional and seamless.",
    },
    {
      question: "How much do guest management services cost?",
      answer:
        "The cost of guest management services depends on the event size, guest count, number of entry points, RSVP requirements, VIP coordination needs, registration systems, manpower requirements and event location. We provide customized quotations based on the event scope and operational requirements.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.dtsworld.in/services/guest-management#faq",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
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

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(98,136,185,0.1),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(13,36,68,0.08),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-[1100px]">
        <div className="mx-auto max-w-[780px] text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)]">
            Frequently Asked Questions
          </span>

          <h2
            className="mx-auto mt-6 max-w-[820px] text-[34px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#071120] sm:text-[42px] md:text-[52px] lg:text-[60px]"
            style={serifFont}
          >
            Guest Management
            <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              FAQs
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-[15px] font-medium leading-[1.8] text-slate-600 md:text-[17px]">
            Everything you need to know about guest management services, RSVP
            tracking, event registration, VIP handling, check-ins and access
            control for premium events.
          </p>
        </div>

        <div className="mt-12 space-y-5 md:mt-16">
          {faqs.map((item) => (
            <article
              key={item.question}
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
