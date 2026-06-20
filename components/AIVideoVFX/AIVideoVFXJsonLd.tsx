const faqs = [
  {
    question: "What is AI video production?",
    answer:
      "AI video production is the process of creating video content using artificial intelligence tools, creative direction, prompts, visual planning, editing and post-production for brands, products, events, ads and social media campaigns.",
  },
  {
    question: "What are VFX services?",
    answer:
      "VFX services include visual effects, compositing, CGI-style elements, object removal, screen replacement, motion graphics, clean-up and cinematic post-production to make videos look polished and campaign-ready.",
  },
  {
    question: "Does Double Trouble Studio provide AI video production services in India?",
    answer:
      "Yes. Double Trouble Studio provides AI video production and VFX services in India for brands, startups, hospitality businesses, fashion labels, luxury brands, product launches, music videos, real estate campaigns and digital marketing projects.",
  },
  {
    question: "Can AI videos be used for brand campaigns?",
    answer:
      "Yes. AI videos can be used for brand awareness campaigns, product launches, Instagram Reels, YouTube Shorts, paid ads, website hero videos, event teasers, hospitality promotions, fashion campaigns and luxury brand films.",
  },
  {
    question: "Do you create CGI advertising videos?",
    answer:
      "Yes. Double Trouble Studio creates CGI-style advertising videos where products, brand elements or digital objects are placed in visually striking environments for product launches, social ads and brand campaigns.",
  },
];

export default function AIVideoVFXJsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Video Production & VFX Services in India",
    description:
      "Double Trouble Studio provides AI video production, CGI advertising videos, VFX, motion graphics, product launch films, reels, social media ads, website hero videos and campaign-ready video content for brands in India.",
    provider: {
      "@type": "Organization",
      name: "Double Trouble Studio",
      url: "https://doubletroublestudio.com",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: [
      "AI Video Production",
      "VFX Services",
      "CGI Advertising Videos",
      "Motion Graphics",
      "Product Launch Videos",
      "Brand Films",
      "Social Media Video Production",
      "Website Hero Videos",
    ],
    audience: {
      "@type": "Audience",
      audienceType:
        "Brands, startups, hospitality businesses, luxury brands, fashion labels, event companies, real estate brands and digital marketing campaigns",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://doubletroublestudio.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "AI Video Production & VFX Services in India",
        item: "https://doubletroublestudio.com/ai-video-production-vfx-services-india",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}