<script lang="ts">
	import { superForm } from "sveltekit-superforms";

	export let data;

	const { form, errors, constraints, message, enhance } = superForm(data.form);
</script>

{#if $message}<h3>{$message}</h3>{/if}

<form use:enhance method="POST">
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

	<input type="submit" value="Login" />

	<a href="/signup">Don't have an account?</a>
	<a href="/forget-password">Forget password?</a>
</form>

<style>
	.invalid {
		color: red;
	}
</style>
