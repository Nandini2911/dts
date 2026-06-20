import AIVideoVFXBenefits from "@/components/AIVideoVFX/AIVideoVFXBenefits";
import AIVideoVFXCampaignGoals from "@/components/AIVideoVFX/AIVideoVFXCampaignGoals";
import AIVideoVFXCTA from "@/components/AIVideoVFX/AIVideoVFXCTA";
import AIVideoVFXFAQ from "@/components/AIVideoVFX/AIVideoVFXFAQ";
import AIVideoVFXFormats from "@/components/AIVideoVFX/AIVideoVFXFormats";
import AIVideoVFXHero from "@/components/AIVideoVFX/AIVideoVFXHero";
import AIVideoVFXHighlights from "@/components/AIVideoVFX/AIVideoVFXHighlights";
import AIVideoVFXIndiaLocations from "@/components/AIVideoVFX/AIVideoVFXIndiaLocations";
import AIVideoVFXIndustries from "@/components/AIVideoVFX/AIVideoVFXIndustries";
import AIVideoVFXIntro from "@/components/AIVideoVFX/AIVideoVFXIntro";
import AIVideoVFXPortfolio from "@/components/AIVideoVFX/AIVideoVFXPortfolio";
import AIVideoVFXProcess from "@/components/AIVideoVFX/AIVideoVFXProcess";
import AIVideoVFXRequirements from "@/components/AIVideoVFX/AIVideoVFXRequirements";
import AIVideoVFXServices from "@/components/AIVideoVFX/AIVideoVFXServices";
import AIVideoVFXUseCases from "@/components/AIVideoVFX/AIVideoVFXUseCases";
import AIVideoVFXVideoTypes from "@/components/AIVideoVFX/AIVideoVFXVideoTypes";
import WhatAreVFXServices from "@/components/AIVideoVFX/WhatAreVFXServices";
import WhatIsAIVideoProduction from "@/components/AIVideoVFX/WhatIsAIVideoProduction";
import WhyChooseAIVideoVFX from "@/components/AIVideoVFX/WhyChooseAIVideoVFX";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const aiVideoVFXSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.dtsworld.in/#organization",
      name: "Double Trouble Studio",
      alternateName: "DTS World",
      url: "https://www.dtsworld.in/",
      logo: "https://www.dtsworld.in/logo.png",
      image: "https://www.dtsworld.in/og-image.jpg",
      description:
        "Double Trouble Studio is an India-based creative agency offering AI video production, CGI ads, VFX services, brand films, product launch videos, social media videos, digital marketing, website development, PR and event marketing services.",
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
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+918000006021",
        email: "hello@dtsworld.in",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      knowsAbout: [
        "AI Video Production",
        "CGI Ads",
        "VFX Services",
        "Visual Effects",
        "AI Product Videos",
        "Brand Launch Films",
        "Event Teaser Videos",
        "Social Media Video Production",
        "Motion Graphics",
        "3D Animation",
        "Video Editing",
        "Post Production",
        "Instagram Reels",
        "YouTube Videos",
        "Website Hero Videos",
        "Luxury Brand Films",
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
      "@type": "Service",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#service",
      name: "AI Video Production and VFX Services",
      serviceType: "AI Video Production, CGI Ads and VFX Production",
      url: "https://www.dtsworld.in/services/ai-video-vfx/",
      description:
        "Double Trouble Studio creates AI videos, CGI ads, VFX-led brand films, product launch videos, event teasers, Instagram reels, YouTube videos, website hero videos and cinematic visual campaigns for brands across India.",
      provider: {
        "@id": "https://www.dtsworld.in/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#breadcrumb",
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
          item: "https://www.dtsworld.in/services/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "AI Video & VFX",
          item: "https://www.dtsworld.in/services/ai-video-vfx/",
        },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#process",
      name: "AI Video and VFX Production Process",
      description:
        "A structured AI video, CGI ad and VFX production process from brief understanding to final platform-ready export.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Requirement Understanding",
          text: "Understanding the brand, campaign goal, target audience, product, service, platform requirement and final video purpose.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Creative Concept Planning",
          text: "Defining the video idea, mood, visual direction, reference style, storytelling angle and campaign message.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Script and Shot Breakdown",
          text: "Preparing the video flow, scene structure, text direction, visual prompts, shot ideas and edit sequence.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "AI Visual Creation",
          text: "Generating or designing AI visuals, CGI-style scenes, product environments and visual assets.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "VFX and Motion Design",
          text: "Adding compositing, motion graphics, transitions, effects, clean-up, animated text and visual enhancements.",
        },
        {
          "@type": "HowToStep",
          position: 6,
          name: "Editing and Sound Design",
          text: "Editing the video with pacing, music, sound effects, color tone, subtitles and platform-specific energy.",
        },
        {
          "@type": "HowToStep",
          position: 7,
          name: "Final Export and Adaptation",
          text: "Exporting videos in formats such as 9:16, 4:5, 1:1 and 16:9 for reels, ads, websites, YouTube and campaigns.",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#services-list",
      name: "AI Video and VFX Services",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "AI Video Production" },
        { "@type": "ListItem", position: 2, name: "CGI Advertising Videos" },
        { "@type": "ListItem", position: 3, name: "VFX for Advertising" },
        { "@type": "ListItem", position: 4, name: "AI Product Videos" },
        { "@type": "ListItem", position: 5, name: "Brand Launch Films" },
        { "@type": "ListItem", position: 6, name: "Event Teaser Videos" },
        {
          "@type": "ListItem",
          position: 7,
          name: "Social Media Video Production",
        },
        { "@type": "ListItem", position: 8, name: "Motion Graphics" },
        {
          "@type": "ListItem",
          position: 9,
          name: "3D Animation and Visual Concepts",
        },
        { "@type": "ListItem", position: 10, name: "AI Fashion Videos" },
        { "@type": "ListItem", position: 11, name: "AI Hospitality Videos" },
        { "@type": "ListItem", position: 12, name: "Music Video VFX" },
        {
          "@type": "ListItem",
          position: 13,
          name: "Video Editing and Post-Production",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#video-types",
      name: "Types of AI, CGI and VFX Videos",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "AI Brand Films" },
        { "@type": "ListItem", position: 2, name: "CGI Product Ads" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Instagram Reels and Shorts",
        },
        { "@type": "ListItem", position: 4, name: "Event Launch Videos" },
        {
          "@type": "ListItem",
          position: 5,
          name: "Luxury Commercial Videos",
        },
        { "@type": "ListItem", position: 6, name: "Music Video Visuals" },
        { "@type": "ListItem", position: 7, name: "Website Hero Videos" },
        {
          "@type": "ListItem",
          position: 8,
          name: "Explainer and Service Videos",
        },
        { "@type": "ListItem", position: 9, name: "Motion Graphic Videos" },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#campaign-goals",
      name: "AI Video and VFX Campaign Goals",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Product Launch" },
        { "@type": "ListItem", position: 2, name: "Brand Awareness" },
        { "@type": "ListItem", position: 3, name: "Social Media Growth" },
        { "@type": "ListItem", position: 4, name: "Event Promotion" },
        { "@type": "ListItem", position: 5, name: "Luxury Positioning" },
        { "@type": "ListItem", position: 6, name: "Lead Generation" },
        { "@type": "ListItem", position: 7, name: "Product Demonstration" },
        {
          "@type": "ListItem",
          position: 8,
          name: "Storytelling and Brand Identity",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#industries",
      name: "Industries Served by AI Video and VFX Services",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Fashion and Apparel" },
        { "@type": "ListItem", position: 2, name: "Jewellery and Luxury" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Hospitality and Restaurants",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Events and Entertainment",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Real Estate and Architecture",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Automotive and Mobility",
        },
        { "@type": "ListItem", position: 7, name: "Beauty and Wellness" },
        { "@type": "ListItem", position: 8, name: "Corporate and Startups" },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#formats",
      name: "AI Video and VFX Output Formats",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "9:16 Vertical Reels" },
        {
          "@type": "ListItem",
          position: 2,
          name: "4:5 Premium Feed Videos",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "1:1 Square Campaign Edits",
        },
        { "@type": "ListItem", position: 4, name: "16:9 Wide Brand Films" },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#locations",
      name: "AI Video and VFX Service Locations",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Mumbai" },
        { "@type": "ListItem", position: 2, name: "Delhi NCR" },
        { "@type": "ListItem", position: 3, name: "Chandigarh" },
        { "@type": "ListItem", position: 4, name: "Punjab" },
        { "@type": "ListItem", position: 5, name: "Bengaluru" },
        { "@type": "ListItem", position: 6, name: "Hyderabad" },
        { "@type": "ListItem", position: 7, name: "Pune" },
        { "@type": "ListItem", position: 8, name: "Pan India" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.dtsworld.in/services/ai-video-vfx/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is AI video production?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI video production is the process of creating video content using artificial intelligence tools, creative direction, prompts, visual planning, editing and post-production. It can be used for brand films, product videos, CGI ads, reels, launch videos, event promos and digital campaigns.",
          },
        },
        {
          "@type": "Question",
          name: "What are VFX services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "VFX services involve adding, enhancing or manipulating visual elements in a video during post-production. This can include CGI objects, compositing, background extensions, object removal, clean-up, motion graphics, screen replacement, lighting effects and cinematic enhancements.",
          },
        },
        {
          "@type": "Question",
          name: "Does Double Trouble Studio provide AI video production services in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio provides AI video production, CGI ads, VFX editing, brand films, product videos, social media reels and campaign-ready video content for brands across India.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI videos be used for brand campaigns?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. AI videos can be used for brand campaigns, product launches, luxury commercials, social media reels, paid ads, website hero videos, event teasers, hospitality campaigns and digital storytelling.",
          },
        },
        {
          "@type": "Question",
          name: "Do you create CGI advertising videos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Double Trouble Studio creates CGI advertising videos where products, brand elements or objects appear in visually striking digital environments for social media, launches, ads and brand awareness campaigns.",
          },
        },
        {
          "@type": "Question",
          name: "What type of AI videos can you create?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Double Trouble Studio can create AI brand films, AI product videos, CGI product ads, Instagram reels, event launch videos, luxury commercial videos, music video visuals, website hero videos, explainer videos and motion graphic videos.",
          },
        },
        {
          "@type": "Question",
          name: "Can you create videos for Instagram and YouTube?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Videos can be created for Instagram Reels, YouTube Shorts, YouTube videos, social media ads, stories, feed posts, website visuals, landing pages and digital campaigns.",
          },
        },
        {
          "@type": "Question",
          name: "What video formats do you deliver?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Double Trouble Studio can deliver videos in 9:16 for reels and shorts, 4:5 for premium feed videos, 1:1 for square campaign edits and 16:9 for YouTube, websites, presentations, event screens and brand films.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a script before starting an AI video project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. A complete script is not required to begin. You can share your brand goal, product details, reference style, campaign message, required format and deadline. The creative direction can be shaped from there.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI video and VFX be used for product launches?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. AI video and VFX can be used to create product launch videos, CGI ads, teaser edits, launch visuals, product demonstrations and campaign cutdowns for social media and digital platforms.",
          },
        },
        {
          "@type": "Question",
          name: "How long does an AI video or VFX project take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI video and VFX timelines depend on the concept, number of scenes, output formats, animation complexity, editing requirements, revision rounds, assets provided and campaign deadline.",
          },
        },
        {
          "@type": "Question",
          name: "How much does AI video production cost in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI video production cost in India depends on video length, creative complexity, number of scenes, CGI or VFX requirements, output formats, editing, sound design, motion graphics, revisions and delivery timeline.",
          },
        },
      ],
    },
  ],
};

export default function AIVideoProductionVFXPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aiVideoVFXSchema),
        }}
      />

      <main className="bg-[#F7FAFF] text-[#0D2444]">
        <Navbar />
        <AIVideoVFXHero />
        <AIVideoVFXHighlights />
        <AIVideoVFXIntro />
        <WhatIsAIVideoProduction />
        <WhatAreVFXServices />
        <AIVideoVFXServices />
        <AIVideoVFXCampaignGoals />
        <AIVideoVFXVideoTypes />
        <AIVideoVFXIndustries />
        <AIVideoVFXBenefits />
        <AIVideoVFXProcess />
        <AIVideoVFXFormats />
        <AIVideoVFXIndiaLocations />
        <AIVideoVFXUseCases />
        <AIVideoVFXRequirements />
        <WhyChooseAIVideoVFX />
        <AIVideoVFXPortfolio />
        <AIVideoVFXFAQ />
        <AIVideoVFXCTA />
        <Footer />
      </main>
    </>
  );
}