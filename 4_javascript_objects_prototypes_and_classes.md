# pluralsight-js-path
## 1. JavaScript Objects, Prototypes, and Classes
### 1.1. Course Overview

- Creating objects
- Object properties
- Prototypes
- JavaScript classes
- Built-in JavaScript objects

## 1. Creating JavaScript Objects

Content:
- We can create object with:
    - Object literals
    - Constructor functions
    - Classes
- Object equality
- Merging properties
- Immutability

git clone https://github.com/jmcooper/javascript-opc.git

Using Object Literals to Create JavaScript Objects

Easiest way to create object in JavaScript is object literals.
```js
//object literal
let person = {
    name: "test",
    id: 1
}
console.log(person.name); //test
```
Dynamic Nature of JavaScript

JavaScript is a dynamically typed language, so we don't get static type checking. We can change objects.

```js
let person = {
    name: "test",
    id: 1
}
person.age = 33; // we can add new properties
console.log(person.age); //33
```

Adding Functions to Objects

```js
let person = {
    name: "test",
    id: 1,
    age: 17,
    isAdult: function() { return person.age >= 18; }
}
console.log(person.isAdult()); //false
```

Object Literal Property Shorthand

We can use parameters for object initialization.
```js
function registerUser(firstName, lastName) {
    let person = {
        firstName: firstName,
        lastName: lastName
    };
    console.log(JSON.stringify(person));
}
```

For shorthand syntax we can use this implementation.

```js
function registerUser(firstName, lastName) {
    let person = {
        firstName,
        lastName
    };
    console.log(JSON.stringify(person));
}
```