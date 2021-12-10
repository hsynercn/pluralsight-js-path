# pluralsight-js-path
## 1. JavaScript: Functions
### 1.1. Course Overview

- Functions and scope
- Arrow functions
- Call, apply, and bind methods
- Rest parameters 

## 2. Writing Modular Code with Arrow Functions

- Function
- Arguments
- Functions and Block Scope
- Immediately Invoked Functions Expression (IIFE)
- Closures

Setting up the Environment

Install VS Code.

Introducing Functions

All functions return a value.
```js
function hello(name) {
    console.log("Hello " + name);
}
let value = hello("Bill");
console.log(value); //undefined
```

```js
            //parameters
function sum(num1, num2) {
    return num1 + num2;
}
            //arguments    
let result = sum(2, 3);
console.log(result); //5
```

There may be times when we need to invoke a function with an indefinite number of arguments. The arguments object allows us to represent them as an array-like object.

```js
function printAll() {
    for(let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
printAll(1, 2, 3, 4, 5); //1 2 3 4 5
```

If we don't supply function parameters when calling these variable take undefined value.

```js
function sum(a, b) {
    return a + b;
}
console.log(sum(2)); //NaN because 2 + undefined is NaN
```

Understanding Function Scope

Out of scope.
```js
function hello(name) {
    let message = "Hello"
    console.log(message);
}
console.log(message); //Uncaught ReferenceError: message is not defined
```

In a nested case.

```js
function hello() {
    let message = "Hello";
    let sayHi = function hi() {
        console.log(message);
    }
}
hello(); //Hello
```

```js
function hello() {
    let message = "Hello";
    let sayHi = function hi() {
        let message = "Hi"
        console.log(message);
    }
}
hello(); //Hi
```

Understanding Block Scope

'var' declarations do not have block scope. It is always a good practice to use let instead of var.

```js
let message = 'Hello';
if(true) {
    var count = 1;
    let message = 'Inside a block';
    console.log(message); //Inside a block
}
console.log(message); //Hello
console.log(count); //1
```

Immediately Invoked Function Expression(IIFE)

The IIFE pattern lets us group our code and have it worked in isolation, independent of any code.

**Function Expression**: Define a function and assign it to a variable.

**Immediately Invoked**: Invoking the function right away where it's defined.

```js
(function() {
    console.log("Hello");
})();
```

Closures

```js
let greeting = (function() {
    let message = "Hello";
    let getMessage = function() {
        return message;
    };
    return {
        getMessage: getMessage,
    }
})();

console.log(greeting.getMessage()); //Hello
```

**Summary**
- Function
- Arguments
- Block Scope
- Immediately Invoked function Expression
- Closures

Improving Readability With Arrow Functions

- Arrow Functions - What and why
- Defining Arrow Functions
- Behavior of **this** keyword

Introducing Arrow Functions

Introduced in ES6. Simpler way to write function expression.

Why to use them?
- shorter syntax
- this derives its value from enclosing lexical scope

Side effects
- behavior of this keyword
- No arguments object

Writing Arrow Function

Function declaration.
```js
let hello = function() {
    return "Hello World!"
}
let message = hello();
console.log(message); //Hello World!
```
Arrow function.
```js
let hello = () => {
    return "Hello World!";
}
//same function
let sameHello = () => "Hello World!";
let message = hello();
console.log(message); //Hello World!
```

Arrow function with a variable. If we have one input parameter parentheses are optional.

```js
let hello = name => "Hello " + name + "!";
console.log(hello("Bill")) //Hello Bill!
```

```js
let hello = (firstName, lastName) => "Hello " + firstName + " " + lastName;
console.log(hello("Bob","Marley")); //Hello Bob Marley
```

Behavior of this Keyword

**this**: Always refers to the owner of the function we are executing.

Unlike regular functions, arrow functions do not have their own this value. Moreover, the value of this is always inherited from the enclosing scope.

ES6 arrow functions can’t be bound to a **this*** keyword, so it will lexically go up a scope, and use the value of this in the scope in which it was defined.

```js
let message = {
    name: "John",
    regularFunction: function() {
        console.log(this);
        console.log("Hello " + this.name);
    },
    arrowFunction: () => console.log("Hi " + this.name)
}
message.regularFunction(); //Hello John
message.arrowFunction(); //Hi, because this.name is undefined
```

**Summary**
- Arrow functions
- Defining arrow functions
- Behavior of this keyword

Changing Function context and Built-in Functions

- Understanding context
- call and apply
- bind
- Built-in functions
    - eval
    - parseInt
    - parseFloat
    - escape
    - unescape

Understanding Function Context

