import { loginSchema } from "$lib/schemas";
import { type Actions } from "@sveltejs/kit";
import { message, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";

export const load = async () => {
  const form = await superValidate(zod(loginSchema));
  return { form };
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(loginSchema));

    if (!form.valid) {
      return message(
        form,
        {
          type: "error",
          text: "Invalid Fields"
        },
        {
          status: 400
        }
      );
    }

    return message(form, {
      type: "success",
      text: "Login Successful!"
    });
  }
};
