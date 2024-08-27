# Web knowledge
Things developers should know when working within web environments.

## Overview of the Internet

### Hello, Internet !
More than four billion people around the world are internet users and the total number of websites on the world wide web is nearing two billion.

> **Good to know** 💡: You don’t need to be an engineer to benefit from understanding how the internet works. However, understanding the internet’s infrastructure will help you decide if learning web development is right for you.

### The Ever-Expanding Network 
So how did the internet start? 

In 1969, the United States Department of Defense funded the creation of ARPANET, a precursor network to the internet. ARPANET stands for Advanced Research Projects Agency Network. 

These institutions wanted to connect their individual networks for large-scale information transfer. However, many of them followed different standards and technical implementations.

In the 1970s, the transmission control protocol and internet protocol, otherwise known as TCP/IP, were created to provide standards around the transfer of data that would allow these early networks to communicate with each other. 

TCP/IP was researched and specified throughout the 1970s and adopted in the early 1980s. As different networks adopted TCP/IP, the interconnected global network of networks that is today known as the internet was formed.

### The World Wide Web 
The internet refers to the actual network of connected computing devices.

Engagement with the internet changed in 1989 when Tim Berners-Lee invented the world wide web. The world wide web is a collection of interlinked websites and other web resources.

The world wide web, in combination with the rise of web browsers in the 1990s, introduced a user-friendly interface that enabled users to browse multimedia content and interact with other users.

### Browsers and Servers

In the client-server model, the client refers to the user’s device or program that is making a request for data. A client can be a browser or application running on a user’s laptop, smartphone, or tablet.

The server is the device or program in that network that waits for incoming requests and sends back data. This might be an in-house server, a rented server at a data center, or cloud server.

### Web 2.0
The earliest static websites were composed of text, images, and links, with very little interactivity beyond browsing from one page to another. These websites are called static, which means lacking in movement because they do not change based on user behavior.

A collection of advances in the early 2000s created a cluster of web applications that are often called “Web 2.0”. In comparison to early static websites, Web 2.0 applications are often defined by:

- In the early web, user input would typically take the user to a new page — and they would have to wait for the new page to load. In Web 2.0, websites could just update selected regions of the page, avoiding the interruption caused by reloading.

- In the early web, content was generally authored by a single source. The rise of blogging, social media, and wikis in web 2.0 meant that users could generate content and share it with their friends.

There were important technical advances that enabled each of these advances in the user interface of the internet. For example:

jQuery was the first JavaScript framework that could fetch data while the web page is running.
The rise of web frameworks that connected to databases, like Spring, Django, and Ruby-on-Rails, enabled user-generated content to effectively be created, stored, and displayed.

### 404 Status Code
When a server responds to a client, the server specifies a status code as a part of the response. Status codes indicate whether or not the HTTP request was successfully completed and if there was an error, they contain some information about the type of error that happened. The status code helps the browser know how to handle the data that was sent back with the response.

### Current Internet Trends 
The rise of internet-connected smartphones has profoundly changed how users interact with the internet. 

#### Responsive Web Design 
Responsive web design was enabled by additions to the CSS language, like media queries and relative units. These additions allow the presentation of websites to adjust based on the size of the window in which they are displayed.

#### Mobile Applications and Devices
Users accessing the internet on smartphones are likely to spend much more time with specific applications, rather than using their phone’s browser. 

>**Good to know**💡 Though most mobile applications are internet connected, they are not part of the world wide web. The web is built out of links, whereas mobile applications are designed to keep the user’s attention.


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



