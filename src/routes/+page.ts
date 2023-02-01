import type { PageLoad } from './$types';
export const prerender = true;

const getComponentPromise = (name: string) => {
    return import(`../components/${name}.svelte`);
};

export const load = (async ({ data }) => {

    // Load all required components here, this avoid loading unneeded components.
    const componentsToLoad: any[] = [];

    data.article.forEach((component) => {
        // Push all components in current article
        // componentsToLoad.push(getComponentPromise(component.type))
        componentsToLoad.push({
            type: component.type,
            promise: getComponentPromise(component.type),
        });
    });

    const components = await (await Promise.all(componentsToLoad.map(ctl => ctl.promise))).map(c => c.default);

    return {
        components, // Map the default exports
        article: data.article // TODO: Can we pass it automatically somehow?
    };
}) satisfies PageLoad;