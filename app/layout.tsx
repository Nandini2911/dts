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
        url: "og/home-og.jpg",
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
    images: ["/twitter/home-twitter.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={`${inter.variable} ${sora.variable}`}>
      

        {children}

        <GoogleTagManager gtmId="GTM-5J6M99HD" />
      </body>
    </html>
  );
}