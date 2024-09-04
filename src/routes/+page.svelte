<script lang="ts">
	import Footer from '$lib/components/Footer.svelte'
	import ProjectsLink from '$lib/components/ProjectsLink.svelte'
	import ResumeDetails from '$lib/components/ResumeDetails.svelte'
	import ScrollButton from '$lib/components/ScrollButton.svelte'
	import Seo from '$lib/components/Seo.svelte'
	import SocialLinks from '$lib/components/SocialLinks.svelte'
	import { onDestroy } from 'svelte'

	let isAboutSectionVisible = false
	let isExperienceSectionVisible = false

	function calculateThreshold() {
		// Dynamically calculate threshold based on screen height
		return window.innerHeight < 1080 ? 0.2 : 0.4
	}

	onMount(() => {
		const aboutSection = document.getElementById('about')
		const experienceSection = document.getElementById('experience')

		const observerOptions = () => ({
			threshold: calculateThreshold() // get a dynamic threshold
		})

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const { target, isIntersecting } = entry
				if (target.id === 'about') {
					isAboutSectionVisible = isIntersecting
				} else if (target.id === 'experience') {
					isExperienceSectionVisible = isIntersecting
				}
			})
		}, observerOptions())

		if (aboutSection && experienceSection) {
			observer.observe(aboutSection)
			observer.observe(experienceSection)
		}

		// Recalculate threshold on window resize
		const handleResize = () => {
			observer.disconnect() // Disconnect the old observer with the old threshold
			if (aboutSection) {
				observer.observe(aboutSection)
			}
			if (experienceSection) {
				observer.observe(experienceSection)
			}
		}

		window.addEventListener('resize', handleResize)

		onDestroy(() => {
			observer.disconnect()
			window.removeEventListener('resize', handleResize)
		})
	})
</script>

<Seo />

<div class="homepage_container">
	<div class="header_content">
		<div>
			<h1>Corey Damocles</h1>
			<h2>Software Engineer</h2>

			<h3 class="tagline">
				Utilizing cutting-edge technologies to craft dynamic and streamlined software solutions.
			</h3>
		</div>
		<SocialLinks />

		<div class="nav_wrapper">
			<div class="scroll_button_wrapper">
				<ScrollButton targetId="about" isActive={isAboutSectionVisible} />
				<ScrollButton targetId="experience" isActive={isExperienceSectionVisible} />
			</div>
			<div class="projects_link_wrapper">
				<ProjectsLink />
			</div>
		</div>
		<div class="projects_link_mobile">
			<ProjectsLink />
		</div>
	</div>
	<div class="main_content">
		<div id="about">
			<h5 class="mobile_header uppercase">About</h5>
			<p>
				I am a full-stack developer in Phoenix, AZ. I started my coding journey during the COVID-19
				pandemic in January 2022, learning the basics of software development, while also working in
				the medical device sector as a Quality Specialist.
			</p>
			<p>
				My career took a leap in April 2022 when I joined the <a
					href="https://www.purefunc.io/"
					target="_blank"
					rel="noreferrer noopener"
				>
					Pure Func</a
				>
				web development agency as a consulting developer, and further progressed as I transitioned to
				a full-time software engineer role at
				<a href="https://fastdms.com/" target="_blank" rel="noreferrer noopener">Fast DMS</a> in December
				2022, focusing on crafting custom ERP software solutions in the contract manufacturing and procurement
				industry.
			</p>
			<p>
				Outside of work, I enjoy rock climbing, tinkering with my Raspberry Pi, hiking throughout
				the Phoenix valleys, and networking with the local developer community at <a
					href="https://www.meetup.com/phoenix-javascript/"
					target="_blank"
					rel="noreferrer noopener">Phoenix JavaScript</a
				>
				and
				<a href="https://www.meetup.com/phoenix-reactjs/" target="_blank" rel="noreferrer noopener"
					>Phoenix ReactJS</a
				> events.
			</p>
			<p>
				I have a Bachelor's Degree in Biomedical Laboratory Science from Michigan State University. <span
					style="color: var(--green)">Go Green!</span
				>
			</p>
			<p>Let's build something together!</p>

			<h3>A few tools I’ve built with recently:</h3>
			<ul>
				<li>JavaScript (ES6+)</li>
				<li>TypeScript</li>
				<li>Svelte</li>
				<li>Tailwind CSS</li>
				<li>React</li>
				<li>Python</li>
				<li>MongoDB</li>
				<li>Node.js</li>
			</ul>
		</div>
		<div class="experience_content" id="experience">
			<h5 class="mobile_header uppercase">Experience</h5>
			<ResumeDetails />
		</div>
		<Footer />
	</div>
</div>

<style lang="postcss">
	.homepage_container {
		padding: var(--gap) var(--gap_smallest) 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.header_content {
		display: flex;
		flex-direction: column;
		gap: var(--gap);
		position: -webkit-sticky; /* Safari */
		position: sticky;
		top: calc(var(--nav_height) + var(--gap) + var(--gap_small));
		z-index: var(--header_level);
		padding: var(--gap_small);
		max-height: 650px;

		.nav_wrapper {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			gap: var(--gap);
			margin-top: var(--gap);

			.scroll_button_wrapper {
				display: flex;
				flex-direction: column;
				gap: var(--gap_large);
				height: 80px;
			}
		}

		.projects_link_wrapper {
			display: block;
			margin-left: var(--gap_small);
		}
	}

	.main_content {
		line-height: 1.6;

		.mobile_header {
			display: none;
			font-weight: bold;
		}

		.experience_content {
			margin-top: calc(var(--gap_largest) * 2);
		}

		p {
			margin-bottom: var(--gap);
		}
	}

	.projects_link_mobile {
		display: none;
	}

	.main_content,
	.header_content {
		padding: var(--gap_small);
	}

	.tagline {
		color: var(--accent_color);
		max-width: 20rem;
	}

	@media (max-width: 1024px) {
		.homepage_container {
			display: block;

			.header_content {
				position: relative;
				top: 0;

				.nav_wrapper {
					display: none;
				}

				.projects_link_wrapper {
					display: none;
				}
			}
		}

		.main_content {
			margin-top: var(--gap_large);
			.mobile_header {
				display: block;
			}
		}
		.projects_link_mobile {
			display: block;
		}
	}

	h1 {
		color: var(--primary_color);
		font-size: var(--font_huge);
		margin-top: 0;
	}

	h2 {
		font-size: var(--font_xlarge);
		margin: 0;
	}

	h3 {
		color: var(--accent_color);
		font-size: var(--font_large);
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

		li {
			font-size: var(--font_small);
		}

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
