import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Double Trouble Studio | Branding, PR & Digital Marketing Agency",
  description: "Double Trouble Studio is a Mumbai-based branding, PR and digital marketing agency offering social media, websites, SEO, events, celebrity management and AI video production."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sora.variable}`}
      >
        {children}
      </body>
    </html>
  );
}