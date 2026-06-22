import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import AboutStudio from "@/components/Home/AboutSection";
import WhyStudio from "@/components/Home/WhyStudio";
import ServicesSection from "@/components/Home/ServiceSection";
import StudioMethod from "@/components/Home/StudioMethode";
import FeaturedWork from "@/components/Home/FeaturedWork";
import StudioDNA from "@/components/Home/StudiaDna";
import PromiseSection from "@/components/Home/PromiseSection";
import IndustriesSection from "@/components/Home/IndustriesSection";
import FAQSection from "@/components/Home/HomeFaq";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "Creative Digital Agency in Mumbai | Double Trouble Studio",
  },

  description:
    "Double Trouble Studio is a Mumbai creative agency for branding, PR, digital marketing, websites, SEO, events, guest management, AI video and VFX.",

  applicationName: "Double Trouble Studio",
  creator: "Double Trouble Studio",
  publisher: "Double Trouble Studio",

  alternates: {
    canonical: "https://www.dtsworld.in/",
  },

  openGraph: {
    title: "Creative Digital Agency in Mumbai | Double Trouble Studio",
    description:
      "Build a premium brand presence with branding, PR, digital marketing, websites, SEO, events, guest management, AI video production and VFX.",
    url: "https://www.dtsworld.in/",
    siteName: "Double Trouble Studio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.dtsworld.in/og/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "Double Trouble Studio creative digital agency in Mumbai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Creative Digital Agency in Mumbai | Double Trouble Studio",
    description:
      "Branding, PR, digital marketing, websites, SEO, events, guest management, AI video production and VFX for modern brands.",
    images: ["https://www.dtsworld.in/twitter/home-twitter.jpg"],
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

export default function Home() {
  return (
    <>
<script
  id="home-json-ld"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://www.dtsworld.in/#business",

          name: "Double Trouble Studio",
          legalName: "Double Trouble Studio Pvt. Ltd.",
          alternateName: "DTS World",

          url: "https://www.dtsworld.in/",

          description:
            "Double Trouble Studio is a Mumbai-based creative and digital marketing agency in India offering branding, public relations, social media marketing, event management, guest management, celebrity management, website development, SEO, AI video production and VFX services.",

          slogan:
            "Creative Agency For Brands, Events & Digital Growth",

          keywords:
            "digital marketing agency, creative agency, branding agency, PR agency, event management company, guest management agency, website development company, SEO agency, AI video production studio, VFX studio",

          mainEntityOfPage: {
            "@id": "https://www.dtsworld.in/#webpage",
          },

          logo: {
            "@id": "https://www.dtsworld.in/#logo",
          },

          image: {
            "@id": "https://www.dtsworld.in/#primary-image",
          },

          email: "hellodoubletroublestudio@gmail.com",
          telephone: "+918000006021",

          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Plot No. 177, 1st Floor, Aaram Nagar Part 2, Seven Bungalows, J. P. Road, Versova, Andheri West",
            addressLocality: "Mumbai",
            addressRegion: "Maharashtra",
            postalCode: "400061",
            addressCountry: "IN",
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
              "@type": "AdministrativeArea",
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

          contactPoint: {
            "@type": "ContactPoint",
            contactType: "sales and customer service",
            telephone: "+918000006021",
            email: "hellodoubletroublestudio@gmail.com",
            url: "https://www.dtsworld.in/contact",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },

          knowsAbout: [
            "Digital Marketing",
            "Social Media Marketing",
            "Performance Marketing",
            "Content Marketing",
            "Influencer Marketing",
            "Brand Strategy",
            "Brand Identity",
            "Luxury Brand Positioning",
            "Public Relations",
            "Media Relations",
            "Creative Direction",
            "Website Design",
            "Website Development",
            "Next.js Development",
            "Search Engine Optimization",
            "Landing Page Development",
            "UI and UX Design",
            "Event Management",
            "Wedding Management",
            "Guest Management",
            "Celebrity Management",
            "AI Video Production",
            "AI Advertising",
            "Product Visualisation",
            "Video Editing",
            "Visual Effects",
            "VFX",
          ],

          hasOfferCatalog: {
            "@id": "https://www.dtsworld.in/#service-catalog",
          },
        },

        {
          "@type": "ImageObject",
          "@id": "https://www.dtsworld.in/#logo",

          name: "Double Trouble Studio logo",
          caption: "Double Trouble Studio logo",

          url: "https://www.dtsworld.in/logo.png",
          contentUrl: "https://www.dtsworld.in/logo.png",

          width: 512,
          height: 512,

          encodingFormat: "image/png",
          inLanguage: "en-IN",
        },

        {
          "@type": "ImageObject",
          "@id": "https://www.dtsworld.in/#primary-image",

          name:
            "Double Trouble Studio creative digital marketing agency in Mumbai",

          caption:
            "Double Trouble Studio creative and digital marketing agency in Mumbai, India",

          url: "https://www.dtsworld.in/og/home-og.jpg",
          contentUrl: "https://www.dtsworld.in/og/home-og.jpg",

          width: 1200,
          height: 630,

          encodingFormat: "image/jpeg",
          representativeOfPage: true,
          inLanguage: "en-IN",
        },

        {
          "@type": "WebSite",
          "@id": "https://www.dtsworld.in/#website",

          url: "https://www.dtsworld.in/",
          name: "Double Trouble Studio",
          alternateName: "DTS World",

          description:
            "Official website of Double Trouble Studio, a creative and digital marketing agency in Mumbai providing branding, PR, social media marketing, events, guest management, website development, SEO, AI video production and VFX services across India.",

          publisher: {
            "@id": "https://www.dtsworld.in/#business",
          },

          inLanguage: "en-IN",
        },

        {
          "@type": "WebPage",
          "@id": "https://www.dtsworld.in/#webpage",

          url: "https://www.dtsworld.in/",

          name:
            "Creative Digital Agency in Mumbai | Double Trouble Studio",

          headline:
            "Creative Agency For Brands, Events & Digital Growth",

          description:
            "Double Trouble Studio is a creative digital marketing agency in India offering branding, PR, event management, guest management, social media marketing, website development, SEO, AI video production and VFX services.",

          isPartOf: {
            "@id": "https://www.dtsworld.in/#website",
          },

          about: {
            "@id": "https://www.dtsworld.in/#business",
          },

          primaryImageOfPage: {
            "@id": "https://www.dtsworld.in/#primary-image",
          },

          hasPart: {
            "@id": "https://www.dtsworld.in/#service-catalog",
          },

          mentions: [
            {
              "@id":
                "https://www.dtsworld.in/services/guest-management/#service",
            },
            {
              "@id":
                "https://www.dtsworld.in/services/celebrity-management/#service",
            },
            {
              "@id":
                "https://www.dtsworld.in/services/events-weddings/#service",
            },
            {
              "@id":
                "https://www.dtsworld.in/services/pr-media-digital-marketing/#service",
            },
            {
              "@id":
                "https://www.dtsworld.in/services/web-development-marketing/#service",
            },
            {
              "@id":
                "https://www.dtsworld.in/services/ai-video-vfx/#service",
            },
          ],

          inLanguage: "en-IN",
        },

        {
          "@type": "OfferCatalog",
          "@id": "https://www.dtsworld.in/#service-catalog",

          name:
            "Double Trouble Studio Creative and Digital Marketing Services",

          description:
            "Branding, digital marketing, PR, guest management, celebrity management, event management, website development, SEO, AI video production and VFX services offered by Double Trouble Studio.",

          numberOfItems: 6,

          itemListElement: [
            {
              "@type": "Offer",
              "@id":
                "https://www.dtsworld.in/services/guest-management/#offer",

              url:
                "https://www.dtsworld.in/services/guest-management",

              itemOffered: {
                "@id":
                  "https://www.dtsworld.in/services/guest-management/#service",
              },
            },
            {
              "@type": "Offer",
              "@id":
                "https://www.dtsworld.in/services/celebrity-management/#offer",

              url:
                "https://www.dtsworld.in/services/celebrity-management",

              itemOffered: {
                "@id":
                  "https://www.dtsworld.in/services/celebrity-management/#service",
              },
            },
            {
              "@type": "Offer",
              "@id":
                "https://www.dtsworld.in/services/events-weddings/#offer",

              url:
                "https://www.dtsworld.in/services/events-weddings",

              itemOffered: {
                "@id":
                  "https://www.dtsworld.in/services/events-weddings/#service",
              },
            },
            {
              "@type": "Offer",
              "@id":
                "https://www.dtsworld.in/services/pr-media-digital-marketing/#offer",

              url:
                "https://www.dtsworld.in/services/pr-media-digital-marketing",

              itemOffered: {
                "@id":
                  "https://www.dtsworld.in/services/pr-media-digital-marketing/#service",
              },
            },
            {
              "@type": "Offer",
              "@id":
                "https://www.dtsworld.in/services/web-development-marketing/#offer",

              url:
                "https://www.dtsworld.in/services/web-development-marketing",

              itemOffered: {
                "@id":
                  "https://www.dtsworld.in/services/web-development-marketing/#service",
              },
            },
            {
              "@type": "Offer",
              "@id":
                "https://www.dtsworld.in/services/ai-video-vfx/#offer",

              url:
                "https://www.dtsworld.in/services/ai-video-vfx",

              itemOffered: {
                "@id":
                  "https://www.dtsworld.in/services/ai-video-vfx/#service",
              },
            },
          ],
        },

        {
          "@type": "Service",
          "@id":
            "https://www.dtsworld.in/services/guest-management/#service",

          name: "Guest Management Services",

          serviceType:
            "Wedding, corporate event and luxury event guest management",

          url:
            "https://www.dtsworld.in/services/guest-management",

          description:
            "Premium guest management services for weddings, corporate events, luxury launches, celebrity events and private gatherings, including RSVP tracking, VIP segmentation, guest check-in, access control and on-ground coordination.",

          provider: {
            "@id": "https://www.dtsworld.in/#business",
          },

          areaServed: {
            "@type": "Country",
            name: "India",
          },
        },

        {
          "@type": "Service",
          "@id":
            "https://www.dtsworld.in/services/celebrity-management/#service",

          name: "Celebrity Management Services",

          serviceType:
            "Celebrity management, talent coordination and influencer collaborations",

          url:
            "https://www.dtsworld.in/services/celebrity-management",

          description:
            "Celebrity management and talent coordination services for brand campaigns, events, weddings, product launches, appearances and influencer collaborations, including talent sourcing, briefing, logistics and coordination.",

          provider: {
            "@id": "https://www.dtsworld.in/#business",
          },

          areaServed: {
            "@type": "Country",
            name: "India",
          },
        },

        {
          "@type": "Service",
          "@id":
            "https://www.dtsworld.in/services/events-weddings/#service",

          name: "Event and Wedding Management Services",

          serviceType:
            "Luxury event management and wedding planning",

          url:
            "https://www.dtsworld.in/services/events-weddings",

          description:
            "Luxury event management and wedding planning services covering creative concepts, event production, vendor coordination, guest experience, entertainment, logistics and show-flow execution.",

          provider: {
            "@id": "https://www.dtsworld.in/#business",
          },

          areaServed: {
            "@type": "Country",
            name: "India",
          },
        },

        {
          "@type": "Service",
          "@id":
            "https://www.dtsworld.in/services/pr-media-digital-marketing/#service",

          name:
            "PR, Media and Digital Marketing Services",

          serviceType:
            "Digital marketing, public relations, social media marketing and paid advertising",

          url:
            "https://www.dtsworld.in/services/pr-media-digital-marketing",

          description:
            "Digital marketing agency services including social media strategy, content creation, performance advertising, influencer marketing, public relations, media outreach, reputation building and campaign management for modern brands.",

          provider: {
            "@id": "https://www.dtsworld.in/#business",
          },

          areaServed: {
            "@type": "Country",
            name: "India",
          },
        },

        {
          "@type": "Service",
          "@id":
            "https://www.dtsworld.in/services/web-development-marketing/#service",

          name:
            "Website Development and SEO Services",

          serviceType:
            "Website development, UI UX design, landing pages and search engine optimization",

          url:
            "https://www.dtsworld.in/services/web-development-marketing",

          description:
            "Custom website development, Next.js websites, landing pages, UI UX design, technical SEO and conversion-focused digital platforms designed to improve search visibility, credibility, leads and conversions.",

          provider: {
            "@id": "https://www.dtsworld.in/#business",
          },

          areaServed: {
            "@type": "Country",
            name: "India",
          },
        },

        {
          "@type": "Service",
          "@id":
            "https://www.dtsworld.in/services/ai-video-vfx/#service",

          name:
            "AI Video Production and VFX Services",

          serviceType:
            "AI video production, AI advertising, video editing and visual effects",

          url:
            "https://www.dtsworld.in/services/ai-video-vfx",

          description:
            "AI video production, cinematic brand films, AI-generated advertisements, product visualisation, commercial video editing and VFX services for social media campaigns, product launches and premium brand storytelling.",

          provider: {
            "@id": "https://www.dtsworld.in/#business",
          },

          areaServed: {
            "@type": "Country",
            name: "India",
          },
        },
      ],
    }).replace(/</g, "\\u003c"),
  }}
/>
      <Navbar />

      <main>
        <Hero />
        <AboutStudio />
        <WhyStudio />
        <ServicesSection />
        <StudioMethod />
        <FeaturedWork />
        <StudioDNA />
        <PromiseSection />
        <IndustriesSection />
        <FAQSection />
      </main>

      <Footer />
    </>
  );
}
