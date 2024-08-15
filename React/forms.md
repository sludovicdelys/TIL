# React Forms
1. Traditional Form Handling vs. React Approach
- Traditional: Server only knows form data when submitted
- React: App state is updated with each change

2. The "Single Source of Truth" Principle
- In React, we aim to have one authoritative source for each piece of data
- This prevents inconsistencies between different parts of the application

3. Controlled Components
- React component that renders a form also controls what happens in that form on subsequent user input
- Form data is handled by the React component's state

4. Benefits of the React Approach
- Real-time validation
- Conditional rendering based on input
- Dynamic form fields
- Easier implementation of complex UI behaviors

5. Why This Matters
- Predictability: The application always knows the current state of the form
- Synchronization: All parts of the app can access the most up-to-date data
- Flexibility: Easier to implement complex form behaviors

## Review 

1. The state of a React form is managed by the component, and updates are triggered by the `onChange` event.
2. The `onChange` event uses an event handler to capture changes and determine what actions to take.
3. A React form uses the State hook to store the value of the input field in the component’s state. The state can then be updated with the state setter.
4. React components can be controlled or uncontrolled. Most React forms are controlled, as they control the input’s value with the state.

## Controlled vs Uncontrolled 

An _uncontrolled_ component is a component that maintains its own internal state. A _controlled_ component is a component that does not maintain any internal state. 
Since a controlled component has no state, it must be _controlled_ by someone else.

For example : 

Think of a typical `<input type='text' />` element. It appears on the screen as a text box. 
If you need to know what text is currently in the box, then you can ask the `<input>` element, possibly with some code like this:

```
let input = document.querySelector('input[type="text"]');

let typedText = input.value; // input.value will be equal to whatever text is currently in the text box.
```

The fact that `<input>` keeps track of information makes it an _uncontrolled_ component. It maintains its own internal state by remembering data about itself.

A _controlled_ component, on the other hand, has no memory. If you ask it for information about itself, then it will have to get that information through props. 
Most React components are controlled.

### Controlled components

While form elements (<input>, <textarea>, etc…) are capable of managing their own internal state, in React, we typically prefer to maintain any mutable state values within the state property of our components.

To gain control over a form element’s internal state, we can provide a value attribute on the <input> element and assign a component state variable to it.

```
import ReactDOM from "react-dom";
import React, { useState } from "react";

function PhoneNumberForm() {
  const [number, setNumber] = useState(0);

  const handleChange = (e) => {
    const newNumber = e.target.value;

    if (!Number.isNaN(Number(newNumber)) && newNumber.length <= 10) {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sending confirmation code to ${number}.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone Number:
        <input type="tel" value={number} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default PhoneNumberForm;
```

In this example, the `PhoneNumberForm` component controls the `<input>` element by assigning its own `number` state value to the `value` attribute.
Doing this essentially turns off the form element’s default behavior of controlling its own state. To keep the `number` state value up to date, an `onChange` handler is registered, which can set the state value each time a change is detected.

Though change-by-change validation like this is common enough, in some cases, we may only care about a form’s value after it has been submitted.This is where uncontrolled components come into play.

### Uncontrolled Components

An uncontrolled component is a form element that maintains its own state in the DOM. Rather than using a component’s own state value to maintain that element’s input value and updating it on every change, we can instead use a `ref` to retrieve the value directly from the DOM only when we need it.

According to React:

> Refs provide a way to access DOM nodes or React elements created in the render method.

To create an uncontrolled component, we begin by creating a ref using the [useRef() method](https://react.dev/reference/react/useRef). This method returns an object with a `.current` property that refers to the DOM node it is bound to. This ref object is bound to a form element using the `ref` attribute, and whenever the value of that form element needs to be retrieved, simply refer back to the ref object’s `.current` property.

```
import ReactDOM from "react-dom";
import React from "react";

function PhoneNumberForm() {
  const numberRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    const number = numberRef.current.value;

    if (Number.isNaN(Number(number))) {
      alert('Error: Only numbers allowed.')
    }
    else if (number.length >= 10) {
      alert('Error: Number length exceeded 10 digits.')
    }
    else {
      alert(`Sending confirmation code to ${number}.`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone Number:
        <input type="tel" ref={numberRef} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default PhoneNumberForm;
```

In this example, the `numberRef` object is created and then bound to the `<input>` form element.

```
const numberRef = React.useRef();
// ...
<input type="text" ref={numberRef} />
```

In handleSubmit, the value of that form element can be retrieved from the DOM node stored in `numberRef.current`.

```
const number = numberRef.current.value;
```

> Note: `<input>` DOM nodes are instances of `HTMLInputElement`, so their values can be retrieved using the `.value` property. Other form elements may use different properties to access their input values.

### When Should You Use An Uncontrolled Component?

That being said, there is a time and place when using uncontrolled components has its advantages. If you only need access to the value of the form on submission or are using a `<input type='file'>` form element, then uncontrolled components can be a valuable tool to have in your React toolbelt.

🤔 **Do controlled and uncontrolled just mean stateless and stateful?**

Controlled and uncontrolled are always used in the context of React forms, which can be stateless or stateful. However, controlled and uncontrolled components are usually attributed with a stateless and a stateful nature, respectively.

A controlled component has its state controlled from outside. Because of this, controlled components are usually stateless as they do not store their own state and receive it from a parent component.

Uncontrolled components are essentially stateful, as they store and maintain their own internal state.
