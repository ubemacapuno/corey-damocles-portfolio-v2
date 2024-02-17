<script lang="ts">
	import { page } from '$app/stores'
	import Button from '$elements/Button.svelte'
</script>

<div class="wrapper">
	<h1>Oops! Something Went Wrong.</h1>
	<h2>
		{$page.status.toString() || 'Error'}: {$page.error?.message || 'An unexpected error occurred.'}
	</h2>
	<Button href="/" outline>Go Home</Button>
</div>

<style>
	.wrapper {
		max-width: var(--max_width);
		border-radius: var(--border_radius);
		padding: var(--gap);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--gap_small);
		margin: 0 auto;
		text-align: center;
	}

	h1 {
		color: var(--caution_color);
	}

	h2 {
		color: var(--warning_color);
	}

	p {
		color: var(--text_color);
		max-width: 600px;
	}
</style>
