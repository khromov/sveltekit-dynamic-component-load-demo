import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    const articleContent = [
        {
            id: 0,
            type: 'Heading',
            data: {
                text: 'This is a heading!'
            }
        },
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
        },
        {
            id: 4,
            type: 'Heading',
            data: {
                text: 'Another heading!'
            }
        },
    ];

    return {
        article: articleContent
    };
}) satisfies PageServerLoad;