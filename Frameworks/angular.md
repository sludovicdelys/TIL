# Angular JS

## My first App
```javascript
// files/js/app.js
var app = angular.module("myApp", []);
```

```html
// files/index.html
<!doctype html>
<html>
  <head>
      <link href="https://content.codecademy.com/projects/bootstrap.min.css" rel="stylesheet" />
    <link href='https://fonts.googleapis.com/css?family=Roboto:500,300,700,400' rel='stylesheet' type='text/css'>
    <link href="css/main.css" rel="stylesheet" />

    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js"></script>
  </head>
  <body ng-app="myApp">
    <div class="header">
      <div class="container">
        <h1>Book End</h1>
      </div>
    </div>

    <div class="main" ng-controller="MainController">
      <div class="container">

        <h1>{{ title }}</h1>
        <h2>{{ promo }}</h2>

        <div class="col-md-6">
          <div class="thumbnail">
            <img src="img/the-book-of-trees.jpg">
            <p class="title"> </p>
            <p class="price"> </p>
            <p class="date"> </p>
          </div>
        </div>

      </div>
    </div>

    <div class="footer">
      <div class="container">
        <h2>Available for iPhone and Android.</h2>
        <img src="https://content.codecademy.com/projects/shutterbugg/app-store.png" width="120px" />
        <img src="https://content.codecademy.com/projects/shutterbugg/google-play.png" width="110px" />
      </div>
    </div>


    <!-- Modules -->
    <script src="js/app.js"></script>

    <!-- Controllers -->
    <script src="js/controllers/MainController.js"></script>
  </body>
</html>
```

```javascript
// files/js/controllers/MainController.js
app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'My 2024 Book List';
  $scope.promo = 'For one like, I share one quote I loved';
}]);
```

1. In **app.js**, we created a new module named `myApp`. A module contains the different components of an AngularJS app.
2. Then, in **index.html** we added `<body ng-app="myApp">`. The `ng-app` is called a **directive**. It tells AngularJS that the `myApp` module will live within the `<body>` element, termed the application’s scope. In other words, we used the `ng-app` directive to define the application scope.
3. In **MainController.js** we created a new controller named `MainController`. A controller manages the app’s data. Here we use the property title to store a string, and attach it to `$scope`.
4. Then, in **index.html**, we added `<div class="main" ng-controller="MainController">`. Like `ng-app`, `ng-controller` is a **directive** that defines the controller scope. This means that properties attached to `$scope` in `MainController` become available to use within `<div class="main">`.
5. Inside `<div class="main">` we accessed `$scope.title` using `{{ title }}`. This is called an **expression**. Expressions are used to display values on the page.
6. The value of title showed up when we viewed the app in the browser.

### Workflow
So far this is our typical workflow when making an AngularJS app:

1. Create a module, and use `ng-app` in the view to define the application scope.
2. Create a controller, and use `ng-controller` in the view to define the controller scope.
3. Add data to `$scope` in the controller so they can be displayed with expressions in the view.

### Filters
```html
// files/index.html
<p class="price"> {{ product.price | currency }} </p>
```

In the example above, the product price changed from a number to a formatted currency. This is how it works : 

1. AngularJS gets the value of `product.price`.
2. It sends this number into the `currency` filter. The pipe symbol (`|`) takes the output on the left and “pipes” it to the right.
3. The filter outputs a formatted currency with the dollar sign and the correct decimal places.

