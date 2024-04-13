<script lang="ts">
	import { resumeDetails } from '$constants/resumeDetails'
	import Tag from './Tag.svelte'
	/**
	 * This component displays the "Experience" section contents by iterating through the `resumeDetails` array.
	 * For each experience, a card is generated showing:
	 * - "years" on the left
	 * - "company_name", "years", "role", "summary", and "tags" on the right.
	 * Tags are displayed using the Tag component, iterating through each tag in the array.
	 */

	function openInNewTab(url: string) {
		const newTab = window.open(url, '_blank')
		if (newTab) {
			newTab.focus()
		} else {
			console.error('Failed to open the URL in a new tab.')
		}
	}
</script>

<div class="cards_container">
	{#each resumeDetails as { company_name, start, end, role, summary, tags, url }}
		<div
			class="card"
			role="link"
			aria-label="View more about {role} at {company_name}"
			tabindex="0"
			on:click={() => openInNewTab(url)}
			on:keypress={(event) => {
				if (event.key === 'Enter') openInNewTab(url)
			}}
		>
			<div class="left">
				<h5>
					{start} -<br />
					{end}
				</h5>
			</div>
			<div class="right">
				<h3>
					<span class="role">{role}</span>
				</h3>
				<span class="company_name">{company_name}</span>
				<p class="summary">{summary}</p>
				<div class="tags">
					{#each tags as tag}
						<Tag accent="tertiary">{tag}</Tag>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	h3 {
		color: var(--accent_color);
		margin-bottom: 0;
	}

	.bullet {
		color: var(--subtext_color);
	}

	.company_name {
		display: flex;
		margin-bottom: var(--gap_small);
		color: var(--primary_color);
	}

	.cards_container {
		padding: var(--gap_largest) var(--gap_largest) var(--gap_largest) 0;

		.card {
			display: flex;
			gap: 0;
			justify-content: space-between;
			align-items: flex-start;
			margin-bottom: var(--gap_largest);
			transition:
				background-color 0.3s ease,
				border-radius 0.3s ease;
			border-radius: var(--border_radius);
			background-color: rgba(255, 255, 255, 0);
			padding: var(--gap);

			.summary {
				font-size: var(--font_small);
			}
		}

		.card:hover {
			background-color: var(--teal_backdrop);
			border-radius: 8px;
			cursor: pointer;
		}
	}

	.left {
		color: var(--secondary_color);
		flex: 0 0 25%;
	}

	.right {
		flex: 0 0 75%;
	}

	.tags {
		margin-top: var(--gap);
		display: flex;
		flex-wrap: wrap;
		gap: var(--gap_small);
	}

	@media (max-width: 1024px) {
		.cards_container {
			padding: 0 var(--gap_largest) var(--gap_largest) 0;
		}
	}
</style>
