import { defineConfig } from 'astro/config';
import unocss from 'unocss/vite'
import unocssConfig from 'unocss-config'
import partytown from "@astrojs/partytown";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), partytown()],
  vite: {
    plugins: [unocss(unocssConfig)]
  }
});