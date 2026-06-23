import type { SeoCitySlug } from "@/data/seo-cities";
import type { SeoServiceSlug } from "@/data/seo-services";

export type ServiceCityContentKey =
  `${SeoServiceSlug}:${SeoCitySlug}`;

export type ServiceCityContent = {
  indexable: boolean;

  metaDescription?: string;

  introduction: string;
  localContext: string;

  serviceAreas: readonly string[];
  industries: readonly string[];

  lastModified: string;
};

export const SERVICE_CITY_CONTENT: Partial<
  Record<ServiceCityContentKey, ServiceCityContent>
> = {
  "guest-management:mumbai": {
    indexable: true,

    metaDescription:
      "Professional guest management services in Mumbai for weddings, corporate events, launches and premium celebrations, including RSVP, travel and hospitality coordination.",

    introduction:
      "Double Trouble Studio provides structured guest management support for weddings, corporate events, launches and premium celebrations across Mumbai. Our team manages invitations, RSVPs, travel movement, accommodation, welcome desks and event-day hospitality.",

    localContext:
      "Mumbai events frequently involve guests travelling between airports, railway stations, hotels, wedding venues, corporate spaces and entertainment locations. A coordinated hospitality system helps hosts reduce delays and deliver a more organised experience.",

    serviceAreas: [
      "Andheri",
      "Bandra",
      "BKC",
      "Powai",
      "Lower Parel",
      "South Mumbai",
      "Thane",
      "Navi Mumbai",
    ],

    industries: [
      "Luxury weddings",
      "Corporate events",
      "Hospitality",
      "Entertainment",
      "Brand launches",
      "Private celebrations",
    ],

    lastModified: "2026-06-23",
  },

  "celebrity-management:mumbai": {
    indexable: true,

    introduction:
      "Double Trouble Studio provides professional celebrity, artist and influencer management for events, campaigns, launches and brand collaborations across Mumbai.",

    localContext:
      "Mumbai is a major entertainment and media market where celebrity collaborations require clear communication, availability coordination, contracting, travel planning, technical requirements and professional appearance management.",

    serviceAreas: [
      "Andheri",
      "Bandra",
      "BKC",
      "Juhu",
      "Lower Parel",
      "South Mumbai",
      "Powai",
      "Navi Mumbai",
    ],

    industries: [
      "Entertainment",
      "Luxury brands",
      "Corporate events",
      "Hospitality",
      "Fashion",
      "Brand campaigns",
    ],

    lastModified: "2026-06-23",
  },

  "events-weddings:mumbai": {
    indexable: true,

    introduction:
      "Double Trouble Studio plans and executes weddings, corporate events, launches and premium experiences across Mumbai through creative planning, hospitality, entertainment and on-ground production.",

    localContext:
      "Mumbai events often involve complex venue schedules, guest movement, artist requirements, production teams and strict timelines. Our event-management process brings these elements together through one coordinated execution plan.",

    serviceAreas: [
      "South Mumbai",
      "Bandra",
      "BKC",
      "Juhu",
      "Andheri",
      "Powai",
      "Thane",
      "Navi Mumbai",
    ],

    industries: [
      "Luxury weddings",
      "Corporate events",
      "Product launches",
      "Entertainment",
      "Hospitality",
      "Private celebrations",
    ],

    lastModified: "2026-06-23",
  },

  "pr-media-digital-marketing:mumbai": {
    indexable: true,

    introduction:
      "Double Trouble Studio helps Mumbai businesses strengthen visibility through integrated PR, social media management, content creation, branding and digital marketing campaigns.",

    localContext:
      "Mumbai is highly competitive across hospitality, entertainment, real estate, fashion, food, luxury and professional services. Brands need clear positioning, consistent communication and high-quality digital content to remain visible.",

    serviceAreas: [
      "Andheri",
      "Bandra",
      "BKC",
      "Powai",
      "Lower Parel",
      "South Mumbai",
      "Thane",
      "Navi Mumbai",
    ],

    industries: [
      "Hospitality",
      "Entertainment",
      "Restaurants",
      "Luxury brands",
      "Real estate",
      "Startups",
    ],

    lastModified: "2026-06-23",
  },

  "web-development-marketing:mumbai": {
    indexable: true,

    introduction:
      "Double Trouble Studio develops professional, conversion-focused and search-optimised websites for brands and businesses serving customers across Mumbai.",

    localContext:
      "Mumbai customers frequently compare businesses online before making contact. A fast website with clear services, strong mobile usability and relevant search visibility can significantly improve brand credibility and enquiry quality.",

    serviceAreas: [
      "Andheri",
      "Bandra",
      "BKC",
      "Powai",
      "Lower Parel",
      "South Mumbai",
      "Thane",
      "Navi Mumbai",
    ],

    industries: [
      "Professional services",
      "Hospitality",
      "Real estate",
      "Healthcare",
      "Restaurants",
      "Startups",
    ],

    lastModified: "2026-06-23",
  },

  "ai-video-vfx:mumbai": {
    indexable: true,

    introduction:
      "Double Trouble Studio creates AI-powered commercial advertisements, product visuals, campaign videos, social content, video edits and VFX for brands across Mumbai.",

    localContext:
      "Mumbai brands compete in a fast-moving content environment across entertainment, hospitality, fashion, food, luxury and consumer markets. Premium video execution helps brands communicate quickly and create stronger campaign recall.",

    serviceAreas: [
      "Andheri",
      "Bandra",
      "BKC",
      "Juhu",
      "Powai",
      "Lower Parel",
      "Thane",
      "Navi Mumbai",
    ],

    industries: [
      "Entertainment",
      "Fashion",
      "Hospitality",
      "Consumer brands",
      "Restaurants",
      "Luxury products",
    ],

    lastModified: "2026-06-23",
  },
};