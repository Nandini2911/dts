import AboutCta from "@/components/About/AboutCta";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ClientLogo from "@/components/Work/ClientLogo";
import FeaturedWork from "@/components/Work/FeaturedWork";
import HeroWork from "@/components/Work/HeroWork";
import Testmonial from "@/components/Work/Testmonial";
import WorkFaq from "@/components/Work/WorkFaq";

const workSchema = {
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
        "Double Trouble Studio is an India-based branding, website design, PR, digital marketing, event marketing, guest management and AI video production agency helping modern businesses grow through strategy, storytelling and performance-driven experiences.",
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
        "Website Design",
        "Digital Marketing",
        "Social Media Marketing",
        "Public Relations",
        "SEO",
        "AI Video Production",
        "VFX",
        "Creative Direction",
        "Luxury Brand Positioning",
        "Hospitality Marketing",
        "Restaurant Marketing",
      ],
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
      "@type": "CollectionPage",
      "@id": "https://www.dtsworld.in/work/#webpage",
      url: "https://www.dtsworld.in/work/",
      name: "Selected Creative Projects | Double Trouble Studio",
      headline: "Luxury Branding, Website Design & Digital Marketing Projects",
      description:
        "Explore premium branding, website design, PR campaigns, AI content and digital marketing projects crafted by Double Trouble Studio for hospitality, luxury, restaurant and lifestyle brands across India.",
      isPartOf: {
        "@id": "https://www.dtsworld.in/#website",
      },
      about: {
        "@id": "https://www.dtsworld.in/#organization",
      },
      mainEntity: {
        "@id": "https://www.dtsworld.in/work/#projects",
      },
      breadcrumb: {
        "@id": "https://www.dtsworld.in/work/#breadcrumb",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dtsworld.in/work/#breadcrumb",
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
          name: "Work",
          item: "https://www.dtsworld.in/work/",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/work/#projects",
      name: "Selected Creative Projects by Double Trouble Studio",
      description:
        "A curated collection of premium digital experiences, branding systems and modern marketing campaigns designed for ambitious brands.",
      numberOfItems: 10,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "CreativeWork",
            "@id": "https://www.dtsworld.in/work/#rnk-rentals",
            name: "RNK Rentals",
            headline: "Luxury Automotive Brand",
            description:
              "A premium digital transformation for RNK Rentals focused on luxury website design, SEO optimization and strategic social media management designed to strengthen digital visibility and customer perception.",
            creator: {
              "@id": "https://www.dtsworld.in/#organization",
            },
            about: [
              "Website Design",
              "SEO",
              "Social Media Marketing",
              "Luxury Automotive Branding",
            ],
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "CreativeWork",
            "@id":
              "https://www.dtsworld.in/work/#all-india-police-golf-tournament",
            name: "All India Police Golf Tournament",
            headline: "Luxury Event & Sports Experience",
            description:
              "Creative support and premium event branding designed for the prestigious All India Police Golf Tournament, focused on elevated visuals and modern event presentation.",
            creator: {
              "@id": "https://www.dtsworld.in/#organization",
            },
            about: [
              "Event Branding",
              "Creative Support",
              "Digital Assets",
              "Sports Event Branding",
            ],
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "CreativeWork",
            "@id": "https://www.dtsworld.in/work/#india-today",
            name: "India Today",
            headline: "Media & Broadcasting",
            description:
              "High-impact video editing and premium creative assets developed for India Today to enhance digital storytelling and audience engagement across media platforms.",
            creator: {
              "@id": "https://www.dtsworld.in/#organization",
            },
            about: [
              "Video Editing",
              "Creative Production",
              "Digital Storytelling",
              "Media Campaigns",
            ],
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "CreativeWork",
            "@id": "https://www.dtsworld.in/work/#shruti-chadha",
            name: "Shruti Chadha",
            headline: "Personal Brand & Business",
            description:
              "Custom website design and SEO strategy created to improve online visibility, strengthen digital presence and elevate brand positioning.",
            creator: {
              "@id": "https://www.dtsworld.in/#organization",
            },
            about: ["Website Design", "SEO Optimization", "Personal Branding"],
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "CreativeWork",
            "@id": "https://www.dtsworld.in/work/#brownie-point",
            name: "Brownie Point",
            headline: "Food & Hospitality Brand",
            description:
              "Social media management and content direction focused on creating stronger engagement, aesthetic consistency and modern digital brand presence.",
            creator: {
              "@id": "https://www.dtsworld.in/#organization",
            },
            about: [
              "Social Media Management",
              "Content Strategy",
              "Food Brand Marketing",
              "Hospitality Branding",
            ],
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "CreativeWork",
            "@id": "https://www.dtsworld.in/work/#bharat-reshma",
            name: "Bharat Reshma",
            headline: "AI Creative Campaign",
            description:
              "AI-generated cinematic visuals and modern storytelling campaigns developed to create high-impact digital content and premium audience engagement.",
            creator: {
              "@id": "https://www.dtsworld.in/#organization",
            },
            about: [
              "AI Video",
              "Visual Storytelling",
              "VFX",
              "AI Creative Campaign",
            ],
          },
        },
        {
          "@type": "ListItem",
          position: 7,
          item: {
            "@type": "CreativeWork",
            "@id": "https://www.dtsworld.in/work/#xiimba",
            name: "Xiimba.com",
            headline: "Digital Platform",
            description:
              "Modern website experience designed with clean UI, responsive systems and performance-focused digital architecture for stronger user engagement.",
            creator: {
              "@id": "https://www.dtsworld.in/#organization",
            },
            about: [
              "Website Design",
              "Website Development",
              "UI Design",
              "Digital Platform",
            ],
          },
        },
        {
          "@type": "ListItem",
          position: 8,
          item: {
            "@type": "CreativeWork",
            "@id": "https://www.dtsworld.in/work/#allpeople",
            name: "AllPeople",
            headline: "Beauty & E-commerce Platform",
            description:
              "E-commerce-focused website experience developed for skincare and beauty products including shampoos, face mists and self-care essentials.",
            creator: {
              "@id": "https://www.dtsworld.in/#organization",
            },
            about: [
              "Website Design",
              "E-commerce",
              "Product Experience",
              "Beauty Brand Website",
            ],
          },
        },
        {
          "@type": "ListItem",
          position: 9,
          item: {
            "@type": "CreativeWork",
            "@id": "https://www.dtsworld.in/work/#butter-chicken",
            name: "Butter Chicken",
            headline: "Restaurant & Food Brand",
            description:
              "Social media campaigns and content strategy designed to increase restaurant visibility, customer engagement and modern food brand perception.",
            creator: {
              "@id": "https://www.dtsworld.in/#organization",
            },
            about: [
              "Social Media Marketing",
              "Content Creation",
              "Restaurant Marketing",
              "Food Brand Marketing",
            ],
          },
        },
        {
          "@type": "ListItem",
          position: 10,
          item: {
            "@type": "CreativeWork",
            "@id": "https://www.dtsworld.in/work/#vow-story",
            name: "Vow Story",
            headline: "Luxury Wedding Planning Brand",
            description:
              "Creative storytelling and social media direction developed for a modern wedding planning brand focused on luxury experiences and emotional visual identity.",
            creator: {
              "@id": "https://www.dtsworld.in/#organization",
            },
            about: [
              "Branding",
              "Social Media",
              "Creative Direction",
              "Luxury Wedding Branding",
            ],
          },
        },
      ],
    },
    {
      "@type": "Review",
      "@id": "https://www.dtsworld.in/work/#rnk-rentals-review",
      itemReviewed: {
        "@id": "https://www.dtsworld.in/#organization",
      },
      author: {
        "@type": "Organization",
        name: "RNK Rentals",
      },
      reviewBody:
        "Double Trouble Studio completely transformed our digital presence with a premium website experience, strategic SEO and modern branding direction. The execution felt luxury, clean and highly professional.",
      name: "RNK Rentals Client Testimonial",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.dtsworld.in/work/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does Double Trouble Studio offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Double Trouble Studio specializes in branding, website design, social media management, PR, digital campaigns, creative direction and premium visual identity systems tailored for modern brands.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with startups and small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio works with startups, small businesses, founder-led brands, restaurants, hospitality brands, lifestyle businesses and premium service brands across India.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a branding or website project take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The timeline depends on project scope, number of pages, content requirements, design complexity, approval speed and development needs.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide social media content creation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio provides social media content creation, content strategy, campaign planning, creative direction, reels, static posts and brand-led communication.",
          },
        },
        {
          "@type": "Question",
          name: "Can we work together remotely?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio works remotely with brands across India through structured communication, digital planning, project coordination and online reviews.",
          },
        },
        {
          "@type": "Question",
          name: "Do you create SEO-optimized websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio creates SEO-optimized websites with clean structure, responsive design, metadata, content hierarchy, performance-focused development and conversion-ready layouts.",
          },
        },
        {
          "@type": "Question",
          name: "Can you manage social media monthly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio provides monthly social media management including content planning, creative direction, post design, captions, reels, campaigns and brand communication.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with restaurants and hospitality brands?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio works with restaurants, cafes, hospitality brands, luxury businesses and lifestyle brands to build stronger digital presence and premium brand perception.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide AI video campaigns?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio provides AI video campaigns, AI-generated visuals, cinematic storytelling, VFX content and digital campaign assets for modern brands.",
          },
        },
        {
          "@type": "Question",
          name: "Can Double Trouble Studio work remotely across India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio works remotely with brands across Mumbai, Delhi, Chandigarh, Bangalore, Hyderabad, Pune, Ahmedabad, Goa and across India.",
          },
        },
      ],
    },
  ],
};

export default function Work() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workSchema),
        }}
      />

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