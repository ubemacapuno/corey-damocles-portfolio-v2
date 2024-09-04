<script lang="ts">
	import { onMount, onDestroy } from 'svelte'

	/**
	 * This custom cursor component creates a glowing effect that follows the cursor across the page
	 * Inspired by @see https://brittanychiang.com/ (no access to original source code, so this is a recreation)
	 *
	 * How it works:
	 * 1. It tracks the cursor's position using a mousemove event listener.
	 * 2. The glow effect is created using a radial gradient CSS background.
	 * 3. The glow position is updated on each animation frame for smooth movement.
	 * 4. On smaller screens (<=700px), the glow is positioned in the top left corner.
	 *
	 * Key elements:
	 * - cursorGlow: Refers to the DOM element that displays the glow effect.
	 * - x, y: Store the current cursor coordinates.
	 * - rafId (requestAnimationFrame ID): Used to cancel the animation frame on component destroy.
	 *    - @see https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
	 */

	let cursorGlow
	let x = 0
	let y = 0
	let rafId
	let isLargeScreen = typeof window !== 'undefined' && window.innerWidth > 700

	function updateCursorPosition(event: MouseEvent) {
		if (isLargeScreen) {
			x = event.clientX
			y = event.clientY
		}
	}

	function updateGlow() {
		if (cursorGlow) {
			const gradientSize = '600px'
			if (isLargeScreen) {
				cursorGlow.style.background = `radial-gradient(${gradientSize} at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
			} else {
				cursorGlow.style.background = `radial-gradient(${gradientSize} at 0 0, rgba(29, 78, 216, 0.15), transparent 80%)`
			}
		}
		rafId = requestAnimationFrame(updateGlow)
	}

	function handleResize() {
		isLargeScreen = window.innerWidth > 700
	}

	onMount(() => {
		window.addEventListener('mousemove', updateCursorPosition)
		window.addEventListener('resize', handleResize)
		rafId = requestAnimationFrame(updateGlow)
	})

	onDestroy(() => {
		window.removeEventListener('mousemove', updateCursorPosition)
		window.removeEventListener('resize', handleResize)
		cancelAnimationFrame(rafId)
	})
</script>

<div bind:this={cursorGlow} class="cursor_glow" />

<style>
	.cursor_glow {
		pointer-events: none;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 30;
	}
</style>
