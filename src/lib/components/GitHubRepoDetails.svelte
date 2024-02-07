<script lang="ts">
	export let repoLink: string
	export let demoLink: string
	export let description: string
	export let image: string
	export let title: string
</script>

<h3><a href={repoLink} target="_blank" rel="noreferrer noopener">{title}</a></h3>
<h5><a href={demoLink} target="_blank" rel="noreferrer noopener">Demo</a></h5>
<p>{@html description}</p>
<img src={image} alt={title} />

<style lang="postcss">
	h3 {
		margin-bottom: 0;
	}
	img {
		max-width: 100%;
	}
</style>
