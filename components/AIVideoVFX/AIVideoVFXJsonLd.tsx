const faqs = [
  {
    question: "What is AI video production?",
    answer:
      "AI video production is the process of creating video content using artificial intelligence, creative direction, scripting, visual prompts, scene planning and professional post-production. It can be used for commercials, product videos, brand films, social media campaigns, explainers, launch videos and website content.",
  },
  {
    question: "What does professional video editing include?",
    answer:
      "Professional video editing includes organising raw footage, selecting the strongest clips, removing unwanted sections, improving pacing, adding transitions, subtitles, motion graphics, music, sound effects, colour correction and exporting the final video in the required format.",
  },
  {
    question:
      "Does Double Trouble Studio provide AI video production and video editing services in India?",
    answer:
      "Yes. Double Trouble Studio provides AI video production and professional video editing services for brands, startups, restaurants, hospitality businesses, fashion labels, luxury brands, real estate companies, events, creators and businesses across India.",
  },
  {
    question: "What types of AI videos can Double Trouble Studio create?",
    answer:
      "Double Trouble Studio can create AI commercial videos, AI product videos, brand films, fashion campaign videos, hospitality promotions, event teasers, real estate videos, service explainers, website hero videos, Instagram Reels and YouTube Shorts.",
  },
  {
    question: "What types of videos can you professionally edit?",
    answer:
      "We professionally edit Instagram Reels, YouTube Shorts, advertisements, product videos, brand films, interviews, podcasts, corporate videos, event highlights, aftermovies, music videos, founder videos and long-form YouTube content.",
  },
  {
    question: "Can you combine AI-generated visuals with existing footage?",
    answer:
      "Yes. We can combine AI-generated visuals with product photographs, recorded footage, interviews, event clips, screen recordings, logos and other brand assets to create one polished and professionally edited video.",
  },
  {
    question: "Can one video be adapted for different digital platforms?",
    answer:
      "Yes. A master video can be adapted into Instagram Reels, YouTube Shorts, social media advertisements, website videos, landing-page visuals, presentation videos and event-screen edits in different aspect ratios.",
  },
  {
    question: "What video formats do you deliver?",
    answer:
      "We deliver videos in 9:16 for Reels, Shorts and Stories, 4:5 for social media feeds, 1:1 for square posts and 16:9 for YouTube, websites, presentations, brand films and event screens. Custom dimensions can also be prepared when required.",
  },
  {
    question: "Do I need to provide a script or raw footage?",
    answer:
      "Not always. For AI video production, you can share your objective, brand information, product details, references and key message. For video editing, you can provide the available footage and project brief, and our team can structure the final edit.",
  },
  {
    question: "How much do AI video production and video editing services cost?",
    answer:
      "The cost depends on the video duration, creative concept, number of scenes, AI visual requirements, amount of raw footage, editing complexity, motion graphics, subtitles, voiceover, sound design, revisions and final delivery formats. A customised quotation is shared after reviewing the project brief.",
  },
];

export default function AIVideoVFXJsonLd() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.dtsworld.in/services/ai-video-video-editing/#service",
    name: "AI Video Production & Professional Video Editing Services in India",
    alternateName: [
      "AI Video Production Services",
      "Professional Video Editing Services",
      "AI Commercial Video Production",
      "Social Media Video Editing",
    ],
    url: "https://www.dtsworld.in/services/ai-video-video-editing",
    description:
      "Double Trouble Studio provides AI video production and professional video editing services for commercials, product videos, brand films, Instagram Reels, YouTube videos, event films, explainers, motion graphics and digital campaigns across India.",
    provider: {
      "@type": "Organization",
      "@id": "https://www.dtsworld.in/#organization",
      name: "Double Trouble Studio",
      alternateName: "DTS World",
      url: "https://www.dtsworld.in/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.dtsworld.in/dts%20logo.png",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://www.dtsworld.in/contact",
      availableLanguage: ["English", "Hindi"],
    },
    serviceType: [
      "AI Video Production",
      "Professional Video Editing",
      "AI Commercial Videos",
      "AI Product Videos",
      "Brand Film Production",
      "Instagram Reels Editing",
      "YouTube Video Editing",
      "Event Video Editing",
      "Motion Graphics",
      "Colour Correction",
      "Sound Design",
      "Video Post-Production",
    ],
    audience: {
      "@type": "Audience",
      audienceType:
        "Brands, startups, restaurants, hospitality businesses, luxury brands, fashion labels, real estate companies, event organisers, creators and businesses across India",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.dtsworld.in/services/ai-video-video-editing/#faq",
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
    "@id":
      "https://www.dtsworld.in/services/ai-video-video-editing/#breadcrumb",
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
        name: "Services",
        item: "https://www.dtsworld.in/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "AI Video Production & Video Editing",
        item: "https://www.dtsworld.in/services/ai-video-video-editing",
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