import type { SeoCitySlug } from "@/data/seo-cities";
import type { SeoServiceSlug } from "@/data/seo-services";

export type ServiceCityContentKey =
  `${SeoServiceSlug}:${SeoCitySlug}`;

export type ServiceCityContent = {
  indexable: boolean;
  metaDescription?: string;
  introduction?: string;
  localContext?: string;
  serviceAreas?: readonly string[];
  industries?: readonly string[];
  lastModified?: string;
};

export const SERVICE_CITY_CONTENT: Partial<
  Record<ServiceCityContentKey, ServiceCityContent>
> = {
  
  // ----------------------------------------
  // SEO AUDIT #29 — 67 NOINDEX CITY PAGES
  // Source: Noindex sheet, 27 October 2026
  // ----------------------------------------

  // Guest Management — 6
  "guest-management:delhi": { indexable: false },
  "guest-management:pune": { indexable: false },
  "guest-management:kolkata": { indexable: false },
  "guest-management:shimla": { indexable: false },
  "guest-management:darjeeling": { indexable: false },
  "guest-management:coimbatore": { indexable: false },

  // Celebrity Management — 5
  "celebrity-management:lucknow": { indexable: false },
  "celebrity-management:goa": { indexable: false },
  "celebrity-management:shimla": { indexable: false },
  "celebrity-management:surat": { indexable: false },
  "celebrity-management:kochi": { indexable: false },

  // Events & Weddings — 12
  "events-weddings:delhi": { indexable: false },
  "events-weddings:new-delhi": { indexable: false },
  "events-weddings:bangalore": { indexable: false },
  "events-weddings:pune": { indexable: false },
  "events-weddings:gurgaon": { indexable: false },
  "events-weddings:noida": { indexable: false },
  "events-weddings:thane": { indexable: false },
  "events-weddings:chandigarh": { indexable: false },
  "events-weddings:lucknow": { indexable: false },
  "events-weddings:vadodara": { indexable: false },
  "events-weddings:coimbatore": { indexable: false },
  "events-weddings:bhubaneswar": { indexable: false },

  // Web Development & Marketing — 16
  "web-development-marketing:delhi": { indexable: false },
  "web-development-marketing:bangalore": { indexable: false },
  "web-development-marketing:pune": { indexable: false },
  "web-development-marketing:chennai": { indexable: false },
  "web-development-marketing:kolkata": { indexable: false },
  "web-development-marketing:gurgaon": { indexable: false },
  "web-development-marketing:indore": { indexable: false },
  "web-development-marketing:chandigarh": { indexable: false },
  "web-development-marketing:lucknow": { indexable: false },
  "web-development-marketing:goa": { indexable: false },
  "web-development-marketing:darjeeling": { indexable: false },
  "web-development-marketing:kerala": { indexable: false },
  "web-development-marketing:surat": { indexable: false },
  "web-development-marketing:nagpur": { indexable: false },
  "web-development-marketing:kochi": { indexable: false },
  "web-development-marketing:bhubaneswar": { indexable: false },

  // Search Engine Optimization — 24
  "search-engine-optimization:new-delhi": { indexable: false },
  "search-engine-optimization:kolkata": { indexable: false },
  "search-engine-optimization:noida": { indexable: false },
  "search-engine-optimization:thane": { indexable: false },
  "search-engine-optimization:navi-mumbai": { indexable: false },
  "search-engine-optimization:indore": { indexable: false },
  "search-engine-optimization:jaipur": { indexable: false },
  "search-engine-optimization:chandigarh": { indexable: false },
  "search-engine-optimization:lucknow": { indexable: false },
  "search-engine-optimization:goa": { indexable: false },
  "search-engine-optimization:udaipur": { indexable: false },
  "search-engine-optimization:manali": { indexable: false },
  "search-engine-optimization:shimla": { indexable: false },
  "search-engine-optimization:darjeeling": { indexable: false },
  "search-engine-optimization:kerala": { indexable: false },
  "search-engine-optimization:rishikesh": { indexable: false },
  "search-engine-optimization:surat": { indexable: false },
  "search-engine-optimization:vadodara": { indexable: false },
  "search-engine-optimization:nagpur": { indexable: false },
  "search-engine-optimization:coimbatore": { indexable: false },
  "search-engine-optimization:kochi": { indexable: false },
  "search-engine-optimization:bhubaneswar": { indexable: false },
  "search-engine-optimization:patna": { indexable: false },
  "search-engine-optimization:raipur": { indexable: false },

  // AI Video & VFX — 4
  "ai-video-vfx:shimla": { indexable: false },
  "ai-video-vfx:darjeeling": { indexable: false },
  "ai-video-vfx:kerala": { indexable: false },
  "ai-video-vfx:rishikesh": { indexable: false },


   "ai-video-vfx:udaipur": {
    indexable: false,
  },

  "ai-video-vfx:chandigarh": {
  indexable: false,
},
"ai-video-vfx:goa": {
  indexable: false,
},
  
"ai-video-vfx:indore": {
  indexable: false,
},
"ai-video-vfx:noida": {
  indexable: false,
},
"ai-video-vfx:vadodara": {
  indexable: false,
},
  "web-development-marketing:patna": {
  indexable: false,
},

"celebrity-management:darjeeling": {
  indexable: false,
},
"celebrity-management:rishikesh": {
  indexable: false,
},
"celebrity-management:thane": {
  indexable: false,
},
"celebrity-management:udaipur": {
  indexable: false,
},
"events-weddings:jaipur": {
  indexable: false,
},
"events-weddings:manali": {
  indexable: false,
},
"guest-management:goa": {
  indexable: false,
},
"guest-management:surat": {
  indexable: false,
},
"guest-management:udaipur": {
  indexable: false,
},
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

  "pr-media-marketing:mumbai": {
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