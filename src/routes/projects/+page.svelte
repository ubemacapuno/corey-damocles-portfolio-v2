<script lang="ts">
	import { projectDetails } from '$constants/projectDetails.js'
	import GitHubCard from '$lib/components/GitHubCard.svelte'
	import GitHubRepoDetails from '$lib/components/GitHubRepoDetails.svelte'
	import Modal from '$lib/components/Modal.svelte'
	import { formatDistanceToNow } from 'date-fns'

	export let data

	$: projects = data?.projects || []

	let activeModalType:
		| null
		| 'projectOne'
		| 'projectTwo'
		| 'projectThree'
		| 'projectFour'
		| 'projectFive'
		| 'projectSix' = null

	const formatDate = (dateString: string) => {
		const date = new Date(dateString)
		return formatDistanceToNow(date, { addSuffix: true })
	}

	// Function to handle card click
	function handleCardClick(projectName: string) {
		activeModalType = projectName // Use the project name directly as the key
	}

	$: activeProjectDetails = projectDetails[activeModalType]
	$: console.log('activeModalType', activeModalType)
</script>

<div class="page_container">
	<h2>Projects</h2>
	<div class="grid_container">
		{#each projects as project}
			<GitHubCard
				{...project}
				updated={formatDate(project.updated)}
				onClick={() => handleCardClick(project.name)}
			/>
		{/each}
	</div>
	<div class="button_container">
		<Button
			outline
			target="_blank"
			rel="noreferrer noopener"
			href="https://github.com/ubemacapuno?tab=repositories">View More Projects on GitHub</Button
		>
	</div>
</div>

<!-- TODO: Separate this out and the logic for all the other Repo details into another component -->
<Modal isModalOpen={!!activeModalType} maxWidth="28rem" onClose={() => (activeModalType = null)}>
	{#if activeProjectDetails}
		<GitHubRepoDetails {...activeProjectDetails} />
	{/if}
</Modal>

<style>
	.page_container {
		padding: 0 var(--gap);
	}
	.grid_container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--gap_small);
		padding: var(--gap_small);
	}

	.button_container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: var(--gap) 0;
	}

	@media (max-width: 650px) {
		.grid_container {
			grid-template-columns: 1fr;
			justify-items: center;
		}

		.grid_container > * {
			width: 100%;
			max-width: var(--max_width);
		}
	}
</style>
