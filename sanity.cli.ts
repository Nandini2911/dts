/**
 * This configuration file lets you run:
 * $ sanity [command]
 */

import { defineCliConfig } from "sanity/cli";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

if (!projectId) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID. Add it to your .env.local file."
  );
}

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});