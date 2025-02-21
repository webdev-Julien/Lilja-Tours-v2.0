// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  site: 'https://webdev-Julien.github.io',
  base: '/Lilja-Tours-v2.0/',
  outDir: "dist"
});