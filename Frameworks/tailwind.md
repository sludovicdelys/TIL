Learn TailwindCSS
## Setup
Tailwind comes with configuration files which is why it is so powerful. You can customise everything before pre-processing your CSS final style sheets. 

Which means that in my file `tailwind.config.js` I can do a lot of configuration on coolers, spacing, typography, font-family, etc… . It will help to rebuild my CSS library and get my customisation inside Tailwind.css 

## Core Concepts
### Utility classes 
- Traditional approach : 
  1. Write HTML 
  2. Target HTML elements with CSS classes from parent to children
  3. Write CSS and relate it to HTML element
- With the traditional approach you are writing one CSS styling for one HTML element. 
- With Tailwind we achieve the same result with a lighter code base, because we don’t have to write any CSS.

### Why not use inline styling ?
- Predefined design system provided by TailwindCSS
- You can focus on responsive design from the start with breakpoint prefixes which refer to media queries
- Modifiers work for many elements

> The real force of TailwindCSS is its customisation system. You can customise an entire theme through your  `tailwind.config.js` file. It’s like an engine that takes in all the configured styling you are providing and it will build on the fly all the basic classes that you need. 

With TailwindCSS you can also re-use existing classes and customise them with your own style. 

You can stack the TailwindCSS basic styling and your custom style within a single class that you can re-use anywhere in your code. That’s amazing ✨

## Colors
You have a diverse palette of colours with many gradients provided. 

In this example we have given a class to our element in order to have a cooler green on our text : 

```javascript title="src/app/page.tsx"
export default function Home() {
  return (
    <h1 className="text-green-700">
      Hello world!
    </h1>
  );
}
```

If we checkout what’s happening in the developer console, we notice that TailwindCSS has only added the styling for this class. Which means that it only creates and picks the code we actually need to run our page, it will not add all the gradients of a colour that are available. 

> 💡Tip : It is very useful to add [IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) to your IDE 

### What about custom colours ? 
All the customisation magic happens inside the `tailwind.config.js` file. 

If you want to keep TailwindCSS basic styling but add your own custom variables, you have to add them inside the `extend{ }` object : 

```javascript title="tailwind.config.js"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'vuejs': '#48e659',
      },
    },
  },
  plugins: [],
}
```

Then, you can use this new colour directly in your element :

```javascript title="src/app/page.tsx"
export default function Home() {
  return (
    <h1 className="text-vuejs">
      Hello world!
    </h1>
  );
}
```

We can mimic TailwindCSS complex customisation like so : 

```  javascript title="tailwind.config.js"
theme: {
    extend: {
      colors: {
        vuejs: {
			100: '#48e659',
			900: '#43252'
		}
      }
    }
  },
  plugins: [],
}
```

```javascript title="src/app/page.tsx"
export default function Home() {
  return (
    <h1 className="text-vuejs-900">
      Hello world!
    </h1>
  );
}
```

## Customisation
By default, Tailwind will look for an optional `tailwind.config.js` file at the root of your project where you can define any customisations.

You can build your entire screen size and spacing system with TailwindCSS. It provides a design system, but you can build a new one with your own custom styling if needed. 

Plugins are useful as they help you to create stylesheets with JavaScript. It is particularly useful when you want to create a very specific design. 

Arbitrary values are used to directly inject into the CSS classes that you have : 

```javascript title="src/app/page.tsx"
export default function Home() {
  return (
    <h1 className="bg-[#f0ff]">
      Hello world!
    </h1>
  );
}
```

TailwindCSS provides al lot of classes to style our elements, but it happens that we need to write our own CSS. 

For more power, you can use the `@layer` directive to add styles to Tailwind’s `base`, `components`, and `utilities` layers : 

```css title="src/app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    background-color: lime;
  }
}
```

The `@apply` directive allows me to call the classes that are provided by TailwindCSS. You can chain the classes to add visibility, time and to make the code more comprehensive. 

```css title="src/app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply bg-slate-600 text-white;
  }
}
```

## Typography
### Font sizes
When you want to customise your font sizes without overwriting the original TailwindCSS styles you have to move your variables to the `extend{}` object : 

```javascript title="tailwind.config.js"
extend: {
  fontSize: {
    xs: '12px',
    sm: '15px',
    base: '18px',
  },
}
```

### Font family
If you want to overwrite the preflight font-family, meaning the default font-family, this is how you should proceed according to the TailwindCSS Documentation :
- https://tailwindcss.com/docs/font-family#customizing-the-default-font
- https://tailwindcss.com/docs/theme#customizing-the-default-theme
- https://tailwindcss.com/docs/adding-custom-styles#adding-base-styles

1. First import the custom font in your `src/app/globals.css` file like so : 

```css 
@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&family=Poetsen+One&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply text-purple-700;
  }
}
```

2. Next, add the configuration to your `tailwind.config.js` file : 

```javascript title="tailwind.config.js"
extend: {
      fontFamily: {
        sans: '"Alegreya Sans", sans-serif',
		'poe': '"Poetsen One", sans-serif',
```

> 🎨 Note that in my example, I added another custom font and created a custom variable for it. While to change the default value I had to overwrite the `sans` value. 

3. Add it to your code : 

```tsx title="src/app/page.tsx"
import Image from "next/image";

export default function Home() {
  return (
    <div className='font-sans'>
      <h1 className="text-xs lg:text-lg mb-1">
        Hello world!
      </h1>
      <h2 className="font-poe text-base">
        Hello world!
      </h2>
    </div>
  );
}
```