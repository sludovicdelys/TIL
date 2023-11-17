## Advanced React and TypeScript Project

_09 Aug 2023_

I've allocated in my programming daily practice time to learn Typescript. I have chosen to do a project that I found on Web Dev Simplified Youtube's channel for this purpose. 

### Set up with [Vite](https://vitejs.dev/guide/why.html) 

Vite.js aims to solve two main problems : 

1. **Faster Development and Hot Module Replacement (HMR)** : It takes advantage of the native support for ECMAScript (ES) modules that are native to modern web browsers. It leads to lightning-fast HMR which helps build our web projects more quickly, because your code changes show up in the browser immediately without full rebuilds.
2. **No Bundling During Development** : It doesnt pack all your code together while you're working, it serves individual modules as seperate files during developement. It means that our project updates faster as it only updates what we change, not everything.
3. **Quicker Updates** : When you make a small change in your code, it updates just the part in the browser without refreshin the whole page. It speeds up our work and keeps the flow smooth.
4. **Optimized Production Builds** : It ensures that the production builds generated are finely tuned to performance by utilizing the native capabilities of modern broswers (such as ES modules) and structuring the code and assets so that they are as efficient as possible in terms of size and performance.
5. **Simplified Setup** : User-friendly approach to configuration, which saves developers time and effort while setting up their projects. 
6. **Framework Integration** : Offers Vue.js integration as the framework was initially developed alongside it. It enhences the development experience for Vue projects. 


Why not Webpack ? : 

The choice between Vite.js and Webpack depends on whether you prioritize a quicker development experience or highly customizable build process for complex projects with diverse assets. In the context of our Typescript training it was more beneficial to choose Vite.js over Webpack.