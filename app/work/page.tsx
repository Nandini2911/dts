import AboutCta from "@/components/About/AboutCta";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ClientLogo from "@/components/Work/ClientLogo";
import FeaturedWork from "@/components/Work/FeaturedWork";
import HeroWork from "@/components/Work/HeroWork";
import Testmonial from "@/components/Work/Testmonial";
import WorkFaq from "@/components/Work/WorkFaq";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Our Work & Projects | Double Trouble Studio",
  },

  description:
    "Explore branding, website design, SEO, PR, social media marketing, AI video production and creative projects delivered by Double Trouble Studio for luxury, hospitality, restaurant and lifestyle brands across India.",

  applicationName: "Double Trouble Studio",
  creator: "Double Trouble Studio",
  publisher: "Double Trouble Studio",

  alternates: {
    canonical: "https://www.dtsworld.in/work",
  },

  keywords: [
    "Double Trouble Studio Projects",
    "Creative Agency Portfolio",
    "Branding Projects India",
    "Website Design Portfolio",
    "SEO Case Studies",
    "Digital Marketing Projects",
    "PR Campaign Portfolio",
    "Luxury Branding Agency",
    "AI Video Production Projects",
    "Creative Work Mumbai",
    "Hospitality Branding Projects",
    "Restaurant Marketing Projects",
    "Social Media Campaigns India",
  ],

  openGraph: {
    title: "Our Work & Projects | Double Trouble Studio",
    description:
      "Discover premium branding, website design, SEO, PR, social media marketing and AI-powered creative projects crafted for ambitious brands across India.",
    url: "https://www.dtsworld.in/work",
    siteName: "Double Trouble Studio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.dtsworld.in/og/work-og.png",
        width: 1200,
        height: 630,
        alt: "Double Trouble Studio Portfolio & Creative Projects",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Work & Projects | Double Trouble Studio",
    description:
      "Explore branding, website design, SEO, PR, social media marketing and AI video production projects delivered for modern brands.",
    images: ["https://www.dtsworld.in/twitter/work-twitter.png"],
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
const PAGE_URL = "https://www.dtsworld.in/work";

const ORGANIZATION_ID =
  "https://www.dtsworld.in/#organization";

const WEBSITE_ID =
  "https://www.dtsworld.in/#website";

const LOGO_ID =
  "https://www.dtsworld.in/#logo";

const PAGE_ID =
  `${PAGE_URL}#webpage`;

const PRIMARY_IMAGE_ID =
  `${PAGE_URL}#primaryimage`;

const BREADCRUMB_ID =
  `${PAGE_URL}#breadcrumb`;

const PROJECTS_ID =
  `${PAGE_URL}#projects`;

const FAQ_ID =
  `${PAGE_URL}#faq`;

const schemaContext =
  "https://schema.org";

const projectData = [
  {
    slug: "rnk-rentals",
    name: "RNK Rentals",
    headline:
      "RNK Rentals Luxury Automotive Digital Transformation",
    description:
      "A premium digital transformation for RNK Rentals focused on luxury website design, SEO optimization and strategic social media management designed to strengthen digital visibility and customer perception.",
    genre:
      "Creative Agency Case Study",
    keywords: [
      "Website Design",
      "SEO",
      "Social Media Marketing",
      "Luxury Automotive Branding",
      "Digital Transformation",
    ],
    externalUrl:
      "https://www.rnk.com/",
  },

  {
    slug:
      "all-india-police-golf-tournament",
    name:
      "All India Police Golf Tournament",
    headline:
      "All India Police Golf Tournament Event Branding",
    description:
      "Creative support and premium event branding designed for the prestigious All India Police Golf Tournament, focused on elevated visuals and modern event presentation.",
    genre:
      "Event Branding Case Study",
    keywords: [
      "Event Branding",
      "Creative Support",
      "Digital Assets",
      "Sports Event Branding",
      "Event Production",
    ],
    externalUrl:
      PAGE_URL,
  },

  {
    slug:
      "india-today",
    name:
      "India Today",
    headline:
      "India Today Video Editing and Creative Production",
    description:
      "High-impact video editing and premium creative assets developed for India Today to enhance digital storytelling and audience engagement across media platforms.",
    genre:
      "Media Creative Production Case Study",
    keywords: [
      "Video Editing",
      "Creative Production",
      "Digital Storytelling",
      "Media Campaigns",
      "Creative Assets",
    ],
    externalUrl:
      "https://www.instagram.com/indiatoday/",
  },

  {
    slug:
      "shruti-chadha",
    name:
      "Shruti Chadha",
    headline:
      "Shruti Chadha Personal Brand Website and SEO",
    description:
      "Custom website design and SEO strategy created to improve online visibility, strengthen digital presence and elevate personal brand positioning.",
    genre:
      "Personal Branding Case Study",
    keywords: [
      "Website Design",
      "SEO Optimization",
      "Personal Branding",
      "Digital Presence",
    ],
    externalUrl:
      "https://www.shrutichadha.com/",
  },

  {
    slug:
      "brownie-point",
    name:
      "Brownie Point",
    headline:
      "Brownie Point Social Media and Content Strategy",
    description:
      "Social media management and content direction focused on creating stronger engagement, aesthetic consistency and a modern digital presence for the food and hospitality brand.",
    genre:
      "Social Media Marketing Case Study",
    keywords: [
      "Social Media Management",
      "Content Strategy",
      "Food Brand Marketing",
      "Hospitality Marketing",
      "Digital Branding",
    ],
    externalUrl:
      "https://www.instagram.com/browniepointindia/?hl=en",
  },

  {
    slug:
      "bharat-reshma",
    name:
      "Bharat Reshma",
    headline:
      "Bharat Reshma AI Video and Visual Storytelling Campaign",
    description:
      "AI-generated cinematic visuals and modern storytelling campaigns developed to create high-impact digital content and premium audience engagement.",
    genre:
      "AI Creative Campaign Case Study",
    keywords: [
      "AI Video",
      "Visual Storytelling",
      "VFX",
      "AI Creative Campaign",
      "Cinematic Visuals",
    ],
    externalUrl:
      "https://www.instagram.com/bharat_reshma/?hl=en",
  },

  {
    slug:
      "xiimba",
    name:
      "Xiimba.com",
    headline:
      "Xiimba.com Digital Platform Website Development",
    description:
      "A modern website experience designed with clean UI, responsive systems and performance-focused digital architecture for stronger user engagement.",
    genre:
      "Website Development Case Study",
    keywords: [
      "Website Design",
      "Website Development",
      "UI Design",
      "Responsive Development",
      "Digital Platform",
    ],
    externalUrl:
      "https://www.xiimba.com/",
  },

  {
    slug:
      "allpeople",
    name:
      "AllPeople",
    headline:
      "AllPeople Beauty and E-commerce Website Experience",
    description:
      "An e-commerce-focused website experience developed for skincare, beauty and self-care products to improve product discovery and customer experience.",
    genre:
      "E-commerce Website Case Study",
    keywords: [
      "Website Design",
      "E-commerce",
      "Product Experience",
      "Beauty Brand Website",
      "User Experience",
    ],
    externalUrl:
      "https://apworld.in/",
  },

  {
    slug:
      "butter-chicken",
    name:
      "Butter Chicken",
    headline:
      "Butter Chicken Restaurant Social Media Marketing",
    description:
      "Social media campaigns and content strategy designed to increase restaurant visibility, customer engagement and modern food brand perception.",
    genre:
      "Restaurant Marketing Case Study",
    keywords: [
      "Social Media Marketing",
      "Content Creation",
      "Restaurant Marketing",
      "Food Brand Marketing",
      "Local Digital Marketing",
    ],
    externalUrl:
      "https://www.instagram.com/butterchickenfactory/?hl=en",
  },

  {
    slug:
      "vow-story",
    name:
      "Vow Story",
    headline:
      "Vow Story Luxury Wedding Brand Creative Direction",
    description:
      "Creative storytelling and social media direction developed for a modern wedding planning brand focused on luxury experiences and emotional visual identity.",
    genre:
      "Luxury Wedding Branding Case Study",
    keywords: [
      "Branding",
      "Social Media",
      "Creative Direction",
      "Luxury Wedding Branding",
      "Visual Storytelling",
    ],
    externalUrl:
      "https://www.instagram.com/vowstory.co/",
  },
];

const faqs = [
  {
    question:
      "What services does Double Trouble Studio offer?",
    answer:
      "We specialize in branding, website design, social media management, PR, digital campaigns, creative direction and premium visual identity systems tailored for modern brands.",
  },

  {
    question:
      "Do you work with startups and small businesses?",
    answer:
      "Yes. We work with modern startups, growing businesses and established brands looking to elevate their digital presence, customer perception and premium positioning.",
  },

  {
    question:
      "How long does a branding or website project take?",
    answer:
      "Project timelines depend on the scope, but most branding and website projects typically take between 2–6 weeks including strategy, design, development and revisions.",
  },

  {
    question:
      "Do you provide social media content creation?",
    answer:
      "Absolutely. We create premium social media strategies, visual content systems, reels direction, creative campaigns and high-converting digital assets for modern brands.",
  },

  {
    question:
      "Can we work together remotely?",
    answer:
      "Yes. We work with clients across India and internationally through smooth remote collaboration, organized workflows and structured communication systems.",
  },

  {
    question:
      "Do you create SEO-optimized websites?",
    answer:
      "Yes. Every website is built with SEO-focused structure, optimized performance, responsive systems and modern user experience to improve online visibility and search rankings.",
  },

  {
    question:
      "Can you manage social media monthly?",
    answer:
      "Absolutely. We provide monthly social media management including strategy, content creation, reels direction, posting systems, creative assets and audience engagement support.",
  },

  {
    question:
      "Do you work with restaurants and hospitality brands?",
    answer:
      "Yes. Hospitality, restaurants, cafés, luxury dining brands and lifestyle businesses are one of our strongest creative categories with a focus on premium digital experiences and modern brand storytelling.",
  },

  {
    question:
      "Do you provide AI video campaigns?",
    answer:
      "Yes. We create AI-powered cinematic campaigns, visual storytelling content, AI video production and modern VFX experiences designed for high-impact digital engagement.",
  },

  {
    question:
      "Can Double Trouble Studio work remotely across India?",
    answer:
      "Absolutely. We collaborate remotely with brands across India through streamlined communication, online project management and efficient digital workflows.",
  },
];

// --------------------------------------------------
// IMAGES
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
    "https://www.dtsworld.in/og/work-og.png",

  contentUrl:
    "https://www.dtsworld.in/og/work-og.png",

  width:
    1200,

  height:
    630,

  caption:
    "Double Trouble Studio Portfolio and Creative Projects",

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
    "Double Trouble Studio is a Mumbai-based branding, website design, public relations, digital marketing, event marketing, guest management and AI video production agency helping modern businesses grow through strategy, storytelling and performance-driven creative experiences.",

  slogan:
    "Creative Agency for Brands, Events and Digital Growth",

  telephone:
    "+918000006021",

  email:
    "hellodoubletroublestudio@gmail.com",

  priceRange:
    "Custom project pricing",

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
        "Delhi",
    },

    {
      "@type":
        "City",
      name:
        "Chandigarh",
    },

    {
      "@type":
        "City",
      name:
        "Bengaluru",
      alternateName:
        "Bangalore",
    },

    {
      "@type":
        "City",
      name:
        "Hyderabad",
    },

    {
      "@type":
        "City",
      name:
        "Pune",
    },

    {
      "@type":
        "City",
      name:
        "Ahmedabad",
    },

    {
      "@type":
        "AdministrativeArea",
      name:
        "Goa",
    },
  ],

  knowsAbout: [
    "Brand Strategy",
    "Brand Identity",
    "Luxury Brand Positioning",
    "Creative Direction",
    "Website Design",
    "Website Development",
    "Next.js Website Development",
    "Search Engine Optimization",
    "Technical SEO",
    "Digital Marketing",
    "Social Media Marketing",
    "Public Relations",
    "Media Campaigns",
    "Content Strategy",
    "Hospitality Marketing",
    "Restaurant Marketing",
    "Event Branding",
    "Guest Management",
    "Celebrity Management",
    "AI Video Production",
    "AI Advertising",
    "Visual Effects",
    "Digital Storytelling",
  ],
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
    "Double Trouble Studio is a creative agency in Mumbai providing branding, website design, PR, digital marketing, SEO, event marketing, AI video production and VFX services across India.",

  publisher: {
    "@id":
      ORGANIZATION_ID,
  },

  inLanguage:
    "en-IN",
};

