import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.dtsworld.in"
).replace(/\/$/, "");

const PAGE_URL = `${SITE_URL}/faq`;
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LAST_UPDATED = "2026-08-06";

type FAQItem = {
  question: string;
  answer: string;
  href?: string;
  linkLabel?: string;
};

type FAQCategory = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: FAQItem[];
};

const faqCategories: FAQCategory[] = [
  {
    id: "everyday-digital-marketing-questions",
    eyebrow: "Daily Questions",
    title: "Everyday Digital Marketing Questions",
    description:
      "Simple, practical answers to the questions business owners commonly search before investing in marketing.",
    items: [
      {
        question: "What is digital marketing in simple words?",
        answer:
          "Digital marketing means promoting a business through online channels such as Google, websites, social media, email, online advertising, content and search engines. Its purpose is to help the right people discover a brand, understand its offer, trust it and take an action such as calling, booking, visiting or buying.",
      },
      {
        question: "How can I promote my business online?",
        answer:
          "Start with a clear offer, a trustworthy website or landing page, an optimised Google Business Profile, useful social media content and a simple way for customers to contact you. SEO builds long-term visibility, while Google Ads and Meta Ads can create faster reach. The best mix depends on your audience, location, budget and business goal.",
      },
      {
        question: "What is the best digital marketing strategy for a small business?",
        answer:
          "A strong small-business strategy usually focuses on a few connected priorities instead of every platform. Build a clear website, improve local and website SEO, publish useful social content, collect reviews and use paid ads only when the offer, landing page and follow-up process are ready. Measure enquiries, bookings or sales rather than likes alone.",
      },
      {
        question: "How long does digital marketing take to show results?",
        answer:
          "The timeline depends on the channel. Paid advertising can generate traffic soon after launch, while SEO, content and brand-building normally require consistent work over several months. Results also depend on the offer, competition, budget, website quality, creative, targeting and how quickly leads are followed up.",
      },
      {
        question: "How much should a business spend on digital marketing?",
        answer:
          "There is no universal budget. A practical budget should consider the business goal, customer value, competition, number of channels, content requirement and paid media spend. Begin with a scope that can be executed consistently, track cost per qualified enquiry or sale and increase investment only when the system is producing useful data.",
      },
      {
        question: "Should I hire a digital marketing agency, freelancer or in-house team?",
        answer:
          "A freelancer can be suitable for one specialised task, while an in-house team offers daily internal access. An agency is useful when strategy, design, content, media buying, SEO, websites, PR and reporting need to work together. The right choice depends on your budget, speed, internal capacity and the complexity of the growth plan.",
      },
    ],
  },
  {
    id: "about-double-trouble-studio",
    eyebrow: "About DTS",
    title: "About Double Trouble Studio",
    description:
      "Answers about the agency, its services, Mumbai location, industries and integrated way of working.",
    items: [
      {
        question: "What is Double Trouble Studio?",
        answer:
          "Double Trouble Studio is a full-service growth agency and creative digital agency based in Mumbai. DTS combines brand strategy, creative direction, public relations, social media marketing, paid media, website development, SEO, guest management, celebrity management, events, weddings, AI video production, video editing and VFX under one coordinated system.",
        href: "/about",
        linkLabel: "Learn more about DTS",
      },
      {
        question: "What services does Double Trouble Studio provide?",
        answer:
          "DTS provides branding, creative direction, PR, media outreach, social media marketing, content creation, Google Ads, Meta Ads, performance marketing, website development, SEO, events, weddings, guest management, celebrity management, AI video production, professional video editing and VFX services.",
      },
      {
        question: "Where is Double Trouble Studio located?",
        answer:
          "Double Trouble Studio is located at Plot No. 177, 1st Floor, Aaram Nagar Part 2, Seven Bungalows, J. P. Road, Versova, Andheri West, Mumbai 400061, India. The team also works with clients across India through structured remote and on-ground workflows.",
        href: "/contact",
        linkLabel: "View contact details",
      },
      {
        question: "Which industries does Double Trouble Studio work with?",
        answer:
          "DTS works with hospitality brands, hotels, restaurants, cafés, luxury businesses, fashion and lifestyle labels, wedding planners, event companies, creators, influencers, corporate brands, media companies, founders and modern startups. Strategy is adapted to each category, audience and buying journey.",
      },
      {
        question: "Can I hire DTS for only one service?",
        answer:
          "Yes. You can hire DTS for one specialist service such as SEO, website development, social media marketing, paid ads, PR, guest management or AI video. You can also combine services into one integrated growth system when several channels need to work together.",
        href: "/contact",
        linkLabel: "Discuss the right scope",
      },
    ],
  },
  {
    id: "social-media-marketing",
    eyebrow: "Social Media",
    title: "Social Media Marketing & Instagram Questions",
    description:
      "Daily questions about content, Instagram growth, Reels, reach, leads and monthly account management.",
    items: [
      {
        question: "What should a business post on social media?",
        answer:
          "A business should balance educational content, product or service proof, customer stories, behind-the-scenes content, offers, founder insights and clear calls to action. Every post does not need to sell, but the overall content system should help people understand the brand, trust its expertise and know what to do next.",
      },
      {
        question: "How often should a business post on Instagram?",
        answer:
          "There is no single posting frequency that works for every brand. A realistic and consistent schedule with strong ideas is better than daily low-quality content. The right frequency depends on available content, audience behaviour, campaign goals and the team's ability to reply, measure and improve.",
      },
      {
        question: "Why is my Instagram reach low?",
        answer:
          "Low reach can result from weak hooks, repetitive content, unclear positioning, poor visual quality, low audience relevance, inconsistent publishing or content that gives viewers no reason to save, share or respond. Review retention, saves, shares, profile visits and enquiries instead of judging performance by follower count alone.",
      },
      {
        question: "Do Instagram Reels help businesses get customers?",
        answer:
          "Reels can increase discovery and explain a product, service or brand story quickly. They work best when the first seconds are clear, the content solves a real audience problem and the caption or video includes a relevant next step. Reels create attention, but the profile, offer and follow-up process convert that attention into enquiries.",
      },
      {
        question: "Can a small business grow on social media without posting every day?",
        answer:
          "Yes. A small business can grow with fewer, better-planned posts supported by stories, community replies, customer proof and occasional paid promotion. Consistency matters, but quality, relevance, positioning and clear calls to action matter more than publishing simply to maintain a daily count.",
      },
      {
        question: "Does Double Trouble Studio manage social media accounts?",
        answer:
          "Yes. DTS can provide social media strategy, content pillars, monthly calendars, campaign concepts, Reels direction, design, captions, short-form scripts, publishing support, paid amplification and reporting. The exact scope depends on the selected platforms and monthly content requirement.",
        href: "/services/pr-media-marketing",
        linkLabel: "Explore social media marketing",
      },
    ],
  },
  {
    id: "seo-google-search",
    eyebrow: "SEO & Google",
    title: "SEO, Google Ranking & Local Search Questions",
    description:
      "Plain-language answers about SEO, keywords, Google visibility, local search and realistic ranking timelines.",
    items: [
      {
        question: "What is SEO and why does a business need it?",
        answer:
          "SEO, or search engine optimisation, improves a website so search engines can understand, crawl and rank its useful pages. Businesses use SEO to appear when potential customers search for services, products or local solutions. It supports long-term visibility, trust and qualified website traffic without paying for every click.",
      },
      {
        question: "How can I rank my website higher on Google?",
        answer:
          "Start with technically sound pages, clear service content, relevant keywords, strong titles and headings, internal links, helpful answers, fast mobile performance and trustworthy business information. Local businesses should also improve their Google Business Profile and reviews. Rankings grow through consistent quality and authority, not keyword repetition or shortcuts.",
      },
      {
        question: "Why is my website not showing on Google?",
        answer:
          "A website may be new, blocked from indexing, missing useful content, technically difficult to crawl or targeting highly competitive terms. It may also lack internal links, local relevance or authority. Check Search Console, indexation, robots rules, canonical tags, page quality and whether the page actually answers the searcher's question.",
      },
      {
        question: "How long does SEO take to work?",
        answer:
          "Most businesses should plan for roughly three to six months before meaningful SEO movement becomes visible, although some changes can be noticed earlier or later. The timeline depends on the website condition, competition, content quality, domain history, local market and consistency of technical and content improvements.",
      },
      {
        question: "What are keywords in SEO?",
        answer:
          "Keywords are the words and phrases people use when searching. Good keyword planning goes beyond adding the same phrase repeatedly. It maps different search intentions—such as learning, comparing, finding a local provider or requesting a quote—to the most relevant page and answer.",
      },
      {
        question: "What is local SEO?",
        answer:
          "Local SEO helps a business appear for searches connected to a city, neighbourhood or service area. It can include location-focused pages, Google Business Profile optimisation, accurate contact information, local reviews, relevant content and internal links. It is especially useful for restaurants, clinics, agencies, stores, venues and service businesses.",
      },
      {
        question: "Can an SEO agency guarantee the number one position on Google?",
        answer:
          "No responsible SEO agency can guarantee a permanent number-one ranking. Search results change according to competition, location, intent, website quality and search-engine updates. A credible SEO plan focuses on technical health, useful content, visibility, qualified traffic, enquiries and long-term improvement.",
      },
      {
        question: "Does Double Trouble Studio provide website SEO services?",
        answer:
          "Yes. DTS can support keyword mapping, technical audits, on-page optimisation, metadata, heading structure, internal linking, schema markup, content recommendations, image SEO, indexation checks, local SEO and search-performance tracking.",
        href: "/services/web-development-marketing",
        linkLabel: "Explore website and SEO services",
      },
    ],
  },
  {
    id: "paid-media-performance-marketing",
    eyebrow: "Paid Media",
    title: "Google Ads, Meta Ads & Lead Generation Questions",
    description:
      "Common questions about ad platforms, budgets, leads, landing pages, tracking and performance marketing.",
    items: [
      {
        question: "What is the difference between Google Ads and Meta Ads?",
        answer:
          "Google Ads often reaches people who are actively searching for a solution, while Meta Ads on Instagram and Facebook can create demand through visual targeting, interests and remarketing. Google can be stronger for high-intent searches; Meta can be effective for discovery, offers and visual brands. Many campaigns use both for different stages.",
      },
      {
        question: "How much should I spend on Google Ads or Meta Ads?",
        answer:
          "The right budget depends on competition, audience size, location, customer value, campaign goal and the amount of data needed for testing. Start with a budget large enough to generate meaningful clicks or enquiries, keep agency fees separate from ad spend and increase investment only after tracking shows what is working.",
      },
      {
        question: "Why are my ads getting clicks but no leads?",
        answer:
          "Clicks without leads usually point to a mismatch between the ad, audience, offer and landing page. Other causes include slow pages, weak trust signals, confusing forms, poor mobile experience, broad targeting or broken tracking. Review the full journey from ad impression to enquiry and sales follow-up.",
      },
      {
        question: "Do I need a landing page for paid advertising?",
        answer:
          "A focused landing page is often better than sending every visitor to a general homepage. It should match the ad message, explain one offer clearly, provide proof, remove distractions and make the next action easy. The page also helps measure conversions accurately.",
      },
      {
        question: "Can paid ads guarantee leads or sales?",
        answer:
          "No. Advertising can create targeted traffic and opportunities, but sales also depend on pricing, offer strength, website experience, demand, competition and follow-up. A responsible campaign uses tracking, testing and optimisation instead of promising a fixed number of results without evidence.",
      },
      {
        question: "Does Double Trouble Studio manage Google Ads and Meta Ads?",
        answer:
          "Yes. DTS can plan and manage Google and Meta campaigns, including strategy, audience or keyword research, account structure, creative recommendations, ad copy, landing-page alignment, conversion tracking, reporting and optimisation. Media spend is normally billed separately from the agency fee.",
        href: "/services/pr-media-marketing",
        linkLabel: "Explore performance marketing",
      },
    ],
  },
  {
    id: "website-development-conversion",
    eyebrow: "Websites",
    title: "Website Development & Conversion Questions",
    description:
      "Practical answers about website cost, timelines, redesigns, mobile performance and turning visitors into enquiries.",
    items: [
      {
        question: "Does every business need a website?",
        answer:
          "Most businesses benefit from a website because it gives customers a stable place to verify the brand, understand services, view proof and contact the company. Social platforms can change, but a website remains an owned digital asset that can support Google visibility, paid campaigns, enquiries and long-term credibility.",
      },
      {
        question: "What makes a business website generate enquiries?",
        answer:
          "A conversion-focused website explains the offer quickly, speaks to the right audience, loads well on mobile, provides proof, answers objections and uses clear calls to action. Strong structure, relevant content, easy navigation, fast forms and accurate tracking help turn visits into measurable enquiries.",
      },
      {
        question: "How much does a professional website cost?",
        answer:
          "Website cost depends on the number of pages, design complexity, content, custom development, integrations, forms, CMS, SEO requirements and timeline. A simple service website and a custom platform require different budgets. A proposal should clearly define pages, features, ownership, support and what is not included.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "Many focused business websites take around two to six weeks when content, feedback and approvals are available on time. Larger platforms, multilingual sites, e-commerce builds, custom integrations or complete rebrands can require a longer phased timeline.",
      },
      {
        question: "Can an old website be redesigned without losing SEO?",
        answer:
          "Yes, when the redesign carefully manages existing URLs, content, metadata, redirects, internal links, analytics and indexation. Removing valuable pages or changing URLs without redirects can cause avoidable losses, so SEO should be considered before the new website is launched.",
      },
      {
        question: "What website development services does DTS provide?",
        answer:
          "DTS provides website strategy, UI and UX design, custom Next.js development, responsive service websites, landing pages, campaign funnels, redesigns, content architecture, enquiry journeys, analytics foundations and SEO-friendly technical structure.",
        href: "/services/web-development-marketing",
        linkLabel: "View website development services",
      },
    ],
  },
  {
    id: "branding-pr-media",
    eyebrow: "Brand & PR",
    title: "Branding, Public Relations & Media Questions",
    description:
      "Answers about brand identity, marketing, PR, press coverage and launch communication.",
    items: [
      {
        question: "What is the difference between branding and marketing?",
        answer:
          "Branding defines what a business stands for, how it looks, sounds and should be remembered. Marketing distributes that message through content, advertising, SEO, PR and campaigns. Strong marketing brings attention, while strong branding helps that attention turn into recognition, trust and preference.",
      },
      {
        question: "What is the difference between PR and advertising?",
        answer:
          "Advertising is paid placement controlled by the brand. PR develops stories, relationships and media opportunities that may earn independent coverage. Advertising offers predictable placement; PR can build credibility and authority. They often work best together as part of one campaign narrative.",
      },
      {
        question: "Does PR guarantee newspaper or online media coverage?",
        answer:
          "No ethical PR agency can guarantee independent editorial coverage. A PR team can improve the story, press material, media targeting, timing and follow-up, but final publication decisions remain with editors, journalists and media platforms.",
      },
      {
        question: "What should a brand prepare before launching?",
        answer:
          "Before launch, a brand should define its audience, positioning, offer, visual identity, website or landing page, social profiles, launch message, content assets, PR angle, paid media plan and enquiry process. Preparing these together creates a more consistent and credible launch.",
      },
      {
        question: "Can DTS manage branding, PR and digital marketing together?",
        answer:
          "Yes. DTS can connect research, positioning, visual identity, brand narrative, press material, media outreach, social content, website communication and paid amplification through one coordinated campaign system.",
        href: "/services/pr-media-marketing",
        linkLabel: "Explore PR and marketing services",
      },
    ],
  },
  {
    id: "events-guests-celebrities",
    eyebrow: "Events & Talent",
    title: "Events, Guest Management & Celebrity Booking",
    description:
      "Useful answers for businesses and planners organising launches, corporate events, weddings and talent-led campaigns.",
    items: [
      {
        question: "What does an event management company do?",
        answer:
          "An event management company plans and coordinates the concept, venue, budget, vendors, production, timelines, guest experience, entertainment, logistics and on-ground execution. The exact role depends on whether the project is a corporate event, launch, conference, wedding, private celebration or public experience.",
      },
      {
        question: "What is guest management at an event?",
        answer:
          "Guest management is the organised handling of attendees before and during an event. It can include invitation support, guest databases, RSVP tracking, communication, registration, check-in, access control, seating assistance, VIP handling, hospitality and attendance reporting.",
        href: "/services/guest-management",
        linkLabel: "Explore guest management",
      },
      {
        question: "When should I hire a guest management agency?",
        answer:
          "Professional guest management is useful when the guest list is large, segmented or high-profile, when access must be controlled or when the host team cannot manage invitations, follow-ups and entry on its own. It is especially valuable for launches, conferences, luxury weddings and celebrity events.",
      },
      {
        question: "How do I book a celebrity for an event or brand campaign?",
        answer:
          "Prepare a brief with the event or campaign objective, date, city, expected role, appearance duration, content deliverables, usage rights and budget. A celebrity management team can then check availability, commercial terms, travel, rider, contract and brand suitability before confirmation.",
        href: "/services/celebrity-management",
        linkLabel: "Explore celebrity management",
      },
      {
        question: "How much does celebrity booking cost?",
        answer:
          "Celebrity fees vary according to the talent, date, city, duration, performance or appearance requirement, campaign usage, exclusivity, travel, accommodation, rider and social media deliverables. Accurate pricing requires a complete brief and availability check.",
      },
      {
        question: "Does DTS manage events and weddings outside Mumbai?",
        answer:
          "Yes. DTS can manage events, weddings, guest operations and talent coordination across major Indian markets. Local teams or trusted partners are coordinated when the event city, venue and production scale require on-ground support.",
        href: "/services/events-weddings",
        linkLabel: "Explore events and weddings",
      },
    ],
  },
  {
    id: "ai-video-vfx",
    eyebrow: "AI Video & VFX",
    title: "AI Video Production, Editing & VFX Questions",
    description:
      "Straight answers about AI video ads, traditional filming, professional editing, CGI-style visuals and delivery formats.",
    items: [
      {
        question: "What is AI video production?",
        answer:
          "AI video production uses artificial-intelligence tools alongside creative direction, scripting, visual planning and professional editing to create video assets. It can support concept visuals, product campaigns, launch teasers, CGI-style ads, social content, website visuals and campaign variations.",
      },
      {
        question: "Can AI video replace traditional filming?",
        answer:
          "Not completely. AI can accelerate concept development and create scenes that may be difficult to film, while real footage remains important for product accuracy, founders, testimonials, events and authentic human moments. The strongest workflow often combines AI visuals, real footage and professional editing.",
      },
      {
        question: "Why is professional editing still needed for AI-generated videos?",
        answer:
          "AI-generated clips are raw assets. Editing creates pacing, story, sound design, colour consistency, typography, captions and platform-ready exports. It also helps correct continuity, remove weak shots and connect separate visuals into one clear campaign message.",
      },
      {
        question: "What AI video and VFX services does DTS provide?",
        answer:
          "DTS creates AI video concepts, AI-generated campaign visuals, CGI-style ads, product films, luxury brand videos, hospitality launch content, event teasers, website hero videos, motion graphics, professional editing and VFX-led campaign assets.",
        href: "/services/ai-video-vfx",
        linkLabel: "Explore AI video and VFX",
      },
    ],
  },
  {
    id: "pricing-process-contact",
    eyebrow: "Process & Pricing",
    title: "Agency Pricing, Timelines & Getting Started",
    description:
      "Practical answers about proposals, retainers, reporting, remote work and beginning a project with DTS.",
    items: [
      {
        question: "How much do Double Trouble Studio services cost?",
        answer:
          "Pricing depends on the selected service, scope, timeline, city, deliverables, content volume, advertising requirements, team involvement and production complexity. DTS provides customised project or monthly retainer proposals rather than one fixed price for every client.",
      },
      {
        question: "Do you offer monthly digital marketing retainers?",
        answer:
          "Yes. Retainers can include social media strategy, content creation, PR, paid media, SEO support, reporting, creative production and ongoing optimisation. DTS also accepts clearly defined one-time branding, website, event, guest management and video projects.",
      },
      {
        question: "What information should I share before asking for a proposal?",
        answer:
          "Share the business or event name, main objective, current challenge, required services, target audience, city, preferred timeline, approximate budget and any existing brand assets, website, social links or references. A clear brief helps the agency recommend a realistic scope.",
      },
      {
        question: "What is the Double Trouble Studio working process?",
        answer:
          "The DTS method follows four stages: Discover, Design, Develop and Deploy. The team studies the goal, audience and competition, creates the strategy and creative system, develops the required assets or platforms and then launches, measures and refines the work.",
      },
      {
        question: "Can I work with Double Trouble Studio remotely?",
        answer:
          "Yes. DTS works with clients across India through scheduled calls, shared project boards, clear approval stages and reporting. On-ground teams and local partners are coordinated separately when an event, production or guest operation requires physical execution.",
      },
      {
        question: "How do I start a project with Double Trouble Studio?",
        answer:
          "Book a consultation and share your goal, required services, city, timeline, approximate budget and current marketing assets. DTS will review the brief, recommend the most practical scope and send a proposal before work begins.",
        href: "/contact",
        linkLabel: "Start a project with DTS",
      },
    ],
  },
];

