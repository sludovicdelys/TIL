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

Vue makes it easy to make a new app by exporting a class called `Vue`. Much like any other JavaScript class, we create instances of this class using the `new` keyword. Each of these `Vue` instances is a fully-functioning Vue app.

```javascript
// app.js
const app = new Vue({              //Creates new Vue app
  el: '#app',                      //Options Object
  data: { username: 'michael' },   //contains all information about the Vue app
  ...
});
```

The `Vue` constructor can set many properties on our `Vue` app when it is called. However, unlike many constructors, the `Vue` class does not take each of these properties as separate arguments.

> 💡 Vue apps require a lot of information — information that will differ greatly from app to app. To accommodate this, the Vue constructor doesn’t attempt to take in each piece of information as its own parameter. This would require developers to keep careful track of which order arguments were expected in, making it difficult to add properties or make changes.

The Vue constructor takes in only one object, called the **options object**. Each piece of information the Vue app needs to function is added to the options object as a key-value pair. This means that developers can easily update or add information in the Vue app by just looking for the correct key in the options object.

## Introduction to Vue

### el 
In making a new Vue app, we gain access to all of the powerful features Vue has to offer. However, we don’t necessarily want all of our HTML to have access to these features. We need to specify to our Vue app which portion of our HTML we want to gain access to our Vue app’s logic.

We do this by adding a key-value pair to the Vue app’s options object. We add a key called `el`, standing for HTML __el__ement, with a value of a CSS selector as a string that will target an element in our HTML and give it access to our Vue app’s functionality.

```javascript
// app.js
const app = new Vue({
  el: '#app'
});
```

In the above example, we wanted an HTML element with an ID of `app` to gain access to our Vue app’s functionality. We added an `el` key to the options object and made the value `'#app'`, a CSS selector that will target an element with an ID, `#`, of `app`.

We then import this JavaScript file into our HTML file so that our Vue app can find the specified HTML element and turn it into a Vue app.

```html
<!-- index.html -->
<head>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js" defer></script>
  <script src="./js/app.js" defer></script>
</head>
<body>
  <div id="app">
    <!-- Vue App HTML Code -->
  </div>
</body>
```

In this example, we wrote the HTML that will be turned into a Vue app. Then, in the `<head>` we imported the file containing the JavaScript from the previous example that will turn the HTML `#app` `<div>` element into a Vue app.

**Note**: We must import our Vue app code after the `<script>` that loads Vue.js. Otherwise, we would not yet have access to the Vue library in app.js, making it impossible to create a Vue app. This is also why we add `defer` to both elements — to ensure Vue has fully loaded when we go to make our Vue app.

### Data

An essential feature of all front-end frameworks is rendering and updating dynamic data. Information like the number of likes on a social media post may change at any second. Front-end frameworks must make it easy to display these types of dynamic data and automatically update them for users as soon as they change.

To display dynamic information we need:
- A place to store the data we will be displaying
- A syntax for displaying that information

Everything our Vue app needs should be provided on the options object when the Vue app is created. Therefore, all of our dynamic data will need to be specified in our options object at a property called `data`.

```javascript
const app = new Vue({
  el: '#app',
  data: {
    username: 'Michael'
  }
});
```

Apps need to display many pieces of dynamic data. To accommodate this, the value of `.data` is an object as well. Every piece of data will be added to the `.data` object as a key-value pair.

> 💡 Note: In most apps, your code would likely get this data from a database.

### Templates

Vue makes use of **templating**, meaning that the developer specifies certain content in our HTML that isn’t meant to be displayed literally but rather substituted out with the appropriate data from the app. We specify which content inside our HTML should be substituted by surrounding it in two layers of curly brackets, like so :

```html
<div id="app">
  <h2>Hello, {{ username }}</h2>
</div>
```

> 💡 Note : Using curly brackets for templating in HTML was popularized by a framework called mustache. As a result, curly braces in templates are often called “mustaches.”

### Directives

Directives are custom HTML attributes built into Vue that accomplish incredibly complex, common front-end operations using barely any code.

For example, one very common front-end need is to conditionally display elements. Let’s say we only want to show a login button if a user isn’t already logged in. We can add a `v-if` directive as an attribute to HTML elements like so :

```html
<button v-if="userIsLoggedIn">Log Out</button>
<button v-if="!userIsLoggedIn">Log In</button>
```

`v-if` acts an awful lot like JavaScript `if` - it will only display the HTML element it is on if the `v-if` statement returns `true`. In this case, it will check our `.data` for a value of `userIsLoggedIn`. Then it will only display our “Log Out” button if `userIsLoggedIn` is `true` and will only display our “Log In” button if it is `false`.

