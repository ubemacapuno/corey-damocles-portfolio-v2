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
</script>

<div class="cards_container">
	{#each resumeDetails as { company_name, start, end, role, summary, tags }}
		<div class="card">
			<div class="left">
				<h5>
					{start} -<br />
					{end}
				</h5>
			</div>
			<div class="right">
				<h3>
					<span class="role">{role}</span> <span class="bullet">-</span>
					<span class="company-name">{company_name}</span>
				</h3>
				<p>{summary}</p>
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
	}

	.bullet {
		color: var(--subtext_color);
	}

	.company-name {
		color: var(--primary_color);
	}

	.cards_container {
		padding: var(--gap_largest) var(--gap_largest) var(--gap_largest) 0;

		.card {
			display: flex;
			gap: var(--gap_small);
			justify-content: space-between;
			align-items: flex-start;
			margin-bottom: var(--gap_largest);
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
