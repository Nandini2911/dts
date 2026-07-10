import CelebrityBookingIntro from "@/components/CelebrityManagement/CelebrityBookingIntro";
import CelebrityEventTypes from "@/components/CelebrityManagement/CelebrityEventTypes";
import CelebrityManagementHero from "@/components/CelebrityManagement/CelebrityManagementHero";
import CelebrityManagementServices from "@/components/CelebrityManagement/CelebrityManagementServices";
import WhatIsCelebrityManagement from "@/components/CelebrityManagement/WhatIsCelebrityManagement";
import WhyBrandsInvestCelebrityManagement from "@/components/CelebrityManagement/WhyBrandsInvestCelebrityManagement";
import Footer from "@/components/Footer";
import CelebrityManagementIndustries from "@/components/CelebrityManagement/CelebrityManagementIndustries";
import CelebrityManagementProcess from "@/components/CelebrityManagement/CelebrityManagementProcess";

import Navbar from "@/components/Navbar";
import CelebrityTalentTypesSection from "@/components/CelebrityManagement/CelebrityTalentTypesSection";
import CelebrityManagementIndiaCoverage from "@/components/CelebrityManagement/CelebrityManagementIndiaCoverage";
import CelebrityUseCasesBookingInfo from "@/components/CelebrityManagement/CelebrityUseCasesBookingInfo";
import CelebrityManagementFAQ from "@/components/CelebrityManagement/CelebrityManagementFAQ";
import CelebrityManagementCTA from "@/components/CelebrityManagement/CelebrityManagementCTA";
import WhyWorkWithDoubleTroubleStudio from "@/components/CelebrityManagement/WhyWorkWithDoubleTroubleStudio";
import CelebrityFeaturedWork from "@/components/CelebrityManagement/celebrityfeatured";


import type { Metadata } from "next";
import ServiceCityLinks from "@/components/seo/ServiceCityLinks";