Another complex, common front-end need is to render an array of items identically. We can use v-for as an attribute, like so :

```html
<ul>
  <li v-for="todo in todoList">{{ todo }}</li>
</ul>
```

`v-for` will iterate through every item in our `.data`‘s `todoList` array, create a variable called `todo` containing each succesive array element, and create an `li` displaying each element in the list. Even if a new item is added to the list, the list will be re-rendered instantly to display that new item.

One more super cool directive is `v-model`. `v-model` can be added to any form field and hooked up to our Vue app’s `data`. Modifying the form field will then automatically modify the specified Vue app `data`!

```html
<input v-model="username" />
```

The above input field will display the current value of `username` on the Vue app’s data object and will change the value of username if the user modifies the value in the field. That’s some complicated JavaScript implemented perfectly with very little code.

> 💡 Note : As you may have noticed, every built-in Vue directive starts with `v-`. You can view a list of them all [here](https://vuejs.org/api/#Directives). Just know that if there isn’t a directive that does what you need — you can even make your own!

Directives make complex front-end code easy to write, easy to read, and optimized for great site performance.

### Components 

When creating a component, you provide a template that should be rendered whenever the component is used in HTML. You then specify which pieces of dynamic information, called **props**, the component can receive to fill in this template. When used in your HTML code, props look like normal HTML attributes, you add them to the opening tag of the component HTML element with a name and a value.

```javascript
const Tweet = Vue.component('tweet', {
 props: ['message', 'author'],
 template: '<div class="tweet"><h3>{{ author }}</h3><p>{{ message }}</p></div>'
});
```

Once you’ve created your component, you can then use it throughout your site just like any other HTML element. This means no copy/pasting of HTML code, no need to make the same change in multiple places across your site, and no potentially broken or misstyled elements.

```html
<div class="tweets">
  <tweet v-for="tweet in tweets" 
         v-bind:message="tweet"
         v-bind:author="username"></tweet>
</div>
```

### Quick review

* Make front-end code quicker to write — loading Vue in one line, mustache templates, built-in **directives**, and re-usable **components** make Vue easy to read and easy to write.

* Make front-end code easier to modify and fix — using readable mustache templates, using built-in heavily-tested **directives**, and consolidating repetitive code into **components** make Vue code less error-prone and easier to fix when errors do occur.

* Make front-end apps fast and responsive — Vue’s use of a **Virtual DOM** makes site updates happen only when they need to and incredibly fast when they do

> 💡 You might still be asking yourself at this point — is Vue right for me? Should I be learning Angular or React instead? **The answer is that there is no right answer! All of these front-end frameworks work incredibly well and are getting better every year.** Each framework has its own syntax, but many of the skills you acquire will be transferable between frameworks. **React** also uses a **virtual DOM**. **Angular** also uses **directives**. Both use **mustache-like templates** and **components**. Learn the framework that is most exciting to you. All that matters is that you never get stuck in your learning journey.

## Data

Most values on the web can change at any moment, such as the number of likes on a post or the current set of posts to display. We call constantly-changing data values like this **dynamic data**. We need a place to store dynamic data values so that we can still use them in our HTML even when we don’t know what their values will be at any given moment. There are many different ways to do this in Vue.

The simplest way is the `data` property on the options object. The value of `data` is an object. Each key-value pair in this object corresponds to a piece of data to be displayed in the template. The key is the name of the data to use in the template and the value is the value to display when the template is rendered.

We then use mustache syntax to display this data in our HTML template.

```javascript
const app = new Vue({
  el: '#app',
  data: {
    language: 'Spanish',
    hoursStudied: 274
  }
});
```

```html
<div id="app">
  <p>You have been studying {{ language }} for {{ hoursStudied }} hours</p>
</div>
```

### Computed Properties

Some data can be calculated based on information already stored and doesn’t require it’s own key-value pair in the data object. Vue allows us to store data that can be calculated using values from the `data` object at a separate property called `computed`.

Instead of storing computed data as key-value pairs in our `data` object, we store key-value pairs in a separate `computed` object. Each key in the `computed object is the name of the property and the value is a function that can be used to generate a value rather than a specific value.

```javascript
const app = new Vue({
  el: '#app',
  data: {
    hoursStudied: 274
  },
  computed: {
    languageLevel: function() {
      if (this.hoursStudied < 100) {
        return 'Beginner';
      } else if (this.hoursStudied < 1000) {
        return 'Intermediate';
      } else {
        return 'Expert';
      }
    }
  }
});
```

``` html
<div id="app">
  <p>You have studied for {{ hoursStudied }} hours. You have {{ languageLevel }}-level mastery.</p>
</div>
```

In order to reference a value from `data` in this function, we treat that value as an instance property using `this`. followed by the name of the data — in our example, `this.hoursStudied`.

### Computed Property Setters

Being able to generate `computed` properties based on `data` is super useful. But why limit ourselves by only allowing this data flow to only go one way?

Vue allows us to not only determine computed values based on data values but to also update the necessary data values if a computed value ever changes! This allows our users to potentially edit computed values in the front-end and have all of the corresponding data properties get changed in response so that the computed property will re-calculate to the user’s chosen value.

```javascript
const app = new Vue({
  el: '#app',
  data: {
    hoursStudied: 274
  },
  computed: {
    languageLevel: {
      get: function() {
        if (this.hoursStudied < 100) {
          return 'Beginner';
        } else if (this.hoursStudied < 1000) {
          return 'Intermediate';
        } else {
          return 'Expert';
        }
      },
      set: function(newLanguageLevel) {
        if (newLanguageLevel === 'Beginner') {
          this.hoursStudied = 0;
        } else if (newLanguageLevel === 'Intermediate') {
          this.hoursStudied = 100;
        } else if (newLanguageLevel === 'Expert') {
          this.hoursStudied = 1000;
        }
      }
    }
  }
});
```

```html
<div id=“app”>
  <p>You have studied for {{ hoursStudied }} hours. You have {{ languageLevel }}-level mastery.</p>
  <span>Change Level:</span>
  <select v-model="languageLevel">
    <option>Beginner</option>
    <option>Intermediate</option>
    <option>Expert</option>
  </select>
</div>
```

In this example:

* We modified our computed `languageLevel` value to contain both a getter and a setter method. We did this by making the value of `languageLevel` an object with two keys, `get` and `set`, each with a value of a function.
* The `get` function is the same function we used earlier, computing the value of `languageLevel` based on `hoursStudied`.
* The `set` function updates other data whenever the value of `languageLevel` changes. `set` functions take one parameter, the new value of the `computed` value. This value can then be used to determine how other information in your app should be updated. In this case, whenever `languageLevel` changes, we set the value of `hoursStudied` to be the minimum number of hours needed to achieve that mastery level.
* Finally, we added a `<select>` field to our template that allows users to change their mastery level. Don’t worry about this part of the logic yet, we will cover this information in Vue Forms.

### Watchers

So far we’ve learned that `data` is used to store known dynamic data and `computed` is used to store dynamic data that is computed using other pieces of dynamic data. **However, there is one caveat**.

A `computed` value will only recompute when a dynamic value used inside of its getter function changes. For example, in our previous examples `languageLevel` would only be recomputed if hoursStudied changed.

```javascript
computed: {
    languageLevel: {
      get: function() {
        if (this.hoursStudied < 100) {
          return 'Beginner';
        } else if (this.hoursStudied < 1000) {
          return 'Intermediate';
        } else {
          return 'Expert';
        }
      },
```

But what do we do if we want to make app updates without explicitly using a value in a computed function? We use the watch property.

``` javascript
const app = new Vue({
  el: '#app',
  data: {
    currentLanguage: 'Spanish',
    supportedLanguages: ['Spanish', 'Italian', 'Arabic'],
    hoursStudied: 274
  },
  watch: {
    currentLanguage: function (newCurrentLanguage, oldCurrentLanguage) {
      if (supportedLanguages.includes(newCurrentLanguage)) {
        this.hoursStudied = 0;
      } else {
        this.currentLanguage = oldCurrentLanguage;
      }
    }
  }
});
```

In this example, we want to set the number of hours studied to `0` whenever the user changes languages to a new supported language. If the language is not supported, it reverts the language back to the previously-selected language.

This functionality is not a `computed` value because we do not actually need to continually use this information to compute a new dynamic property: we just need to update existing properties whenever the change happens.

The value of `watch` is an object containing all of the properties to watch. The keys of this object are the names of the properties to watch for changes and the values are functions to run whenever the corresponding properties change. These functions take two parameters: the new value of that property and the previous value of that property.


## Naming
The Vue.js style guide recommends that component names should always be multi-word, except for root App components, to prevent conflicts with existing and future HTML elements. This is because the HTML Living Standard specifies that custom elements (which Vue components essentially are) must contain a hyphen in their name.
