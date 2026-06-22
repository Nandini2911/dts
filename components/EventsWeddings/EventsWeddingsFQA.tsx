
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

export default function EventWeddingFaq() {
  const faqs: FaqItem[] = [
    {
      question:
        "What event management services does Double Trouble Studio provide?",
      answer:
        "Double Trouble Studio provides end-to-end event management services including corporate events, brand launches, product launches, hospitality events, fashion shows, entertainment nights, award ceremonies, conferences, exhibitions, private celebrations and luxury experiences across India.",
    },
    {
      question: "Do you provide complete wedding planning services?",
      answer:
        "Yes. We provide complete wedding planning services from concept to execution. Our team manages venue coordination, décor planning, vendor management, entertainment, hospitality, guest logistics, travel coordination, function planning and on-ground supervision for wedding events.",
    },
    {
      question: "Do you plan destination weddings in India?",
      answer:
        "Yes. We plan destination weddings across India including locations such as Jaipur, Udaipur, Goa, Delhi NCR, Chandigarh, Mumbai, Pune, Hyderabad, Jodhpur, Mussoorie, Kasauli, Shimla, Amritsar, Ludhiana and Rishikesh. We manage venue planning, guest hospitality, accommodation, transport, décor, entertainment and function-wise execution.",
    },
    {
      question: "What types of events do you plan and manage?",
      answer:
        "We plan and manage corporate events, brand events, weddings, luxury celebrations, social events, hospitality launches, fashion and lifestyle events, entertainment events, government events, institutional events, conferences, summits, exhibitions and private family celebrations.",
    },
    {
      question: "Do you manage corporate events and brand launches?",
      answer:
        "Yes. We manage corporate events, annual days, leadership summits, dealer meets, conferences, award nights, product launches, showroom launches, restaurant launches, hotel launches, media events, influencer events and brand activations with structured planning and professional execution.",
    },
    {
      question:
        "Can you manage luxury weddings and premium celebrations?",
      answer:
        "Yes. We manage luxury weddings and premium celebrations with attention to aesthetics, guest comfort, hospitality, family coordination, vendor quality, entertainment and smooth event flow. Our team works on décor direction, guest experience, function planning and on-ground coordination.",
    },
    {
      question:
        "Do you help with décor, theme and production planning?",
      answer:
        "Yes. We help with wedding décor, event themes, mood boards, floral styling, mandap design, stage setup, entrance design, table styling, lighting, sound, branding, seating layouts, technical requirements and overall visual experience.",
    },
    {
      question:
        "Do you coordinate vendors for events and weddings?",
      answer:
        "Yes. We coordinate photographers, videographers, decorators, caterers, makeup artists, stylists, production teams, sound vendors, lighting teams, hospitality teams, logistics partners, entertainment vendors and other event partners required for smooth execution.",
    },
    {
      question:
        "Do you manage guest hospitality and logistics?",
      answer:
        "Yes. We manage guest lists, RSVP coordination, welcome desks, rooming lists, airport pickups, check-ins, hampers, itinerary sharing, transport, accommodation, guest movement, backstage operations and hospitality support during events and weddings.",
    },
    {
      question:
        "Can you arrange artists, celebrities and entertainment for events?",
      answer:
        "Yes. We coordinate singers, DJs, anchors, celebrity performers, folk artists, dancers, live bands, comedians, speakers, hosts and special acts for weddings, corporate events, private celebrations, hospitality launches and entertainment experiences.",
    },
    {
      question:
        "Which cities do you provide event management services in?",
      answer:
        "Double Trouble Studio provides event management and wedding planning services across major Indian cities and destinations including Chandigarh, Delhi NCR, Mumbai, Pune, Bangalore, Hyderabad, Jaipur, Udaipur, Goa, Ahmedabad, Ludhiana, Amritsar, Kasauli, Shimla, Kolkata and Chennai.",
    },
    {
      question:
        "What information do you need to start planning an event?",
      answer:
        "To begin planning, we usually require the event type, event date, city, venue preference, expected guest count, budget range, number of functions, décor and theme preference, hospitality requirements, entertainment needs, vendor requirements, travel and accommodation needs and any special guest or celebrity requirement.",
    },
    {
      question:
        "Why should we choose Double Trouble Studio for event and wedding management?",
      answer:
        "Double Trouble Studio combines creative event planning with operational execution. Our team manages planning, vendor coordination, hospitality, production, logistics, communication and on-ground execution to create events that feel premium, organized and seamless.",
    },
    {
      question:
        "How much do event management and wedding planning services cost?",
      answer:
        "The cost depends on the event type, city, venue, guest count, number of functions, décor scale, production requirements, entertainment needs, hospitality scope, logistics and vendor involvement. We understand the requirement first and then share a customized quote based on the event scope.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.dtsworld.in/services/events-weddings#faq",
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

      <div className="absolute left-[-180px] top-[-160px] h-[380px] w-[380px] rounded-full bg-[#6288B9]/10 blur-3xl" />

      <div className="absolute right-[-220px] bottom-[-180px] h-[460px] w-[460px] rounded-full bg-[#0D2444]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1100px]">
        <div className="mx-auto max-w-[780px] text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-gradient-to-r from-[#0D2444] via-[#16365F] to-[#1F4B7A] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_10px_40px_rgba(13,36,68,0.25)]">
            Frequently Asked Questions
          </span>

          <h2
            className="mx-auto mt-6 max-w-[820px] text-[34px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#071120] sm:text-[42px] md:text-[52px] lg:text-[60px]"
            style={serifFont}
          >
            Event & Wedding
            <span className="block bg-gradient-to-r from-[#0D2444] via-[#315E91] to-[#6288B9] bg-clip-text text-transparent">
              FAQs
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-[15px] font-medium leading-[1.8] text-slate-600 md:text-[17px]">
            Everything you need to know about event management, wedding
            planning, destination weddings, corporate events, vendor
            coordination, guest hospitality, logistics and on-ground execution.
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
