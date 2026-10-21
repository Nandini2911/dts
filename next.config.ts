/** @type {import('next').NextConfig} */

const nextConfig = {
  allowedDevOrigins: [
    "192.168.1.3",
  ],

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/blog/Behind-the-Scenes-of-celebrity-management",
        destination: "/blog/behind-the-scenes-celebrity-management",
        permanent: true,
      },
      {
  source: "/blog/event-budgeting-for-luxury-experiences",
  destination:
    "/blog/event-budgeting-luxury-experiences-cost-allocation-hidden-costs-roi",
  permanent: true,
},
{
  source:
    "/blog/case-studies-successful-celebrity-integrations-for-luxury-hospitality-brands",
  destination:
    "/blog/celebrity-integrations-luxury-hospitality-case-studies",
  permanent: true,
},
{
  source: "/services/events-and-weddings/goa",
  destination: "/services/events-weddings/goa",
  permanent: true,
},
{
  source: "/services/web-development-marketing/jaisalmer",
  destination: "/services/web-development-marketing",
  permanent: true,
},
{
  source: "/services/pr-media-digital-marketing/darjeeling",
  destination: "/services/pr-media-marketing/darjeeling",
  permanent: true,
},
{
  source: "/services/pr-media-digital-marketing/delhi",
  destination: "/services/pr-media-marketing/delhi",
  permanent: true,
},
{
  source: "/blog/measuring-adjusting-tools-metrics-for-roadmap-success",
  destination:
    "/blog/measuring-and-adjusting-tools-and-metrics-for-roadmap-success",
  permanent: true,
},
    ];
  },
};

export default nextConfig;