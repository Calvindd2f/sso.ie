// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sso.ie',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  vite: {
    plugins: [tailwindcss()],
  },
});