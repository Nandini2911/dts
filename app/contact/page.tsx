import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

import ContactFaq from "@/components/Contact/ContactFaq";
import ContactHero from "@/components/Contact/ContactHero";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactMap from "@/components/Contact/ContactMap";
import LocationSEO from "@/components/Contact/LocationSEO";
import ServicesSEO from "@/components/Contact/ServicesSEO";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    absolute:
      "Contact Double Trouble Studio | Branding & Digital Marketing Agency",
  },

  description:
    "Contact Double Trouble Studio, a Mumbai-based branding, website design, PR and digital marketing agency. Get in touch for branding, web development, guest management, celebrity management, AI video production and creative marketing services.",

  applicationName: "Double Trouble Studio",
  creator: "Double Trouble Studio",
  publisher: "Double Trouble Studio",

  alternates: {
    canonical: "https://www.dtsworld.in/contact",
  },

  keywords: [
    "Contact Double Trouble Studio",
    "Branding Agency Mumbai",
    "Website Design Company Mumbai",
    "Digital Marketing Agency Mumbai",
    "Creative Agency Mumbai",
    "PR Agency Mumbai",
    "Guest Management Agency",
    "Celebrity Management Agency",
    "Event Management Mumbai",
    "AI Video Production Company",
    "Web Development Company India",
    "Marketing Agency Mumbai",
    "Contact Branding Agency",
  ],

  openGraph: {
    title:
      "Contact Double Trouble Studio | Branding & Digital Marketing Agency",

    description:
      "Let's create something amazing. Contact Double Trouble Studio for branding, website design, PR, digital marketing, guest management, AI video production and creative solutions across India.",

    url: "https://www.dtsworld.in/contact",
    siteName: "Double Trouble Studio",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://www.dtsworld.in/og/contact-og.png",
        width: 1200,
        height: 630,
        alt: "Contact Double Trouble Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Contact Double Trouble Studio | Branding & Digital Marketing Agency",

    description:
      "Get in touch with Double Trouble Studio for branding, website design, digital marketing, PR, guest management, AI video production and business growth solutions.",

    images: ["https://www.dtsworld.in/twitter/contact-twitter.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};


const SITE_URL = "https://www.dtsworld.in/";
const PAGE_URL = "https://www.dtsworld.in/contact";

const ORGANIZATION_ID =
  "https://www.dtsworld.in/#organization";

const WEBSITE_ID =
  "https://www.dtsworld.in/#website";

const LOGO_ID =
  "https://www.dtsworld.in/#logo";

const PRIMARY_IMAGE_ID =
  `${PAGE_URL}#primaryimage`;

const PAGE_ID =
  `${PAGE_URL}#webpage`;

const BREADCRUMB_ID =
  `${PAGE_URL}#breadcrumb`;

const SERVICES_ID =
  `${PAGE_URL}#services`;

const FAQ_ID =
  `${PAGE_URL}#faq`;

const schemaContext =
  "https://schema.org";

const serviceOffers = [
  {
    offerId:
      "guest-management-offer",

    serviceId:
      "https://www.dtsworld.in/services/guest-management#service",

    url:
      "https://www.dtsworld.in/services/guest-management",

    name:
      "Guest Management Services",

    serviceType:
      "Guest Management",

    category:
      "Event Guest Management Services",

    description:
      "Guest management services for weddings, corporate events, luxury launches, celebrity events and private gatherings, including RSVP management, VIP coordination, check-in flow and on-ground support.",
  },

  {
    offerId:
      "celebrity-management-offer",

    serviceId:
      "https://www.dtsworld.in/services/celebrity-management#service",

    url:
      "https://www.dtsworld.in/services/celebrity-management",

    name:
      "Celebrity Management Services",

    serviceType:
      "Celebrity Management and Talent Coordination",

    category:
      "Celebrity Booking and Talent Management",

    description:
      "Celebrity management and talent coordination for brand campaigns, corporate events, weddings, launches, public appearances and influencer collaborations.",
  },

  {
    offerId:
      "events-weddings-offer",

    serviceId:
      "https://www.dtsworld.in/services/events-weddings#service",

    url:
      "https://www.dtsworld.in/services/events-weddings",

    name:
      "Event Management and Wedding Planning",

    serviceType:
      "Event Management and Wedding Planning",

    category:
      "Events and Wedding Services",

    description:
      "Event planning and wedding management services covering concepts, vendors, production, hospitality, guest experiences and show-flow execution.",
  },

  {
    offerId:
      "pr-media-marketing-offer",

    serviceId:
      "https://www.dtsworld.in/services/pr-media-marketing#service",

    url:
      "https://www.dtsworld.in/services/pr-media-marketing",

    name:
      "PR, Media and Digital Marketing",

    serviceType:
      "Public Relations, Media and Digital Marketing",

    category:
      "PR and Digital Marketing Services",

    description:
      "Public relations, media outreach, social media marketing, content creation, performance marketing and digital campaign services for modern brands.",
  },

  {
    offerId:
      "web-development-marketing-offer",

    serviceId:
      "https://www.dtsworld.in/services/web-development-marketing#service",

    url:
      "https://www.dtsworld.in/services/web-development-marketing",

    name:
      "Website Development and Marketing",

    serviceType:
      "Website Design, Website Development and SEO",

    category:
      "Website Development and Digital Marketing",

    description:
      "Custom website design, website development, SEO foundations, responsive user experiences, analytics and performance-focused digital platforms.",
  },

  {
    offerId:
      "ai-video-vfx-offer",

    serviceId:
      "https://www.dtsworld.in/services/ai-video-vfx#service",

    url:
      "https://www.dtsworld.in/services/ai-video-vfx",

    name:
      "AI Video Production and VFX",

    serviceType:
      "AI Video Production and Visual Effects",

    category:
      "AI Video Advertising and VFX",

    description:
      "AI-generated video campaigns, cinematic brand films, product visuals, campaign assets and visual effects for social media and digital advertising.",
  },
];

const faqs = [
  {
    question:
      "What branding services does Double Trouble Studio offer in Mumbai?",

    answer:
      "Double Trouble Studio helps businesses build memorable brands through strategic brand development, visual identity design, brand positioning, messaging, creative direction and integrated marketing solutions designed for long-term growth.",
  },

  {
    question:
      "Why should I hire a branding agency in Mumbai?",

    answer:
      "A professional branding agency helps businesses create a strong market presence, improve customer trust, communicate their value effectively and stand out from competitors through strategy-led branding and marketing.",
  },

  {
    question:
      "How much does professional website design cost in Mumbai?",

    answer:
      "Website design costs vary depending on project scope, functionality, design requirements and business goals. We provide customized website solutions tailored to your brand, objectives and budget.",
  },

  {
    question:
      "Do you provide website design and branding services together?",

    answer:
      "Yes. We offer complete branding and website design services to create a seamless brand experience across every customer touchpoint, ensuring consistency in design, messaging and user experience.",
  },

  {
    question:
      "What digital marketing services does Double Trouble Studio provide?",

    answer:
      "Our services include social media marketing, content creation, performance marketing, PR campaigns, media outreach, brand strategy, digital consulting and growth-focused marketing solutions.",
  },

  {
    question:
      "Do you work with startups and growing businesses?",

    answer:
      "Yes. We work with startups, founders, hospitality brands, luxury businesses and growing companies looking to build stronger brands, launch websites and scale their digital presence.",
  },

  {
    question:
      "How long does it take to complete a branding or website project?",

    answer:
      "Project timelines depend on the scope and complexity of the work. Most branding and website projects are completed within a few weeks following the discovery, planning, design and development phases.",
  },

  {
    question:
      "Do you work with clients outside Mumbai and India?",

    answer:
      "Absolutely. We collaborate with businesses across Mumbai, Navi Mumbai, Thane, Pune, India and international markets through remote meetings, streamlined workflows and dedicated project management.",
  },

  {
    question:
      "Why choose Double Trouble Studio for branding, website design and marketing?",

    answer:
      "Double Trouble Studio combines strategy, creativity, technology and marketing expertise to create premium brands, websites and digital experiences that drive visibility, engagement and long-term business growth.",
  },

  {
    question:
      "How can I get a quote for branding, website design or digital marketing services?",

    answer:
      "Simply contact us through our website, email, phone or WhatsApp. Our team will understand your requirements, discuss your goals and provide a customized proposal tailored to your business needs.",
  },
];

// --------------------------------------------------
// IMAGE OBJECTS
// --------------------------------------------------

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
    "https://www.dtsworld.in/og/contact-og.png",

  contentUrl:
    "https://www.dtsworld.in/og/contact-og.png",

  width:
    1200,

  height:
    630,

  caption:
    "Contact Double Trouble Studio",

  representativeOfPage:
    true,

  inLanguage:
    "en-IN",
};

// --------------------------------------------------
// ORGANIZATION / LOCAL BUSINESS
// --------------------------------------------------

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
    "Double Trouble Studio is a Mumbai-based creative agency providing branding, website design, website development, digital marketing, public relations, guest management, celebrity management, event planning, wedding management, AI video production and VFX services across India.",

  slogan:
    "Creative Agency for Brands, Events and Digital Growth",

  telephone:
    "+918000006021",

  // Kept aligned with the email visibly shown on the Contact page.
  email:
    "info@dtsworld.in",

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

  contactPoint: [
    {
      "@type":
        "ContactPoint",

      "@id":
        `${PAGE_URL}#project-enquiries`,

      contactType:
        "project enquiries",

      telephone:
        "+918000006021",

      email:
        "info@dtsworld.in",

      url:
        PAGE_URL,

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

    {
      "@type":
        "ContactPoint",

      "@id":
        `${PAGE_URL}#general-enquiries`,

      contactType:
        "customer service",

      telephone:
        "+918000006021",

      email:
        "info@dtsworld.in",

      url:
        PAGE_URL,

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
  ],

  openingHoursSpecification: [
    {
      "@type":
        "OpeningHoursSpecification",

      dayOfWeek: [
        "https://schema.org/Monday",
        "https://schema.org/Tuesday",
        "https://schema.org/Wednesday",
        "https://schema.org/Thursday",
        "https://schema.org/Friday",
        "https://schema.org/Saturday",
      ],

      opens:
        "10:00",

      closes:
        "19:00",
    },
  ],

  areaServed: [
    {
      "@type":
        "Country",

      name:
        "India",
    },

    {
      "@type":
        "City",

      name:
        "Mumbai",
    },

    {
      "@type":
        "City",

      name:
        "Navi Mumbai",
    },

    {
      "@type":
        "City",

      name:
        "Thane",
    },

    {
      "@type":
        "City",

      name:
        "Pune",
    },
  ],

  knowsAbout: [
    "Brand Strategy",
    "Brand Identity",
    "Visual Identity",
    "Brand Positioning",
    "Luxury Brand Positioning",
    "Creative Direction",
    "Website Design",
    "Website Development",
    "Next.js Website Development",
    "Search Engine Optimization",
    "Technical SEO",
    "Digital Marketing",
    "Social Media Marketing",
    "Content Creation",
    "Performance Marketing",
    "Public Relations",
    "Media Relations",
    "Guest Management",
    "Celebrity Management",
    "Event Planning",
    "Event Marketing",
    "Wedding Management",
    "AI Video Production",
    "AI Video Advertising",
    "Visual Effects",
  ],

  hasOfferCatalog: {
    "@id":
      SERVICES_ID,
  },
};

// --------------------------------------------------
// WEBSITE
// --------------------------------------------------

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
    "Double Trouble Studio is a creative agency in Mumbai providing branding, website development, digital marketing, PR, event management, guest management, AI video production and VFX services across India.",

  publisher: {
    "@id":
      ORGANIZATION_ID,
  },

  inLanguage:
    "en-IN",
};

// --------------------------------------------------
// CONTACT PAGE
// --------------------------------------------------

const contactPageSchema = {
  "@context":
    schemaContext,

  "@type":
    "ContactPage",

  "@id":
    PAGE_ID,

  url:
    PAGE_URL,

  name:
    "Contact Double Trouble Studio | Branding & Digital Marketing Agency",

  headline:
    "Let's Create Something Amazing",

  description:
    "Contact Double Trouble Studio for branding, website design, digital marketing, public relations, guest management, celebrity management, event planning, wedding management, AI video production and VFX services in Mumbai and across India.",

  isPartOf: {
    "@id":
      WEBSITE_ID,
  },

  about: {
    "@id":
      ORGANIZATION_ID,
  },

  mainEntity: {
    "@id":
      ORGANIZATION_ID,
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

  // FAQPage is CreativeWork-based and valid for hasPart.
  hasPart: [
    {
      "@id":
        FAQ_ID,
    },
  ],

  // OfferCatalog is NOT a valid hasPart target.
  // Keep it connected through mentions.
  mentions: [
    {
      "@id":
        SERVICES_ID,
    },
  ],

  audience: {
    "@type":
      "BusinessAudience",

    "@id":
      `${PAGE_URL}#business-audience`,

    name:
      "Businesses seeking branding, marketing and creative agency services",

    audienceType:
      "Startups, founders, hospitality brands, restaurants, cafes, luxury businesses, event organizers, creators, corporate brands and growing companies",

    description:
      "Businesses and organizations looking for branding, website development, SEO, digital marketing, public relations, guest management, celebrity management, event planning, AI video production and VFX services.",
  },

  significantLink: [
    "https://www.dtsworld.in/services/guest-management",
    "https://www.dtsworld.in/services/celebrity-management",
    "https://www.dtsworld.in/services/events-weddings",
    "https://www.dtsworld.in/services/pr-media-marketing",
    "https://www.dtsworld.in/services/web-development-marketing",
    "https://www.dtsworld.in/services/ai-video-vfx",
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

// --------------------------------------------------
// BREADCRUMB
// --------------------------------------------------

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
        "Contact",

      item:
        PAGE_URL,
    },
  ],
};

// --------------------------------------------------
// SERVICES CATALOG
// --------------------------------------------------

const servicesSchema = {
  "@context":
    schemaContext,

  "@type":
    "OfferCatalog",

  "@id":
    SERVICES_ID,

  url:
    `${PAGE_URL}#services`,

  name:
    "Double Trouble Studio Services",

  description:
    "Guest management, celebrity management, events and weddings, public relations, digital marketing, website development, AI video production and VFX services.",

  numberOfItems:
    serviceOffers.length,

  itemListOrder:
    "https://schema.org/ItemListUnordered",

  itemListElement:
    serviceOffers.map(
      (service) => ({
        "@type":
          "Offer",

        "@id":
          `${PAGE_URL}#${service.offerId}`,

        url:
          service.url,

        seller: {
          "@id":
            ORGANIZATION_ID,
        },

        itemOffered: {
          "@type":
            "Service",

          "@id":
            service.serviceId,

          name:
            service.name,

          url:
            service.url,

          serviceType:
            service.serviceType,

          category:
            service.category,

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

// --------------------------------------------------
// FAQ
// --------------------------------------------------

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
    "Frequently Asked Questions About Contacting Double Trouble Studio",

  description:
    "Answers to common questions about Double Trouble Studio branding, website design, digital marketing, pricing, timelines, remote collaboration and project enquiries.",

  isPartOf: {
    "@id":
      PAGE_ID,
  },

  about: {
    "@id":
      ORGANIZATION_ID,
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

// Separate blocks make the major entities easier for
// validators to surface while stable @id values keep the
// whole contact-page graph connected.
const structuredDataBlocks = [
  logoSchema,
  primaryImageSchema,
  organizationSchema,
  websiteSchema,
  contactPageSchema,
  breadcrumbSchema,
  servicesSchema,
  faqSchema,
];

type ContactPageProps = {
  searchParams: Promise<{
    service?: string | string[];
    city?: string | string[];
    [key: string]: string | string[] | undefined;
  }>;
};

export default async function Contact({
  searchParams,
}: ContactPageProps) {
  const params = await searchParams;

  /*
   * Prevent parameter-based duplicate contact pages.
   *
   * Example:
   * /contact?service=events-weddings&city=mumbai
   * redirects permanently to:
   * /contact
   */
  if (Object.keys(params).length > 0) {
    permanentRedirect("/contact");
  }

  return (
    <>
      {structuredDataBlocks.map(
        (schema, index) => (
          <script
            key={`contact-schema-${index}`}
            id={`contact-structured-data-${index + 1}`}
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
        <ContactHero />
        <LocationSEO />
        <ServicesSEO />
        <ContactInfo />
        <ContactMap />
        <ContactFaq />
        <Footer />
      </main>
    </>
  );
}