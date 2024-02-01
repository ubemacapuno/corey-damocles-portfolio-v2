<script lang="ts">
	import GitHubLanguageColor from './GitHubLanguageColor.svelte'

	export let name: string
	export let src: string
	export let description: string
	export let languages: { language: string; color: string }[] = []
	export let stars: number = 0
	export let forks: number = 0
	export let updated: string
</script>

<div class="card">
	<h3 class="repo_name">
		<a href={src} target="_blank" rel="noreferrer noopener">
			{name}
		</a>
	</h3>
	<div class="repo-description">{description}</div>
	<div class="language_container">
		{#each languages as { language, color }, i}
			<div class="repo-language" style="color: {color}">
				<GitHubLanguageColor {color} />
				<span>
					{language}
				</span>
			</div>
		{/each}
	</div>
	<div class="repo-stats">
		<div class="icons">
			<span><Icon name="star" /> {stars === 0 ? '' : stars}</span>
			<span><Icon name="fork" /> {forks === 0 ? '' : forks}</span>
		</div>
		<span>Updated {updated}</span>
	</div>
</div>

<style lang="postcss">
	.card {
		border: 1px solid var(--card_line_color);
		border-radius: var(--border_radius);
		padding: var(--gap_small);
		margin-bottom: var(--gap_small);
		max-width: var(--card_width);
		color: var(--grey_8);
		font-size: var(--font_normal);

		a {
			color: var(--teal);
			transition: color 0.2s ease;
			font-size: var(--font_large);

			&:hover {
				color: var(--primary_hover_color);
			}
		}
	}

	.repo_name {
		color: var(--primary_color);
		margin: 0 0 8px 0;
	}

	.repo-description {
		margin-bottom: var(--gap);
	}

	.language_container {
		display: flex;
		align-items: center;
		gap: var(--gap);
		flex-direction: row;
		margin-bottom: var(--gap_smallest);
	}

	.repo-language {
		margin-bottom: 8px;
		font-size: var(--font_small);

		span {
			color: var(--text_color);
			font-size: var(--huge_font);
		}
	}

	.repo-stats {
		display: flex;
		align-items: center;
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
		gap: var(--gap_smallest);
	}
</style>
