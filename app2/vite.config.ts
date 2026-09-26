// N.B. vite can only load .ts files with configLoader: https://vite.dev/config/#configuring-vite
// However, firebase web frameworks only runs vite without any parameters. So, we need to import
// as a .js file.
import PackageConfig from '#pkg' with { type: 'json' };
import { adaptConfig } from '@rf/web.config/app/vite.base-config.js';
import { fileURLToPath } from 'node:url';
import type { UserConfig } from 'vite';

const filename = fileURLToPath(import.meta.url);

export default adaptConfig(() => {
  const result: UserConfig = {
    server: {
      allowedHosts: ['localhost'],
    },
  };
  if (!process.env.SVELTEKIT) {
    console.log(`vite ${PackageConfig.name}`, {
      filename,
      config: JSON.stringify(result, null, 2),
    });
  }
  return result;
});

// Note: If firebase has problems loading this file, check firebase-debug.log for details.
