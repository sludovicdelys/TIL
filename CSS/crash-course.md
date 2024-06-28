# CSS Basics

> **CSS**
Cascading Style Sheets is the primary styling language of the web. This language is used to describe the style and layout of HTML documents. 

Learn more : https://developer.mozilla.org/en-US/docs/Web/CSS

> **Cascading**
The order that stylesheets are used. These stylesheets can be grouped into three main categories: 
1. **User Agent Stylesheets** : Contain browser defaults for styles, these get the lowest level of precedence. 
2. **User Stylesheets** : Contain user preferences saved in the browser, which override user agent stylesheets. 
3. **Author Stylesheets** Contain the CSS code we write, these get the highest level of precedence (assuming `!important` has not been used).

Learn more : https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade

> **Declaration**
A CSS property-value pair in the form `property : value;`

Learn more : https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#css_declarations

> **Declaration Block**
A group of declarations surrounded by `{}`, such as : 

```css
    color: blue; 
    margin: 10px; 
```

Learn more : https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#css_declaration_blocks

> **Ruleset** 
A **selector** followed by a **declaration block** for styling elements matching the selector with the declarations in the declaration block. Rulesets follow this syntax: 

```css
selector {
    property: value; 
    property: value ; 
}
```

Learn more : https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#css_rulesets

> **<link>**
A self-closing HTML tag for linking to external resources, usually CSS stylesheets. When linking to a stylesheet, <link> will take two attributes:
- **rel**: The relationship to the other document. For CSS files, this should be `stylesheet`. 
- **href**: The path to the linked file, either relative or absolute. 

Learn more : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link

