# 10-Day JavaScript Algorithm Study Plan for Front End Developers

## Hash Tables (Objects)

In JavaScript, objects are key-value pairs and work similarly to hash tables. 

They're extremely useful for quick lookups and are often used in front-end development for tasks like caching, storing state, or organizing data.

## String Manipulation
String manipulation is crucial in front-end development, often used for tasks like form validation, data formatting, or working with API responses.

```javascript
let str = "Hello, World!";

// Length
console.log(str.length);  // 13

// Accessing characters
console.log(str[0]);  // H
console.log(str.charAt(0));  // H

// Substring
console.log(str.substring(0, 5));  // Hello
// The substring() method returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

// Splitting
console.log(str.split(", "));  // ["Hello", "World!"]

// Replacing
console.log(str.replace("World", "JavaScript"));  // Hello, JavaScript!

// Uppercase and Lowercase
console.log(str.toUpperCase());  // HELLO, WORLD!
console.log(str.toLowerCase());  // hello, world!
```

## DOM Traversal Analogy
In front-end development, you often need to navigate through the Document Object Model (DOM). This is similar to traversing data structures in algorithms.

Consider this HTML structure :
```html
<div id="parent">
    <p>First paragraph</p>
    <p>Second paragraph</p>
    <div>
        <p>Nested paragraph</p>
    </div>
</div>
```
Traversing this structure is similar to traversing a tree data structure :
```javascript
function traverseDOM(element) {
    console.log(element.tagName);
    for (let child of element.children) {
        traverseDOM(child);
    }
}

let parent = document.getElementById('parent');
traverseDOM(parent);
```

## Simple Recursion
Recursion is a powerful concept where a function calls itself to solve a problem. It's often used in algorithms and can be applied in front-end scenarios as well.

```javascript
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

Here's how this works:

- If n is 0 or 1, return 1 (base case)
- Otherwise, return n multiplied by factorial of (n-1)

### Recursion in Front-End Development :

You might use recursion in front-end development for tasks like:

Generating nested comments in a discussion forum
Creating a file/folder tree view
Parsing complex JSON structures

Here's a simple example of generating a nested list from an array :

```javascript
function createNestedList(items) {
    if (items.length === 0) return '';
    
    let html = '<ul>';
    for (let item of items) {
        html += '<li>';
        html += item.name;
        if (item.children) {
            html += createNestedList(item.children);
        }
        html += '</li>';
    }
    html += '</ul>';
    
    return html;
}

let data = [
    {name: 'Item 1', children: [{name: 'Subitem 1'}, {name: 'Subitem 2'}]},
    {name: 'Item 2'}
];

console.log(createNestedList(data));
```

This function recursively creates an HTML string for a nested list structure, which could be used to render a hierarchical menu or a file/folder structure.

## Basic Sorting
Sorting is a fundamental operation in computer science and is often used in front-end development to organize data before displaying it to users. 

We'll look at two simple sorting algorithms: **Bubble Sort** and **Selection Sort**.

### Bubble Sort
Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they're in the wrong order. 

Here's an implementation :

```javascript
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Test
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
```

### Selection Sort
Selection Sort divides the input list into two parts: a sorted portion at the left end and an unsorted portion at the right end. 

Initially, the sorted portion is empty and the unsorted portion is the entire list. 

The algorithm proceeds by finding the smallest element in the unsorted portion, swapping it with the leftmost unsorted element, and moving the boundary between the sorted and unsorted portions one element to the right.

Here's an implementation :

```javascript
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            // Swap elements
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
    return arr;
}

// Test
console.log(selectionSort([64, 25, 12, 22, 11]));
```

Both of these algorithms have a time complexity of O(n^2), which means they're not efficient for large datasets. However, they're simple to understand and implement, which makes them good for learning purposes.

> The JavaScript `sort` method with a comparison function is a powerful tool in JavaScript, and understanding it will serve you well in many front-end development scenarios, such as sorting lists of data before displaying them to users

## Array Manipulation 
Array manipulation involves various operations to modify or analyze arrays. Some common array methods in JavaScript include :

1. `push()` and `pop()`: Add/remove elements from the end of an array
2. `unshift()` and `shift()`: Add/remove elements from the beginning of an array
3. `splice()`: Add/remove elements from a specific position
4. `slice()`: Create a new array from a portion of an existing array
5. `map()`: Create a new array by transforming each element
6. `filter()`: Create a new array with elements that pass a test
7. `reduce()`: Reduce an array to a single value

Here's a quick example using some of these methods : 
```javascript
let fruits = ['apple', 'banana', 'cherry'];

fruits.push('date');  // ['apple', 'banana', 'cherry', 'date']
fruits.unshift('apricot');  // ['apricot', 'apple', 'banana', 'cherry', 'date']

let sliced = fruits.slice(1, 3);  // ['apple', 'banana']

let lengths = fruits.map(fruit => fruit.length);  // [7, 5, 6, 6, 4]

let longFruits = fruits.filter(fruit => fruit.length > 5);  // ['apricot', 'banana', 'cherry']
```

## Frequency Counters
Frequency Counters is a pattern that uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or O(n^2) operations with arrays/strings.

Let's start with a simple example :

**Problem**: Write a function called sameFrequency. Given two positive integers, **find out if the two numbers have the same frequency of digits**.

Here's a simple implementation :

```javascript
function sameFrequency(num1, num2) {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
    }
    
    for(let j = 0; j < strNum2.length; j++){
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
    }
    
    for(let key in countNum1){
        if(countNum1[key] !== countNum2[key]) return false;
    }
    
    return true;
}
```

Let's break this down:

1. We convert the numbers to strings to easily access each digit.
2. We check if the lengths are different - if so, they can't have the same frequency.
3. We create two objects to store the frequency of each digit.
4. We loop through each string, counting the frequency of each digit.
5. Finally, we compare the frequency objects.

This approach has a time complexity of O(n), where n is the number of digits, which is much better than comparing each digit to every other digit (which would be O(n^2)).

## Multiple Pointers
The Multiple Pointers pattern involves creating pointers or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain condition. It's very efficient for solving problems with minimal space complexity.

Let's start with a simple example:

**Problem** : Write a function called `sumZero` which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0.
Return an array that includes both values that sum to zero or undefined if a pair does not exist.

Here's an implementation using Multiple Pointers :

```javascript
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
```

Let's break this down:

1. We start with two pointers: one at the beginning (left) and one at the end (right) of the array.
2. We calculate the sum of the values at these pointers.
3. If the sum is 0, we've found our pair and we return it.
4. If the sum is greater than 0, we need a smaller sum, so we move the right pointer to the left.
5. If the sum is less than 0, we need a larger sum, so we move the left pointer to the right.
6. We continue this process until the pointers meet.

This solution has a time complexity of O(n) and space complexity of O(1).