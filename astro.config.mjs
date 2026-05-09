import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';

const astroPrerenderEntrypoint = fileURLToPath(new URL('./node_modules/astro/dist/entrypoints/prerender.js', import.meta.url));
const astroLegacyEntrypoint = fileURLToPath(new URL('./node_modules/astro/dist/entrypoints/legacy.js', import.meta.url));

export default defineConfig({
    site: 'https://yacinbk.github.io',
    base: '/portfolio',
    integrations: [sitemap()],
    vite: {
        resolve: {
            alias: {
                'astro/entrypoints/prerender': astroPrerenderEntrypoint,
                'astro/entrypoints/legacy': astroLegacyEntrypoint,
            },
        },
    },
});
