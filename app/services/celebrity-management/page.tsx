import CelebrityBookingIntro from "@/components/CelebrityManagement/CelebrityBookingIntro";
import CelebrityEventTypes from "@/components/CelebrityManagement/CelebrityEventTypes";
import CelebrityFeaturedWork from "@/components/CelebrityManagement/celebrityfeatured";
import CelebrityManagementCTA from "@/components/CelebrityManagement/CelebrityManagementCTA";
import CelebrityManagementFAQ from "@/components/CelebrityManagement/CelebrityManagementFAQ";
import CelebrityManagementHero from "@/components/CelebrityManagement/CelebrityManagementHero";
import CelebrityManagementIndiaCoverage from "@/components/CelebrityManagement/CelebrityManagementIndiaCoverage";
import CelebrityManagementIndustries from "@/components/CelebrityManagement/CelebrityManagementIndustries";
import CelebrityManagementProcess from "@/components/CelebrityManagement/CelebrityManagementProcess";
import CelebrityManagementServices from "@/components/CelebrityManagement/CelebrityManagementServices";
import CelebrityTalentTypesSection from "@/components/CelebrityManagement/CelebrityTalentTypesSection";
import CelebrityUseCasesBookingInfo from "@/components/CelebrityManagement/CelebrityUseCasesBookingInfo";
import WhatIsCelebrityManagement from "@/components/CelebrityManagement/WhatIsCelebrityManagement";
import WhyWorkWithDoubleTroubleStudio from "@/components/CelebrityManagement/WhyWorkWithDoubleTroubleStudio";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServiceCityLinks from "@/components/seo/ServiceCityLinks";

import type { Metadata } from "next";

const SITE_URL = "https://www.dtsworld.in/";
const PAGE_URL =
  "https://www.dtsworld.in/services/celebrity-management";

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

const TALENT_CATEGORIES_ID =
  `${PAGE_URL}#talent-categories`;

const FAQ_ID =
  `${PAGE_URL}#faq`;

