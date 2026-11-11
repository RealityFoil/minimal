import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import type { PluginOption, UserConfig } from 'vite';
import { mergeConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';

// SvelteKit's and Svelte's configuration is the options of SvelteKit's Vite plugin: SvelteKit 3
// reads no svelte.config.js. The Kit options (adapter, outDir) are at the top level, beside
// Svelte's (preprocess).
const Plugins: PluginOption[] = [];
Plugins.push(
  sveltekit({
    adapter: adapter({
      pages: 'dist',
      fallback: '200.html',
      precompress: false,
      strict: false,
    }),
    outDir: '.built',
    preprocess: [vitePreprocess()],
  }),
);

const ViteConfig: UserConfig = {
  plugins: Plugins,
  cacheDir: '.built/vite',
  build: {
    sourcemap: true,
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts'],
  },
  // SvelteKit's server code imports `cookie` (version 2), which Vite leaves as a bare import in the
  // server build when Node can resolve the name from here. It can, to the wrong one: the root
  // node_modules holds cookie 0.7 (express's), and pnpm nests SvelteKit's own under @sveltejs/kit,
  // where the built chunk doesn't look. Bundled, the build takes the copy SvelteKit resolves. An
  // adapter-node build bundles every dependency anyway; this one (adapter-static) doesn't.
  ssr: {
    noExternal: ['cookie'],
  },
};

const VitestConfig = defineVitestConfig({
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
});

export default mergeConfig(ViteConfig, VitestConfig);
