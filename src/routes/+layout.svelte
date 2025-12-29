<script lang="ts">
	import '../app.css';
	import TopBar from '$lib/TopBar.svelte';

	let { children } = $props();
</script>

<div class="flex flex-col">
	<TopBar />
	{@render children()}
</div>
