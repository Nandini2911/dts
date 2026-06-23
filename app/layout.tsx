import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const siteUrl = "https://www.dtsworld.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Double Trouble Studio | Creative, Digital Marketing & PR Agency",
    template: "%s | Double Trouble Studio",
  },

  description:
    "Double Trouble Studio is a Mumbai-based creative, branding, digital marketing, public relations, celebrity management, event management, website development, SEO, AI video production and VFX agency.",

  applicationName: "Double Trouble Studio",

  authors: [
    {
      name: "Double Trouble Studio",
      url: siteUrl,
    },
  ],

  creator: "Double Trouble Studio",
  publisher: "Double Trouble Studio",

  keywords: [
    "Double Trouble Studio",
    "creative agency Mumbai",
    "digital marketing agency Mumbai",
    "branding agency Mumbai",
    "public relations agency Mumbai",
    "PR agency Mumbai",
    "celebrity management agency",
    "guest management agency",
    "event management company Mumbai",
    "wedding management company",
    "SEO agency Mumbai",
    "social media marketing agency",
    "website development company Mumbai",
    "AI video production agency",
    "VFX company Mumbai",
    "luxury brand marketing agency",
    "brand strategy agency",
  ],

  category: "Creative and Digital Marketing Agency",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Double Trouble Studio",
    title:
      "Double Trouble Studio | Creative, Digital Marketing & PR Agency",
    description:
      "A Mumbai-based creative agency specializing in brand strategy, digital marketing, PR, celebrity management, events, website development, SEO, AI video production and VFX.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Double Trouble Studio – Creative and Digital Marketing Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Double Trouble Studio | Creative, Digital Marketing & PR Agency",
    description:
      "Creative strategy, digital marketing, PR, celebrity management, events, websites, SEO, AI video production and VFX.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    // Add your Google Search Console verification code here:
    // google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },

  other: {
    "contact:email": "info@dtsworld.in",
    "contact:phone_number": "+91 80000 06021",
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D2444",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: "Double Trouble Studio",
      alternateName: "DTS",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#logo`,
        url: `${siteUrl}/logo.png`,
        contentUrl: `${siteUrl}/logo.png`,
        caption: "Double Trouble Studio",
      },
      image: `${siteUrl}/og-image.jpg`,
      description:
        "Double Trouble Studio is a Mumbai-based creative, branding, digital marketing, public relations, celebrity management, event management and web development agency helping brands build visibility, authority and measurable business growth.",
      email: "mailto:info@dtsworld.in",
      telephone: "+91-80000-06021",
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
      knowsAbout: [
        "Brand Strategy",
        "Digital Marketing",
        "Public Relations",
        "Celebrity Management",
        "Guest Management",
        "Event Management",
        "Wedding Management",
        "Search Engine Optimization",
        "Social Media Marketing",
        "Website Design",
        "Website Development",
        "AI Video Production",
        "VFX",
        "Creative Content Production",
      ],
      audience: [
        {
          "@type": "Audience",
          audienceType: "Business Owners",
        },
        {
          "@type": "Audience",
          audienceType: "Founders",
        },
        {
          "@type": "Audience",
          audienceType: "Marketing Managers",
        },
        {
          "@type": "Audience",
          audienceType: "Brand Teams",
        },
        {
          "@type": "Audience",
          audienceType: "Event Organizers",
        },
        {
          "@type": "Audience",
          audienceType: "Luxury and Lifestyle Brands",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Double Trouble Studio Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Brand Strategy",
              url: `${siteUrl}/services`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Marketing",
              url: `${siteUrl}/services/pr-media-marketing`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Public Relations",
              url: `${siteUrl}/services/pr-media-marketing`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Celebrity Management",
              url: `${siteUrl}/services/celebrity-management`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Guest Management",
              url: `${siteUrl}/services/guest-management`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Event and Wedding Management",
              url: `${siteUrl}/services/events-weddings`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Design and Development",
              url: `${siteUrl}/services/web-development-marketing`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Search Engine Optimization",
              url: `${siteUrl}/services/web-development-marketing`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Video Production and VFX",
              url: `${siteUrl}/services/ai-video-vfx`,
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Double Trouble Studio",
      alternateName: "DTS",
      description:
        "Official website of Double Trouble Studio, a creative, branding, PR, digital marketing, celebrity management, events and web development agency in Mumbai.",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={`${inter.variable} ${sora.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        {children}

        <GoogleTagManager gtmId="GTM-5J6M99HD" />
      </body>
    </html>
  );
}