
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // =========================================
  // EXISTING DEVELOPMENT SETTINGS
  // =========================================
  allowedDevOrigins: ["192.168.1.3"],

  // =========================================
  // EXISTING SANITY IMAGE SETTINGS
  // =========================================
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  // =========================================
  // SEO AUDIT - PERMANENT 301 REDIRECTS
  // EXCEL ERRORS #3 TO #28
  // =========================================
  async redirects() {
    return [
      // #3 - SEO Mumbai
      {
        source: "/services/search-engine-optimization/mumbai",
        destination: "/services/search-engine-optimization",
        statusCode: 301,
      },

      // #4 - Web Development Mumbai
      {
        source: "/services/web-development-marketing/mumbai",
        destination: "/services/web-development-marketing",
        statusCode: 301,
      },

      // #5 - Technical SEO Complete Guide
      {
        source: "/blog/technical-seo-complete-website-optimization-guide",
        destination: "/blog/technical-seo-foundations-speed-mobile-core-web-vitals",
        statusCode: 301,
      },

      // #6 - Technical SEO 2026
      {
        source: "/blog/technical-seo-foundations-speed-mobile-core-web-vitals-2026",
        destination: "/blog/technical-seo-foundations-speed-mobile-core-web-vitals",
        statusCode: 301,
      },

      // #7 - UI UX Design
      {
        source: "/blog/ui-ux-design-principles-for-high-brand-websites",
        destination: "/blog/ui-ux-design-principles-for-high-end-brand-websites",
        statusCode: 301,
      },

      // #8 - Luxury Brand Funnel
      // IMPORTANT: Target was reported as 404.
      {
        source: "/blog/creating-luxury-brand-funnel-awareness-conversion",
        destination: "/blog/creating-luxury-brand-funnel-awareness-to-conversion",
        statusCode: 301,
      },

      // #9 - Luxury Conversion Optimization
      // IMPORTANT: Target was reported as 404.
      {
        source: "/blog/conversion-optimization-luxury-brands-high-ticket-funnel-strategy",
        destination: "/blog/conversion-optimization-luxury-brands-high-ticket-funnel",
        statusCode: 301,
      },

      // #10 - Content Strategy
      {
        source: "/blog/content-strategy-brand-websites-blogs-galleries",
        destination: "/blog/content-strategy-brand-websites-blogs-galleries-lead-magnets",
        statusCode: 301,
      },

      // #11 - Secure Websites
      {
        source: "/blog/building-secure-websites-premium-clients-data-protection-trust-signals",
        destination: "/blog/building-secure-websites-premium-clients",
        statusCode: 301,
      },

      // #12 - Conversion Focused Funnels
      {
        source: "/blog/building-conversion-focused-marketing-funnels-on-your-site",
        destination: "/blog/building-conversion-focused-marketing-funnels",
        statusCode: 301,
      },

      // #13 - E-commerce Website Security
      {
        source: "/blog/website-security-maintenance-ecommerce-booking-sites",
        destination: "/blog/ecommerce-booking-website-security-maintenance",
        statusCode: 301,
      },

      // #14 - AI Video Production
      {
        source: "/blog/complete-ai-video-production-professional-video-editing-workflow",
        destination: "/blog/end-to-end-ai-video-production-professional-video-editing-workflow",
        statusCode: 301,
      },

      // #15 - Test Blog
      {
        source: "/blog/test-1",
        destination: "/blog",
        statusCode: 301,
      },

      // #16 - PR Pricing Guide
      {
        source: "/blog/how-much-does-pr-cost-in-india-agency-retainer-guide",
        destination: "/blog/how-much-does-pr-cost-in-india-agency-pricing-retainer-guide",
        statusCode: 301,
      },

      // #17 - Luxury Brand Case Studies
      // IMPORTANT: Target was reported as 404.
      {
        source: "/blog/luxury-brand-case-studies",
        destination: "/blog/luxury-brand-case-studies-what-successful-brands-do-differently",
        statusCode: 301,
      },

      // #18 - Crisis Management
      {
        source: "/services/crisis-management",
        destination: "/services/pr-media-marketing",
        statusCode: 301,
      },

      // #19 - Strategic Roadmap
      {
        source: "/services/strategic-roadmap",
        destination: "/",
        statusCode: 301,
      },

      // #20 - Strategic Roadmap Kolkata
      {
        source: "/services/strategic-roadmap/kolkata",
        destination: "/",
        statusCode: 301,
      },

      // #21 - AI VFX Gurgaon
      {
        source: "/services/ai-vfx/gurgaon",
        destination: "/services/ai-video-vfx/gurgaon",
        statusCode: 301,
      },

      // #22 - Bhubaneswar Services
      {
        source: "/services/bhubaneswar",
        destination: "/locations",
        statusCode: 301,
      },

      // #23 - Automotive Hospitality Case Study
      {
        source: "/blog/case-studies-website-transformations-for-automotive-hospitality-clients",
        destination: "/blog/automotive-hospitality-website-transformation-case-studies",
        statusCode: 301,
      },

      // #24 - Measuring Roadmap Success
      {
        source: "/blog/measuring-adjusting-tools-metrics-roadmap-success",
        destination: "/blog/measuring-and-adjusting-tools-and-metrics-for-roadmap-success",
        statusCode: 301,
      },

      // #25 - Old Team Page
      {
        source: "/team",
        destination: "/about",
        statusCode: 301,
      },

      // #26 - SEO for Luxury Brands
      {
        source: "/blog/seo-for-luxury-brands-positioning-keywords-authority-building",
        destination: "/blog/seo-for-luxury-brands-positioning-keywords-authority",
        statusCode: 301,
      },

      // #27 - Old Clients Page
      {
        source: "/clients",
        destination: "/work",
        statusCode: 301,
      },

      // #28 - Luxury Brand Identity
      {
        source: "/blog/building-a-luxury-brand-from-scratch-roadmap-identity-market-entry",
        destination: "/blog/building-luxury-brand-from-scratch-roadmap-identity-market-entry",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
