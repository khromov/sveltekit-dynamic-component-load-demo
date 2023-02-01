<script>
	import { onMount } from 'svelte';
	import Heading from '../components/Heading.svelte';
	export let data;
	console.log('data yo', data);

	let heading = import('../components/Heading.svelte');

	const getComponentPromise = (name) => {
		return import(`../components/${name}.svelte`);
	};

	let firstComponent;

    /*
	$: {
		firstComponent = getComponentPromise('Heading');
	}
    */

	/*
    (async () => {
        heading = await ;
        console.log('actual', heading);
    })();
    */

	/*
    const componentMap = {
        Heading: import('../components/Heading.svelte'),
        Image: import('../components/Image.svelte'),
        Text: import('../components/Text.svelte'),
    };
    */

	const articleContent = [
		{
			id: 0,
			type: 'Heading',
			data: {
				text: 'This is a heading!'
			}
		}
		/*
        {
            id: 1,
            type: 'Text',
            data: {
                text: 'Hello world! This is some text.'
            }
        },
        {
            id: 2,
            type: 'Image',
            data: {
                src: 'https://placekitten.com/600/600'
            }
        }
        */
	];

	/*

    (async () => {
        heading = await import('../components/Heading.svelte');
    })();
    */
</script>

<svelte:component this={data.components[0]} data={{ text: 'Testing 123' }} />

<!--
{#await heading}
	<p>...waiting</p>
{:then number}
	<svelte:component this={heading.default} data={{ text: 'Testing 123' }} />
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
-->

<!--
{#each articleContent as component (component.id)}
    <div>
        <!-- <svelte:component this={componentMap?.[component.type]} data={component} /> -
    </div>
{/each}
-->
