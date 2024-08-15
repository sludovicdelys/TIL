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

In React, when you give an <input> element a value attribute, then something strange happens: the <input> element becomes controlled. 
It stops using its internal storage. 
This is a more “React” way of doing things.
