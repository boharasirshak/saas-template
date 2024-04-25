<script lang="ts">
	import CardWrapper from "$lib/components/auth/card-wrapper.svelte";
	import * as Form from "$lib/components/ui/form";
	import { Input } from "$lib/components/ui/input";
	import { loginSchema, type LoginSchema } from "$lib/schemas";
	import { superForm, type Infer, type SuperValidated } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";

	export let data: SuperValidated<Infer<LoginSchema>>;

	const form = superForm(data, {
		validators: zodClient(loginSchema)
	});

	const { form: formData, enhance, message, errors, constraints } = form;
</script>

<CardWrapper
	headerLabel="Welcome Back"
	backButtonLabel="Don't have an account?"
	backButtonHref="/auth/signup"
	showSocial
>
	{#if $message}<h3>{$message}</h3>{/if}

	<form use:enhance method="POST" class="flex w-full flex-col gap-3">
		<Form.Field {form} name="email">
			<Form.Control let:attrs>
				<Form.Label>Email</Form.Label>
				<Input
					{...attrs}
					{...$constraints.email}
					aria-invalid={$errors.email ? "true" : undefined}
					bind:value={$formData.email}
				/>
			</Form.Control>
			<Form.Description />
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="password">
			<Form.Control let:attrs>
				<Form.Label>Password</Form.Label>
				<Input
					{...attrs}
					{...$constraints.password}
					aria-invalid={$errors.password ? "true" : undefined}
					bind:value={$formData.password}
				/>
			</Form.Control>
			<Form.Description />
			<Form.FieldErrors />
		</Form.Field>

		<Form.Button class="item-center flex w-full flex-row justify-center">Submit</Form.Button>

		<div class="mt-5 flex flex-row justify-between gap-5">
			<a href="/auth/signup" class="hover:underline">Don't have an account?</a>
			<a href="/auth/forget-password" class="hover:underline">Forget password?</a>
		</div>
	</form>
</CardWrapper>
