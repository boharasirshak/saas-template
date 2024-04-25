import { loginSchema } from "$lib/schemas";
import type { Actions } from "@sveltejs/kit";
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { signIn } from "../../../auth";

export const load = (async () => {
  const form = await superValidate(zod(loginSchema));
  return { form };
});

export const actions: Actions = { default: signIn }
