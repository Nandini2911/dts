export type ServiceFeature = {
  title: string;
  description: string;
};

export type ServiceDefinition = {
  name: string;
  shortName: string;
  seoName: string;
  schemaServiceType: string;

  metaDescription: (city: string) => string;
  heroDescription: (city: string) => string;
  defaultIntroduction: (city: string) => string;

  features: readonly ServiceFeature[];
};

export const SEO_SERVICES = {
  "guest-management": {
    name: "Guest Management",
    shortName: "Guest Management",
    seoName: "Guest Management Services",
    schemaServiceType: "Guest Management",

    metaDescription: (city: string) =>
      `Professional guest management services in ${city} for weddings, corporate events, launches and premium celebrations, including RSVP, travel and hospitality coordination.`,

    heroDescription: (city: string) =>
      `Create a seamless guest experience in ${city} with professional invitations, RSVP coordination, travel assistance, accommodation support and on-ground hospitality management.`,

    defaultIntroduction: (city: string) =>
      `Double Trouble Studio provides professional guest management services for weddings, corporate events, launches, conferences and private celebrations in ${city}.`,

    features: [
      {
        title: "Guest Invitations",
        description:
          "Structured guest invitations, communication and follow-up management.",
      },
      {
        title: "RSVP Management",
        description:
          "Guest confirmations, attendance tracking and regular status reporting.",
      },
      {
        title: "Travel Coordination",
        description:
          "Airport, railway station and local guest movement coordination.",
      },
      {
        title: "Accommodation Support",
        description:
          "Hotel allocation, check-in assistance and guest stay coordination.",
      },
      {
        title: "Welcome Desk",
        description:
          "Professional registration, welcome and guest-guidance desks.",
      },
      {
        title: "On-Ground Hospitality",
        description:
          "Dedicated coordinators for smooth event-day guest management.",
      },
    ],
  },

  "celebrity-management": {
    name: "Celebrity Management",
    shortName: "Celebrity Management",
    seoName: "Celebrity Management Agency",
    schemaServiceType: "Celebrity Management",

    metaDescription: (city: string) =>
      `Celebrity management agency serving ${city} for celebrity bookings, artist appearances, brand endorsements, performances and influencer collaborations.`,

    heroDescription: (city: string) =>
      `Connect your campaign or event with suitable celebrities, performers, creators and public personalities through professional celebrity management in ${city}.`,

    defaultIntroduction: (city: string) =>
      `Double Trouble Studio provides celebrity and artist management services for events, campaigns, launches and brand collaborations in ${city}.`,

    features: [
      {
        title: "Celebrity Bookings",
        description:
          "Celebrity bookings for events, launches, weddings and corporate appearances.",
      },
      {
        title: "Artist Management",
        description:
          "Coordination with singers, performers, anchors and entertainers.",
      },
      {
        title: "Brand Endorsements",
        description:
          "Celebrity partnerships aligned with the positioning of your brand.",
      },
      {
        title: "Influencer Collaborations",
        description:
          "Relevant creator collaborations for online and offline campaigns.",
      },
      {
        title: "Performance Coordination",
        description:
          "Travel, hospitality, technical and performance requirement management.",
      },
      {
        title: "Appearance Management",
        description:
          "Complete planning for celebrity appearances and public engagements.",
      },
    ],
  },

  "events-weddings": {
    name: "Events & Weddings",
    shortName: "Events & Weddings",
    seoName: "Event & Wedding Management",
    schemaServiceType: "Event and Wedding Management",

    metaDescription: (city: string) =>
      `Event and wedding management services in ${city} for luxury weddings, corporate events, launches, conferences and private celebrations.`,

    heroDescription: (city: string) =>
      `Create memorable events and weddings in ${city} through strategic planning, creative production, hospitality, entertainment and complete on-ground execution.`,

    defaultIntroduction: (city: string) =>
      `Double Trouble Studio plans and executes weddings, corporate events, launches, conferences and premium celebrations in ${city}.`,

    features: [
      {
        title: "Wedding Planning",
        description:
          "Planning for premium, luxury and destination wedding celebrations.",
      },
      {
        title: "Corporate Events",
        description:
          "Conferences, award ceremonies, launches and corporate celebrations.",
      },
      {
        title: "Venue Coordination",
        description:
          "Venue selection, vendor access, layout and event-flow coordination.",
      },
      {
        title: "Creative Production",
        description:
          "Event concepts, décor direction, stages and experience design.",
      },
      {
        title: "Entertainment Planning",
        description:
          "Artists, performers, anchors and entertainment programming.",
      },
      {
        title: "Event Operations",
        description:
          "Timelines, logistics, team management and on-ground execution.",
      },
    ],
  },

  "pr-media-digital-marketing": {
    name: "PR, Media & Digital Marketing",
    shortName: "PR & Digital Marketing",
    seoName: "PR & Digital Marketing Agency",
    schemaServiceType:
      "Public Relations and Digital Marketing",

    metaDescription: (city: string) =>
      `PR and digital marketing agency serving ${city} with social media management, SEO, branding, media outreach, content creation and campaign strategy.`,

    heroDescription: (city: string) =>
      `Build visibility, credibility and digital growth in ${city} through integrated PR, social media marketing, content strategy, branding and digital campaigns.`,

    defaultIntroduction: (city: string) =>
      `Double Trouble Studio helps brands in ${city} strengthen their market visibility through PR, media communication, social media and digital marketing.`,

    features: [
      {
        title: "Social Media Management",
        description:
          "Content planning, publishing, reels, creatives and platform management.",
      },
      {
        title: "Digital Marketing Strategy",
        description:
          "Integrated strategies for brand visibility, leads and conversions.",
      },
      {
        title: "Public Relations",
        description:
          "Strategic brand communication, reputation building and PR campaigns.",
      },
      {
        title: "Media Outreach",
        description:
          "Relevant press communication, media opportunities and launch support.",
      },
      {
        title: "Content Creation",
        description:
          "Campaign concepts, social content, videos and marketing creatives.",
      },
      {
        title: "Performance Campaigns",
        description:
          "Campaigns focused on reach, engagement, enquiries and conversions.",
      },
    ],
  },

  "web-development-marketing": {
    name: "Web Development & SEO",
    shortName: "Web Development & SEO",
    seoName: "Web Development & SEO Services",
    schemaServiceType:
      "Website Development and Search Engine Optimization",

    metaDescription: (city: string) =>
      `Website development and SEO services in ${city} for responsive websites, technical SEO, local visibility and stronger online conversions.`,

    heroDescription: (city: string) =>
      `Build a fast, professional and search-optimised website for your business in ${city} with modern development, technical SEO and conversion-focused design.`,

    defaultIntroduction: (city: string) =>
      `Double Trouble Studio develops professional websites and SEO strategies for businesses serving customers in ${city}.`,

    features: [
      {
        title: "Next.js Development",
        description:
          "Modern, responsive and scalable business websites developed using Next.js.",
      },
      {
        title: "Website Design",
        description:
          "Professional website experiences aligned with your brand and audience.",
      },
      {
        title: "Technical SEO",
        description:
          "Crawlability, indexing, performance and site-architecture optimisation.",
      },
      {
        title: "On-Page SEO",
        description:
          "Metadata, content, headings and keyword-focused page optimisation.",
      },
      {
        title: "Local SEO",
        description:
          "Location-focused optimisation for relevant regional search visibility.",
      },
      {
        title: "Conversion Optimisation",
        description:
          "Clear calls to action, user journeys and enquiry-focused structures.",
      },
    ],
  },

  "ai-video-vfx": {
    name: "AI Video & Video Editing",
    shortName: "AI Video & Editing",
    seoName: "AI Video Production Services",
    schemaServiceType:
      "AI Video Production and Video Editing",

    metaDescription: (city: string) =>
      `AI video production and video editing services in ${city} for advertisements, social media campaigns, product launches, brand films and VFX content.`,

    heroDescription: (city: string) =>
      `Create premium AI-powered advertisements, campaign videos, product visuals, VFX and edited social media content for your brand in ${city}.`,

    defaultIntroduction: (city: string) =>
      `Double Trouble Studio provides AI video production, commercial editing and VFX services for brands and businesses in ${city}.`,

    features: [
      {
        title: "AI Commercial Ads",
        description:
          "Premium AI-generated commercial advertisements for brands and campaigns.",
      },
      {
        title: "AI Visual Production",
        description:
          "Creative product visuals, campaign scenes and branded AI imagery.",
      },
      {
        title: "Video Editing",
        description:
          "Professional editing for advertisements, reels and digital campaigns.",
      },
      {
        title: "VFX & Compositing",
        description:
          "Visual effects, compositing, cleanup and cinematic post-production.",
      },
      {
        title: "Product Videos",
        description:
          "Commercial product films, launch videos and promotional advertisements.",
      },
      {
        title: "Social Video Content",
        description:
          "Platform-ready reels, promotional content and campaign videos.",
      },
    ],
  },
} satisfies Record<string, ServiceDefinition>;

export type SeoServiceSlug =
  keyof typeof SEO_SERVICES;

export const ALL_SEO_SERVICE_SLUGS =
  Object.keys(SEO_SERVICES) as SeoServiceSlug[];

export function isSeoServiceSlug(
  value: string,
): value is SeoServiceSlug {
  return (
    ALL_SEO_SERVICE_SLUGS as readonly string[]
  ).includes(value);
}