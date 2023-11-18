# React

## [Intro to React with a Tutorial](https://reactjs.org/tutorial/tutorial.html)

  _04 June 2021_ 

### Overview

A React component takes in parameters called ```props``` (refers to properties) and returns a hierarchy of views to display by using the ```render``` method. 

The ```render``` method displays a lightweight description of what you want to see on the screen. It returns a **React element**. 

### JSX

[JSX](https://reactjs.org/docs/introducing-jsx.html) is a syntax extension to JavaScript, mostly used in React to describe what the UI should look like. You can put any valid JavaScript expression inside JSX by wrapping it in curly braces. 

Example: 
```
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

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

The ```[slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)``` method copies the values of an array into a new array. 

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