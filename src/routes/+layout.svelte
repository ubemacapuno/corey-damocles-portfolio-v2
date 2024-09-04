<script lang="ts">
	import '$lib/styles/index.css'
	import TopNav from './TopNav.svelte'
	import CustomCursor from '$lib/components/CustomCursor.svelte'
</script>

<div class="layout">
	<TopNav />
	<div class="page_container">
		<slot />
	</div>
	<CustomCursor />
</div>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		width: 100%;
		background-color: var(--bg_color);
		position: relative;
	}

	.page_container {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		max-width: var(--max_page_width);
		margin: 0 auto;
		width: 100%;
		position: relative;
		z-index: 1;
	}
</style>
