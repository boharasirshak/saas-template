<script lang="ts">
	export let message: string;
</script>

{#if message}
	<div class="flex items-center gap-x-2 rounded-md bg-emerald-500/15 p-3 text-sm text-emerald-500">
		<img src="/icons/success.svg" alt="Error Icon" class="h-4 w-4" />
		<p>{message}</p>
	</div>
{/if}
