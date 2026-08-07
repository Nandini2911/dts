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

const PAGE_URL =
  "https://www.dtsworld.in/services/celebrity-management";

const ORGANIZATION_ID =
  "https://www.dtsworld.in/#organization";

const WEBSITE_ID =
  "https://www.dtsworld.in/#website";

const PAGE_ID = `${PAGE_URL}#webpage`;

const SERVICE_ID = `${PAGE_URL}#service`;

const BREADCRUMB_ID = `${PAGE_URL}#breadcrumb`;

const PROCESS_ID = `${PAGE_URL}#process`;

const EVENT_TYPES_ID = `${PAGE_URL}#event-types`;

const TALENT_CATEGORIES_ID = `${PAGE_URL}#talent-categories`;

const FAQ_ID = `${PAGE_URL}#faq`;

const CATALOG_ID = `${PAGE_URL}#catalog`;

const PRIMARY_IMAGE_ID = `${PAGE_URL}#primaryimage`;

export const metadata: Metadata = {
  title: {
    absolute:
      "Celebrity Management Company in India | Double Trouble Studio",
  },

  description:
    "Book celebrities, influencers, hosts, speakers and performers for brand campaigns, corporate events, luxury experiences and private celebrations across India.",

  applicationName: "Double Trouble Studio",

  authors: [
    {
      name: "Double Trouble Studio",
      url: "https://www.dtsworld.in/",
    },
  ],

  creator: "Double Trouble Studio",

  publisher: "Double Trouble Studio",

  category: "Celebrity Management Services",

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

    siteName: "Double Trouble Studio",

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
    card: "summary_large_image",

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

      "max-image-preview": "large",

      "max-snippet": -1,

      "max-video-preview": -1,
    },
  },
};

