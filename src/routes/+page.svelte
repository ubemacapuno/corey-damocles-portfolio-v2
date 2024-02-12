<script lang="ts">
	import ResumeCards from '$lib/components/ResumeCards.svelte'
	import SocialLinks from '$lib/components/SocialLinks.svelte'
	import Tag from '$lib/components/Tag.svelte'
</script>

<div class="homepage_container">
	<div class="header_content">
		<h1>Corey Damocles</h1>
		<h2>Software Engineer at Fast DMS</h2>

		<h3 class="tagline">
			Utilizing cutting-edge technologies to craft dynamic and streamlined software solutions.
		</h3>
		<SocialLinks />
	</div>
	<div class="about_content">
		<h5 class="mobile_header uppercase">About</h5>
		<p>
			During the COVID-19 pandemic in January 2022, I became interested in leveling up my skills by
			learning coding and web development. I partnered with fellow developers in the 100Devs
			community, engaging in hands-on learning through developing websites and applications for
			agency projects.
		</p>
		<p>
			My career took a leap in April 2022 when I joined the <a
				href="https://www.purefunc.io/"
				target="_blank"
				rel="noreferrer noopener"
			>
				Pure Func</a
			>
			web development agency as a consulting developer, and further progressed as I transitioned to a
			full-time software engineer role at
			<a href="https://fastdms.com/" target="_blank" rel="noreferrer noopener">Fast DMS</a> in December
			2022, focusing on crafting accessible user experiences in the contract manufacturing and procurement
			industry.
		</p>
		<p>
			Outside of work, I enjoy rock climbing, tinkering with my Raspberry Pi, and hiking throughout
			the Phoenix valleys.
		</p>
		<p>
			I have a Bachelor's Degree in Biomedical Laboratory Science from Michigan State University,
			and enjoy rooting for the Spartans during college football and basketball seasons.
		</p>
		<p>Let's build something together!</p>

		<h3>Here are a few technologies I’ve been building with recently:</h3>
		<ul>
			<li>TypeScript</li>
			<li>JavaScript (ES6+)</li>
			<li>Svelte</li>
			<li>SvelteKit</li>
			<li>React</li>
			<li>Python</li>
			<li>MongoDB</li>
			<li>Node.js</li>
		</ul>
		<div>
			<h5 class="mobile_header uppercase">Experience</h5>
			<ResumeCards />
		</div>
	</div>
</div>

<style lang="postcss">
	.homepage_container {
		padding: var(--gap) var(--gap_smallest);
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--gap);
	}

	.about_content {
		line-height: 1.6;

		.mobile_header {
			display: none;
			font-weight: bold;
		}

		p {
			margin-bottom: var(--gap);
		}
	}

	.about_content,
	.header_content {
		padding: var(--gap_small);
	}

	.tagline {
		color: var(--accent_color);
		max-width: 20rem;
	}

	@media (max-width: 800px) {
		.homepage_container {
			display: block;
		}

		.about_content {
			margin-top: var(--gap_large);
			.mobile_header {
				display: block;
			}
		}
	}

	h1 {
		color: var(--primary_color);
		font-size: var(--font_huge);
		margin-top: 0;
	}

	h2 {
		color: var(--secondary_color);
		font-size: var(--font_xxlarge);
		margin: 0;
	}

	h5 {
		color: var(--primary_color);
	}

	a {
		color: var(--link_color);
		text-decoration: none;
		transition: var(--transition_speed) ease-in-out color;

		&:hover {
			color: var(--primary_hover_color);
			cursor: pointer;
		}
	}

	p {
		font-size: var(--font_medium);
	}

	ul {
		display: grid;
		grid-template-columns: repeat(2, minmax(140px, 200px));
		gap: var(--gap_smallest);
		margin: var(--gap_smallest) var(--gap) var(--gap);
		overflow: hidden;
		padding-left: var(--gap);

		li::before {
			content: '>';
			color: var(--secondary_color);
			font-weight: bold;
			display: inline-block;
			width: 1rem;
			margin-left: -1rem;
		}
	}
</style>
