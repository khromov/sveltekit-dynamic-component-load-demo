<script lang="ts">
	let { data } = $props();
</script>

{#each data.article as section (section.id)}
	{@const SvelteComponent = data.components[section.type]}
	<div>
		<SvelteComponent data={section} />
	</div>
{/each}

<a href="/">Go back</a>
