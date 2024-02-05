<script lang="ts">
	import { page } from '$app/stores'
	import MenuItem from '$lib/components/MenuItem.svelte'
	import ToolTip from '$lib/components/ToolTip.svelte'
	import type { IconName } from '$elements/element-types'
	import Avatar from '$lib/components/Avatar.svelte'

	// iterable menu items
	const items: { href: string; iconName: IconName; description: string; toolTip: string }[] = [
		{ href: '/', iconName: 'home' as IconName, description: 'Home', toolTip: 'View Homepage' },
		{
			href: '/projects',
			iconName: 'code' as IconName,
			description: 'Projects',
			toolTip: 'View Projects'
		}
	]
</script>

<nav>
	<div class="nav_wrapper" data-testid="top-nav">
		<Avatar src="/images/avatar.jpeg" size="xlarge" alt="Corey Damocles" />
		<div class="link_container">
			{#each items as item}
				<ToolTip content={item.toolTip}>
					<MenuItem
						href={item.href}
						iconName={item.iconName}
						active={(item.href === '/' && $page.url.pathname === '/') ||
							(item.href !== '/' && $page.url.pathname.startsWith(item.href))}
					>
						<h3>
							{item.description}
						</h3>
					</MenuItem>
				</ToolTip>
			{/each}
			<ToolTip content="Visit GitHub">
				<a
					class="github_link"
					rel="noreferrer noopener"
					href="https://github.com/ubemacapuno/"
					target="_blank"
					aria-label="GitHub Repository"
				>
					<svg
						class="github_icon"
						fill="var(--grey_7)"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.602-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.891 1.529 2.341 1.089 2.912.833.091-.647.349-1.086.635-1.335-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.276.098-2.656 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 7.029c.85 0 1.7.114 2.5.334 1.909-1.294 2.747-1.025 2.747-1.025.547 1.38.202 2.403.099 2.656.64.698 1.027 1.59 1.027 2.682 0 3.841-2.337 4.687-4.564 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.577.688.479C19.138 20.164 22 16.416 22 12c0-5.523-4.477-10-10-10z"
						/>
					</svg>
				</a>
			</ToolTip>
		</div>
	</div>
</nav>

<style>
	nav {
		border-bottom: 0.5px solid var(--secondary_line_color);
		background-color: var(--sheet_color);
	}
	h1 {
		color: var(--primary_color);
		font-size: var(--font_huge);
	}

	h3 {
		font-size: var(--font_large);
		margin: 0;
	}
	.nav_wrapper {
		height: var(--nav_height);
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--gap_smallest);
		padding: var(--gap_largest) var(--gap_smallest);
		grid-area: topnav;
		max-width: 900px;
		margin: 0 auto;
	}
	.github_link {
		display: inline-block;
		width: 24px;
		height: 24px;
	}
	.github_icon {
		width: 100%;
		height: 100%;

		&:hover {
			transition: var(--transition_speed) ease-in-out;
			fill: var(--primary_hover_color);
		}
	}

	.link_container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		gap: var(--gap);
		padding: 0 var(--gap);
	}

	@media (max-width: 700px) {
		h1 {
			font-size: var(--font_xxlarge);
		}

		h3 {
			font-size: var(--font-normal);
		}
	}

	@media (max-width: 460px) {
		h1 {
			font-size: var(--font_large);
		}

		h3 {
			display: none;
		}
	}
</style>
