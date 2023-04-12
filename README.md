# SvelteKit Dynamic Component Load demo

A demo that shows how you can dynamically load different Svelte components depending on what content your backend API delivers.

For example, if you have dozens of hundreds of different component types and receive article data from an external API/CMS, you only have to load the components that are
present in the current article, thus reducing your bundle size through essentially bundle splitting every single component into a separate bundle.

Example:

If your Article API looks like this:

```js
{
    type: 'Heading',
    text: 'This is a heading!'
},
{
    type: 'Text',
    text: 'This is text!'
}
```

...we only need to load the `Heading.svelte` and `Text.svelte` components. Any other components won't be sent to the browser.

Live demo:
https://sveltekit-dynamic-component-load-demo.vercel.app/

After clicking on an article, you can inspect the network tab in your browser to see that only components used in the current article are loaded.

### Run locally

```
npm run dev
```

Visit http://localhost:5173/

### Run with Node adapter

The Vercel adapter is the default, but if you want to build with the Node adapter you can use:

```
npm build:run:node
```

Visit http://localhost:3000/
