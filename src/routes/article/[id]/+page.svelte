<script lang="ts">
	export let data;
</script>

{#each data.article as section (section.id)}
    <div>
        <svelte:component this={data.components[section.type]} data={section} />
    </div>
{/each}

<a href="/">Go back</a>