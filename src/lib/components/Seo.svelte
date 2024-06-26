<!-- 
  ? Sitewide SEO Component for use on all pages
  * These properties will override the ones in Default Helmet
  * Pathname must be given for canonical URLs 
-->
<script>
	export let title = 'Corey Damocles | Developer'
	export let description =
		'Corey Damocles is a developer who specializes in building web applications and websites. He is passionate about creating accessible and fun user experiences.'
	export let pathname = ''
	export let image = ''
	export let robots = 'index, follow'

	let siteUrl = 'https://coreydamocles.vercel.app'
	let siteName = 'Corey Damocles'
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	{#if image}
		<meta name="image" content={`${siteUrl}${image}`} />
	{/if}
	<meta name="robots" content={robots} />
	<!-- Social -->
	<link rel="canonical" href={`${siteUrl}${pathname}`} />
	<meta property="st:title" content={title} />
	<meta property="st:info" content={description} />
	<!-- OG -->
	{#if pathname}
		<meta property="og:url" content={`${siteUrl}${pathname}`} />
	{/if}
	{#if image}
		<meta property="og:image" content={`${siteUrl}${image}`} />
	{/if}
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<!-- Twitter -->
	{#if image}
		<meta name="twitter:image" content={`${siteUrl}${image}`} />
	{/if}
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<slot />
</svelte:head>
