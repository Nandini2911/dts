import Footer from "@/components/Footer";
import WhyItMatters from "@/components/GuestManagement/GuestWhyItMatters";
import Navbar from "@/components/Navbar";
import BusinessGoals from "@/components/PRMediaDigitalMarketing/BusinessGoals";
import DigitalMarketingServices from "@/components/PRMediaDigitalMarketing/DigitalMarketingServices";
import FAQ from "@/components/PRMediaDigitalMarketing/FAQ";
import FinalCTA from "@/components/PRMediaDigitalMarketing/FinalCTA";
import Industries from "@/components/PRMediaDigitalMarketing/Industries";
import InternalLinks from "@/components/PRMediaDigitalMarketing/InternalLinks";
import Locations from "@/components/PRMediaDigitalMarketing/Locations";
import MediaManagement from "@/components/PRMediaDigitalMarketing/MediaManagement";
import PRDefinition from "@/components/PRMediaDigitalMarketing/PRDefinition";
import PRHero from "@/components/PRMediaDigitalMarketing/PRHero";
import PRIntro from "@/components/PRMediaDigitalMarketing/PRIntro";
import PRMediaDigitalFeaturedWork from "@/components/PRMediaDigitalMarketing/PRMediaDigitalFeaturedWork";
import Process from "@/components/PRMediaDigitalMarketing/Process";
import PRServices from "@/components/PRMediaDigitalMarketing/PRServices";
import SEOContentBlock from "@/components/PRMediaDigitalMarketing/SEOContentBlock";
import StartRequirements from "@/components/PRMediaDigitalMarketing/StartRequirements";
import UseCases from "@/components/PRMediaDigitalMarketing/UseCases";
import WhyChooseDTS from "@/components/PRMediaDigitalMarketing/WhyChooseDTS";
import WhyPRDigitalMatters from "@/components/PRMediaDigitalMarketing/WhyPRDigitalMatters";
import ServiceCityLinks from "@/components/seo/ServiceCityLinks";


import type { Metadata } from "next";


const SITE_URL = "https://www.dtsworld.in/";

const PAGE_URL =
  "https://www.dtsworld.in/services/pr-media-marketing";

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

const SERVICES_LIST_ID =
  `${PAGE_URL}#services-list`;

const BUSINESS_GOALS_ID =
  `${PAGE_URL}#business-goals`;

const INDUSTRIES_ID =
  `${PAGE_URL}#industries`;

const CAMPAIGN_USE_CASES_ID =
  `${PAGE_URL}#campaign-use-cases`;

const LOCATIONS_ID =
  `${PAGE_URL}#locations`;

const FEATURED_WORK_ID =
  `${PAGE_URL}#featured-work`;

const FAQ_ID =
  `${PAGE_URL}#faq`;

