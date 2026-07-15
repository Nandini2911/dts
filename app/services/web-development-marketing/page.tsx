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

export const metadata: Metadata = {
  title:
    "Website Development, SEO & Digital Marketing India | DTS",

  description:
    "Website development, SEO, ecommerce, social media, paid ads and lead-generation services for businesses and growing brands across India.",

  applicationName: "Double Trouble Studio",

  authors: [
    {
      name: "Double Trouble Studio",
      url: "https://www.dtsworld.in/",
    },
  ],

  creator: "Double Trouble Studio",

  publisher: "Double Trouble Studio",

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
      "https://www.dtsworld.in/services/web-development-marketing",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url:
      "https://www.dtsworld.in/services/web-development-marketing",

    siteName: "Double Trouble Studio",

    title:
      "Website Development, SEO & Digital Marketing Services in India",

    description:
      "Build a stronger digital presence with custom websites, SEO, ecommerce development, social media marketing, paid advertising and lead-generation campaigns.",

    images: [
      {
        url:
          "https://www.dtsworld.in/web-development-marketing-og.jpg",

        width: 1200,

        height: 630,

        alt:
          "Website Development, SEO and Digital Marketing Services by Double Trouble Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Website Development, SEO & Digital Marketing India",

    description:
      "Custom websites, SEO, ecommerce, social media, paid ads and lead-generation solutions for businesses across India.",

    images: [
      "https://www.dtsworld.in/web-development-marketing-og.jpg",
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

const webDevelopmentMarketingSchema = {
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
        "Double Trouble Studio is an India-based branding, website development, SEO and digital marketing agency helping modern businesses grow through website design, search engine optimization, social media marketing, paid ads, content strategy and performance-driven digital growth.",
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
        "Website Development",
        "Web Design",
        "Custom Website Development",
        "Business Website Development",
        "Corporate Website Development",
        "Ecommerce Website Development",
        "Shopify Website Development",
        "WordPress Website Development",
        "Landing Page Design",
        "SEO",
        "Technical SEO",
        "Local SEO",
        "SEO Content Writing",
        "Digital Marketing",
        "Social Media Marketing",
        "Performance Marketing",
        "Google Ads",
        "Meta Ads",
        "Lead Generation",
        "Online Reputation Management",
        "Influencer Marketing",
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
      "@type": "Service",
      "@id": "https://www.dtsworld.in/services/web-development-marketing/#service",
      name: "Website Development, SEO and Digital Marketing Services",
      serviceType: "Website Development, SEO and Digital Marketing",
      url: "https://www.dtsworld.in/services/web-development-marketing/",
      description:
        "Double Trouble Studio provides website development, SEO and digital marketing services for businesses, brands, startups, hospitality companies, event businesses, luxury brands and growing organizations across India. Services include custom website development, SEO-ready structure, landing pages, social media marketing, paid ads, lead generation, content marketing and ongoing digital growth support.",
      provider: {
        "@id": "https://www.dtsworld.in/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.dtsworld.in/services/web-development-marketing/#breadcrumb",
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
          name: "Web Development & Marketing",
          item: "https://www.dtsworld.in/services/web-development-marketing/",
        },
      ],
    },
    {
      "@type": "HowTo",
      "@id":
        "https://www.dtsworld.in/services/web-development-marketing/#process",
      name: "Web Development and Digital Marketing Process",
      description:
        "A structured website development, SEO and digital marketing process from business discovery to launch, campaign execution and optimization.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Business Discovery",
          text: "Understanding the business, services, target audience, competitors, locations, goals, current website and digital marketing requirements.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Website Structure Planning",
          text: "Planning page structure, service hierarchy, navigation, user journey, content sections, calls to action and internal linking strategy.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "UI/UX and Design Direction",
          text: "Creating a design direction based on brand identity, audience expectations, industry style and conversion goals.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Content and SEO Planning",
          text: "Planning keywords, headings, service content, FAQs, metadata, location sections and SEO-friendly page structure.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Website Development",
          text: "Building the website with responsive layouts, clean sections, forms, integrations, speed considerations and mobile-friendly design.",
        },
        {
          "@type": "HowToStep",
          position: 6,
          name: "On-Page SEO Setup",
          text: "Optimizing titles, meta descriptions, headings, URLs, internal links, image alt text, sitemap recommendations and schema requirements.",
        },
        {
          "@type": "HowToStep",
          position: 7,
          name: "Testing and Launch",
          text: "Testing responsiveness, forms, page flow, links, speed, content errors and technical readiness before launch.",
        },
        {
          "@type": "HowToStep",
          position: 8,
          name: "Digital Marketing Execution",
          text: "Supporting the website with SEO, social media marketing, paid ads, content marketing and lead-generation campaigns.",
        },
        {
          "@type": "HowToStep",
          position: 9,
          name: "Reporting and Optimization",
          text: "Reviewing performance, traffic, inquiries, rankings, ad results and user behavior to improve future campaigns and website performance.",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id":
        "https://www.dtsworld.in/services/web-development-marketing/#website-services",
      name: "Website Development Services",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Business Website Development",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Custom Website Development",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Corporate Website Development",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Ecommerce Website Development",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Shopify Website Development",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "WordPress Website Development",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Landing Page Design",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "SEO-Friendly Website Development",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "UI/UX Website Design",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Website Redesign Services",
        },
        {
          "@type": "ListItem",
          position: 11,
          name: "Website Maintenance",
        },
        {
          "@type": "ListItem",
          position: 12,
          name: "Website Content Structure",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id":
        "https://www.dtsworld.in/services/web-development-marketing/#seo-services",
      name: "SEO Services",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "SEO Strategy",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Keyword Research",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "On-Page SEO",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Technical SEO",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Local SEO",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "SEO Content Writing",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Ecommerce SEO",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Website SEO Audit",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "AI Overview and GEO Optimization",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id":
        "https://www.dtsworld.in/services/web-development-marketing/#digital-marketing-services",
      name: "Digital Marketing Services",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Social Media Marketing",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Performance Marketing",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Google Ads Management",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Meta Ads Management",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Lead Generation Campaigns",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Content Marketing",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Email and WhatsApp Marketing",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Online Reputation Management",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Influencer Marketing",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id":
        "https://www.dtsworld.in/services/web-development-marketing/#business-types",
      name: "Website Development Services for Different Business Types",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Startups",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Service Businesses",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Restaurants and Hospitality Brands",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Luxury and Lifestyle Brands",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Event and Entertainment Businesses",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Ecommerce Brands",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Corporate Organizations",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id":
        "https://www.dtsworld.in/services/web-development-marketing/#industries",
      name: "Industries Served by Website Development, SEO and Digital Marketing Services",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Hospitality and Restaurants",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Events and Entertainment",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Luxury and Lifestyle",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Corporate and Professional Services",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Real Estate and Automotive",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Beauty and Wellness",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Ecommerce and Retail",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id":
        "https://www.dtsworld.in/services/web-development-marketing/#use-cases",
      name: "Website, SEO and Digital Marketing Use Cases",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "New Business Website",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Website Redesign",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Lead Generation Website",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Restaurant Website and Marketing",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Corporate Website",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Ecommerce Website",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "SEO Growth Campaign",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Paid Ads Campaign",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id":
        "https://www.dtsworld.in/services/web-development-marketing/#locations",
      name: "Website Development, SEO and Digital Marketing Service Locations",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Mumbai",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Delhi NCR",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Chandigarh",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Ludhiana",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Amritsar",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Bangalore",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Hyderabad",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Pune",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Jaipur",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Goa",
        },
        {
          "@type": "ListItem",
          position: 11,
          name: "Ahmedabad",
        },
        {
          "@type": "ListItem",
          position: 12,
          name: "Chennai",
        },
        {
          "@type": "ListItem",
          position: 13,
          name: "Kolkata",
        },
        {
          "@type": "ListItem",
          position: 14,
          name: "Noida",
        },
        {
          "@type": "ListItem",
          position: 15,
          name: "Gurugram",
        },
        {
          "@type": "ListItem",
          position: 16,
          name: "Lucknow",
        },
        {
          "@type": "ListItem",
          position: 17,
          name: "Across India",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.dtsworld.in/services/web-development-marketing/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does a website development company do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A website development company plans, designs, builds and maintains websites for businesses. It manages structure, design, coding, content placement, mobile responsiveness, forms, integrations and launch support.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between web design and web development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Web design focuses on the visual layout, user experience, brand look and page flow. Web development focuses on building the website technically so it works properly across devices, browsers and screen sizes.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide website development and SEO together?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio provides website development with SEO-ready structure including service pages, keyword planning, headings, metadata, internal links, FAQs, technical recommendations and schema support.",
          },
        },
        {
          "@type": "Question",
          name: "Why is SEO important for a website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO helps search engines and users understand your website. It improves discoverability, content structure, keyword relevance, technical readiness, local visibility and long-term organic traffic potential.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build a website that ranks on Google?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Double Trouble Studio can build SEO-ready websites with proper structure, content planning, technical basics and optimization. Rankings depend on competition, content quality, authority, technical performance, backlinks, local signals and ongoing SEO work.",
          },
        },
        {
          "@type": "Question",
          name: "How much does website development cost in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Website development cost in India depends on website type, number of pages, design complexity, content requirement, ecommerce functionality, integrations, SEO scope, timeline and ongoing maintenance needs.",
          },
        },
        {
          "@type": "Question",
          name: "How long does website development take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Website development timelines depend on page count, design complexity, content readiness, functionality, approvals, revisions and SEO requirements. A basic business website may take less time than a custom ecommerce or corporate website.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide ecommerce website development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio provides ecommerce website development including product pages, category structure, cart flow, payment integration, shipping setup, conversion-focused design and ecommerce SEO planning.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide digital marketing after website launch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. After website launch, Double Trouble Studio can support SEO, social media marketing, paid ads, content marketing, lead-generation campaigns and performance optimization.",
          },
        },
        {
          "@type": "Question",
          name: "What is digital marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digital marketing is the process of promoting a brand online through social media, search engines, paid ads, content marketing, email campaigns, influencer collaborations, website traffic and performance campaigns.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide social media marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio provides social media marketing including content planning, captions, creative direction, reels ideas, platform strategy, campaign planning and performance review.",
          },
        },
        {
          "@type": "Question",
          name: "Do you run Google Ads and Meta Ads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio can plan and manage Google Ads and Meta Ads for awareness, traffic, lead generation, event promotion, product sales and retargeting campaigns.",
          },
        },
        {
          "@type": "Question",
          name: "How long does SEO take to show results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO results depend on competition, website condition, content quality, technical performance, authority, keyword difficulty and consistency. SEO is usually a long-term growth activity rather than an instant traffic source.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide local SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio provides local SEO support through location keywords, city pages, Google Business Profile content, local search optimization, reviews strategy and local visibility planning.",
          },
        },
        {
          "@type": "Question",
          name: "Can you redesign my existing website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio can redesign existing websites by improving design, content structure, mobile responsiveness, SEO readiness, loading flow, call-to-action placement and conversion flow.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide website maintenance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio provides website maintenance support including content updates, page additions, performance checks, bug fixes, improvements and technical recommendations.",
          },
        },
      ],
    },
  ],
};

export default function WebDevelopmentMarketing() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webDevelopmentMarketingSchema),
        }}
      />

      <main>
        <Navbar />
        <WebsiteDigitalHero />
        <WebDevelopmentMarketingFeaturedWork/>
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
         <ServiceCityLinks serviceSlug="web-development-marketing" />
        <Footer />
       
      </main>
    </>
  );
}