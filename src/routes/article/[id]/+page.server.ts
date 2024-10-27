import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    const { id } = params;

    // Imagine that this is coming from some external CMS API
    const articleContent: any = {
        0: [
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
                    text: 'Hello! I am an article with 3 different dynamic components: A heading, an image and text'
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
        ],
        1: [

            {
                id: 1,
                type: 'Text',
                data: {
                    text: 'Hello! I am an article with only a text component.'
                }
            },
        ]
    };

    if(articleContent?.[id]) {
        return {
            article: articleContent?.[id]
        }
    } else {
        error(404, {
                    message: 'Not found'
                  });
    }
}) satisfies PageServerLoad;