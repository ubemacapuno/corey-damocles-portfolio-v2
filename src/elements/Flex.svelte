<script lang="ts">
	import type { GapSize } from './element-types'

	export let gap: GapSize = 'normal'
	export let align = 'center'
	export let justify = 'space-between'
	export let direction = 'row'
	export let as = 'div'
	export let maxWidth = false
	export let style = ''
	export let inline = false
	export let wrap = 'wrap'

	// TODO Define gap instead of hardcoding
</script>

<svelte:element
	this={as}
	class={`flex ${$$props.class ?? ''}`}
	style={`--flexGap: var(--gap_${gap}); ${style}`}
	style:align-items={align}
	style:flex-wrap={wrap}
	style:justify-content={justify}
	style:flex-direction={direction}
	class:max_width={maxWidth}
	class:inline_flex={inline}
>
	<slot />
</svelte:element>

<style lang="postcss">
	:global(.flex) {
		display: flex;
		gap: var(--flexGap);
	}
</style>
