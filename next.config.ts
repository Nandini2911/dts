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
{
  source:
    "/blog/case-studies-website-transformations-for-automotive-hospitality-clients",
  destination:
    "/blog/automotive-hospitality-website-transformation-case-studies",
  permanent: true,
},
{
  source: "/services/events-and-weddings/ahmedabad",
  destination: "/services/events-weddings/ahmedabad",
  permanent: true,
},
{
  source:
    "/blog/ai-video-professional-video-editing-luxury-brand-storytelling",
  destination:
    "/blog/ai-video-video-editing-luxury-brand-storytelling",
  permanent: true,
},
{
  source: "/services/pr-media-digital-marketing/coimbatore",
  destination: "/services/pr-media-marketing/coimbatore",
  permanent: true,
},
{
  source: "/services/events-and-weddings/raipur",
  destination: "/services/events-weddings/raipur",
  permanent: true,
},
{
  source: "/services/pr-media-digital-marketing/udaipur",
  destination: "/services/pr-media-marketing/udaipur",
  permanent: true,
},
{
  source: "/Team",
  destination: "/about",
  permanent: true,
},
{
  source: "/services/pr-media-digital-marketing",
  destination: "/services/pr-media-marketing",
  permanent: true,
},
{
  source:
    "/blog/seo-for-luxury-brands-positioning-keywords-authority-building",
  destination:
    "/blog/seo-for-luxury-brands-positioning-keywords-authority",
  permanent: true,
},
{
  source: "/team",
  destination: "/about",
  permanent: true,
},
{
  source: "/Client",
  destination: "/work",
  permanent: true,
},
{
  source:
    "/blog/building-a-luxury-brand-from-scratch-roadmap-identity-market-entry",
  destination:
    "/blog/building-luxury-brand-from-scratch-roadmap-identity-market-entry",
  permanent: true,
},
{
  source: "/blog/managing-complex-guest-lists-for-luxury-events",
  destination: "/blog/managing-complex-guest-lists-luxury-events",
  permanent: true,
},
{
  source: "/clients",
  destination: "/work",
  permanent: true,
},
{
  source:
    "/blog/case-studies-website-transformations-automotive-hospitality-clients",
  destination:
    "/blog/automotive-hospitality-website-transformation-case-studies",
  permanent: true,
},
{
  source:
    "/blog/conversion-optimization-luxury-brands-high-ticket-funnel-strategy",
  destination:
    "/blog/conversion-optimization-luxury-brands-high-ticket-funnel",
  permanent: true,
},
{
  source:
    "/blog/creating-luxury-brand-funnel-awareness-conversion",
  destination:
    "/blog/creating-luxury-brand-funnel-awareness-to-conversion",
  permanent: true,
},
{
  source:
    "/blog/designing-high-end-luxury-websites-ux-visual-identity-brand-experience",
  destination:
    "/blog/designing-high-end-luxury-websites",
  permanent: true,
},
{
  source: "/blog/event-pr-strategy-media-coverage",
  destination:
    "/blog/event-pr-strategy-media-coverage-before-during-after",
  permanent: true,
},
{
  source:
    "/blog/founder-pr-personal-branding-authority-entrepreneurs",
  destination:
    "/blog/founder-pr-personal-branding-authority-ceos-entrepreneurs",
  permanent: true,
},
{
  source:
    "/blog/how-much-does-pr-cost-india-agency-pricing-retainer-guide",
  destination:
    "/blog/how-much-does-pr-cost-in-india-agency-pricing-retainer-guide",
  permanent: true,
},
{
  source:
    "/blog/how-to-measure-pr-roi-media-value-share-leads",
  destination:
    "/blog/how-to-measure-pr-roi-media-value-share-of-voice-leads",
  permanent: true,
},
{
  source:
    "/blog/luxury-website-ux-principles-minimalism-speed-impact",
  destination:
    "/blog/luxury-website-ux-principles-minimalism-speed-emotional-impact",
  permanent: true,
},
{
  source:
    "/blog/pr-strategy-new-brand-launch-india-framework",
  destination:
    "/blog/pr-strategy-new-brand-launch-india-90-day-framework",
  permanent: true,
},
{
  source:
    "/blog/seo-luxury-brands-positioning-keywords-authority-building",
  destination:
    "/blog/seo-for-luxury-brands-positioning-keywords-authority",
  permanent: true,
},
{
  source: "/blog/technical-seo-foundations-speed-mobile-core-web",
  destination: "/blog/technical-seo-foundations-speed-mobile-core-web-vitals",
  permanent: true,
},
{
  source: "/blog/website-redesign-checklist-brand-redesign-website",
  destination: "/blog/website-redesign-checklist-when-should-brand-redesign-website",
  permanent: true,
},
    ];
  },
};

export default nextConfig;