// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.lilja-tours.com',
  build: {
    format: "directory"
  },
  integrations: [mdx(), sitemap()],
});