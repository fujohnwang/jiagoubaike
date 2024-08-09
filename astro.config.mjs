import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },
  site: 'https://jiagoubaike.com',
  integrations: [tailwind(), sitemap(),pagefind()],
  trailingSlash: 'never',
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: 'file'
  }
});