export const metadata: Metadata = {
  title: {
    absolute:
      "Celebrity Management Company in India | Double Trouble Studio",
  },

  description:
    "Book celebrities, influencers, hosts, speakers and performers for brand campaigns, corporate events, luxury experiences and private celebrations across India.",

  applicationName:
    "Double Trouble Studio",

  authors: [
    {
      name:
        "Double Trouble Studio",
      url: SITE_URL,
    },
  ],

  creator:
    "Double Trouble Studio",

  publisher:
    "Double Trouble Studio",

  category:
    "Celebrity Management Services",

  keywords: [
    "celebrity management company in India",
    "celebrity management services",
    "celebrity booking agency India",
    "celebrity booking services",
    "Bollywood celebrity booking",
    "celebrity endorsement agency",
    "celebrity appearance management",
    "celebrity booking for corporate events",
    "celebrity booking for weddings",
    "celebrity booking for brand launches",
    "celebrity host booking",
    "celebrity anchor booking",
    "singer booking agency India",
    "performer booking agency",
    "sports personality booking",
    "public figure management",
    "motivational speaker booking",
    "influencer collaboration agency",
    "creator collaboration agency",
    "brand ambassador management",
    "corporate event talent management",
    "luxury event celebrity booking",
    "hospitality celebrity activation",
    "celebrity management Mumbai",
    "celebrity booking Mumbai",
    "celebrity management Delhi",
    "celebrity management Bengaluru",
    "celebrity management across India",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: PAGE_URL,

    siteName:
      "Double Trouble Studio",

    title:
      "Celebrity Management Company in India | Double Trouble Studio",

    description:
      "End-to-end celebrity booking, talent sourcing, negotiations, contracts, logistics and event-day coordination for brands and premium events across India.",

    images: [
      {
        url:
          "https://www.dtsworld.in/celebrity-management-og.jpg",

        width: 1200,

        height: 630,

        alt:
          "Celebrity Management and Celebrity Booking Services by Double Trouble Studio",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Celebrity Management Company in India | Double Trouble Studio",

    description:
      "Celebrity booking, endorsements, influencer collaborations, hosts, speakers and performers for campaigns and premium events across India.",

    images: [
      "https://www.dtsworld.in/celebrity-management-og.jpg",
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
    name: "Bengaluru",
    alternateName: "Bangalore",
  },
  {
    "@type": "City",
    name: "Hyderabad",
  },
  {
    "@type": "City",
    name: "Pune",
  },
  {
    "@type": "City",
    name: "Ahmedabad",
  },
  {
    "@type": "City",
    name: "Jaipur",
  },
  {
    "@type": "AdministrativeArea",
    name: "Goa",
  },
  {
    "@type": "City",
    name: "Chennai",
  },
  {
    "@type": "City",
    name: "Kolkata",
  },
  {
    "@type": "City",
    name: "Chandigarh",
  },
];

const serviceOffers = [
  {
    slug:
      "celebrity-booking",
    offerSlug:
      "celebrity-booking-offer",
    name:
      "Celebrity Booking and Talent Acquisition",
    serviceType:
      "Celebrity Booking and Talent Acquisition",
    description:
      "Talent sourcing, availability checks, shortlisting and booking coordination for celebrities and public personalities.",
  },

  {
    slug:
      "bollywood-celebrity-booking",
    offerSlug:
      "bollywood-booking-offer",
    name:
      "Bollywood Celebrity Booking",
    serviceType:
      "Bollywood Celebrity Booking",
    description:
      "Booking and coordination support for Bollywood celebrity appearances, campaigns, launches, events and private experiences.",
  },

  {
    slug:
      "celebrity-endorsements",
    offerSlug:
      "celebrity-endorsement-offer",
    name:
      "Celebrity Endorsement Campaigns",
    serviceType:
      "Celebrity Endorsement Campaigns",
    description:
      "Celebrity endorsement planning, talent alignment, commercial coordination, campaign deliverables and usage-right discussions.",
  },

  {
    slug:
      "celebrity-appearance-management",
    offerSlug:
      "celebrity-appearance-offer",
    name:
      "Celebrity Appearance Management",
    serviceType:
      "Celebrity Appearance Management",
    description:
      "End-to-end coordination for celebrity appearances including timing, logistics, event flow, media moments and stakeholder alignment.",
  },

  {
    slug:
      "influencer-creator-collaborations",
    offerSlug:
      "influencer-collaboration-offer",
    name:
      "Influencer and Creator Collaborations",
    serviceType:
      "Influencer and Creator Collaborations",
    description:
      "Influencer and creator partnerships for branded content, social campaigns, launches, hospitality activations and digital promotions.",
  },

  {
    slug:
      "corporate-event-talent",
    offerSlug:
      "corporate-talent-offer",
    name:
      "Corporate Event Talent Management",
    serviceType:
      "Corporate Event Talent Management",
    description:
      "Celebrity, host, speaker and performer coordination for corporate events, conferences, launches and business gatherings.",
  },

  {
    slug:
      "singer-performer-booking",
    offerSlug:
      "performer-booking-offer",
    name:
      "Singer and Performer Booking",
    serviceType:
      "Singer and Performer Booking",
    description:
      "Talent booking and coordination for singers, musicians, performers, anchors and entertainment acts.",
  },

  {
    slug:
      "brand-ambassador-programs",
    offerSlug:
      "brand-ambassador-offer",
    name:
      "Brand Ambassador Programs",
    serviceType:
      "Brand Ambassador Programs",
    description:
      "Talent identification and partnership coordination for long-term brand ambassador relationships and integrated campaigns.",
  },
];

const processSteps = [
  {
    name:
      "Requirement Discovery",

    text:
      "Understanding the event goals, campaign objective, audience profile, preferred talent category, city, date, budget range and expected deliverables.",
  },

  {
    name:
      "Talent Research and Shortlisting",

    text:
      "Identifying suitable celebrities, influencers, speakers or performers based on relevance, availability, popularity, audience fit and brand positioning.",
  },

  {
    name:
      "Outreach and Negotiation",

    text:
      "Managing talent outreach, availability checks, commercial discussions, appearance terms, deliverables and negotiation.",
  },

  {
    name:
      "Contract and Compliance",

    text:
      "Coordinating agreements, usage rights, appearance clauses, deliverables, brand category terms, payment schedules and documentation.",
  },

  {
    name:
      "Logistics Planning",

    text:
      "Managing travel, accommodation, hospitality, security, green room requirements, schedules, technical needs and event-day movement planning.",
  },

  {
    name:
      "Event-Day Coordination",

    text:
      "Overseeing arrival coordination, backstage communication, media moments, stage flow, guest interaction, stakeholder alignment and departure planning.",
  },

  {
    name:
      "Post-Event Support",

    text:
      "Supporting campaign deliverables, content coordination, reporting, usage confirmations and post-event closure.",
  },
];

const eventTypes = [
  "Corporate Events",
  "Product Launches",
  "Brand Activations",
  "Hotel Launches",
  "Restaurant Openings",
  "Luxury Experiences",
  "Fashion Shows",
  "Award Ceremonies",
  "Weddings and Private Celebrations",
  "Conferences and Summits",
  "Trade Shows and Exhibitions",
  "Entertainment Events",
];

const talentCategories = [
  "Bollywood Actors",
  "Regional Film Actors",
  "OTT Actors",
  "Television Personalities",
  "Sports Personalities",
  "Influencers",
  "Content Creators",
  "Motivational Speakers",
  "Musicians and Singers",
  "Anchors and Hosts",
  "Public Figures",
];

const faqs = [
  {
    question:
      "What is celebrity management?",

    answer:
      "Celebrity management involves sourcing, booking, coordinating and managing public personalities for events, campaigns, endorsements, promotions and brand collaborations.",
  },

  {
    question:
      "How does celebrity booking work?",

    answer:
      "Celebrity booking usually starts with understanding the event or campaign requirement, talent category, date, city, budget, deliverables and usage needs. The agency then shortlists suitable talent, checks availability, negotiates terms and manages coordination.",
  },

  {
    question:
      "Can you arrange celebrities for brand endorsements?",

    answer:
      "Yes. Double Trouble Studio helps brands coordinate celebrity endorsement campaigns, brand ambassador partnerships, digital promotions, product launches and advertising collaborations.",
  },

  {
    question:
      "How much does it cost to hire a celebrity in India?",

    answer:
      "The cost to hire a celebrity in India depends on talent popularity, appearance duration, event city, campaign deliverables, usage rights, travel requirements, exclusivity and brand category.",
  },

  {
    question:
      "Can celebrities be booked for social media promotions?",

    answer:
      "Yes. Celebrities, influencers and creators can be booked for social media promotions, branded reels, Instagram posts, YouTube integrations, short-form videos and digital campaign content.",
  },

  {
    question:
      "Can you arrange Bollywood celebrities for private events?",

    answer:
      "Yes. Bollywood celebrities can be arranged for private events, weddings, luxury celebrations, hospitality experiences and brand-led gatherings subject to availability, requirements and commercial terms.",
  },

  {
    question:
      "Do celebrity endorsement fees include usage rights?",

    answer:
      "Not always. Usage rights are usually discussed separately and depend on campaign duration, media platforms, geography, exclusivity, content format and brand category.",
  },

  {
    question:
      "What types of events can include celebrity appearances?",

    answer:
      "Celebrity appearances can be planned for corporate events, product launches, brand activations, hotel launches, restaurant openings, luxury experiences, fashion shows, award ceremonies, weddings, conferences, exhibitions and entertainment events.",
  },

  {
    question:
      "Do you manage influencer collaborations?",

    answer:
      "Yes. Double Trouble Studio manages influencer and creator collaborations for social media campaigns, launch visibility, branded content, hospitality activations, fashion campaigns and audience engagement.",
  },

  {
    question:
      "What information is required to book a celebrity?",

    answer:
      "Celebrity booking usually requires event date, event city and venue, type of event or campaign, preferred celebrity category, expected appearance duration, brand details, audience profile, budget range, deliverables, travel expectations and content rights requirements.",
  },
];

// --------------------------------------------------
// MAXIMUM USEFUL + VALID STRUCTURED DATA
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
    "https://www.dtsworld.in/celebrity-management-og.jpg",

  contentUrl:
    "https://www.dtsworld.in/celebrity-management-og.jpg",

  width:
    1200,

  height:
    630,

  caption:
    "Celebrity Management and Celebrity Booking Services by Double Trouble Studio",

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
    "Double Trouble Studio is a Mumbai-based creative agency providing celebrity management, celebrity booking, event management, guest management, branding, digital marketing, public relations, website development, SEO, AI video production and VFX services across India.",

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
    "Celebrity Management",
    "Celebrity Booking",
    "Talent Coordination",
    "Bollywood Celebrity Booking",
    "Celebrity Endorsement Campaigns",
    "Celebrity Appearance Management",
    "Influencer Collaborations",
    "Creator Collaborations",
    "Brand Ambassador Programs",
    "Corporate Event Talent Management",
    "Singer Booking",
    "Performer Booking",
    "Host and Anchor Booking",
    "Speaker Booking",
    "Sports Personality Booking",
    "Public Figure Management",
    "Celebrity Logistics",
    "Celebrity Event Coordination",
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
    "Double Trouble Studio is a creative agency in Mumbai providing branding, digital marketing, public relations, event management, guest management, celebrity management, website development, SEO, AI video production and VFX services across India.",

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
    "Celebrity Management Company in India | Double Trouble Studio",

  headline:
    "Celebrity Management Company in India for Brand Campaigns, Corporate Events & Luxury Experiences",

  description:
    "Celebrity management and celebrity booking services in India for brand campaigns, corporate events, luxury experiences, hospitality launches, weddings, private celebrations and promotional appearances.",

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

  // HowTo and FAQPage are CreativeWork-based types,
  // so they are safe targets for hasPart.
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

  // OfferCatalog and ItemList are Things, not CreativeWork.
  // Use mentions instead of invalid hasPart relationships.
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
        TALENT_CATEGORIES_ID,
    },
  ],

  significantLink: [
    "https://www.dtsworld.in/contact",
    "https://www.dtsworld.in/work",
    "https://www.dtsworld.in/services/guest-management",
    "https://www.dtsworld.in/services/events-weddings",
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
    "Celebrity Management Services",

  alternateName: [
    "Celebrity Booking Services",
    "Celebrity Booking Agency Services",
    "Talent Management Services",
    "Celebrity Appearance Management",
  ],

  url:
    PAGE_URL,

  image: {
    "@id":
      PRIMARY_IMAGE_ID,
  },

  serviceType: [
    "Celebrity Management",
    "Celebrity Booking",
    "Talent Coordination",
    "Celebrity Endorsement Campaigns",
    "Celebrity Appearance Management",
    "Influencer and Creator Collaborations",
    "Corporate Event Talent Management",
    "Singer and Performer Booking",
    "Brand Ambassador Programs",
  ],

  category:
    "Celebrity, Talent and Entertainment Management Services",

  description:
    "Double Trouble Studio provides celebrity management, celebrity booking and talent coordination services for brand campaigns, corporate events, luxury experiences, hospitality launches, product launches, weddings, private celebrations and promotional appearances across India.",

  provider: {
    "@id":
      ORGANIZATION_ID,
  },

  audience: {
    "@type":
      "BusinessAudience",

    name:
      "Brands and organizations seeking celebrity and talent partnerships",

    audienceType:
      "Brands, event planners, corporate organizations, hospitality businesses, luxury brands, wedding planners, agencies and founders seeking celebrity and talent partnerships",
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
    "Celebrity Management Services Offered",

  description:
    "Celebrity and talent management services covering celebrity booking, endorsements, appearances, influencer collaborations, corporate event talent, performer bookings and brand ambassador programs.",

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
        "Celebrity Management",

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
    "Celebrity Management Process",

  description:
    "A structured celebrity management process from requirement discovery to post-event support.",

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
    "Celebrity Booking Services for Different Event Types",

  description:
    "Event types supported through celebrity booking and talent management services.",

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

const talentCategoriesSchema = {
  "@context":
    schemaContext,

  "@type":
    "ItemList",

  "@id":
    TALENT_CATEGORIES_ID,

  name:
    "Types of Talent Managed",

  description:
    "Talent categories supported by Double Trouble Studio for celebrity management, appearances, campaigns and events.",

  numberOfItems:
    talentCategories.length,

  itemListOrder:
    "https://schema.org/ItemListOrderAscending",

  itemListElement:
    talentCategories.map(
      (category, index) => ({
        "@type":
          "ListItem",

        position:
          index + 1,

        name:
          category,
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
    "Celebrity Management Frequently Asked Questions",

  description:
    "Answers to common questions about celebrity management, celebrity booking, endorsements, appearances, social media promotions, talent fees and campaign requirements.",

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

// Separate JSON-LD blocks make the major schema entities
// easier for validators to surface while preserving one
// connected entity graph through stable @id references.
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
  talentCategoriesSchema,
  faqSchema,
];

export default function CelebrityManagement() {
  return (
    <>
      {structuredDataBlocks.map(
        (schema, index) => (
          <script
            key={`celebrity-management-schema-${index}`}
            id={`celebrity-management-structured-data-${index + 1}`}
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

        <CelebrityManagementHero />

        <CelebrityFeaturedWork />

        <CelebrityBookingIntro />

        <WhatIsCelebrityManagement />

        <CelebrityManagementServices />

        <CelebrityEventTypes />

        <CelebrityManagementIndustries />

        <CelebrityManagementProcess />

        <CelebrityTalentTypesSection />

        <WhyWorkWithDoubleTroubleStudio />

        <CelebrityManagementIndiaCoverage />

        <CelebrityUseCasesBookingInfo />

        <CelebrityManagementFAQ />

        <CelebrityManagementCTA />

        <ServiceCityLinks
          serviceSlug="celebrity-management"
        />

        <Footer />
      </main>
    </>
  );
}