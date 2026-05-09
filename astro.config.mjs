import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';

import cloudflare from '@astrojs/cloudflare';

const astroPrerenderEntrypoint = fileURLToPath(
    new URL('./node_modules/astro/dist/entrypoints/prerender.js', import.meta.url)
);

const astroLegacyEntrypoint = fileURLToPath(
    new URL('./node_modules/astro/dist/entrypoints/legacy.js', import.meta.url)
);

export default defineConfig({
  site: 'https://yacinbenkacem.me',
  integrations: [sitemap()],

  vite: {
      resolve: {
          alias: {
              'astro/entrypoints/prerender': astroPrerenderEntrypoint,
              'astro/entrypoints/legacy': astroLegacyEntrypoint,
          },
      },
  },

  adapter: cloudflare(),
});