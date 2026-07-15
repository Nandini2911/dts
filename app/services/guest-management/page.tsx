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

export const metadata: Metadata = {
  title:
    "Guest Management Services in Mumbai & India | Double Trouble Studio",

  description:
    "Professional guest management for weddings, corporate events and VIP experiences, including RSVP, registration, check-ins, access control and hospitality across India.",

  applicationName: "Double Trouble Studio",

  authors: [
    {
      name: "Double Trouble Studio",
      url: "https://www.dtsworld.in/",
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
    canonical:
      "https://www.dtsworld.in/services/guest-management",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url:
      "https://www.dtsworld.in/services/guest-management",

    siteName: "Double Trouble Studio",

    title:
      "Guest Management Services in Mumbai & India | Double Trouble Studio",

    description:
      "Professional RSVP management, guest registration, VIP coordination, event check-ins, access control and hospitality support for premium events across India.",

    images: [
      {
        url:
          "https://www.dtsworld.in/guest-management-og.jpg",

        width: 1200,

        height: 630,

        alt:
          "Guest Management Services by Double Trouble Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Guest Management Services in Mumbai & India",

    description:
      "Professional RSVP, guest registration, VIP handling, event check-in, access control and hospitality services across India.",

    images: [
      "https://www.dtsworld.in/guest-management-og.jpg",
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


const guestManagementSchema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "ImageObject",

      "@id":
        "https://www.dtsworld.in/#logo",

      url:
        "https://www.dtsworld.in/logo.png",

      contentUrl:
        "https://www.dtsworld.in/logo.png",

      caption:
        "Double Trouble Studio Logo",

      inLanguage: "en-IN",
    },

    {
      "@type": "ImageObject",

      "@id":
        "https://www.dtsworld.in/services/guest-management#primaryimage",

      url:
        "https://www.dtsworld.in/guest-management-og.jpg",

      contentUrl:
        "https://www.dtsworld.in/guest-management-og.jpg",

      width: 1200,

      height: 630,

      caption:
        "Guest Management Services for Weddings, Corporate Events and VIP Experiences",

      representativeOfPage: true,

      inLanguage: "en-IN",
    },

    {
      "@type": [
        "Organization",
        "LocalBusiness",
      ],

      "@id":
        "https://www.dtsworld.in/#organization",

      name:
        "Double Trouble Studio",

      legalName:
        "Double Trouble Studio Pvt. Ltd.",

      alternateName: [
        "DTS",
        "DTS World",
      ],

      url:
        "https://www.dtsworld.in/",

      logo: {
        "@id":
          "https://www.dtsworld.in/#logo",
      },

      image: {
        "@id":
          "https://www.dtsworld.in/#logo",
      },

      description:
        "Double Trouble Studio is a Mumbai-based creative agency providing professional guest management, event management, branding, digital marketing, public relations, website development, AI video production and VFX services across India.",

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
          "https://www.dtsworld.in/services/guest-management#contact",

        contactType:
          "project enquiries",

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
          "@type": "City",
          name: "Delhi",
        },

        {
          "@type": "City",
          name: "Gurugram",
          alternateName: "Gurgaon",
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
          "@type": "City",
          name: "Chandigarh",
        },

        {
          "@type": "AdministrativeArea",
          name: "Goa",
        },
      ],

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
        "@id":
          "https://www.dtsworld.in/services/guest-management#catalog",
      },
    },

    {
      "@type": "WebSite",

      "@id":
        "https://www.dtsworld.in/#website",

      url:
        "https://www.dtsworld.in/",

      name:
        "Double Trouble Studio",

      alternateName: [
        "DTS",
        "DTS World",
      ],

      description:
        "Double Trouble Studio is a creative agency in Mumbai providing branding, digital marketing, public relations, event management, guest management, website development, AI video production and VFX services across India.",

      publisher: {
        "@id":
          "https://www.dtsworld.in/#organization",
      },

      inLanguage:
        "en-IN",
    },

    {
      "@type": "WebPage",

      "@id":
        "https://www.dtsworld.in/services/guest-management#webpage",

      url:
        "https://www.dtsworld.in/services/guest-management",

      name:
        "Guest Management Services in Mumbai and Across India | Double Trouble Studio",

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
        "@id":
          "https://www.dtsworld.in/#website",
      },

      about: {
        "@id":
          "https://www.dtsworld.in/services/guest-management#service",
      },

      mainEntity: {
        "@id":
          "https://www.dtsworld.in/services/guest-management#service",
      },

      publisher: {
        "@id":
          "https://www.dtsworld.in/#organization",
      },

      primaryImageOfPage: {
        "@id":
          "https://www.dtsworld.in/services/guest-management#primaryimage",
      },

      breadcrumb: {
        "@id":
          "https://www.dtsworld.in/services/guest-management#breadcrumb",
      },

      hasPart: [
        {
          "@id":
            "https://www.dtsworld.in/services/guest-management#catalog",
        },

        {
          "@id":
            "https://www.dtsworld.in/services/guest-management#process",
        },

        {
          "@id":
            "https://www.dtsworld.in/services/guest-management#featured-work",
        },

        {
          "@id":
            "https://www.dtsworld.in/services/guest-management#industries",
        },

        {
          "@id":
            "https://www.dtsworld.in/services/guest-management#locations",
        },

        {
          "@id":
            "https://www.dtsworld.in/services/guest-management#faq",
        },
      ],

      significantLink: [
        "https://www.dtsworld.in/contact",
        "https://www.dtsworld.in/work",
        "https://www.dtsworld.in/services/celebrity-management",
        "https://www.dtsworld.in/services/events-weddings",
      ],

      copyrightYear:
        2026,

      copyrightHolder: {
        "@id":
          "https://www.dtsworld.in/#organization",
      },

      inLanguage:
        "en-IN",
    },

    {
      "@type": "Service",

      "@id":
        "https://www.dtsworld.in/services/guest-management#service",

      name:
        "Guest Management Services",

      alternateName: [
        "Event Guest Management",
        "Wedding Guest Management",
        "Corporate Event Guest Management",
        "VIP Guest Management",
      ],

      url:
        "https://www.dtsworld.in/services/guest-management",

      serviceType: [
        "Guest Management",
        "RSVP Management",
        "Guest List Management",
        "Event Registration",
        "VIP Guest Coordination",
        "Check-In Management",
        "Access Control",
        "Attendee Tracking",
        "Hospitality Coordination",
      ],

      category:
        "Event Guest Management and Hospitality Services",

      description:
        "Double Trouble Studio provides professional guest management services for weddings, corporate events, celebrity events, brand launches, investor events and private VIP experiences across Mumbai and India. Services include RSVP management, guest list management, event registration, VIP coordination, check-in management, access control, attendee tracking, invitation management and hospitality support.",

      provider: {
        "@id":
          "https://www.dtsworld.in/#organization",
      },

      audience: {
        "@type":
          "Audience",

        audienceType:
          "Wedding hosts, corporate event organizers, celebrity event teams, brand launch teams, hospitality teams, founders, investors and private event hosts",
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
          "@type": "City",
          name: "Delhi",
        },

        {
          "@type": "City",
          name: "Gurugram",
          alternateName: "Gurgaon",
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
          "@type": "City",
          name: "Chandigarh",
        },

        {
          "@type": "AdministrativeArea",
          name: "Goa",
        },
      ],

      hasOfferCatalog: {
        "@id":
          "https://www.dtsworld.in/services/guest-management#catalog",
      },

      subjectOf: {
        "@id":
          "https://www.dtsworld.in/services/guest-management#featured-work",
      },

      mainEntityOfPage: {
        "@id":
          "https://www.dtsworld.in/services/guest-management#webpage",
      },
    },

    {
      "@type": "OfferCatalog",

      "@id":
        "https://www.dtsworld.in/services/guest-management#catalog",

      url:
        "https://www.dtsworld.in/services/guest-management#services",

      name:
        "Guest Management Services We Provide",

      description:
        "Guest management solutions covering RSVP tracking, guest databases, VIP handling, event registration, check-ins, access control, attendee tracking, invitations, hospitality and guest communication.",

      numberOfItems:
        10,

      itemListOrder:
        "https://schema.org/ItemListOrderAscending",

      itemListElement: [
        {
          "@type": "Offer",

          "@id":
            "https://www.dtsworld.in/services/guest-management#rsvp-offer",

          seller: {
            "@id":
              "https://www.dtsworld.in/#organization",
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.dtsworld.in/services/guest-management#rsvp-management",

            name:
              "RSVP Management",

            serviceType:
              "RSVP Management",

            description:
              "Tracking confirmations, reminders, declines, pending responses and attendance for every invited guest.",

            provider: {
              "@id":
                "https://www.dtsworld.in/#organization",
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
            "https://www.dtsworld.in/services/guest-management#guest-list-offer",

          seller: {
            "@id":
              "https://www.dtsworld.in/#organization",
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.dtsworld.in/services/guest-management#guest-list-management",

            name:
              "Guest List Management",

            serviceType:
              "Guest List Management",

            description:
              "Organized guest segmentation, database management, guest categorization and event guest planning.",

            provider: {
              "@id":
                "https://www.dtsworld.in/#organization",
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
            "https://www.dtsworld.in/services/guest-management#vip-offer",

          seller: {
            "@id":
              "https://www.dtsworld.in/#organization",
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.dtsworld.in/services/guest-management#vip-management",

            name:
              "VIP Guest Management",

            serviceType:
              "VIP Guest Coordination",

            description:
              "Dedicated coordination and discreet handling for celebrities, founders, dignitaries, speakers, investors and premium guests.",

            provider: {
              "@id":
                "https://www.dtsworld.in/#organization",
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
            "https://www.dtsworld.in/services/guest-management#registration-offer",

          seller: {
            "@id":
              "https://www.dtsworld.in/#organization",
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.dtsworld.in/services/guest-management#event-registration",

            name:
              "Event Registration",

            serviceType:
              "Event Registration",

            description:
              "Pre-event attendee registration, verification, categorization and guest data collection.",

            provider: {
              "@id":
                "https://www.dtsworld.in/#organization",
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
            "https://www.dtsworld.in/services/guest-management#check-in-offer",

          seller: {
            "@id":
              "https://www.dtsworld.in/#organization",
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.dtsworld.in/services/guest-management#check-in-management",

            name:
              "Check-In Management",

            serviceType:
              "Event Check-In Management",

            description:
              "Fast event entry, guest verification and organized on-ground check-in coordination.",

            provider: {
              "@id":
                "https://www.dtsworld.in/#organization",
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
            "https://www.dtsworld.in/services/guest-management#access-control-offer",

          seller: {
            "@id":
              "https://www.dtsworld.in/#organization",
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.dtsworld.in/services/guest-management#access-control",

            name:
              "Access Control",

            serviceType:
              "Event Access Control",

            description:
              "Secure guest access, entry verification, zone control and movement management throughout the event.",

            provider: {
              "@id":
                "https://www.dtsworld.in/#organization",
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
            "https://www.dtsworld.in/services/guest-management#tracking-offer",

          seller: {
            "@id":
              "https://www.dtsworld.in/#organization",
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.dtsworld.in/services/guest-management#attendee-tracking",

            name:
              "Attendee Tracking",

            serviceType:
              "Event Attendee Tracking",

            description:
              "Real-time attendee tracking, arrival monitoring, attendance visibility and event reporting.",

            provider: {
              "@id":
                "https://www.dtsworld.in/#organization",
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
            "https://www.dtsworld.in/services/guest-management#invitation-offer",

          seller: {
            "@id":
              "https://www.dtsworld.in/#organization",
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.dtsworld.in/services/guest-management#invitation-management",

            name:
              "Invitation Management",

            serviceType:
              "Event Invitation Management",

            description:
              "Digital invitation planning, invite dispatch, guest confirmations, reminders and follow-ups.",

            provider: {
              "@id":
                "https://www.dtsworld.in/#organization",
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
            "https://www.dtsworld.in/services/guest-management#hospitality-offer",

          seller: {
            "@id":
              "https://www.dtsworld.in/#organization",
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.dtsworld.in/services/guest-management#hospitality-coordination",

            name:
              "Hospitality Coordination",

            serviceType:
              "Event Hospitality Coordination",

            description:
              "Welcome-desk support, seating assistance, guest guidance and premium hospitality coordination.",

            provider: {
              "@id":
                "https://www.dtsworld.in/#organization",
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
            "https://www.dtsworld.in/services/guest-management#communication-offer",

          seller: {
            "@id":
              "https://www.dtsworld.in/#organization",
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.dtsworld.in/services/guest-management#guest-communication",

            name:
              "Guest Communication Management",

            serviceType:
              "Guest Communication Management",

            description:
              "WhatsApp, email and call coordination for invitations, confirmations, reminders, updates and event directions.",

            provider: {
              "@id":
                "https://www.dtsworld.in/#organization",
            },

            areaServed: {
              "@type": "Country",
              name: "India",
            },
          },
        },
      ],
    },

    {
      "@type": "BreadcrumbList",

      "@id":
        "https://www.dtsworld.in/services/guest-management#breadcrumb",

      itemListElement: [
        {
          "@type":
            "ListItem",

          position:
            1,

          name:
            "Home",

          item:
            "https://www.dtsworld.in/",
        },

        {
          "@type":
            "ListItem",

          position:
            2,

          name:
            "Guest Management",

          item:
            "https://www.dtsworld.in/services/guest-management",
        },
      ],
    },

    {
      "@type": "HowTo",

      "@id":
        "https://www.dtsworld.in/services/guest-management#process",

      url:
        "https://www.dtsworld.in/services/guest-management#process",

      name:
        "Double Trouble Studio Guest Management Process",

      description:
        "A structured guest management process from planning and system setup to communication, on-ground execution and post-event reporting.",

      inLanguage:
        "en-IN",

      step: [
        {
          "@type":
            "HowToStep",

          position:
            1,

          name:
            "Discovery and Planning",

          text:
            "Understand audience types, VIP priorities, event objectives, guest categories, entry points and operational requirements.",
        },

        {
          "@type":
            "HowToStep",

          position:
            2,

          name:
            "Guest System Setup",

          text:
            "Create guest categories, access tiers, guest databases, RSVP workflows and verification systems.",
        },

        {
          "@type":
            "HowToStep",

          position:
            3,

          name:
            "Coordination and Communication",

          text:
            "Manage invitations, reminders, confirmations, updates and guest communication before the event.",
        },

        {
          "@type":
            "HowToStep",

          position:
            4,

          name:
            "On-Ground Execution",

          text:
            "Handle guest verification, check-ins, VIP movement, access control and real-time event coordination.",
        },

        {
          "@type":
            "HowToStep",

          position:
            5,

          name:
            "Reporting and Wrap-Up",

          text:
            "Provide attendance visibility, guest insights, operational reporting and post-event review.",
        },
      ],
    },

    {
      "@type": "ItemList",

      "@id":
        "https://www.dtsworld.in/services/guest-management#featured-work",

      url:
        "https://www.dtsworld.in/services/guest-management#featured-work",

      name:
        "Guest Management in Action",

      description:
        "Guest management examples covering weddings, celebrity events, brand launches, corporate events, VIP movements and destination events.",

      numberOfItems:
        6,

      itemListOrder:
        "https://schema.org/ItemListOrderAscending",

      itemListElement: [
        {
          "@type":
            "ListItem",

          position:
            1,

          item: {
            "@type":
              "CreativeWork",

            "@id":
              "https://www.dtsworld.in/services/guest-management#luxury-wedding-flow",

            name:
              "Luxury Wedding Guest Flow",

            description:
              "Structured guest segmentation, VIP routing and seamless arrival coordination for a high-profile wedding celebration.",

            creator: {
              "@id":
                "https://www.dtsworld.in/#organization",
            },

            about: {
              "@id":
                "https://www.dtsworld.in/services/guest-management#service",
            },

            inLanguage:
              "en-IN",
          },
        },

        {
          "@type":
            "ListItem",

          position:
            2,

          item: {
            "@type":
              "CreativeWork",

            "@id":
              "https://www.dtsworld.in/services/guest-management#celebrity-event-entry",

            name:
              "Celebrity Event Entry Control",

            description:
              "VIP arrival handling, media coordination and access control under high-pressure event conditions.",

            creator: {
              "@id":
                "https://www.dtsworld.in/#organization",
            },

            about: {
              "@id":
                "https://www.dtsworld.in/services/guest-management#service",
            },

            inLanguage:
              "en-IN",
          },
        },

        {
          "@type":
            "ListItem",

          position:
            3,

          item: {
            "@type":
              "CreativeWork",

            "@id":
              "https://www.dtsworld.in/services/guest-management#brand-launch-system",

            name:
              "Brand Launch Guest System",

            description:
              "A complete RSVP and event entry-flow system with tiered access and organized guest check-ins.",

            creator: {
              "@id":
                "https://www.dtsworld.in/#organization",
            },

            about: {
              "@id":
                "https://www.dtsworld.in/services/guest-management#service",
            },

            inLanguage:
              "en-IN",
          },
        },

        {
          "@type":
            "ListItem",

          position:
            4,

          item: {
            "@type":
              "CreativeWork",

            "@id":
              "https://www.dtsworld.in/services/guest-management#corporate-event-desk",

            name:
              "Corporate Event Guest Desk",

            description:
              "Delegate verification, event registration and real-time guest support for a premium corporate gathering.",

            creator: {
              "@id":
                "https://www.dtsworld.in/#organization",
            },

            about: {
              "@id":
                "https://www.dtsworld.in/services/guest-management#service",
            },

            inLanguage:
              "en-IN",
          },
        },

        {
          "@type":
            "ListItem",

          position:
            5,

          item: {
            "@type":
              "CreativeWork",

            "@id":
              "https://www.dtsworld.in/services/guest-management#vip-movement",

            name:
              "VIP Movement Coordination",

            description:
              "Controlled and discreet guest routes for celebrities, founders, dignitaries and special invitees.",

            creator: {
              "@id":
                "https://www.dtsworld.in/#organization",
            },

            about: {
              "@id":
                "https://www.dtsworld.in/services/guest-management#service",
            },

            inLanguage:
              "en-IN",
          },
        },

        {
          "@type":
            "ListItem",

          position:
            6,

          item: {
            "@type":
              "CreativeWork",

            "@id":
              "https://www.dtsworld.in/services/guest-management#destination-event-arrival",

            name:
              "Destination Event Arrival Flow",

            description:
              "Arrival, hotel movement, venue entry and guest assistance coordination across multiple destination-event touchpoints.",

            creator: {
              "@id":
                "https://www.dtsworld.in/#organization",
            },

            about: {
              "@id":
                "https://www.dtsworld.in/services/guest-management#service",
            },

            inLanguage:
              "en-IN",
          },
        },
      ],
    },

    {
      "@type": "ItemList",

      "@id":
        "https://www.dtsworld.in/services/guest-management#industries",

      name:
        "Events Supported by Guest Management Services",

      description:
        "Guest management support for weddings, celebrity events, corporate events, brand launches, fashion events, media events, award nights, private gatherings and investor events.",

      numberOfItems:
        9,

      itemListOrder:
        "https://schema.org/ItemListUnordered",

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Luxury Weddings",
        },

        {
          "@type": "ListItem",
          position: 2,
          name: "Celebrity Events",
        },

        {
          "@type": "ListItem",
          position: 3,
          name: "Corporate Events",
        },

        {
          "@type": "ListItem",
          position: 4,
          name: "Brand Launches",
        },

        {
          "@type": "ListItem",
          position: 5,
          name: "Fashion Events",
        },

        {
          "@type": "ListItem",
          position: 6,
          name: "Media Events",
        },

        {
          "@type": "ListItem",
          position: 7,
          name: "Award Nights",
        },

        {
          "@type": "ListItem",
          position: 8,
          name: "Private Gatherings",
        },

        {
          "@type": "ListItem",
          position: 9,
          name: "Founder and Investor Events",
        },
      ],
    },

    {
      "@type": "ItemList",

      "@id":
        "https://www.dtsworld.in/services/guest-management#locations",

      name:
        "Guest Management Service Locations",

      numberOfItems:
        11,

      itemListOrder:
        "https://schema.org/ItemListUnordered",

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Mumbai",
        },

        {
          "@type": "ListItem",
          position: 2,
          name: "Delhi",
        },

        {
          "@type": "ListItem",
          position: 3,
          name: "Gurgaon",
        },

        {
          "@type": "ListItem",
          position: 4,
          name: "Bangalore",
        },

        {
          "@type": "ListItem",
          position: 5,
          name: "Hyderabad",
        },

        {
          "@type": "ListItem",
          position: 6,
          name: "Pune",
        },

        {
          "@type": "ListItem",
          position: 7,
          name: "Ahmedabad",
        },

        {
          "@type": "ListItem",
          position: 8,
          name: "Goa",
        },

        {
          "@type": "ListItem",
          position: 9,
          name: "Jaipur",
        },

        {
          "@type": "ListItem",
          position: 10,
          name: "Chandigarh",
        },

        {
          "@type": "ListItem",
          position: 11,
          name: "Across India",
        },
      ],
    },

    {
      "@type": "FAQPage",

      "@id":
        "https://www.dtsworld.in/services/guest-management#faq",

      url:
        "https://www.dtsworld.in/services/guest-management#faq",

      name:
        "Guest Management Frequently Asked Questions",

      description:
        "Answers to common questions about guest management services, RSVP tracking, event registration, VIP handling, event check-ins, access control, locations and pricing.",

      isPartOf: {
        "@id":
          "https://www.dtsworld.in/services/guest-management#webpage",
      },

      about: {
        "@id":
          "https://www.dtsworld.in/services/guest-management#service",
      },

      publisher: {
        "@id":
          "https://www.dtsworld.in/#organization",
      },

      inLanguage:
        "en-IN",

      mainEntity: [
        {
          "@type":
            "Question",

          name:
            "What is guest management in event management?",

          acceptedAnswer: {
            "@type":
              "Answer",

            text:
              "Guest management in event management is the process of planning, organizing and coordinating attendees before, during and after an event. It includes guest list management, RSVP tracking, event registration, check-in management, VIP guest coordination, access control and on-ground guest assistance to create a smooth event experience.",
          },
        },

        {
          "@type":
            "Question",

          name:
            "What services are included in guest management?",

          acceptedAnswer: {
            "@type":
              "Answer",

            text:
              "Professional guest management services include RSVP management, guest list management, event registration, guest communication, check-in coordination, VIP guest handling, access control, hospitality support, attendee verification and on-ground guest assistance throughout the event.",
          },
        },

        {
          "@type":
            "Question",

          name:
            "Why is RSVP management important?",

          acceptedAnswer: {
            "@type":
              "Answer",

            text:
              "RSVP management is important because it helps event organizers track confirmations, declines, pending responses, guest preferences and expected attendance. A proper RSVP management system reduces confusion, improves planning accuracy and helps the team prepare seating, hospitality, entry flow and VIP arrangements in advance.",
          },
        },

        {
          "@type":
            "Question",

          name:
            "How does guest check-in work?",

          acceptedAnswer: {
            "@type":
              "Answer",

            text:
              "Guest check-in works through a structured verification process at the event entry point. Guests are matched with the approved guest list or event registration database, verified by name, QR code, invite status or category, and then guided to the correct access area. This helps reduce waiting time and keeps entry organized.",
          },
        },

        {
          "@type":
            "Question",

          name:
            "Can you manage VIP guests?",

          acceptedAnswer: {
            "@type":
              "Answer",

            text:
              "Yes. Double Trouble Studio manages VIP guests, celebrities, founders, dignitaries, speakers, investors and high-profile attendees with dedicated coordination. This includes private entry planning, arrival tracking, access control, hospitality assistance, media-sensitive movement and discreet on-ground support.",
          },
        },

        {
          "@type":
            "Question",

          name:
            "Do you provide wedding guest management?",

          acceptedAnswer: {
            "@type":
              "Answer",

            text:
              "Yes. Double Trouble Studio provides wedding guest management services for luxury weddings, destination weddings, private celebrations and high-value family events. The team handles guest lists, RSVP tracking, family guest coordination, VIP arrivals, hospitality support, check-ins and venue entry management.",
          },
        },

        {
          "@type":
            "Question",

          name:
            "Do you provide corporate event guest management?",

          acceptedAnswer: {
            "@type":
              "Answer",

            text:
              "Yes. Double Trouble Studio provides corporate event guest management for conferences, product launches, brand events, investor meetings, networking events, award nights and business gatherings. Services include registration, delegate check-ins, speaker coordination, VIP handling, access control and attendee-experience management.",
          },
        },

        {
          "@type":
            "Question",

          name:
            "Can guest management improve event security?",

          acceptedAnswer: {
            "@type":
              "Answer",

            text:
              "Yes. Guest management improves event security by ensuring only approved attendees enter the venue. Through guest verification, access control, segmented entry systems, VIP movement planning and real-time coordination, unauthorized access is reduced and crowd movement becomes easier to manage.",
          },
        },

        {
          "@type":
            "Question",

          name:
            "Do you work across India?",

          acceptedAnswer: {
            "@type":
              "Answer",

            text:
              "Yes. Double Trouble Studio provides guest management services across India for weddings, corporate events, celebrity events, brand launches, media events and private gatherings. The team works across major cities and destinations including Mumbai, Delhi, Gurgaon, Bangalore, Hyderabad, Pune, Goa, Jaipur and Chandigarh.",
          },
        },

        {
          "@type":
            "Question",

          name:
            "What types of events do you manage?",

          acceptedAnswer: {
            "@type":
              "Answer",

            text:
              "Double Trouble Studio manages guest flow for luxury weddings, celebrity events, corporate conferences, product launches, brand launches, fashion events, media events, award nights, investor events, private gatherings, founder events, social celebrations and high-profile VIP experiences.",
          },
        },

        {
          "@type":
            "Question",

          name:
            "Why choose Double Trouble Studio?",

          acceptedAnswer: {
            "@type":
              "Answer",

            text:
              "Double Trouble Studio combines strategic planning, guest coordination and on-ground event execution. The team focuses on smooth entry flow, clear guest communication, VIP handling, access control and premium hospitality, ensuring every guest experience feels organized, professional and seamless.",
          },
        },

        {
          "@type":
            "Question",

          name:
            "How much do guest management services cost?",

          acceptedAnswer: {
            "@type":
              "Answer",

            text:
              "The cost of guest management services depends on the event size, guest count, number of entry points, RSVP requirements, VIP coordination needs, registration systems, manpower requirements and event location. Double Trouble Studio provides customized quotations based on the event scope and operational requirements.",
          },
        },
      ],
    },
  ],
};

export default function GuestManagement() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(guestManagementSchema),
        }}
      />

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
        <Footer />
              <ServiceCityLinks serviceSlug="guest-management" />

      </main>
    </>
  );
}