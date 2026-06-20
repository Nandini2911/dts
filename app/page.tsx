import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import AboutStudio from "@/components/Home/AboutSection";
import WhyStudio from "@/components/Home/WhyStudio";
import ServicesSection from "@/components/Home/ServiceSection";
import StudioMethod from "@/components/Home/StudioMethode";
import FeaturedWork from "@/components/Home/FeaturedWork";
import StudioDNA from "@/components/Home/StudiaDna";
import PromiseSection from "@/components/Home/PromiseSection";
import FAQSection from "@/components/Home/HomeFaq";
import Footer from "@/components/Footer";
import IndustriesSection from "@/components/Home/IndustriesSection";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.dtsworld.in/#organization",
      name: "Double Trouble Studio",
      alternateName: "DTS World",
      url: "https://www.dtsworld.in/",
      logo: {
        "@type": "ImageObject",
        "@id": "https://www.dtsworld.in/#logo",
        url: "https://www.dtsworld.in/logo.png",
        contentUrl: "https://www.dtsworld.in/logo.png",
        caption: "Double Trouble Studio Logo",
      },
      image: {
        "@type": "ImageObject",
        url: "https://www.dtsworld.in/og-image.jpg",
      },
      description:
        "Double Trouble Studio is a creative digital agency in India offering branding, PR, event management, guest management, digital marketing, website development, SEO, AI video production and VFX services for hospitality, luxury, restaurant, fashion, lifestyle, corporate and premium event brands.",
      slogan: "Creative Agency For Brands, Events & Digital Growth",
      email: "hello@dtsworld.in",
      telephone: "+918000006021",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
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
          name: "Bangalore",
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
          "@type": "City",
          name: "Goa",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+918000006021",
          email: "hello@dtsworld.in",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      ],
      knowsAbout: [
        "Creative Digital Agency",
        "Brand Strategy",
        "Branding",
        "Logo Design",
        "Visual Identity",
        "Luxury Brand Positioning",
        "Digital Marketing",
        "Social Media Marketing",
        "Search Engine Optimization",
        "SEO",
        "Public Relations",
        "PR Campaigns",
        "Media Campaigns",
        "Influencer Marketing",
        "Performance Marketing",
        "Website Design",
        "Website Development",
        "Next.js Website Development",
        "Event Management",
        "Wedding Management",
        "Guest Management",
        "Celebrity Management",
        "AI Video Production",
        "VFX",
        "Creative Direction",
        "Hospitality Marketing",
        "Restaurant Marketing",
        "Luxury Brand Marketing",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        "@id": "https://www.dtsworld.in/#services",
        name: "Double Trouble Studio Creative Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": "https://www.dtsworld.in/services/guest-management/#service",
              name: "Guest Management Services",
              serviceType: "Guest Management",
              url: "https://www.dtsworld.in/services/guest-management",
              description:
                "Premium guest management services for weddings, corporate events, luxury launches and celebrity events, including RSVP tracking, VIP handling, check-in flow and on-ground coordination.",
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
              "@id": "https://www.dtsworld.in/services/celebrity-management/#service",
              name: "Celebrity Management Services",
              serviceType: "Celebrity Management",
              url: "https://www.dtsworld.in/services/celebrity-management",
              description:
                "Celebrity management and talent coordination for brand campaigns, events, weddings, launches and influencer collaborations.",
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
              "@id": "https://www.dtsworld.in/services/events-weddings/#service",
              name: "Events and Wedding Management Services",
              serviceType: "Event Management and Wedding Planning",
              url: "https://www.dtsworld.in/services/events-weddings",
              description:
                "Luxury event management and wedding planning services with production, guest experience design, show-flow planning and premium aesthetics.",
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
              "@id": "https://www.dtsworld.in/services/pr-media-digital-marketing/#service",
              name: "PR and Digital Marketing Services",
              serviceType: "Public Relations, Media Campaigns and Digital Marketing",
              url: "https://www.dtsworld.in/services/pr-media-digital-marketing",
              description:
                "PR campaigns, media outreach, social media marketing, influencer collaborations and paid advertising strategies for brand visibility, reputation and digital growth.",
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
              "@id": "https://www.dtsworld.in/services/web-development-marketing/#service",
              name: "Website Development and SEO Services",
              serviceType: "Website Development, SEO and UI/UX Design",
              url: "https://www.dtsworld.in/services/web-development-marketing",
              description:
                "Custom Next.js websites, landing pages and SEO-optimized digital platforms designed to increase Google visibility, improve user experience, generate leads and drive conversions.",
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
              "@id": "https://www.dtsworld.in/services/ai-video-vfx/#service",
              name: "AI Video Production and VFX Services",
              serviceType: "AI Video Production and VFX",
              url: "https://www.dtsworld.in/services/ai-video-vfx",
              description:
                "AI video production, cinematic brand films, AI-generated video ads and VFX content for social media campaigns, product launches, brand storytelling and digital promotions.",
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
    },
    {
      "@type": "WebSite",
      "@id": "https://www.dtsworld.in/#website",
      url: "https://www.dtsworld.in/",
      name: "Double Trouble Studio",
      alternateName: "DTS World",
      description:
        "India-based branding, website design, PR, event management, guest management, digital marketing and AI video production agency helping modern businesses grow through strategy, storytelling and performance-driven experiences.",
      publisher: {
        "@id": "https://www.dtsworld.in/#organization",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.dtsworld.in/#webpage",
      url: "https://www.dtsworld.in/",
      name: "Creative Digital Agency in India | Double Trouble Studio",
      headline: "Creative Agency For Brands, Events & Digital Growth",
      description:
        "Double Trouble Studio is a creative digital agency in India offering branding, PR, event management, guest management, digital marketing, website development, SEO, AI video production and VFX services.",
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
        "@type": "ImageObject",
        url: "https://www.dtsworld.in/og-image.jpg",
      },
      breadcrumb: {
        "@id": "https://www.dtsworld.in/#breadcrumb",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dtsworld.in/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.dtsworld.in/",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/#featured-work",
      name: "Featured Work by Double Trouble Studio",
      description:
        "Featured work across branding, PR, web development, social media marketing, AI video production and experiential campaigns.",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "CreativeWork",
            name: "RNK Rentals",
            description:
              "A complete digital transformation for India’s luxury car rental network through brand storytelling, PR communication, SEO-friendly website development and premium web experience.",
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
            name: "House of Stars",
            description:
              "Brand positioning, website development and narrative system for a celebrity management and talent engagement platform.",
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
            name: "Café Holiday",
            description:
              "Hospitality brand revamp focused on social media marketing, café storytelling, event-led experiences and community engagement.",
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
            name: "India Today",
            description:
              "AI-powered visual campaigns, premium creative assets and digital media storytelling for a leading media platform.",
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
            name: "All India Police Golf Tournament",
            description:
              "Creative support, event branding, sponsor communication and premium production identity for All India Police Golf Tournament Chandigarh 2026.",
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
            name: "Bhart Rehma",
            description:
              "AI-generated cinematic visuals, VFX-led storytelling and high-impact digital campaign assets for premium brand communication.",
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
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does Double Trouble Studio offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Double Trouble Studio offers branding, website design, website development, SEO, social media management, PR, digital marketing campaigns, creative direction, event marketing, guest management, celebrity management, AI video production, VFX and premium visual identity systems tailored for modern brands.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with startups and small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio works with startups, founder-led businesses, hospitality brands, restaurants, cafés, fashion labels, lifestyle companies, creators, influencers, event companies, wedding brands and corporate brands across India.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a branding or website project take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The timeline for a branding or website project depends on the project scope, number of pages, content requirements, design complexity, approvals and development requirements. Double Trouble Studio plans each project with a clear process from discovery and design to development and deployment.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide social media content creation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio provides social media content creation, content strategy, campaign planning, creative direction, brand storytelling, reels, static posts, performance-led communication and digital marketing support for modern brands.",
          },
        },
        {
          "@type": "Question",
          name: "Can we work together remotely?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio works with brands remotely across Mumbai, Delhi, Chandigarh, Bangalore, Hyderabad, Pune, Ahmedabad, Goa and across India through structured communication, digital planning, project coordination and online reviews.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <main>
        <Navbar />
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
        <Footer />
      </main>
    </>
  );
}