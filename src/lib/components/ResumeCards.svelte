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
	{#each resumeDetails as { company_name, years, role, summary, tags }}
		<div class="card">
			<div class="left">
				<h5>{years}</h5>
			</div>
			<div class="right">
				<h3>{company_name}</h3>
				<h5>{role}</h5>
				<p>{summary}</p>
				<div class="tags">
					{#each tags as tag}
						<Tag>{tag}</Tag>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	.card_container {
		display: flex;
		gap: var(--gap_small);
		justify-content: space-between;
		align-items: center;
	}

	.card {
		display: flex;
		gap: var(--gap_small);
		justify-content: space-between;
		align-items: center;
	}

	.left,
	.right {
		flex: 1;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--gap_xsmall); /* Adjust gap between tags as needed */
	}
</style>
