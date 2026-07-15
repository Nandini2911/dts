import DestinationWeddingPlanningIndia from "@/components/EventsWeddings/DestinationWeddingPlanningIndia";
import EndToEndEventWeddingServices from "@/components/EventsWeddings/EndToEndEventWeddingServices";
import EventManagementServicesAcrossIndia from "@/components/EventsWeddings/EventManagementServicesAcrossIndia";
import EventsWeddingFeaturedWork from "@/components/EventsWeddings/EventsWeddingFeaturedWork";
import EventsWeddingsFQA from "@/components/EventsWeddings/EventsWeddingsFQA";
import EventsWePlanManage from "@/components/EventsWeddings/EventsWePlanManage";
import EventWeddingFinalCTA from "@/components/EventsWeddings/EventWeddingFinalCTA";
import EventWeddingHero from "@/components/EventsWeddings/EventWeddingHero";
import EventWeddingManagementProcess from "@/components/EventsWeddings/EventWeddingManagementProcess";
import EventWeddingUseCases from "@/components/EventsWeddings/EventWeddingUseCases";
import IndustriesWeWorkWith from "@/components/EventsWeddings/IndustriesWeWorkWith";
import InformationRequiredToPlanEvent from "@/components/EventsWeddings/InformationRequiredToPlanEvent";
import OurEventManagementServices from "@/components/EventsWeddings/OurEventManagementServices";
import OurWeddingPlanningServices from "@/components/EventsWeddings/OurWeddingPlanningServices";
import WhyChooseDoubleTroubleStudioEvents from "@/components/EventsWeddings/WhyChooseDoubleTroubleStudioEvents";
import WhyProfessionalEventManagementMatters from "@/components/EventsWeddings/WhyProfessionalEventManagementMatters";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServiceCityLinks from "@/components/seo/ServiceCityLinks";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Event Management & Wedding Planning Company India | DTS",

  description:
    "End-to-end event management and wedding planning for corporate events, brand launches, destination weddings and luxury celebrations across India.",

  applicationName: "Double Trouble Studio",

  authors: [
    {
      name: "Double Trouble Studio",
      url: "https://www.dtsworld.in/",
    },
  ],

  creator: "Double Trouble Studio",

  publisher: "Double Trouble Studio",

  category: "Event Management and Wedding Planning",

  keywords: [
    "event management company in India",
    "event management services India",
    "wedding planning company in India",
    "wedding planner India",
    "luxury wedding planner India",
    "destination wedding planner India",
    "event planning company India",
    "corporate event management",
    "corporate event planners India",
    "brand launch event management",
    "product launch event planning",
    "luxury event management",
    "hospitality event management",
    "fashion show event management",
    "award ceremony management",
    "conference event management",
    "exhibition management company",
    "private event planning",
    "social event management",
    "wedding management services",
    "complete wedding planning",
    "destination wedding management",
    "wedding decor planning",
    "wedding vendor coordination",
    "wedding guest management",
    "wedding hospitality management",
    "wedding logistics management",
    "artist management for weddings",
    "celebrity booking for events",
    "event production company India",
    "event vendor management",
    "event logistics management",
    "event management Mumbai",
    "event management Delhi NCR",
    "event management Chandigarh",
    "event management Bangalore",
    "destination wedding Jaipur",
    "destination wedding Udaipur",
    "destination wedding Goa",
  ],

  alternates: {
    canonical:
      "https://www.dtsworld.in/services/events-weddings",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url:
      "https://www.dtsworld.in/services/events-weddings",

    siteName: "Double Trouble Studio",

    title:
      "Event Management & Wedding Planning Company in India",

    description:
      "End-to-end planning, production, décor, hospitality, logistics and on-ground execution for corporate events, luxury weddings and destination celebrations.",

    images: [
      {
        url:
          "https://www.dtsworld.in/events-weddings-og.jpg",

        width: 1200,

        height: 630,

        alt:
          "Event Management and Wedding Planning Services by Double Trouble Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Event Management & Wedding Planning Company in India",

    description:
      "Corporate events, brand launches, destination weddings, luxury celebrations, production, hospitality and complete on-ground execution across India.",

    images: [
      "https://www.dtsworld.in/events-weddings-og.jpg",
    ],
  },

  robots: {
    index: true,

    follow: true,

    nocache: false,

    googleBot: {
      index: true,

      follow: true,

      noimageindex: false,

      "max-image-preview": "large",

      "max-snippet": -1,

      "max-video-preview": -1,
    },
  },
};


const eventsWeddingsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.dtsworld.in/#organization",
      name: "Double Trouble Studio",
      alternateName: "DTS World",
      url: "https://www.dtsworld.in/",
      logo: "https://www.dtsworld.in/logo.png",
      image: "https://www.dtsworld.in/og-image.jpg",
      description:
        "Double Trouble Studio is an India-based creative agency offering event management, wedding planning, branding, digital marketing, public relations, guest management, celebrity management, website development, AI video production and VFX services.",
      email: "hello@dtsworld.in",
      telephone: "+918000006021",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+918000006021",
        email: "hello@dtsworld.in",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      knowsAbout: [
        "Event Management",
        "Wedding Planning",
        "Destination Wedding Planning",
        "Corporate Event Management",
        "Brand Launch Events",
        "Luxury Event Management",
        "Hospitality Events",
        "Fashion Shows",
        "Entertainment Events",
        "Award Ceremonies",
        "Guest Management",
        "Artist Management",
        "Vendor Coordination",
        "Event Production",
        "Event Logistics",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.dtsworld.in/#website",
      url: "https://www.dtsworld.in/",
      name: "Double Trouble Studio",
      publisher: {
        "@id": "https://www.dtsworld.in/#organization",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "Service",
      "@id": "https://www.dtsworld.in/services/events-weddings/#service",
      name: "Event Management and Wedding Planning Services",
      serviceType: "Event Management and Wedding Planning",
      url: "https://www.dtsworld.in/services/events-weddings/",
      description:
        "Double Trouble Studio provides complete event management and wedding planning services across India, including corporate events, brand launches, product launches, hospitality events, luxury weddings, destination weddings, fashion shows, entertainment nights, award ceremonies, exhibitions, private celebrations and institutional events.",
      provider: {
        "@id": "https://www.dtsworld.in/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dtsworld.in/services/events-weddings/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.dtsworld.in/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://www.dtsworld.in/services/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Events & Weddings",
          item: "https://www.dtsworld.in/services/events-weddings/",
        },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.dtsworld.in/services/events-weddings/#process",
      name: "Event and Wedding Management Process",
      description:
        "A structured event and wedding planning process from requirement discovery to final execution and post-event support.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Requirement Discovery",
          text: "Understanding the event type, date, city, guest count, budget range, venue preference, experience goals and required services.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Concept and Planning",
          text: "Developing the event direction, theme, function structure, guest experience plan and execution approach.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Venue and Vendor Coordination",
          text: "Coordinating with venues, decorators, caterers, production vendors, entertainment teams, photographers, logistics partners and hospitality teams.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Budget Planning",
          text: "Aligning event requirements with budget, vendor costs, production needs and service priorities.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Design and Production Planning",
          text: "Planning décor, stage setup, lighting, sound, branding, seating layouts, entry design, technical requirements and visual experience.",
        },
        {
          "@type": "HowToStep",
          position: 6,
          name: "Entertainment and Artist Coordination",
          text: "Managing anchors, DJs, singers, celebrity guests, performers, speakers, hosts and entertainment flow.",
        },
        {
          "@type": "HowToStep",
          position: 7,
          name: "Logistics and Hospitality",
          text: "Coordinating guest movement, travel, accommodation, transport, welcome desks, itineraries, hospitality requirements and backstage operations.",
        },
        {
          "@type": "HowToStep",
          position: 8,
          name: "Event-Day Execution",
          text: "Supervising vendors, timelines, guest flow, stage cues, hospitality, production, entertainment and last-minute requirements.",
        },
        {
          "@type": "HowToStep",
          position: 9,
          name: "Post-Event Support",
          text: "Supporting vendor closure, deliverables, event reports, media coordination, content handover and final documentation where required.",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/events-weddings/#event-types",
      name: "Events Planned and Managed",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Corporate Events",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Brand Events",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Weddings",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Social Events",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Hospitality Events",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Fashion and Lifestyle Events",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Entertainment Events",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Government and Institutional Events",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/events-weddings/#wedding-services",
      name: "Wedding Planning Services",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Complete Wedding Planning",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Destination Wedding Planning",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Luxury Wedding Management",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Wedding Décor and Theme Planning",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Guest Management",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Wedding Logistics",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Entertainment and Artist Management",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Vendor Coordination",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Ritual and Function Planning",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/events-weddings/#locations",
      name: "Event Management and Wedding Planning Locations",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Mumbai",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Delhi NCR",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Chandigarh",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Pune",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Bangalore",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Hyderabad",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Jaipur",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Udaipur",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Goa",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Ahmedabad",
        },
        {
          "@type": "ListItem",
          position: 11,
          name: "Ludhiana",
        },
        {
          "@type": "ListItem",
          position: 12,
          name: "Amritsar",
        },
        {
          "@type": "ListItem",
          position: 13,
          name: "Kasauli",
        },
        {
          "@type": "ListItem",
          position: 14,
          name: "Shimla",
        },
        {
          "@type": "ListItem",
          position: 15,
          name: "Across India",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.dtsworld.in/services/events-weddings/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What event management services does Double Trouble Studio provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Double Trouble Studio provides end-to-end event management services including corporate events, brand launches, product launches, hospitality events, fashion shows, entertainment nights, award ceremonies, conferences, exhibitions, private celebrations and luxury experiences across India.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide complete wedding planning services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio provides complete wedding planning services including venue coordination, décor planning, vendor management, entertainment, guest hospitality, logistics, travel support and event-day supervision.",
          },
        },
        {
          "@type": "Question",
          name: "Do you plan destination weddings in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio plans destination weddings across India including Jaipur, Udaipur, Goa, Delhi NCR, Chandigarh, Mumbai, Pune, Hyderabad, Jodhpur, Mussoorie, Kasauli, Shimla, Amritsar, Ludhiana and Rishikesh.",
          },
        },
        {
          "@type": "Question",
          name: "What types of events do you plan and manage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Double Trouble Studio plans and manages corporate events, brand events, luxury weddings, destination weddings, social events, hospitality events, fashion events, entertainment events, exhibitions, conferences and institutional events.",
          },
        },
        {
          "@type": "Question",
          name: "Do you manage corporate events and brand launches?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio manages corporate events, leadership summits, annual days, award nights, brand launches, product launches, showroom openings, media events and promotional experiences.",
          },
        },
        {
          "@type": "Question",
          name: "Can you manage luxury weddings and premium celebrations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio manages luxury weddings and premium celebrations with attention to aesthetics, guest comfort, hospitality, family coordination, entertainment, décor and seamless event flow.",
          },
        },
        {
          "@type": "Question",
          name: "Do you help with décor, theme and production planning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The team helps with event concepts, décor direction, mood boards, stage design, lighting, sound, branding, seating layouts, entry design, mandap design, floral styling and production planning.",
          },
        },
        {
          "@type": "Question",
          name: "Do you coordinate vendors for events and weddings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio coordinates decorators, caterers, production teams, photographers, videographers, makeup artists, stylists, entertainers, sound vendors, lighting teams and other event partners.",
          },
        },
        {
          "@type": "Question",
          name: "Do you manage guest hospitality and logistics?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Guest hospitality and logistics support can include guest lists, RSVP coordination, welcome desks, rooming lists, airport pickups, check-ins, itineraries, transport, accommodation coordination and on-ground assistance.",
          },
        },
        {
          "@type": "Question",
          name: "Can you arrange artists, celebrities and entertainment for events?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio can coordinate singers, DJs, anchors, celebrity performers, folk artists, dancers, live bands, comedians, hosts and special acts for weddings, corporate events and private celebrations.",
          },
        },
        {
          "@type": "Question",
          name: "Which cities do you provide event management services in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Double Trouble Studio provides event management and wedding planning services across Mumbai, Delhi NCR, Chandigarh, Pune, Bangalore, Hyderabad, Jaipur, Udaipur, Goa, Ahmedabad, Ludhiana, Amritsar, Kasauli, Shimla, Kolkata, Chennai and other locations across India.",
          },
        },
        {
          "@type": "Question",
          name: "What information do you need to start planning an event?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To start planning an event, the team usually needs the event type, event date, city, venue preference, expected guest count, budget range, number of functions, décor preference, hospitality requirements, entertainment needs and logistics expectations.",
          },
        },
        {
          "@type": "Question",
          name: "Why should we choose Double Trouble Studio for event and wedding management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Double Trouble Studio combines creative direction, vendor coordination, luxury hospitality understanding, guest experience planning and on-ground execution control to deliver professional event and wedding experiences.",
          },
        },
        {
          "@type": "Question",
          name: "How much do event management and wedding planning services cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Event management and wedding planning cost depends on event type, guest count, venue, city, décor, production, entertainment, logistics, hospitality requirements, number of functions and execution scope.",
          },
        },
      ],
    },
  ],
};

export default function EventsWeddings() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventsWeddingsSchema),
        }}
      />

      <main>
        <Navbar />
        <EventWeddingHero />
        <EventsWeddingFeaturedWork/>
        <EndToEndEventWeddingServices />
        <OurEventManagementServices />
        <OurWeddingPlanningServices />
        <EventsWePlanManage />
        <WhyProfessionalEventManagementMatters />
        <EventWeddingManagementProcess />
        <DestinationWeddingPlanningIndia />
        <EventManagementServicesAcrossIndia />
        <IndustriesWeWorkWith />
        <WhyChooseDoubleTroubleStudioEvents />
        <EventWeddingUseCases />
        <InformationRequiredToPlanEvent />
        <EventsWeddingsFQA />
        <EventWeddingFinalCTA />
        <ServiceCityLinks serviceSlug="events-weddings" />
        <Footer />
     
      </main>
    </>
  );
}