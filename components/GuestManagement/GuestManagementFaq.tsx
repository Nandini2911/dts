"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

const serifFont = {
  fontFamily:
    'New York, ui-serif, Georgia, Cambria, "Times New Roman", serif',
};

const linkClass =
  "font-medium text-[#0D2444] underline underline-offset-4 hover:text-[#315E91]";

type FaqItem = {
  question: string;
  answer: ReactNode;
  schemaAnswer: string;
};

export default function GuestManagementFaq() {
  const faqs: FaqItem[] = [
    {
      question: "What is guest management in event management?",
      schemaAnswer:
        "Guest management in event management is the process of planning, organizing and coordinating attendees before, during and after an event. It includes guest list management, RSVP tracking, event registration, check-in management, VIP guest coordination, access control and on-ground guest assistance to create a smooth event experience.",
      answer: (
        <>
          Guest management in event management is the process of planning,
          organizing and coordinating attendees before, during and after an
          event. It includes{" "}
          <Link
            href="https://www.dtsworld.in/blog/How-to-build-segment-high-profile-guest-list"
            className={linkClass}
          >
            guest list management
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/blog/event-rsvp-management"
            className={linkClass}
          >
            RSVP tracking
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/blog/contactless-check-in-systems-high-end-events"
            className={linkClass}
          >
            event registration
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/blog/on-site-guest-flow-registration-entry-seating-experience-mapping"
            className={linkClass}
          >
            check-in management
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/celebrity-management"
            className={linkClass}
          >
            VIP guest coordination
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/blog/contactless-check-in-systems-high-end-events"
            className={linkClass}
          >
            access control
          </Link>{" "}
          and on-ground guest assistance to create a smooth event experience.
        </>
      ),
    },
    {
      question: "What services are included in guest management?",
      schemaAnswer:
        "Professional guest management services include RSVP management, guest list management, event registration, guest communication, check-in coordination, VIP guest handling, access control, hospitality support, attendee verification and on-ground guest assistance throughout the event.",
      answer: (
        <>
          Professional guest management services include RSVP management, guest
          list management, event registration,{" "}
          <Link
            href="https://www.dtsworld.in/blog/post-event-guest-follow-up"
            className={linkClass}
          >
            guest communication
          </Link>
          , check-in coordination, VIP guest handling, access control,{" "}
          <Link
            href="https://www.dtsworld.in/services/events-weddings"
            className={linkClass}
          >
            hospitality support
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/blog/contactless-check-in-systems-high-end-events"
            className={linkClass}
          >
            attendee verification
          </Link>{" "}
          and on-ground guest assistance throughout the event.
        </>
      ),
    },
    {
      question: "Why is RSVP management important?",
      schemaAnswer:
        "RSVP management is important because it helps event organizers track confirmations, declines, pending responses, guest preferences and expected attendance. A proper RSVP management system reduces confusion, improves planning accuracy and helps the team prepare seating, hospitality, entry flow and VIP arrangements in advance.",
      answer:
        "RSVP management is important because it helps event organizers track confirmations, declines, pending responses, guest preferences and expected attendance. A proper RSVP management system reduces confusion, improves planning accuracy and helps the team prepare seating, hospitality, entry flow and VIP arrangements in advance.",
    },
    {
      question: "How does guest check-in work?",
      schemaAnswer:
        "Guest check-in works through a structured verification process at the event entry point. Guests are matched with the approved guest list or event registration database, verified by name, QR code, invite status or category, and then guided to the right access area. This helps reduce waiting time and keeps entry organized.",
      answer:
        "Guest check-in works through a structured verification process at the event entry point. Guests are matched with the approved guest list or event registration database, verified by name, QR code, invite status or category, and then guided to the right access area. This helps reduce waiting time and keeps entry organized.",
    },
    {
      question: "Can you manage VIP guests?",
      schemaAnswer:
        "Yes. We manage VIP guests, celebrities, founders, dignitaries, speakers, investors and high-profile attendees with dedicated coordination. This includes private entry planning, arrival tracking, access control, hospitality assistance, media-sensitive movement and discreet on-ground support.",
      answer:
        "Yes. We manage VIP guests, celebrities, founders, dignitaries, speakers, investors and high-profile attendees with dedicated coordination. This includes private entry planning, arrival tracking, access control, hospitality assistance, media-sensitive movement and discreet on-ground support.",
    },
    {
      question: "Do you provide wedding guest management?",
      schemaAnswer:
        "Yes. We provide wedding guest management services for luxury weddings, destination weddings, private celebrations and high-value family events. Our team handles guest lists, RSVP tracking, family guest coordination, VIP arrivals, hospitality support, check-ins and venue entry management.",
      answer: (
        <>
          Yes. We provide{" "}
          <Link
            href="https://www.dtsworld.in/services/events-weddings"
            className={linkClass}
          >
            wedding guest management services
          </Link>{" "}
          for{" "}
          <Link
            href="https://www.dtsworld.in/blog/luxury-event-wedding-planning-mumbai-india-2026"
            className={linkClass}
          >
            luxury weddings
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/blog/luxury-event-wedding-planning-mumbai-india-2026"
            className={linkClass}
          >
            destination weddings
          </Link>
          , private celebrations and high-value family events. Our team handles
          guest lists, RSVP tracking, family guest coordination, VIP arrivals,
          hospitality support, check-ins and venue entry management.
        </>
      ),
    },
    {
      question: "Do you provide corporate event guest management?",
      schemaAnswer:
        "Yes. We provide corporate event guest management for conferences, product launches, brand events, investor meets, networking events, award nights and business gatherings. We manage event registration, delegate check-ins, speaker coordination, VIP guests, access control and attendee experience.",
      answer: (
        <>
          Yes. We provide{" "}
          <Link
            href="https://www.dtsworld.in/services/events-weddings"
            className={linkClass}
          >
            corporate event guest management
          </Link>{" "}
          for{" "}
          <Link
            href="https://www.dtsworld.in/services/events-weddings"
            className={linkClass}
          >
            conferences
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/pr-media-marketing"
            className={linkClass}
          >
            product launches
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/pr-media-marketing"
            className={linkClass}
          >
            brand events
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/events-weddings"
            className={linkClass}
          >
            investor meets
          </Link>
          , networking events, award nights and business gatherings. We manage
          event registration, delegate check-ins, speaker coordination, VIP
          guests, access control and attendee experience.
        </>
      ),
    },
    {
      question: "Can guest management improve event security?",
      schemaAnswer:
        "Yes. Guest management improves event security by ensuring only approved attendees enter the venue. Through guest verification, access control, segmented entry systems, VIP movement planning and real-time coordination, unauthorized access is reduced and crowd movement becomes easier to manage.",
      answer: (
        <>
          Yes. Guest management improves{" "}
          <Link
            href="https://www.dtsworld.in/blog/guest-data-privacy-luxury-events"
            className={linkClass}
          >
            event security
          </Link>{" "}
          by ensuring only approved attendees enter the venue. Through{" "}
          <Link
            href="https://www.dtsworld.in/blog/contactless-check-in-systems-high-end-events"
            className={linkClass}
          >
            guest verification
          </Link>
          , access control,{" "}
          <Link
            href="https://www.dtsworld.in/blog/How-to-build-segment-high-profile-guest-list"
            className={linkClass}
          >
            segmented entry systems
          </Link>
          , VIP movement planning and real-time coordination, unauthorized
          access is reduced and crowd movement becomes easier to manage.
        </>
      ),
    },
    {
      question: "Do you work across India?",
      schemaAnswer:
        "Yes. Double Trouble Studio provides guest management services across India for weddings, corporate events, celebrity events, brand launches, media events and private gatherings. We work across major cities including Mumbai, Delhi, Gurgaon, Bangalore, Hyderabad, Pune, Goa, Jaipur, Chandigarh and other event destinations.",
      answer: (
        <>
          Yes. Double Trouble Studio provides{" "}
          <Link href="https://www.dtsworld.in/locations" className={linkClass}>
            guest management services across India
          </Link>{" "}
          for weddings, corporate events, celebrity events, brand launches, media
          events and private gatherings. We work across major cities including{" "}
          <Link
            href="https://www.dtsworld.in/services/guest-management/mumbai"
            className={linkClass}
          >
            Mumbai
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/guest-management/delhi"
            className={linkClass}
          >
            Delhi
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/guest-management/gurgaon"
            className={linkClass}
          >
            Gurgaon
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/guest-management/bangalore"
            className={linkClass}
          >
            Bangalore
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/guest-management/hyderabad"
            className={linkClass}
          >
            Hyderabad
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/guest-management/pune"
            className={linkClass}
          >
            Pune
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/guest-management/goa"
            className={linkClass}
          >
            Goa
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/guest-management/jaipur"
            className={linkClass}
          >
            Jaipur
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/guest-management/chandigarh"
            className={linkClass}
          >
            Chandigarh
          </Link>{" "}
          and other event destinations.
        </>
      ),
    },
    {
      question: "What types of events do you manage?",
      schemaAnswer:
        "We manage luxury weddings, celebrity events, corporate conferences, product launches, brand launches, fashion events, media events, award nights, investor events, private gatherings, founder events, social celebrations and high-profile VIP experiences.",
      answer: (
        <>
          We manage{" "}
          <Link
            href="https://www.dtsworld.in/services/events-weddings"
            className={linkClass}
          >
            luxury weddings
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/celebrity-management"
            className={linkClass}
          >
            celebrity events
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/events-weddings"
            className={linkClass}
          >
            corporate conferences
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/pr-media-marketing"
            className={linkClass}
          >
            product launches
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/pr-media-marketing"
            className={linkClass}
          >
            brand launches
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/events-weddings"
            className={linkClass}
          >
            fashion events
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/pr-media-marketing"
            className={linkClass}
          >
            media events
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/events-weddings"
            className={linkClass}
          >
            award nights
          </Link>
          ,{" "}
          <Link
            href="https://www.dtsworld.in/services/events-weddings"
            className={linkClass}
          >
            investor events
          </Link>
          , private gatherings, founder events, social celebrations and
          high-profile VIP experiences.
        </>
      ),
    },
    {
      question: "Why choose Double Trouble Studio?",
      schemaAnswer:
        "Double Trouble Studio combines strategic planning, guest coordination and on-ground event execution. Our team focuses on smooth entry flow, clear guest communication, VIP handling, access control and premium hospitality, ensuring every guest experience feels organized, professional and seamless.",
      answer:
        "Double Trouble Studio combines strategic planning, guest coordination and on-ground event execution. Our team focuses on smooth entry flow, clear guest communication, VIP handling, access control and premium hospitality, ensuring every guest experience feels organized, professional and seamless.",
    },
    {
      question: "How much do guest management services cost?",
      schemaAnswer:
        "The cost of guest management services depends on the event size, guest count, number of entry points, RSVP requirements, VIP coordination needs, registration systems, manpower requirements and event location. We provide customized quotations based on the event scope and operational requirements.",
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
                <p className="text-[15px] font-medium leading-[1.9] text">
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