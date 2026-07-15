import type { Metadata } from "next";

import AboutCTA from "@/components/About/AboutCta";
import AboutExperience from "@/components/About/AboutExperience";
import AboutFaq from "@/components/About/AboutFaq";
import AboutHero from "@/components/About/AboutHero";
import AboutStory from "@/components/About/AboutStory";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatWeBelieve from "@/components/About/WhatWeBelive";
import OurTeamSection from "@/components/About/OurTeamSection";

export const metadata: Metadata = {
  title: {
    absolute: "About Double Trouble Studio | Creative Agency in Mumbai",
  },

  description:
    "Learn about Double Trouble Studio, a Mumbai-based creative agency specializing in branding, digital marketing, PR, website development, guest management, event marketing, AI video production and VFX across India.",

  applicationName: "Double Trouble Studio",
  creator: "Double Trouble Studio",
  publisher: "Double Trouble Studio",

  alternates: {
    canonical: "https://www.dtsworld.in/about",
  },

  keywords: [
    "About Double Trouble Studio",
    "Creative Agency Mumbai",
    "Branding Agency Mumbai",
    "Digital Marketing Agency Mumbai",
    "PR Agency India",
    "Website Development Company Mumbai",
    "Guest Management Agency",
    "Event Marketing Agency",
    "AI Video Production Studio",
    "VFX Agency India",
    "Luxury Branding Agency",
    "Brand Strategy Agency",
    "Creative Studio India",
  ],

  openGraph: {
    title: "About Double Trouble Studio | Creative Agency in Mumbai",
    description:
      "Discover the philosophy, team and expertise behind Double Trouble Studio. We build cultural brands through branding, PR, digital marketing, website development, AI video production and premium storytelling.",
    url: "https://www.dtsworld.in/about",
    siteName: "Double Trouble Studio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.dtsworld.in/og/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About Double Trouble Studio - Creative Agency in Mumbai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Double Trouble Studio | Creative Agency in Mumbai",
    description:
      "Meet the team behind Double Trouble Studio and discover our approach to branding, digital marketing, PR, website development, AI video production and cultural brand building.",
    images: ["https://www.dtsworld.in/twitter/about-twitter-image.png"],
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

const aboutSchema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "ImageObject",
      "@id": "https://www.dtsworld.in/#logo",

      url: "https://www.dtsworld.in/logo.png",

      contentUrl: "https://www.dtsworld.in/logo.png",

      caption: "Double Trouble Studio Logo",

      inLanguage: "en-IN",
    },

    {
      "@type": "Organization",
      "@id": "https://www.dtsworld.in/#organization",

      name: "Double Trouble Studio",

      legalName: "Double Trouble Studio Pvt. Ltd.",

      alternateName: ["DTS", "DTS World"],

      url: "https://www.dtsworld.in/",

      logo: {
        "@id": "https://www.dtsworld.in/#logo",
      },

      image: {
        "@id": "https://www.dtsworld.in/#logo",
      },

      description:
        "Double Trouble Studio is a Mumbai-based creative agency, branding agency and digital marketing agency building luxury digital experiences, modern storytelling, PR campaigns, website development, AI video production and high-performance brand systems for hospitality, lifestyle, luxury, restaurant and culture-driven brands across India.",

      slogan: "We Build Cultural Brands That Feel Alive",

      telephone: "+918000006021",

      email: "hellodoubletroublestudio@gmail.com",

      address: {
        "@type": "PostalAddress",

        streetAddress:
          "Plot No. 177, 1st Floor, Aaram Nagar Part 2, Seven Bungalows, J. P. Road, Versova, Andheri West",

        addressLocality: "Mumbai",

        addressRegion: "Maharashtra",

        postalCode: "400061",

        addressCountry: "IN",
      },

      contactPoint: {
        "@type": "ContactPoint",

        "@id": "https://www.dtsworld.in/#contact-point",

        contactType: "customer service",

        telephone: "+918000006021",

        email: "hellodoubletroublestudio@gmail.com",

        url: "https://www.dtsworld.in/contact",

        areaServed: {
          "@type": "Country",
          name: "India",
        },

        availableLanguage: ["English", "Hindi"],
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
          name: "Chandigarh",
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
          "@type": "AdministrativeArea",
          name: "Goa",
        },
      ],

      knowsAbout: [
        "Brand Strategy",
        "Brand Identity",
        "Visual Identity",
        "Luxury Brand Positioning",
        "Creative Direction",
        "Digital Marketing",
        "Social Media Marketing",
        "Public Relations",
        "Media Campaigns",
        "Influencer Marketing",
        "Content Strategy",
        "Website Design",
        "Website Development",
        "Search Engine Optimization",
        "Event Marketing",
        "Event Branding",
        "Guest Management",
        "Celebrity Management",
        "AI Video Production",
        "AI Video Advertising",
        "Visual Effects",
        "Premium Digital Storytelling",
      ],

      employee: [
        {
          "@id": "https://www.dtsworld.in/about#ravish-verma",
        },
        {
          "@id": "https://www.dtsworld.in/about#nandini-yadav",
        },
        {
          "@id": "https://www.dtsworld.in/about#ritika-tiwari",
        },
        {
          "@id": "https://www.dtsworld.in/about#simran-salagre",
        },
        {
          "@id": "https://www.dtsworld.in/about#naman-gupta",
        },
        {
          "@id": "https://www.dtsworld.in/about#amitesh-singh",
        },
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://www.dtsworld.in/#website",

      url: "https://www.dtsworld.in/",

      name: "Double Trouble Studio",

      alternateName: ["DTS", "DTS World"],

      description:
        "Double Trouble Studio is a creative agency in Mumbai providing branding, PR, digital marketing, website development, SEO, event marketing, guest management, AI video production and VFX services across India.",

      publisher: {
        "@id": "https://www.dtsworld.in/#organization",
      },

      inLanguage: "en-IN",
    },

    {
      "@type": "AboutPage",
      "@id": "https://www.dtsworld.in/about#webpage",

      url: "https://www.dtsworld.in/about",

      name: "About Double Trouble Studio | Creative Agency in Mumbai",

      headline: "We Build Cultural Brands That Feel Alive",

      description:
        "Learn about Double Trouble Studio, a Mumbai-based creative agency, branding agency, digital marketing agency, PR agency, website development company, guest management agency, event marketing agency and AI video production studio in India.",

      isPartOf: {
        "@id": "https://www.dtsworld.in/#website",
      },

      about: {
        "@id": "https://www.dtsworld.in/#organization",
      },

      mainEntity: {
        "@id": "https://www.dtsworld.in/#organization",
      },

      primaryImageOfPage: {
        "@id": "https://www.dtsworld.in/#logo",
      },

      publisher: {
        "@id": "https://www.dtsworld.in/#organization",
      },

      breadcrumb: {
        "@id": "https://www.dtsworld.in/about#breadcrumb",
      },

      hasPart: [
        {
          "@id": "https://www.dtsworld.in/about#team",
        },
        {
          "@id": "https://www.dtsworld.in/about#faq",
        },
      ],

      audience: {
        "@type": "BusinessAudience",
        "@id": "https://www.dtsworld.in/about#business-audience",

        name:
          "Brands and businesses seeking creative and marketing services",

        audienceType:
          "Hospitality brands, luxury brands, restaurants, cafes, fashion labels, lifestyle companies, wedding planners, event companies, creators, corporate brands, founders and modern startups",

        description:
          "Brands and businesses seeking branding, digital marketing, public relations, website development, SEO, guest management, event marketing, celebrity management, AI video production and VFX services.",
      },

      copyrightYear: 2026,

      copyrightHolder: {
        "@id": "https://www.dtsworld.in/#organization",
      },

      inLanguage: "en-IN",
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dtsworld.in/about#breadcrumb",

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

          name: "About",

          item: "https://www.dtsworld.in/about",
        },
      ],
    },

    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/about#team",

      name: "Double Trouble Studio Team",

      description:
        "Creative, strategic and execution-driven professionals behind the brand experiences, websites, PR campaigns and creative work delivered by Double Trouble Studio.",

      itemListOrder: "https://schema.org/ItemListOrderAscending",

      numberOfItems: 6,

      itemListElement: [
        {
          "@type": "ListItem",

          position: 1,

          item: {
            "@id": "https://www.dtsworld.in/about#ravish-verma",
          },
        },

        {
          "@type": "ListItem",

          position: 2,

          item: {
            "@id": "https://www.dtsworld.in/about#nandini-yadav",
          },
        },

        {
          "@type": "ListItem",

          position: 3,

          item: {
            "@id": "https://www.dtsworld.in/about#ritika-tiwari",
          },
        },

        {
          "@type": "ListItem",

          position: 4,

          item: {
            "@id": "https://www.dtsworld.in/about#simran-salagre",
          },
        },

        {
          "@type": "ListItem",

          position: 5,

          item: {
            "@id": "https://www.dtsworld.in/about#naman-gupta",
          },
        },

        {
          "@type": "ListItem",

          position: 6,

          item: {
            "@id": "https://www.dtsworld.in/about#amitesh-singh",
          },
        },
      ],
    },

    {
      "@type": "Person",
      "@id": "https://www.dtsworld.in/about#ravish-verma",

      name: "Ravish Verma",

      jobTitle: "SME — SEO",

      worksFor: {
        "@id": "https://www.dtsworld.in/#organization",
      },
    },

    {
      "@type": "Person",
      "@id": "https://www.dtsworld.in/about#nandini-yadav",

      name: "Nandini Yadav",

      jobTitle: "Web Developer",

      worksFor: {
        "@id": "https://www.dtsworld.in/#organization",
      },
    },

    {
      "@type": "Person",
      "@id": "https://www.dtsworld.in/about#ritika-tiwari",

      name: "Ritika Tiwari",

      jobTitle: "Web Developer",

      worksFor: {
        "@id": "https://www.dtsworld.in/#organization",
      },
    },

    {
      "@type": "Person",
      "@id": "https://www.dtsworld.in/about#simran-salagre",

      name: "Simran Salagre",

      jobTitle: "Head — PR & Communication",

      worksFor: {
        "@id": "https://www.dtsworld.in/#organization",
      },
    },

    {
      "@type": "Person",
      "@id": "https://www.dtsworld.in/about#naman-gupta",

      name: "Naman Gupta",

      jobTitle: "Video Editor",

      worksFor: {
        "@id": "https://www.dtsworld.in/#organization",
      },
    },

    {
      "@type": "Person",
      "@id": "https://www.dtsworld.in/about#amitesh-singh",

      name: "Amitesh Singh",

      jobTitle: "AI Visual Content Creator",

      worksFor: {
        "@id": "https://www.dtsworld.in/#organization",
      },
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.dtsworld.in/about#faq",

      url: "https://www.dtsworld.in/about#faq",

      name: "Frequently Asked Questions About Double Trouble Studio",

      description:
        "Answers to common questions about Double Trouble Studio, its creative process, brand strategy, services, premium positioning and remote collaboration.",

      isPartOf: {
        "@id": "https://www.dtsworld.in/about#webpage",
      },

      about: {
        "@id": "https://www.dtsworld.in/#organization",
      },

      publisher: {
        "@id": "https://www.dtsworld.in/#organization",
      },

      inLanguage: "en-IN",

      mainEntity: [
        {
          "@type": "Question",

          "@id": "https://www.dtsworld.in/about#faq-difference",

          name:
            "What makes Double Trouble Studio different from other agencies?",

          acceptedAnswer: {
            "@type": "Answer",

            "@id":
              "https://www.dtsworld.in/about#faq-difference-answer",

            text:
              "Double Trouble Studio combines brand strategy, storytelling, premium visual direction, PR, digital marketing and website thinking to build brands that feel culturally relevant, emotionally engaging and intentionally designed for long-term growth.",
          },
        },

        {
          "@type": "Question",

          "@id": "https://www.dtsworld.in/about#faq-brands",

          name: "What kind of brands do you usually work with?",

          acceptedAnswer: {
            "@type": "Answer",

            "@id": "https://www.dtsworld.in/about#faq-brands-answer",

            text:
              "Double Trouble Studio works with hospitality brands, luxury brands, restaurants, cafes, wedding companies, event brands, lifestyle startups, fashion labels, creators, influencers, corporate brands, founders and modern businesses across India.",
          },
        },

        {
          "@type": "Question",

          "@id": "https://www.dtsworld.in/about#faq-philosophy",

          name: "What is the philosophy behind your creative process?",

          acceptedAnswer: {
            "@type": "Answer",

            "@id":
              "https://www.dtsworld.in/about#faq-philosophy-answer",

            text:
              "Our philosophy is built around clarity over chaos — where every creative decision is guided by brand strategy, audience understanding, market positioning, timeless aesthetics, emotional storytelling and intentional execution.",
          },
        },

        {
          "@type": "Question",

          "@id": "https://www.dtsworld.in/about#faq-strategy",

          name: "Do you focus only on aesthetics or strategy as well?",

          acceptedAnswer: {
            "@type": "Answer",

            "@id":
              "https://www.dtsworld.in/about#faq-strategy-answer",

            text:
              "We believe strong brands need both. Along with premium visuals, we focus heavily on brand positioning, storytelling, perception, PR communication, website structure, digital marketing and experience systems that support real business growth.",
          },
        },

        {
          "@type": "Question",

          "@id": "https://www.dtsworld.in/about#faq-remote",

          name: "Can Double Trouble Studio work with brands remotely?",

          acceptedAnswer: {
            "@type": "Answer",

            "@id":
              "https://www.dtsworld.in/about#faq-remote-answer",

            text:
              "Yes. We collaborate with clients across Mumbai, Delhi, Chandigarh, Bangalore, Hyderabad, Pune, Ahmedabad, Goa, India and internationally through structured workflows, creative planning sessions and smooth remote communication systems.",
          },
        },
      ],
    },
  ],
};

export default function About() {
  return (
    <>
      <script
        id="about-structured-data"
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema).replace(/</g, "\\u003c"),
        }}
      />

      <main>
        <Navbar />
        <AboutHero />
        <AboutStory />
        <AboutExperience />
        <WhatWeBelieve />
        <OurTeamSection />
        <AboutFaq />
        <AboutCTA />
        <Footer />
      </main>
    </>
  );
}