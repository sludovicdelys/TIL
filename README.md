# Today I Learned

## HTML/CSS 

### 21 May 2021
1. In order to suggest a options in an HTML input field, you can use the ```<datalist>``` element. 

Example from the [Advanced Form TestDome Challenge](https://www.testdome.com/questions/html-css/advanced-form/50741?visibility=1&skillId=3):
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
