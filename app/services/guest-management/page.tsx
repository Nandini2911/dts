import Footer from "@/components/Footer";
import GuestChallengesWeSolve from "@/components/GuestManagement/GuestChallengesWeSolve";
import GuestFeaturedWork from "@/components/GuestManagement/GuestFeaturedWork";
import GuestManagementFaq from "@/components/GuestManagement/GuestManagementFaq";
import GuestManagementHero from "@/components/GuestManagement/GuestManagementHero";
import GuestManagementServices from "@/components/GuestManagement/GuestManagementServices";
import { OurProcess } from "@/components/GuestManagement/GuestProcess";
import GuestServiceOverview from "@/components/GuestManagement/GuestServiceOverview";
import WhyItMatters from "@/components/GuestManagement/GuestWhyItMatters";
import { IndustriesWeServe } from "@/components/GuestManagement/IndustriesWeServe";
import LocalSeoSection from "@/components/GuestManagement/LocalSeoSection";
import { ResultsOutcomes } from "@/components/GuestManagement/ResultOutcomes";
import { WhyDoubleTroubleStudio } from "@/components/GuestManagement/WhyDoubleTrouble";
import WhyGuestManagementMatters from "@/components/GuestManagement/WhyGuestManagementMatters";
import Navbar from "@/components/Navbar";
import ServiceCityLinks from "@/components/seo/ServiceCityLinks";
import type { Metadata } from "next";

const SITE_URL = "https://www.dtsworld.in/";
const PAGE_URL = "https://www.dtsworld.in/services/guest-management";
const ORGANIZATION_ID = "https://www.dtsworld.in/#organization";
const WEBSITE_ID = "https://www.dtsworld.in/#website";
const SERVICE_ID = `${PAGE_URL}#service`;
const WEBPAGE_ID = `${PAGE_URL}#webpage`;
const PRIMARY_IMAGE_ID = `${PAGE_URL}#primaryimage`;
const BREADCRUMB_ID = `${PAGE_URL}#breadcrumb`;
const CATALOG_ID = `${PAGE_URL}#catalog`;
const PROCESS_ID = `${PAGE_URL}#process`;
const FEATURED_WORK_ID = `${PAGE_URL}#featured-work`;
const INDUSTRIES_ID = `${PAGE_URL}#industries`;
const LOCATIONS_ID = `${PAGE_URL}#locations`;
const FAQ_ID = `${PAGE_URL}#faq`;

