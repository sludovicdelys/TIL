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

