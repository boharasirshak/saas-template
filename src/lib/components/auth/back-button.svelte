<script lang="ts">
	import { Button } from "$lib/components/ui/button";

	export let href: string;
	export let label: string;
</script>

<div>
	<Button variant="link" class="w-full font-normal" size="sm">
		<a {href}> {label} </a>
	</Button>
</div>