export const metadata: Metadata = {
  title: {
    absolute: "Guest Management Services in Mumbai & India | Double Trouble Studio",
  },

  description:
    "Professional guest management for weddings, corporate events and VIP experiences, including RSVP, registration, check-ins, access control and hospitality across India.",

  applicationName: "Double Trouble Studio",

  authors: [
    {
      name: "Double Trouble Studio",
      url: SITE_URL,
    },
  ],

  creator: "Double Trouble Studio",
  publisher: "Double Trouble Studio",
  category: "Guest Management Services",

  keywords: [
    "guest management services",
    "guest management services Mumbai",
    "event guest management",
    "RSVP management",
    "guest list management",
    "event registration services",
    "VIP guest management",
    "VIP guest coordination",
    "event check-in management",
    "event access control",
    "wedding guest management",
    "corporate event guest management",
    "celebrity event guest management",
    "brand launch guest management",
    "event hospitality management",
    "guest management agency India",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: PAGE_URL,
    siteName: "Double Trouble Studio",
    title: "Guest Management Services in Mumbai & India | Double Trouble Studio",
    description:
      "Professional RSVP management, guest registration, VIP coordination, event check-ins, access control and hospitality support for premium events across India.",
    images: [
      {
        url: "https://www.dtsworld.in/guest-management-og.jpg",
        width: 1200,
        height: 630,
        alt: "Guest Management Services by Double Trouble Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Guest Management Services in Mumbai & India",
    description:
      "Professional RSVP, guest registration, VIP handling, event check-in, access control and hospitality services across India.",
    images: ["https://www.dtsworld.in/guest-management-og.jpg"],
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

const serviceAreas = [
  { "@type": "Country", name: "India" },
  { "@type": "City", name: "Mumbai" },
  { "@type": "City", name: "Delhi" },
  { "@type": "City", name: "Gurugram", alternateName: "Gurgaon" },
  { "@type": "City", name: "Bengaluru", alternateName: "Bangalore" },
  { "@type": "City", name: "Hyderabad" },
  { "@type": "City", name: "Pune" },
  { "@type": "City", name: "Ahmedabad" },
  { "@type": "City", name: "Jaipur" },
  { "@type": "City", name: "Chandigarh" },
  { "@type": "AdministrativeArea", name: "Goa" },
];

const serviceOffers = [
  {
    slug: "rsvp-management",
    offerSlug: "rsvp-offer",
    name: "RSVP Management",
    serviceType: "RSVP Management",
    description:
      "Tracking confirmations, reminders, declines, pending responses and attendance for every invited guest.",
  },
  {
    slug: "guest-list-management",
    offerSlug: "guest-list-offer",
    name: "Guest List Management",
    serviceType: "Guest List Management",
    description:
      "Organized guest segmentation, database management, guest categorization and event guest planning.",
  },
  {
    slug: "vip-management",
    offerSlug: "vip-offer",
    name: "VIP Guest Management",
    serviceType: "VIP Guest Coordination",
    description:
      "Dedicated coordination and discreet handling for celebrities, founders, dignitaries, speakers, investors and premium guests.",
  },
  {
    slug: "event-registration",
    offerSlug: "registration-offer",
    name: "Event Registration",
    serviceType: "Event Registration",
    description:
      "Pre-event attendee registration, verification, categorization and guest data collection.",
  },
  {
    slug: "check-in-management",
    offerSlug: "check-in-offer",
    name: "Check-In Management",
    serviceType: "Event Check-In Management",
    description:
      "Fast event entry, guest verification and organized on-ground check-in coordination.",
  },
  {
    slug: "access-control",
    offerSlug: "access-control-offer",
    name: "Access Control",
    serviceType: "Event Access Control",
    description:
      "Secure guest access, entry verification, zone control and movement management throughout the event.",
  },
  {
    slug: "attendee-tracking",
    offerSlug: "tracking-offer",
    name: "Attendee Tracking",
    serviceType: "Event Attendee Tracking",
    description:
      "Real-time attendee tracking, arrival monitoring, attendance visibility and event reporting.",
  },
  {
    slug: "invitation-management",
    offerSlug: "invitation-offer",
    name: "Invitation Management",
    serviceType: "Event Invitation Management",
    description:
      "Digital invitation planning, invite dispatch, guest confirmations, reminders and follow-ups.",
  },
  {
    slug: "hospitality-coordination",
    offerSlug: "hospitality-offer",
    name: "Hospitality Coordination",
    serviceType: "Event Hospitality Coordination",
    description:
      "Welcome-desk support, seating assistance, guest guidance and premium hospitality coordination.",
  },
  {
    slug: "guest-communication",
    offerSlug: "communication-offer",
    name: "Guest Communication Management",
    serviceType: "Guest Communication Management",
    description:
      "WhatsApp, email and call coordination for invitations, confirmations, reminders, updates and event directions.",
  },
];

const processSteps = [
  {
    name: "Discovery and Planning",
    text: "Understand audience types, VIP priorities, event objectives, guest categories, entry points and operational requirements.",
  },
  {
    name: "Guest System Setup",
    text: "Create guest categories, access tiers, guest databases, RSVP workflows and verification systems.",
  },
  {
    name: "Coordination and Communication",
    text: "Manage invitations, reminders, confirmations, updates and guest communication before the event.",
  },
  {
    name: "On-Ground Execution",
    text: "Handle guest verification, check-ins, VIP movement, access control and real-time event coordination.",
  },
  {
    name: "Reporting and Wrap-Up",
    text: "Provide attendance visibility, guest insights, operational reporting and post-event review.",
  },
];

const featuredWork = [
  {
    slug: "luxury-wedding-flow",
    name: "Luxury Wedding Guest Flow",
    description:
      "Structured guest segmentation, VIP routing and seamless arrival coordination for a high-profile wedding celebration.",
  },
  {
    slug: "celebrity-event-entry",
    name: "Celebrity Event Entry Control",
    description:
      "VIP arrival handling, media coordination and access control under high-pressure event conditions.",
  },
  {
    slug: "brand-launch-system",
    name: "Brand Launch Guest System",
    description:
      "A complete RSVP and event entry-flow system with tiered access and organized guest check-ins.",
  },
  {
    slug: "corporate-event-desk",
    name: "Corporate Event Guest Desk",
    description:
      "Delegate verification, event registration and real-time guest support for a premium corporate gathering.",
  },
  {
    slug: "vip-movement",
    name: "VIP Movement Coordination",
    description:
      "Controlled and discreet guest routes for celebrities, founders, dignitaries and special invitees.",
  },
  {
    slug: "destination-event-arrival",
    name: "Destination Event Arrival Flow",
    description:
      "Arrival, hotel movement, venue entry and guest assistance coordination across multiple destination-event touchpoints.",
  },
];

const industries = [
  "Luxury Weddings",
  "Celebrity Events",
  "Corporate Events",
  "Brand Launches",
  "Fashion Events",
  "Media Events",
  "Award Nights",
  "Private Gatherings",
  "Founder and Investor Events",
];

const locations = [
  "Mumbai",
  "Delhi",
  "Gurgaon",
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Goa",
  "Jaipur",
  "Chandigarh",
  "Across India",
];

const faqs = [
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
      "Guest check-in works through a structured verification process at the event entry point. Guests are matched with the approved guest list or event registration database, verified by name, QR code, invite status or category, and then guided to the correct access area. This helps reduce waiting time and keeps entry organized.",
  },
  {
    question: "Can you manage VIP guests?",
    answer:
      "Yes. Double Trouble Studio manages VIP guests, celebrities, founders, dignitaries, speakers, investors and high-profile attendees with dedicated coordination. This includes private entry planning, arrival tracking, access control, hospitality assistance, media-sensitive movement and discreet on-ground support.",
  },
  {
    question: "Do you provide wedding guest management?",
    answer:
      "Yes. Double Trouble Studio provides wedding guest management services for luxury weddings, destination weddings, private celebrations and high-value family events. The team handles guest lists, RSVP tracking, family guest coordination, VIP arrivals, hospitality support, check-ins and venue entry management.",
  },
  {
    question: "Do you provide corporate event guest management?",
    answer:
      "Yes. Double Trouble Studio provides corporate event guest management for conferences, product launches, brand events, investor meetings, networking events, award nights and business gatherings. Services include registration, delegate check-ins, speaker coordination, VIP handling, access control and attendee-experience management.",
  },
  {
    question: "Can guest management improve event security?",
    answer:
      "Yes. Guest management improves event security by ensuring only approved attendees enter the venue. Through guest verification, access control, segmented entry systems, VIP movement planning and real-time coordination, unauthorized access is reduced and crowd movement becomes easier to manage.",
  },
  {
    question: "Do you work across India?",
    answer:
      "Yes. Double Trouble Studio provides guest management services across India for weddings, corporate events, celebrity events, brand launches, media events and private gatherings. The team works across major cities and destinations including Mumbai, Delhi, Gurgaon, Bangalore, Hyderabad, Pune, Goa, Jaipur and Chandigarh.",
  },
  {
    question: "What types of events do you manage?",
    answer:
      "Double Trouble Studio manages guest flow for luxury weddings, celebrity events, corporate conferences, product launches, brand launches, fashion events, media events, award nights, investor events, private gatherings, founder events, social celebrations and high-profile VIP experiences.",
  },
  {
    question: "Why choose Double Trouble Studio?",
    answer:
      "Double Trouble Studio combines strategic planning, guest coordination and on-ground event execution. The team focuses on smooth entry flow, clear guest communication, VIP handling, access control and premium hospitality, ensuring every guest experience feels organized, professional and seamless.",
  },
  {
    question: "How much do guest management services cost?",
    answer:
      "The cost of guest management services depends on the event size, guest count, number of entry points, RSVP requirements, VIP coordination needs, registration systems, manpower requirements and event location. Double Trouble Studio provides customized quotations based on the event scope and operational requirements.",
  },
];


const schemaContext = "https://schema.org";

const logoSchema = {
  "@context": schemaContext,
  "@type": "ImageObject",
  "@id": "https://www.dtsworld.in/#logo",
  url: "https://www.dtsworld.in/logo.png",
  contentUrl: "https://www.dtsworld.in/logo.png",
  caption: "Double Trouble Studio Logo",
  inLanguage: "en-IN",
};

const primaryImageSchema = {
  "@context": schemaContext,
  "@type": "ImageObject",
  "@id": PRIMARY_IMAGE_ID,
  url: "https://www.dtsworld.in/guest-management-og.jpg",
  contentUrl: "https://www.dtsworld.in/guest-management-og.jpg",
  width: 1200,
  height: 630,
  caption:
    "Guest Management Services for Weddings, Corporate Events and VIP Experiences",
  representativeOfPage: true,
  inLanguage: "en-IN",
};

const organizationSchema = {
  "@context": schemaContext,
  "@type": ["Organization", "LocalBusiness"],
  "@id": ORGANIZATION_ID,

  name: "Double Trouble Studio",
  legalName: "Double Trouble Studio Pvt. Ltd.",
  alternateName: ["DTS", "DTS World"],
  url: SITE_URL,

  logo: {
    "@id": "https://www.dtsworld.in/#logo",
  },

  image: {
    "@id": "https://www.dtsworld.in/#logo",
  },

  description:
    "Double Trouble Studio is a Mumbai-based creative agency providing professional guest management, event management, branding, digital marketing, public relations, website development, SEO, AI video production and VFX services across India.",

  slogan: "Creative Agency for Brands, Events and Digital Growth",

  telephone: "+918000006021",
  email: "hellodoubletroublestudio@gmail.com",
  priceRange: "Custom quotations",

  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Plot No. 177, 1st Floor, Aaram Nagar Part 2, Seven Bungalows, J. P. Road, Versova, Andheri West",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400061",
    addressCountry: "IN",
  },

  contactPoint: {
    "@type": "ContactPoint",
    "@id": "https://www.dtsworld.in/#contact-point",
    contactType: "project enquiries",
    telephone: "+918000006021",
    email: "hellodoubletroublestudio@gmail.com",
    url: "https://www.dtsworld.in/contact",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    availableLanguage: ["English", "Hindi"],
  },

  areaServed: serviceAreas,

  knowsAbout: [
    "Guest Management",
    "RSVP Management",
    "Guest List Management",
    "Event Registration",
    "VIP Guest Coordination",
    "Check-In Management",
    "Event Access Control",
    "Attendee Tracking",
    "Invitation Management",
    "Hospitality Coordination",
    "Guest Communication Management",
    "Wedding Guest Management",
    "Corporate Event Guest Management",
    "Celebrity Event Management",
    "Brand Launch Guest Management",
    "Destination Event Guest Management",
    "VIP Movement Coordination",
    "Event Hospitality",
  ],

  hasOfferCatalog: {
    "@id": CATALOG_ID,
  },
};

const websiteSchema = {
  "@context": schemaContext,
  "@type": "WebSite",
  "@id": WEBSITE_ID,

  url: SITE_URL,
  name: "Double Trouble Studio",
  alternateName: ["DTS", "DTS World"],

  description:
    "Double Trouble Studio is a creative agency in Mumbai providing branding, digital marketing, public relations, event management, guest management, website development, SEO, AI video production and VFX services across India.",

  publisher: {
    "@id": ORGANIZATION_ID,
  },

  inLanguage: "en-IN",
};

const webPageSchema = {
  "@context": schemaContext,
  "@type": "WebPage",
  "@id": WEBPAGE_ID,

  url: PAGE_URL,

  name:
    "Guest Management Services in Mumbai & India | Double Trouble Studio",

  headline:
    "Guest Management Services for Weddings, Corporate Events and VIP Experiences",

  description:
    "Professional guest management services in Mumbai including RSVP management, guest list management, event registration, VIP guest coordination, check-in management and access control for weddings, corporate events, celebrity events and brand launches across India.",

  keywords: [
    "Guest Management Services",
    "Guest Management Services Mumbai",
    "RSVP Management",
    "Guest List Management",
    "Event Registration",
    "VIP Guest Coordination",
    "Check-In Management",
    "Event Access Control",
    "Wedding Guest Management",
    "Corporate Event Guest Management",
  ],

  isPartOf: {
    "@id": WEBSITE_ID,
  },

  about: {
    "@id": SERVICE_ID,
  },

  mainEntity: {
    "@id": SERVICE_ID,
  },

  publisher: {
    "@id": ORGANIZATION_ID,
  },

  primaryImageOfPage: {
    "@id": PRIMARY_IMAGE_ID,
  },

  breadcrumb: {
    "@id": BREADCRUMB_ID,
  },

  // hasPart accepts CreativeWork targets.
  // HowTo and FAQPage are both CreativeWork/WebPage based types.
  hasPart: [
    {
      "@id": PROCESS_ID,
    },
    {
      "@id": FAQ_ID,
    },
  ],

  // These are valid Things but not CreativeWork, so use mentions.
  mentions: [
    {
      "@id": CATALOG_ID,
    },
    {
      "@id": FEATURED_WORK_ID,
    },
    {
      "@id": INDUSTRIES_ID,
    },
    {
      "@id": LOCATIONS_ID,
    },
  ],

  significantLink: [
    "https://www.dtsworld.in/contact",
    "https://www.dtsworld.in/work",
    "https://www.dtsworld.in/services/celebrity-management",
    "https://www.dtsworld.in/services/events-weddings",
  ],

  copyrightYear: 2026,

  copyrightHolder: {
    "@id": ORGANIZATION_ID,
  },

  inLanguage: "en-IN",
};

const serviceSchema = {
  "@context": schemaContext,
  "@type": "Service",
  "@id": SERVICE_ID,

  name: "Guest Management Services",

  alternateName: [
    "Event Guest Management",
    "Wedding Guest Management",
    "Corporate Event Guest Management",
    "VIP Guest Management",
  ],

  url: PAGE_URL,

  image: {
    "@id": PRIMARY_IMAGE_ID,
  },

  serviceType: [
    "Guest Management",
    "RSVP Management",
    "Guest List Management",
    "Event Registration",
    "VIP Guest Coordination",
    "Check-In Management",
    "Access Control",
    "Attendee Tracking",
    "Invitation Management",
    "Hospitality Coordination",
    "Guest Communication Management",
  ],

  category:
    "Event Guest Management and Hospitality Services",

  description:
    "Double Trouble Studio provides professional guest management services for weddings, corporate events, celebrity events, brand launches, investor events and private VIP experiences across Mumbai and India. Services include RSVP management, guest list management, event registration, VIP coordination, check-in management, access control, attendee tracking, invitation management and hospitality support.",

  provider: {
    "@id": ORGANIZATION_ID,
  },

  audience: {
    "@type": "BusinessAudience",
    name: "Event hosts and organizations requiring professional guest management",
    audienceType:
      "Wedding hosts, corporate event organizers, celebrity event teams, brand launch teams, hospitality teams, founders, investors and private event hosts",
  },

  areaServed: serviceAreas,

  hasOfferCatalog: {
    "@id": CATALOG_ID,
  },

  mainEntityOfPage: {
    "@id": WEBPAGE_ID,
  },
};

const offerCatalogSchema = {
  "@context": schemaContext,
  "@type": "OfferCatalog",
  "@id": CATALOG_ID,

  url: `${PAGE_URL}#services`,

  name: "Guest Management Services We Provide",

  description:
    "Guest management solutions covering RSVP tracking, guest databases, VIP handling, event registration, check-ins, access control, attendee tracking, invitations, hospitality and guest communication.",

  numberOfItems: serviceOffers.length,

  itemListOrder:
    "https://schema.org/ItemListOrderAscending",

  itemListElement: serviceOffers.map((service) => ({
    "@type": "Offer",
    "@id": `${PAGE_URL}#${service.offerSlug}`,

    seller: {
      "@id": ORGANIZATION_ID,
    },

    itemOffered: {
      "@type": "Service",
      "@id": `${PAGE_URL}#${service.slug}`,

      name: service.name,
      serviceType: service.serviceType,
      description: service.description,

      provider: {
        "@id": ORGANIZATION_ID,
      },

      areaServed: {
        "@type": "Country",
        name: "India",
      },
    },
  })),
};

const breadcrumbSchema = {
  "@context": schemaContext,
  "@type": "BreadcrumbList",
  "@id": BREADCRUMB_ID,

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guest Management",
      item: PAGE_URL,
    },
  ],
};

