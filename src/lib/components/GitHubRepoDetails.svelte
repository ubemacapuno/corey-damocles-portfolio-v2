<script lang="ts">
	import Icon from '$elements/Icon.svelte'
	import { de } from 'date-fns/locale'
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
		{title}
	</h3>
</div>
<div class="flex_container">
	<ToolTip placement="right-end" content="Repository">
		<a href={repoLink} target="_blank" rel="noreferrer noopener">
			<svg
				class="github_icon"
				fill="var(--grey_7)"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.602-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.891 1.529 2.341 1.089 2.912.833.091-.647.349-1.086.635-1.335-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.276.098-2.656 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 7.029c.85 0 1.7.114 2.5.334 1.909-1.294 2.747-1.025 2.747-1.025.547 1.38.202 2.403.099 2.656.64.698 1.027 1.59 1.027 2.682 0 3.841-2.337 4.687-4.564 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.577.688.479C19.138 20.164 22 16.416 22 12c0-5.523-4.477-10-10-10z"
				/>
			</svg>
		</a>
	</ToolTip>
	{#if demoLink}
		<h5>
			<ToolTip placement="right-end" content="Demo">
				<a href={demoLink} target="_blank" rel="noreferrer noopener">
					<Icon name="play_arrow" size="largest" />
				</a>
			</ToolTip>
		</h5>
	{/if}
</div>
<Grid cols={[1, 2]}>
	<div class="modal_content_wrapper">
		<p>{@html description}</p>
	</div>
	{#if image && demoLink}
		<div class="image-container">
			<a href={demoLink} target="_blank" rel="noreferrer noopener">
				<img
					src={image}
					alt={title}
					style={hasImageBorder ? 'border: 1px solid var(--card_line_color);' : ''}
				/>
			</a>
		</div>
	{:else if image}
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
		color: var(--primary_color);
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
	.flex_container {
		display: inline-flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--gap_smallest);
		margin: var(--gap_smallest) 0;
	}

	.github_icon {
		width: var(--font_largest);
		height: var(--font_largest);

		&:hover {
			transition: var(--transition_speed) ease-in-out;
			fill: var(--primary_hover_color);
		}
	}
</style>
