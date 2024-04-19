import type { Actions } from "@sveltejs/kit";
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const load = (async () => {
  const form = await superValidate(zod(schema));
  return { form };
});

export const actions: Actions = {
  default: async (event) => {
    console.log(event);
  }
};
