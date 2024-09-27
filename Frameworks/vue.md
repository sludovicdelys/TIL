# Vue.js 

## Adding Vue
In summary, front-end frameworks aim to fix the following issues in front-end web development :
- Long development times
- Difficult bug fixes and updates
- Slow page rendering

The first thing you’ll need to do to begin using any front-end framework is to add the framework to your project. You can import Vue by adding a `<script>` tag inside the `<head>` of your project’s HTML file :

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js" defer></script>
```
We use the `defer` attribute on the `<script> tag to make sure that the page is loaded and ready to hook up to Vue before we actually load Vue.

The Vue team recognized that many complex front-end features aren’t useful until late in the front-end learning journey (or sometimes at all). As a result, they offered this simple alternative that provides most of Vue’s features to developers quickly and easily.

## Creating Vue Apps

## Components 

### Naming
The Vue.js style guide recommends that component names should always be multi-word, except for root App components, to prevent conflicts with existing and future HTML elements. This is because the HTML Living Standard specifies that custom elements (which Vue components essentially are) must contain a hyphen in their name.
