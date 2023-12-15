# Web knowledge

Things developers should know when working withing web environments.

## CSS-in-JS

#### 📚 Ressources : 
- ["Pourquoi le CSSinJS ?" from Grafikart](https://grafikart.fr/tutoriels/css-in-js-1363)
- ["CSS vs. CSS-in-JS" from LogRocket blog](https://blog.logrocket.com/css-vs-css-in-js/)
- [Why We're Breaking Up With CSS-in-JS by Sam Magura](https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b)
- [Colocation by Kent Dodds](https://kentcdodds.com/blog/colocation)

### What is it ? 

The goal is to generate CSS rules directly from our JavaScript code. 

### Render blocking and CSS 

Traditionally, the browser renders the HTML first and then the CSS resources. 

But when the browser meets a `<link>` tag it blocks all other actions while he assimilates and analyses the CSS file that is linked to that page. 

The style sheet is going to be loaded and stores in a CSS Object Model (CSSOM) that the browser and Javascript can use to render the page. 

> 🚨 The bigger the CSS file the longer it will take for the browser to analyse it and render the page.

This process causes the CSS to block the rendering of the page, which delays its first paint. 


**🎨 First paint is the event when the browser prints the first pixel on the screen for the page requested.**

> Good to know💡: With an HTTP/2-powered app, multiple HTML, CSS, and JS files can load in parallel. This ability was limited with HTTP/1.1. Most modern browsers and websites now support HTTP/2, which minimizes render blocks caused by waiting for other files to load

### Why use it ? 

1. It will help by splitting our CSS into small chunks, regroup them and organize the styling for each component. This allows us to prevent the rendering of an element's styling if that element is not present.
   
2. When writing plain CSS, it's very easy to accidentally apply styles more widely than you intended. CSS-in-JS completely solves this problem by making styles locally-scoped by default

3. It's not an uncommon practice to store all .css files in a src/styles directory, while all the React components live in src/components. However, the bigger the app, the more strenuous it becomes to tell which style is used by each component and makes identify dead code more difficult. A better approach for organizing your code is to include everything related to a single component in same place and if you're using CSS-in-JS, you can write your styles directly inside the React component that uses them.

> 🤓 Note: CSS Modules also allow you to colocate styles with components, though not in the same file.

4. CSS-in-JS enables you to reference JavaScript variables in your style rules.

> 🚨 It's the hot new technology. Many web developers, myself included, are quick to adopt the hottest new trends in the JavaScript community. New libraries and frameworks have proven to be massive improvements over their predecessors (just think about how much React enhances productivity over earlier libraries like jQuery). On the other hand, the other part of our obsession with shiny new tools is just that — an obsession. We're afraid of missing out on the next big thing, and we might overlook real drawbacks when deciding to adopt a new library or framework. I think this has certainly been a factor in the widespread adoption of CSS-in-JS — at least it was for me.

### Runtime CSS-in-JS 

Runtime CSS-in-JS simply means that the library interprets and applies your styles when the application runs.

### The Bad 

1. CSS-in-JS adds runtime overhead.
2. CSS-in-JS increases your bundle size.
3. CSS-in-JS clutters the React DevTools

### The Ugly 

1. Frequently inserting CSS rules forces the browser to do a lot of extra work. Every time a new style is added, the webpage has to pause, check all the existing styles, and make sure everything still looks good. The worst part is, this problem isn't easy to fix. It's like a built-in issue with the way CSS-in-JS works.

> 💡 When your webpage is being built, it's like a chef cooking in a kitchen. The chef is adding ingredients (which are like your webpage elements), and they're following a recipe (which is like your CSS). Now, imagine if the chef had to stop and check the recipe book every time they added a new ingredient. It would slow down the cooking process, right? Well, that's what happens with CSS-in-JS. (Thanks ChatGPT 🤖)

2. With CSS-in-JS, there's a lot more that can go wrong, especially when using SSR and/or component libraries

> 🤿 You can checkout the section that focuses on the performance impact of Emotion, as it was used in the Spot codebase in Sam Magura's [article](This section focuses on the performance impact of Emotion, as it was used in the Spot codebase.)

Splitting our CSS into small chunks and grouping them with their component will prevent the rendering of an element's styling if that element is not present. 

It simplifies the way the app's styling is organized and eases the use of naming conventions



