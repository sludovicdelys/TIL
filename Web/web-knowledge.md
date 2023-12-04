# Web knowledge

Things developers should know when working withing web environments.

## CSS-in-JS

#### 📚 Ressources: 
- ["Pourquoi le CSSinJS ?" from Grafikart](https://grafikart.fr/tutoriels/css-in-js-1363)
- ["CSS vs. CSS-in-JS" from LogRocket blog](https://blog.logrocket.com/css-vs-css-in-js/)


### What is it ? 

The goal is to generate CSS rules directly from our JavaScript code. 

### Render blocking and CSS ? 

Traditionally, the browser renders the HTML first and then the CSS resources. 

But when the browser meets a `<link>` tag it blocks all other actions while he assimilates and analyses the CSS file that is linked to that page. 

The style sheet is going to be loaded and stores in a CSS Object Model (CSSOM) that the browser and Javascript can use to render the page. 

> 🚨 The bigger the CSS file the longer it will take for the browser to analyse it and render the page.

This process causes the CSS to block the rendering of the page, which delays its first paint. 


**🎨 First paint is the event when the browser prints the first pixel on the screen for the page requested.**

> Good to know💡: With an HTTP/2-powered app, multiple HTML, CSS, and JS files can load in parallel. This ability was limited with HTTP/1.1. Most modern browsers and websites now support HTTP/2, which minimizes render blocks caused by waiting for other files to load

### Why use it ? 

It will help by splitting our CSS into small chunks, regroup them and organize the styling for each component. This allows us to prevent the rendering of an element's styling if that element is not present. 

