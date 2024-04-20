<script lang="ts">
	import { signIn, signOut } from "@auth/sveltekit/client";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

{#if data.session}
	<button on:click={() => signOut()}>Signout</button>
{:else}
	<button on:click={() => signIn("github")}>Sign In with GitHub</button>
{/if}