const processSchema = {
  "@context": schemaContext,
  "@type": "HowTo",
  "@id": PROCESS_ID,

  url: `${PAGE_URL}#process`,

  name:
    "Double Trouble Studio Guest Management Process",

  description:
    "A structured guest management process from planning and system setup to communication, on-ground execution and post-event reporting.",

  isPartOf: {
    "@id": WEBPAGE_ID,
  },

  about: {
    "@id": SERVICE_ID,
  },

  inLanguage: "en-IN",

  step: processSteps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const featuredWorkSchema = {
  "@context": schemaContext,
  "@type": "ItemList",
  "@id": FEATURED_WORK_ID,

  url: `${PAGE_URL}#featured-work`,

  name: "Guest Management in Action",

  description:
    "Guest management examples covering weddings, celebrity events, brand launches, corporate events, VIP movements and destination events.",

  numberOfItems: featuredWork.length,

  itemListOrder:
    "https://schema.org/ItemListOrderAscending",

  itemListElement: featuredWork.map((work, index) => ({
    "@type": "ListItem",
    position: index + 1,

    item: {
      "@type": "CreativeWork",
      "@id": `${PAGE_URL}#${work.slug}`,

      name: work.name,
      description: work.description,

      creator: {
        "@id": ORGANIZATION_ID,
      },

      about: {
        "@id": SERVICE_ID,
      },

      inLanguage: "en-IN",
    },
  })),
};

const industriesSchema = {
  "@context": schemaContext,
  "@type": "ItemList",
  "@id": INDUSTRIES_ID,

  name:
    "Events Supported by Guest Management Services",

  description:
    "Guest management support for weddings, celebrity events, corporate events, brand launches, fashion events, media events, award nights, private gatherings and investor events.",

  numberOfItems: industries.length,

  itemListOrder:
    "https://schema.org/ItemListUnordered",

  itemListElement: industries.map(
    (industry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: industry,
    }),
  ),
};

