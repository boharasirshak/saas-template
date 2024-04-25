<script lang="ts">
	import BackButton from "$lib/components/auth/back-button.svelte";
	import Header from "$lib/components/auth/header.svelte";
	import Social from "$lib/components/auth/social.svelte";
	import { CardContent, CardFooter, CardHeader } from "$lib/components/ui/card";
	import Card from "$lib/components/ui/card/card.svelte";

	export let headerLabel: string;
	export let backButtonLabel: string;
	export let backButtonHref: string;
	export let showSocial: boolean = true;
</script>

<Card class="w-[400px] shadow-md">
	<CardHeader>
		<Header label={headerLabel} />
	</CardHeader>
	<CardContent>
		<slot />
	</CardContent>

	{#if showSocial}
		<Social />
	{/if}

	<CardFooter class="flex items-center justify-center">
		<BackButton href={backButtonHref} label={backButtonLabel} />
	</CardFooter>
</Card>