export const metadata: Metadata = {
  title: {
    absolute:
      "PR & Digital Marketing Agency in India | Double Trouble Studio",
  },

  description:
    "Integrated PR, media relations, social media, SEO, influencer marketing and paid campaigns for brands, events and public personalities across India.",

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
    "PR, Media and Digital Marketing Services",

  keywords: [
    "PR agency in India",
    "public relations agency India",
    "digital marketing agency India",
    "PR and digital marketing agency",
    "media relations agency",
    "media management agency",
    "media coverage services",
    "press release writing services",
    "press release distribution India",
    "corporate PR agency",
    "startup PR agency",
    "celebrity PR agency",
    "event PR agency",
    "hospitality PR agency",
    "luxury brand PR agency",
    "brand communication agency",
    "social media marketing agency",
    "social media management India",
    "influencer marketing agency",
    "influencer campaign management",
    "SEO agency India",
    "search engine optimization services",
    "performance marketing agency",
    "paid advertising agency",
    "Meta ads management",
    "Google ads management",
    "content marketing services",
    "online reputation management",
    "brand reputation management",
    "brand launch PR campaign",
    "product launch marketing",
    "event promotion agency",
    "lead generation agency India",
    "local SEO services",
    "personal branding PR",
    "founder PR services",
    "digital marketing agency Mumbai",
    "PR agency Mumbai",
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
      "PR, Media & Digital Marketing Agency in India",

    description:
      "Build visibility, credibility and growth through PR, media coverage, social media, influencer marketing, SEO, paid ads and reputation management.",

    images: [
      {
        url:
          "https://www.dtsworld.in/pr-media-digital-marketing-og.jpg",

        width:
          1200,

        height:
          630,

        alt:
          "PR, Media and Digital Marketing Services by Double Trouble Studio",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "PR & Digital Marketing Agency in India | Double Trouble Studio",

    description:
      "Integrated PR, media coverage, social media, influencer campaigns, SEO, paid ads and brand communication services across India.",

    images: [
      "https://www.dtsworld.in/pr-media-digital-marketing-og.jpg",
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
    name: "Noida",
  },
  {
    "@type": "City",
    name: "Chandigarh",
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
    name: "Udaipur",
  },
  {
    "@type": "AdministrativeArea",
    name: "Goa",
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
    name: "Chennai",
  },
  {
    "@type": "City",
    name: "Kolkata",
  },
];

const serviceOffers = [
  {
    slug: "public-relations-strategy",
    offerSlug: "public-relations-strategy-offer",
    name: "Public Relations Strategy",
    serviceType: "Public Relations Strategy",
    description:
      "PR strategy aligned with brand goals, audience, industry, campaign stage, messaging, media positioning and story angles.",
  },
  {
    slug: "media-relations",
    offerSlug: "media-relations-offer",
    name: "Media Relations",
    serviceType: "Media Relations",
    description:
      "Journalist, editor, publication, digital portal and media-house coordination for relevant brand visibility.",
  },
  {
    slug: "press-release-writing-distribution",
    offerSlug: "press-release-writing-distribution-offer",
    name: "Press Release Writing and Distribution",
    serviceType: "Press Release Writing and Distribution",
    description:
      "Press release writing and distribution for launches, announcements, collaborations, milestones, events and campaigns.",
  },
  {
    slug: "brand-storytelling",
    offerSlug: "brand-storytelling-offer",
    name: "Brand Storytelling",
    serviceType: "Brand Storytelling",
    description:
      "Narrative development around brand journey, purpose, values, achievements and market positioning.",
  },
  {
    slug: "corporate-pr",
    offerSlug: "corporate-pr-offer",
    name: "Corporate PR",
    serviceType: "Corporate Public Relations",
    description:
      "Corporate communication, leadership visibility, milestone announcements, reputation building and stakeholder communication.",
  },
  {
    slug: "startup-pr",
    offerSlug: "startup-pr-offer",
    name: "Startup PR",
    serviceType: "Startup Public Relations",
    description:
      "Founder stories, launch announcements, funding updates, product communication and category positioning for startups.",
  },
  {
    slug: "celebrity-public-figure-pr",
    offerSlug: "celebrity-public-figure-pr-offer",
    name: "Celebrity and Public Figure PR",
    serviceType: "Celebrity and Public Figure PR",
    description:
      "Public communication, media visibility, interviews, announcements, event coverage and digital positioning for public personalities.",
  },
  {
    slug: "event-pr",
    offerSlug: "event-pr-offer",
    name: "Event PR",
    serviceType: "Event Public Relations",
    description:
      "Pre-event buzz, media invites, press coverage, influencer attendance, post-event stories and launch communication.",
  },
  {
    slug: "crisis-communication",
    offerSlug: "crisis-communication-offer",
    name: "Crisis Communication Support",
    serviceType: "Crisis Communication Support",
    description:
      "Careful messaging, communication planning and reputation-sensitive support where clarity and timing are important.",
  },
  {
    slug: "social-media-marketing",
    offerSlug: "social-media-marketing-offer",
    name: "Social Media Marketing",
    serviceType: "Social Media Marketing",
    description:
      "Content planning, creative direction, posting strategy, engagement, campaign ideas and performance tracking across social platforms.",
  },
  {
    slug: "search-engine-optimization",
    offerSlug: "search-engine-optimization-offer",
    name: "Search Engine Optimization",
    serviceType: "Search Engine Optimization",
    description:
      "Keyword research, SEO content, on-page optimization, local SEO, technical recommendations and service-page strategy.",
  },
  {
    slug: "performance-marketing",
    offerSlug: "performance-marketing-offer",
    name: "Performance Marketing",
    serviceType: "Performance Marketing",
    description:
      "Paid campaign planning and management across Meta, Google, YouTube and other channels for awareness, traffic and lead generation.",
  },
  {
    slug: "content-marketing",
    offerSlug: "content-marketing-offer",
    name: "Content Marketing",
    serviceType: "Content Marketing",
    description:
      "Content strategy for blogs, service pages, landing pages, social posts, campaign copy, video scripts and newsletters.",
  },
  {
    slug: "influencer-marketing",
    offerSlug: "influencer-marketing-offer",
    name: "Influencer Marketing",
    serviceType: "Influencer Marketing",
    description:
      "Influencer and creator collaborations for product promotions, events, hospitality launches and targeted audience engagement.",
  },
  {
    slug: "online-reputation-management",
    offerSlug: "online-reputation-management-offer",
    name: "Online Reputation Management",
    serviceType: "Online Reputation Management",
    description:
      "Reputation monitoring, review strategy, public communication, digital visibility and brand perception support.",
  },
  {
    slug: "website-landing-page-strategy",
    offerSlug: "website-landing-page-strategy-offer",
    name: "Website and Landing Page Strategy",
    serviceType: "Website and Landing Page Strategy",
    description:
      "Campaign landing pages, service pages and website content structured to support SEO, conversion and credibility.",
  },
  {
    slug: "email-whatsapp-campaigns",
    offerSlug: "email-whatsapp-campaigns-offer",
    name: "Email and WhatsApp Campaigns",
    serviceType: "Email and WhatsApp Campaign Communication",
    description:
      "Campaign messaging for announcements, offers, invites, launches, customer engagement and brand updates.",
  },
];

const processSteps = [
  {
    name: "Brand Discovery",
    text:
      "Understanding the business, audience, industry, goals, current visibility, competitors, platforms and communication challenges.",
  },
  {
    name: "Strategy Development",
    text:
      "Creating a PR and digital marketing strategy based on brand goals, target audience, campaign requirement and desired outcomes.",
  },
  {
    name: "Messaging and Content Planning",
    text:
      "Developing key messages, campaign ideas, content pillars, media angles, social media direction and digital communication themes.",
  },
  {
    name: "Media and Platform Planning",
    text:
      "Identifying suitable media categories, digital platforms, influencer profiles, ad channels and content formats.",
  },
  {
    name: "Campaign Execution",
    text:
      "Executing PR outreach, social media content, paid ads, influencer campaigns, SEO content, media communication and digital promotions.",
  },
  {
    name: "Monitoring and Optimization",
    text:
      "Monitoring campaign performance, media responses, audience engagement, website traffic, ad results and content performance.",
  },
  {
    name: "Reporting and Recommendations",
    text:
      "Providing campaign updates, coverage details, performance insights and recommendations for future communication.",
  },
];

const serviceList = [
  "Public Relations Strategy",
  "Media Relations",
  "Press Release Writing and Distribution",
  "Brand Storytelling",
  "Corporate PR",
  "Startup PR",
  "Celebrity and Public Figure PR",
  "Event PR",
  "Crisis Communication Support",
  "Social Media Marketing",
  "Search Engine Optimization",
  "Performance Marketing",
  "Content Marketing",
  "Influencer Marketing",
  "Online Reputation Management",
];

const businessGoals = [
  "Brand Launch",
  "Product Launch",
  "Event Promotion",
  "Reputation Building",
  "Lead Generation",
  "Social Media Growth",
  "Local Business Visibility",
  "Luxury Brand Positioning",
];

const industries = [
  "Hospitality and Restaurants",
  "Luxury and Lifestyle",
  "Events and Entertainment",
  "Corporate and Startups",
  "Real Estate and Automotive",
  "Beauty and Wellness",
  "Public Personalities and Creators",
];

const campaignUseCases = [
  "Brand Launch Campaigns",
  "Product Launch Campaigns",
  "Event Promotion Campaigns",
  "Hospitality Launch Campaigns",
  "Founder and Public Figure Visibility",
  "Lead Generation Campaigns",
];

const locations = [
  "Delhi",
  "Gurgaon",
  "Noida",
  "Chandigarh",
  "Ludhiana",
  "Amritsar",
  "Mumbai",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Udaipur",
  "Goa",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Across India",
];

const featuredWork = [
  {
    slug: "luxury-brand-pr-campaign",
    name: "Luxury Brand PR Campaign",
    description:
      "Built a premium PR communication plan with media outreach, brand storytelling, press visibility and reputation-led positioning.",
  },
  {
    slug: "press-media-coverage",
    name: "Press & Media Coverage",
    description:
      "Managed media coordination, press release distribution, journalist communication and brand coverage across relevant publications.",
  },
  {
    slug: "performance-marketing-growth",
    name: "Performance Marketing Growth",
    description:
      "Created a conversion-focused digital marketing campaign with paid ads, audience targeting, landing page strategy and lead generation.",
  },
  {
    slug: "social-media-brand-building",
    name: "Social Media Brand Building",
    description:
      "Developed a complete social media content system with campaign planning, creative direction, posting strategy and engagement growth.",
  },
  {
    slug: "influencer-marketing-campaign",
    name: "Influencer Marketing Campaign",
    description:
      "Planned influencer collaborations, creator shortlisting, content briefs, approvals and campaign amplification for brand awareness.",
  },
  {
    slug: "brand-launch-communication",
    name: "Brand Launch Communication",
    description:
      "Executed launch communication with PR buzz, social media rollout, digital ads, event visibility and strong brand positioning.",
  },
];

const faqs = [
  {
    question:
      "What is PR, media and digital marketing?",
    answer:
      "PR, media and digital marketing is an integrated communication approach that helps brands build visibility, credibility and audience engagement through public relations, media coverage, social media marketing, influencer campaigns, SEO, paid ads, content strategy and online reputation management.",
  },
  {
    question:
      "What does a PR and digital marketing agency do?",
    answer:
      "A PR and digital marketing agency helps brands plan communication, build media visibility, manage social media, improve search presence, run paid campaigns, coordinate influencer collaborations and strengthen online reputation.",
  },
  {
    question:
      "Does Double Trouble Studio provide PR services in India?",
    answer:
      "Yes. Double Trouble Studio provides PR services in India including PR strategy, media relations, press release writing, media outreach, event PR, corporate PR, startup PR and reputation-focused communication.",
  },
  {
    question:
      "Can PR and digital marketing work together?",
    answer:
      "Yes. PR and digital marketing work better together because PR builds credibility, media coverage creates visibility, and digital marketing improves search discovery, social reach, engagement and campaign performance.",
  },
  {
    question:
      "What digital marketing services do you offer?",
    answer:
      "Double Trouble Studio offers digital marketing services including social media marketing, SEO, performance marketing, content marketing, influencer marketing, online reputation management, website and landing page strategy, email campaigns and WhatsApp campaign communication.",
  },
  {
    question:
      "Do you manage social media marketing?",
    answer:
      "Yes. Double Trouble Studio manages social media marketing for brands through content planning, creative direction, posting strategy, engagement, campaign ideas, reels, platform strategy and performance tracking.",
  },
  {
    question:
      "Do you provide influencer marketing services?",
    answer:
      "Yes. Double Trouble Studio provides influencer marketing services for product promotions, event campaigns, hospitality launches, lifestyle content, creator-led promotions and targeted audience engagement.",
  },
  {
    question:
      "Can you manage PR for events and launches?",
    answer:
      "Yes. Double Trouble Studio manages PR for events, launches, brand activations, product announcements, hospitality openings, influencer attendance, media invites, press coverage and post-event stories.",
  },
  {
    question:
      "Do you provide SEO and paid advertising?",
    answer:
      "Yes. Double Trouble Studio provides SEO strategy, SEO content, on-page SEO, local SEO, technical recommendations and paid advertising support across platforms such as Meta, Google and YouTube.",
  },
  {
    question:
      "What industries do you work with?",
    answer:
      "Double Trouble Studio works with hospitality brands, restaurants, luxury businesses, lifestyle brands, events, entertainment companies, corporate brands, startups, real estate brands, automotive businesses, beauty brands, wellness companies, public personalities and creators.",
  },
  {
    question:
      "How do we start a PR or digital marketing campaign?",
    answer:
      "To start a PR or digital marketing campaign, share your brand details, website or social links, business category, target audience, campaign objective, current digital presence, PR requirement, creative assets, timeline and budget.",
  },
  {
    question:
      "How much do PR and digital marketing services cost?",
    answer:
      "PR and digital marketing service cost depends on campaign objective, service scope, media requirement, social media volume, SEO needs, influencer strategy, paid ad budget, timeline, creative assets and reporting requirements.",
  },
];

// --------------------------------------------------
// MAXIMUM USEFUL + VALID STRUCTURED DATA
// --------------------------------------------------

const schemaContext =
  "https://schema.org";

const logoSchema = {
  "@context": schemaContext,
  "@type": "ImageObject",
  "@id": LOGO_ID,

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
  "@context": schemaContext,
  "@type": "ImageObject",
  "@id": PRIMARY_IMAGE_ID,

  url:
    "https://www.dtsworld.in/pr-media-digital-marketing-og.jpg",

  contentUrl:
    "https://www.dtsworld.in/pr-media-digital-marketing-og.jpg",

  width: 1200,
  height: 630,

  caption:
    "PR, Media and Digital Marketing Services by Double Trouble Studio",

  representativeOfPage:
    true,

  inLanguage:
    "en-IN",
};

const organizationSchema = {
  "@context": schemaContext,

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
    "Double Trouble Studio is a Mumbai-based branding, PR, media and digital marketing agency helping businesses grow through public relations, media coverage, social media marketing, influencer campaigns, SEO, paid advertising, website strategy, online reputation management and brand communication.",

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
    "Public Relations",
    "PR Strategy",
    "Media Coverage",
    "Media Relations",
    "Media Management",
    "Press Release Writing",
    "Press Release Distribution",
    "Corporate PR",
    "Startup PR",
    "Celebrity PR",
    "Public Figure PR",
    "Event PR",
    "Crisis Communication",
    "Digital Marketing",
    "Social Media Marketing",
    "Influencer Marketing",
    "Search Engine Optimization",
    "Local SEO",
    "Performance Marketing",
    "Paid Advertising",
    "Content Marketing",
    "Online Reputation Management",
    "Brand Communication",
    "Lead Generation",
    "Website and Landing Page Strategy",
  ],

  hasOfferCatalog: {
    "@id":
      CATALOG_ID,
  },
};

const websiteSchema = {
  "@context": schemaContext,

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
    "Double Trouble Studio is a creative agency in Mumbai providing branding, public relations, digital marketing, media management, social media marketing, SEO, performance marketing, website development, event management and AI creative services across India.",

  publisher: {
    "@id":
      ORGANIZATION_ID,
  },

  inLanguage:
    "en-IN",
};

const webPageSchema = {
  "@context": schemaContext,

  "@type":
    "WebPage",

  "@id":
    WEBPAGE_ID,

  url:
    PAGE_URL,

  name:
    "PR & Digital Marketing Agency in India | Double Trouble Studio",

  headline:
    "PR, Media & Digital Marketing Agency in India",

  description:
    "Integrated PR, media relations, social media, SEO, influencer marketing and paid campaigns for brands, events and public personalities across India.",

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
        SERVICES_LIST_ID,
    },
    {
      "@id":
        BUSINESS_GOALS_ID,
    },
    {
      "@id":
        INDUSTRIES_ID,
    },
    {
      "@id":
        CAMPAIGN_USE_CASES_ID,
    },
    {
      "@id":
        LOCATIONS_ID,
    },
    {
      "@id":
        FEATURED_WORK_ID,
    },
  ],

  significantLink: [
    "https://www.dtsworld.in/contact",
    "https://www.dtsworld.in/work",
    "https://www.dtsworld.in/services/guest-management",
    "https://www.dtsworld.in/services/celebrity-management",
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
  "@context": schemaContext,

  "@type":
    "Service",

  "@id":
    SERVICE_ID,

  name:
    "PR, Media and Digital Marketing Services",

  alternateName: [
    "Public Relations Services",
    "Media Management Services",
    "Digital Marketing Services",
    "Integrated Brand Communication Services",
  ],

  url:
    PAGE_URL,

  image: {
    "@id":
      PRIMARY_IMAGE_ID,
  },

  serviceType: [
    "Public Relations",
    "Media Relations",
    "Media Management",
    "Digital Marketing",
    "Social Media Marketing",
    "Influencer Marketing",
    "Search Engine Optimization",
    "Performance Marketing",
    "Content Marketing",
    "Online Reputation Management",
    "Press Release Distribution",
    "Event PR",
    "Corporate PR",
    "Startup PR",
  ],

  category:
    "PR, Media and Digital Marketing Services",

  description:
    "Double Trouble Studio provides integrated PR, media and digital marketing services for brands, businesses, public personalities, events and luxury experiences across India. Services include public relations, media coverage, social media marketing, influencer campaigns, SEO strategy, paid advertising, online reputation management, content marketing and brand communication.",

  provider: {
    "@id":
      ORGANIZATION_ID,
  },

  audience: {
    "@type":
      "BusinessAudience",

    name:
      "Brands and organizations seeking integrated PR and digital growth",

    audienceType:
      "Hospitality brands, restaurants, luxury businesses, lifestyle brands, event companies, startups, corporate organizations, real estate brands, automotive businesses, beauty and wellness companies, public personalities, creators and founders",
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
  "@context": schemaContext,

  "@type":
    "OfferCatalog",

  "@id":
    CATALOG_ID,

  url:
    `${PAGE_URL}#services`,

  name:
    "PR, Media and Digital Marketing Services Offered",

  description:
    "Integrated communication and growth services covering PR, media relations, social media, SEO, paid advertising, influencer marketing, content marketing, online reputation and campaign strategy.",

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
  "@context": schemaContext,

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
        "PR, Media & Digital Marketing",

      item:
        PAGE_URL,
    },
  ],
};

