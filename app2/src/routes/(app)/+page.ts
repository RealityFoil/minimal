import { goto } from '$app/navigation';
import { log } from '@rf/common/core.ts';
import { userSignOut } from '@rf/web.firebase/client/auth.ts';

export async function load({ url }: { url: URL }) {
  if (url.searchParams.get('signOut') === '1') {
    log('Forced sign out.', {}, { level: 'warn' });
    url.searchParams.delete('signOut');
    await userSignOut();
    goto(url.toString(), { replaceState: true, keepFocus: true });
  }

  return {};
}
