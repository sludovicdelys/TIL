# React

## [Intro to React with a Tutorial](https://reactjs.org/tutorial/tutorial.html)

  _04 June 2021_ 

### Overview

A React component takes in parameters called ```props``` (refers to properties) and returns a hierarchy of views to display by using the ```render``` method. 

The ```render``` method displays a lightweight description of what you want to see on the screen. It returns a **React element**. 

React is modulrar, scalable, flexible, and a popular front-end framework. 

### JSX

[JSX](https://reactjs.org/docs/introducing-jsx.html) is a syntax extension to JavaScript, mostly used in React to describe what the UI should look like. You can put any valid JavaScript expression inside JSX by wrapping it in curly braces. 

Example: 
```
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

* JSX allows us to treat HTML as expressions.
  * They can be stored in variables, objects, arrays, etc...
* JSX elements can have attributes and be nested, just like in HTML.
* JSX must have exactly one outer element, and other elements can be nested inside.
* `createRoot()` from `react-dom/client` can be used to create a React root at the specified DOM element.
* A React root's `render()` method can be used to render JSX on the screen.
* A React root's `render()` method only updates DOM elements that have changed using the virual DOM.

#### Virtual Dom 
Some front-end frameworks like Vue.js & React.js create their own representation of the DOM as a JavaScript object. Whenever a change is made to DOM, the framework makes a copy of that JavaScript object, makes the change to that copy and compares it the two JavaScript objects to see what has changed. It informs the browser of these changes and only those parts of the DOM are repainted. 

By comparing the new virtual DOM with a pre-update version, React figures out exactly which virtual DOM objects have changed. This process is called “**diffing**.”

```javascript
{
	type:'body',
	children: [
		{type:'h1',text:'Things to Learn'},
		{type:'ul',children[
			{type:'li',text:'JavaScript', children:[...]}
			{type:'li',text:'Python', children:[...]}
			{type:'li',text:'Ruby', children:[...]}
		]
	]
}
```
1) Prevents unecessary repaints
2) Only repaints updated elements
3) Groups together repaints

### Advanced JSX
* Use `className`instead of `class`
* You _have_ to include the slash on self closing tag in JSX. For example : `<br />`
* Inject regular JavaScript into JSX expressins with curly braces. For example : `<p>{2+3}</p>` will render 5.
  * The curly braces themselves won't be treated as JSX or JS, they are markers that signal the beginning and end of a JavaScript injection into JSX, similar to the quotation marks that signal the boundaries of a string.
* You can use variables and object properties to set attributes when writing JSX
* You create an event listener by giving a JSX element a special attribute.
  * An event listener attribute’s name should be something like onClick or onMouseOver: the word on plus the type of event that you’re listening for.
* You cannot inject an if statement into a JSX expression !
  * One option is to write an if statement and not inject it into JSX.
  * A more compact way to write conditionals in JSX is to use the _ternary operator_.
  * Another way of writing conditionals in React is the && operator.
* If you want to create a list of JSX elements, then using .map() is often the most efficient way.
  * For example :
    ```
	const strings = ['Home', 'Shop', 'About Me'];
	
	const listItems = strings.map(string => <li>{string}</li>);
	
	<ul>{listItems}</ul>
    ```
* A key is a JSX attribute. The attribute’s name is key. The attribute’s value should be something unique, similar to an id attribute
  * Not all lists need to have keys. A list needs keys if either of the following is true:
    - The list items have memory from one render to the next. For instance, when a to-do list renders, each item must “remember” whether it was checked off. The items shouldn’t get amnesia when they render.
    - A list’s order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.
* The majority of React programmers do use JSX, but you should understand that it is possible to write React code without it.
  ```
  The following JSX expression:

	const h1 = <h1>Hello world</h1>;
  
  can be rewritten without JSX, like this:

	const h1 = React.createElement(
	  "h1",
	  null,
	  "Hello world"
	);
  ```

_______

Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called ```components``` that contain both:
  * [seperation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns): a design principle for separating a computer program into distinct sections such that each section addresses a separate concern. 
  * concern: a set of information that affects the code of a computer program.

Each React element is a JavaScript object that you can store in a variable or pass around in your program.

Passing props is how information flows in React apps, from parents to children.

Notice how with ```onClick={() => alert('click')}```, we’re passing a function as the ```onClick``` prop. React will only call this function after a click. Forgetting ```() =>``` and writing ```onClick={alert('click')}``` is a common mistake, and would fire the alert every time the component re-renders.

React components can 'remember things' by setting ```this.state``` in their constructors. ```this.state``` should be considered as private to a React component that it’s defined in. First we have to add a ```constructor``` to the class to initialize the state. All React component classes that have a constructor should start with a super(props) call.

When you call ```setState``` in a component, React automatically updates the child components inside of it too.

### Lifting State Up 
 
**To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.**
  
To prevent JavaScript from breaking the code by inserting a semi-colon after ```return```, the example below uses parentheses. 
```
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
```
**The DOM ```<button>``` element’s onClick attribute has a special meaning to React because it is a built-in component. For custom components like Square, the naming is up to you. We could give any name to the Square’s ```onClick``` prop or Board’s ```handleClick``` method, and the code would work the same. In React, it’s conventional to use ```on[Event]``` names for props which represent events and ```handle[Event]``` for the methods which handle the events.**

_June 07 2021_

The [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) method copies the values of an array into a new array. 

### Immutability
				
_June 12 2021_

Two approaches to changing data: 
	- _mutate_ the data by directly changing the data's values
	- replace the data with a new copy which has the desires changes 

Examples: 

_Data Change with Mutation_

```
var player = {score: 1, name: 'Jeff'};
player.score = 2;
// Now player is {score: 2, name: 'Jeff'}
```


_Data Change with Mutation_

```
var player = {score: 1, name: 'Jeff'};
player.score = 2;
// Now player is {score: 2, name: 'Jeff'}
```

The result is the same, but by not mutating the data we get several advantages

***Complex Features Become Simple***

It allows us to undo and redo certain actions which is a common requirement in many applications 

***Detecting Changes***

It is difficult to detect changes in mutable objects, because it requires that we compare the current object with previous copies of itself. 
Detecting changes in immutable objects is easier. If the immutable object that is being referenced is different than the previous one, then the object has changed. 

***Determining When to Re-Render in React***

Immutability helps you build _pure components_ in React. Since immutability can determine if changes have been made, it helps to determine when a component requires re-rendering 

### Function Components

Functions components are a simpler way to write components that only have a ```render``` method and don't have their own state. Meaning we don't have to define a class which extends ```React.component```, we can write a function that takes ```props``` as input and returns whatever needs to be rendered. 

### Taking Turns 

In the example below, each time a player moves, ```xIsNext``` will be flipped to determine which players goes next and the game's state will be saved.

```
handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
```
##### Question Mark Operator in JavaScript

I came across a syntax I was not familiar with on this line: ```this.state.xIsNext ? 'X' : 'O'```. Upon further investigating the use of the question ```?``` operator in JavaScript I learned that there are three main uses for it: 

- 1. Ternary Operator
- 2. Optional Chaining 
- 3. Nullish Coalescing 

In the example above, the ternary operator (```?```) was used to add a condition on the left side (```this.state.xIsNext```), a value on the right side to return when the conditon is true (```'X'```). Then we add a colon ```:``` followed by a value to return if the condition is false (```'O'```). 

[Source: freeCodeCamp](https://www.freecodecamp.org/news/how-the-question-mark-works-in-javascript)

### Picking a key 

> Keys tell React about the identity of each component, which allows React to maintain state between re-renders. If a component’s key changes, the component will be destroyed and re-created with a new state.

**It’s strongly recommended that you assign proper keys whenever you build dynamic lists. If you don’t have an appropriate key, you may want to consider restructuring your data so that you do.**

### Errors 

#### Error: error:0308010c:digital envelope routines::unsupported 

Got an error after lauching `npm install` & `npm start`

🔍 While investigating I had to look out for : 

- ✅ A node.js version that is up to date => This is my current version : v18.15.0
- 🐞 A `react-scripts` version that is up to date => It's the culprit, I did not have a 5+ version.

I installed `react-scripts` because it was not present on my project at all. 
