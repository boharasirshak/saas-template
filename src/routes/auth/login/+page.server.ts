import { loginSchema } from "$lib/schemas";
import type { Actions } from "@sveltejs/kit";
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = (async () => {
  const form = await superValidate(zod(loginSchema));
  return { form };
});

export const actions: Actions = {
  default: async (event) => {
    const body = await event.request.formData();
    console.log(body);
  }
}
