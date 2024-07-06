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

## Selectors 
A pattern used at the beginning of a **ruleset** for choosing which elements will be affected by the declarations. There are a variety of different selector types: 

- **Type selector** : Selects all of the elements of a specific HTML tag. For example, `h1` would select all `<h1>` elements. 
- **Class selector** : Selects all ements with a specific HTML class attribute. Class selectors are prefixed with a `.`, so for example `.foo` would select all HTML elements with the attribute `class="foo"`. 
- **ID selector** : Selects an element with a specific HTML ID attribute. ID selectors are prefixed with a `#`, so for example `#bar` would select the HTML element with the attribute `id="bar". 
- **Attribute selector** : Selects all elements with a specific HTML attribute set to a specific value. These are surrounded by `[ ]` and use a `=` as a delimiter between the attribute name and value. For example, `[type="submit"]` would select all elements with a type attribute set to "submit". 

Excluding the value will select all elements with the attribute set to any value. For example, `[type]` would select all elements with the type attribute set, regardless of the value. 

Attribute selectors can also use special syntax for basic pattern matching within the value. There a variety of options here, but these are some of the more common ones: 
- `**[href*="algoexpert.io"]**` would select all elements with an href attribute with the text "algoexpert.io" at any location. 
- `**[href$="algoexpert.io"]**` would select all elements with an href attribute with the text "algoexpert.io" at the end of the value. 
- `**[href^="algoexpert.io"]**` would select all elements with an href attribute with the text "https://algoexpert.io" at the beginning of the value. 

- **Combinator**: Combines multiple selectors to select elements based on their location in the DOM. There are a few types of combinators:
    - **Descendant combinator** : Represented by a single space, in the format `selector1 selector2`. Selects all elements that match `selector2` and are descendant of an element matching `selector1`. A descendant does not need to be a direct child (e.g. the selected element's grandparent could match `selector1`).
    - **Child combinator** : Represented by `>`, in the format `selector1 > selector2`. Selects all elements that match `selector2` and are direct child of an element matching `selector1`.
    - **Sibling combinator** : Represented by `~`, in the format `selector1 ~ selector2`. Selects all elements that match `selector2` and are a sibling of an element matching `selector1`. The element matching `selector2` must come after the element matching `selector1`.
    - **Adjacent sibling combinator**: Represented by `+`, in the format `selector1 + selector2`. Selects all elements that match `selector2` and have an element matching `selector1` directly  before them in the DOM. 

    Learn more : https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors

    ## Pseudo Classes And Elements

    > **Pseudo Class**
    An addition to CSS selector for selecting base on the current state of the element. These start with `:`, so for example `button:hover` would select buttons currently hovered over. 

    Learn more : https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

    > **Pseudo Element**
    An addition to a CSS selector for selecting a specific portion of the element. These start with `::`, so for example `p::first-letter` would select the first letter of paragraphs. 

    `::before` and `::after` are special pseudo element that insert children before or after the content of the element, allowing for styling before or after the content. This is oftenties sued with the CSS `content` property, but not always. 

    Learn more : https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

    ## Selector specificity 

    > **Specificity** 
    The algorithm used by the browser to determine which CSS declarations to use when an element is selected by two rulsets with the same property. 

    > The most specific selector is the on that gets used. By default, if all of the selectors had the same specificity then it will just use whichever one was last in the file that is is reading. 

    Specificity is roughly calculated by counting the number of each selector type involved in a selector and multiplying it by a weight. 

    These weights are as follows : 
    - **Inline Styles** : 1000
    - **IDs** : 100
    - **Classes** : 10
    - **Pseudo-Classes** : 10
    - **Attributes** : 10
    - **Elements** : 1
    - **Pseudo-Elements** : 1

     > 💡 To override a declaration of a CSS library without worrying about the specificity of the library's selector we use `!important`. This goes after the value but before the semi-colon. It is still important to avoid using it if we're using pure CSS before we have full control over all of it and we should be using specifity as an advantage. 

    Learn more : https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity

   

