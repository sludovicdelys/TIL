# Hooks 

React Hooks are functions that let us manage the internal state of components and handle post-rendering side effects directly from our function components. We can use them to determine what we want to show the users by declaring how our user interface should look based on the state. 

[See the full list of React Hooks](https://react.dev/reference/react)

## The State Hook

Hooks are used to "hook into" the internal component state for managing dynamic data in function components.

We employ the State Hook using the code below. The `currentState` references the current value of the state and `initialState` initializes the value of the state for the component's first render. 

```
const [currentState, stateSetter] = useState( initialState ); 
```

State setters can be called in event handlers. However it is better to define complex event handlers outside of our JSX. 

We use a _state setter callback function_ when our next value depends on our previous value. 

We use arrays and objects to organize and manage related data that tend to change together. 

Use the spread syntax on collections of dynamic data to copy the previous state into the next state like so : 

```
setArrayState((prev) => [...prev]
```

and 

```
setObjectState((prev) => {..prev}
```

> 💡 It is best practice to have multiple, simpler states instead of having one complex state object.  

## The Effect Hook 

The useEffect hook performs side effects every time a component renders. `useEffect` accepts two arguments in the form of `useEffect(callback, dependencies)`. The callback argument holds the side-effect logic and is executed every time a render happens.

```
import React, { useState, useEffect } from 'react';
 
function TitleCount() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  
  return <button onClick={(prev) => setCount(prev + 1)}>+</button>;
}
```

### Effect Cleanup Functions

The cleanup function is optionally returned by the first argument of the Effect Hook.

If the effect does anything that needs to be cleaned up to prevent memory leaks, then the effect returns a cleanup function. The Effect Hook will call this cleanup function before calling the effect again as well as when the component is being removed from the DOM.

```
useEffect(() => {
  document.addEventListener('keydown', handleKeydown);
  //Clean up the effect: 
  return () => document.removeEventListener('keydown', handleKeydown);
});
```

If we want to only call our effect after the first render, we pass an empty array to useEffect() as the second argument. This second argument is called the **dependency array**.

The dependency array is used to tell the `useEffect()` method when to call our effect and when to skip it. Our effect is always called after the first render but only called again if something in our dependency array has changed values between renders.

When our effect is responsible for fetching data from a server, we pay extra close attention to when our effect is called. Unnecessary round trips back and forth between our React components and the server can be costly in terms of:

* Processing
* Performance
* Data usage for mobile users
* API service fees

When the data that our components need to render doesn’t change, we can pass an empty dependency array so that the data is fetched after the first render.

When the response is received from the server, we can use a state setter from the State Hook to store the data from the server’s response in our local component state for future renders. Using the State Hook and the Effect Hook together in this way is a powerful pattern that saves our components from unnecessarily fetching new data after every render!

Here’s a nice example from the official [React docs](https://legacy.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects):

```
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if the value stored by count changes
```

## Rules of Hooks

There are two main rules to keep in mind when using Hooks:

* Only call Hooks at the top level.
* Only call Hooks from React functions.

When React builds the Virtual DOM, the library calls the functions that define our components over and over again as the user interacts with the user interface. React keeps track of the data and functions that we are managing with Hooks based on their order in the function component’s definition.

```

// Instead of confusing React with code like this:
if (userName !== '') {
 useEffect(() => {
   localStorage.setItem('savedUserName', userName);
 });
}

// We can accomplish the same goal, while consistently calling our hook every time:
useEffect(() => {
 if (userName !== '') {
   localStorage.setItem('savedUserName', userName);
 }
});

Secondly, Hooks can only be used in React Functions. We’ve been working with useState() and useEffect() in function components, and this is the most common use. The only other place where Hooks can be used is within custom hooks
```

## Seperation of Concerns & React Patterns

**Challenge #1**

Let’s define a component that uses:

* an event listener on the document element to track mouse position
* a network request to fetch JSON data from a server
* state to track both of these values between renders

Which of the following patterns gives us the greatest separation of concerns?

> 1. Use a State and Effect Hook for managing the position data, then another State Hook and Effect Hook for managing the JSON data.

> 2. An Effect Hook for managing all of the component’s side effects and a State Hook for managing all of our component’s data.

> 3. An Effect Hook for managing all of the component’s side effects and two State Hooks, one for storing the data from the server and one for keeping track of the position of the mouse based on the document events.

> 4. Use one State Hook for managing all of our component’s data and two Effect Hooks, one for fetching the JSON and one for adding and removing the event listener.

**Now, let's cook up an explanation!**

Imagine your React component is a gourmet dish, and each part of state and each effect is an ingredient. The goal is to create a delicious, well-organized meal (component) that's easy to understand, modify, and scale up.

**1. Pattern 1: The Michelin Star Approach 🌟**
This is like having separate stations in your kitchen:

One for tracking mouse position (let's call it the "Mouse Soufflé")
Another for fetching JSON data (the "Data Tartare")

By separating these, you can:

Perfect each "dish" independently
Easily swap out ingredients (change implementation)
Have different chefs (developers) work on different parts

**2. Pattern 2: The One-Pot Wonder 🥘**
Everything goes into one big pot:

All effects in one useEffect
All state in one useState

While it might seem simpler, it's like trying to cook a steak and bake a cake in the same pan. It works, but it's messy and hard to manage as your recipe (component) grows.

**3. Pattern 3: The Semi-Separated Approach 🍲**

This is like having one big cooking pot for all your effects, but separate serving bowls for different types of state. It's better than Pattern 2, but still not ideal.

**4. Pattern 4: The Mise en Place 🍱**

This is close to Pattern 1, but with all state in one place. It's like having all your ingredients pre-measured in one area, but still cooking different elements separately.

The winner? Pattern 1! 🏆
Why? It's all about **separation of concerns**. Just like in a professional kitchen where you have different stations for different types of dishes, in React, separating your effects and state by functionality makes your code:

Easier to understand (each "station" has a clear purpose)
Easier to test (you can "taste-test" each part separately)
Easier to reuse (you can "serve" the mouse position logic in another "dish"/component)
Easier to maintain (if the "Mouse Soufflé" burns, it doesn't ruin the whole meal)

Remember, in the world of React cuisine, clean, well-organized code is the secret ingredient to a five-star app! 🌟👨‍🍳
