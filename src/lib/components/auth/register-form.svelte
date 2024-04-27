<script lang="ts">
	import CardWrapper from "$lib/components/auth/card-wrapper.svelte";
	import FormError from "$lib/components/form-error.svelte";
	import FormSuccess from "$lib/components/form-success.svelte";
	import * as Form from "$lib/components/ui/form";
	import { Input } from "$lib/components/ui/input";
	import { registerSchema, type RegisterSchema } from "$lib/schemas";
	import { superForm, type Infer, type SuperValidated } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";

	export let data: SuperValidated<Infer<RegisterSchema>>;

	const form = superForm(data, {
		validators: zodClient(registerSchema)
	});

	const { form: formData, enhance, message, errors, constraints, submitting } = form;
</script>

<CardWrapper
	headerLabel="Create an new account"
	backButtonLabel="Already have an account?"
	backButtonHref="/auth/login"
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

		<Form.Field {form} name="confirm">
			<Form.Control let:attrs>
				<Form.Label>Confirm Password</Form.Label>
				<Input
					type="password"
					{...attrs}
					{...$constraints.confirm}
					aria-invalid={$errors.confirm ? "true" : undefined}
					bind:value={$formData.confirm}
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
	</form>
</CardWrapper>
