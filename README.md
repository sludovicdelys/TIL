# Today I Learned

## CodeWars

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
```
array = [...set]; 
console.log(array); // (6) ["a", "c", "b", "x", "y", "z"] 
```
_What's happening?_ 

The Set is deconstructed with the syntactic sugar and the values inside the set are being re-assigned and stored as array values.

\* **Note:** we could also use Array.from() to achieve the same result\*

[Syntactic Sugar](https://sophiali.dev/syntactic-sugar-examples-javascript)

## TestDome 

### HTML/CSS
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
