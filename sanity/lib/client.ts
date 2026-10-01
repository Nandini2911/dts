import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

if (!projectId) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID. Please add your Sanity Project ID to the .env.local file."
  );
}

export const client = createClient({
  projectId,
  dataset,

  apiVersion: "2026-06-17",

  // Fetch latest published content directly from Sanity
  useCdn: false,

  // Only published content will be shown on the website
  perspective: "published",
});