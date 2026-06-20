import AboutCTA from "@/components/About/AboutCta";
import AboutExperience from "@/components/About/AboutExperience";
import AboutFaq from "@/components/About/AboutFaq";
import AboutHero from "@/components/About/AboutHero";
import AboutStory from "@/components/About/AboutStory";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatWeBelieve from "@/components/About/WhatWeBelive";
import LeadershipSection from "@/components/About/LeadershipSection";
import OurTeamSection from "@/components/About/OurTeamSection";

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.dtsworld.in/#organization",
      name: "Double Trouble Studio",
      alternateName: "DTS World",
      url: "https://www.dtsworld.in/",
      logo: {
        "@type": "ImageObject",
        "@id": "https://www.dtsworld.in/#logo",
        url: "https://www.dtsworld.in/logo.png",
      },
      image: "https://www.dtsworld.in/og-image.jpg",
      description:
        "Double Trouble Studio is a Mumbai-based creative agency, branding agency and digital marketing agency building luxury digital experiences, modern storytelling, PR campaigns, website development, AI video production and high-performance brand systems for hospitality, lifestyle, luxury, restaurant and culture-driven brands across India.",
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
      knowsAbout: [
        "Branding",
        "Digital Marketing",
        "Public Relations",
        "Website Development",
        "SEO",
        "AI Video Production",
        "VFX",
        "Guest Management",
        "Event Marketing",
        "Luxury Brand Positioning",
      ],
    },
    {
      "@type": "AboutPage",
      "@id": "https://www.dtsworld.in/about/#webpage",
      url: "https://www.dtsworld.in/about/",
      name: "About Double Trouble Studio | Creative Agency in India",
      headline: "We Build Cultural Brands That Feel Alive",
      description:
        "About Double Trouble Studio, a Mumbai based creative agency, branding agency, digital marketing agency, PR agency, website development company, guest management agency, event marketing agency and AI video production studio in India.",
      inLanguage: "en-IN",
      isPartOf: {
        "@id": "https://www.dtsworld.in/#website",
      },
      about: {
        "@id": "https://www.dtsworld.in/#organization",
      },
      mainEntity: {
        "@id": "https://www.dtsworld.in/#organization",
      },
      breadcrumb: {
        "@id": "https://www.dtsworld.in/about/#breadcrumb",
      },
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
      "@type": "BreadcrumbList",
      "@id": "https://www.dtsworld.in/about/#breadcrumb",
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
          item: "https://www.dtsworld.in/about/",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/about/#leadership",
      name: "Double Trouble Studio Leadership Team",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Person",
            "@id": "https://www.dtsworld.in/about/#arryan-arora",
            name: "Arryan Arora",
            jobTitle: "Director, Strategy & Growth",
            worksFor: {
              "@id": "https://www.dtsworld.in/#organization",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Person",
            "@id": "https://www.dtsworld.in/about/#sanjeev-seth",
            name: "Sanjeev Seth",
            jobTitle: "Chair Person & Finance",
            worksFor: {
              "@id": "https://www.dtsworld.in/#organization",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Person",
            "@id": "https://www.dtsworld.in/about/#hitesh-kukreja",
            name: "Hitesh Kukreja",
            jobTitle: "CEO, Finance",
            worksFor: {
              "@id": "https://www.dtsworld.in/#organization",
            },
          },
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.dtsworld.in/about/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What makes Double Trouble Studio different from other agencies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Double Trouble Studio combines brand strategy, storytelling, premium visual direction, PR, digital marketing and website thinking to build brands that feel culturally relevant, emotionally engaging and intentionally designed for long-term growth.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of brands do you usually work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Double Trouble Studio works with hospitality brands, luxury brands, restaurants, cafes, wedding companies, event brands, lifestyle startups, fashion labels, creators, influencers, corporate brands, founders and modern businesses across India.",
          },
        },
        {
          "@type": "Question",
          name: "What is the philosophy behind your creative process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The creative process at Double Trouble Studio is built on strategic thinking, premium execution and cultural relevance. The studio focuses on clarity, emotional storytelling, SEO-ready digital systems, PR-led brand communication and long-term brand architecture.",
          },
        },
        {
          "@type": "Question",
          name: "Do you focus only on aesthetics or strategy as well?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Double Trouble Studio focuses on both aesthetics and strategy. Every creative decision is supported by brand positioning, audience research, category understanding, SEO intent and long-term digital growth direction.",
          },
        },
        {
          "@type": "Question",
          name: "Can Double Trouble Studio work with brands remotely?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio works remotely with brands across Mumbai, Delhi, Chandigarh, Bangalore, Hyderabad, Pune, Ahmedabad, Goa and across India through structured communication, digital planning, project coordination and online reviews.",
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
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />

      <main>
        <Navbar />
        <AboutHero />
        <AboutStory />
        <AboutExperience />
        <WhatWeBelieve />
        <LeadershipSection />
        <OurTeamSection />
        <AboutFaq />
        <AboutCTA />
        <Footer />
      </main>
    </>
  );
}