<script lang="ts">
	import LoginForm from "$lib/components/auth/login-form.svelte";
	import type { PageData } from "./$types.js";
	export let data: PageData;
</script>

<LoginForm data={data.form} />
