<script>
	import GitHubCard from '$lib/components/GitHubCard.svelte'
</script>

<h2>Projects</h2>
<GitHubCard
	name="sveltekit-github-api"
	description="A SvelteKit app that uses the GitHub API to display a user's repositories."
	languages={[
		{ language: 'Svelte', color: 'var(--svelte)' },
		{ language: 'TypeScript', color: 'var(--typescript)' },
		{ language: 'CSS', color: 'var(--css)' }
	]}
	stars={0}
	forks={0}
	updated="yesterday"
	src="/projects"
/>
