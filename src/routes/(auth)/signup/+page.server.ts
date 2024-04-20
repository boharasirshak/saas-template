import type { Actions } from "@sveltejs/kit";
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirm: z.string()
})
  .refine((data) => data.password == data.confirm, {
    message: "Passwords didn't match",
    path: ["confirm"]
  });

export const load = (async () => {
  const form = await superValidate(zod(schema));
  return { form };
});

export const actions: Actions = {
  default: async (event) => {
  }
};
