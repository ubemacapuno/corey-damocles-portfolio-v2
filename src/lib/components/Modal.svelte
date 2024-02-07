<script lang="ts">
	import { fly } from 'svelte/transition'
	import Portal from 'svelte-portal'
	import IconButton from '$elements/IconButton.svelte'
	import { isModalStoreOpen } from '$lib/stores/modal'
	import ModalBg from './ModalBg.svelte'
	import type { IconName } from '$elements/element-types'

	export let isModalOpen = false
	export let isCloseButtonShowing = true
	export let title = ''
	export let fullWidth = false
	export let iconName: IconName | undefined = undefined
	export let bgColor = fullWidth ? 'var(--bg_color)' : 'var(--card_color)'
	export let style = ''
	export let tag: string | undefined = undefined
	export let maxWidth = '42rem'
	export let minHeight = 'none'
	export let onClose = () => {}
	export let overflow = 'auto' // Use overflow "visible" for dropdowns exceeding modal height to avoid vertical scrollbars.

	$: {
		// Reactively set isModalStoreOpen to the current value of isModalOpen
		isModalStoreOpen.set(isModalOpen)
	}

	function closeModal() {
		onClose()
		isModalOpen = false
	}
</script>

{#if isModalOpen}
	<Portal target="body">
		<div
			transition:fly={{ opacity: 0, y: 50 }}
			class="modal_wrapper"
			class:border_bottom={!!title}
			class:fullWidth
			style:max-width={fullWidth ? '100%' : maxWidth}
			style:min-height={fullWidth ? '100%' : minHeight}
			style:background-color={bgColor}
			style:overflow
			{style}
		>
			<div class="modal_content">
				{#if isCloseButtonShowing}
					<IconButton
						class="close_button"
						name="close"
						on:click={closeModal}
						accent="warning"
						aria-label="Close Modal Box"
						data-testid="close-modal-box-button"
						style="position: absolute; top: var(--gap); right: var(--gap);"
					/>
				{/if}
				<slot />
			</div>
		</div>
		<ModalBg onClose={closeModal} />
	</Portal>
{/if}

<style lang="postcss">
	.modal_wrapper {
		inset: calc(var(--nav_height) - var(--gap)) 0 auto;
		margin: 0 auto;
		min-width: 200px;
		position: fixed;
		max-width: 100%;
		width: auto;
		padding: 0 var(--gap);
		z-index: var(--modal_level);
		height: auto;
		max-height: 90vh;
		border-radius: var(--border_radius);
		background-color: var(--card_color);
		display: flex;
		flex-direction: column;
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

		&.border_bottom :global(.modal_header) {
			border-bottom: var(--line);
		}

		:global(.modal_header) {
			padding: var(--gap) var(--gap_small);
		}

		:global(.modal_content) {
			flex: 2;
			padding: var(--gap_small);
			position: relative;
		}

		:global(.form_buttons) {
			border-top: var(--line);
			padding: var(--gap_small) 0 0;
		}

		&.fullWidth {
			inset: 0;
			max-width: 100%;
			width: auto;
			padding: 0 var(--gap);
			background-color: var(--bg_color);
			border-radius: 0;

			:global(.modal-header) {
				position: sticky;
				top: 0;
				background-color: var(--bg_color);
				padding: var(--gap) 0;
				border-bottom: var(--line);
				margin-bottom: var(--gap);
			}
		}
		.close_button {
			position: absolute;
			top: var(--gap);
			right: var(--gap);
		}
	}

	/* Mobile-specific adjustments */
	@media (max-width: 495px) {
		.modal_wrapper.fullWidth,
		.modal_wrapper {
			margin-left: var(--mobile-gap); /* Adds left margin */
			margin-right: var(--mobile-gap); /* Adds right margin */
			width: auto; /* Allows for automatic width adjustment based on margin */
			max-width: calc(100% - 2 * var(--mobile-gap)); /* Adjusts max-width to account for margins */
		}
	}

	/* Ensure --mobile-gap is defined */
	:root {
		--mobile-gap: 16px; /* Adjust this value to control the space on the sides */
	}
</style>