const allFaqItems = faqCategories.flatMap((category) => category.items);

function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute: "Digital Marketing, SEO, Social Media & Business FAQs | DTS",
  },
  description:
    "Simple answers to everyday digital marketing, SEO, social media, Google Ads, website, branding, PR, event and DTS agency questions in India.",
  keywords: [
    "Double Trouble Studio FAQ",
    "digital marketing agency Mumbai FAQ",
    "social media marketing agency Mumbai",
    "performance marketing agency India",
    "Google Ads management Mumbai",
    "Meta Ads agency India",
    "paid media agency Mumbai",
    "website development company Mumbai",
    "website SEO services India",
    "SEO agency Mumbai",
    "branding agency Mumbai",
    "PR agency Mumbai",
    "guest management company India",
    "celebrity management agency India",
    "event management company Mumbai",
    "AI video production agency India",
  ],
  authors: [{ name: "Double Trouble Studio", url: SITE_URL }],
  creator: "Double Trouble Studio",
  publisher: "Double Trouble Studio",
  alternates: {
    canonical: PAGE_URL,
  },
  category: "Creative and Digital Marketing Agency",
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
  openGraph: {
    title: "Digital Marketing, SEO, Social Media & Business FAQs | DTS",
    description:
      "Everyday answers about digital marketing, SEO, Instagram, Google Ads, Meta Ads, websites, branding, PR, events and DTS services in India.",
    url: PAGE_URL,
    siteName: "Double Trouble Studio",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing, SEO, Social Media & Business FAQs | DTS",
    description:
      "Simple answers about digital marketing, SEO, social media, paid ads, websites, branding, PR, events and DTS agency services.",
  },
};

const pageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Double Trouble Studio",
      alternateName: "DTS",
      url: SITE_URL,
      email: "info@dtsworld.in",
      telephone: "+91 80000 06021",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Plot No. 177, 1st Floor, Aaram Nagar Part 2, Seven Bungalows, J. P. Road, Versova, Andheri West",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400061",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: "Double Trouble Studio",
      alternateName: "DTS",
      publisher: {
        "@id": ORGANIZATION_ID,
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Digital Marketing, SEO, Social Media & Business FAQs | Double Trouble Studio",
      description:
        "Everyday answers about digital marketing, SEO, social media, Google Ads, Meta Ads, website development, branding, PR, events, AI video and Double Trouble Studio services.",
      isPartOf: {
        "@id": WEBSITE_ID,
      },
      about: {
        "@id": ORGANIZATION_ID,
      },
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
      mainEntity: {
        "@id": `${PAGE_URL}#faq`,
      },
      dateModified: LAST_UPDATED,
      inLanguage: "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
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
          name: "Frequently Asked Questions",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  url: PAGE_URL,
  name: "Digital Marketing, SEO, Social Media and Double Trouble Studio FAQs",
  description:
    "Frequently asked everyday questions about digital marketing, SEO, social media, paid media, websites, branding, PR, events, AI video and Double Trouble Studio services.",
  isPartOf: {
    "@id": `${PAGE_URL}#webpage`,
  },
  about: {
    "@id": ORGANIZATION_ID,
  },
  inLanguage: "en-IN",
  mainEntity: allFaqItems.map((item, index) => ({
    "@type": "Question",
    "@id": `${PAGE_URL}#question-${index + 1}`,
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <main className="overflow-hidden bg-[#F7FAFF] text-[#0D2444]">
      <Navbar />

      <script
        id="faq-page-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(pageStructuredData),
        }}
      />

      <script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(faqStructuredData),
        }}
      />

      {/* Hero */}
      <section className="relative isolate px-5 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="absolute left-1/2 top-0 -z-20 h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-[#DDEBFF] blur-3xl" />
        <div className="absolute right-[-100px] top-32 -z-10 h-80 w-80 rounded-full bg-[#BFD7F6] opacity-70 blur-3xl" />
        <div className="absolute left-[-120px] top-72 -z-10 h-80 w-80 rounded-full bg-white opacity-90 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="hero-enter mb-8 flex flex-wrap items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#6288B9]"
          >
            <Link href="/" className="transition hover:text-[#0D2444]">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-[#38506D]">
              FAQ
            </span>
          </nav>

          <div className="hero-enter hero-enter-delay mx-auto max-w-5xl text-center">
            <span className="inline-flex rounded-full border border-[#C9DAF0] bg-white/80 px-5 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-[#315E91] shadow-sm backdrop-blur">
              Business Growth FAQ Hub
            </span>

            <h1
              className="mx-auto mt-7 max-w-5xl text-[46px] font-black leading-[0.96] tracking-[-0.07em] text-[#0D2444] sm:text-6xl lg:text-[82px]"
              style={{
                fontFamily: "New York, ui-serif, Georgia, serif",
              }}
            >
              Frequently Asked
              <span className="block bg-gradient-to-r from-[#0D2444] via-[#456A9E] to-[#6288B9] bg-clip-text text-transparent">
                Questions
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#38506D] sm:text-lg">
              Simple answers to everyday questions about growing a business online—plus clear information about Double Trouble Studio’s digital marketing, social media, SEO, Google Ads, Meta Ads, websites, branding, PR, events and AI video services.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="primary-btn inline-flex items-center justify-center">
                Start A Project
              </Link>
              <a
                href="#faq-categories"
                className="secondary-btn inline-flex items-center justify-center"
              >
                Explore Questions
              </a>
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[#7B8EA5]">
              Last reviewed: <time dateTime={LAST_UPDATED}>6 August 2026</time>
            </p>
          </div>

          {/* Entity summary */}
          <div className="mx-auto mt-14 grid max-w-6xl gap-4 lg:grid-cols-[1.45fr_0.55fr]">
            <div className="glass rounded-[32px] p-7 text-left shadow-xl shadow-[#0D2444]/10 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6288B9]">
                Quick Answer
              </p>
              <h2
                className="mt-3 text-3xl font-black tracking-[-0.045em] text-[#0D2444] sm:text-4xl"
                style={{
                  fontFamily: "New York, ui-serif, Georgia, serif",
                }}
              >
                What is the best way to grow a business online?
              </h2>
              <p className="mt-5 text-[17px] leading-8 text-[#38506D]">
                Most businesses grow online through a connected system: clear positioning, a trustworthy website, useful social content, SEO for long-term discovery, paid ads for faster reach and strong follow-up. Double Trouble Studio brings these areas together through one Mumbai-based growth team serving brands across India.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Brand Strategy",
                  "PR & Media",
                  "Social Media",
                  "Google & Meta Ads",
                  "Web & SEO",
                  "Events & Guest",
                  "AI Video & VFX",
                ].map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-[#DCE7F5] bg-white px-4 py-2 text-xs font-black text-[#315E91]"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["120+", "Brand Projects"],
                ["98%", "Client Satisfaction"],
                ["8+", "Years Experience"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[28px] border border-[#DCE7F5] bg-white p-6 text-center shadow-lg shadow-[#0D2444]/5"
                >
                  <p className="text-3xl font-black tracking-[-0.04em] text-[#0D2444]">
                    {value}
                  </p>
                  <p className="mt-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#6288B9]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category navigation */}
      <section id="faq-categories" className="scroll-mt-28 px-5 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[34px] border border-[#DCE7F5] bg-white p-5 shadow-xl shadow-[#0D2444]/8 sm:p-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6288B9]">
                Browse By Topic
              </p>
              <h2
                className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#0D2444] sm:text-3xl"
                style={{
                  fontFamily: "New York, ui-serif, Georgia, serif",
                }}
              >
                Find the answer you need
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-[#53677F]">
              Browse practical everyday questions and DTS-specific service questions. Every visible answer is also matched in the FAQPage structured data.
            </p>
          </div>

          <div className="no-scrollbar mt-6 flex gap-3 overflow-x-auto pb-1">
            {faqCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="shrink-0 rounded-full border border-[#C9DAF0] bg-[#F7FAFF] px-5 py-3 text-xs font-black text-[#315E91] transition hover:-translate-y-0.5 hover:border-[#315E91] hover:bg-[#EAF2FF]"
              >
                {category.eyebrow}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="px-5 pb-24 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-10">
          {faqCategories.map((category, categoryIndex) => (
            <section
              key={category.id}
              id={category.id}
              aria-labelledby={`${category.id}-title`}
              className="scroll-mt-28 overflow-hidden rounded-[38px] border border-[#DCE7F5] bg-white shadow-xl shadow-[#0D2444]/8"
            >
              <div className="grid gap-7 border-b border-[#E5EEF9] bg-gradient-to-br from-[#F7FAFF] via-white to-[#EAF2FF] p-7 sm:p-9 lg:grid-cols-[0.72fr_1.28fr] lg:p-11">
                <div>
                  <span className="inline-flex rounded-full bg-[#0D2444] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                    {String(categoryIndex + 1).padStart(2, "0")} · {category.eyebrow}
                  </span>
                  <h2
                    id={`${category.id}-title`}
                    className="mt-5 text-3xl font-black leading-tight tracking-[-0.05em] text-[#0D2444] sm:text-4xl"
                    style={{
                      fontFamily: "New York, ui-serif, Georgia, serif",
                    }}
                  >
                    {category.title}
                  </h2>
                </div>

                <p className="self-end text-base leading-8 text-[#53677F]">
                  {category.description}
                </p>
              </div>

              <div className="divide-y divide-[#E5EEF9] px-5 sm:px-8 lg:px-10">
                {category.items.map((item, itemIndex) => (
                  <details
                    key={item.question}
                    className="group py-2"
                    open={categoryIndex === 0 && itemIndex === 0}
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-6 marker:hidden [&::-webkit-details-marker]:hidden">
                      <span className="flex min-w-0 gap-4">
                        <span className="mt-1 text-xs font-black text-[#8AA8CE]">
                          {String(itemIndex + 1).padStart(2, "0")}
                        </span>
                        <span
                          role="heading"
                          aria-level={3}
                          className="text-lg font-black leading-7 tracking-[-0.025em] text-[#0D2444] sm:text-xl"
                        >
                          {item.question}
                        </span>
                      </span>

                      <span
                        aria-hidden="true"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DCE7F5] bg-[#F7FAFF] text-xl font-semibold text-[#315E91] transition duration-300 group-open:rotate-45 group-open:bg-[#0D2444] group-open:text-white"
                      >
                        +
                      </span>
                    </summary>

                    <div className="pb-7 pl-8 pr-2 sm:pl-12">
                      <p className="max-w-4xl text-[16px] leading-8 text-[#38506D]">
                        {item.answer}
                      </p>

                      {item.href && item.linkLabel && (
                        <Link
                          href={item.href}
                          className="mt-5 inline-flex items-center rounded-full bg-[#EAF2FF] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#315E91] transition hover:bg-[#DDEBFF] hover:text-[#0D2444]"
                        >
                          {item.linkLabel} →
                        </Link>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* Contact and local entity section */}
      <section className="px-5 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[42px] border border-[#DCE7F5] bg-white shadow-2xl shadow-[#0D2444]/10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="bg-gradient-to-br from-[#0D2444] via-[#193B63] to-[#6288B9] p-8 text-white sm:p-11 lg:p-14">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#DDE8F7]">
              Still Have A Question?
            </p>
            <h2
              className="mt-4 text-4xl font-black leading-tight tracking-[-0.055em] sm:text-5xl"
              style={{
                fontFamily: "New York, ui-serif, Georgia, serif",
              }}
            >
              Tell us what you are planning.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#DDE8F7]">
              Share your goals, location, timeline and required services. The DTS
              team will review the brief and recommend a practical next step.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[14px] bg-white px-7 py-4 text-sm font-black text-[#0D2444] transition hover:-translate-y-0.5 hover:bg-[#EAF2FF]"
              >
                Discuss Your Project
              </Link>
              <a
                href="tel:+918000006021"
                className="inline-flex items-center justify-center rounded-[14px] border border-white/25 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Call +91 80000 06021
              </a>
            </div>
          </div>

          <div className="p-8 sm:p-11 lg:p-14">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6288B9]">
              Mumbai Office
            </p>
            <h2
              className="mt-3 text-3xl font-black tracking-[-0.045em] text-[#0D2444]"
              style={{
                fontFamily: "New York, ui-serif, Georgia, serif",
              }}
            >
              Contact Double Trouble Studio
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-7 text-[#53677F]">
              <div>
                <p className="font-black text-[#0D2444]">Address</p>
                <address className="mt-1 not-italic">
                  Plot No. 177, 1st Floor, Aaram Nagar Part 2, Seven Bungalows,
                  J. P. Road, Versova, Andheri West, Mumbai 400061, India
                </address>
              </div>

              <div>
                <p className="font-black text-[#0D2444]">Email</p>
                <a
                  href="mailto:info@dtsworld.in"
                  className="mt-1 inline-flex font-bold text-[#315E91] underline decoration-[#BFD7F6] underline-offset-4"
                >
                  info@dtsworld.in
                </a>
              </div>

              <div>
                <p className="font-black text-[#0D2444]">Working Hours</p>
                <p className="mt-1">Monday–Saturday · 10:00 AM–7:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}