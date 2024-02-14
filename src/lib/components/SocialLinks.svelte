<script lang="ts">
	import ToolTip from './ToolTip.svelte'
</script>

<div class="link_container">
	<ToolTip content=" GitHub" placement="bottom">
		<a
			class="social_link"
			rel="noreferrer noopener"
			href="https://github.com/ubemacapuno/"
			target="_blank"
			aria-label="GitHub Repository"
		>
			<svg
				class="social_icon"
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
	<ToolTip content=" LinkedIn" placement="bottom">
		<a
			class="social_link"
			rel="noreferrer noopener"
			href="https://www.linkedin.com/in/corey-damocles"
			target="_blank"
			aria-label="LinkedIn Profile"
		>
			<svg
				class="social_icon"
				fill="var(--grey_7)"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				aria-hidden="true"
				><path
					d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
				></path></svg
			>
		</a>
	</ToolTip>
	<ToolTip content=" Twitter" placement="bottom">
		<a
			class="twitter_link"
			rel="noreferrer noopener"
			href="https://twitter.com/coreydamo"
			target="_blank"
			aria-label="Twitter Profile"
		>
			<svg
				class="social_icon"
				fill="var(--grey_7)"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 1227"
				aria-hidden="true"
				><path
					d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
				></path></svg
			>
		</a>
	</ToolTip>
	<ToolTip content=" Codepen" placement="bottom">
		<a
			class="social_link"
			rel="noreferrer noopener"
			href="https://codepen.io/corey-damocles"
			target="_blank"
			aria-label="Codepen Profile"
		>
			<svg
				class="social_icon"
				fill="var(--bg_color)"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 64 64"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
				><path
					d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2"
					stroke-width="5"
				></path></svg
			>
		</a>
	</ToolTip>
</div>

<style lang="postcss">
	.link_container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		padding: var(--gap) 0;
		max-width: 180px;
	}

	a {
		color: var(--subtext_color);
	}

	.social_link {
		display: inline-block;
		width: 24px;
		height: 24px;
	}

	.twitter_link {
		display: inline-block;
		width: 20px;
		height: 20px;
	}

	.social_icon {
		width: 100%;
		height: 100%;

		&:hover {
			transition: var(--transition_speed) ease-in-out;
			fill: var(--primary_hover_color);
		}
	}
</style>
