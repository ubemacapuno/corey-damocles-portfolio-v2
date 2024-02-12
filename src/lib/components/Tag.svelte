<script lang="ts">
	import type { Accent, Status, Theme, FontSize } from '$elements/element-types'

	// Choose to pass either an 'accent' or a 'color' prop
	export let accent: Extract<Accent, Status | Theme> | 'disabled' = 'primary'
	export let color: string | null = 'var(--primary_color)'
	export let size: FontSize = 'small'
</script>

<span
	class={`tag ${size}_font ${$$props.class ?? ''}`}
	style:--tag_bg={color || `var(--${accent}_color)`}
	style:--tag_color="var(--tag_text_color)"
>
	<slot />
</span>

<style lang="postcss">
	.tag {
		display: inline-flex;
		align-items: center;
		padding: var(--gap_xsmall) var(--gap_smallest);
		border-radius: var(--circle_radius);
		color: var(--tag_color);
		background-color: var(--tag_bg);
		gap: var(--gap_xsmall);
		line-height: 1;
	}

	:global([data-theme='light']) .tag {
		color: var(--white);
	}
</style>
