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