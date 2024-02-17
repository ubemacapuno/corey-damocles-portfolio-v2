<script lang="ts">
	import ToolTip from './ToolTip.svelte'

	export let repoLink: string
	export let demoLink: string
	export let description: string
	export let image: string
	export let title: string
	export let hasImageBorder: boolean = false
</script>

<div class="modal_headers">
	<h3>
		<a href={repoLink} target="_blank" rel="noreferrer noopener">
			<ToolTip placement="right-end" content="View Repository">
				{title}
				<Icon name="open_in_new" style="color: var(--subtext_color);" />
			</ToolTip>
		</a>
	</h3>
	{#if demoLink}
		<h5>
			<a href={demoLink} target="_blank" rel="noreferrer noopener">
				<ToolTip placement="right-end" content="View Demo">Demo</ToolTip>
			</a>
		</h5>
	{/if}
</div>
<Grid cols={[1, 2]}>
	<div class="modal_content_wrapper">
		<p>{@html description}</p>
	</div>
	{#if image}
		<div class="image-container">
			<img
				src={image}
				alt={title}
				style={hasImageBorder ? 'border: 1px solid var(--card_line_color);' : ''}
			/>
		</div>
	{/if}
</Grid>

<style lang="postcss">
	.modal_headers {
		display: flex;
		flex-direction: column;
		gap: var(--gap_small);
		margin-bottom: var(--gap_small);
	}

	h3 {
		margin-bottom: 0;
		a {
			color: var(--primary_color);
			display: inline-flex;
			align-items: center;
			gap: var(--gap_smallest);

			&:hover {
				color: var(--primary_hover_color);
				cursor: pointer;
			}
		}
	}

	h5 {
		margin-top: 0;
		font-size: var(--font_large);
		a {
			color: var(--link_color);
			text-decoration: none;
			transition: var(--transition_speed) ease-in-out color;

			&:hover {
				color: var(--primary_hover_color);
				cursor: pointer;
			}
		}
	}

	img {
		max-width: 100%;
		max-height: 400px;
	}

	.image-container {
		display: flex;
		justify-content: center;
		align-items: self-start;
	}

	.modal_content_wrapper p {
		line-height: 1.7;
	}
</style>
