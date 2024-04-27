<script lang="ts">
	import RegisterForm from "$lib/components/auth/register-form.svelte";
	import type { PageData } from "./$types.js";
	export let data: PageData;
</script>

<RegisterForm data={data.form} />
