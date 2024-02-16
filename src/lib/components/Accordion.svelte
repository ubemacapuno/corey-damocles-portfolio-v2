<script>
	import { slide } from 'svelte/transition'

	export let isOpen = false

	// ! Note: adding margins to the direct child elements will break the slide transition
</script>

<!--
	Example usage:
		<Accordion bind:isOpen>
			<H6 slot="header" accent="text" class="margin_0">See More</H6>
			<div>
				<p>Some content</p>
			</div>
	</Accordion>
-->

<Flex>
	<slot name="header" onClick={() => (isOpen = !isOpen)} {isOpen} />

	<button on:click={() => (isOpen = !isOpen)} type="button" class:isOpen class="accordion_btn">
		<Icon name="expand_more" />
	</button>
</Flex>

{#if isOpen}
	<div transition:slide>
		<slot />
	</div>
{/if}

<style lang="postcss">
	:global(.accordion_btn .icon-expand_more) {
		transform: rotate(0);
		transition: transform var(--transition_speed) ease;
	}
	:global(.accordion_btn.isOpen .icon-expand_more) {
		transform: rotate(-0.5turn);
	}
</style>
