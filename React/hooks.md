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
