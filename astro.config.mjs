import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from "remark-math";
import rehypeKatex  from 'rehype-katex';
import remarkParse from 'remark-parse/lib';
import rehypeStringify from 'rehype-stringify';
import remarkReHype from "remark-rehype";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind(), vue(), react(), image()],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'vitesse-light',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      // langs: ['javascript'],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
    remarkPlugins:[remarkMath,remarkParse],
    rehypePlugins:[rehypeKatex,remarkReHype,rehypeStringify]
  },
});