const celebrityManagementSchema = {
  "@context": "https://schema.org",

  "@graph": [
    // --------------------------------------------------
    // LOGO
    // --------------------------------------------------
    {
      "@type": "ImageObject",

      "@id": "https://www.dtsworld.in/#logo",

      url: "https://www.dtsworld.in/logo.png",

      contentUrl:
        "https://www.dtsworld.in/logo.png",

      caption: "Double Trouble Studio Logo",

      inLanguage: "en-IN",
    },

    // --------------------------------------------------
    // PRIMARY PAGE IMAGE
    // --------------------------------------------------
    {
      "@type": "ImageObject",

      "@id": PRIMARY_IMAGE_ID,

      url:
        "https://www.dtsworld.in/celebrity-management-og.jpg",

      contentUrl:
        "https://www.dtsworld.in/celebrity-management-og.jpg",

      width: 1200,

      height: 630,

      caption:
        "Celebrity Management and Celebrity Booking Services by Double Trouble Studio",

      representativeOfPage: true,

      inLanguage: "en-IN",
    },

    // --------------------------------------------------
    // ORGANIZATION
    // Keep the same canonical entity ID used site-wide.
    // --------------------------------------------------
    {
      "@type": "Organization",

      "@id": ORGANIZATION_ID,

      name: "Double Trouble Studio",

      legalName:
        "Double Trouble Studio Pvt. Ltd.",

      alternateName: [
        "DTS",
        "DTS World",
      ],

      url: "https://www.dtsworld.in/",

      logo: {
        "@id": "https://www.dtsworld.in/#logo",
      },

      image: {
        "@id": "https://www.dtsworld.in/#logo",
      },

      description:
        "Double Trouble Studio is a Mumbai-based creative agency providing branding, digital marketing, public relations, event management, guest management, celebrity management, website development, SEO, AI video production and VFX services across India.",

      telephone:
        "+918000006021",

      email:
        "hellodoubletroublestudio@gmail.com",

      address: {
        "@type": "PostalAddress",

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
        "@type": "ContactPoint",

        "@id":
          "https://www.dtsworld.in/#contact-point",

        contactType:
          "customer service",

        telephone:
          "+918000006021",

        email:
          "hellodoubletroublestudio@gmail.com",

        url:
          "https://www.dtsworld.in/contact",

        areaServed: {
          "@type": "Country",
          name: "India",
        },

        availableLanguage: [
          "English",
          "Hindi",
        ],
      },

      areaServed: {
        "@type": "Country",
        name: "India",
      },

      knowsAbout: [
        "Celebrity Management",
        "Celebrity Booking",
        "Talent Coordination",
        "Bollywood Celebrity Booking",
        "Celebrity Endorsements",
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
      ],
    },

    // --------------------------------------------------
    // WEB PAGE
    // --------------------------------------------------
    {
      "@type": "WebPage",

      "@id": PAGE_ID,

      url: PAGE_URL,

      name:
        "Celebrity Management Company in India | Double Trouble Studio",

      headline:
        "Celebrity Management Company in India for Brand Campaigns, Corporate Events & Luxury Experiences",

      description:
        "Celebrity management and celebrity booking services in India for brand campaigns, corporate events, luxury experiences, hospitality launches, weddings, private celebrations and promotional appearances.",

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

      hasPart: [
        {
          "@id": PROCESS_ID,
        },
        {
          "@id": FAQ_ID,
        },
      ],

      mentions: [
        {
          "@id": CATALOG_ID,
        },
        {
          "@id": EVENT_TYPES_ID,
        },
        {
          "@id": TALENT_CATEGORIES_ID,
        },
      ],

      significantLink: [
        "https://www.dtsworld.in/contact",
        "https://www.dtsworld.in/work",
        "https://www.dtsworld.in/services/guest-management",
        "https://www.dtsworld.in/services/events-weddings",
      ],

      inLanguage: "en-IN",
    },

    // --------------------------------------------------
    // MAIN SERVICE
    // --------------------------------------------------
    {
      "@type": "Service",

      "@id": SERVICE_ID,

      name:
        "Celebrity Management Services",

      alternateName: [
        "Celebrity Booking Services",
        "Celebrity Booking Agency Services",
        "Talent Management Services",
        "Celebrity Appearance Management",
      ],

      url: PAGE_URL,

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
        "@id": ORGANIZATION_ID,
      },

      audience: {
        "@type": "BusinessAudience",

        audienceType:
          "Brands, event planners, corporate organizations, hospitality businesses, luxury brands, wedding planners, agencies and founders seeking celebrity and talent partnerships",
      },

      areaServed: [
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
      ],

      hasOfferCatalog: {
        "@id": CATALOG_ID,
      },

      mainEntityOfPage: {
        "@id": PAGE_ID,
      },
    },

    // --------------------------------------------------
    // SERVICE CATALOG
    // --------------------------------------------------
    {
      "@type": "OfferCatalog",

      "@id": CATALOG_ID,

      url: `${PAGE_URL}#services`,

      name:
        "Celebrity Management Services Offered",

      description:
        "Celebrity and talent management services covering celebrity booking, endorsements, appearances, influencer collaborations, corporate event talent, performer bookings and brand ambassador programs.",

      numberOfItems: 8,

      itemListOrder:
        "https://schema.org/ItemListOrderAscending",

      itemListElement: [
        {
          "@type": "Offer",

          "@id":
            `${PAGE_URL}#celebrity-booking-offer`,

          seller: {
            "@id": ORGANIZATION_ID,
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              `${PAGE_URL}#celebrity-booking`,

            name:
              "Celebrity Booking and Talent Acquisition",

            serviceType:
              "Celebrity Booking and Talent Acquisition",

            description:
              "Talent sourcing, availability checks, shortlisting and booking coordination for celebrities and public personalities.",

            provider: {
              "@id": ORGANIZATION_ID,
            },

            areaServed: {
              "@type": "Country",
              name: "India",
            },
          },
        },

        {
          "@type": "Offer",

          "@id":
            `${PAGE_URL}#bollywood-booking-offer`,

          seller: {
            "@id": ORGANIZATION_ID,
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              `${PAGE_URL}#bollywood-celebrity-booking`,

            name:
              "Bollywood Celebrity Booking",

            serviceType:
              "Bollywood Celebrity Booking",

            description:
              "Booking and coordination support for Bollywood celebrity appearances, campaigns, launches, events and private experiences.",

            provider: {
              "@id": ORGANIZATION_ID,
            },

            areaServed: {
              "@type": "Country",
              name: "India",
            },
          },
        },

        {
          "@type": "Offer",

          "@id":
            `${PAGE_URL}#endorsement-offer`,

          seller: {
            "@id": ORGANIZATION_ID,
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              `${PAGE_URL}#celebrity-endorsements`,

            name:
              "Celebrity Endorsement Campaigns",

            serviceType:
              "Celebrity Endorsement Campaigns",

            description:
              "Celebrity endorsement planning, talent alignment, commercial coordination, campaign deliverables and usage-right discussions.",

            provider: {
              "@id": ORGANIZATION_ID,
            },

            areaServed: {
              "@type": "Country",
              name: "India",
            },
          },
        },

        {
          "@type": "Offer",

          "@id":
            `${PAGE_URL}#appearance-management-offer`,

          seller: {
            "@id": ORGANIZATION_ID,
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              `${PAGE_URL}#celebrity-appearance-management`,

            name:
              "Celebrity Appearance Management",

            serviceType:
              "Celebrity Appearance Management",

            description:
              "End-to-end coordination for celebrity appearances including timing, logistics, event flow, media moments and stakeholder alignment.",

            provider: {
              "@id": ORGANIZATION_ID,
            },

            areaServed: {
              "@type": "Country",
              name: "India",
            },
          },
        },

        {
          "@type": "Offer",

          "@id":
            `${PAGE_URL}#influencer-collaboration-offer`,

          seller: {
            "@id": ORGANIZATION_ID,
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              `${PAGE_URL}#influencer-creator-collaborations`,

            name:
              "Influencer and Creator Collaborations",

            serviceType:
              "Influencer and Creator Collaborations",

            description:
              "Influencer and creator partnerships for branded content, social campaigns, launches, hospitality activations and digital promotions.",

            provider: {
              "@id": ORGANIZATION_ID,
            },

            areaServed: {
              "@type": "Country",
              name: "India",
            },
          },
        },

        {
          "@type": "Offer",

          "@id":
            `${PAGE_URL}#corporate-talent-offer`,

          seller: {
            "@id": ORGANIZATION_ID,
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              `${PAGE_URL}#corporate-event-talent`,

            name:
              "Corporate Event Talent Management",

            serviceType:
              "Corporate Event Talent Management",

            description:
              "Celebrity, host, speaker and performer coordination for corporate events, conferences, launches and business gatherings.",

            provider: {
              "@id": ORGANIZATION_ID,
            },

            areaServed: {
              "@type": "Country",
              name: "India",
            },
          },
        },

        {
          "@type": "Offer",

          "@id":
            `${PAGE_URL}#performer-booking-offer`,

          seller: {
            "@id": ORGANIZATION_ID,
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              `${PAGE_URL}#singer-performer-booking`,

            name:
              "Singer and Performer Booking",

            serviceType:
              "Singer and Performer Booking",

            description:
              "Talent booking and coordination for singers, musicians, performers, anchors and entertainment acts.",

            provider: {
              "@id": ORGANIZATION_ID,
            },

            areaServed: {
              "@type": "Country",
              name: "India",
            },
          },
        },

        {
          "@type": "Offer",

          "@id":
            `${PAGE_URL}#brand-ambassador-offer`,

          seller: {
            "@id": ORGANIZATION_ID,
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              `${PAGE_URL}#brand-ambassador-programs`,

            name:
              "Brand Ambassador Programs",

            serviceType:
              "Brand Ambassador Programs",

            description:
              "Talent identification and partnership coordination for long-term brand ambassador relationships and integrated campaigns.",

            provider: {
              "@id": ORGANIZATION_ID,
            },

            areaServed: {
              "@type": "Country",
              name: "India",
            },
          },
        },
      ],
    },

    // --------------------------------------------------
    // BREADCRUMBS
    // --------------------------------------------------
    {
      "@type": "BreadcrumbList",

      "@id": BREADCRUMB_ID,

      itemListElement: [
        {
          "@type": "ListItem",

          position: 1,

          name: "Home",

          item:
            "https://www.dtsworld.in/",
        },

        {
          "@type": "ListItem",

          position: 2,

          name: "Services",

          item:
            "https://www.dtsworld.in/services",
        },

        {
          "@type": "ListItem",

          position: 3,

          name:
            "Celebrity Management",

          item: PAGE_URL,
        },
      ],
    },

    // --------------------------------------------------
    // PROCESS
    // --------------------------------------------------
    {
      "@type": "HowTo",

      "@id": PROCESS_ID,

      url:
        `${PAGE_URL}#process`,

      name:
        "Celebrity Management Process",

      description:
        "A structured celebrity management process from requirement discovery to post-event support.",

      inLanguage:
        "en-IN",

      step: [
        {
          "@type": "HowToStep",

          position: 1,

          name:
            "Requirement Discovery",

          text:
            "Understanding the event goals, campaign objective, audience profile, preferred talent category, city, date, budget range and expected deliverables.",
        },

        {
          "@type": "HowToStep",

          position: 2,

          name:
            "Talent Research and Shortlisting",

          text:
            "Identifying suitable celebrities, influencers, speakers or performers based on relevance, availability, popularity, audience fit and brand positioning.",
        },

        {
          "@type": "HowToStep",

          position: 3,

          name:
            "Outreach and Negotiation",

          text:
            "Managing talent outreach, availability checks, commercial discussions, appearance terms, deliverables and negotiation.",
        },

        {
          "@type": "HowToStep",

          position: 4,

          name:
            "Contract and Compliance",

          text:
            "Coordinating agreements, usage rights, appearance clauses, deliverables, brand category terms, payment schedules and documentation.",
        },

        {
          "@type": "HowToStep",

          position: 5,

          name:
            "Logistics Planning",

          text:
            "Managing travel, accommodation, hospitality, security, green room requirements, schedules, technical needs and event-day movement planning.",
        },

        {
          "@type": "HowToStep",

          position: 6,

          name:
            "Event-Day Coordination",

          text:
            "Overseeing arrival coordination, backstage communication, media moments, stage flow, guest interaction, stakeholder alignment and departure planning.",
        },

        {
          "@type": "HowToStep",

          position: 7,

          name:
            "Post-Event Support",

          text:
            "Supporting campaign deliverables, content coordination, reporting, usage confirmations and post-event closure.",
        },
      ],
    },

    // --------------------------------------------------
    // EVENT TYPES
    // --------------------------------------------------
    {
      "@type": "ItemList",

      "@id": EVENT_TYPES_ID,

      name:
        "Celebrity Booking Services for Different Event Types",

      numberOfItems: 12,

      itemListOrder:
        "https://schema.org/ItemListOrderAscending",

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Corporate Events",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Product Launches",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Brand Activations",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Hotel Launches",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Restaurant Openings",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Luxury Experiences",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Fashion Shows",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Award Ceremonies",
        },
        {
          "@type": "ListItem",
          position: 9,
          name:
            "Weddings and Private Celebrations",
        },
        {
          "@type": "ListItem",
          position: 10,
          name:
            "Conferences and Summits",
        },
        {
          "@type": "ListItem",
          position: 11,
          name:
            "Trade Shows and Exhibitions",
        },
        {
          "@type": "ListItem",
          position: 12,
          name:
            "Entertainment Events",
        },
      ],
    },

    // --------------------------------------------------
    // TALENT CATEGORIES
    // --------------------------------------------------
    {
      "@type": "ItemList",

      "@id": TALENT_CATEGORIES_ID,

      name:
        "Types of Talent Managed",

      numberOfItems: 11,

      itemListOrder:
        "https://schema.org/ItemListOrderAscending",

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Bollywood Actors",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Regional Film Actors",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "OTT Actors",
        },
        {
          "@type": "ListItem",
          position: 4,
          name:
            "Television Personalities",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Sports Personalities",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Influencers",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Content Creators",
        },
        {
          "@type": "ListItem",
          position: 8,
          name:
            "Motivational Speakers",
        },
        {
          "@type": "ListItem",
          position: 9,
          name:
            "Musicians and Singers",
        },
        {
          "@type": "ListItem",
          position: 10,
          name:
            "Anchors and Hosts",
        },
        {
          "@type": "ListItem",
          position: 11,
          name: "Public Figures",
        },
      ],
    },

    // --------------------------------------------------
    // FAQ
    // Keep only if these questions/answers are visibly
    // rendered in CelebrityManagementFAQ.
    // --------------------------------------------------
    {
      "@type": "FAQPage",

      "@id": FAQ_ID,

      url:
        `${PAGE_URL}#faq`,

      name:
        "Celebrity Management Frequently Asked Questions",

      description:
        "Answers to common questions about celebrity management, celebrity booking, endorsements, appearances, social media promotions, talent fees and campaign requirements.",

      isPartOf: {
        "@id": PAGE_ID,
      },

      about: {
        "@id": SERVICE_ID,
      },

      publisher: {
        "@id": ORGANIZATION_ID,
      },

      inLanguage:
        "en-IN",

      mainEntity: [
        {
          "@type": "Question",

          name:
            "What is celebrity management?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Celebrity management involves sourcing, booking, coordinating and managing public personalities for events, campaigns, endorsements, promotions and brand collaborations.",
          },
        },

        {
          "@type": "Question",

          name:
            "How does celebrity booking work?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Celebrity booking usually starts with understanding the event or campaign requirement, talent category, date, city, budget, deliverables and usage needs. The agency then shortlists suitable talent, checks availability, negotiates terms and manages coordination.",
          },
        },

        {
          "@type": "Question",

          name:
            "Can you arrange celebrities for brand endorsements?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Yes. Double Trouble Studio helps brands coordinate celebrity endorsement campaigns, brand ambassador partnerships, digital promotions, product launches and advertising collaborations.",
          },
        },

        {
          "@type": "Question",

          name:
            "How much does it cost to hire a celebrity in India?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "The cost to hire a celebrity in India depends on talent popularity, appearance duration, event city, campaign deliverables, usage rights, travel requirements, exclusivity and brand category.",
          },
        },

        {
          "@type": "Question",

          name:
            "Can celebrities be booked for social media promotions?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Yes. Celebrities, influencers and creators can be booked for social media promotions, branded reels, Instagram posts, YouTube integrations, short-form videos and digital campaign content.",
          },
        },

        {
          "@type": "Question",

          name:
            "Can you arrange Bollywood celebrities for private events?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Yes. Bollywood celebrities can be arranged for private events, weddings, luxury celebrations, hospitality experiences and brand-led gatherings subject to availability, requirements and commercial terms.",
          },
        },

        {
          "@type": "Question",

          name:
            "Do celebrity endorsement fees include usage rights?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Not always. Usage rights are usually discussed separately and depend on campaign duration, media platforms, geography, exclusivity, content format and brand category.",
          },
        },

        {
          "@type": "Question",

          name:
            "What types of events can include celebrity appearances?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Celebrity appearances can be planned for corporate events, product launches, brand activations, hotel launches, restaurant openings, luxury experiences, fashion shows, award ceremonies, weddings, conferences, exhibitions and entertainment events.",
          },
        },

        {
          "@type": "Question",

          name:
            "Do you manage influencer collaborations?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Yes. Double Trouble Studio manages influencer and creator collaborations for social media campaigns, launch visibility, branded content, hospitality activations, fashion campaigns and audience engagement.",
          },
        },

        {
          "@type": "Question",

          name:
            "What information is required to book a celebrity?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Celebrity booking usually requires event date, event city and venue, type of event or campaign, preferred celebrity category, expected appearance duration, brand details, audience profile, budget range, deliverables, travel expectations and content rights requirements.",
          },
        },
      ],
    },
  ],
};

export default function CelebrityManagement() {
  return (
    <>
      <script
        id="celebrity-management-structured-data"
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              celebrityManagementSchema,
            ).replace(
              /</g,
              "\\u003c",
            ),
        }}
      />

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