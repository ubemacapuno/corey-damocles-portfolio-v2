<script lang="ts">
	import GitHubCard from '$lib/components/GitHubCard.svelte'
	import { formatDistanceToNow } from 'date-fns'

	export let data

	$: projects = data?.projects || []

	const formatDate = (dateString: string) => {
		const date = new Date(dateString)
		return formatDistanceToNow(date, { addSuffix: true })
	}
</script>

<h2>Projects</h2>
<div class="grid-container">
	{#each projects as { name, description, stars, forks, updated, src, languages }}
		<GitHubCard
			{name}
			{description}
			{languages}
			{stars}
			{forks}
			updated={formatDate(updated)}
			{src}
		/>
	{/each}
</div>
<div class="button_container">
	<Button
		outline
		target="_blank"
		rel="noreferrer noopener"
		href="https://github.com/ubemacapuno?tab=repositories">View More on GitHub</Button
	>
</div>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--gap_small);
		margin: var(--gap_small);
	}

	.button_container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 650px) {
		.grid-container {
			grid-template-columns: 1fr;
			justify-items: center;
		}

		.grid-container > * {
			width: 100%;
			max-width: var(--max_width);
		}
	}
</style>
