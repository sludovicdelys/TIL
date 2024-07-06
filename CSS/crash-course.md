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

## CSS Units

> **Absolute Unit**
A unit whose value is not dependent on something else, so its size will be constant regardless of the context. In general, the `px` unit is the only one of these used on the web. 

> **Relative Unit**
A unit whose value is dependent on something else. These are the most frequently used relative units:
- **em** : Relative to the font size. For example, if the font siwe is `14px`, then `1.5em` would be `21px`. If the em unit is used to set font size, it will be relative to the parent's font size. 
- **rem** : Relative to the root element's font size. By default, this is usually `16px`, but it can be overriden by the user stylesheet. Moreover, the author of stylesheets can change this by setting a font size on the html selector or the `:root` pseudo class. For example, by default `1.5rem` will be `24px`. 
- **%** : A percentage, usually of the parents value for the same property. For example, a width of `50%` would be half the size of the parent element's width. 
- **vw** : A percentage of the width of the viewport, for example  `50vw` would be half of the width of the viewport. 
- **vh** : A percentage of the height of the viewport, for example `50vh` would be half of the height of the viewport. 
- **ch** : The number of characters on a line, based on the size of the "0" character in the element's font. This can be useful to prevent paragraphs from spanning more than ~70 characters in width, which can become hard to read. 

### How to choose which units ?

> **Width / Height** 

- We oftentimes use the `%` unit so that values are relative to the size of the parent. It is common to want an element to take half the width of the parent.

- Additionally, we can use the `vw` for widths, and `vh` for the heights when we need a size relative to the entire viewport. This can be helpful for creating websites with a single-page full-screen style effect. 

- The `ch` unit is very useful for a specific use case and that is choosing the width of a paragraph. Once paragraphs go over about 70 characters in a line, they become really hard to read. So setting a `ch` value around 50 to 70 can be a good way to get a good, readable paragraph. 

- Finally if you need an absolute value, I would usually recommend using `rem`. This is still a relative value but it is the closest relative unit to being absolute. 

> ⚠️ For most users it will display relative to 16 pixels, when its not relative to anything else on the page. However, for users who have chosen to change the default font sizes, this will scale properly. 

- As a last resort, if you absolutely need the width or the height to never change, pixels can be used sparingly. 

> ⚠️ However do keep in mind that this can be detrimental to accessibility, so we'll want to be careful using these. 

> **Margin / Padding**

- Preference to using `rem` units for the same reason as widths and heights. They feel consisdent and absolute, but will scale with the user preferences. 

- Sometimes the `em` unie can be useful here as well. For example if you have two sized of the same element, you can use the em to make sure that that the margin and padding scales up with the larger font size. 

- Pixels can be used sparingly, as a general rule, pixels are fine for very small values, such as `10px`padding, but as the value increases, you'll usually want to prefer `rem`, or of course you could juse use `rem`. 

> **Borders / Shadows**

- Pixel values are usually fine here, because we oftentimes don't actually want these to scale. 
- Sometimes if a shadow is defined with `rem` or `em`, it will become too big for some users, and this just won't look great. But that said, they are also perfectly okay here if that's the effect you're after. 

> **Borders / Shadows**

- Preference for `rem`. These scale with the user preferences while still being easy to work with. 
- `em` can be good if you want your values to scale with the parent size. 

> ⚠️ Can be confusing in larger projects, as the calculations for font size get kind of hard to follow, if there's a large chain of parents. 

- Pixels can be a last resort, but in general it is best to avoid as they will oftentimes end up preventing your fonts from scaling with those user preferences. 

> **Colors**

They are a few ways to represent them but theyre all essentially the same thing. So I would mostly choose the syntax that I'm more comfortably with. 

- **Keywords** : First we can use the names of the colors, and this is for super common colors like white, black, red or blue. 
However, for full projects

> I would usually avoid these absolute colors. Especially the onest like red and blue, because they can look pretty generic and they also tend to be jarring to the eye. 

- **Hex RGB** : We can represent colors using hexadecimal codes. The first two characters represent the amount of red, the second two represent the amount of green, and the third two represent the amount of blue. For example : `#4B7DAF`.

- **RGB** : RGB work the exact same way, except with comma seperated values and standard base 10, instead of hexadecimal.
    - **RGBA** : There is an option to include a last alpha value from zero to one, which is the opacity of the color. 

- **HSL** : Stands for hue, saturation and lightness. Saturation and lightness being represented as percentages. 
    - **HSLA** : This can also take an alpha value at the end. 

For both RGB and HSL functions it doesn't actually matter if you include the A at the ends of the function, you can always include the alpha value regardless. 

These two functons are aliases for the same thing but with different names. 

**Which one is the right format ?**

Hexadecimal tends to be the most common. However, the RGB values or the HSL vlues can be a little bit easier for humans to just read the name of the color and understand what it might look like. 

> Just make sure you are being consistent within the project.






