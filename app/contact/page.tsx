import ContactFaq from "@/components/Contact/ContactFaq";
import ContactHero from "@/components/Contact/ContactHero";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactMap from "@/components/Contact/ContactMap";
import LocationSEO from "@/components/Contact/LocationSEO";
import ServicesSEO from "@/components/Contact/ServicesSEO";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.dtsworld.in/contact/#webpage",
      url: "https://www.dtsworld.in/contact/",
      name: "Contact Double Trouble Studio | Branding & Website Design Agency in Mumbai",
      headline: "Let's Create Something Amazing",
      description:
        "Contact Double Trouble Studio for branding, website design, digital marketing, PR, guest management, celebrity management, event planning, wedding management, AI video production and VFX services in Mumbai and across India.",
      inLanguage: "en-IN",
      about: {
        "@id": "https://www.dtsworld.in/#organization",
      },
      mainEntity: {
        "@id": "https://www.dtsworld.in/#organization",
      },
      breadcrumb: {
        "@id": "https://www.dtsworld.in/contact/#breadcrumb",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.dtsworld.in/#organization",
      name: "Double Trouble Studio",
      alternateName: "DTS World",
      url: "https://www.dtsworld.in/",
      logo: "https://www.dtsworld.in/logo.png",
      image: "https://www.dtsworld.in/og-image.jpg",
      description:
        "Double Trouble Studio is an India-based branding, website design, digital marketing, PR, event marketing, guest management and AI video production agency helping modern businesses grow through strategy, storytelling and performance-driven experiences.",
      email: "hello@dtsworld.in",
      telephone: "+918000006021",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Suite 19, Kaliandas Udyog Bhavan, Century Bazar, Prabhadevi",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400025",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+918000006021",
        email: "hello@dtsworld.in",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      areaServed: [
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
        {
          "@type": "Country",
          name: "India",
        },
      ],
      knowsAbout: [
        "Branding",
        "Website Design",
        "Website Development",
        "Digital Marketing",
        "Social Media Marketing",
        "Public Relations",
        "SEO",
        "Performance Marketing",
        "Guest Management",
        "Celebrity Management",
        "Event Planning",
        "Wedding Management",
        "AI Video Production",
        "VFX",
        "Creative Direction",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dtsworld.in/contact/#breadcrumb",
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
          item: "https://www.dtsworld.in/contact/",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/contact/#services",
      name: "Double Trouble Studio Services",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Guest Management",
          url: "https://www.dtsworld.in/services/guest-management",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Celebrity Management",
          url: "https://www.dtsworld.in/services/celebrity-management",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Events & Weddings",
          url: "https://www.dtsworld.in/services/events-weddings",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "PR, Media & Digital Marketing",
          url: "https://www.dtsworld.in/services/pr-media-digital-marketing",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Web Development & Marketing",
          url: "https://www.dtsworld.in/services/web-development-marketing",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "AI Video & VFX",
          url: "https://www.dtsworld.in/services/ai-video-vfx",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.dtsworld.in/contact/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What branding services does Double Trouble Studio offer in Mumbai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Double Trouble Studio helps businesses build memorable brands through strategic brand development, visual identity design, brand positioning, messaging, creative direction and integrated marketing solutions designed for long-term growth.",
          },
        },
        {
          "@type": "Question",
          name: "Why should I hire a branding agency in Mumbai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hiring a branding agency in Mumbai helps businesses build stronger brand positioning, clearer messaging, better visual identity, premium customer perception and consistent communication across websites, social media and marketing channels.",
          },
        },
        {
          "@type": "Question",
          name: "How much does professional website design cost in Mumbai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Professional website design cost in Mumbai depends on the number of pages, design complexity, content requirements, SEO needs, development features, integrations and project timeline.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide website design and branding services together?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio provides website design and branding services together, including brand strategy, visual identity, website structure, content direction, SEO foundations and premium digital experience design.",
          },
        },
        {
          "@type": "Question",
          name: "What digital marketing services does Double Trouble Studio provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Double Trouble Studio provides digital marketing services including social media marketing, content creation, campaign strategy, SEO, performance marketing, PR campaigns, media outreach and creative direction.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with startups and growing businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio works with startups, founders, hospitality brands, restaurants, cafes, luxury businesses and growing companies across Mumbai, Maharashtra and India.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to complete a branding or website project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The timeline depends on project scope, number of pages, branding requirements, content readiness, design complexity, feedback cycles and development needs.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with clients outside Mumbai and India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio works with clients across Mumbai, Navi Mumbai, Thane, Pune, India and internationally through structured online communication and project coordination.",
          },
        },
        {
          "@type": "Question",
          name: "Why choose Double Trouble Studio for branding, website design and marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Double Trouble Studio combines brand strategy, premium visual direction, website design, digital marketing, PR and storytelling to create refined brand experiences designed for long-term growth.",
          },
        },
        {
          "@type": "Question",
          name: "How can I get a quote for branding, website design or digital marketing services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can contact Double Trouble Studio through the contact form, email or phone to share your project requirements and receive a tailored quote for branding, website design or digital marketing services.",
          },
        },
      ],
    },
  ],
};

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
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