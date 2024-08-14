# React Styles

React components can be styled in a number of different ways: inline styling, object variable styling, stylesheets, and CSS modules.
Inline styling can be used to apply styles to a single element. Inline styling can be done by giving the element an attribute named `style` whose value is an object literal surrounded in curly braces.

```
<h1 style={{color: "red"}}> Hello, World! </h1>
```

An object variable can also be used to apply a style to a single element. The syntax is similar to inline styling, but rather than passing an object literal, the name of the variable is passed instead.

```
const myStyle = { color: "red" }
<h1 style={myStyle}> Hello, World! </h1>
```

Style names in React must be in camelCase. For example, `background-color` becomes `backgroundColor`.

In React, a number style value is automatically interpreted with `px`.

Styles can be separated and stored into CSS module files. The styles can be imported and used by applying `className` attributes to the relevant elements.
