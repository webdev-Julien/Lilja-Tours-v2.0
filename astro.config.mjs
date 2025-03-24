// @ts-check
// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.lilja-tours.com",
  base: "/",
  outDir: "dist",
  build: {
    format: "directory",
  },
  trailingSlash: "ignore",
  integrations: [mdx(), sitemap()],
});
