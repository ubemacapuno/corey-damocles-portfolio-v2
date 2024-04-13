<script lang="ts">
	import '$lib/styles/index.css'
	import TopNav from './TopNav.svelte'
</script>

<div class="layout">
	<TopNav />
	<div class="page_container">
		<slot />
	</div>
</div>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		width: 100%;
		background-color: var(--bg_color);
	}

	.page_container {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		max-width: var(--max_page_width);
		margin: 0 auto;
		width: 100%;
	}

	footer {
		background-color: var(--sheet_color);
		padding: var(--gap) 0;
		border-top: 0.5px solid var(--secondary_line_color);
	}
</style>
