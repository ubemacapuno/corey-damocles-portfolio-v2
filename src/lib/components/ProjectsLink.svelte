<script>
	import { fly } from 'svelte/transition'
	let hovered = false
</script>

<!-- Button that navigates to "/projects" -->
<div class="wrapper">
	<a
		href="/projects"
		on:mouseenter={() => (hovered = true)}
		on:mouseleave={() => (hovered = false)}
	>
		<span class="material-symbols-outlined rotate">code</span>
		Projects
		{#if hovered}
			<div class="computer_mouse_container">
				<span
					class="material-symbols-outlined"
					in:fly={{ x: -200, duration: 200 }}
					out:fly={{ x: -200, duration: 200 }}>computer</span
				>
				<span
					class="material-symbols-outlined"
					in:fly={{ x: -200, duration: 200 }}
					out:fly={{ x: -200, duration: 200 }}>mouse</span
				>
			</div>
		{/if}
	</a>
</div>

<style lang="postcss">
	.wrapper {
		display: flex;
		justify-content: flex-start;
		margin-top: var(--gap_largest);
	}

	a {
		color: var(--subtext_color);
		font-size: var(--font_large);
		text-decoration: none;
		transition:
			transform 0.3s ease,
			color 0.3s ease;
		display: flex;
		align-items: center;
		gap: var(--gap);
		position: relative;
	}

	a:hover {
		transform: scale(1.2);
		color: var(--primary_color);

		span {
			color: var(--accent_color);
		}
	}

	.computer_mouse_container {
		display: flex;
		gap: 0;
	}

	.rotate {
		display: inline-block;
		transition: transform 0.5s ease;
	}

	a:hover .rotate {
		transform: rotate(540deg); /* Keep the rotation effect */
	}
</style>
