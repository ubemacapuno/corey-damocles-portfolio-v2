<script lang="ts">
	import '$lib/styles/index.css'
	import TopNav from './TopNav.svelte'
</script>

<main>
	<TopNav />
	<div class="page_container">
		<slot />
	</div>
</main>

<style>
	main {
		width: 100%;
	}
	.page_container {
		max-width: var(--max_page_width);
		margin: 0 auto;
	}
</style>
