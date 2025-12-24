import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    // Your production site URL for canonical links and sitemap
    site: 'https://raajveer.com',

    integrations: [
        sitemap({
            // Filter pages to include in sitemap
            filter: (page) => !page.includes('/404'),
            // Change frequency for pages
            changefreq: 'weekly',
            // Priority for pages
            priority: 0.7,
            // Last modification date
            lastmod: new Date(),
        }),
    ],

    // Enable prefetch for better performance
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'viewport',
    },

    // Build output configuration
    build: {
        // Inline small assets
        inlineStylesheets: 'auto',
    },

    // Vite configuration
    vite: {
        build: {
            // Enable CSS code splitting
            cssCodeSplit: true,
        },
    },
});
