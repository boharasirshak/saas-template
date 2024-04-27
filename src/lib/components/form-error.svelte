<script lang="ts">
	export let message: string;
</script>

{#if message}
	<div
		class="flex items-center gap-x-2 rounded-md bg-destructive p-3 text-sm text-destructive-foreground"
	>
		<img src="/icons/exclamation.svg" alt="Error Icon" class="h-4 w-4" />
		<p>{message}</p>
	</div>
{/if}