// --------------------------------------------------
// WORK / COLLECTION PAGE
// --------------------------------------------------

const collectionPageSchema = {
  "@context":
    schemaContext,

  "@type":
    "CollectionPage",

  "@id":
    PAGE_ID,

  url:
    PAGE_URL,

  name:
    "Double Trouble Studio Work | Branding, Website Design and Digital Marketing Projects",

  headline:
    "Luxury Branding, Website Design & Digital Marketing Projects",

  description:
    "Explore premium branding, website design, PR campaigns, AI content and digital marketing projects created by Double Trouble Studio for hospitality, luxury, restaurant, automotive, media, beauty and lifestyle brands across India.",

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
      PROJECTS_ID,
  },

  publisher: {
    "@id":
      ORGANIZATION_ID,
  },

  creator: {
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

  // FAQPage is CreativeWork-based, so it is a valid hasPart target.
  hasPart: [
    {
      "@id":
        FAQ_ID,
    },
  ],

  // ItemList is NOT a valid hasPart target.
  // Keep projects connected through mainEntity + mentions.
  mentions: [
    {
      "@id":
        PROJECTS_ID,
    },
  ],

  audience: {
    "@type":
      "BusinessAudience",

    name:
      "Brands and businesses exploring Double Trouble Studio's creative work",

    audienceType:
      "Hospitality brands, luxury brands, restaurants, lifestyle businesses, media companies, automotive brands, ecommerce brands, founders and organizations seeking branding, websites, digital marketing, PR, social media and AI creative services",
  },

  significantLink: [
    SITE_URL,
    "https://www.dtsworld.in/about",
    "https://www.dtsworld.in/services",
    "https://www.dtsworld.in/blog",
    "https://www.dtsworld.in/contact",
    "https://www.dtsworld.in/services/web-development-marketing",
    "https://www.dtsworld.in/services/pr-media-marketing",
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
        "Work",

      item:
        PAGE_URL,
    },
  ],
};

