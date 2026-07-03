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

export const metadata: Metadata = {
  title:
    "PR & Digital Marketing Agency in India | Double Trouble Studio",

  description:
    "Integrated PR, media relations, social media, SEO, influencer marketing and paid campaigns for brands, events and public personalities across India.",

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
      "https://www.dtsworld.in/services/pr-media-digital-marketing",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url:
      "https://www.dtsworld.in/services/pr-media-digital-marketing",

    siteName: "Double Trouble Studio",

    title:
      "PR, Media & Digital Marketing Agency in India",

    description:
      "Build visibility, credibility and growth through PR, media coverage, social media, influencer marketing, SEO, paid ads and reputation management.",

    images: [
      {
        url:
          "https://www.dtsworld.in/pr-media-digital-marketing-og.jpg",

        width: 1200,

        height: 630,

        alt:
          "PR, Media and Digital Marketing Services by Double Trouble Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "PR & Digital Marketing Agency in India | DTS",

    description:
      "Integrated PR, media coverage, social media, influencer campaigns, SEO, paid ads and brand communication services across India.",

    images: [
      "https://www.dtsworld.in/pr-media-digital-marketing-og.jpg",
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


const prMediaDigitalMarketingSchema = {
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
        "Double Trouble Studio is an India-based branding, PR, media and digital marketing agency helping modern businesses grow through public relations, media coverage, social media marketing, influencer campaigns, SEO, paid advertising, website strategy and brand communication.",
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
        "Public Relations",
        "PR Strategy",
        "Media Coverage",
        "Media Management",
        "Digital Marketing",
        "Social Media Marketing",
        "Influencer Marketing",
        "Search Engine Optimization",
        "Performance Marketing",
        "Online Reputation Management",
        "Brand Communication",
        "Content Marketing",
        "Press Release Distribution",
        "Event PR",
        "Corporate PR",
        "Startup PR",
        "Hospitality PR",
        "Luxury Brand PR",
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
      "@id":
        "https://www.dtsworld.in/services/pr-media-digital-marketing/#service",
      name: "PR, Media and Digital Marketing Services",
      serviceType: "PR, Media and Digital Marketing",
      url: "https://www.dtsworld.in/services/pr-media-digital-marketing/",
      description:
        "Double Trouble Studio provides integrated PR, media and digital marketing services for brands, businesses, public personalities, events and luxury experiences across India. Services include public relations, media coverage, social media marketing, influencer campaigns, SEO strategy, paid advertising, online reputation management, content marketing and brand communication.",
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
        "https://www.dtsworld.in/services/pr-media-digital-marketing/#breadcrumb",
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
          name: "PR, Media & Digital Marketing",
          item: "https://www.dtsworld.in/services/pr-media-digital-marketing/",
        },
      ],
    },
    {
      "@type": "HowTo",
      "@id":
        "https://www.dtsworld.in/services/pr-media-digital-marketing/#process",
      name: "PR, Media and Digital Marketing Process",
      description:
        "A strategy-first PR, media and digital marketing process from brand discovery to campaign reporting.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Brand Discovery",
          text: "Understanding the business, audience, industry, goals, current visibility, competitors, platforms and communication challenges.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Strategy Development",
          text: "Creating a PR and digital marketing strategy based on brand goals, target audience, campaign requirement and desired outcomes.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Messaging and Content Planning",
          text: "Developing key messages, campaign ideas, content pillars, media angles, social media direction and digital communication themes.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Media and Platform Planning",
          text: "Identifying suitable media categories, digital platforms, influencer profiles, ad channels and content formats.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Campaign Execution",
          text: "Executing PR outreach, social media content, paid ads, influencer campaigns, SEO content, media communication and digital promotions.",
        },
        {
          "@type": "HowToStep",
          position: 6,
          name: "Monitoring and Optimization",
          text: "Monitoring campaign performance, media responses, audience engagement, website traffic, ad results and content performance.",
        },
        {
          "@type": "HowToStep",
          position: 7,
          name: "Reporting and Recommendations",
          text: "Providing campaign updates, coverage details, performance insights and recommendations for future communication.",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id":
        "https://www.dtsworld.in/services/pr-media-digital-marketing/#services-list",
      name: "PR, Media and Digital Marketing Services",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Public Relations Strategy",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Media Relations",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Press Release Writing and Distribution",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Brand Storytelling",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Corporate PR",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Startup PR",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Celebrity and Public Figure PR",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Event PR",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Crisis Communication Support",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Social Media Marketing",
        },
        {
          "@type": "ListItem",
          position: 11,
          name: "Search Engine Optimization",
        },
        {
          "@type": "ListItem",
          position: 12,
          name: "Performance Marketing",
        },
        {
          "@type": "ListItem",
          position: 13,
          name: "Content Marketing",
        },
        {
          "@type": "ListItem",
          position: 14,
          name: "Influencer Marketing",
        },
        {
          "@type": "ListItem",
          position: 15,
          name: "Online Reputation Management",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id":
        "https://www.dtsworld.in/services/pr-media-digital-marketing/#business-goals",
      name: "PR and Digital Marketing Business Goals",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Brand Launch",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Product Launch",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Event Promotion",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Reputation Building",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Lead Generation",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Social Media Growth",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Local Business Visibility",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Luxury Brand Positioning",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id":
        "https://www.dtsworld.in/services/pr-media-digital-marketing/#industries",
      name: "Industries Served by PR, Media and Digital Marketing Services",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Hospitality and Restaurants",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Luxury and Lifestyle",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Events and Entertainment",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Corporate and Startups",
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
          name: "Public Personalities and Creators",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id":
        "https://www.dtsworld.in/services/pr-media-digital-marketing/#campaign-use-cases",
      name: "PR and Digital Marketing Campaign Use Cases",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Brand Launch Campaigns",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Product Launch Campaigns",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Event Promotion Campaigns",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Hospitality Launch Campaigns",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Founder and Public Figure Visibility",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Lead Generation Campaigns",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id":
        "https://www.dtsworld.in/services/pr-media-digital-marketing/#locations",
      name: "PR, Media and Digital Marketing Service Locations",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Delhi",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Gurgaon",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Noida",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Chandigarh",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Ludhiana",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Amritsar",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Mumbai",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Pune",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Ahmedabad",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Jaipur",
        },
        {
          "@type": "ListItem",
          position: 11,
          name: "Udaipur",
        },
        {
          "@type": "ListItem",
          position: 12,
          name: "Goa",
        },
        {
          "@type": "ListItem",
          position: 13,
          name: "Bengaluru",
        },
        {
          "@type": "ListItem",
          position: 14,
          name: "Hyderabad",
        },
        {
          "@type": "ListItem",
          position: 15,
          name: "Chennai",
        },
        {
          "@type": "ListItem",
          position: 16,
          name: "Kolkata",
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
      "@id":
        "https://www.dtsworld.in/services/pr-media-digital-marketing/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is PR, media and digital marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "PR, media and digital marketing is an integrated communication approach that helps brands build visibility, credibility and audience engagement through public relations, media coverage, social media marketing, influencer campaigns, SEO, paid ads, content strategy and online reputation management.",
          },
        },
        {
          "@type": "Question",
          name: "What does a PR and digital marketing agency do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A PR and digital marketing agency helps brands plan communication, build media visibility, manage social media, improve search presence, run paid campaigns, coordinate influencer collaborations and strengthen online reputation.",
          },
        },
        {
          "@type": "Question",
          name: "Does Double Trouble Studio provide PR services in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio provides PR services in India including PR strategy, media relations, press release writing, media outreach, event PR, corporate PR, startup PR and reputation-focused communication.",
          },
        },
        {
          "@type": "Question",
          name: "Can PR and digital marketing work together?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. PR and digital marketing work better together because PR builds credibility, media coverage creates visibility, and digital marketing improves search discovery, social reach, engagement and campaign performance.",
          },
        },
        {
          "@type": "Question",
          name: "What digital marketing services do you offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Double Trouble Studio offers digital marketing services including social media marketing, SEO, performance marketing, content marketing, influencer marketing, online reputation management, website and landing page strategy, email campaigns and WhatsApp campaign communication.",
          },
        },
        {
          "@type": "Question",
          name: "Do you manage social media marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio manages social media marketing for brands through content planning, creative direction, posting strategy, engagement, campaign ideas, reels, platform strategy and performance tracking.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide influencer marketing services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio provides influencer marketing services for product promotions, event campaigns, hospitality launches, lifestyle content, creator-led promotions and targeted audience engagement.",
          },
        },
        {
          "@type": "Question",
          name: "Can you manage PR for events and launches?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio manages PR for events, launches, brand activations, product announcements, hospitality openings, influencer attendance, media invites, press coverage and post-event stories.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide SEO and paid advertising?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio provides SEO strategy, SEO content, on-page SEO, local SEO, technical recommendations and paid advertising support across platforms such as Meta, Google and YouTube.",
          },
        },
        {
          "@type": "Question",
          name: "What industries do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Double Trouble Studio works with hospitality brands, restaurants, luxury businesses, lifestyle brands, events, entertainment companies, corporate brands, startups, real estate brands, automotive businesses, beauty brands, wellness companies, public personalities and creators.",
          },
        },
        {
          "@type": "Question",
          name: "How do we start a PR or digital marketing campaign?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To start a PR or digital marketing campaign, share your brand details, website or social links, business category, target audience, campaign objective, current digital presence, PR requirement, creative assets, timeline and budget.",
          },
        },
        {
          "@type": "Question",
          name: "How much do PR and digital marketing services cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "PR and digital marketing service cost depends on campaign objective, service scope, media requirement, social media volume, SEO needs, influencer strategy, paid ad budget, timeline, creative assets and reporting requirements.",
          },
        },
      ],
    },
  ],
};

export default function PRMediaDigitalMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(prMediaDigitalMarketingSchema),
        }}
      />

      <main className="bg-[#F8FAFC] text-[#0F172A]">
        <Navbar />
        <PRHero />
        <PRIntro />
        <PRDefinition />
        <PRMediaDigitalFeaturedWork/>
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
        <Footer />
        <ServiceCityLinks serviceSlug="pr-media-marketing" />
      </main>
    </>
  );
}