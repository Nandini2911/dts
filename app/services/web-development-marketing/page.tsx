import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import ServiceCityLinks from "@/components/seo/ServiceCityLinks";
import BusinessTypesWebsiteSection from "@/components/WebDevelopmentMarketting/BusinessTypesWebsiteSection";
import CompleteDigitalSolutions from "@/components/WebDevelopmentMarketting/CompleteDigitalSolutions";
import DigitalMarketingServicesSection from "@/components/WebDevelopmentMarketting/DigitalMarketingServicesSection";
import FinalCTASection from "@/components/WebDevelopmentMarketting/FinalCTASection";
import IndiaPresenceSection from "@/components/WebDevelopmentMarketting/IndiaPresenceSection";
import IndustriesWeWorkWith from "@/components/WebDevelopmentMarketting/IndustriesWeWorkWith";
import ProjectRequirementsSection from "@/components/WebDevelopmentMarketting/ProjectRequirementsSection";
import SEOServicesSection from "@/components/WebDevelopmentMarketting/SEOServicesSection";
import UseCasesSection from "@/components/WebDevelopmentMarketting/UseCasesSection";
import WebDevelopmentMarketingFeaturedWork from "@/components/WebDevelopmentMarketting/WebDevelopmentMarketingFeaturedWork";
import WebDevelopmentMarketingProcess from "@/components/WebDevelopmentMarketting/WebDevelopmentMarketingProcess";
import WebsiteDevelopmentServices from "@/components/WebDevelopmentMarketting/WebsiteDevelopmentServices";
import WebsiteDigitalHero from "@/components/WebDevelopmentMarketting/WebsiteDigitalHero";
import WebsiteMarketingFAQSection from "@/components/WebDevelopmentMarketting/WebsiteMarketingFAQSection";
import WhatIsWebSeoMarketing from "@/components/WebDevelopmentMarketting/WhatIsWebSeoMarketing";
import WhyChooseDTSSection from "@/components/WebDevelopmentMarketting/WhyChooseDTSSection";
import WhySEOStartsDuringDevelopment from "@/components/WebDevelopmentMarketting/WhySEOStartsDuringDevelopment";
import WhyWebsiteSEOMarketingTogether from "@/components/WebDevelopmentMarketting/WhyWebsiteSEOMarketingTogether";

import type { Metadata } from "next";

const SITE_URL = "https://www.dtsworld.in/";

const PAGE_URL =
  "https://www.dtsworld.in/services/web-development-marketing";

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

const WEBSITE_SERVICES_ID =
  `${PAGE_URL}#website-services`;

const SEO_SERVICES_ID =
  `${PAGE_URL}#seo-services`;

const DIGITAL_MARKETING_SERVICES_ID =
  `${PAGE_URL}#digital-marketing-services`;

const BUSINESS_TYPES_ID =
  `${PAGE_URL}#business-types`;

const INDUSTRIES_ID =
  `${PAGE_URL}#industries`;

const USE_CASES_ID =
  `${PAGE_URL}#use-cases`;

const LOCATIONS_ID =
  `${PAGE_URL}#locations`;

const FEATURED_WORK_ID =
  `${PAGE_URL}#featured-work`;

const FAQ_ID =
  `${PAGE_URL}#faq`;

