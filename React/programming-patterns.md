# React Programming Patterns 

## Separate Container Components From Presentational Components

The pattern focuses on splitting complex components into stateful (container) and stateless (presentational) components, where stateful components manage complex state or logic and stateless components only render JSX.

### Container Component 

The functional part of a component (maintaining a state, making calculations based on props, etc.) can be separated into a container component, also known as a stateful component.

This container component will be in charge of maintaining the state (creating and updating) and passing it on to any component it renders through props

### Presentational Component 

The presentational component’s only job is to contain JSX. It should be an exported component and should not render itself because a presentational component will always get rendered by a container component.

For example, say we have components called Presentational and Container. Presentational.js must export the component function (or class, when applicable):

```
function Presentational(/*...props*/) {
  // body of the component                      
}
                        
export default Presentational;
```

Container.js must import that component:

```
import { Presentational } from 'Presentational.js';
function Container() {
  // renders Presentational component
}
```

> It’s important to understand that although a presentational component doesn’t maintain state, it doesn’t mean it is not reactive. Recall that, like state, a change in props also triggers a potential change in the rendered JSX.

### Parent/Child and Sibling/Sibling Communication

Recall that React functional components should be pure functions and updating prop values directly would violate that principle

In order for a presentation (stateless) component to communicate changes to a container (stateful) component, the container component must define and provide a way for the presentational component to communicate with it using a change handler function passed as a prop.

For example : 

```
function Container() {
  const [isActive, setIsActive] = useState(false);                              
                                
  return (
    <>
      <Presentational active={isActive} toggle={setIsActive}/>
      <OtherPresentational active={isActive}/>
    </>
    );                          
  }
                        
function Presentational(props) {
  return (
    <h1>Engines are {props.active}</h1>
    <button onClick={() => props.toggle(!props.active)}>Engine Toggle</button>
  );
}
                            
function OtherPresentational(props) {
  // render...
}
```

In the example above, `Container` maintains the `isActive` state and passes `setIsActive` to Presentational through the toggle prop. When `Presentational` needs to communicate a change to the `active` prop, it uses the function passed to it through the `toggle` prop.

Using this pattern also indirectly results in communication between sibling components (components with a common parent), as shown in the example above. When `Presentational` communicates a change through `toggle`, it causes a state update in `Container`, which provides the updated value for `isActive` to both `Presentational` and `OtherPresentational` through the active `prop`.

In this programming pattern, the container component does the work of figuring out what to display using state. The presentational component does the work of actually displaying the state through props. If a component does a significant amount of work in both areas, then that’s a sign that you should use this pattern!

## Quiz 

### Challenge 1 

If a user clicks on the button, what argument will be passed to logger()?

```
import React from 'react';
import { createRoot } from 'react-dom/client';

function Example() {
  const logger = (param) => {
    console.log(param);
  }

  return <button onClick={logger}></button>;
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Example />);
```

**Answers** : 
* The string ‘click’, because that is the event type that is being listened for.
* There is not enough information available to answer this question.
* The <button></button> DOM object, because it was clicked on.
* An event object, because logger() is being used as an event handler.


**1. The Correct Answer** : 

An event object, because `logger()` is being used as an event handler.

**2. Why This is Correct** :

In React, when you set up an event handler (like onClick), React automatically passes an event object to that handler when the event occurs.
This event object is a wrapper around the native browser event, ensuring consistent behavior across different browsers.


**3. What's in this Event Object?** :

type: The type of event (e.g., 'click')
target: The DOM element that triggered the event
currentTarget: The DOM element that the event handler is attached to
Many other properties and methods related to the event


**4. Why the Other Options Were Incorrect** :

- It's not just the string 'click' - that's only one property of the event object.
- It's not the button DOM object directly - that's accessible via event.target, but it's not the main argument.
- There is enough information to answer this question based on React's event handling system.


**5. How This Works in Practice** :

```
javascriptCopyfunction Example() {
  const logger = (event) => {
    console.log(event.type);          // 'click'
    console.log(event.target);        // the button DOM element
    console.log(event.currentTarget); // also the button DOM element in this case
  }

  return <button onClick={logger}>Click me</button>;
}
```
You're not just getting a simple value or element - you're receiving a comprehensive event object, packed with all the details you need to understand and respond to user interactions !
