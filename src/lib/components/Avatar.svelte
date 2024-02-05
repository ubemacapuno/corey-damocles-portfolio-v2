<script lang="ts">
	import type { FontSize } from '$elements/element-types'

	export let src = ''
	export let size: FontSize = 'largest'
	export let alt = ''
</script>

{#if src}
	<img class="avatar" style:--avatar_size="calc(var(--font_{size}) * 2)" {src} alt="User avatar" />
{/if}

<style>
	.avatar {
		border-radius: var(--circle_radius);
		overflow: hidden;
		user-select: none;
		height: var(--avatar_size);
		width: var(--avatar_size);
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
