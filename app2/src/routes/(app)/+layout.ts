// This can be false if you're using a fallback (i.e. SPA mode)
import { isPresent } from '@rf/common/identity.ts';
import { checkVersion } from '@rf/web.app/api/version.ts';
import { checkUpdate } from '@rf/web.app/client/pwa/update.ts';
import type { LayoutLoad } from './$types.ts';

// https://kit.svelte.dev/docs/adapter-static#usage
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ssr = false;
// eslint-disable-next-line @typescript-eslint/naming-convention
export const prerender = false;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const load: LayoutLoad = async ({ fetch }) => {
  const version = (await checkVersion('/api/version', fetch))?.version;
  if (isPresent(version) && checkUpdate(version)) {
    window.location.reload();
  }
  return { version };
};
