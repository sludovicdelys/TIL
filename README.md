# Today I Learned

# Index
1. [React](#react)
	1. [Intro to React with a Tutorial](#intro-to-react-with-a-tutorial)
		1. [Overview](#overview)
			1. [JSX](#jsx)
		2. [Lifting State Up](#lifting-state-up)
		3. [Immutability](#immutability)
		4. [Function Components](#function-components)
		5. [Taking Turns](#taking-turns)
			1. [Question Mark Operator in JavaScript](#question-mark-operator-in-javascript)
2. [CodeWars](#codewars)
	1. [String Functions and Operators](#string-functions-and-operators)
	2. [Set](#set)
3. [TestDome](#testdome)
	1. [HTML/CSS](#html-and-css)
4. [GitHub](#github)
	1. [Markdown](#markdown)

## React

### [Intro to React with a Tutorial](https://reactjs.org/tutorial/tutorial.html)

  _04 June 2021_ 

#### Overview

A React component takes in parameters called ```props``` (refers to properties) and returns a hierarchy of views to display by using the ```render``` method. 

The ```render``` method displays a lightweight description of what you want to see on the screen. It returns a **React element**. 

##### JSX

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

#### Lifting State Up 
 
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

#### Immutability
				
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

#### Function Components

Functions components are a simpler way to write components that only have a ```render``` method and don't have their own state. Meaning we don't have to define a class which extends ```React.component```, we can write a function that takes ```props``` as input and returns whatever needs to be rendered. 

#### Taking Turns 

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


## CodeWars

### String Functions and Operators 

_01 June 2021_

Came accross two [PostgreSQL string functions](https://www.postgresql.org/docs/current/functions-string.html) while attempting the following challenge.

**Challenge description:**

Write a select statement that takes ```name``` from ```person``` table and return ```"Hello, <name> how are you doing today?"``` results in a column named ```greeting```.
  
** Two Solutions:**
  
1. ```format``` solution
```
SELECT format('Hello, %s how are you doing today?', name) AS greeting
FROM person;
``` 
2. ```concat``` solution 
```
  Select CONCAT('Hello, ',name ,' how are you doing today?') as greeting from person;
```
The first function concatenates the text representations of all arguments. 
The second function produces output formatted according to a format string. 
  
### Set
_31 May 2021_

While looking at the solutions of a CodeWars challenge, I came accross a JavaScript object I was not familiar with: the ```Set``` object. 

**Challenge description:**
  
Take 2 strings ```s1``` and ```s2``` including only letters from ```a``` to ```z```. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

**Examples**
```a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
```

**Solution**
```
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
```

Inside a [```Set```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Setobject) object, the collections of value must be unique, so **a value can only occur once**. 
Since strings are collections of characters, the value equality will be checked for both of those strings with the ```new Set(s1+s2)``` syntax inside the array. 
By using a Set object to make sure there are only unique values inside the combined string, the array now contains a set object instead of string values. 

**Further analysis**

A set looks like this inside the browser's console: 
```
var set = new Set('acbaxyz'); 
console.log(set); // Set(6) {"a", "c", "b", "x", "y", …}
```
Using the example above, I will store this set in an array and illustrate what is inside:
```
array = [set]; 
console.log(array); // [Set(6)]
```
It is only the Set itself that is stored inside the array, but we need to store the values of the set inside the array, which is the reason why the solution uses the [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) as syntactic sugar.
In this example, the spread syntax allows us to create a new array using the existing array. 
 
```array = [...set]; 
console.log(array); // (6) ["a", "c", "b", "x", "y", "z"] 
```
_What's happening?_ 

The Set is deconstructed with the syntactic sugar and the values inside the set are being re-assigned and stored as array values.

\* **Note:** we could also use Array.from() to achieve the same result\*

[Syntactic Sugar](https://sophiali.dev/syntactic-sugar-examples-javascript)

## TestDome 

### HTML and CSS
_21 May 2021_
1. In order to suggest a options in an HTML input field, you can use the ```<datalist>``` element. 

  Example from the [Advanced Form](https://www.testdome.com/questions/html-css/advanced-form/50741?visibility=1&skillId=3) question:
  ```
  <form>
  Formula: <input name="formula" list="options"><br />
  <datalist id="options">
  <option value="sin"></option>
  <option value="cos"></option>
  <option value="tan"></option>
  <option value="cot"></option>
  </datalist>
  </form>
  ```
  [Auto-Complete Suggestions](https://levelup.gitconnected.com/easy-autocomplete-suggestions-for-inputs-with-the-html5-datalist-tag-22fcfc409235)

2. With the HTML ```<details>``` Element, we can create a disclosure widget in which the rest of the content is displayed only when it is toggled to an open state. The closed state displays only the content inside the ```<summary>``` element. 

  Example from the [Semantics](https://www.testdome.com/questions/html-css/semantics/50326?visibility=1&skillId=3) question:
  ```
  <details>
    <summary>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</summary>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Curabitur vitae hendrerit mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Mauris lacinia scelerisque nibh nec gravida. 
          Duis malesuada nec nibh sit amet pulvinar. 
          Phasellus congue porttitor arcu, ut suscipit nibh aliquam vel. 
          Nunc arcu lectus, egestas ut sem ac, euismod porttitor eros. 
          Phasellus tincidunt consequat pharetra. Maecenas sodales purus at nulla finibus dapibus. 
          Nullam varius at nisl vel euismod. Fusce aliquet ligula non tempor fermentum. 
          Nam fermentum posuere mauris, quis aliquam nibh dictum sed.</p>
  </details>
  ```
  [HTML details Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
	
## GitHub

### Markdown 

_June 12 2021_

Some time ago, I wanted my markdown file to have an index, because I wanted readers to be able to go directly to a certain subject they were more interested in reading. While browsing through Stackoverflow, one of the users suggested the use of HTML tags to construct an index. It was a good solution, it did the job, but I found it was not completely adapted to my needs. 

_Example of Previous Code_

```
<!-- INDEX -->
<details open="open">
  <summary>Index</summary>
  <ol>
    <li>
     <a href="#react">React </a>
     <ul>
        <li><a href="#tic-tac-toe">Tic Tac Toe</a></li>
      </ul>
   </li>
   <li>
      <a href="#codewars">CodeWars</a>
      <ul>
        <li><a href="#string-functions-and-operators">String Functions and Operators</a></li>
        <li><a href="#set">Set</a></li>
      </ul>
   </li>
   <li><a href="#testdome">TestDome</a>
     <ul>
      <li><a href="#html-and-css">HTML/CSS</a></li>
     </ul
   </li>
  </ol>
</details>
```
Because I was using another language inside my markdown file, everytime I wanted to write a new line, GitHub would automatically indent my writing. The result was that I would spend considerable time trying to start my line in the right place. 
As a remedy, I returned to Stackoverflow and found a way to build an index exclusively with the Markdown language. 

[Markdown to create pages and table of contents](https://stackoverflow.com/questions/11948245/markdown-to-create-pages-and-table-of-contents)	
