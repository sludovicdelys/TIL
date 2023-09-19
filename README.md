# Today I Learned : Exploring The Programming World

👋 Hi, I'm Sabrina, a junior web developer with a fresh software engineering license. Welcome to my GitHub repository, where I document my ongoing quest to master the art of programming and web development.

In this space, you'll find my insights, challenges, and accomplishments as I dive into diverse topics, from algorithms and Typescript to React, HTML, and Sass. I'm passionate about learning and eager to share my journey with you.

I've organized the content into an index, making it easy for you to navigate and explore specific topics that interest you. Feel free to join me on this adventure and follow along as I embrace continuous learning.

Happy coding! 🚀

# Index
1. [React](#react)
	1. [Intro to React with a Tutorial](#intro-to-react-with-a-tutorial)
		1. [Overview](#overview)
			1. [JSX](#jsx)
		2. [Lifting State Up](#lifting-state-up)
		3. [Immutability](#immutability)
		4. [Function Components](#function-components)
		5. [Taking Turns](#taking-turns)
			1. [Question Mark Operator in JavaScript](#question-mark-operator-in-javascript)
2. [CodeWars](#codewars)
	1. [String Functions and Operators](#string-functions-and-operators)
	2. [Set](#set)
3. [TestDome](#testdome)
	1. [HTML/CSS](#html-and-css)
4. [GitHub](#github)
	1. [Markdown](#markdown)
5. [Opquast](#opquast)
	1. [Contents](#contents)
6. [AlgoExpert](#algoexpert)
   	1. [Arrays](#arrays)
7. [Advanced React and TypeScript Project](#advanced-react-and-typescript-project)
   	1. [Set up with Vite](#set-up-with-vite)
8. [Ofilms a Laravel Project](#ofilms-a-laravel-project)
	1. [Database - Debug](#database-debug)
 	2. [Executing Migrations](#executing-migrations)
  	3. [Writing Factories](#writing-factories)
  	4. [Writing Seeders](#writing-seeders)
 	5. [Api BetaSeries Service - Debug](#api-betaseries-service-debug)


## React

### [Intro to React with a Tutorial](https://reactjs.org/tutorial/tutorial.html)

  _04 June 2021_ 

#### Overview

A React component takes in parameters called ```props``` (refers to properties) and returns a hierarchy of views to display by using the ```render``` method. 

The ```render``` method displays a lightweight description of what you want to see on the screen. It returns a **React element**. 

##### JSX

[JSX](https://reactjs.org/docs/introducing-jsx.html) is a syntax extension to JavaScript, mostly used in React to describe what the UI should look like. You can put any valid JavaScript expression inside JSX by wrapping it in curly braces. 

Example: 
```
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called ```components``` that contain both:
  * [seperation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns): a design principle for separating a computer program into distinct sections such that each section addresses a separate concern. 
  * concern: a set of information that affects the code of a computer program.

Each React element is a JavaScript object that you can store in a variable or pass around in your program.

Passing props is how information flows in React apps, from parents to children.

Notice how with ```onClick={() => alert('click')}```, we’re passing a function as the ```onClick``` prop. React will only call this function after a click. Forgetting ```() =>``` and writing ```onClick={alert('click')}``` is a common mistake, and would fire the alert every time the component re-renders.

React components can 'remember things' by setting ```this.state``` in their constructors. ```this.state``` should be considered as private to a React component that it’s defined in. First we have to add a ```constructor``` to the class to initialize the state. All React component classes that have a constructor should start with a super(props) call.

When you call ```setState``` in a component, React automatically updates the child components inside of it too.

#### Lifting State Up 
 
**To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.**
  
To prevent JavaScript from breaking the code by inserting a semi-colon after ```return```, the example below uses parentheses. 
```
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
```
**The DOM ```<button>``` element’s onClick attribute has a special meaning to React because it is a built-in component. For custom components like Square, the naming is up to you. We could give any name to the Square’s ```onClick``` prop or Board’s ```handleClick``` method, and the code would work the same. In React, it’s conventional to use ```on[Event]``` names for props which represent events and ```handle[Event]``` for the methods which handle the events.**

_June 07 2021_

The ```[slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)``` method copies the values of an array into a new array. 

#### Immutability
				
_June 12 2021_

Two approaches to changing data: 
	- _mutate_ the data by directly changing the data's values
	- replace the data with a new copy which has the desires changes 

Examples: 

_Data Change with Mutation_

```
var player = {score: 1, name: 'Jeff'};
player.score = 2;
// Now player is {score: 2, name: 'Jeff'}
```


_Data Change with Mutation_

```
var player = {score: 1, name: 'Jeff'};
player.score = 2;
// Now player is {score: 2, name: 'Jeff'}
```

The result is the same, but by not mutating the data we get several advantages

***Complex Features Become Simple***

It allows us to undo and redo certain actions which is a common requirement in many applications 

***Detecting Changes***

It is difficult to detect changes in mutable objects, because it requires that we compare the current object with previous copies of itself. 
Detecting changes in immutable objects is easier. If the immutable object that is being referenced is different than the previous one, then the object has changed. 

***Determining When to Re-Render in React***

Immutability helps you build _pure components_ in React. Since immutability can determine if changes have been made, it helps to determine when a component requires re-rendering 

#### Function Components

Functions components are a simpler way to write components that only have a ```render``` method and don't have their own state. Meaning we don't have to define a class which extends ```React.component```, we can write a function that takes ```props``` as input and returns whatever needs to be rendered. 

#### Taking Turns 

In the example below, each time a player moves, ```xIsNext``` will be flipped to determine which players goes next and the game's state will be saved.

```
handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
```
##### Question Mark Operator in JavaScript

I came across a syntax I was not familiar with on this line: ```this.state.xIsNext ? 'X' : 'O'```. Upon further investigating the use of the question ```?``` operator in JavaScript I learned that there are three main uses for it: 

- 1. Ternary Operator
- 2. Optional Chaining 
- 3. Nullish Coalescing 

In the example above, the ternary operator (```?```) was used to add a condition on the left side (```this.state.xIsNext```), a value on the right side to return when the conditon is true (```'X'```). Then we add a colon ```:``` followed by a value to return if the condition is false (```'O'```). 

[Source: freeCodeCamp](https://www.freecodecamp.org/news/how-the-question-mark-works-in-javascript)


## CodeWars

### String Functions and Operators 

_01 June 2021_

Came accross two [PostgreSQL string functions](https://www.postgresql.org/docs/current/functions-string.html) while attempting the following challenge.

**Challenge description:**

Write a select statement that takes ```name``` from ```person``` table and return ```"Hello, <name> how are you doing today?"``` results in a column named ```greeting```.
  
** Two Solutions:**
  
1. ```format``` solution
```
SELECT format('Hello, %s how are you doing today?', name) AS greeting
FROM person;
``` 
2. ```concat``` solution 
```
  Select CONCAT('Hello, ',name ,' how are you doing today?') as greeting from person;
```
The first function concatenates the text representations of all arguments. 
The second function produces output formatted according to a format string. 
  
### Set
_31 May 2021_

While looking at the solutions of a CodeWars challenge, I came accross a JavaScript object I was not familiar with: the ```Set``` object. 

**Challenge description:**
  
Take 2 strings ```s1``` and ```s2``` including only letters from ```a``` to ```z```. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

**Examples**
```a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
```

**Solution**
```
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
```

Inside a [```Set```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Setobject) object, the collections of value must be unique, so **a value can only occur once**. 
Since strings are collections of characters, the value equality will be checked for both of those strings with the ```new Set(s1+s2)``` syntax inside the array. 
By using a Set object to make sure there are only unique values inside the combined string, the array now contains a set object instead of string values. 

**Further analysis**

A set looks like this inside the browser's console: 
```
var set = new Set('acbaxyz'); 
console.log(set); // Set(6) {"a", "c", "b", "x", "y", …}
```
Using the example above, I will store this set in an array and illustrate what is inside:
```
array = [set]; 
console.log(array); // [Set(6)]
```
It is only the Set itself that is stored inside the array, but we need to store the values of the set inside the array, which is the reason why the solution uses the [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) as syntactic sugar.
In this example, the spread syntax allows us to create a new array using the existing array. 
 
```array = [...set]; 
console.log(array); // (6) ["a", "c", "b", "x", "y", "z"] 
```
_What's happening?_ 

The Set is deconstructed with the syntactic sugar and the values inside the set are being re-assigned and stored as array values.

\* **Note:** we could also use Array.from() to achieve the same result\*

[Syntactic Sugar](https://sophiali.dev/syntactic-sugar-examples-javascript)

## TestDome 

### HTML and CSS
_21 May 2021_
1. In order to suggest a options in an HTML input field, you can use the ```<datalist>``` element. 

  Example from the [Advanced Form](https://www.testdome.com/questions/html-css/advanced-form/50741?visibility=1&skillId=3) question:
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
  [Auto-Complete Suggestions](https://levelup.gitconnected.com/easy-autocomplete-suggestions-for-inputs-with-the-html5-datalist-tag-22fcfc409235)

2. With the HTML ```<details>``` Element, we can create a disclosure widget in which the rest of the content is displayed only when it is toggled to an open state. The closed state displays only the content inside the ```<summary>``` element. 

  Example from the [Semantics](https://www.testdome.com/questions/html-css/semantics/50326?visibility=1&skillId=3) question:
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
  [HTML details Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
	
## GitHub

### Markdown 

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

## Opquast 

_04 Nov 2021_

_"When you hear about best practices at Opquast, it corresponds to a very precise definition. It’s not advice, it’s not a recommendation. It is a set of rules that are useful, universal, realistic, verifiable online, and agreed upon by the community."_ [Opquast-English](https://www.opquast.com/en/opquast-who-are-they-and-what-is-this-best-practices-checklist-all-about/)

You can learn more about Opquast and download the checklists via this link : https://www.opquast.com/en/making-the-web-better/

### Contents 

#### Rule n°1 - The website provides a way for users to find out about new content and services 

**Goal**
- Enable users to immediately identify new online content and services. 
- Improve the way content is taken into account by search engines and indexing tools. 

**Control**
Throughout the website, check that new content or services are accessible, for example, through an information channel within the website (RSS news feed, section such as "Website news", etc.) or an external channel accessible from the website (this must be from the home page) such as a Twitter account. 

#### Rule n°2 - Information about copyrights and reuse rights can be accessed from every page. 

**Goal**
- Inform the users of the conditions under which the content is published. 
- Inform the users of the conditions for copying and reusing the content. 

**Control**
In each of the pages evaluated, check that there is a full reference to the reproduction and reuse right or via a hyperlink pointing to a specific page. 

#### Rule n°3 - Each page's source code contains metadata that describe the content. 

**Goal**
- Enable search and indexing tools to extract information about the pages' content. 
- Improve the search results returned to users. 
- Improve the way content is taken into account by search engines and indexing tools

**Control**
Inside the source code of each page that is examined: 
- Check the presence of a tag `<meta name="description" content="" />
- Check that the text of this tag describe effectiveley, in a specific manner or more generic, the content of the page.

## AlgoExpert

_09 Aug 2023_

I have started practicing my algorithm solving skills, and I am currently working on arrays which have been proven to be quite mentally taxing although I am only on the easy section of the website. I have been looking at the solutions every time, and asking ChatGPT (This is not a very eco friendly learning practice 😣) to explain bits of code I do not understand. 

I'll be keeping a record of the algorithms I come accross for future reference and to be able to reflect on them. 

### Arrays 

#### [Two Number Sum](https://www.algoexpert.io/questions/two-number-sum)

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array. 

Note that the target sum has to be obtained by summming two different integers in the array; you can't add a single integer to itself in order to obtain the target sum. 

You can assume that there will be at most one pair of number summing up to the target sum. 

**Solution** : 
```
function twoNumberSum(array, targetSum) {
  const seen = {};

  for (const num of array) {
    const complement = targetSum - num; 

    if (complement in seen) {
      return [num, complement];
    } else {
      seen[num] = true;
    }
  }
    return [];
}
```

#### [Validate Subsequence](https://www.algoexpert.io/questions/validate-subsequence)

Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one. 

A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers ``` [1, 3, 4] ``` form a subsequence of the array ``` [1, 2, 3, 4] ``` and so do the numbers ``` [2, 4] ```. Note that a single number in an array and the array itself are both valid subsequences of the array. 

**Solution :**
```
function isValidSubsequence(array, sequence) {
  let arrayIndex = 0; 
  let sequenceIndex = 0; 

  while (arrayIndex < array.length && sequenceIndex < sequence.length) {
    if (array[arrayIndex] === sequence[sequenceIndex]) {
      sequenceIndex++;
    }  
    arrayIndex++;
  }
  return sequenceIndex === sequence.length;
}
```

#### [Sorted Squared Array](https://www.algoexpert.io/questions/sorted-squared-array)

Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order. 

**Solution : **
```
function sortedSquaredArray(array) {
  const squaredArray = array.map(num => num * num);
  squaredArray.sort((a, b) => a - b);
  return squaredArray;
}
```

_14 Aug 2023_

There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. Teams compete in a round robing, where each team faces off against all other teams. Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team. In each competition, there's always one winnger and one loser; there are no ties. A team receives 3 points if it wins and 0 points if it loses. The winner of the tournament is th team that receives the most amount of points. 

Given an array of pairs representing teams that have competed against ech other, and an array containing the results of each competition, write a function that returns the winner of the tournament. The input arrays are named `competitions` and `results`, respectively. The `competitions` array has elements in the form of `[homeTeam, awayTeam]`, where each team is a string of at most 30 characters representing the name of the team. The `results` array contains information about the winner of each corresponding competition in the `competitions` array. Specifically, `results[i]` denotes the winner of `competitions[i]`, where a 1 in the `results` array means that the home team in the corresponding competition won and a 0 means that the team won. 

It's guaranteed that exactly one team will win the tournament and that each team will compete against all other teams exactly once. It's also guaranteed that the tournament will aways have at least two teams. 

**Sample Input : **

```
competitions = [
["HTML", "C#"],
["C#", "Python"],
["Python","HTML"],
]
results = [0, 0, 1]
```

**Solution : **
```
function tournamentWinner(competitions, results) {
  const teamPoints = {};

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    const winner = results[i] === 1 ? homeTeam : awayTeam; 

    if (!teamPoints[winner]) {
      teamPoints[winner] = 0; 
    }

    teamPoints[winner] += 3;
  }
  
  let winnerTeam = '';
  let maxPoints = 0; 

  for (let team in teamPoints) {
    if (teamPoints[team] > maxPoints) {
    maxPoints = teamPoints[team];
    winnerTeam = team;
  }
}
  return winnerTeam;
}
```


## Advanced React and TypeScript Project

_09 Aug 2023_

I've allocated in my programming daily practice time to learn Typescript. I have chosen to do a project that I found on Web Dev Simplified Youtube's channel for this purpose. 

### Set up with [Vite](https://vitejs.dev/guide/why.html) 

Vite.js aims to solve two main problems : 

1. **Faster Development and Hot Module Replacement (HMR)** : It takes advantage of the native support for ECMAScript (ES) modules that are native to modern web browsers. It leads to lightning-fast HMR which helps build our web projects more quickly, because your code changes show up in the browser immediately without full rebuilds.
2. **No Bundling During Development** : It doesnt pack all your code together while you're working, it serves individual modules as seperate files during developement. It means that our project updates faster as it only updates what we change, not everything.
3. **Quicker Updates** : When you make a small change in your code, it updates just the part in the browser without refreshin the whole page. It speeds up our work and keeps the flow smooth.
4. **Optimized Production Builds** : It ensures that the production builds generated are finely tuned to performance by utilizing the native capabilities of modern broswers (such as ES modules) and structuring the code and assets so that they are as efficient as possible in terms of size and performance.
5. **Simplified Setup** : User-friendly approach to configuration, which saves developers time and effort while setting up their projects. 
6. **Framework Integration** : Offers Vue.js integration as the framework was initially developed alongside it. It enhences the development experience for Vue projects. 


Why not Webpack ? : 

The choice between Vite.js and Webpack depends on whether you prioritize a quicker development experience or highly customizable build process for complex projects with diverse assets. In the context of our Typescript training it was more beneficial to choose Vite.js over Webpack. 

8. [Ofilms a Laravel Project](#ofilms-a-laravel-project)
	1. [Database Debug](#database-debug)
## Ofilms a Laravel Project

### Database Debug

_21 Aug 2023_

⏰ Time spent problem solving : 1h 22mn

**Context of project** : 
1. movie and series project - O’clock 
2. Task : Run the project and display site index on browser
3. Route : `http://127.0.0.1:8080/movies`
4. Task : Set up a database locally 
5. Task : Run migrations to create tables in my database `laravel`

**Context of error** : 
1. I create the database with my `root` user.
2.  I create an `admin` user with a password
3. I assign this user to my database 
4. I edit the `.env` file to set up connection with my database locally

``` DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=admin
DB_PASSWORD=adminpassword
```

> Illuminate\Database\QueryException SQLSTATE[HY000] [1045] Access denied for user ‘admin’@‘localhost' (using password: YES) (SQL: select * from information_schema.tables where table_schema = laravel and table_name = migrations and table_type = 'BASE TABLE') at vendor/laravel/framework/src/Illuminate/Database/Connection.php:703

  ？What happens when I connect to my database CLI
  👉🏽 [Connecting To The Database CLI](https://laravel.com/docs/8.x/database#connecting-to-the-database-cli)

Le message d’erreur me permet de déterminer que le problème se situe au niveau de mon fichier `.env`

```
 mysql: [Warning] Using a password on the command line interface can be insecure.
ERROR 1045 (28000): Access denied for user 'admin'@'localhost' (using password: YES)

   Symfony\Component\Process\Exception\ProcessFailedException 

  The command "'mysql' '--host=127.0.0.1' '--port=3306' '--user=admin' '--password=adminpassword' '--default-character-set=utf8mb4' 'laravel'" failed.
```

🔖 [Access denied for user 'admin'@'localhost' - Stackoverflow](https://stackoverflow.com/questions/43169240/php-artisan-migrate-sqlstatehy000-1045-access-denied-for-user-laravell)

Alright, it seems like I cannot access my database with those variables:  `DB_USERNAME=admin` and `DB_PASSWORD=adminpassword ` 

Let’s change those variables and see what Laravel’s Artisan CLI tells me when I launch with : `php artisan serve --port=8080`🪄

  ```DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=thisismyverystrongmysqlpassword```

✨ It works ! Okay on to the next step
When I go to my page I get a new error in the browser from the PHP DebugBar.

> SQLSTATE[42502]: Base table or view not found: 1146 Table 'laravel.movies' doesn't exist (`SQL: select * from 'movies'`).

I created my database but they aren’t any tables.
Hint : `SQL: select * from 'movies'`

### Executing Migrations

It's time to execute migrations and populate my database 🪄
According to the Laravel documentation on [running migrations](https://laravel.com/docs/8.x/migrations#running-migrations) 🤓 I can use this command : `php artisan migrate`

I don't have any errors popping up, but I don't have any data in my tables ! 🗂 

I have written a few seeders with fake data, but I wanted to create some tests. 

### Writing Factories 

I wanted to insert dummy data in the database using Laravel's Factory and Seeder. I followed the [documentation](https://laravel.com/docs/5.7/database-testing#writing-factories) and [a tutorial from medium(https://medium.com/@shanisingh03/laravel-9-fake-data-testing-using-factory-seeder-f9fece67728b). 

I wrote a model factory and used Faker PHP Library to generate a bunch of random data for testing and seeding

🔖 https://laravel.com/docs/10.x/eloquent-factories#main-content

Once my factory is defined, I can use its global `factory` function in my seed files to generate model instances of user. 

I used the PHP Artisan's Laravel Tinker in order to interact with my database on the commandline. I ran the factory below and specified its `count` record in order to generate five users. 

### Writing Seeders

Next, I generated a seeder for my testcase : `php artisan make:seed TestUserSeeder` and included the factory run inside its file. 

```
class TestUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->count(5)->create();
    }
}
```

I populate my database with mock users' data by executing the seeder : `php artisan db:seed --class=TestUserSeeder`.
I can attest that the test has worked successfuly because each of my user's password has been hashed. 

### Api BetaSeries Service Debug

>Only logged users can access the insert route for movies and series 

When I try to search a new TV show, so that I can add it to my list I find there's a litte mishap 🐞

> Undefined array key "shows"

The PHPDebug Bar tells me that the key named 'shows' doesn't exist inside my `$serieAPIResult` array. 

```
return view('serie.searchAPI', [
	'results' => $serieAPIResult['shows']
]);

```

`$serieAPIResult` should have data that we received as a response to our call to the BetaSeries API. 

```
//Call to BetaSeries API using a GET method from Laravel's HTTP Facade.
        $apiResponse = Http::get($this->urlBetaserie . "/shows/display", [
            'key' => env('BETASERIES_API_KEY'),
            'id' => $serieID
        ]);
```

The culprit was the environment variable that stores the BetaSeries API key was missing ! Oops 🙈

Once I made sure that I was receiving data from the API, I proceeded to replace the Bulma styling with Bootstrap styling. 
Everything seemed to work fine but when I returned on the import page and submitted my search nothing appeared on the page. 

I also did not have a single error on my consoles. Catastrophe ! 

So I proceeded to remove my Bootstrap styling and get the code back to its former state to see if it still worked with Bulma's classes. 

```
<form action="">
    <div class="field">
        <label class="label">Nom de la série</label>
        <div class="control">
            <input class="input" type="text" name="name" placeholder="Nom de la série" autocomplete="off">
        </div>
    </div>
    <div class="field">
        <div class="control">
            <button class="button is-link">Rechercher</button>
        </div>
    </div>
</form>
```

To my surprise, it did work. So I thought that I must have made a mistake with Bootstrap's form validation and its components. 

After much inspection, I found that the problem was that I did not give the right name attribute for my `<input>` element. 
My application was expecting a name attribute with a "name" value for the `<input>` element as my function `getSeriesByTitle` expects a name variable. 

```
public static function getSeriesByTitle(string $name)
    {
        // Si on en est là, le contenu de la recherche est validé et on peut faire l'appel à l'API
        // en utilisant la facade Http de Laravel : https://laravel.com/docs/8.x/http-client
        $apiResponse = Http::get('https://api.betaseries.com/search/shows', [
            'key' => env('BETASERIES_API_KEY'),
            'text' => $name
        ]);
        // On extrait les données de la réponse
        return $apiResponse->json();
    }
```

To correct it, I simply had to replace the value of the name attribute for my `<input>` element like so: `<input class="form-control" type="text" name="name" placeholder="Nom de la série" autocomplete="off" required>`







