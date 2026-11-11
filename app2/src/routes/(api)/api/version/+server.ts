import PackageConfig from '#pkg' with { type: 'json' };
import type { VersionData } from '@rf/web.app/api/version.ts';
import type { RequestHandler } from './$types.ts';

export const GET: RequestHandler = async () => {
  const result: VersionData = { version: PackageConfig.version };
  return Response.json(result);
};
