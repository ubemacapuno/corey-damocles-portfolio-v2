import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const username = 'ubemacapuno'
	const repoNames = [
		'Chrono-Core',
		'Svelte-STEP-Bro',
		'Rep-Log',
		'Foodie-Blog-Sveltekit',
		'Capa-Tracker-Sveltekit',
		'Tortoise-Tea-House-Site'
	]

	// mapping of repo names to their languages
	const repoLanguages = {
		'Svelte-STEP-Bro': [
			{ language: 'Svelte', color: 'var(--svelte)' },
			{ language: 'TypeScript', color: 'var(--typescript)' },
			{ language: 'CSS', color: 'var(--css)' }
		],
		'Chrono-Core': [
			{ language: 'React', color: 'var(--react)' },
			{ language: 'TypeScript', color: 'var(--typescript)' },
			{ language: 'Python', color: 'var(--python)' },
			{ language: 'CSS', color: 'var(--css)' }
		],
		'Foodie-Blog-Sveltekit': [
			{ language: 'Svelte', color: 'var(--svelte)' },
			{ language: 'TypeScript', color: 'var(--typescript)' },
			{ language: 'CSS', color: 'var(--css)' }
		],
		'Rep-Log': [
			{ language: 'React', color: 'var(--react)' },
			{ language: 'TypeScript', color: 'var(--typescript)' },
			{ language: 'CSS', color: 'var(--css)' }
		],
		'Tortoise-Tea-House-Site': [
			{ language: 'Svelte', color: 'var(--svelte)' },
			{ language: 'CSS', color: 'var(--css)' }
		],
		'Capa-Tracker-Sveltekit': [
			{ language: 'Svelte', color: 'var(--svelte)' },
			{ language: 'TypeScript', color: 'var(--typescript)' },
			{ language: 'CSS', color: 'var(--css)' }
		]
	}

	const fetchRepoDetails = async (repoName: string) => {
		const apiUrl = `https://api.github.com/repos/${username}/${repoName}`
		const headers = {
			Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
		}
		const response = await fetch(apiUrl, { headers })
		if (!response.ok) {
			throw new Error(`Failed to fetch repo ${repoName}: ${response.statusText}`)
		}
		return response.json()
	}

	const repoDetailsPromises = repoNames.map(fetchRepoDetails)
	const repos = await Promise.all(repoDetailsPromises)

	const projects = repos.map((repo) => ({
		name: repo.name,
		description: repo.description,
		languages: repoLanguages[repo.name as keyof typeof repoLanguages],
		stars: repo.stargazers_count,
		forks: repo.forks_count,
		updated: new Date(repo.pushed_at).toLocaleDateString(),
		src: repo.html_url
	}))
	return {
		projects
	}
}
