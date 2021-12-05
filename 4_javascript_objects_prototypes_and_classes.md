# pluralsight-js-path
## 1. JavaScript Objects, Prototypes, and Classes
### 1.1. Course Overview

- Creating objects
- Object properties
- Prototypes
- JavaScript classes
- Built-in JavaScript objects

## 2. Creating JavaScript Objects

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

Object Method Declaration Shorthand

We can use this syntax inside of objects. We can't use this expression outside of objects.
```js
let person = {
    name: "billy",
    introduce() { console.log("My name is " + this.name); }
}
person.introduce(); //My name is billy
```

Inspecting Object Properties with Object.keys and for...in

```js
let person = {
    firstName: "Billy",
    lastName: "Rush",
    age: 33,
    isAdult() { return age >= 18; }
}
console.log(Object.keys(person)); //['firstName', 'lastName', 'age', 'isAdult']

for(let propertyName in person) {
    console.log(propertyName); //same variables
}
```

JavaScript Equality Operators

| Operator | Explanation|
| :---: | :---: |
| == | Should be avoided. |
| === | Most common. Should be used in almost all cases. |
| Object.is() | Less common, similar to === with mathematical differences. |

Equality Operator: ==
- Not type safe
- True cases:
    - "42" == 42
    - 0 == false
    - null == undefined
    - "" == 0
    - [1, 2] == "1, 2"

Equality Operator: === vs Object.is()
| === | Object.is()|
| :---: | :---: |
| Type-safe | Type-safe |
| Convenient | Verbose |
| Nan is not equal to Nan | Nan equals Nan |
| +0 equals -0 | +0 does not equal -0 |

Object Equality

When we compare objects we do not compare contents of the objects. We compare **memory addresses** of the objects. Thus even identical variable within different objects does not give equality.

Primitive types like string, JavaScript compares their values, for objects it compares memory addresses.

Object Assign and Immutability

We can create a shallow object copy with Object.assign.

```js
let person1 = {
    firstName: "Billy",
    lastName: "Rush",
    age: 33,
    isAdult() { return age >= 18; }
}

let person2 = {};
Object.assign(person2, person1);
person1 === person2; //false
```

Merge two objects with Object.assign. We can prevent mutation with a left empty object. 

```js
let person = {
    firstName: "Billy",
    lastName: "Rush",
    age: 33,
    isAdult() { return age >= 18; }
}
let health = {
    height: 68,
    weight: 11
};
let newObject = Object.assign({} , person, health); //adds height and weight to a new object
```

Using **Constructor Functions** to Create Objects

new keyword creates a new empty JavaScript object. This keyword refers to this new object. 
```js
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
let person = new Person("Rush", "More");
```

This type of functions are commonly called constructor functions.

Using Object.create()

Object literals and constructor functions use Object.create to create objects. This is a very verbose method.

```js
let person = Object.create(
    Object.prototype,{
        firstName: {value: "Jim", enumerable:true, writable:true, configurable:true},
        lastName: {value: "Jim", enumerable:true, writable:true, configurable:true},
    }
)
```

## 2. JavaScript Object Properties