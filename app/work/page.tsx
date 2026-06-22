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

const workSchema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "ImageObject",
      "@id": "https://www.dtsworld.in/#logo",

      "url": "https://www.dtsworld.in/logo.png",

      "contentUrl": "https://www.dtsworld.in/logo.png",

      "caption": "Double Trouble Studio Logo",

      "inLanguage": "en-IN",
    },

    {
      "@type": [
        "Organization",
        "LocalBusiness",
      ],

      "@id": "https://www.dtsworld.in/#organization",

      "name": "Double Trouble Studio",

      "legalName": "Double Trouble Studio Pvt. Ltd.",

      "alternateName": [
        "DTS",
        "DTS World",
      ],

      "url": "https://www.dtsworld.in/",

      "logo": {
        "@id": "https://www.dtsworld.in/#logo",
      },

      "image": {
        "@id": "https://www.dtsworld.in/#logo",
      },

      "description":
        "Double Trouble Studio is a Mumbai-based branding, website design, public relations, digital marketing, event marketing, guest management and AI video production agency helping modern businesses grow through strategy, storytelling and performance-driven creative experiences.",

      "slogan":
        "Creative Agency for Brands, Events and Digital Growth",

      "telephone": "+918000006021",

      "email": "hellodoubletroublestudio@gmail.com",

      "priceRange": "Custom project pricing",

      "address": {
        "@type": "PostalAddress",

        "streetAddress":
          "Plot No. 177, 1st Floor, Aaram Nagar Part 2, Seven Bungalows, J. P. Road, Versova, Andheri West",

        "addressLocality": "Mumbai",

        "addressRegion": "Maharashtra",

        "postalCode": "400061",

        "addressCountry": "IN",
      },

      "contactPoint": {
        "@type": "ContactPoint",

        "@id": "https://www.dtsworld.in/#contact-point",

        "contactType": "customer service",

        "telephone": "+918000006021",

        "email": "hellodoubletroublestudio@gmail.com",

        "url": "https://www.dtsworld.in/contact",

        "areaServed": {
          "@type": "Country",
          "name": "India",
        },

        "availableLanguage": [
          "English",
          "Hindi",
        ],
      },

      "areaServed": [
        {
          "@type": "Country",
          "name": "India",
        },
        {
          "@type": "City",
          "name": "Mumbai",
        },
        {
          "@type": "City",
          "name": "Delhi",
        },
        {
          "@type": "City",
          "name": "Chandigarh",
        },
        {
          "@type": "City",
          "name": "Bengaluru",
          "alternateName": "Bangalore",
        },
        {
          "@type": "City",
          "name": "Hyderabad",
        },
        {
          "@type": "City",
          "name": "Pune",
        },
        {
          "@type": "City",
          "name": "Ahmedabad",
        },
        {
          "@type": "AdministrativeArea",
          "name": "Goa",
        },
      ],

      "knowsAbout": [
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
    },

    {
      "@type": "WebSite",

      "@id": "https://www.dtsworld.in/#website",

      "url": "https://www.dtsworld.in/",

      "name": "Double Trouble Studio",

      "alternateName": [
        "DTS",
        "DTS World",
      ],

      "description":
        "Double Trouble Studio is a creative agency in Mumbai providing branding, website design, PR, digital marketing, SEO, event marketing, AI video production and VFX services across India.",

      "publisher": {
        "@id": "https://www.dtsworld.in/#organization",
      },

      "inLanguage": "en-IN",
    },

    {
      "@type": "CollectionPage",

      "@id": "https://www.dtsworld.in/work#webpage",

      "url": "https://www.dtsworld.in/work",

      "name":
        "Double Trouble Studio Work | Branding, Website Design and Digital Marketing Projects",

      "headline":
        "Luxury Branding, Website Design & Digital Marketing Projects",

      "description":
        "Explore premium branding, website design, PR campaigns, AI content and digital marketing projects created by Double Trouble Studio for hospitality, luxury, restaurant, automotive, media, beauty and lifestyle brands across India.",

      "isPartOf": {
        "@id": "https://www.dtsworld.in/#website",
      },

      "about": {
        "@id": "https://www.dtsworld.in/#organization",
      },

      "mainEntity": {
        "@id": "https://www.dtsworld.in/work#projects",
      },

      "publisher": {
        "@id": "https://www.dtsworld.in/#organization",
      },

      "creator": {
        "@id": "https://www.dtsworld.in/#organization",
      },

      "breadcrumb": {
        "@id": "https://www.dtsworld.in/work#breadcrumb",
      },

      "hasPart": [
        {
          "@id": "https://www.dtsworld.in/work#projects",
        },
        {
          "@id": "https://www.dtsworld.in/work#faq",
        },
      ],

      "significantLink": [
        "https://www.dtsworld.in/",
        "https://www.dtsworld.in/about",
        "https://www.dtsworld.in/services",
        "https://www.dtsworld.in/blog",
        "https://www.dtsworld.in/contact",
      ],

      "copyrightYear": 2026,

      "copyrightHolder": {
        "@id": "https://www.dtsworld.in/#organization",
      },

      "inLanguage": "en-IN",
    },

    {
      "@type": "BreadcrumbList",

      "@id": "https://www.dtsworld.in/work#breadcrumb",

      "itemListElement": [
        {
          "@type": "ListItem",

          "position": 1,

          "name": "Home",

          "item": "https://www.dtsworld.in/",
        },

        {
          "@type": "ListItem",

          "position": 2,

          "name": "Work",

          "item": "https://www.dtsworld.in/work",
        },
      ],
    },

    {
      "@type": "ItemList",

      "@id": "https://www.dtsworld.in/work#projects",

      "url": "https://www.dtsworld.in/work#projects",

      "name":
        "Selected Creative Projects by Double Trouble Studio",

      "description":
        "A curated collection of premium digital experiences, branding systems, website projects, AI campaigns and modern marketing work designed for ambitious brands.",

      "itemListOrder":
        "https://schema.org/ItemListOrderAscending",

      "numberOfItems": 10,

      "itemListElement": [
        {
          "@type": "ListItem",

          "position": 1,

          "item": {
            "@type": "CreativeWork",

            "@id":
              "https://www.dtsworld.in/work#rnk-rentals",

            "name": "RNK Rentals",

            "headline":
              "RNK Rentals Luxury Automotive Digital Transformation",

            "description":
              "A premium digital transformation for RNK Rentals focused on luxury website design, SEO optimization and strategic social media management designed to strengthen digital visibility and customer perception.",

            "genre": "Creative Agency Case Study",

            "keywords": [
              "Website Design",
              "SEO",
              "Social Media Marketing",
              "Luxury Automotive Branding",
              "Digital Transformation",
            ],

            "creator": {
              "@id": "https://www.dtsworld.in/#organization",
            },

            "publisher": {
              "@id": "https://www.dtsworld.in/#organization",
            },

            "isPartOf": {
              "@id": "https://www.dtsworld.in/work#webpage",
            },

            "inLanguage": "en-IN",
          },
        },

        {
          "@type": "ListItem",

          "position": 2,

          "item": {
            "@type": "CreativeWork",

            "@id":
              "https://www.dtsworld.in/work#all-india-police-golf-tournament",

            "name":
              "All India Police Golf Tournament",

            "headline":
              "All India Police Golf Tournament Event Branding",

            "description":
              "Creative support and premium event branding designed for the prestigious All India Police Golf Tournament, focused on elevated visuals and modern event presentation.",

            "genre": "Event Branding Case Study",

            "keywords": [
              "Event Branding",
              "Creative Support",
              "Digital Assets",
              "Sports Event Branding",
              "Event Production",
            ],

            "creator": {
              "@id": "https://www.dtsworld.in/#organization",
            },

            "publisher": {
              "@id": "https://www.dtsworld.in/#organization",
            },

            "isPartOf": {
              "@id": "https://www.dtsworld.in/work#webpage",
            },

            "inLanguage": "en-IN",
          },
        },

        {
          "@type": "ListItem",

          "position": 3,

          "item": {
            "@type": "CreativeWork",

            "@id":
              "https://www.dtsworld.in/work#india-today",

            "name": "India Today",

            "headline":
              "India Today Video Editing and Creative Production",

            "description":
              "High-impact video editing and premium creative assets developed for India Today to enhance digital storytelling and audience engagement across media platforms.",

            "genre": "Media Creative Production Case Study",

            "keywords": [
              "Video Editing",
              "Creative Production",
              "Digital Storytelling",
              "Media Campaigns",
              "Creative Assets",
            ],

            "creator": {
              "@id": "https://www.dtsworld.in/#organization",
            },

            "publisher": {
              "@id": "https://www.dtsworld.in/#organization",
            },

            "isPartOf": {
              "@id": "https://www.dtsworld.in/work#webpage",
            },

            "inLanguage": "en-IN",
          },
        },

        {
          "@type": "ListItem",

          "position": 4,

          "item": {
            "@type": "CreativeWork",

            "@id":
              "https://www.dtsworld.in/work#shruti-chadha",

            "name": "Shruti Chadha",

            "headline":
              "Shruti Chadha Personal Brand Website and SEO",

            "description":
              "Custom website design and SEO strategy created to improve online visibility, strengthen digital presence and elevate personal brand positioning.",

            "genre": "Personal Branding Case Study",

            "keywords": [
              "Website Design",
              "SEO Optimization",
              "Personal Branding",
              "Digital Presence",
            ],

            "creator": {
              "@id": "https://www.dtsworld.in/#organization",
            },

            "publisher": {
              "@id": "https://www.dtsworld.in/#organization",
            },

            "isPartOf": {
              "@id": "https://www.dtsworld.in/work#webpage",
            },

            "inLanguage": "en-IN",
          },
        },

        {
          "@type": "ListItem",

          "position": 5,

          "item": {
            "@type": "CreativeWork",

            "@id":
              "https://www.dtsworld.in/work#brownie-point",

            "name": "Brownie Point",

            "headline":
              "Brownie Point Social Media and Content Strategy",

            "description":
              "Social media management and content direction focused on creating stronger engagement, aesthetic consistency and a modern digital presence for the food and hospitality brand.",

            "genre": "Social Media Marketing Case Study",

            "keywords": [
              "Social Media Management",
              "Content Strategy",
              "Food Brand Marketing",
              "Hospitality Marketing",
              "Digital Branding",
            ],

            "creator": {
              "@id": "https://www.dtsworld.in/#organization",
            },

            "publisher": {
              "@id": "https://www.dtsworld.in/#organization",
            },

            "isPartOf": {
              "@id": "https://www.dtsworld.in/work#webpage",
            },

            "inLanguage": "en-IN",
          },
        },

        {
          "@type": "ListItem",

          "position": 6,

          "item": {
            "@type": "CreativeWork",

            "@id":
              "https://www.dtsworld.in/work#bharat-reshma",

            "name": "Bharat Reshma",

            "headline":
              "Bharat Reshma AI Video and Visual Storytelling Campaign",

            "description":
              "AI-generated cinematic visuals and modern storytelling campaigns developed to create high-impact digital content and premium audience engagement.",

            "genre": "AI Creative Campaign Case Study",

            "keywords": [
              "AI Video",
              "Visual Storytelling",
              "VFX",
              "AI Creative Campaign",
              "Cinematic Visuals",
            ],

            "creator": {
              "@id": "https://www.dtsworld.in/#organization",
            },

            "publisher": {
              "@id": "https://www.dtsworld.in/#organization",
            },

            "isPartOf": {
              "@id": "https://www.dtsworld.in/work#webpage",
            },

            "inLanguage": "en-IN",
          },
        },

        {
          "@type": "ListItem",

          "position": 7,

          "item": {
            "@type": "CreativeWork",

            "@id":
              "https://www.dtsworld.in/work#xiimba",

            "name": "Xiimba.com",

            "headline":
              "Xiimba.com Digital Platform Website Development",

            "description":
              "A modern website experience designed with clean UI, responsive systems and performance-focused digital architecture for stronger user engagement.",

            "genre": "Website Development Case Study",

            "keywords": [
              "Website Design",
              "Website Development",
              "UI Design",
              "Responsive Development",
              "Digital Platform",
            ],

            "creator": {
              "@id": "https://www.dtsworld.in/#organization",
            },

            "publisher": {
              "@id": "https://www.dtsworld.in/#organization",
            },

            "isPartOf": {
              "@id": "https://www.dtsworld.in/work#webpage",
            },

            "inLanguage": "en-IN",
          },
        },

        {
          "@type": "ListItem",

          "position": 8,

          "item": {
            "@type": "CreativeWork",

            "@id":
              "https://www.dtsworld.in/work#allpeople",

            "name": "AllPeople",

            "headline":
              "AllPeople Beauty and E-commerce Website Experience",

            "description":
              "An e-commerce-focused website experience developed for skincare, beauty and self-care products to improve product discovery and customer experience.",

            "genre": "E-commerce Website Case Study",

            "keywords": [
              "Website Design",
              "E-commerce",
              "Product Experience",
              "Beauty Brand Website",
              "User Experience",
            ],

            "creator": {
              "@id": "https://www.dtsworld.in/#organization",
            },

            "publisher": {
              "@id": "https://www.dtsworld.in/#organization",
            },

            "isPartOf": {
              "@id": "https://www.dtsworld.in/work#webpage",
            },

            "inLanguage": "en-IN",
          },
        },

        {
          "@type": "ListItem",

          "position": 9,

          "item": {
            "@type": "CreativeWork",

            "@id":
              "https://www.dtsworld.in/work#butter-chicken",

            "name": "Butter Chicken",

            "headline":
              "Butter Chicken Restaurant Social Media Marketing",

            "description":
              "Social media campaigns and content strategy designed to increase restaurant visibility, customer engagement and modern food brand perception.",

            "genre": "Restaurant Marketing Case Study",

            "keywords": [
              "Social Media Marketing",
              "Content Creation",
              "Restaurant Marketing",
              "Food Brand Marketing",
              "Local Digital Marketing",
            ],

            "creator": {
              "@id": "https://www.dtsworld.in/#organization",
            },

            "publisher": {
              "@id": "https://www.dtsworld.in/#organization",
            },

            "isPartOf": {
              "@id": "https://www.dtsworld.in/work#webpage",
            },

            "inLanguage": "en-IN",
          },
        },

        {
          "@type": "ListItem",

          "position": 10,

          "item": {
            "@type": "CreativeWork",

            "@id":
              "https://www.dtsworld.in/work#vow-story",

            "name": "Vow Story",

            "headline":
              "Vow Story Luxury Wedding Brand Creative Direction",

            "description":
              "Creative storytelling and social media direction developed for a modern wedding planning brand focused on luxury experiences and emotional visual identity.",

            "genre": "Luxury Wedding Branding Case Study",

            "keywords": [
              "Branding",
              "Social Media",
              "Creative Direction",
              "Luxury Wedding Branding",
              "Visual Storytelling",
            ],

            "creator": {
              "@id": "https://www.dtsworld.in/#organization",
            },

            "publisher": {
              "@id": "https://www.dtsworld.in/#organization",
            },

            "isPartOf": {
              "@id": "https://www.dtsworld.in/work#webpage",
            },

            "inLanguage": "en-IN",
          },
        },
      ],
    },

    {
      "@type": "FAQPage",

      "@id": "https://www.dtsworld.in/work#faq",

      "url": "https://www.dtsworld.in/work#faq",

      "name":
        "Frequently Asked Questions About Double Trouble Studio Projects",

      "description":
        "Answers to common questions about Double Trouble Studio services, creative projects, website development, SEO, social media management, hospitality marketing, AI video production and remote collaboration.",

      "isPartOf": {
        "@id": "https://www.dtsworld.in/work#webpage",
      },

      "about": {
        "@id": "https://www.dtsworld.in/#organization",
      },

      "publisher": {
        "@id": "https://www.dtsworld.in/#organization",
      },

      "inLanguage": "en-IN",

      "mainEntity": [
        {
          "@type": "Question",

          "@id":
            "https://www.dtsworld.in/work#faq-services",

          "name":
            "What services does Double Trouble Studio offer?",

          "acceptedAnswer": {
            "@type": "Answer",

            "text":
              "We specialize in branding, website design, social media management, PR, digital campaigns, creative direction and premium visual identity systems tailored for modern brands.",
          },
        },

        {
          "@type": "Question",

          "@id":
            "https://www.dtsworld.in/work#faq-startups",

          "name":
            "Do you work with startups and small businesses?",

          "acceptedAnswer": {
            "@type": "Answer",

            "text":
              "Yes. We work with modern startups, growing businesses and established brands looking to elevate their digital presence, customer perception and premium positioning.",
          },
        },

        {
          "@type": "Question",

          "@id":
            "https://www.dtsworld.in/work#faq-project-duration",

          "name":
            "How long does a branding or website project take?",

          "acceptedAnswer": {
            "@type": "Answer",

            "text":
              "Project timelines depend on the scope, but most branding and website projects typically take between 2–6 weeks including strategy, design, development and revisions.",
          },
        },

        {
          "@type": "Question",

          "@id":
            "https://www.dtsworld.in/work#faq-content-creation",

          "name":
            "Do you provide social media content creation?",

          "acceptedAnswer": {
            "@type": "Answer",

            "text":
              "Absolutely. We create premium social media strategies, visual content systems, reels direction, creative campaigns and high-converting digital assets for modern brands.",
          },
        },

        {
          "@type": "Question",

          "@id":
            "https://www.dtsworld.in/work#faq-remote",

          "name":
            "Can we work together remotely?",

          "acceptedAnswer": {
            "@type": "Answer",

            "text":
              "Yes. We work with clients across India and internationally through smooth remote collaboration, organized workflows and structured communication systems.",
          },
        },

        {
          "@type": "Question",

          "@id":
            "https://www.dtsworld.in/work#faq-seo-websites",

          "name":
            "Do you create SEO-optimized websites?",

          "acceptedAnswer": {
            "@type": "Answer",

            "text":
              "Yes. Every website is built with SEO-focused structure, optimized performance, responsive systems and modern user experience to improve online visibility and search rankings.",
          },
        },

        {
          "@type": "Question",

          "@id":
            "https://www.dtsworld.in/work#faq-social-media-management",

          "name":
            "Can you manage social media monthly?",

          "acceptedAnswer": {
            "@type": "Answer",

            "text":
              "Absolutely. We provide monthly social media management including strategy, content creation, reels direction, posting systems, creative assets and audience engagement support.",
          },
        },

        {
          "@type": "Question",

          "@id":
            "https://www.dtsworld.in/work#faq-hospitality",

          "name":
            "Do you work with restaurants and hospitality brands?",

          "acceptedAnswer": {
            "@type": "Answer",

            "text":
              "Yes. Hospitality, restaurants, cafés, luxury dining brands and lifestyle businesses are one of our strongest creative categories with a focus on premium digital experiences and modern brand storytelling.",
          },
        },

        {
          "@type": "Question",

          "@id":
            "https://www.dtsworld.in/work#faq-ai-video",

          "name":
            "Do you provide AI video campaigns?",

          "acceptedAnswer": {
            "@type": "Answer",

            "text":
              "Yes. We create AI-powered cinematic campaigns, visual storytelling content, AI video production and modern VFX experiences designed for high-impact digital engagement.",
          },
        },

        {
          "@type": "Question",

          "@id":
            "https://www.dtsworld.in/work#faq-india",

          "name":
            "Can Double Trouble Studio work remotely across India?",

          "acceptedAnswer": {
            "@type": "Answer",

            "text":
              "Absolutely. We collaborate remotely with brands across India through streamlined communication, online project management and efficient digital workflows.",
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