import { createClient } from "next-sanity";

export const client = createClient({
  projectId:
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:
    process.env.NEXT_PUBLIC_SANITY_DATASET ||
    "production",
  apiVersion: "2026-06-17",

  // Latest published posts immediately fetch karne ke liye
  useCdn: false,

  // Website par sirf published content show hoga
  perspective: "published",
});