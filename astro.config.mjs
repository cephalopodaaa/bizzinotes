import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), mdx(), vue()]
});