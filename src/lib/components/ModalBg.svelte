<script lang="ts">
	import { fade } from 'svelte/transition'
	import { HOTKEYS, shortcut } from '$lib/actions/shortcut'

	export let onClose: (e: KeyboardEvent | MouseEvent) => void = () => {}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:click={onClose}
	transition:fade
	class="background"
	use:shortcut={HOTKEYS.modals.close_modal}
	on:keypress={onClose}
/>

<style lang="postcss">
	.background {
		background: var(--backdrop);
		cursor: pointer;
		inset: 0;
		position: fixed;
		z-index: calc(var(--modal_level) - 1);
	}
</style>
