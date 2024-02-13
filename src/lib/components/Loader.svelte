<div class="loader" />

<style>
	.loader {
		width: 60px;
		aspect-ratio: 1;
		display: flex;
	}
	.loader::before,
	.loader::after {
		content: '';
		flex: 1;
		animation: l14 1.5s -0.25s infinite linear alternate both;
	}
	.loader::after {
		--s: -1, -1;
		animation-delay: 0.5s;
	}
	@keyframes l14 {
		0%,
		30% {
			transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateY(0deg);
			clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0 75%, 0 25%);
			background: var(--primary_color);
		}
		37.5% {
			transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(0deg);
			clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0 75%, 0 25%);
			background: var(--primary_color);
		}
		50% {
			transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(-90deg);
			clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0 75%, 0 25%);
			background: var(--primary_color);
			border-radius: 0;
		}
		50.01% {
			transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(-90.1deg);
			clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 25%);
			background: var(--secondary_color);
			border-radius: 100px 0 0 100px;
		}
		62.5% {
			transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(-180deg);
			clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 25%);
			background: var(--secondary_color);
			border-radius: 100px 0 0 100px;
		}
		70%,
		100% {
			transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateX(-180deg);
			clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 25%);
			background: var(--secondary_color);
			border-radius: 100px 0 0 100px;
		}
	}
</style>
