import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },
  site: 'https://jiagoubaike.com',
  integrations: [starlight({title: '架构百科'}), tailwind(), sitemap(), pagefind(), mdx()],
  trailingSlash: 'never',
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: 'file'
  }
});