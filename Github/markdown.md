## Markdown 

_June 12 2021_

Some time ago, I wanted my markdown file to have an index, because I wanted readers to be able to go directly to a certain subject they were more interested in reading. While browsing through Stackoverflow, one of the users suggested the use of HTML tags to construct an index. It was a good solution, it did the job, but I found it was not completely adapted to my needs. 

_Example of Previous Code_

```
<!-- INDEX -->
<details open="open">
  <summary>Index</summary>
  <ol>
    <li>
     <a href="#react">React </a>
     <ul>
        <li><a href="#tic-tac-toe">Tic Tac Toe</a></li>
      </ul>
   </li>
   <li>
      <a href="#codewars">CodeWars</a>
      <ul>
        <li><a href="#string-functions-and-operators">String Functions and Operators</a></li>
        <li><a href="#set">Set</a></li>
      </ul>
   </li>
   <li><a href="#testdome">TestDome</a>
     <ul>
      <li><a href="#html-and-css">HTML/CSS</a></li>
     </ul
   </li>
  </ol>
</details>
```
Because I was using another language inside my markdown file, everytime I wanted to write a new line, GitHub would automatically indent my writing. The result was that I would spend considerable time trying to start my line in the right place. 
As a remedy, I returned to Stackoverflow and found a way to build an index exclusively with the Markdown language. 

[Markdown to create pages and table of contents](https://stackoverflow.com/questions/11948245/markdown-to-create-pages-and-table-of-contents)	