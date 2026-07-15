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
import PopularServiceLocations from "@/components/Home/PopularServiceLocations";

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

const homeSchema = {
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
      "@type": ["Organization", "LocalBusiness"],
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
        "Double Trouble Studio is a Mumbai-based creative digital agency offering branding, public relations, digital marketing, social media marketing, event and wedding management, guest management, celebrity management, website development, SEO, AI video production and VFX services across India.",

      slogan: "Creative Agency for Brands, Events and Digital Growth",

      telephone: "+918000006021",

      email: "hellodoubletroublestudio@gmail.com",

      priceRange: "₹₹₹",

      address: {
        "@type": "PostalAddress",

        streetAddress:
          "Plot No. 177, 1st Floor, Aaram Nagar Part 2, Seven Bungalows, J. P. Road, Versova, Andheri West",

        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400061",
        addressCountry: "IN",
      },

      contactPoint: [
        {
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
      ],

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
        "Logo Design",
        "Visual Identity",
        "Luxury Brand Positioning",
        "Creative Direction",
        "Digital Marketing",
        "Social Media Marketing",
        "Performance Advertising",
        "Public Relations",
        "Media Outreach",
        "Influencer Marketing",
        "Content Strategy",
        "Event Management",
        "Wedding Management",
        "Guest Management",
        "Celebrity Management",
        "Website Design",
        "Website Development",
        "Next.js Website Development",
        "User Interface Design",
        "User Experience Design",
        "Search Engine Optimization",
        "Technical SEO",
        "AI Video Production",
        "AI Video Advertising",
        "Product Films",
        "Visual Effects",
        "Brand Storytelling",
      ],

      hasOfferCatalog: {
        "@id": "https://www.dtsworld.in/#services",
      },
    },

    {
      "@type": "WebSite",
      "@id": "https://www.dtsworld.in/#website",

      url: "https://www.dtsworld.in/",

      name: "Double Trouble Studio",

      alternateName: ["DTS", "DTS World"],

      description:
        "Double Trouble Studio is a creative digital agency in Mumbai providing branding, PR, digital marketing, event management, guest management, website development, SEO, AI video production and VFX services.",

      publisher: {
        "@id": "https://www.dtsworld.in/#organization",
      },

      inLanguage: "en-IN",
    },

    {
      "@type": "WebPage",
      "@id": "https://www.dtsworld.in/#webpage",

      url: "https://www.dtsworld.in/",

      name: "Creative Digital Agency in Mumbai | Double Trouble Studio",

      headline: "Creative Agency For Brands, Events & Digital Growth",

      description:
        "Double Trouble Studio is a Mumbai creative agency offering branding, PR, digital marketing, website development, SEO, events, guest management, AI video production and VFX.",

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

      audience: {
        "@type": "BusinessAudience",
        "@id": "https://www.dtsworld.in/#business-audience",

        name:
          "Brands and businesses seeking creative, digital, event and marketing services",

        audienceType:
          "Hospitality brands, luxury brands, restaurants, cafes, fashion labels, lifestyle businesses, corporate brands, founders, creators, event companies, wedding planners and modern startups",

        description:
          "Businesses and organizations seeking branding, public relations, digital marketing, social media marketing, website development, SEO, event management, guest management, celebrity management, AI video production and VFX services.",
      },

      hasPart: {
        "@id": "https://www.dtsworld.in/#faq",
      },

      mentions: [
        {
          "@id": "https://www.dtsworld.in/#services",
        },
        {
          "@id": "https://www.dtsworld.in/#featured-work",
        },
      ],

      significantLink: [
        "https://www.dtsworld.in/services/guest-management",
        "https://www.dtsworld.in/services/celebrity-management",
        "https://www.dtsworld.in/services/events-weddings",
        "https://www.dtsworld.in/services/pr-media-marketing",
        "https://www.dtsworld.in/services/web-development-marketing",
        "https://www.dtsworld.in/services/ai-video-vfx",
      ],

      copyrightYear: 2026,

      copyrightHolder: {
        "@id": "https://www.dtsworld.in/#organization",
      },

      inLanguage: "en-IN",
    },

    {
      "@type": "OfferCatalog",
      "@id": "https://www.dtsworld.in/#services",

      name: "Double Trouble Studio Creative Services",

      url: "https://www.dtsworld.in/#services",

      description:
        "Guest management, celebrity management, event and wedding planning, PR, digital marketing, website development, SEO, AI video production and VFX services across India.",

      itemListOrder: "https://schema.org/ItemListUnordered",

      numberOfItems: 6,

      itemListElement: [
        {
          "@type": "Offer",
          "@id":
            "https://www.dtsworld.in/services/guest-management#offer",

          url: "https://www.dtsworld.in/services/guest-management",

          seller: {
            "@id": "https://www.dtsworld.in/#organization",
          },

          itemOffered: {
            "@type": "Service",
            "@id":
              "https://www.dtsworld.in/services/guest-management#service",

            name: "Guest Management Services",

            url: "https://www.dtsworld.in/services/guest-management",

            serviceType: "Guest Management",

            category: "Event Guest Management Services",

            description:
              "Premium guest management services for weddings, corporate events, luxury launches and celebrity events, including RSVP tracking, VIP segmentation, check-in coordination, entry flow and on-ground event support.",

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
          "@id":
            "https://www.dtsworld.in/services/celebrity-management#offer",

          url: "https://www.dtsworld.in/services/celebrity-management",

          seller: {
            "@id": "https://www.dtsworld.in/#organization",
          },

          itemOffered: {
            "@type": "Service",
            "@id":
              "https://www.dtsworld.in/services/celebrity-management#service",

            name: "Celebrity Management Services",

            url: "https://www.dtsworld.in/services/celebrity-management",

            serviceType: "Celebrity Management and Talent Coordination",

            category: "Celebrity Booking and Talent Management",

            description:
              "Celebrity management and talent coordination for brand campaigns, corporate events, weddings, launches, public appearances and influencer collaborations.",

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
          "@id": "https://www.dtsworld.in/services/events-weddings#offer",

          url: "https://www.dtsworld.in/services/events-weddings",

          seller: {
            "@id": "https://www.dtsworld.in/#organization",
          },

          itemOffered: {
            "@type": "Service",
            "@id":
              "https://www.dtsworld.in/services/events-weddings#service",

            name: "Event Management and Wedding Planning",

            url: "https://www.dtsworld.in/services/events-weddings",

            serviceType: "Event Management and Wedding Planning",

            category: "Luxury Events and Wedding Services",

            description:
              "Luxury event management and wedding planning services covering concepts, themes, vendors, production, guest journeys, hospitality and show-flow execution.",

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
          "@id":
            "https://www.dtsworld.in/services/pr-media-marketing#offer",

          url: "https://www.dtsworld.in/services/pr-media-marketing",

          seller: {
            "@id": "https://www.dtsworld.in/#organization",
          },

          itemOffered: {
            "@type": "Service",
            "@id":
              "https://www.dtsworld.in/services/pr-media-marketing#service",

            name: "PR, Media and Digital Marketing",

            url: "https://www.dtsworld.in/services/pr-media-marketing",

            serviceType: "Public Relations, Media and Digital Marketing",

            category: "PR and Digital Marketing Services",

            description:
              "PR campaigns, media outreach, social media marketing, influencer collaborations, content strategy and paid advertising services for brand visibility, reputation and digital growth.",

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
          "@id":
            "https://www.dtsworld.in/services/web-development-marketing#offer",

          url:
            "https://www.dtsworld.in/services/web-development-marketing",

          seller: {
            "@id": "https://www.dtsworld.in/#organization",
          },

          itemOffered: {
            "@type": "Service",
            "@id":
              "https://www.dtsworld.in/services/web-development-marketing#service",

            name: "Website Development and SEO",

            url:
              "https://www.dtsworld.in/services/web-development-marketing",

            serviceType: "Website Design, Website Development and SEO",

            category: "Web Development and Search Engine Optimization",

            description:
              "Custom Next.js websites, landing pages, UI and UX design, technical SEO, analytics, conversion funnels and performance-focused digital platforms.",

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
          "@id": "https://www.dtsworld.in/services/ai-video-vfx#offer",

          url: "https://www.dtsworld.in/services/ai-video-vfx",

          seller: {
            "@id": "https://www.dtsworld.in/#organization",
          },

          itemOffered: {
            "@type": "Service",
            "@id":
              "https://www.dtsworld.in/services/ai-video-vfx#service",

            name: "AI Video Production and VFX",

            url: "https://www.dtsworld.in/services/ai-video-vfx",

            serviceType: "AI Video Production and Visual Effects",

            category: "AI Advertising, Video Production and VFX",

            description:
              "AI-generated advertisements, cinematic brand films, product videos, campaign visuals, visual effects and social media video content.",

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
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/#featured-work",

      name: "Double Trouble Studio Featured Work",

      url: "https://www.dtsworld.in/work",

      description:
        "Selected branding, PR, website development, social media marketing, event branding, AI video production and VFX work by Double Trouble Studio.",

      itemListOrder: "https://schema.org/ItemListUnordered",

      numberOfItems: 6,

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,

          item: {
            "@type": "CreativeWork",
            "@id": "https://www.dtsworld.in/#work-rnk-rentals",

            name: "RNK Rentals",

            description:
              "A digital transformation for a luxury car rental network through brand storytelling, PR communication, SEO-friendly website development and premium web experience.",

            creator: {
              "@id": "https://www.dtsworld.in/#organization",
            },
          },
        },

        {
          "@type": "ListItem",
          position: 2,

          item: {
            "@type": "CreativeWork",
            "@id": "https://www.dtsworld.in/#work-bharat-reshma",

            name: "Bharat Reshma",

            description:
              "Brand positioning, website development and narrative systems for a celebrity management and talent engagement platform.",

            creator: {
              "@id": "https://www.dtsworld.in/#organization",
            },
          },
        },

        {
          "@type": "ListItem",
          position: 3,

          item: {
            "@type": "CreativeWork",
            "@id":
              "https://www.dtsworld.in/#work-butterchicken-factory",

            name: "Butter Chicken Factory",

            description:
              "A hospitality brand revamp focused on social media marketing, restaurant storytelling, event-led experiences and digital growth.",

            creator: {
              "@id": "https://www.dtsworld.in/#organization",
            },
          },
        },

        {
          "@type": "ListItem",
          position: 4,

          item: {
            "@type": "CreativeWork",
            "@id": "https://www.dtsworld.in/#work-india-today",

            name: "India Today",

            description:
              "AI-powered visual campaigns, premium creative assets and digital media storytelling.",

            creator: {
              "@id": "https://www.dtsworld.in/#organization",
            },
          },
        },

        {
          "@type": "ListItem",
          position: 5,

          item: {
            "@type": "CreativeWork",
            "@id":
              "https://www.dtsworld.in/#work-all-india-police-golf-tournament",

            name: "All India Police Golf Tournament",

            description:
              "Creative support, event branding, sponsor communication and premium production identity for the All India Police Golf Tournament Chandigarh 2026.",

            creator: {
              "@id": "https://www.dtsworld.in/#organization",
            },
          },
        },

        {
          "@type": "ListItem",
          position: 6,

          item: {
            "@type": "CreativeWork",
            "@id": "https://www.dtsworld.in/#work-spice",

            name: "Spice",

            description:
              "AI-generated cinematic visuals, VFX-led storytelling and digital campaign assets designed for premium brand communication.",

            creator: {
              "@id": "https://www.dtsworld.in/#organization",
            },
          },
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.dtsworld.in/#faq",

      url: "https://www.dtsworld.in/#faq",

      name: "Frequently Asked Questions About Double Trouble Studio",

      description:
        "Answers to common questions about Double Trouble Studio services, project timelines, startups, social media content creation and remote collaboration.",

      isPartOf: {
        "@id": "https://www.dtsworld.in/#webpage",
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

          name: "What services does Double Trouble Studio offer?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Double Trouble Studio offers branding, website design, website development, SEO, social media management, PR, digital marketing campaigns, creative direction, event marketing, guest management, celebrity management, AI video production, VFX and premium visual identity systems tailored for modern brands.",
          },
        },

        {
          "@type": "Question",

          name: "Do you work with startups and small businesses?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Yes. We work with modern startups, founder-led businesses, small businesses, growing companies and established brands that want stronger digital presence, premium positioning, better brand identity, SEO visibility and long-term growth.",
          },
        },

        {
          "@type": "Question",

          name: "How long does a branding or website project take?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Project timelines depend on the scope, but most branding, website design and website development projects typically take between 2–6 weeks with strategy, UI/UX direction, content structure, SEO foundations, design revisions and launch support included.",
          },
        },

        {
          "@type": "Question",

          name: "Do you provide social media content creation?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Yes. We create premium social media strategies, visual content systems, reels direction, campaign ideas, content calendars, digital assets, influencer campaign support and high-performing content for hospitality, luxury, restaurant, fashion, lifestyle and event brands.",
          },
        },

        {
          "@type": "Question",

          name: "Can we work together remotely?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Yes. We work with clients across Mumbai, Delhi, Chandigarh, Bangalore, Hyderabad, Pune, Ahmedabad, Goa, India and internationally through smooth remote collaboration, structured communication, organized workflows and clear project timelines.",
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        id="home-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema).replace(/</g, "\\u003c"),
        }}
      />

      <Navbar />
      <Hero />
      <AboutStudio />
      <WhyStudio />
      <ServicesSection />
      <PopularServiceLocations />
      <StudioMethod />
      <FeaturedWork />
      <StudioDNA />
      <PromiseSection />
      <IndustriesSection />
      <FAQSection />
      <Footer />
    </>
  );
}