<script lang="ts">
	import SuperDebug, { superForm } from "sveltekit-superforms";

	export let data;

	const { form, errors, constraints, message, enhance } = superForm(data.form);
</script>

{#if $message}<h3>{$message}</h3>{/if}

<SuperDebug data={$form} />

<form method="POST" use:enhance>
	<label for="email">Email</label>
	<input
		type="text"
		name="email"
		bind:value={$form.email}
		aria-invalid={$errors.email ? "true" : undefined}
		{...$constraints.email}
	/>
	{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}

	<label for="password">Password</label>
	<input
		type="password"
		name="password"
		bind:value={$form.password}
		aria-invalid={$errors.password ? "true" : undefined}
		{...$constraints.password}
	/>
	{#if $errors.password}<span class="invalid">{$errors.password}</span>{/if}

	<label for="confirm">Confirm Password</label>
	<input
		type="password"
		name="confirm"
		bind:value={$form.confirm}
		aria-invalid={$errors.confirm ? "true" : undefined}
		{...$constraints.confirm}
	/>
	{#if $errors.confirm}<span class="invalid">{$errors.confirm}</span>{/if}

	<input type="submit" value="Signup" />

	<a href="/auth/signin">Already have an account?</a>
</form>

<style>
	.invalid {
		color: red;
	}
</style>
