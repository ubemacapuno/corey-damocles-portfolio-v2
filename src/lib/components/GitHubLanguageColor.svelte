<script>
	export let color = 'var(--sheet_color)'
</script>

<div class="language_color" style="background-color: {color}"></div>

<style>
	.language_color {
		display: inline-block;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		margin-right: calc(var(--gap_smallest) / 2.5);
	}
</style>
