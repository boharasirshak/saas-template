<script lang="ts">
	export const ssr = false;

	export let mode: "redirect" | "modal" = "redirect";

	function onClick() {
		// goto("/auth/signin")
		window.location.href = "/auth/login";
	}
</script>

{#if mode === "modal"}
	TODO: redirect
{:else}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<span class="cursor-pointer" on:click={onClick}>
		<slot />
	</span>
{/if}
