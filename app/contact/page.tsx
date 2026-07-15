import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

import ContactFaq from "@/components/Contact/ContactFaq";
import ContactHero from "@/components/Contact/ContactHero";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactMap from "@/components/Contact/ContactMap";
import LocationSEO from "@/components/Contact/LocationSEO";
import ServicesSEO from "@/components/Contact/ServicesSEO";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    absolute:
      "Contact Double Trouble Studio | Branding & Digital Marketing Agency",
  },

  description:
    "Contact Double Trouble Studio, a Mumbai-based branding, website design, PR and digital marketing agency. Get in touch for branding, web development, guest management, celebrity management, AI video production and creative marketing services.",

  applicationName: "Double Trouble Studio",
  creator: "Double Trouble Studio",
  publisher: "Double Trouble Studio",

  alternates: {
    canonical: "https://www.dtsworld.in/contact",
  },

  keywords: [
    "Contact Double Trouble Studio",
    "Branding Agency Mumbai",
    "Website Design Company Mumbai",
    "Digital Marketing Agency Mumbai",
    "Creative Agency Mumbai",
    "PR Agency Mumbai",
    "Guest Management Agency",
    "Celebrity Management Agency",
    "Event Management Mumbai",
    "AI Video Production Company",
    "Web Development Company India",
    "Marketing Agency Mumbai",
    "Contact Branding Agency",
  ],

  openGraph: {
    title:
      "Contact Double Trouble Studio | Branding & Digital Marketing Agency",

    description:
      "Let's create something amazing. Contact Double Trouble Studio for branding, website design, PR, digital marketing, guest management, AI video production and creative solutions across India.",

    url: "https://www.dtsworld.in/contact",
    siteName: "Double Trouble Studio",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://www.dtsworld.in/og/contact-og.png",
        width: 1200,
        height: 630,
        alt: "Contact Double Trouble Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Contact Double Trouble Studio | Branding & Digital Marketing Agency",

    description:
      "Get in touch with Double Trouble Studio for branding, website design, digital marketing, PR, guest management, AI video production and business growth solutions.",

    images: ["https://www.dtsworld.in/twitter/contact-twitter.png"],
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

const contactSchema = {
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
        "Double Trouble Studio is a Mumbai-based creative agency providing branding, website design, website development, digital marketing, public relations, guest management, celebrity management, event planning, wedding management, AI video production and VFX services across India.",

      slogan: "Creative Agency for Brands, Events and Digital Growth",

      telephone: "+918000006021",
      email: "doubletrouble.studio01@gmail.com",
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
          "@id": "https://www.dtsworld.in/contact#project-enquiries",

          contactType: "project enquiries",
          telephone: "+918000006021",
          email: "doubletrouble.studio01@gmail.com",
          url: "https://www.dtsworld.in/contact",

          areaServed: {
            "@type": "Country",
            name: "India",
          },

          availableLanguage: ["English", "Hindi"],
        },

        {
          "@type": "ContactPoint",
          "@id": "https://www.dtsworld.in/contact#general-enquiries",

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

      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",

          dayOfWeek: [
            "https://schema.org/Monday",
            "https://schema.org/Tuesday",
            "https://schema.org/Wednesday",
            "https://schema.org/Thursday",
            "https://schema.org/Friday",
            "https://schema.org/Saturday",
          ],

          opens: "10:00",
          closes: "19:00",
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
          name: "Navi Mumbai",
        },
        {
          "@type": "City",
          name: "Thane",
        },
        {
          "@type": "City",
          name: "Pune",
        },
      ],

      knowsAbout: [
        "Brand Strategy",
        "Brand Identity",
        "Visual Identity",
        "Brand Positioning",
        "Luxury Brand Positioning",
        "Creative Direction",
        "Website Design",
        "Website Development",
        "Next.js Website Development",
        "Search Engine Optimization",
        "Technical SEO",
        "Digital Marketing",
        "Social Media Marketing",
        "Content Creation",
        "Performance Marketing",
        "Public Relations",
        "Media Relations",
        "Guest Management",
        "Celebrity Management",
        "Event Planning",
        "Event Marketing",
        "Wedding Management",
        "AI Video Production",
        "AI Video Advertising",
        "Visual Effects",
      ],

      hasOfferCatalog: {
        "@id": "https://www.dtsworld.in/contact#services",
      },
    },

    {
      "@type": "WebSite",
      "@id": "https://www.dtsworld.in/#website",

      url: "https://www.dtsworld.in/",
      name: "Double Trouble Studio",
      alternateName: ["DTS", "DTS World"],

      description:
        "Double Trouble Studio is a creative agency in Mumbai providing branding, website development, digital marketing, PR, event management, guest management, AI video production and VFX services across India.",

      publisher: {
        "@id": "https://www.dtsworld.in/#organization",
      },

      inLanguage: "en-IN",
    },

    {
      "@type": "ContactPage",
      "@id": "https://www.dtsworld.in/contact#webpage",

      url: "https://www.dtsworld.in/contact",

      name:
        "Contact Double Trouble Studio | Branding & Digital Marketing Agency",

      headline: "Let's Create Something Amazing",

      description:
        "Contact Double Trouble Studio for branding, website design, digital marketing, public relations, guest management, celebrity management, event planning, wedding management, AI video production and VFX services in Mumbai and across India.",

      isPartOf: {
        "@id": "https://www.dtsworld.in/#website",
      },

      about: {
        "@id": "https://www.dtsworld.in/#organization",
      },

      mainEntity: {
        "@id": "https://www.dtsworld.in/#organization",
      },

      publisher: {
        "@id": "https://www.dtsworld.in/#organization",
      },

      primaryImageOfPage: {
        "@id": "https://www.dtsworld.in/#logo",
      },

      breadcrumb: {
        "@id": "https://www.dtsworld.in/contact#breadcrumb",
      },

      hasPart: [
        {
          "@id": "https://www.dtsworld.in/contact#services",
        },
        {
          "@id": "https://www.dtsworld.in/contact#faq",
        },
      ],

      audience: {
        "@type": "BusinessAudience",
        "@id": "https://www.dtsworld.in/contact#business-audience",

        name:
          "Businesses seeking branding, marketing and creative agency services",

        audienceType:
          "Startups, founders, hospitality brands, restaurants, cafes, luxury businesses, event organizers, creators, corporate brands and growing companies",

        description:
          "Businesses and organizations looking for branding, website development, SEO, digital marketing, public relations, guest management, celebrity management, event planning, AI video production and VFX services.",
      },

      significantLink: [
        "https://www.dtsworld.in/services/guest-management",
        "https://www.dtsworld.in/services/celebrity-management",
        "https://www.dtsworld.in/services/events-weddings",
        "https://www.dtsworld.in/services/pr-media-digital-marketing",
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
      "@type": "BreadcrumbList",
      "@id": "https://www.dtsworld.in/contact#breadcrumb",

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
          name: "Contact",
          item: "https://www.dtsworld.in/contact",
        },
      ],
    },

    {
      "@type": "OfferCatalog",
      "@id": "https://www.dtsworld.in/contact#services",

      url: "https://www.dtsworld.in/contact#services",
      name: "Double Trouble Studio Services",

      description:
        "Guest management, celebrity management, events and weddings, public relations, digital marketing, website development, AI video production and VFX services.",

      numberOfItems: 6,
      itemListOrder: "https://schema.org/ItemListUnordered",

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
              "Guest management services for weddings, corporate events, luxury launches, celebrity events and private gatherings, including RSVP management, VIP coordination, check-in flow and on-ground support.",

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

            url:
              "https://www.dtsworld.in/services/celebrity-management",

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
          "@id":
            "https://www.dtsworld.in/services/events-weddings#offer",

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
            category: "Events and Wedding Services",

            description:
              "Event planning and wedding management services covering concepts, vendors, production, hospitality, guest experiences and show-flow execution.",

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
            "https://www.dtsworld.in/services/pr-media-digital-marketing#offer",

          url:
            "https://www.dtsworld.in/services/pr-media-digital-marketing",

          seller: {
            "@id": "https://www.dtsworld.in/#organization",
          },

          itemOffered: {
            "@type": "Service",
            "@id":
              "https://www.dtsworld.in/services/pr-media-digital-marketing#service",

            name: "PR, Media and Digital Marketing",

            url:
              "https://www.dtsworld.in/services/pr-media-digital-marketing",

            serviceType:
              "Public Relations, Media and Digital Marketing",

            category: "PR and Digital Marketing Services",

            description:
              "Public relations, media outreach, social media marketing, content creation, performance marketing and digital campaign services for modern brands.",

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

            name: "Website Development and Marketing",

            url:
              "https://www.dtsworld.in/services/web-development-marketing",

            serviceType:
              "Website Design, Website Development and SEO",

            category: "Website Development and Digital Marketing",

            description:
              "Custom website design, website development, SEO foundations, responsive user experiences, analytics and performance-focused digital platforms.",

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
            "https://www.dtsworld.in/services/ai-video-vfx#offer",

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
            category: "AI Video Advertising and VFX",

            description:
              "AI-generated video campaigns, cinematic brand films, product visuals, campaign assets and visual effects for social media and digital advertising.",

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
      "@type": "FAQPage",
      "@id": "https://www.dtsworld.in/contact#faq",

      url: "https://www.dtsworld.in/contact#faq",

      name:
        "Frequently Asked Questions About Contacting Double Trouble Studio",

      description:
        "Answers to common questions about Double Trouble Studio branding, website design, digital marketing, pricing, timelines, remote collaboration and project enquiries.",

      isPartOf: {
        "@id": "https://www.dtsworld.in/contact#webpage",
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
          "@id":
            "https://www.dtsworld.in/contact#faq-branding-services",

          name:
            "What branding services does Double Trouble Studio offer in Mumbai?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Double Trouble Studio helps businesses build memorable brands through strategic brand development, visual identity design, brand positioning, messaging, creative direction and integrated marketing solutions designed for long-term growth.",
          },
        },

        {
          "@type": "Question",
          "@id": "https://www.dtsworld.in/contact#faq-hire-agency",

          name: "Why should I hire a branding agency in Mumbai?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "A professional branding agency helps businesses create a strong market presence, improve customer trust, communicate their value effectively and stand out from competitors through strategy-led branding and marketing.",
          },
        },

        {
          "@type": "Question",
          "@id":
            "https://www.dtsworld.in/contact#faq-website-cost",

          name:
            "How much does professional website design cost in Mumbai?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Website design costs vary depending on project scope, functionality, design requirements and business goals. We provide customized website solutions tailored to your brand, objectives and budget.",
          },
        },

        {
          "@type": "Question",
          "@id":
            "https://www.dtsworld.in/contact#faq-branding-website",

          name:
            "Do you provide website design and branding services together?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Yes. We offer complete branding and website design services to create a seamless brand experience across every customer touchpoint, ensuring consistency in design, messaging and user experience.",
          },
        },

        {
          "@type": "Question",
          "@id":
            "https://www.dtsworld.in/contact#faq-digital-marketing",

          name:
            "What digital marketing services does Double Trouble Studio provide?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Our services include social media marketing, content creation, performance marketing, PR campaigns, media outreach, brand strategy, digital consulting and growth-focused marketing solutions.",
          },
        },

        {
          "@type": "Question",
          "@id": "https://www.dtsworld.in/contact#faq-startups",

          name: "Do you work with startups and growing businesses?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Yes. We work with startups, founders, hospitality brands, luxury businesses and growing companies looking to build stronger brands, launch websites and scale their digital presence.",
          },
        },

        {
          "@type": "Question",
          "@id": "https://www.dtsworld.in/contact#faq-timeline",

          name:
            "How long does it take to complete a branding or website project?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Project timelines depend on the scope and complexity of the work. Most branding and website projects are completed within a few weeks following the discovery, planning, design and development phases.",
          },
        },

        {
          "@type": "Question",
          "@id":
            "https://www.dtsworld.in/contact#faq-outside-mumbai",

          name: "Do you work with clients outside Mumbai and India?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Absolutely. We collaborate with businesses across Mumbai, Navi Mumbai, Thane, Pune, India and international markets through remote meetings, streamlined workflows and dedicated project management.",
          },
        },

        {
          "@type": "Question",
          "@id": "https://www.dtsworld.in/contact#faq-why-dts",

          name:
            "Why choose Double Trouble Studio for branding, website design and marketing?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Double Trouble Studio combines strategy, creativity, technology and marketing expertise to create premium brands, websites and digital experiences that drive visibility, engagement and long-term business growth.",
          },
        },

        {
          "@type": "Question",
          "@id": "https://www.dtsworld.in/contact#faq-quote",

          name:
            "How can I get a quote for branding, website design or digital marketing services?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Simply contact us through our website, email, phone or WhatsApp. Our team will understand your requirements, discuss your goals and provide a customized proposal tailored to your business needs.",
          },
        },
      ],
    },
  ],
};

type ContactPageProps = {
  searchParams: Promise<{
    service?: string | string[];
    city?: string | string[];
    [key: string]: string | string[] | undefined;
  }>;
};

export default async function Contact({
  searchParams,
}: ContactPageProps) {
  const params = await searchParams;

  /*
   * Prevent parameter-based duplicate contact pages.
   *
   * Example:
   * /contact?service=events-weddings&city=mumbai
   * redirects permanently to:
   * /contact
   */
  if (Object.keys(params).length > 0) {
    permanentRedirect("/contact");
  }

  return (
    <>
      <script
        id="contact-structured-data"
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <main>
        <Navbar />
        <ContactHero />
        <LocationSEO />
        <ServicesSEO />
        <ContactInfo />
        <ContactMap />
        <ContactFaq />
        <Footer />
      </main>
    </>
  );
}