export const metadata: Metadata = {
  title:
    "Celebrity Management Company in India | Double Trouble Studio",

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
    "celebrity management Bangalore",
    "celebrity management across India",
  ],

  alternates: {
    canonical:
      "https://www.dtsworld.in/services/celebrity-management",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url:
      "https://www.dtsworld.in/services/celebrity-management",

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
    {
      "@type": "Organization",
      "@id": "https://www.dtsworld.in/#organization",
      name: "Double Trouble Studio",
      alternateName: "DTS World",
      url: "https://www.dtsworld.in/",
      logo: "https://www.dtsworld.in/logo.png",
      image: "https://www.dtsworld.in/og-image.jpg",
      description:
        "Double Trouble Studio is an India-based creative agency offering branding, digital marketing, public relations, event marketing, guest management, celebrity management, website development, AI video production and VFX services.",
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
      "@type": "WebPage",
      "@id": "https://www.dtsworld.in/services/celebrity-management/#webpage",
      url: "https://www.dtsworld.in/services/celebrity-management/",
      name: "Celebrity Management Company in India | Double Trouble Studio",
      headline:
        "Celebrity Management Company in India for Brand Campaigns, Corporate Events & Luxury Experiences",
      description:
        "Celebrity management and celebrity booking services in India for brand campaigns, corporate events, luxury experiences, hospitality launches, weddings, private celebrations and promotional appearances.",
      isPartOf: {
        "@id": "https://www.dtsworld.in/#website",
      },
      about: {
        "@id": "https://www.dtsworld.in/services/celebrity-management/#service",
      },
      mainEntity: {
        "@id": "https://www.dtsworld.in/services/celebrity-management/#service",
      },
      breadcrumb: {
        "@id": "https://www.dtsworld.in/services/celebrity-management/#breadcrumb",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "Service",
      "@id": "https://www.dtsworld.in/services/celebrity-management/#service",
      name: "Celebrity Management Services",
      serviceType: "Celebrity Management and Celebrity Booking",
      category: "Talent Management Services",
      url: "https://www.dtsworld.in/services/celebrity-management/",
      description:
        "Double Trouble Studio provides celebrity management, celebrity booking and talent coordination services for brand campaigns, corporate events, luxury experiences, hospitality launches, product launches, weddings, private celebrations and promotional appearances across India.",
      provider: {
        "@id": "https://www.dtsworld.in/#organization",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Mumbai",
        },
        {
          "@type": "City",
          name: "Delhi NCR",
        },
        {
          "@type": "City",
          name: "Bangalore",
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
          "@type": "City",
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
        {
          "@type": "Country",
          name: "India",
        },
      ],
      audience: {
        "@type": "Audience",
        audienceType:
          "Brands, event planners, corporate organizations, hospitality businesses, luxury brands, wedding planners and agencies",
      },
      offers: {
        "@type": "Offer",
        url: "https://www.dtsworld.in/services/celebrity-management/",
        availability: "https://schema.org/InStock",
        priceCurrency: "INR",
        description:
          "Custom celebrity management pricing based on talent category, event type, city, appearance duration, deliverables, usage rights, travel, hospitality and campaign requirements.",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Celebrity Management Services Offered",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Celebrity Booking and Talent Acquisition",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Bollywood Celebrity Booking",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Celebrity Endorsement Campaigns",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Celebrity Appearance Management",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Influencer and Creator Collaborations",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corporate Event Talent Management",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Singer and Performer Booking",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Brand Ambassador Programs",
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dtsworld.in/services/celebrity-management/#breadcrumb",
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
          name: "Celebrity Management",
          item: "https://www.dtsworld.in/services/celebrity-management/",
        },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.dtsworld.in/services/celebrity-management/#process",
      name: "Celebrity Management Process",
      description:
        "A structured celebrity management process from requirement discovery to post-event support.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Requirement Discovery",
          text: "Understanding the event goals, campaign objective, audience profile, preferred talent category, city, date, budget range and expected deliverables.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Talent Research and Shortlisting",
          text: "Identifying suitable celebrities, influencers, speakers or performers based on relevance, availability, popularity, audience fit and brand positioning.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Outreach and Negotiation",
          text: "Managing talent outreach, availability checks, commercial discussions, appearance terms, deliverables and negotiation.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Contract and Compliance",
          text: "Coordinating agreements, usage rights, appearance clauses, deliverables, brand category terms, payment schedules and documentation.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Logistics Planning",
          text: "Managing travel, accommodation, hospitality, security, green room requirements, schedules, technical needs and event-day movement planning.",
        },
        {
          "@type": "HowToStep",
          position: 6,
          name: "Event-Day Coordination",
          text: "Overseeing arrival coordination, backstage communication, media moments, stage flow, guest interaction, stakeholder alignment and departure planning.",
        },
        {
          "@type": "HowToStep",
          position: 7,
          name: "Post-Event Support",
          text: "Supporting campaign deliverables, content coordination, reporting, usage confirmations and post-event closure.",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/celebrity-management/#event-types",
      name: "Celebrity Booking Services for Different Event Types",
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
          name: "Weddings and Private Celebrations",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Conferences and Summits",
        },
        {
          "@type": "ListItem",
          position: 11,
          name: "Trade Shows and Exhibitions",
        },
        {
          "@type": "ListItem",
          position: 12,
          name: "Entertainment Events",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/celebrity-management/#talent-categories",
      name: "Types of Talent Managed",
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
          name: "Television Personalities",
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
          name: "Motivational Speakers",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Musicians and Singers",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Anchors and Hosts",
        },
        {
          "@type": "ListItem",
          position: 11,
          name: "Public Figures",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.dtsworld.in/services/celebrity-management/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is celebrity management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Celebrity management involves sourcing, booking, coordinating and managing public personalities for events, campaigns, endorsements, promotions and brand collaborations.",
          },
        },
        {
          "@type": "Question",
          name: "How does celebrity booking work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Celebrity booking usually starts with understanding the event or campaign requirement, talent category, date, city, budget, deliverables and usage needs. The agency then shortlists suitable talent, checks availability, negotiates terms and manages coordination.",
          },
        },
        {
          "@type": "Question",
          name: "Can you arrange celebrities for brand endorsements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio helps brands coordinate celebrity endorsement campaigns, brand ambassador partnerships, digital promotions, product launches and advertising collaborations.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost to hire a celebrity in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost to hire a celebrity in India depends on talent popularity, appearance duration, event city, campaign deliverables, usage rights, travel requirements, exclusivity and brand category.",
          },
        },
        {
          "@type": "Question",
          name: "Can celebrities be booked for social media promotions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Celebrities, influencers and creators can be booked for social media promotions, branded reels, Instagram posts, YouTube integrations, short-form videos and digital campaign content.",
          },
        },
        {
          "@type": "Question",
          name: "Can you arrange Bollywood celebrities for private events?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Bollywood celebrities can be arranged for private events, weddings, luxury celebrations, hospitality experiences and brand-led gatherings subject to availability, requirements and commercial terms.",
          },
        },
        {
          "@type": "Question",
          name: "Do celebrity endorsement fees include usage rights?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not always. Usage rights are usually discussed separately and depend on campaign duration, media platforms, geography, exclusivity, content format and brand category.",
          },
        },
        {
          "@type": "Question",
          name: "What types of events can include celebrity appearances?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Celebrity appearances can be planned for corporate events, product launches, brand activations, hotel launches, restaurant openings, luxury experiences, fashion shows, award ceremonies, weddings, conferences, exhibitions and entertainment events.",
          },
        },
        {
          "@type": "Question",
          name: "Do you manage influencer collaborations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio manages influencer and creator collaborations for social media campaigns, launch visibility, branded content, hospitality activations, fashion campaigns and audience engagement.",
          },
        },
        {
          "@type": "Question",
          name: "What information is required to book a celebrity?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Celebrity booking usually requires event date, event city and venue, type of event or campaign, preferred celebrity category, expected appearance duration, brand details, audience profile, budget range, deliverables, travel expectations and content rights requirements.",
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
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(celebrityManagementSchema),
        }}
      />

      <main>
        <Navbar />
        <CelebrityManagementHero />
        <CelebrityBookingIntro />
        <WhatIsCelebrityManagement />
        <CelebrityManagementServices />
        <CelebrityFeaturedWork/>
        {/* <WhyBrandsInvestCelebrityManagement /> */}
        <CelebrityEventTypes />
        <CelebrityManagementIndustries />
        <CelebrityManagementProcess />
        <CelebrityTalentTypesSection />
        <WhyWorkWithDoubleTroubleStudio />
        <CelebrityManagementIndiaCoverage />
        <CelebrityUseCasesBookingInfo />
        <CelebrityManagementFAQ />
        <CelebrityManagementCTA />
         <ServiceCityLinks serviceSlug="celebrity-management" />
        <Footer />
       
      </main>
    </>
  );
}