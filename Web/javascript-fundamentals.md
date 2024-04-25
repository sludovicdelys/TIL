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