AngularJS comes with [a few more built-in filters](https://docs.angularjs.org/api/ng/filter).

### ng-repeat 
Quick review: 
* A **module** contains the different components of an AngularJS app
* A **controller** manages the app’s data
* An **expression** displays values on the page
* A **filter** formats the value of an expression

```javascript
// files/js/controllers/MainController.js
$scope.products = [
  {
    name: "The Book of Trees",
    price: 19,
    pubdate: new Date("2014", "03", "08"),
    cover: "img/the-book-of-trees.jpg",
  },
  {
    name: "Program or be Programmed",
    price: 8,
    pubdate: new Date("2013", "08", "01"),
    cover: "img/program-or-be-programmed.jpg",
  },
];
```

```html
// files/index.html
 <div ng-repeat="product in products" class="col-md-6">
  <div class="thumbnail">
    <img src="img/the-book-of-trees.jpg" />
    <p class="title">{{ product.name }}</p>
    <p class="price">{{ product.price | currency }}</p>
    <p class="date">{{ product.pubdate | date }}</p>
  </div>
</div>
```

1. In the controller, we used `products` to store an array containing two objects.
2. Then in the view, we added `<div ng-repeat="product in products">`. Like `ng-app` and `ng-controller`, the `ng-repeat` is a directive. It loops through an array and displays each element. Here, the `ng-repeat` repeats all the HTML inside `<div class="col-md-6">` for each element in the products array.
In this way, `ng-repeat` shows both products in the `$scope.products` array. Instead of writing the same HTML twice as before, we just use `ng-repeat` to generate the HTML twice.

### Directives
Directives bind behavior to HTML elements. When the app runs, AngularJS walks through each HTML element looking for directives. 
When it finds one, AngularJS triggers that behavior (like attaching a scope or looping through an array).

### ng-click
```javascript
// files/js/controllers/MainController.js
$scope.plusOne = function (index) {
  $scope.products[index].likes += 1;
};
```

```html
// files/index.html
<div class="rating">
  <p class="likes" ng-click="plusOne($index)">{{ product.likes }}</p>
</div>
```

1. The `ng-click` is a directive. When `<p class="likes">` is clicked, `ng-click` tells AngularJS to run the `plusOne()` function in the controller.
2. The `plusOne()` function gets the index of the product that was clicked, and then adds one to that product’s likes property.

Notice that the `plusOne()` doesn’t interact with the view at all; it just updates the controller. Any change made to the controller shows up in the view.

### Generalizations
1. A user visits the AngularJS app.
2. The _view_ presents the app’s data through the use of _expressions_, _filters_, and _directives_. Directives bind new behavior to HTML elements.
3. A user clicks an element in the view. If the element has a directive, AngularJS runs the function.
4. The function in the _controller_ updates the state of the data.
5. The view automatically changes and displays the updated data. The page doesn’t need to reload at any point.

##  Directives

### Custom directives
```javascript
// files/js/directives/appInfo.js
app.directive('appInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/appInfo.html' 
  }; 
});
```

```html
// files/js/directives/appInfo.html
<img class="icon" ng-src="{{ info.icon }}"> 
<h2 class="title">{{ info.title }}</h2> 
<p class="developer">{{ info.developer }}</p> 
<p class="price">{{ info.price | currency }}</p> 
```

```html
// files/index.html
<div class="main" ng-controller="MainController">
  <div class="container">
     <div class="card">
      <app-info info="move"></app-info> 
    </div>

    <div class="card">
      <app-info info="shutterbugg"></app-info>
    </div>

    <div class="card">
      <app-info info="gameboard"></app-info>
    </div>
  </div>
</div>
```

First in **js/directives/appInfo.js**, we made a new directive. We used `app.directive` to create a new directive named 'appInfo'. It returns an object with three options:

1. `restrict` specifies how the directive will be used in the view. The `'E'` means it will be used as a new HTML element.
2. `scope` specifies that we will pass information into this directive through an attribute named `info`. The `=` tells the directive to look for an attribute named `info` in the `<app-info>` element, like this:
```html
<app-info info="shutterbugg"></app-info>
```
The data in `info` becomes available to use in the template given by `templateURL`.
3. `templateUrl` specifies the HTML to use in order to display the data in `scope.info`. Here we use the HTML in **js/directives/appInfo.html**.

Looking at **js/directives/appInfo.html**, we define the HTML to display details about an app, like its title and price. We use expressions and filters to display the data.
Then in **index.html** we use the new directive as the HTML element `<app-info>`. We pass in objects from the controller’s scope (`$scope.shutterbugg`) into the `<app-info>` element’s `info` attribute so that it displays.

Why is creating your own directives useful?

1. **Readability**. Directives let you write expressive HTML. Looking at index.html you can understand the app’s behavior just by reading the HTML.
2. **Reusability**. Directives let you create self-contained units of functionality. We could easily plug in this directive into another AngularJS app and avoid writing a lot of repetitive HTML.

### Built-in and Custom Directives
We can use Angular’s built-in directives together with custom directives to create more readable apps.
```javascript
// files/js/controllers/MainController.js
app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
	  { 
	    icon: 'img/move.jpg', 
	    title: 'MOVE', 
	    developer: 'MOVE, Inc.', 
	    price: 0.99 
	  }, 
	  { 
	    icon: 'img/shutterbugg.jpg', 
	    title: 'Shutterbugg', 
	    developer: 'Chico Dusty', 
	    price: 2.99 
	  },
	  {
	    icon: 'img/gameboard.jpg',
	    title: 'Gameboard',
	    developer: 'Armando P.',
	    price: 1.99
	  },
	  {
	    icon: 'img/forecast.jpg',
	    title: 'Forecast',
	    developer: 'Forecast',
	    price: 1.99
	  }
	];
}]);
```
```html
// files/index.html
<div class="main" ng-controller="MainController">
  <div class="container">
     <div class="card" ng-repeat="app in apps">
      <app-info info="app"></app-info>
    </div>
  </div>
</div>
```

### installApp
🍪 It’s possible to bake interactivity into directives.

```javascript
// files/js/directives/installApp.js
app.directive('installApp', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl:'js/directives/installApp.html'
    link: function(scope, element, attrs) { 
      scope.buttonText = "Install", 
      scope.installed = false, 

      scope.download = function() { 
        element.toggleClass('btn-active'); 
        if(scope.installed) { 
          scope.buttonText = "Install"; 
          scope.installed = false; 
        } else { 
          scope.buttonText = "Uninstall"; 
          scope.installed = true; 
        } 
      } 
    } 
  }
})
```

We used `app.directive` to create a new directive named 'installApp'.

* The directive contains the three options `restrict`, `scope`, and `templateUrl` that we saw before in the `'appInfo'` directive.
* It also contains a fourth option `link`. The `link` is used to create interactive directives that respond to user actions.

The link function takes three inputs:

1. `scope` refers to the directive’s scope. Any new properties attached to $scope will become available to use in the directive’s template.
2. `element` refers to the directive’s HTML element.
3. `attrs` contains the element’s attributes.
   
Inside the `link` function, there are two properties `buttonText` and `installed`, and the function `download()`. 

```javascript
//  files/js/directives/installApp.html
<button class="btn btn-active" ng-click="download()"> 
  {{ buttonText }} 
</button> 
```

The template uses Angular’s built-in `ng-click` directive. When the button is clicked, `ng-click` will tell AngularJS to run the `download()` function in the directive.

The `download()` function uses the `scope.installed` property to check if an app is installed. When an app is installed, `download()` does three things:

* toggles the `.btn-active` class
* changes the button text to “Uninstall”
* changes `scope.installed` to `true`

```html
// files/index.html
<div class="main" ng-controller="MainController">
  <div class="container">
     <div class="card" ng-repeat="app in apps">
      <app-info info="app"></app-info>
      <install-app></install-app>
    </div>
  </div>
</div>
```

### Generalizations
Directives are a powerful way to create self-contained, interactive components. Unlike jQuery which adds interactivity as a layer on top of HTML, AngularJS treats interactivity as a native component of HTML.
