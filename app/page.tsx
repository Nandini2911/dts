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
          "@type": ["Organization", "ProfessionalService"],
          "@id": "https://www.dtsworld.in/#organization",

          name: "Double Trouble Studio",
          legalName: "Double Trouble Studio Pvt. Ltd.",
          alternateName: ["DTS World", "DTS"],

          url: "https://www.dtsworld.in/",

          description:
            "Double Trouble Studio is a Mumbai-based creative and digital agency offering branding, public relations, digital marketing, website development, SEO, event management, wedding management, guest management, celebrity management, AI video production and VFX services.",

          slogan: "Creative Agency For Brands, Events & Digital Growth",

          email: "info@dtsworld.in",
          telephone: "+918000006021",

          priceRange: "$$",

          logo: {
            "@id": "https://www.dtsworld.in/#logo",
          },

          image: {
            "@id": "https://www.dtsworld.in/#primary-image",
          },

          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Plot No. 177, 1st Floor, Aaram Nagar Part 2, Seven Bungalows, J. P. Road, Versova, Andheri West",
            addressLocality: "Mumbai",
            addressRegion: "Maharashtra",
            postalCode: "400061",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
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
              "@type": "State",
              name: "Goa",
            },
          ],

          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+918000006021",
              email: "info@dtsworld.in",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"],
            },
            {
              "@type": "ContactPoint",
              telephone: "+918000006021",
              email: "info@dtsworld.in",
              contactType: "sales",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"],
            },
          ],

          knowsAbout: [
            "Brand Strategy",
            "Branding",
            "Public Relations",
            "Media Relations",
            "Digital Marketing",
            "Social Media Marketing",
            "Influencer Marketing",
            "Search Engine Optimization",
            "Website Development",
            "UI UX Design",
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

          url: "https://www.dtsworld.in/logo.png",
          contentUrl: "https://www.dtsworld.in/logo.png",

          width: 512,
          height: 512,

          caption: "Double Trouble Studio logo",
          name: "Double Trouble Studio logo",
          inLanguage: "en-IN",
        },

        {
          "@type": "ImageObject",
          "@id": "https://www.dtsworld.in/#primary-image",

          url: "https://www.dtsworld.in/og/home-og.jpg",
          contentUrl: "https://www.dtsworld.in/og/home-og.jpg",

          width: 1200,
          height: 630,

          caption:
            "Double Trouble Studio creative digital agency in Mumbai",

          name:
            "Double Trouble Studio creative digital agency in Mumbai",

          representativeOfPage: true,
          inLanguage: "en-IN",
        },

        {
          "@type": "OfferCatalog",
          "@id": "https://www.dtsworld.in/#service-catalog",

          name: "Double Trouble Studio Creative Services",

          description:
            "Creative, digital marketing, website development, event management, guest management, celebrity management, AI video production and VFX services offered by Double Trouble Studio.",

          provider: {
            "@id": "https://www.dtsworld.in/#organization",
          },

          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id":
                  "https://www.dtsworld.in/services/guest-management/#service",

                name: "Guest Management Services",
                serviceType: "Guest Management",

                url:
                  "https://www.dtsworld.in/services/guest-management",

                description:
                  "Professional guest management services for weddings, corporate events, luxury launches and celebrity events, including RSVP tracking, VIP handling, guest check-in and on-ground coordination.",

                provider: {
                  "@id": "https://www.dtsworld.in/#organization",
                },

                areaServed: {
                  "@type": "Country",
                  name: "India",
                },
              },
            },

            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id":
                  "https://www.dtsworld.in/services/celebrity-management/#service",

                name: "Celebrity Management Services",
                serviceType: "Celebrity Management",

                url:
                  "https://www.dtsworld.in/services/celebrity-management",

                description:
                  "Celebrity management, talent coordination and artist booking services for brand campaigns, corporate events, weddings, launches, appearances and influencer collaborations.",

                provider: {
                  "@id": "https://www.dtsworld.in/#organization",
                },

                areaServed: {
                  "@type": "Country",
                  name: "India",
                },
              },
            },

            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id":
                  "https://www.dtsworld.in/services/events-weddings/#service",

                name: "Event and Wedding Management Services",
                serviceType:
                  "Event Management and Wedding Planning",

                url:
                  "https://www.dtsworld.in/services/events-weddings",

                description:
                  "Event management and wedding planning services covering creative direction, production, guest experience, vendor coordination, entertainment and show-flow execution.",

                provider: {
                  "@id": "https://www.dtsworld.in/#organization",
                },

                areaServed: {
                  "@type": "Country",
                  name: "India",
                },
              },
            },

            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id":
                  "https://www.dtsworld.in/services/pr-media-digital-marketing/#service",

                name:
                  "PR, Media and Digital Marketing Services",

                serviceType:
                  "Public Relations, Media Campaigns and Digital Marketing",

                url:
                  "https://www.dtsworld.in/services/pr-media-digital-marketing",

                description:
                  "Public relations, media outreach, social media marketing, content creation, influencer collaborations and paid advertising services for brand visibility, reputation and digital growth.",

                provider: {
                  "@id": "https://www.dtsworld.in/#organization",
                },

                areaServed: {
                  "@type": "Country",
                  name: "India",
                },
              },
            },

            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id":
                  "https://www.dtsworld.in/services/web-development-marketing/#service",

                name:
                  "Website Development and SEO Services",

                serviceType:
                  "Website Development, SEO, Landing Pages and UI UX Design",

                url:
                  "https://www.dtsworld.in/services/web-development-marketing",

                description:
                  "Custom website development, Next.js websites, landing pages, UI UX design and SEO services created to improve search visibility, credibility, user experience, leads and conversions.",

                provider: {
                  "@id": "https://www.dtsworld.in/#organization",
                },

                areaServed: {
                  "@type": "Country",
                  name: "India",
                },
              },
            },

            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id":
                  "https://www.dtsworld.in/services/ai-video-vfx/#service",

                name:
                  "AI Video Production and VFX Services",

                serviceType:
                  "AI Video Production, AI Advertising and VFX",

                url:
                  "https://www.dtsworld.in/services/ai-video-vfx",

                description:
                  "AI video production, cinematic brand films, AI-generated advertisements, product visualisation, video editing and VFX services for social media campaigns, product launches and brand storytelling.",

                provider: {
                  "@id": "https://www.dtsworld.in/#organization",
                },

                areaServed: {
                  "@type": "Country",
                  name: "India",
                },
              },
            },
          ],
        },

        {
          "@type": "WebSite",
          "@id": "https://www.dtsworld.in/#website",

          url: "https://www.dtsworld.in/",
          name: "Double Trouble Studio",
          alternateName: "DTS World",

          description:
            "Double Trouble Studio is an India-based creative agency providing branding, PR, digital marketing, website development, SEO, events, guest management, celebrity management, AI video production and VFX services.",

          publisher: {
            "@id": "https://www.dtsworld.in/#organization",
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
            "Double Trouble Studio is a Mumbai creative agency for branding, PR, digital marketing, websites, SEO, events, guest management, AI video production and VFX.",

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
            "@id": "https://www.dtsworld.in/#primary-image",
          },

          publisher: {
            "@id": "https://www.dtsworld.in/#organization",
          },

          inLanguage: "en-IN",
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
