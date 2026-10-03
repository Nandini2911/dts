'use client'
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { postType } from "./sanity/schemaTypes/postType";



const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

if (!projectId) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID. Add it to your .env.local file."
  );
}

export default defineConfig({
  name: "default",
  title: "DTS Blog CMS",

  projectId,
  dataset,

  basePath: "/studio",

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: [postType],
  },
});