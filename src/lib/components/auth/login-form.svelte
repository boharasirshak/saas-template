<script lang="ts">
	import CardWrapper from "$lib/components/auth/card-wrapper.svelte";
	import FormError from "$lib/components/form-error.svelte";
	import FormSuccess from "$lib/components/form-success.svelte";
	import * as Form from "$lib/components/ui/form";
	import { Input } from "$lib/components/ui/input";
	import { loginSchema, type LoginSchema } from "$lib/schemas";
	import { superForm, type Infer, type SuperValidated } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";

	export let data: SuperValidated<Infer<LoginSchema>>;

	const form = superForm(data, {
		validators: zodClient(loginSchema)
	});

	const { form: formData, enhance, message, errors, constraints, submitting } = form;
</script>

<CardWrapper
	headerLabel="Welcome Back"
	backButtonLabel="Don't have an account?"
	backButtonHref="/auth/register"
	showSocial
>
	<form use:enhance method="POST" class="flex w-full flex-col gap-3">
		<Form.Field {form} name="email">
			<Form.Control let:attrs>
				<Form.Label>Email</Form.Label>
				<Input
					{...attrs}
					{...$constraints.email}
					aria-invalid={$errors.email ? "true" : undefined}
					bind:value={$formData.email}
					placeholder="example@example.com"
					disabled={$submitting}
				/>
			</Form.Control>
			<Form.Description />
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="password">
			<Form.Control let:attrs>
				<Form.Label>Password</Form.Label>
				<Input
					type="password"
					{...attrs}
					{...$constraints.password}
					aria-invalid={$errors.password ? "true" : undefined}
					bind:value={$formData.password}
					disabled={$submitting}
				/>
			</Form.Control>
			<Form.Description />
			<Form.FieldErrors />
		</Form.Field>

		{#if $message}
			{#if $message.type == "success"}
				<FormSuccess message={$message.text} />
			{:else}
				<FormError message={$message.text} />
			{/if}
		{/if}

		<Form.Button class="item-center flex w-full flex-row justify-center" disabled={$submitting}
			>Submit</Form.Button
		>

		<div class="mt-5 flex flex-row items-center justify-center">
			<a href="/auth/forget-password" class="text-sm hover:underline">Forget password?</a>
		</div>
	</form>
</CardWrapper>
