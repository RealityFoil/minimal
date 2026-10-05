import { sveltekit } from '@sveltejs/kit/vite';
import type { PluginOption, UserConfig } from 'vite';
import { mergeConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';

const Plugins: PluginOption[] = [];
Plugins.push(sveltekit());

const ViteConfig: UserConfig = {
  plugins: Plugins,
  cacheDir: '.built/vite',
  build: {
    sourcemap: true,
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts'],
  },
};

const VitestConfig = defineVitestConfig({
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
});

export default mergeConfig(ViteConfig, VitestConfig);
