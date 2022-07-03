import type { StorybookViteConfig } from '@storybook/builder-vite';
import { mergeConfig } from 'vite';
import unocss from 'unocss/vite';

import unocssConfig from 'unocss-config';

const config: StorybookViteConfig = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      plugins: [unocss(unocssConfig)],
    });
  },
}

export default config;