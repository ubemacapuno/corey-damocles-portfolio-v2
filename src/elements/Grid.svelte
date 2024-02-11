<script lang="ts">
	import type { GapSize } from './element-types'

	/**
	 * @example
	 * <Grid cols={[1, 2, 3]}>
	 *  Output:
	 * * --cols: 1;
	 * * --med_cols: 2;
	 * * --large_cols: 2;
	 * * --xlarge_cols: 3;
	 *
	 */
	export let cols = [1, 1, 1]

	export let gap: GapSize = 'large'
	export let as = 'div'
	export let style = ''

	let d_cols = cols?.[0] || 1
	let m_cols = cols?.[1] || cols?.[0] || 2
	let l_cols = cols?.[2] || cols?.[1] || cols?.[0] || 2
	let xl_cols = cols?.[3] || cols?.[2] || cols?.[1] || cols?.[0] || 3
</script>

<svelte:element
	this={as}
	class={`grid ${$$props.class ?? ''}`}
	style={`
	--grid_gap: var(--gap_${gap});
	--cols: ${d_cols};
	--med_cols: ${m_cols}; 
	--large_cols: ${l_cols}; 
	--xlarge_cols: ${xl_cols}; 
	${style}
	`}
>
	<slot />
</svelte:element>

<style lang="postcss">
	.grid {
		display: grid;
		gap: var(--grid_gap);
		grid-template-columns: repeat(var(--cols), 1fr);
		margin: inherit auto;

		@media (--above_small) {
			grid-template-columns: repeat(var(--cols), 1fr);
		}

		@media (--above_med) {
			grid-template-columns: repeat(var(--med_cols), 1fr);
		}

		@media (--above_large) {
			grid-template-columns: repeat(var(--large_cols), 1fr);
		}

		@media (--above_xlarge) {
			grid-template-columns: repeat(var(--xlarge_cols), 1fr);
		}
	}
</style>
