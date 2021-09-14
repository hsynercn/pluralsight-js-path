# pluralsight-js-path
## 1. JavaScript Syntax and Operators
### 1.1. Course Overview

Major topics
- Basics of JavaScript syntax and operators
- Switch statement 
- For/in and for/of
- Math, comprasion, and logical operators
- Truthy and falsy
- Exception handling
- Data types
- 'this' keyword
- Spread operator

Modules
- All Abount the Switch Statement
    - Simplify multiple if else statements
    - Block level scope issue/resolution
- The Difference Between for/in and for/of
    - Using the appropriate for loop
    - Break, continue and labels
- Using MAth and Comprasion Operators
    - Demos od operators
    - 'use strict'
- Working with Logical Operators and Short-circuit Evaluation
    - Truthy and falsy
    - How short-circuit evaluation works
- Utilizing JavaScript Exception Handling
    - try...catch
    - finally
- How to Determine JavaScript Variable Data Types
    - typeof operator
    - instance of operator
- Understanding 'this' in JavaScript
    - Use of 'this' in different scopes
    - Call() and apply() methods
- Using the Powerful Spread Operator
    - Maipulating arrays
    - Passing arrays to functions

### 1.2. All About the Switch Statement

Switch  
Use instead of multiple if else statements. We use 'case' for cases, 'break' to exit cases, 'default' for no match. 

```js
function simpleSwitch() {
    let id = 2;
    switch(id) {
        case 1:
            console.log("Product 1");
            break;
        case 2:
            console.log("Product 2");
            break;
        default://default can be at anywhere, for a better practice we put it at the end
            console.log("Product none");
            break;
    }
}
```

Multiple case statements

```js
function simpleSwitch() {
    let id = 2;
    switch(id) {
        case 1:
        case 3:
        case 4:
            console.log("Product 1 or 3 or 4");
            break;
        case 2:
        case 6:
            console.log("Product 2 or 6");
            break;
        default:
            console.log("Product none");
            break;
    }
}
```

If we forget to put break.
```js
function simpleSwitch() {
    let id = 1;
    switch(id) {
        case 1:
            console.log("This is 1");
        case 2:
            console.log("This is 2");
        break;

    }
}
```