# Today I Learned : Exploring The Programming World

👋 Hi, I'm Sabrina, a junior web developer with a fresh software engineering license. Welcome to my GitHub repository, where I document my ongoing quest to master the art of programming and web development.

In this space, you'll find my insights, challenges, and accomplishments as I dive into diverse topics, from algorithms and Typescript to React, HTML, and Sass. I'm passionate about learning and eager to share my journey with you.

I've organized the content into an index, making it easy for you to navigate and explore specific topics that interest you. Feel free to join me on this adventure and follow along as I embrace continuous learning.

Happy coding! 🚀

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
5. [Opquast](#opquast)
	1. [Contents](#contents)
6. [AlgoExpert](#algoexpert)
   	1. [Arrays](#arrays)
7. [Advanced React and TypeScript Project](#advanced-react-and-typescript-project)
   	1. [Set up with Vite](#set-up-with-vite)

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

[Source: freeCodeCamp](https://www.freecodecamp.org/news/how-the-question-mark-works-in-javascript)


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

## Opquast 

_04 Nov 2021_

_"When you hear about best practices at Opquast, it corresponds to a very precise definition. It’s not advice, it’s not a recommendation. It is a set of rules that are useful, universal, realistic, verifiable online, and agreed upon by the community."_ [Opquast-English](https://www.opquast.com/en/opquast-who-are-they-and-what-is-this-best-practices-checklist-all-about/)

You can learn more about Opquast and download the checklists via this link : https://www.opquast.com/en/making-the-web-better/

### Contents 

#### Rule n°1 - The website provides a way for users to find out about new content and services 

**Goal**
- Enable users to immediately identify new online content and services. 
- Improve the way content is taken into account by search engines and indexing tools. 

**Control**
Throughout the website, check that new content or services are accessible, for example, through an information channel within the website (RSS news feed, section such as "Website news", etc.) or an external channel accessible from the website (this must be from the home page) such as a Twitter account. 

#### Rule n°2 - Information about copyrights and reuse rights can be accessed from every page. 

**Goal**
- Inform the users of the conditions under which the content is published. 
- Inform the users of the conditions for copying and reusing the content. 

**Control**
In each of the pages evaluated, check that there is a full reference to the reproduction and reuse right or via a hyperlink pointing to a specific page. 

#### Rule n°3 - Each page's source code contains metadata that describe the content. 

**Goal**
- Enable search and indexing tools to extract information about the pages' content. 
- Improve the search results returned to users. 
- Improve the way content is taken into account by search engines and indexing tools

**Control**
Inside the source code of each page that is examined: 
- Check the presence of a tag `<meta name="description" content="" />
- Check that the text of this tag describe effectiveley, in a specific manner or more generic, the content of the page.

## AlgoExpert

_09 Aug 2023_

I have started practicing my algorithm solving skills, and I am currently working on arrays which have been proven to be quite mentally taxing although I am only on the easy section of the website. I have been looking at the solutions every time, and asking ChatGPT (This is not a very eco friendly learning practice 😣) to explain bits of code I do not understand. 

I'll be keeping a record of the algorithms I come accross for future reference and to be able to reflect on them. 

### Arrays 

#### [Two Number Sum](https://www.algoexpert.io/questions/two-number-sum)

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array. 

Note that the target sum has to be obtained by summming two different integers in the array; you can't add a single integer to itself in order to obtain the target sum. 

You can assume that there will be at most one pair of number summing up to the target sum. 

**Solution** : 
```
function twoNumberSum(array, targetSum) {
  const seen = {};

  for (const num of array) {
    const complement = targetSum - num; 

    if (complement in seen) {
      return [num, complement];
    } else {
      seen[num] = true;
    }
  }
    return [];
}
```

#### [Validate Subsequence](https://www.algoexpert.io/questions/validate-subsequence)

Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one. 

A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers ``` [1, 3, 4] ``` form a subsequence of the array ``` [1, 2, 3, 4] ``` and so do the numbers ``` [2, 4] ```. Note that a single number in an array and the array itself are both valid subsequences of the array. 

**Solution :**
```
function isValidSubsequence(array, sequence) {
  let arrayIndex = 0; 
  let sequenceIndex = 0; 

  while (arrayIndex < array.length && sequenceIndex < sequence.length) {
    if (array[arrayIndex] === sequence[sequenceIndex]) {
      sequenceIndex++;
    }  
    arrayIndex++;
  }
  return sequenceIndex === sequence.length;
}
```

#### [Sorted Squared Array](https://www.algoexpert.io/questions/sorted-squared-array)

Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order. 

**Solution : **
```
function sortedSquaredArray(array) {
  const squaredArray = array.map(num => num * num);
  squaredArray.sort((a, b) => a - b);
  return squaredArray;
}
```

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






