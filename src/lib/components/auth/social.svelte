<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
</script>

<div class="flex w-full items-center gap-x-2 p-2">
	<Button size="lg" class="w-full" variant="outline" on:click={() => {}}>
		<img src="/icons/google-icon.svg" alt="Google Icon" class="h-5 w-5" />
	</Button>

	<Button size="lg" class="w-full" variant="outline" on:click={() => {}}>
		<img src="/icons/github-icon.svg" alt="Github Icon" class="h-5 w-5" />
	</Button>
</div>
