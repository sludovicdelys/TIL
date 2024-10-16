# Styling Elements with Vue

## Inline Styles
In the past, we have advocated against the use of inline styles, since they make CSS harder to debug and make HTML harder to read. However, front-end frameworks actually make inline styling a powerful tool due to their ability to contain CSS to small, reusable pieces of front-end code. We will use them extensively later on in your Vue journey.

Here is the syntax for adding dynamic inline styles using Vue:
```html
<h2 v-bind:style="{ color: breakingNewsColor, 'font-size': breakingNewsFontSize }">Breaking News</h2>
```

```javascript
const app = new Vue({ 
  data: { 
    breakingNewsColor: 'red',
    breakingNewsFontSize: '32px'
  }
});
```

In this example, we use the `v-bind:style` directive to set the value of two inline styles to two Vue app properties. The value of the `v-bind:style` directive is an object where the keys are CSS properties and the values are dynamic properties on the Vue app.

> 💡**Note**: Note in the example that if we want to set a value for a hyphenated CSS property, such as `font-size`, we need to put the property name in quotes in order to construct a valid JavaScript object.

This example only used values stored in data, however computed properties can be used for `v-bind:style` and all of the other directives covered in this lesson in the same way.

## Computed Style Objects

A common pattern for adding dynamic inline style objects is to add a dynamic Vue app property that generates the style object. For example, we could refactor the previous example as follows:

```html
<h2 v-bind:style="breakingNewsStyles">Breaking News</h2>
```

```javascript
const app = new Vue({ 
  data: { 
    breakingNewsStyles: { 
      color: 'red',
      'font-size': '32px'
    }
  }
});
```

In this example, we store the style object, `breakingNewsStyles`, as a Vue app property and then make that object the value of `v-bind:style`. Using this pattern, we can make style objects for specific, reusable use cases.

This pattern also allows us to consolidate similar style-computing logic to a single computed property instead of computing styles on a rule-by-rule basis. Instead of creating a computed property for every rule that we want to apply to an element if it passes a certain condition, we can instead create a single computed property that checks the condition and then returns an object with all of the relevant style rules.

## Multiple Style Objects

Another powerful aspect of v-bind:style is that it can also take an array of style objects as a value.

```javascript
const app = new Vue({ 
  data: {
    newsHeaderStyles: { 
      'font-weight': 'bold', 
      color: 'grey'
    },
    breakingNewsStyles: { 
      color: 'red'
    }
  }
});
```

```html
<h2 v-bind:style="[newsHeaderStyles, breakingNewsStyles]">Breaking News</h2>
```

In this example, we’ve added another Vue app property, `newsHeaderStyles`. This is a style object that will presumably be used to style all news item headers. Then, using an array with `v-bind:style`, we add both of these style objects to our `Breaking News` element.

You may notice that both of these style objects contain a `color` value. When this happens, the style object added later in the array gets priority. So, `Breaking News` will be `bold` and `red`. The `grey` color rule will be overridden and not used.
