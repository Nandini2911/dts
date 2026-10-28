
import type { Metadata } from "next";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | Double Trouble Studio",
  },

  description:
    "Read the Privacy Policy of Double Trouble Studio to understand how we collect, use, protect and manage personal information submitted through our website.",

  alternates: {
    canonical: "https://www.dtsworld.in/privacy-policy",
  },

  openGraph: {
    title: "Privacy Policy | Double Trouble Studio",
    description:
      "Read the Privacy Policy of Double Trouble Studio.",
    url: "https://www.dtsworld.in/privacy-policy",
    siteName: "Double Trouble Studio",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
