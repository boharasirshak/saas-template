<script lang="ts">
	import LoginButton from "$lib/components/auth/login-button.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	// import type { PageData } from "./$types";

	// export let data: PageData;
</script>

<main class="flex h-full flex-col items-center justify-center">
	<div class="space-y-6 text-center">
		<h1 class="text-6xl font-semibold text-white drop-shadow-md">🔐 Auth</h1>
		<p class="text-lg text-white">A simple SAAS template</p>
		<div>
			<LoginButton>
				<Button variant="secondary" size="lg">Signin</Button>
			</LoginButton>
		</div>
	</div>
	<!-- {#if data.session}
		<button on:click={() => signOut()}>Signout</button>
	{:else}
		<button on:click={() => signIn("github")}>Sign In with GitHub</button>
	{/if} -->
</main>
