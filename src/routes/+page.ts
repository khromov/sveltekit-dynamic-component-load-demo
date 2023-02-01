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
        componentsToLoad.push(component.type);
    });

    const components: any = {};

    // TODO: Refactor to Promise.all
    for(const component of [...new Set(componentsToLoad)]) { // Remove duplicates
        console.log('Loading ', component); 
        components[component] = (await getComponentPromise(component)).default;
    }
    // const components = await (await Promise.all(componentsToLoad.map(ctl => ctl.promise))).map(c => c.default);

    return {
        components, // Map the default exports
        article: data.article // TODO: Can we pass it automatically somehow?
    };
}) satisfies PageLoad;