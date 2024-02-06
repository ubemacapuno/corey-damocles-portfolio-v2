<script lang="ts">
</script>

<div class="homepage_container">
	<div class="">
		<h1>Corey Damocles</h1>
		<h2>Software Engineer at Fast DMS</h2>

		<h3 class="subtext">
			Utilizing cutting-edge technologies to craft dynamic and streamlined software solutions.
		</h3>
	</div>
	<div>
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
			and enjoy rooting for the Spartans during college football basketball seasons.
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
	</div>
</div>

<style lang="postcss">
	.homepage_container {
		padding: var(--gap_largest) var(--gap_smallest);
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--gap_large);
	}

	@media (max-width: 1024px) {
		.homepage_container {
			grid-template-columns: 1fr;
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

	h3 {
		color: var(--primary_color);
	}

	.subtext {
		color: var(--subtext_color);
	}

	p {
		font-size: var(--font_medium);
	}

	ul {
		display: grid;
		grid-template-columns: repeat(2, minmax(140px, 200px));
		gap: var(--gap_smallest);
		margin: var(--gap_smallest) 0 0;
		overflow: hidden;
		padding-left: 1.8rem;

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
