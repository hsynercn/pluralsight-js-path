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