const processSchema = {
  "@context": schemaContext,

  "@type":
    "HowTo",

  "@id":
    PROCESS_ID,

  url:
    `${PAGE_URL}#process`,

  name:
    "PR, Media and Digital Marketing Process",

  description:
    "A strategy-first PR, media and digital marketing process from brand discovery to campaign reporting.",

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

const servicesListSchema = {
  "@context": schemaContext,

  "@type":
    "ItemList",

  "@id":
    SERVICES_LIST_ID,

  name:
    "PR, Media and Digital Marketing Services",

  description:
    "Core PR, media, social, SEO, performance marketing, content, influencer and reputation services offered by Double Trouble Studio.",

  numberOfItems:
    serviceList.length,

  itemListOrder:
    "https://schema.org/ItemListOrderAscending",

  itemListElement:
    serviceList.map(
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

const businessGoalsSchema = {
  "@context": schemaContext,

  "@type":
    "ItemList",

  "@id":
    BUSINESS_GOALS_ID,

  name:
    "PR and Digital Marketing Business Goals",

  description:
    "Business outcomes supported through integrated PR, media, social media, SEO, influencer and paid marketing campaigns.",

  numberOfItems:
    businessGoals.length,

  itemListOrder:
    "https://schema.org/ItemListOrderAscending",

  itemListElement:
    businessGoals.map(
      (goal, index) => ({
        "@type":
          "ListItem",

        position:
          index + 1,

        name:
          goal,
      }),
    ),
};

const industriesSchema = {
  "@context": schemaContext,

  "@type":
    "ItemList",

  "@id":
    INDUSTRIES_ID,

  name:
    "Industries Served by PR, Media and Digital Marketing Services",

  description:
    "Industries supported through tailored PR, digital marketing, media, influencer, SEO and reputation strategies.",

  numberOfItems:
    industries.length,

  itemListOrder:
    "https://schema.org/ItemListOrderAscending",

  itemListElement:
    industries.map(
      (industry, index) => ({
        "@type":
          "ListItem",

        position:
          index + 1,

        name:
          industry,
      }),
    ),
};

const campaignUseCasesSchema = {
  "@context": schemaContext,

  "@type":
    "ItemList",

  "@id":
    CAMPAIGN_USE_CASES_ID,

  name:
    "PR and Digital Marketing Campaign Use Cases",

  description:
    "Typical PR and digital marketing campaign scenarios including launches, event promotion, hospitality campaigns, founder visibility and lead generation.",

  numberOfItems:
    campaignUseCases.length,

  itemListOrder:
    "https://schema.org/ItemListOrderAscending",

  itemListElement:
    campaignUseCases.map(
      (useCase, index) => ({
        "@type":
          "ListItem",

        position:
          index + 1,

        name:
          useCase,
      }),
    ),
};

const locationsSchema = {
  "@context": schemaContext,

  "@type":
    "ItemList",

  "@id":
    LOCATIONS_ID,

  name:
    "PR, Media and Digital Marketing Service Locations",

  description:
    "Major cities served by Double Trouble Studio for PR, media, social media, SEO and digital marketing services across India.",

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

const featuredWorkSchema = {
  "@context": schemaContext,

  "@type":
    "ItemList",

  "@id":
    FEATURED_WORK_ID,

  url:
    `${PAGE_URL}#featured-work`,

  name:
    "PR, Media & Digital In Action",

  description:
    "Examples of PR, media, social, performance and influencer campaigns designed to build visibility, credibility and business growth.",

  numberOfItems:
    featuredWork.length,

  itemListOrder:
    "https://schema.org/ItemListOrderAscending",

  itemListElement:
    featuredWork.map(
      (work, index) => ({
        "@type":
          "ListItem",

        position:
          index + 1,

        item: {
          "@type":
            "CreativeWork",

          "@id":
            `${PAGE_URL}#${work.slug}`,

          name:
            work.name,

          description:
            work.description,

          creator: {
            "@id":
              ORGANIZATION_ID,
          },

          about: {
            "@id":
              SERVICE_ID,
          },

          inLanguage:
            "en-IN",
        },
      }),
    ),
};

const faqSchema = {
  "@context": schemaContext,

  "@type":
    "FAQPage",

  "@id":
    FAQ_ID,

  url:
    `${PAGE_URL}#faq`,

  name:
    "PR, Media and Digital Marketing Frequently Asked Questions",

  description:
    "Answers to common questions about PR, media relations, digital marketing, social media, influencer marketing, SEO, paid advertising, campaign planning and service pricing.",

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
  servicesListSchema,
  businessGoalsSchema,
  industriesSchema,
  campaignUseCasesSchema,
  locationsSchema,
  featuredWorkSchema,
  faqSchema,
];

export default function PRMediaDigitalMarketingPage() {
  return (
    <>
      {structuredDataBlocks.map(
        (schema, index) => (
          <script
            key={`pr-media-marketing-schema-${index}`}
            id={`pr-media-marketing-structured-data-${index + 1}`}
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

      <main className="bg-[#F8FAFC] text-[#0F172A]">
        <Navbar />
        <PRHero />
        <PRMediaDigitalFeaturedWork />
        <PRIntro />
        <PRDefinition />
        <PRServices />
        <MediaManagement />
        <DigitalMarketingServices />
        <BusinessGoals />
        <Industries />
        <WhyPRDigitalMatters />
        <Process />
        <Locations />
        <UseCases />
        <StartRequirements />
        <WhyChooseDTS />
        <InternalLinks />
        <FAQ />
        <FinalCTA />
        <SEOContentBlock />
        <ServiceCityLinks serviceSlug="pr-media-marketing" />
        <Footer />
      </main>
    </>
  );
}