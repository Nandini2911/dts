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

const guestManagementSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.dtsworld.in/#organization",
      name: "Double Trouble Studio",
      alternateName: "DTS World",
      url: "https://www.dtsworld.in/",
      logo: {
        "@type": "ImageObject",
        "@id": "https://www.dtsworld.in/#logo",
        url: "https://www.dtsworld.in/logo.png",
      },
      image: "https://www.dtsworld.in/og-image.jpg",
      description:
        "Double Trouble Studio is an India-based creative agency offering branding, digital marketing, public relations, event marketing, guest management, website development, AI video production and VFX services.",
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
        "Guest Management",
        "RSVP Management",
        "Guest List Management",
        "Event Registration",
        "VIP Guest Coordination",
        "Check-In Management",
        "Access Control",
        "Hospitality Coordination",
        "Wedding Guest Management",
        "Corporate Event Guest Management",
        "Celebrity Event Management",
        "Brand Launch Guest Management",
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
      "@type": "WebPage",
      "@id": "https://www.dtsworld.in/services/guest-management/#webpage",
      url: "https://www.dtsworld.in/services/guest-management/",
      name: "Guest Management Services in Mumbai & Across India | Double Trouble Studio",
      headline:
        "Guest Management Services For Weddings, Corporate Events & VIP Experiences",
      description:
        "Professional guest management services in Mumbai including RSVP management, guest list management, event registration, VIP guest coordination, check-in management and access control for weddings, corporate events, celebrity events and brand launches across India.",
      isPartOf: {
        "@id": "https://www.dtsworld.in/#website",
      },
      about: {
        "@id": "https://www.dtsworld.in/services/guest-management/#service",
      },
      mainEntity: {
        "@id": "https://www.dtsworld.in/services/guest-management/#service",
      },
      breadcrumb: {
        "@id": "https://www.dtsworld.in/services/guest-management/#breadcrumb",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "Service",
      "@id": "https://www.dtsworld.in/services/guest-management/#service",
      name: "Guest Management Services",
      serviceType: "Guest Management",
      category: "Event Management Services",
      url: "https://www.dtsworld.in/services/guest-management/",
      description:
        "Double Trouble Studio provides professional guest management services for weddings, corporate events, celebrity events, brand launches and VIP experiences across Mumbai and India. Services include RSVP management, guest list management, event registration, VIP guest coordination, check-in management, access control, attendee tracking and hospitality coordination.",
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
          name: "Delhi",
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
          name: "Goa",
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
      audience: {
        "@type": "Audience",
        audienceType:
          "Wedding hosts, corporate event organizers, celebrity event teams, brand launch teams and private event hosts",
      },
      offers: {
        "@type": "Offer",
        url: "https://www.dtsworld.in/services/guest-management/",
        availability: "https://schema.org/InStock",
        priceCurrency: "INR",
        description:
          "Custom guest management service pricing based on event size, guest count, RSVP requirements, VIP handling, access control and on-ground support needs.",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Guest Management Services Offered",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "RSVP Management",
              description:
                "Tracking confirmations, reminders and attendance for invited guests.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Guest List Management",
              description:
                "Guest segmentation, database management and event guest planning.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "VIP Guest Management",
              description:
                "Dedicated coordination for celebrities, founders, dignitaries and premium guests.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Event Registration",
              description:
                "Pre-event attendee registration, verification and guest data collection.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Check-In Management",
              description:
                "Fast entry flow, guest verification and smooth on-ground check-in experience.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Access Control",
              description:
                "Secure guest access, zone control and movement management across the event.",
            },
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dtsworld.in/services/guest-management/#breadcrumb",
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
          name: "Guest Management",
          item: "https://www.dtsworld.in/services/guest-management/",
        },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.dtsworld.in/services/guest-management/#process",
      name: "Guest Management Process",
      description:
        "A structured guest management process from planning to post-event reporting designed to keep guest movement clear, calm and controlled.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Discovery and Planning",
          text: "Understanding audience types, VIP priorities and event objectives.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Guest System Setup",
          text: "Creating guest categories, access tiers and RSVP workflows.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Coordination and Communication",
          text: "Managing invitations, reminders and confirmations.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "On-Ground Execution",
          text: "Handling check-ins, access control and real-time coordination.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Reporting and Wrap-Up",
          text: "Providing attendance insights and post-event review.",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/guest-management/#services-list",
      name: "Guest Management Services We Provide",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "RSVP Management",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guest List Management",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "VIP Guest Management",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Event Registration",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Check-In Management",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Access Control",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Attendee Tracking",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Invitation Management",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Hospitality Coordination",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Guest Communication Management",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/guest-management/#industries",
      name: "Events Supported by Guest Management Services",
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
      "@id": "https://www.dtsworld.in/services/guest-management/#locations",
      name: "Guest Management Service Locations",
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
          name: "Bangalore",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Hyderabad",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Pune",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Ahmedabad",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Goa",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Across India",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.dtsworld.in/services/guest-management/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is guest management in event management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Guest management in event management is the process of planning, organizing and coordinating attendees before, during and after an event. It includes guest list management, RSVP tracking, event registration, check-in management, VIP guest coordination, access control and on-ground guest assistance to create a smooth event experience.",
          },
        },
        {
          "@type": "Question",
          name: "What services are included in guest management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Guest management services include RSVP management, guest list management, event registration, check-in management, VIP guest coordination, access control, attendee tracking, invitation management, hospitality coordination and guest communication management.",
          },
        },
        {
          "@type": "Question",
          name: "Why is RSVP management important?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "RSVP management helps event organizers track confirmations, pending responses, special requirements and expected attendance before the event day, reducing confusion and improving guest planning.",
          },
        },
        {
          "@type": "Question",
          name: "How does guest check-in work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Guest check-in works through organized guest lists, registration data, verification points and on-ground coordination so attendees can enter quickly and the event team can track arrivals in real time.",
          },
        },
        {
          "@type": "Question",
          name: "Can you manage VIP guests?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio manages VIP guests including celebrities, founders, dignitaries, speakers, investors and premium invitees through dedicated handling, separate entry flow, privacy support and personalized hospitality.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide wedding guest management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio provides wedding guest management including RSVP tracking, family guest segmentation, hospitality coordination, rooming support, entry desks, VIP guest handling and event-day coordination.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide corporate event guest management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio provides corporate event guest management for conferences, investor meetings, product launches, networking events and premium business gatherings.",
          },
        },
        {
          "@type": "Question",
          name: "Can guest management improve event security?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A structured guest list, event registration process and entry verification system help prevent unauthorized access, reduce gate pressure and improve overall event security.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work across India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio provides guest management services in Mumbai, Delhi, Bangalore, Hyderabad, Pune, Ahmedabad, Goa and across India.",
          },
        },
        {
          "@type": "Question",
          name: "What types of events do you manage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Double Trouble Studio manages guest flow for luxury weddings, corporate events, celebrity events, brand launches, fashion events, media events, award nights, private gatherings and founder or investor events.",
          },
        },
        {
          "@type": "Question",
          name: "Why choose Double Trouble Studio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Double Trouble Studio brings planning, structure, calm execution, guest segmentation, VIP handling, access control and confidentiality to premium events where guest experience and perception matter.",
          },
        },
        {
          "@type": "Question",
          name: "How much do guest management services cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Guest management service cost depends on event size, guest count, number of entry points, RSVP requirements, VIP handling, access control needs, location and duration of on-ground support.",
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
        <GuestServiceOverview />
        <GuestManagementServices />
        <WhyItMatters />
        <GuestFeaturedWork />
        <GuestChallengesWeSolve />
        <OurProcess />
        <ResultsOutcomes />
        <IndustriesWeServe />
        <WhyDoubleTroubleStudio />
        <WhyGuestManagementMatters />
        <GuestManagementFaq />
        <LocalSeoSection />
        <Footer />
      </main>
    </>
  );
}