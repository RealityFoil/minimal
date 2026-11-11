import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Svelte's options for this library's own type check: svelte-check and the editor's Svelte language
// server read them here. SvelteKit doesn't (since SvelteKit 3 its configuration is the options of
// its Vite plugin, in an app's Vite config, as ../app/vite.config.ts has it), and this package has
// no Vite config: `svelte-kit sync` runs here on SvelteKit's defaults, for the generated tsconfig
// that tsconfig.json extends. A library adapts nothing, so there is no adapter.
/** @type {import('@sveltejs/vite-plugin-svelte').SvelteConfig} */
const config = {
  extensions: ['.svelte', '.sv'],

  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors.
  preprocess: vitePreprocess(),
};

export default config;