// --------------------------------------------------
// PROJECT COLLECTION
// --------------------------------------------------

const projectsSchema = {
  "@context":
    schemaContext,

  "@type":
    "ItemList",

  "@id":
    PROJECTS_ID,

  url:
    `${PAGE_URL}#projects`,

  name:
    "Selected Creative Projects by Double Trouble Studio",

  description:
    "A curated collection of premium digital experiences, branding systems, website projects, AI campaigns and modern marketing work designed for ambitious brands.",

  itemListOrder:
    "https://schema.org/ItemListOrderAscending",

  numberOfItems:
    projectData.length,

  itemListElement:
    projectData.map(
      (project, index) => ({
        "@type":
          "ListItem",

        position:
          index + 1,

        item: {
          "@id":
            `${PAGE_URL}#${project.slug}`,
        },
      }),
    ),
};

// --------------------------------------------------
// INDIVIDUAL CREATIVE WORK PROJECTS
// --------------------------------------------------

const projectSchemas =
  projectData.map(
    (project) => ({
      "@context":
        schemaContext,

      "@type":
        "CreativeWork",

      "@id":
        `${PAGE_URL}#${project.slug}`,

      name:
        project.name,

      headline:
        project.headline,

      description:
        project.description,

      genre:
        project.genre,

      keywords:
        project.keywords,

      url:
        project.externalUrl,

      creator: {
        "@id":
          ORGANIZATION_ID,
      },

      publisher: {
        "@id":
          ORGANIZATION_ID,
      },

      isPartOf: {
        "@id":
          PAGE_ID,
      },

      mainEntityOfPage: {
        "@id":
          PAGE_ID,
      },

      inLanguage:
        "en-IN",
    }),
  );

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
    "Frequently Asked Questions About Double Trouble Studio Projects",

  description:
    "Answers to common questions about Double Trouble Studio services, creative projects, website development, SEO, social media management, hospitality marketing, AI video production and remote collaboration.",

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

// Separate blocks allow validators to surface each major
// entity independently, while stable @id references keep
// everything connected as one semantic graph.
const structuredDataBlocks = [
  logoSchema,
  primaryImageSchema,
  organizationSchema,
  websiteSchema,
  collectionPageSchema,
  breadcrumbSchema,
  projectsSchema,
  ...projectSchemas,
  faqSchema,
];

export default function Work() {
  return (
    <>
      {structuredDataBlocks.map(
        (schema, index) => (
          <script
            key={`work-schema-${index}`}
            id={`work-structured-data-${index + 1}`}
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
        <HeroWork />
        <FeaturedWork />
        <ClientLogo />
        <Testmonial />
        <WorkFaq />
        <AboutCta />
        <Footer />
      </main>
    </>
  );
}