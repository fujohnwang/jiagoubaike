import { defineConfig } from "astro/config";
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
  site: "https://jiagoubaike.com",
  integrations: [
    starlight({
      title: "架构百科",
      customCss: [
        // 添加自定义CSS来改善代码高亮
        "./src/styles/custom.css",
      ],
      expressiveCode: {
        // 使用更好的代码高亮主题
        themes: ["github-light", "github-dark"],
        styleOverrides: {
          // 改善代码块的样式
          codeFontFamily:
            '"JetBrains Mono", "Fira Code", "SF Mono", Consolas, "Liberation Mono", Menlo, Courier, monospace',
          borderRadius: "0.75rem",
          borderWidth: "1px",
          frames: {
            shadowColor: "rgba(0, 0, 0, 0.1)",
          },
        },
        defaultProps: {
          // 默认显示行号
          showLineNumbers: false,
          // 启用复制按钮
          wrap: true,
        },
      },
    }),
    tailwind(),
    sitemap(),
    pagefind(),
    mdx(),
  ],
  trailingSlash: "never",
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: "file",
  },
});
