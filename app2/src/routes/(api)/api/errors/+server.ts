import { Firebase } from '#lib/common/public.ts';
import { buildHandler } from '@rf/node.app/routes/api/errors/server.ts';

const { POST } = buildHandler(Firebase.projectId);
export { POST };
