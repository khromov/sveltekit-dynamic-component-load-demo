<script>
	export let data;
</script>

{#each data.article as component (component.id)}
    <div>
        <svelte:component this={data?.components[component.type]} data={component} />
    </div>
{/each}