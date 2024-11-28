# Vue Base Controls

Here you'll find a handful of Bootstrap-based web UI controls
for use in Vue.JS projects.

## Installing

You can install the library the usual way, for example with [pnpm](https://pnpm.io/pnpm-vs-npm):

```bash
pnpm add @coliz/vue-base-controls
```

## Registering

There is a [Vue plugin](https://vuejs.org/guide/reusability/plugins) available for apps to register all components at once.

## Vue.js

In a Vue.js app, import the library and then call `use` on the application instance

```typescript
import controls from '@coliz/vue-base-controls'

createApp(App)
    .use(controls)
    .mount('#app')
```

## Nuxt

In a Nuxt app, you'll create a simple [Nuxt plugin](https://nuxt.com/docs/guide/directory-structure/plugins) in the `plugins` directory, which handles this:

```typescript
import controls from '@coliz/vue-base-controls'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(controls)
})
```

## Styles

Generally, this library tries to avoid applying unique style. Either we leverage Bootstrap styles,
or leave that to you as the user. Still, there are some cases where light styling has been applied.
You can get these like so:

```css
@import "@coliz/vue-base-controls/dist/vue-base-controls.css"
```