export const metadata: Metadata = {
  title: {
    absolute:
      "Website Development, SEO & Digital Marketing India | Double Trouble Studio",
  },

  description:
    "Website development, SEO, ecommerce, social media, paid ads and lead-generation services for businesses and growing brands across India.",

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
    "Website Development, SEO and Digital Marketing",

  keywords: [
    "website development company in India",
    "website development services India",
    "website design company India",
    "custom website development",
    "business website development",
    "corporate website development",
    "ecommerce website development",
    "Shopify website development",
    "WordPress website development",
    "landing page design",
    "website redesign services",
    "website maintenance services",
    "UI UX website design",
    "SEO friendly website development",
    "SEO company in India",
    "SEO services India",
    "technical SEO services",
    "on page SEO",
    "local SEO services",
    "ecommerce SEO services",
    "SEO content writing",
    "website SEO audit",
    "AI Overview optimization",
    "GEO optimization services",
    "digital marketing agency India",
    "social media marketing services",
    "performance marketing agency",
    "Google Ads management",
    "Meta Ads management",
    "lead generation services",
    "content marketing services",
    "email marketing services",
    "WhatsApp marketing services",
    "online reputation management",
    "influencer marketing agency",
    "website development Mumbai",
    "SEO agency Mumbai",
    "digital marketing company Mumbai",
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
      "Website Development, SEO & Digital Marketing Services in India",

    description:
      "Build a stronger digital presence with custom websites, SEO, ecommerce development, social media marketing, paid advertising and lead-generation campaigns.",

    images: [
      {
        url:
          "https://www.dtsworld.in/og/webdevelopment-og.png",

        width:
          1200,

        height:
          630,

        alt:
          "Website Development, SEO and Digital Marketing Services by Double Trouble Studio",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Website Development, SEO & Digital Marketing India",

    description:
      "Custom websites, SEO, ecommerce, social media, paid ads and lead-generation solutions for businesses across India.",

    images: [
      "https://www.dtsworld.in/twitter/webdevelopment-twitter.png",
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
    name: "Ludhiana",
  },
  {
    "@type": "City",
    name: "Amritsar",
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
    name: "Jaipur",
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
    name: "Chennai",
  },
  {
    "@type": "City",
    name: "Kolkata",
  },
  {
    "@type": "City",
    name: "Noida",
  },
  {
    "@type": "City",
    name: "Gurugram",
    alternateName: "Gurgaon",
  },
  {
    "@type": "City",
    name: "Lucknow",
  },
];

const websiteServices = [
  "Business Website Development",
  "Custom Website Development",
  "Corporate Website Development",
  "Ecommerce Website Development",
  "Shopify Website Development",
  "WordPress Website Development",
  "Landing Page Design",
  "SEO-Friendly Website Development",
  "UI/UX Website Design",
  "Website Redesign Services",
  "Website Maintenance",
  "Website Content Structure",
];

const seoServices = [
  "SEO Strategy",
  "Keyword Research",
  "On-Page SEO",
  "Technical SEO",
  "Local SEO",
  "SEO Content Writing",
  "Ecommerce SEO",
  "Website SEO Audit",
  "AI Overview and GEO Optimization",
];

const digitalMarketingServices = [
  "Social Media Marketing",
  "Performance Marketing",
  "Google Ads Management",
  "Meta Ads Management",
  "Lead Generation Campaigns",
  "Content Marketing",
  "Email and WhatsApp Marketing",
  "Online Reputation Management",
  "Influencer Marketing",
];

const businessTypes = [
  "Startups",
  "Service Businesses",
  "Restaurants and Hospitality Brands",
  "Luxury and Lifestyle Brands",
  "Event and Entertainment Businesses",
  "Ecommerce Brands",
  "Corporate Organizations",
];

const industries = [
  "Hospitality and Restaurants",
  "Events and Entertainment",
  "Luxury and Lifestyle",
  "Corporate and Professional Services",
  "Real Estate and Automotive",
  "Beauty and Wellness",
  "Ecommerce and Retail",
];

const useCases = [
  "New Business Website",
  "Website Redesign",
  "Lead Generation Website",
  "Restaurant Website and Marketing",
  "Corporate Website",
  "Ecommerce Website",
  "SEO Growth Campaign",
  "Paid Ads Campaign",
];

const locations = [
  "Mumbai",
  "Delhi NCR",
  "Chandigarh",
  "Ludhiana",
  "Amritsar",
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Jaipur",
  "Goa",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Noida",
  "Gurugram",
  "Lucknow",
  "Across India",
];

const processSteps = [
  {
    name:
      "Business Discovery",
    text:
      "Understanding the business, services, target audience, competitors, locations, goals, current website and digital marketing requirements.",
  },
  {
    name:
      "Website Structure Planning",
    text:
      "Planning page structure, service hierarchy, navigation, user journey, content sections, calls to action and internal linking strategy.",
  },
  {
    name:
      "UI/UX and Design Direction",
    text:
      "Creating a design direction based on brand identity, audience expectations, industry style and conversion goals.",
  },
  {
    name:
      "Content and SEO Planning",
    text:
      "Planning keywords, headings, service content, FAQs, metadata, location sections and SEO-friendly page structure.",
  },
  {
    name:
      "Website Development",
    text:
      "Building the website with responsive layouts, clean sections, forms, integrations, speed considerations and mobile-friendly design.",
  },
  {
    name:
      "On-Page SEO Setup",
    text:
      "Optimizing titles, meta descriptions, headings, URLs, internal links, image alt text, sitemap recommendations and schema requirements.",
  },
  {
    name:
      "Testing and Launch",
    text:
      "Testing responsiveness, forms, page flow, links, speed, content errors and technical readiness before launch.",
  },
  {
    name:
      "Digital Marketing Execution",
    text:
      "Supporting the website with SEO, social media marketing, paid ads, content marketing and lead-generation campaigns.",
  },
  {
    name:
      "Reporting and Optimization",
    text:
      "Reviewing performance, traffic, inquiries, rankings, ad results and user behavior to improve future campaigns and website performance.",
  },
];

const serviceOffers = [
  {
    slug:
      "business-website-development",
    name:
      "Business Website Development",
    serviceType:
      "Business Website Development",
    description:
      "Professional website planning and development for businesses, service providers, consultants, agencies, hospitality brands, startups and organizations.",
  },
  {
    slug:
      "custom-website-development",
    name:
      "Custom Website Development",
    serviceType:
      "Custom Website Development",
    description:
      "Custom websites planned around brand identity, services, audience, content structure and business goals.",
  },
  {
    slug:
      "corporate-website-development",
    name:
      "Corporate Website Development",
    serviceType:
      "Corporate Website Development",
    description:
      "Corporate websites with company profile, service pages, leadership sections, industries, case studies, credibility and contact information.",
  },
  {
    slug:
      "ecommerce-website-development",
    name:
      "Ecommerce Website Development",
    serviceType:
      "Ecommerce Website Development",
    description:
      "Ecommerce websites with product and category pages, cart flow, checkout setup, payments, shipping and conversion-focused design.",
  },
  {
    slug:
      "shopify-website-development",
    name:
      "Shopify Website Development",
    serviceType:
      "Shopify Website Development",
    description:
      "Shopify website development including product pages, collection structure, cart flow, payments, shipping settings and theme customization.",
  },
  {
    slug:
      "wordpress-website-development",
    name:
      "WordPress Website Development",
    serviceType:
      "WordPress Website Development",
    description:
      "WordPress websites with service pages, blogs, forms, SEO setup, plugin integrations and flexible content management.",
  },
  {
    slug:
      "landing-page-design",
    name:
      "Landing Page Design",
    serviceType:
      "Landing Page Design",
    description:
      "Conversion-focused landing pages for paid ads, lead generation, product launches, events and service campaigns.",
  },
  {
    slug:
      "seo-friendly-web-development",
    name:
      "SEO-Friendly Website Development",
    serviceType:
      "SEO-Friendly Website Development",
    description:
      "Website development with clean structure, headings, crawlable content, optimized URLs, metadata, internal links and mobile-friendly layouts.",
  },
  {
    slug:
      "ui-ux-website-design",
    name:
      "UI/UX Website Design",
    serviceType:
      "UI/UX Website Design",
    description:
      "User-friendly website layout, navigation, content structure, CTA placement and visual hierarchy planning.",
  },
  {
    slug:
      "website-redesign",
    name:
      "Website Redesign Services",
    serviceType:
      "Website Redesign Services",
    description:
      "Website redesign focused on stronger visuals, content structure, mobile experience, SEO readiness and conversion flow.",
  },
  {
    slug:
      "website-maintenance",
    name:
      "Website Maintenance",
    serviceType:
      "Website Maintenance",
    description:
      "Ongoing website content updates, page additions, bug fixes, performance checks and improvements.",
  },
  {
    slug:
      "seo-strategy",
    name:
      "SEO Strategy",
    serviceType:
      "Search Engine Optimization Strategy",
    description:
      "SEO strategy based on business goals, services, locations, competitors, search intent and target audiences.",
  },
  {
    slug:
      "technical-seo",
    name:
      "Technical SEO",
    serviceType:
      "Technical SEO",
    description:
      "Technical SEO review covering crawlability, indexing, site speed, mobile usability, redirects, broken links, sitemap and schema recommendations.",
  },
  {
    slug:
      "local-seo",
    name:
      "Local SEO",
    serviceType:
      "Local SEO",
    description:
      "Local search optimization through city pages, location keywords, Google Business Profile recommendations, reviews and service-area content.",
  },
  {
    slug:
      "ai-overview-geo-optimization",
    name:
      "AI Overview and GEO Optimization",
    serviceType:
      "AI Overview and Generative Engine Optimization Content Planning",
    description:
      "Content structuring around definitions, FAQs, process sections, comparison content and proof-based information to improve machine-readable clarity.",
  },
  {
    slug:
      "social-media-marketing",
    name:
      "Social Media Marketing",
    serviceType:
      "Social Media Marketing",
    description:
      "Social media strategy, content planning, creative direction, posting plans, reels ideas and campaign communication.",
  },
  {
    slug:
      "performance-marketing",
    name:
      "Performance Marketing",
    serviceType:
      "Performance Marketing",
    description:
      "Paid advertising campaigns across Meta, Google, YouTube and other digital channels for awareness, traffic, inquiries and leads.",
  },
  {
    slug:
      "lead-generation",
    name:
      "Lead Generation Campaigns",
    serviceType:
      "Lead Generation Campaigns",
    description:
      "Campaigns focused on inquiries, calls, form submissions, bookings, consultations and qualified business leads.",
  },
  {
    slug:
      "content-marketing",
    name:
      "Content Marketing",
    serviceType:
      "Content Marketing",
    description:
      "Content strategy for blogs, service pages, social media, newsletters, campaigns, scripts and digital brand communication.",
  },
  {
    slug:
      "online-reputation-management",
    name:
      "Online Reputation Management",
    serviceType:
      "Online Reputation Management",
    description:
      "Review strategy, digital perception, public communication and online trust-signal management.",
  },
];

const featuredWork = [
  {
    slug:
      "business-website-development-project",
    name:
      "Business Website Development",
    url:
      "https://www.shrutichadha.com/",
    description:
      "Designed and developed a modern, responsive business website with strong brand presentation, fast loading pages and clear conversion flow.",
  },
  {
    slug:
      "ecommerce-website-experience",
    name:
      "E-Commerce Website Experience",
    url:
      "https://apworld.in/",
    description:
      "Built a product-focused online store with smooth navigation, mobile-first design, product discovery and conversion-ready user journeys.",
  },
  {
    slug:
      "seo-growth-system",
    name:
      "SEO Growth System",
    url:
      "https://www.rnk.com/",
    description:
      "Created an SEO strategy with keyword planning, technical optimization, on-page content structure and search-friendly website architecture.",
  },
  {
    slug:
      "performance-marketing-campaign",
    name:
      "Performance Marketing Campaign",
    url:
      "https://www.xiimba.com/",
    description:
      "Planned and executed digital ad campaigns with audience targeting, landing page direction, creative testing and lead generation strategy.",
  },
  {
    slug:
      "brand-website-revamp",
    name:
      "Brand Website Revamp",
    url:
      "https://www.poetrydubai.com/",
    description:
      "Transformed an outdated website into a premium digital experience with improved visuals, better content hierarchy and stronger brand trust.",
  },
  {
    slug:
      "digital-launch-campaign",
    name:
      "Digital Launch Campaign",
    url:
      "https://www.afterrmatch.com/",
    description:
      "Executed a complete online launch with website readiness, social media rollout, paid ads, SEO basics and digital communication planning.",
  },
];

const faqs = [
  {
    question:
      "What does a website development company do?",
    answer:
      "A website development company plans, designs, builds and maintains websites for businesses. It manages structure, design, coding, content placement, mobile responsiveness, forms, integrations and launch support.",
  },
  {
    question:
      "What is the difference between web design and web development?",
    answer:
      "Web design focuses on the visual layout, user experience, brand look and page flow. Web development focuses on building the website technically so it works properly across devices, browsers and screen sizes.",
  },
  {
    question:
      "Do you provide website development and SEO together?",
    answer:
      "Yes. Double Trouble Studio provides website development with SEO-ready structure including service pages, keyword planning, headings, metadata, internal links, FAQs, technical recommendations and schema support.",
  },
  {
    question:
      "Why is SEO important for a website?",
    answer:
      "SEO helps search engines and users understand your website. It improves discoverability, content structure, keyword relevance, technical readiness, local visibility and long-term organic traffic potential.",
  },
  {
    question:
      "Can you build a website that ranks on Google?",
    answer:
      "Double Trouble Studio can build SEO-ready websites with proper structure, content planning, technical basics and optimization. Rankings depend on competition, content quality, authority, technical performance, backlinks, local signals and ongoing SEO work.",
  },
  {
    question:
      "How much does website development cost in India?",
    answer:
      "Website development cost in India depends on website type, number of pages, design complexity, content requirement, ecommerce functionality, integrations, SEO scope, timeline and ongoing maintenance needs.",
  },
  {
    question:
      "How long does website development take?",
    answer:
      "Website development timelines depend on page count, design complexity, content readiness, functionality, approvals, revisions and SEO requirements. A basic business website may take less time than a custom ecommerce or corporate website.",
  },
  {
    question:
      "Do you provide ecommerce website development?",
    answer:
      "Yes. Double Trouble Studio provides ecommerce website development including product pages, category structure, cart flow, payment integration, shipping setup, conversion-focused design and ecommerce SEO planning.",
  },
  {
    question:
      "Do you provide digital marketing after website launch?",
    answer:
      "Yes. After website launch, Double Trouble Studio can support SEO, social media marketing, paid ads, content marketing, lead-generation campaigns and performance optimization.",
  },
  {
    question:
      "What is digital marketing?",
    answer:
      "Digital marketing is the process of promoting a brand online through social media, search engines, paid ads, content marketing, email campaigns, influencer collaborations, website traffic and performance campaigns.",
  },
  {
    question:
      "Do you provide social media marketing?",
    answer:
      "Yes. Double Trouble Studio provides social media marketing including content planning, captions, creative direction, reels ideas, platform strategy, campaign planning and performance review.",
  },
  {
    question:
      "Do you run Google Ads and Meta Ads?",
    answer:
      "Yes. Double Trouble Studio can plan and manage Google Ads and Meta Ads for awareness, traffic, lead generation, event promotion, product sales and retargeting campaigns.",
  },
  {
    question:
      "How long does SEO take to show results?",
    answer:
      "SEO results depend on competition, website condition, content quality, technical performance, authority, keyword difficulty and consistency. SEO is usually a long-term growth activity rather than an instant traffic source.",
  },
  {
    question:
      "Do you provide local SEO?",
    answer:
      "Yes. Double Trouble Studio provides local SEO support through location keywords, city pages, Google Business Profile content, local search optimization, reviews strategy and local visibility planning.",
  },
  {
    question:
      "Can you redesign my existing website?",
    answer:
      "Yes. Double Trouble Studio can redesign existing websites by improving design, content structure, mobile responsiveness, SEO readiness, loading flow, call-to-action placement and conversion flow.",
  },
  {
    question:
      "Do you provide website maintenance?",
    answer:
      "Yes. Double Trouble Studio provides website maintenance support including content updates, page additions, performance checks, bug fixes, improvements and technical recommendations.",
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
    "https://www.dtsworld.in/webdevelopment-og.png",

  contentUrl:
    "https://www.dtsworld.in/webdevelopment-og.png",

  width:
    1200,

  height:
    630,

  caption:
    "Website Development, SEO and Digital Marketing Services by Double Trouble Studio",

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
    "Double Trouble Studio is a Mumbai-based creative and digital agency providing website development, web design, SEO, digital marketing, social media marketing, performance advertising, content strategy, lead generation and online brand growth services across India.",

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
    "Website Development",
    "Web Design",
    "Custom Website Development",
    "Business Website Development",
    "Corporate Website Development",
    "Ecommerce Website Development",
    "Shopify Website Development",
    "WordPress Website Development",
    "Landing Page Design",
    "Website Redesign",
    "Website Maintenance",
    "UI/UX Design",
    "Search Engine Optimization",
    "SEO Strategy",
    "Keyword Research",
    "On-Page SEO",
    "Technical SEO",
    "Local SEO",
    "Ecommerce SEO",
    "SEO Content Writing",
    "Website SEO Audits",
    "AI Overview Optimization",
    "Generative Engine Optimization",
    "Digital Marketing",
    "Social Media Marketing",
    "Performance Marketing",
    "Google Ads",
    "Meta Ads",
    "Lead Generation",
    "Content Marketing",
    "Online Reputation Management",
    "Influencer Marketing",
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
    "Double Trouble Studio is a creative and digital agency in Mumbai providing website development, SEO, digital marketing, branding, public relations, event management and AI creative services across India.",

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
    "Website Development, SEO & Digital Marketing India | Double Trouble Studio",

  headline:
    "Website Development, SEO & Digital Marketing Services in India",

  description:
    "Website development, SEO, ecommerce, social media, paid ads and lead-generation services for businesses and growing brands across India.",

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

  // Only CreativeWork-based entities belong in hasPart.
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

  // ItemList and OfferCatalog are Things, so mentions is safer.
  mentions: [
    {
      "@id":
        CATALOG_ID,
    },
    {
      "@id":
        WEBSITE_SERVICES_ID,
    },
    {
      "@id":
        SEO_SERVICES_ID,
    },
    {
      "@id":
        DIGITAL_MARKETING_SERVICES_ID,
    },
    {
      "@id":
        BUSINESS_TYPES_ID,
    },
    {
      "@id":
        INDUSTRIES_ID,
    },
    {
      "@id":
        USE_CASES_ID,
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
    "https://www.dtsworld.in/services/pr-media-marketing",
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
    "Website Development, SEO and Digital Marketing Services",

  alternateName: [
    "Web Development and Marketing Services",
    "Website Development Services",
    "SEO Services",
    "Digital Marketing Services",
  ],

  url:
    PAGE_URL,

  image: {
    "@id":
      PRIMARY_IMAGE_ID,
  },

  serviceType: [
    "Website Development",
    "Website Design",
    "UI/UX Website Design",
    "Ecommerce Development",
    "Shopify Development",
    "WordPress Development",
    "Landing Page Design",
    "Search Engine Optimization",
    "Technical SEO",
    "Local SEO",
    "AI Overview and GEO Content Optimization",
    "Social Media Marketing",
    "Performance Marketing",
    "Google Ads Management",
    "Meta Ads Management",
    "Lead Generation",
    "Content Marketing",
  ],

  category:
    "Website Development, SEO and Digital Marketing Services",

  description:
    "Double Trouble Studio provides website development, SEO and digital marketing services for businesses, brands, startups, hospitality companies, event businesses, luxury brands and growing organizations across India. Services include custom website development, SEO-ready structure, landing pages, social media marketing, paid ads, lead generation, content marketing and ongoing digital growth support.",

  provider: {
    "@id":
      ORGANIZATION_ID,
  },

  audience: {
    "@type":
      "BusinessAudience",

    name:
      "Businesses and brands seeking website development and digital growth",

    audienceType:
      "Startups, service businesses, restaurants, hospitality brands, luxury and lifestyle businesses, event and entertainment companies, ecommerce brands and corporate organizations",
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
    "Website Development, SEO and Digital Marketing Services Offered",

  description:
    "Web development, ecommerce, SEO, GEO-ready content planning, social media, paid advertising, lead generation and ongoing digital growth services.",

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
          `${PAGE_URL}#${service.slug}-offer`,

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
        "Web Development & Marketing",

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
    "Web Development and Digital Marketing Process",

  description:
    "A structured website development, SEO and digital marketing process from business discovery to launch, campaign execution and optimization.",

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

const websiteServicesSchema = {
  "@context":
    schemaContext,

  "@type":
    "ItemList",

  "@id":
    WEBSITE_SERVICES_ID,

  name:
    "Website Development Services",

  description:
    "Website development services covering business websites, custom development, corporate websites, ecommerce, Shopify, WordPress, landing pages, SEO-ready websites, UI/UX, redesign and maintenance.",

  numberOfItems:
    websiteServices.length,

  itemListOrder:
    "https://schema.org/ItemListOrderAscending",

  itemListElement:
    websiteServices.map(
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

const seoServicesSchema = {
  "@context":
    schemaContext,

  "@type":
    "ItemList",

  "@id":
    SEO_SERVICES_ID,

  name:
    "SEO Services",

  description:
    "SEO services covering strategy, keyword research, on-page SEO, technical SEO, local SEO, content writing, ecommerce SEO, audits and AI Overview / GEO-oriented content planning.",

  numberOfItems:
    seoServices.length,

  itemListOrder:
    "https://schema.org/ItemListOrderAscending",

  itemListElement:
    seoServices.map(
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

const digitalMarketingServicesSchema = {
  "@context":
    schemaContext,

  "@type":
    "ItemList",

  "@id":
    DIGITAL_MARKETING_SERVICES_ID,

  name:
    "Digital Marketing Services",

  description:
    "Digital marketing services covering social media, performance marketing, Google Ads, Meta Ads, lead generation, content marketing, email and WhatsApp marketing, reputation management and influencers.",

  numberOfItems:
    digitalMarketingServices.length,

  itemListOrder:
    "https://schema.org/ItemListOrderAscending",

  itemListElement:
    digitalMarketingServices.map(
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

const businessTypesSchema = {
  "@context":
    schemaContext,

  "@type":
    "ItemList",

  "@id":
    BUSINESS_TYPES_ID,

  name:
    "Website Development Services for Different Business Types",

  description:
    "Website solutions for startups, service businesses, hospitality brands, luxury businesses, event companies, ecommerce brands and corporate organizations.",

  numberOfItems:
    businessTypes.length,

  itemListOrder:
    "https://schema.org/ItemListOrderAscending",

  itemListElement:
    businessTypes.map(
      (businessType, index) => ({
        "@type":
          "ListItem",

        position:
          index + 1,

        name:
          businessType,
      }),
    ),
};

const industriesSchema = {
  "@context":
    schemaContext,

  "@type":
    "ItemList",

  "@id":
    INDUSTRIES_ID,

  name:
    "Industries Served by Website Development, SEO and Digital Marketing Services",

  description:
    "Industries supported through web development, SEO, social media, paid advertising and digital growth services.",

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

const useCasesSchema = {
  "@context":
    schemaContext,

  "@type":
    "ItemList",

  "@id":
    USE_CASES_ID,

  name:
    "Website, SEO and Digital Marketing Use Cases",

  description:
    "Common digital growth use cases covering new websites, redesigns, lead generation, ecommerce, SEO growth and paid advertising campaigns.",

  numberOfItems:
    useCases.length,

  itemListOrder:
    "https://schema.org/ItemListOrderAscending",

  itemListElement:
    useCases.map(
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
  "@context":
    schemaContext,

  "@type":
    "ItemList",

  "@id":
    LOCATIONS_ID,

  name:
    "Website Development, SEO and Digital Marketing Service Locations",

  description:
    "Major Indian markets served by Double Trouble Studio for website development, SEO and digital marketing.",

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
  "@context":
    schemaContext,

  "@type":
    "ItemList",

  "@id":
    FEATURED_WORK_ID,

  url:
    `${PAGE_URL}#featured-work`,

  name:
    "Web Development in Action",

  description:
    "Examples of website development, ecommerce, SEO, performance marketing, website revamp and digital launch work showcased on the page.",

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

          url:
            work.url,

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
  "@context":
    schemaContext,

  "@type":
    "FAQPage",

  "@id":
    FAQ_ID,

  url:
    `${PAGE_URL}#faq`,

  name:
    "Website Development, SEO and Digital Marketing Frequently Asked Questions",

  description:
    "Answers to common questions about website development, web design, SEO, ecommerce, digital marketing, paid ads, local SEO, redesign and website maintenance.",

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

// Separate blocks help validators surface the important
// schema types independently while the stable @id values
// keep everything connected as one semantic entity graph.
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
  websiteServicesSchema,
  seoServicesSchema,
  digitalMarketingServicesSchema,
  businessTypesSchema,
  industriesSchema,
  useCasesSchema,
  locationsSchema,
  featuredWorkSchema,
  faqSchema,
];

export default function WebDevelopmentMarketing() {
  return (
    <>
      {structuredDataBlocks.map(
        (schema, index) => (
          <script
            key={`web-development-marketing-schema-${index}`}
            id={`web-development-marketing-structured-data-${index + 1}`}
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

        <WebsiteDigitalHero />

        <WebDevelopmentMarketingFeaturedWork />

        <CompleteDigitalSolutions />

        <WhatIsWebSeoMarketing />

        <WebsiteDevelopmentServices />

        <SEOServicesSection />

        <DigitalMarketingServicesSection />

        <BusinessTypesWebsiteSection />

        <WhySEOStartsDuringDevelopment />

        <WebDevelopmentMarketingProcess />

        <WhyWebsiteSEOMarketingTogether />

        <IndustriesWeWorkWith />

        <IndiaPresenceSection />

        <UseCasesSection />

        <ProjectRequirementsSection />

        <WhyChooseDTSSection />

        <WebsiteMarketingFAQSection />

        <FinalCTASection />

        <ServiceCityLinks
          serviceSlug="web-development-marketing"
        />

        <Footer />
      </main>
    </>
  );
}