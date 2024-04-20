import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { handle as authenticationHandle } from './auth';

const authorizationHandle: Handle = async ({ event, resolve }) => {
  if (event.url.pathname.startsWith('/user')) {
    const session = await event.locals.auth();
    if (!session) {
      throw redirect(303, '/auth/signin');
    }
  }

  return resolve(event);
}

export const handle: Handle = sequence(authenticationHandle, authorizationHandle)
