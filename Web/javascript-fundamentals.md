# Learn JavaScript fundamentals 

## Introduction to JavaScript

### Keywords
- Console -> keyword that refers to an object, a collection of data and action, that can use in our code.
- Comments -> explain what the code is doing + leave instructions for other developers or add useful annotations. 
- Multi-line comments -> best suited to prevent a block of code from running.
- Operator -> a character that performs a task in our code.
  - `.` -> the dot operator
- Arithmetic operators -> characters that allows us to perform mathematical calculations on numbers.
  - Add: +
  * Subtract: -
  * Multiply: *
  * Divide: /
  * Remainder: %
* Concatenation -> using arithmetic operators to combine or chain strings. 
* Properties -> when you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. 
* Built-in Objects -> In addition to console, there are other ~[objects built into JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)~.

### Datatypes
Classifications we give to different kinds of data that are used in programming. 
1. Primitive data types 
They are the most basic data types in the language.
- ***Number***: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
* ***BigInt***: Any number, greater than 253-1 or less than -(253-1), with n appended to the number: 1234567890123456n.
* ***String***: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ", though we prefer single quotes. Some people like to think of string as a fancy word for text.
* ***Boolean***: This data type only has two possible values— either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.
* ***Null***: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).
* ***Undefined***: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null. undefined means that a given value does not exist.
* ***Symbol***: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
* ***Object***: Collections of related data.

### Methods
There are specific actions that data types have access to and allows us to handle instances of that data type. 

We call these methods by appending an instance with : 
* a period (the dot operator)
* the name of the method
* opening and closing parentheses

> JavaScript is case sensitive so all methods and functions must be written the way they appear in the specs.

### ES6 Features

First, let’s bring in some history. JavaScript was introduced in 1995 by the company Netscape Communications as a scripting language for web designers and programmers to interact with web pages. The next year, Netscape submitted JavaScript to a standards developing organization called Ecma International to create standards for a scripting language (a type of programming language). In 1997, Ecma International released ECMA-262 which sets standards for the first version of a scripting language called ECMAScript, shortened to ES.

These new ECMAScript standards provided rules for the architecture of JavaScript features.

To fully distinguish the difference between JavaScript and ECMAScript: if you want to create an app or program you can use JavaScript — if you want to create a new scripting language you can follow the guidelines in ECMAScript. 

ES6 is actually the biggest update made to ECMAScript since the first edition released in 1997! Some developers even refer to ES6 as “Modern JavaScript” because of all the major additions. There were so many great features added to help JavaScript developers that include:

- new keywords like `let` and `const` to declare variables
- new function syntax using Arrow functions
- creation of Classes
- parameters with default values
- promises for asynchronous actions
- and many more!

Let's cover the important ones : 

1. Let and Const :
```javascript
let variable = 'can be reassigned';
const constant = 'cannot be reassigned';
```

2. Arrow Functions :
```javascript
const add = (a, b) => a + b; 
```

3. Template Literals :
```javascript
const name = 'World'; 
console.log(`Hello, ${name}!`);
```

4. Destructuring :
```javascript
const [first, second] = [1, 2];
const {name, age} = {name: 'John', age: 30};
```

5. Spread Operator :
```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
```

6. Default Parameters :
```javascript
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}
```
____
Exercise : 
Write a function that takes an array of numbers and returns a new array with each number doubled. Use arrow function syntax and the map method.

```javascript
function newArray(arr) {
  let newArr = arr.map((number) => number * 2); 
  return newArr; 
}
```

Other solutions : 

```javascript
function newArray(arr) {
  return arr.map((number) => number * 2);
}
```

```javascript
const newArray = (arr) => arr.map((number) => number * 2);
```

____

7. Array Destructuring :
```javascript
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first);  // 1
console.log(second);  // 2
console.log(rest);  // [3, 4, 5]
```

8. Object Destructuring : 
```javascript
const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};
const {name, age} = person;
console.log(name);  // 'John Doe'
console.log(age);  // 30
```

You can also use destructuring in function parameters : 
```javascript
function printPersonInfo({name, age}) {
    console.log(`${name} is ${age} years old.`);
}
printPersonInfo(person);  // 'John Doe is 30 years old.'
```

_____

Exercise: 

Write a function called getHighScorer that takes an array of objects representing players (each with 'name' and 'score' properties) and returns an object with two properties: the name of the player with the highest score, and their score.

```javascript
function getHighScore(players) {
  const sortedPlayers = players.sort((a, b) => b - a); 
  return ({name, score} = sortedPlayers[0]); 
}
```

Alternatively, you could write it without sorting the entire array, which would be more efficient for large arrays :

```javascript
function getHighScorer(players) {
  const highScorer = players.reduce((highest, player) => 
    player.score > highest.score ? player : highest
  );
  return { name: highScorer.name, score: highScorer.score };
}
```