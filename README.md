# Today I Learned

## TestDome 

### HTML/CSS
_21 May 2021_
1. In order to suggest a options in an HTML input field, you can use the ```<datalist>``` element. 

  Example from the [Advanced Form](https://www.testdome.com/questions/html-css/advanced-form/50741?visibility=1&skillId=3)question:
  ```
  <form>
  Formula: <input name="formula" list="options"><br />
  <datalist id="options">
  <option value="sin"></option>
  <option value="cos"></option>
  <option value="tan"></option>
  <option value="cot"></option>
  </datalist>
  </form>
  ```
  [Source](https://levelup.gitconnected.com/easy-autocomplete-suggestions-for-inputs-with-the-html5-datalist-tag-22fcfc409235)

2. With the HTML ```<details>``` Element, we can create a disclosure widget in which the rest of the content is displayed only when it is toggled to an open state. The closed state displays only the content inside the ```<summary>``` element. 

  Example from the [Semantics](https://www.testdome.com/questions/html-css/semantics/50326?visibility=1&skillId=3)question:
  ```
  <details>
    <summary>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</summary>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Curabitur vitae hendrerit mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Mauris lacinia scelerisque nibh nec gravida. 
          Duis malesuada nec nibh sit amet pulvinar. 
          Phasellus congue porttitor arcu, ut suscipit nibh aliquam vel. 
          Nunc arcu lectus, egestas ut sem ac, euismod porttitor eros. 
          Phasellus tincidunt consequat pharetra. Maecenas sodales purus at nulla finibus dapibus. 
          Nullam varius at nisl vel euismod. Fusce aliquet ligula non tempor fermentum. 
          Nam fermentum posuere mauris, quis aliquam nibh dictum sed.</p>
  </details>
  ```
  [Source](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
