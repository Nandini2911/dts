export const SEO_CITIES = {
  "Metro Cities": [
    "mumbai",
    "delhi",
    "new-delhi",
    "bangalore",
    "pune",
    "hyderabad",
    "chennai",
    "kolkata",
    "ahmedabad",
  ],

  "Tier 1 Business Cities": [
    "gurgaon",
    "noida",
    "thane",
    "navi-mumbai",
    "indore",
    "jaipur",
    "chandigarh",
    "lucknow",
  ],

  "IT & Startup Hubs": [
    "bangalore",
    "hyderabad",
    "pune",
    "gurgaon",
    "noida",
    "chennai",
  ],

  "Tourism & Premium Markets": [
    "goa",
    "udaipur",
    "jaipur",
    "manali",
    "shimla",
    "darjeeling",
    "kerala",
    "rishikesh",
  ],

  "Emerging Digital Cities": [
    "surat",
    "vadodara",
    "nagpur",
    "coimbatore",
    "kochi",
    "bhubaneswar",
    "patna",
    "raipur",
  ],
} as const;

export type SeoCitySlug =
  (typeof SEO_CITIES)[keyof typeof SEO_CITIES][number];

export type CitySchemaType =
  | "City"
  | "AdministrativeArea";

export type CityInfo = {
  slug: SeoCitySlug;
  name: string;
  region: string;
  country: "India";
  schemaType: CitySchemaType;
};

/**
 * Removes repeated cities appearing in multiple categories.
 */
export const ALL_SEO_CITY_SLUGS = Array.from(
  new Set(
    Object.values(SEO_CITIES).flat() as readonly SeoCitySlug[],
  ),
) as SeoCitySlug[];

const CITY_INFORMATION: Record<
  SeoCitySlug,
  Omit<CityInfo, "slug" | "country">
> = {
  mumbai: {
    name: "Mumbai",
    region: "Maharashtra",
    schemaType: "City",
  },

  delhi: {
    name: "Delhi",
    region: "Delhi",
    schemaType: "City",
  },

  "new-delhi": {
    name: "New Delhi",
    region: "Delhi",
    schemaType: "City",
  },

  bangalore: {
    name: "Bangalore",
    region: "Karnataka",
    schemaType: "City",
  },

  pune: {
    name: "Pune",
    region: "Maharashtra",
    schemaType: "City",
  },

  hyderabad: {
    name: "Hyderabad",
    region: "Telangana",
    schemaType: "City",
  },

  chennai: {
    name: "Chennai",
    region: "Tamil Nadu",
    schemaType: "City",
  },

  kolkata: {
    name: "Kolkata",
    region: "West Bengal",
    schemaType: "City",
  },

  ahmedabad: {
    name: "Ahmedabad",
    region: "Gujarat",
    schemaType: "City",
  },

  gurgaon: {
    name: "Gurgaon",
    region: "Haryana",
    schemaType: "City",
  },

  noida: {
    name: "Noida",
    region: "Uttar Pradesh",
    schemaType: "City",
  },

  thane: {
    name: "Thane",
    region: "Maharashtra",
    schemaType: "City",
  },

  "navi-mumbai": {
    name: "Navi Mumbai",
    region: "Maharashtra",
    schemaType: "City",
  },

  indore: {
    name: "Indore",
    region: "Madhya Pradesh",
    schemaType: "City",
  },

  jaipur: {
    name: "Jaipur",
    region: "Rajasthan",
    schemaType: "City",
  },

  chandigarh: {
    name: "Chandigarh",
    region: "Chandigarh",
    schemaType: "City",
  },

  lucknow: {
    name: "Lucknow",
    region: "Uttar Pradesh",
    schemaType: "City",
  },

  goa: {
    name: "Goa",
    region: "Goa",
    schemaType: "AdministrativeArea",
  },

  udaipur: {
    name: "Udaipur",
    region: "Rajasthan",
    schemaType: "City",
  },

  manali: {
    name: "Manali",
    region: "Himachal Pradesh",
    schemaType: "City",
  },

  shimla: {
    name: "Shimla",
    region: "Himachal Pradesh",
    schemaType: "City",
  },

  darjeeling: {
    name: "Darjeeling",
    region: "West Bengal",
    schemaType: "City",
  },

  kerala: {
    name: "Kerala",
    region: "Kerala",
    schemaType: "AdministrativeArea",
  },

  rishikesh: {
    name: "Rishikesh",
    region: "Uttarakhand",
    schemaType: "City",
  },

  surat: {
    name: "Surat",
    region: "Gujarat",
    schemaType: "City",
  },

  vadodara: {
    name: "Vadodara",
    region: "Gujarat",
    schemaType: "City",
  },

  nagpur: {
    name: "Nagpur",
    region: "Maharashtra",
    schemaType: "City",
  },

  coimbatore: {
    name: "Coimbatore",
    region: "Tamil Nadu",
    schemaType: "City",
  },

  kochi: {
    name: "Kochi",
    region: "Kerala",
    schemaType: "City",
  },

  bhubaneswar: {
    name: "Bhubaneswar",
    region: "Odisha",
    schemaType: "City",
  },

  patna: {
    name: "Patna",
    region: "Bihar",
    schemaType: "City",
  },

  raipur: {
    name: "Raipur",
    region: "Chhattisgarh",
    schemaType: "City",
  },
};

export function isSeoCitySlug(
  value: string,
): value is SeoCitySlug {
  return (
    ALL_SEO_CITY_SLUGS as readonly string[]
  ).includes(value);
}

export function getCityInfo(
  value: string,
): CityInfo | null {
  if (!isSeoCitySlug(value)) {
    return null;
  }

  return {
    slug: value,
    ...CITY_INFORMATION[value],
    country: "India",
  };
}

export function formatCityName(value: string): string {
  const city = getCityInfo(value);

  if (city) {
    return city.name;
  }

  return value
    .split("-")
    .map((word) => {
      return (
        word.charAt(0).toUpperCase() +
        word.slice(1)
      );
    })
    .join(" ");
}