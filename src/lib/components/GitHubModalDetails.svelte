<script lang="ts">
	import GitHubRepoDetails from './GitHubRepoDetails.svelte'
	import Modal from './Modal.svelte'

	export let repoLink: string
	export let demoLink: string
	export let description: string
	export let activeModalType: boolean | null
	export let image: string
	export let title: string
</script>

<Modal isModalOpen={!!activeModalType} maxWidth="90vw" onClose={() => (activeModalType = null)}>
	<GitHubRepoDetails {repoLink} {demoLink} {description} {image} {title} />
</Modal>
