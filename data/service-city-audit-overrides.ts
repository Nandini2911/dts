import type { ServiceCityContentKey } from "@/data/service-city-content";

export type ServiceCitySeoOverride = {
  title: string;
  description?: string;
  h1?: string;
};

// SEO Audit #37: only listed city URLs; all other cities keep current values.
// For "title"-only findings, existing description and H1 remain unchanged.
export const CITY_SEO_AUDIT_OVERRIDES: Partial<
  Record<ServiceCityContentKey, ServiceCitySeoOverride>
> = {

  // search-engine-optimization
  "search-engine-optimization:delhi": {
    title: "SEO Services in Delhi | SEO Agency for Brands | DTS",
    description: "SEO services in Delhi for D2C, education, healthcare and B2B brands: local SEO, Google Business Profile and technical SEO, run by our Mumbai team.",
    h1: "SEO Services in Delhi That Turn Searches into Enquiries",
  },
  "search-engine-optimization:bangalore": {
    title: "SEO Services in Bangalore | SEO Agency for Brands | DTS",
    description: "SEO services in Bangalore for startup, SaaS, tech and D2C brands: local SEO, Google Business Profile and technical SEO, run by our Mumbai team.",
    h1: "SEO Services in Bangalore That Turn Searches into Enquiries",
  },
  "search-engine-optimization:pune": {
    title: "SEO Services in Pune | SEO Agency for Brands | DTS",
    description: "SEO services in Pune for startup, education, manufacturing and real estate brands: local SEO, Google Business Profile and technical SEO, run by our Mumbai team.",
    h1: "SEO Services in Pune That Turn Searches into Enquiries",
  },
  "search-engine-optimization:hyderabad": {
    title: "SEO Services in Hyderabad | SEO Agency for Brands | DTS",
    description: "SEO services in Hyderabad for IT, pharma, healthcare and real estate brands: local SEO, Google Business Profile and technical SEO, run by our Mumbai team.",
    h1: "SEO Services in Hyderabad That Turn Searches into Enquiries",
  },
  "search-engine-optimization:chennai": {
    title: "SEO Services in Chennai | SEO Agency for Brands | DTS",
    description: "SEO services in Chennai for manufacturing, healthcare, SaaS and retail brands: local SEO, Google Business Profile and technical SEO, run by our Mumbai team.",
    h1: "SEO Services in Chennai That Turn Searches into Enquiries",
  },
  "search-engine-optimization:ahmedabad": {
    title: "SEO Services in Ahmedabad | SEO Agency for Brands | DTS",
    description: "SEO services in Ahmedabad for manufacturing, textile, real estate and D2C brands: local SEO, Google Business Profile and technical SEO, run by our Mumbai team.",
    h1: "SEO Services in Ahmedabad That Turn Searches into Enquiries",
  },
  "search-engine-optimization:gurgaon": {
    title: "SEO Services in Gurgaon | SEO Agency for Brands | DTS",
    description: "SEO services in Gurgaon for corporate, real estate, D2C and SaaS brands: local SEO, Google Business Profile and technical SEO, run by our Mumbai team.",
    h1: "SEO Services in Gurgaon That Turn Searches into Enquiries",
  },

  // guest-management
  "guest-management:hyderabad": {
    title: "Guest Management Services in Hyderabad | DTS",
  },
  "guest-management:chennai": {
    title: "Guest Management Services in Chennai | Double Trouble Studio",
  },
  "guest-management:indore": {
    title: "Guest Management Services in Indore | Double Trouble Studio",
  },
  "guest-management:vadodara": {
    title: "Guest Management Services in Vadodara | DTS",
  },
  "guest-management:nagpur": {
    title: "Guest Management Services in Nagpur | Double Trouble Studio",
  },
  "guest-management:kochi": {
    title: "Guest Management Services in Kochi | Double Trouble Studio",
  },

  // celebrity-management
  "celebrity-management:bangalore": {
    title: "Celebrity Management Agency in Bangalore | DTS",
  },
  "celebrity-management:hyderabad": {
    title: "Celebrity Management Agency in Hyderabad | DTS",
  },
  "celebrity-management:chennai": {
    title: "Celebrity Management Agency in Chennai | DTS",
  },
  "celebrity-management:kolkata": {
    title: "Celebrity Management Agency in Kolkata | DTS",
  },
  "celebrity-management:noida": {
    title: "Celebrity Management Agency in Noida | Double Trouble Studio",
  },
  "celebrity-management:jaipur": {
    title: "Celebrity Management Agency in Jaipur | DTS",
  },
  "celebrity-management:kerala": {
    title: "Celebrity Management Agency in Kerala | DTS",
  },
  "celebrity-management:nagpur": {
    title: "Celebrity Management Agency in Nagpur | DTS",
  },
  "celebrity-management:coimbatore": {
    title: "Celebrity Management Agency in Coimbatore | DTS",
  },
  "celebrity-management:bhubaneswar": {
    title: "Celebrity Management Agency in Bhubaneswar | DTS",
  },
  "celebrity-management:patna": {
    title: "Celebrity Management Agency in Patna | Double Trouble Studio",
  },

  // pr-media-marketing
  "pr-media-marketing:new-delhi": {
    title: "PR & Digital Marketing Agency in New Delhi | DTS",
  },
  "pr-media-marketing:hyderabad": {
    title: "PR & Digital Marketing Agency in Hyderabad | DTS",
  },
  "pr-media-marketing:ahmedabad": {
    title: "PR & Digital Marketing Agency in Ahmedabad | DTS",
  },
  "pr-media-marketing:thane": {
    title: "PR & Digital Marketing Agency in Thane | DTS",
  },
  "pr-media-marketing:navi-mumbai": {
    title: "PR & Digital Marketing Agency in Navi Mumbai | DTS",
  },
  "pr-media-marketing:indore": {
    title: "PR & Digital Marketing Agency in Indore | DTS",
  },
  "pr-media-marketing:goa": {
    title: "PR & Digital Marketing Agency in Goa | Double Trouble Studio",
  },
  "pr-media-marketing:manali": {
    title: "PR & Digital Marketing Agency in Manali | DTS",
  },
  "pr-media-marketing:kerala": {
    title: "PR & Digital Marketing Agency in Kerala | DTS",
  },
  "pr-media-marketing:rishikesh": {
    title: "PR & Digital Marketing Agency in Rishikesh | DTS",
  },
  "pr-media-marketing:vadodara": {
    title: "PR & Digital Marketing Agency in Vadodara | DTS",
  },
  "pr-media-marketing:kochi": {
    title: "PR & Digital Marketing Agency in Kochi | DTS",
  },
  "pr-media-marketing:bhubaneswar": {
    title: "PR & Digital Marketing Agency in Bhubaneswar | DTS",
  },
  "pr-media-marketing:patna": {
    title: "PR & Digital Marketing Agency in Patna | DTS",
  },
  "pr-media-marketing:raipur": {
    title: "PR & Digital Marketing Agency in Raipur | DTS",
  },

  // ai-video-vfx
  "ai-video-vfx:delhi": {
    title: "AI Video Production Services in Delhi | DTS",
  },
  "ai-video-vfx:pune": {
    title: "AI Video Production Services in Pune | Double Trouble Studio",
  },
  "ai-video-vfx:chennai": {
    title: "AI Video Production Services in Chennai | DTS",
  },
  "ai-video-vfx:kolkata": {
    title: "AI Video Production Services in Kolkata | DTS",
  },
  "ai-video-vfx:ahmedabad": {
    title: "AI Video Production Services in Ahmedabad | DTS",
  },
  "ai-video-vfx:gurgaon": {
    title: "AI Video Production Services in Gurgaon | DTS",
  },
  "ai-video-vfx:thane": {
    title: "AI Video Production Services in Thane | DTS",
  },
  "ai-video-vfx:jaipur": {
    title: "AI Video Production Services in Jaipur | DTS",
  },
  "ai-video-vfx:lucknow": {
    title: "AI Video Production Services in Lucknow | DTS",
  },
  "ai-video-vfx:surat": {
    title: "AI Video Production Services in Surat | DTS",
  },
  "ai-video-vfx:nagpur": {
    title: "AI Video Production Services in Nagpur | DTS",
  },
  "ai-video-vfx:coimbatore": {
    title: "AI Video Production Services in Coimbatore | DTS",
  },
  "ai-video-vfx:patna": {
    title: "AI Video Production Services in Patna | DTS",
  },
};
