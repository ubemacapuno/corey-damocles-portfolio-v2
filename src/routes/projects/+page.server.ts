import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const username = 'ubemacapuno'
	const repoNames = [
		'chrono-core',
		'svelte-step-bro',
		'rep-log',
		'foodie-blog-sveltekit',
		'capa-tracker-sveltekit',
		'tortoise-tea-house-site'
	]

	// mapping of repo names to their languages
	const repoLanguages = {
		'svelte-step-bro': [
			{ language: 'TypeScript', color: 'var(--typescript)' },
			{ language: 'Svelte', color: 'var(--svelte)' },
			{ language: 'PostCSS', color: 'var(--postcss)' }
		],
		'chrono-core': [
			{ language: 'TypeScript', color: 'var(--typescript)' },
			{ language: 'Python', color: 'var(--python)' },
			{ language: 'React', color: 'var(--react)' },
			{ language: 'CSS', color: 'var(--css)' }
		],
		'foodie-blog-sveltekit': [
			{ language: 'TypeScript', color: 'var(--typescript)' },
			{ language: 'Svelte', color: 'var(--svelte)' },
			{ language: 'Tailwind CSS', color: 'var(--tailwindcss)' }
		],
		'rep-log': [
			{ language: 'TypeScript', color: 'var(--typescript)' },
			{ language: 'React', color: 'var(--react)' },
			{ language: 'Tailwind CSS', color: 'var(--tailwindcss)' }
		],
		'tortoise-tea-house-site': [
			{ language: 'Svelte', color: 'var(--svelte)' },
			{ language: 'CSS', color: 'var(--css)' }
		],
		'capa-tracker-sveltekit': [
			{ language: 'TypeScript', color: 'var(--typescript)' },
			{ language: 'Svelte', color: 'var(--svelte)' },
			{ language: 'Tailwind CSS', color: 'var(--tailwindcss)' }
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
		return await response.json()
	}

	return {
		projects: await Promise.all(repoNames.map(fetchRepoDetails)).then((repos) =>
			repos.map((repo) => ({
				name: repo.name,
				description: repo.description,
				languages: repoLanguages[repo.name as keyof typeof repoLanguages],
				stars: repo.stargazers_count,
				forks: repo.forks_count,
				updated: new Date(repo.pushed_at).toLocaleDateString(),
				src: repo.html_url
			}))
		)
	}
}
