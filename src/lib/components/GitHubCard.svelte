<script lang="ts">
	import Icon from '$elements/Icon.svelte'
	import GitHubLanguageColor from './GitHubLanguageColor.svelte'
	import ToolTip from './ToolTip.svelte'

	export let name: string
	export let src: string
	export let description: string
	export let languages: { language: string; color: string }[] = []
	export let stars = 0
	export let forks = 0
	export let updated: string
	export let onClick: () => void
</script>

<div class="card">
	<button class="repo_name" on:click={onClick}>
		{name}
		<Icon name="expand_content" style="color: var(--subtext_color);" />
	</button>
	<div class="repo_description">{description}</div>
	<div class="language_container">
		{#each languages as { language, color }, i}
			<div class="repo_language" style="color: {color}">
				<GitHubLanguageColor {color} />
				<span>
					{language}
				</span>
			</div>
		{/each}
	</div>
	<div class="repo_stats">
		<div class="icons">
			<ToolTip content="Star on GitHub" placement="bottom">
				<a href={src} target="_blank" rel="noreferrer noopener">
					<span class="icon_wrapper">
						<Icon name="star" style="color: var(--subtext_color);" />
						{stars === 0 ? '' : stars}
					</span>
				</a>
			</ToolTip>
			<ToolTip content="Fork on GitHub" placement="bottom">
				<a href={src} target="_blank" rel="noreferrer noopener">
					<span class="icon_wrapper">
						<Icon name="fork" />
						{forks === 0 ? '' : forks}
					</span>
				</a>
			</ToolTip>
		</div>
		<span>Updated {updated}</span>
	</div>
</div>

<style lang="postcss">
	.card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: var(--border_radius);
		padding: var(--gap_small);
		margin-bottom: var(--gap_small);
		color: var(--grey_8);
		font-size: var(--font_normal);
		height: 100%;
		background-color: var(--card_color);
		box-shadow: 0 10px 30px -10px var(--navy_a);

		button {
			display: flex;
			align-items: center;
			justify-self: flex-start;
			gap: var(--gap_smallest);
			font-weight: bold;
		}
	}

	.repo_name {
		color: var(--primary_color);
		transition: var(--transition_speed) ease-in-out;
		font-size: var(--font_large);
		margin: 0 0 var(--gap) 0;
		text-align: left;
		display: inline-flex;
		width: fit-content;

		&:hover {
			color: var(--primary_hover_color);
		}
	}

	.repo_description {
		margin-bottom: var(--gap);
	}

	.language_container {
		display: flex;
		align-items: center;
		gap: var(--gap_smallest);
		flex-direction: row;
		flex-wrap: wrap;
		margin-bottom: var(--gap_smallest);
	}

	.repo_language {
		display: inline-flex;
		align-items: center;
		margin-right: var(--gap);
		margin-bottom: var(--gap_small);
		font-size: var(--font_small);

		span {
			color: var(--text_color);
			font-size: var(--huge_font);
		}
	}

	.repo_stats {
		display: flex;
		align-items: center;
		text-align: center;
		gap: var(--gap);
		flex-direction: row;
		justify-content: space-between;
		span {
			margin-right: 8px;
			font-size: var(--font_small);
		}
	}

	.icons {
		display: inline-flex;
		align-items: center;
		gap: var(--gap);
	}

	.icon_wrapper {
		display: flex;
		align-items: center;
		gap: var(--gap_smallest);
		color: var(--subtext_color);
	}
</style>