const locationsSchema = {
  "@context": schemaContext,
  "@type": "ItemList",
  "@id": LOCATIONS_ID,

  name:
    "Guest Management Service Locations",

  description:
    "Major cities and destinations served by Double Trouble Studio for professional guest management services.",

  numberOfItems: locations.length,

  itemListOrder:
    "https://schema.org/ItemListUnordered",

  itemListElement: locations.map(
    (location, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: location,
    }),
  ),
};

const faqSchema = {
  "@context": schemaContext,
  "@type": "FAQPage",
  "@id": FAQ_ID,

  url: `${PAGE_URL}#faq`,

  name:
    "Guest Management Frequently Asked Questions",

  description:
    "Answers to common questions about guest management services, RSVP tracking, event registration, VIP handling, event check-ins, access control, locations and pricing.",

  isPartOf: {
    "@id": WEBPAGE_ID,
  },

  about: {
    "@id": SERVICE_ID,
  },

  publisher: {
    "@id": ORGANIZATION_ID,
  },

  inLanguage: "en-IN",

  mainEntity: faqs.map((faq, index) => ({
    "@type": "Question",
    "@id": `${PAGE_URL}#faq-${index + 1}`,

    name: faq.question,

    acceptedAnswer: {
      "@type": "Answer",
      "@id": `${PAGE_URL}#faq-${index + 1}-answer`,
      text: faq.answer,
    },
  })),
};

// Separate valid JSON-LD blocks.
// This keeps the entity graph connected via @id while also allowing
// validators to surface the major schema types independently.
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
  featuredWorkSchema,
  industriesSchema,
  locationsSchema,
  faqSchema,
];

export default function GuestManagement() {
  return (
    <>
      {structuredDataBlocks.map((schema, index) => (
        <script
          key={`guest-management-schema-${index}`}
          id={`guest-management-structured-data-${index + 1}`}
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
      ))}

      <main>
        <Navbar />
        <GuestManagementHero />
        <GuestFeaturedWork />
        <GuestServiceOverview />
        <GuestManagementServices />
        <WhyItMatters />
        <GuestChallengesWeSolve />
        <OurProcess />
        <ResultsOutcomes />
        <IndustriesWeServe />
        <WhyDoubleTroubleStudio />
        <WhyGuestManagementMatters />
        <GuestManagementFaq />
        <LocalSeoSection />
        <ServiceCityLinks serviceSlug="guest-management" />
        <Footer />
      </main>
    </>
  );
}