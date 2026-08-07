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

const SITE_URL = "https://www.dtsworld.in/";

const PAGE_URL =
  "https://www.dtsworld.in/services/events-weddings";

const ORGANIZATION_ID =
  "https://www.dtsworld.in/#organization";

const WEBSITE_ID =
  "https://www.dtsworld.in/#website";

const LOGO_ID =
  "https://www.dtsworld.in/#logo";

const WEBPAGE_ID =
  `${PAGE_URL}#webpage`;

const SERVICE_ID =
  `${PAGE_URL}#service`;

const PRIMARY_IMAGE_ID =
  `${PAGE_URL}#primaryimage`;

const CATALOG_ID =
  `${PAGE_URL}#catalog`;

const BREADCRUMB_ID =
  `${PAGE_URL}#breadcrumb`;

const PROCESS_ID =
  `${PAGE_URL}#process`;

const EVENT_TYPES_ID =
  `${PAGE_URL}#event-types`;

const WEDDING_SERVICES_ID =
  `${PAGE_URL}#wedding-services`;

const LOCATIONS_ID =
  `${PAGE_URL}#locations`;

const FAQ_ID =
  `${PAGE_URL}#faq`;

export const metadata: Metadata = {
  title: {
    absolute:
      "Event Management & Wedding Planning Company India | Double Trouble Studio",
  },

  description:
    "End-to-end event management and wedding planning for corporate events, brand launches, destination weddings and luxury celebrations across India.",

  applicationName:
    "Double Trouble Studio",

  authors: [
    {
      name:
        "Double Trouble Studio",
      url:
        SITE_URL,
    },
  ],

  creator:
    "Double Trouble Studio",

  publisher:
    "Double Trouble Studio",

  category:
    "Event Management and Wedding Planning",

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
      PAGE_URL,
  },

  openGraph: {
    type:
      "website",

    locale:
      "en_IN",

    url:
      PAGE_URL,

    siteName:
      "Double Trouble Studio",

    title:
      "Event Management & Wedding Planning Company in India",

    description:
      "End-to-end planning, production, décor, hospitality, logistics and on-ground execution for corporate events, luxury weddings and destination celebrations.",

    images: [
      {
        url:
          "https://www.dtsworld.in/events-weddings-og.jpg",

        width:
          1200,

        height:
          630,

        alt:
          "Event Management and Wedding Planning Services by Double Trouble Studio",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Event Management & Wedding Planning Company in India",

    description:
      "Corporate events, brand launches, destination weddings, luxury celebrations, production, hospitality and complete on-ground execution across India.",

    images: [
      "https://www.dtsworld.in/events-weddings-og.jpg",
    ],
  },

  robots: {
    index:
      true,

    follow:
      true,

    nocache:
      false,

    googleBot: {
      index:
        true,

      follow:
        true,

      noimageindex:
        false,

      "max-image-preview":
        "large",

      "max-snippet":
        -1,

      "max-video-preview":
        -1,
    },
  },
};

// --------------------------------------------------
// SHARED DATA
// --------------------------------------------------

const serviceAreas = [
  {
    "@type": "Country",
    name: "India",
  },
  {
    "@type": "City",
    name: "Mumbai",
  },
  {
    "@type": "AdministrativeArea",
    name: "Delhi NCR",
  },
  {
    "@type": "City",
    name: "Chandigarh",
  },
  {
    "@type": "City",
    name: "Pune",
  },
  {
    "@type": "City",
    name: "Bengaluru",
    alternateName: "Bangalore",
  },
  {
    "@type": "City",
    name: "Hyderabad",
  },
  {
    "@type": "City",
    name: "Jaipur",
  },
  {
    "@type": "City",
    name: "Udaipur",
  },
  {
    "@type": "AdministrativeArea",
    name: "Goa",
  },
  {
    "@type": "City",
    name: "Ahmedabad",
  },
  {
    "@type": "City",
    name: "Ludhiana",
  },
  {
    "@type": "City",
    name: "Amritsar",
  },
  {
    "@type": "City",
    name: "Kasauli",
  },
  {
    "@type": "City",
    name: "Shimla",
  },
];

const eventTypes = [
  "Corporate Events",
  "Brand Events",
  "Weddings",
  "Social Events",
  "Hospitality Events",
  "Fashion and Lifestyle Events",
  "Entertainment Events",
  "Government and Institutional Events",
];

const weddingServices = [
  "Complete Wedding Planning",
  "Destination Wedding Planning",
  "Luxury Wedding Management",
  "Wedding Décor and Theme Planning",
  "Guest Management",
  "Wedding Logistics",
  "Entertainment and Artist Management",
  "Vendor Coordination",
  "Ritual and Function Planning",
];

const serviceOffers = [
  {
    slug:
      "corporate-event-management",
    offerSlug:
      "corporate-event-management-offer",
    name:
      "Corporate Event Management",
    serviceType:
      "Corporate Event Management",
    description:
      "Planning and execution support for corporate events, leadership gatherings, annual events, conferences and business experiences.",
  },
  {
    slug:
      "brand-event-management",
    offerSlug:
      "brand-event-management-offer",
    name:
      "Brand Event Management",
    serviceType:
      "Brand Event Management",
    description:
      "Planning, production and on-ground execution for brand launches, product launches, promotional events and branded experiences.",
  },
  {
    slug:
      "hospitality-event-management",
    offerSlug:
      "hospitality-event-management-offer",
    name:
      "Hospitality Event Management",
    serviceType:
      "Hospitality Event Management",
    description:
      "Event planning and guest experience coordination for hotel launches, restaurant openings and hospitality-led events.",
  },
  {
    slug:
      "fashion-lifestyle-events",
    offerSlug:
      "fashion-lifestyle-events-offer",
    name:
      "Fashion and Lifestyle Events",
    serviceType:
      "Fashion and Lifestyle Event Management",
    description:
      "Planning and execution for fashion shows, lifestyle launches, media events and premium brand experiences.",
  },
  {
    slug:
      "entertainment-events",
    offerSlug:
      "entertainment-events-offer",
    name:
      "Entertainment Events",
    serviceType:
      "Entertainment Event Management",
    description:
      "Planning, production and artist coordination for entertainment nights, live experiences, performances and celebrations.",
  },
  {
    slug:
      "complete-wedding-planning",
    offerSlug:
      "complete-wedding-planning-offer",
    name:
      "Complete Wedding Planning",
    serviceType:
      "Complete Wedding Planning",
    description:
      "End-to-end wedding planning covering venue coordination, décor, vendors, hospitality, logistics, entertainment and event-day supervision.",
  },
  {
    slug:
      "destination-wedding-planning",
    offerSlug:
      "destination-wedding-planning-offer",
    name:
      "Destination Wedding Planning",
    serviceType:
      "Destination Wedding Planning",
    description:
      "Planning and coordination for destination weddings across India including venue, travel, hospitality, décor, vendors and multiple functions.",
  },
  {
    slug:
      "luxury-wedding-management",
    offerSlug:
      "luxury-wedding-management-offer",
    name:
      "Luxury Wedding Management",
    serviceType:
      "Luxury Wedding Management",
    description:
      "Premium wedding management focused on aesthetics, guest comfort, hospitality, entertainment, family coordination and seamless execution.",
  },
  {
    slug:
      "wedding-decor-theme-planning",
    offerSlug:
      "wedding-decor-theme-planning-offer",
    name:
      "Wedding Décor and Theme Planning",
    serviceType:
      "Wedding Décor and Theme Planning",
    description:
      "Creative direction and planning for wedding décor, themes, stage design, mandap design, floral styling and visual experience.",
  },
  {
    slug:
      "wedding-guest-management",
    offerSlug:
      "wedding-guest-management-offer",
    name:
      "Wedding Guest Management",
    serviceType:
      "Wedding Guest Management",
    description:
      "RSVP coordination, guest lists, welcome desks, rooming lists, transport, check-ins, hospitality and on-ground guest assistance.",
  },
  {
    slug:
      "wedding-logistics",
    offerSlug:
      "wedding-logistics-offer",
    name:
      "Wedding Logistics",
    serviceType:
      "Wedding Logistics Management",
    description:
      "Travel, accommodation, transport, itineraries, venue movement and operational logistics for wedding functions.",
  },
  {
    slug:
      "entertainment-artist-management",
    offerSlug:
      "entertainment-artist-management-offer",
    name:
      "Entertainment and Artist Management",
    serviceType:
      "Entertainment and Artist Management",
    description:
      "Coordination of singers, DJs, anchors, celebrity performers, live bands, hosts and other entertainment acts.",
  },
  {
    slug:
      "vendor-coordination",
    offerSlug:
      "vendor-coordination-offer",
    name:
      "Vendor Coordination",
    serviceType:
      "Event and Wedding Vendor Coordination",
    description:
      "Coordination with décor, catering, production, photography, makeup, styling, entertainment, sound, lighting and other event partners.",
  },
  {
    slug:
      "ritual-function-planning",
    offerSlug:
      "ritual-function-planning-offer",
    name:
      "Ritual and Function Planning",
    serviceType:
      "Wedding Ritual and Function Planning",
    description:
      "Planning and coordination for wedding functions, rituals, timelines, family requirements and guest experience.",
  },
];

const processSteps = [
  {
    name:
      "Requirement Discovery",
    text:
      "Understanding the event type, date, city, guest count, budget range, venue preference, experience goals and required services.",
  },
  {
    name:
      "Concept and Planning",
    text:
      "Developing the event direction, theme, function structure, guest experience plan and execution approach.",
  },
  {
    name:
      "Venue and Vendor Coordination",
    text:
      "Coordinating with venues, decorators, caterers, production vendors, entertainment teams, photographers, logistics partners and hospitality teams.",
  },
  {
    name:
      "Budget Planning",
    text:
      "Aligning event requirements with budget, vendor costs, production needs and service priorities.",
  },
  {
    name:
      "Design and Production Planning",
    text:
      "Planning décor, stage setup, lighting, sound, branding, seating layouts, entry design, technical requirements and visual experience.",
  },
  {
    name:
      "Entertainment and Artist Coordination",
    text:
      "Managing anchors, DJs, singers, celebrity guests, performers, speakers, hosts and entertainment flow.",
  },
  {
    name:
      "Logistics and Hospitality",
    text:
      "Coordinating guest movement, travel, accommodation, transport, welcome desks, itineraries, hospitality requirements and backstage operations.",
  },
  {
    name:
      "Event-Day Execution",
    text:
      "Supervising vendors, timelines, guest flow, stage cues, hospitality, production, entertainment and last-minute requirements.",
  },
  {
    name:
      "Post-Event Support",
    text:
      "Supporting vendor closure, deliverables, event reports, media coordination, content handover and final documentation where required.",
  },
];

const locations = [
  "Mumbai",
  "Delhi NCR",
  "Chandigarh",
  "Pune",
  "Bangalore",
  "Hyderabad",
  "Jaipur",
  "Udaipur",
  "Goa",
  "Ahmedabad",
  "Ludhiana",
  "Amritsar",
  "Kasauli",
  "Shimla",
  "Across India",
];

const faqs = [
  {
    question:
      "What event management services does Double Trouble Studio provide?",
    answer:
      "Double Trouble Studio provides end-to-end event management services including corporate events, brand launches, product launches, hospitality events, fashion shows, entertainment nights, award ceremonies, conferences, exhibitions, private celebrations and luxury experiences across India.",
  },
  {
    question:
      "Do you provide complete wedding planning services?",
    answer:
      "Yes. Double Trouble Studio provides complete wedding planning services including venue coordination, décor planning, vendor management, entertainment, guest hospitality, logistics, travel support and event-day supervision.",
  },
  {
    question:
      "Do you plan destination weddings in India?",
    answer:
      "Yes. Double Trouble Studio plans destination weddings across India including Jaipur, Udaipur, Goa, Delhi NCR, Chandigarh, Mumbai, Pune, Hyderabad, Jodhpur, Mussoorie, Kasauli, Shimla, Amritsar, Ludhiana and Rishikesh.",
  },
  {
    question:
      "What types of events do you plan and manage?",
    answer:
      "Double Trouble Studio plans and manages corporate events, brand events, luxury weddings, destination weddings, social events, hospitality events, fashion events, entertainment events, exhibitions, conferences and institutional events.",
  },
  {
    question:
      "Do you manage corporate events and brand launches?",
    answer:
      "Yes. Double Trouble Studio manages corporate events, leadership summits, annual days, award nights, brand launches, product launches, showroom openings, media events and promotional experiences.",
  },
  {
    question:
      "Can you manage luxury weddings and premium celebrations?",
    answer:
      "Yes. Double Trouble Studio manages luxury weddings and premium celebrations with attention to aesthetics, guest comfort, hospitality, family coordination, entertainment, décor and seamless event flow.",
  },
  {
    question:
      "Do you help with décor, theme and production planning?",
    answer:
      "Yes. The team helps with event concepts, décor direction, mood boards, stage design, lighting, sound, branding, seating layouts, entry design, mandap design, floral styling and production planning.",
  },
  {
    question:
      "Do you coordinate vendors for events and weddings?",
    answer:
      "Yes. Double Trouble Studio coordinates decorators, caterers, production teams, photographers, videographers, makeup artists, stylists, entertainers, sound vendors, lighting teams and other event partners.",
  },
  {
    question:
      "Do you manage guest hospitality and logistics?",
    answer:
      "Yes. Guest hospitality and logistics support can include guest lists, RSVP coordination, welcome desks, rooming lists, airport pickups, check-ins, itineraries, transport, accommodation coordination and on-ground assistance.",
  },
  {
    question:
      "Can you arrange artists, celebrities and entertainment for events?",
    answer:
      "Yes. Double Trouble Studio can coordinate singers, DJs, anchors, celebrity performers, folk artists, dancers, live bands, comedians, hosts and special acts for weddings, corporate events and private celebrations.",
  },
  {
    question:
      "Which cities do you provide event management services in?",
    answer:
      "Double Trouble Studio provides event management and wedding planning services across Mumbai, Delhi NCR, Chandigarh, Pune, Bangalore, Hyderabad, Jaipur, Udaipur, Goa, Ahmedabad, Ludhiana, Amritsar, Kasauli, Shimla, Kolkata, Chennai and other locations across India.",
  },
  {
    question:
      "What information do you need to start planning an event?",
    answer:
      "To start planning an event, the team usually needs the event type, event date, city, venue preference, expected guest count, budget range, number of functions, décor preference, hospitality requirements, entertainment needs and logistics expectations.",
  },
  {
    question:
      "Why should we choose Double Trouble Studio for event and wedding management?",
    answer:
      "Double Trouble Studio combines creative direction, vendor coordination, luxury hospitality understanding, guest experience planning and on-ground execution control to deliver professional event and wedding experiences.",
  },
  {
    question:
      "How much do event management and wedding planning services cost?",
    answer:
      "Event management and wedding planning cost depends on event type, guest count, venue, city, décor, production, entertainment, logistics, hospitality requirements, number of functions and execution scope.",
  },
];

// --------------------------------------------------
// MAXIMUM USEFUL + VALID SCHEMA
// --------------------------------------------------

const schemaContext =
  "https://schema.org";

const logoSchema = {
  "@context":
    schemaContext,

  "@type":
    "ImageObject",

  "@id":
    LOGO_ID,

  url:
    "https://www.dtsworld.in/logo.png",

  contentUrl:
    "https://www.dtsworld.in/logo.png",

  caption:
    "Double Trouble Studio Logo",

  inLanguage:
    "en-IN",
};

const primaryImageSchema = {
  "@context":
    schemaContext,

  "@type":
    "ImageObject",

  "@id":
    PRIMARY_IMAGE_ID,

  url:
    "https://www.dtsworld.in/events-weddings-og.jpg",

  contentUrl:
    "https://www.dtsworld.in/events-weddings-og.jpg",

  width:
    1200,

  height:
    630,

  caption:
    "Event Management and Wedding Planning Services by Double Trouble Studio",

  representativeOfPage:
    true,

  inLanguage:
    "en-IN",
};

const organizationSchema = {
  "@context":
    schemaContext,

  "@type": [
    "Organization",
    "LocalBusiness",
  ],

  "@id":
    ORGANIZATION_ID,

  name:
    "Double Trouble Studio",

  legalName:
    "Double Trouble Studio Pvt. Ltd.",

  alternateName: [
    "DTS",
    "DTS World",
  ],

  url:
    SITE_URL,

  logo: {
    "@id":
      LOGO_ID,
  },

  image: {
    "@id":
      LOGO_ID,
  },

  description:
    "Double Trouble Studio is a Mumbai-based creative agency providing event management, wedding planning, guest management, celebrity management, branding, digital marketing, public relations, website development, SEO, AI video production and VFX services across India.",

  slogan:
    "Creative Agency for Brands, Events and Digital Growth",

  telephone:
    "+918000006021",

  email:
    "hellodoubletroublestudio@gmail.com",

  priceRange:
    "Custom quotations",

  address: {
    "@type":
      "PostalAddress",

    streetAddress:
      "Plot No. 177, 1st Floor, Aaram Nagar Part 2, Seven Bungalows, J. P. Road, Versova, Andheri West",

    addressLocality:
      "Mumbai",

    addressRegion:
      "Maharashtra",

    postalCode:
      "400061",

    addressCountry:
      "IN",
  },

  contactPoint: {
    "@type":
      "ContactPoint",

    "@id":
      "https://www.dtsworld.in/#contact-point",

    contactType:
      "project enquiries",

    telephone:
      "+918000006021",

    email:
      "hellodoubletroublestudio@gmail.com",

    url:
      "https://www.dtsworld.in/contact",

    areaServed: {
      "@type":
        "Country",
      name:
        "India",
    },

    availableLanguage: [
      "English",
      "Hindi",
    ],
  },

  areaServed:
    serviceAreas,

  knowsAbout: [
    "Event Management",
    "Wedding Planning",
    "Destination Wedding Planning",
    "Luxury Wedding Management",
    "Corporate Event Management",
    "Brand Launch Events",
    "Product Launch Events",
    "Hospitality Events",
    "Fashion Shows",
    "Entertainment Events",
    "Award Ceremonies",
    "Conference Management",
    "Exhibition Management",
    "Guest Management",
    "Artist Management",
    "Celebrity Booking",
    "Vendor Coordination",
    "Event Production",
    "Event Logistics",
    "Wedding Hospitality",
    "Wedding Décor Planning",
  ],

  hasOfferCatalog: {
    "@id":
      CATALOG_ID,
  },
};

const websiteSchema = {
  "@context":
    schemaContext,

  "@type":
    "WebSite",

  "@id":
    WEBSITE_ID,

  url:
    SITE_URL,

  name:
    "Double Trouble Studio",

  alternateName: [
    "DTS",
    "DTS World",
  ],

  description:
    "Double Trouble Studio is a creative agency in Mumbai providing branding, digital marketing, public relations, event management, wedding planning, guest management, celebrity management, website development, SEO, AI video production and VFX services across India.",

  publisher: {
    "@id":
      ORGANIZATION_ID,
  },

  inLanguage:
    "en-IN",
};

const webPageSchema = {
  "@context":
    schemaContext,

  "@type":
    "WebPage",

  "@id":
    WEBPAGE_ID,

  url:
    PAGE_URL,

  name:
    "Event Management & Wedding Planning Company India | Double Trouble Studio",

  headline:
    "Event Management and Wedding Planning Services Across India",

  description:
    "End-to-end event management and wedding planning for corporate events, brand launches, destination weddings and luxury celebrations across India.",

  isPartOf: {
    "@id":
      WEBSITE_ID,
  },

  about: {
    "@id":
      SERVICE_ID,
  },

  mainEntity: {
    "@id":
      SERVICE_ID,
  },

  publisher: {
    "@id":
      ORGANIZATION_ID,
  },

  primaryImageOfPage: {
    "@id":
      PRIMARY_IMAGE_ID,
  },

  breadcrumb: {
    "@id":
      BREADCRUMB_ID,
  },

  hasPart: [
    {
      "@id":
        PROCESS_ID,
    },
    {
      "@id":
        FAQ_ID,
    },
  ],

  mentions: [
    {
      "@id":
        CATALOG_ID,
    },
    {
      "@id":
        EVENT_TYPES_ID,
    },
    {
      "@id":
        WEDDING_SERVICES_ID,
    },
    {
      "@id":
        LOCATIONS_ID,
    },
  ],

  significantLink: [
    "https://www.dtsworld.in/contact",
    "https://www.dtsworld.in/work",
    "https://www.dtsworld.in/services/guest-management",
    "https://www.dtsworld.in/services/celebrity-management",
  ],

  copyrightYear:
    2026,

  copyrightHolder: {
    "@id":
      ORGANIZATION_ID,
  },

  inLanguage:
    "en-IN",
};

const serviceSchema = {
  "@context":
    schemaContext,

  "@type":
    "Service",

  "@id":
    SERVICE_ID,

  name:
    "Event Management and Wedding Planning Services",

  alternateName: [
    "Event Management Services",
    "Wedding Planning Services",
    "Luxury Wedding Planning",
    "Destination Wedding Planning",
  ],

  url:
    PAGE_URL,

  image: {
    "@id":
      PRIMARY_IMAGE_ID,
  },

  serviceType: [
    "Event Management",
    "Wedding Planning",
    "Destination Wedding Planning",
    "Luxury Wedding Management",
    "Corporate Event Management",
    "Brand Event Management",
    "Event Production",
    "Guest Hospitality",
    "Event Logistics",
    "Artist Management",
  ],

  category:
    "Event Management and Wedding Planning Services",

  description:
    "Double Trouble Studio provides complete event management and wedding planning services across India, including corporate events, brand launches, product launches, hospitality events, luxury weddings, destination weddings, fashion shows, entertainment nights, award ceremonies, exhibitions, private celebrations and institutional events.",

  provider: {
    "@id":
      ORGANIZATION_ID,
  },

  audience: {
    "@type":
      "BusinessAudience",

    name:
      "Brands, families and organizations seeking professional event and wedding management",

    audienceType:
      "Brands, corporate organizations, hospitality businesses, wedding families, luxury clients, event hosts, founders and institutions seeking end-to-end planning and execution",
  },

  areaServed:
    serviceAreas,

  hasOfferCatalog: {
    "@id":
      CATALOG_ID,
  },

  mainEntityOfPage: {
    "@id":
      WEBPAGE_ID,
  },
};

const offerCatalogSchema = {
  "@context":
    schemaContext,

  "@type":
    "OfferCatalog",

  "@id":
    CATALOG_ID,

  url:
    `${PAGE_URL}#services`,

  name:
    "Event Management and Wedding Planning Services Offered",

  description:
    "Event and wedding management services covering corporate events, brand events, hospitality events, wedding planning, destination weddings, décor, hospitality, logistics, entertainment and vendor coordination.",

  numberOfItems:
    serviceOffers.length,

  itemListOrder:
    "https://schema.org/ItemListOrderAscending",

  itemListElement:
    serviceOffers.map(
      (service) => ({
        "@type":
          "Offer",

        "@id":
          `${PAGE_URL}#${service.offerSlug}`,

        seller: {
          "@id":
            ORGANIZATION_ID,
        },

        itemOffered: {
          "@type":
            "Service",

          "@id":
            `${PAGE_URL}#${service.slug}`,

          name:
            service.name,

          serviceType:
            service.serviceType,

          description:
            service.description,

          provider: {
            "@id":
              ORGANIZATION_ID,
          },

          areaServed: {
            "@type":
              "Country",
            name:
              "India",
          },
        },
      }),
    ),
};

const breadcrumbSchema = {
  "@context":
    schemaContext,

  "@type":
    "BreadcrumbList",

  "@id":
    BREADCRUMB_ID,

  itemListElement: [
    {
      "@type":
        "ListItem",

      position:
        1,

      name:
        "Home",

      item:
        SITE_URL,
    },
    {
      "@type":
        "ListItem",

      position:
        2,

      name:
        "Services",

      item:
        "https://www.dtsworld.in/services",
    },
    {
      "@type":
        "ListItem",

      position:
        3,

      name:
        "Events & Weddings",

      item:
        PAGE_URL,
    },
  ],
};

const processSchema = {
  "@context":
    schemaContext,

  "@type":
    "HowTo",

  "@id":
    PROCESS_ID,

  url:
    `${PAGE_URL}#process`,

  name:
    "Event and Wedding Management Process",

  description:
    "A structured event and wedding planning process from requirement discovery to final execution and post-event support.",

  isPartOf: {
    "@id":
      WEBPAGE_ID,
  },

  about: {
    "@id":
      SERVICE_ID,
  },

  inLanguage:
    "en-IN",

  step:
    processSteps.map(
      (step, index) => ({
        "@type":
          "HowToStep",

        position:
          index + 1,

        name:
          step.name,

        text:
          step.text,
      }),
    ),
};

const eventTypesSchema = {
  "@context":
    schemaContext,

  "@type":
    "ItemList",

  "@id":
    EVENT_TYPES_ID,

  name:
    "Events Planned and Managed",

  description:
    "Types of corporate, brand, wedding, social, hospitality, lifestyle, entertainment and institutional events planned and managed by Double Trouble Studio.",

  numberOfItems:
    eventTypes.length,

  itemListOrder:
    "https://schema.org/ItemListOrderAscending",

  itemListElement:
    eventTypes.map(
      (eventType, index) => ({
        "@type":
          "ListItem",

        position:
          index + 1,

        name:
          eventType,
      }),
    ),
};

const weddingServicesSchema = {
  "@context":
    schemaContext,

  "@type":
    "ItemList",

  "@id":
    WEDDING_SERVICES_ID,

  name:
    "Wedding Planning Services",

  description:
    "Wedding planning services including complete planning, destination weddings, luxury wedding management, décor, guest management, logistics, entertainment, vendors and ritual planning.",

  numberOfItems:
    weddingServices.length,

  itemListOrder:
    "https://schema.org/ItemListOrderAscending",

  itemListElement:
    weddingServices.map(
      (service, index) => ({
        "@type":
          "ListItem",

        position:
          index + 1,

        name:
          service,
      }),
    ),
};

const locationsSchema = {
  "@context":
    schemaContext,

  "@type":
    "ItemList",

  "@id":
    LOCATIONS_ID,

  name:
    "Event Management and Wedding Planning Locations",

  description:
    "Major cities and destination wedding locations served by Double Trouble Studio across India.",

  numberOfItems:
    locations.length,

  itemListOrder:
    "https://schema.org/ItemListUnordered",

  itemListElement:
    locations.map(
      (location, index) => ({
        "@type":
          "ListItem",

        position:
          index + 1,

        name:
          location,
      }),
    ),
};

const faqSchema = {
  "@context":
    schemaContext,

  "@type":
    "FAQPage",

  "@id":
    FAQ_ID,

  url:
    `${PAGE_URL}#faq`,

  name:
    "Event Management and Wedding Planning Frequently Asked Questions",

  description:
    "Answers to common questions about event management, wedding planning, destination weddings, corporate events, décor, vendors, guest hospitality, logistics, artists, locations and pricing.",

  isPartOf: {
    "@id":
      WEBPAGE_ID,
  },

  about: {
    "@id":
      SERVICE_ID,
  },

  publisher: {
    "@id":
      ORGANIZATION_ID,
  },

  inLanguage:
    "en-IN",

  mainEntity:
    faqs.map(
      (faq, index) => ({
        "@type":
          "Question",

        "@id":
          `${PAGE_URL}#faq-${index + 1}`,

        name:
          faq.question,

        acceptedAnswer: {
          "@type":
            "Answer",

          "@id":
            `${PAGE_URL}#faq-${index + 1}-answer`,

          text:
            faq.answer,
        },
      }),
    ),
};

// Separate JSON-LD blocks help validators surface each
// major schema entity while preserving one connected
// graph through stable @id references.
const structuredDataBlocks = [
  logoSchema,
  primaryImageSchema,
  organizationSchema,
  websiteSchema,
  webPageSchema,
  serviceSchema,
  offerCatalogSchema,
  breadcrumbSchema,
  processSchema,
  eventTypesSchema,
  weddingServicesSchema,
  locationsSchema,
  faqSchema,
];

export default function EventsWeddings() {
  return (
    <>
      {structuredDataBlocks.map(
        (schema, index) => (
          <script
            key={`events-weddings-schema-${index}`}
            id={`events-weddings-structured-data-${index + 1}`}
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html:
                JSON.stringify(
                  schema,
                ).replace(
                  /</g,
                  "\\u003c",
                ),
            }}
          />
        ),
      )}

      <main>
        <Navbar />

        <EventWeddingHero />

        <EventsWeddingFeaturedWork />

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

        <ServiceCityLinks
          serviceSlug="events-weddings"
        />

        <Footer />
      </main>
    </>
  );
}