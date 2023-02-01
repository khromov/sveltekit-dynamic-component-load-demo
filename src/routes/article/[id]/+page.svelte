<script lang="ts">
	export let data: any;
</script>

{#each data.article as component (component.id)}
    <div>
        <svelte:component this={data?.components[component.type]} data={component} />
    </div>
{/each}

<a href="/">Go back</a>