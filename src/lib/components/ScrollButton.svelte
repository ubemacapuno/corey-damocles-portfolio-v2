<script lang="ts">
	import { scrollTo } from '$lib/actions/scrollTo'

	export let targetId: string
	export let isActive: boolean = false
</script>

<div class="container">
	<span
		class="line"
		style="transform: scaleX({isActive ? 6 : 1}); background-color: {isActive
			? 'var(--primary_color)'
			: 'var(--subtext_color)'};
	"
	></span>
	<button
		use:scrollTo={targetId}
		style="color: {isActive ? 'var(--primary_color)' : 'var(--subtext_color)'}; font-size: {isActive
			? 'var(--font_large)'
			: 'var(--font_normal)'};"
	>
		{targetId.charAt(0).toUpperCase() + targetId.slice(1)}
	</button>
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: calc(var(--gap_largest) * 2);
	}

	button {
		display: inline-flex;
		align-items: center;
		gap: var(--gap_small);
		border: none;
		background: none;
		cursor: pointer;
		transition:
			font-size 0.3s ease,
			color 0.3s ease;
	}

	.line {
		display: inline-block;
		transition: transform 0.3s ease;
		transform-origin: left center;
		width: 10px;
		height: 2px;
	}
</style>
