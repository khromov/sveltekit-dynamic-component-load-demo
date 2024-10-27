import type { PageLoad } from './$types';
export const prerender = false;

const getComponentPromise = (name: string) => {
	// $lib alias doesn't seem to work for dynamic imports
	return import(`../../../lib/components/${name}.svelte`);
};

export const load = (async ({ data }) => {
	// Load all required components here
	const componentsToLoad: any[] = [];

	data.article.forEach((component: any) => {
		// Push all components in current article
		componentsToLoad.push(component.type);
	});

	const components: any = {};

	// TODO: Can be refactored to Promise.all()
	for (const component of [...new Set(componentsToLoad)]) {
		// Remove duplicates
		console.log('Loading ', component);
		components[component] = (await getComponentPromise(component)).default;
	}

	return {
		components,
		article: data.article // Pass on the data from +page.server.ts
	};
}) satisfies PageLoad;
