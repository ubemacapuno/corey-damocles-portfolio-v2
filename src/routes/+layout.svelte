<script lang="ts">
	import '$lib/styles/index.css'
	import TopNav from './TopNav.svelte'
</script>

<TopNav />
<main>
	<div class="page_container">
		<slot />
	</div>
</main>

<style>
	main {
		width: 100%;
	}
	.page_container {
		max-width: 900px;
		margin: 0 auto;
	}
</style>
