
import type { Metadata } from "next";
import TermsConditions from "@/components/TermsConditions";

export const metadata: Metadata = {
  title: {
    absolute: "Terms & Conditions | Double Trouble Studio",
  },

  description:
    "Read the Terms and Conditions of Double Trouble Studio, including website usage, intellectual property, responsibilities and important legal information.",

  alternates: {
    canonical: "https://www.dtsworld.in/terms-conditions",
  },

  openGraph: {
    title: "Terms & Conditions | Double Trouble Studio",
    description:
      "Read the Terms and Conditions for using the Double Trouble Studio website.",
    url: "https://www.dtsworld.in/terms-conditions",
    siteName: "Double Trouble Studio",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsConditionsPage() {
  return <TermsConditions />;
}
