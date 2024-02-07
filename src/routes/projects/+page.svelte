<script lang="ts">
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
</script>

<div class="page_container">
	<h2>Projects</h2>
	<div class="grid_container">
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
			href="https://github.com/ubemacapuno?tab=repositories">View More Projects on GitHub</Button
		>
	</div>
	<div class="button_container">
		<Button on:click={() => (activeModalType = 'projectOne')} outline>Open Modal?!</Button>
	</div>
</div>

<Modal isModalOpen={!!activeModalType} maxWidth="28rem" onClose={() => (activeModalType = null)}>
	<GitHubRepoDetails
		repoLink="https://github.com/ubemacapuno/foodie-blog-sveltekit"
		demoLink="https://foodie-blog-sveltekit.vercel.app/"
		description="<p>This SvelteKit application is a unique platform for saving and rating recipes. It combines a MongoDB backend with SvelteKit form actions for recipe management, and features an AI-powered chatbot assistant using OpenAI's API. Authjs is integrated for secure and efficient user authentication.</p>

	<p>In a world where recipe websites are more cluttered than a spice drawer, my quest for a simple chicken noodle soup recipe led me to create this web app. Because let's face it, we're here to cook, not to scroll through popup ads and a needless life-story just for SEO and a word-count quota (that does nothing but cause pain for the user).</p>"
		image="/images/foodie-blog.jpg"
		title="Foodie Blog"
	/>
</Modal>

<style>
	.page_container {
		padding: 0 var(--gap);
	}
	.grid_container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--gap_small);
		margin: var(--gap_small);
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
