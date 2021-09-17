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
    switch (id) {
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
    switch (id) {
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

If we forget to put break execution continues.
```js
function simpleSwitch() {
    let id = 1;
    switch (id) {
        case 1:
            console.log("This is 1");
        case 2:
            console.log("This is 2");
        break;

    }
}
```

Switch uses strict comprasion, type and value must match.
```js
let id = "2";
//we get unknown product, type does not match
switch (id) {
    case 1:
        console.log("prouct 1");
        break;
    case 2:
        console.log("product 2");
        break;
    default:
        console.log("Unknown product");
        break;
}
```

Block Level Issues with Switch Statements
```js
//we get identifier already been declared error from this implementation
let id = 2;
switch (id) {
    case 1:
        let message = "one";
        console.log(message);
        break;
    case 2:
        let message = "two";
        console.log(message);
        break;
}
```

To fix scope problem we can use local scope.
```js
//we get identifier already been declared error from this implementation
let id = 2;
switch (id) {
    case 1: {
        let message = "one";
        console.log(message);
        break;
    }
    case 2: {
        let message = "two";
        console.log(message);
        break;
    }
}
```

### 1.3. The Difference Between for/in and for/of

Module content;
- For/in statement
- For/of statement
- Break
- Continue
- Labeled statements

For/in Statement  
Iterates over elements of object.  
Returns key (property/method) name.
object[key] returns value.
```js
let product = {
    "id": 1,
    "name": "Tom",
    "color": "black"
};
//in keyword grabs all property and method names from an object
for(const key in product) {
    console.log("key:'" + key + "'=" + product[key]);
}
```
For/of Statement  
Iterates over values in array, string, etc.
Returns object for each iteration.
```js
let objects = [
    {"name": "a"},
    {"name": "b"},
    {"name": "c"},
    {"name": "d"}
];
for(const item of objects) {
    console.log(JSON.stringfy(item));
}

let iterateStrng = "Hello World";
for(const char of iterateStrng) {
    console.log(char)// prints H,e,l,l,o, ,W,o,r,l,d
}
```

Difference for...in and for...of   
Both for...in and for...of are looping constructs which are used to iterate over data structures. The only difference between them is the entities they iterate over:
- for...in iterates over all enumerable property keys of an object
- for...of iterates over the values of an iterable object like arrays, strings, and node lists.

If we use for...of with a non-iterable object we get 'object is not iterable' error

```js
let arr = ["val1", "val2", "val3"];
arr.addedProp = "addedProp";
for(const elKey in arr) {
    console.log(elKey);
}
// prints 1, 2, 3, addedProp

for(const elValue of arr) {
    console.log(elValue);
}
//prints val1, val2, val3
```

Break and Continue  
Break: Leave a loop early
Continue: Next iteration

```js
let array = [
    {"id": 1},
    {"id": 2},
    {"id": 3},
    {"id": 4}
];
for(const item of array) {
    if(item.id > 2 ) {
        break;
    }
    console.log(item.id);// prints only 1, 2 it breaks out of the loop 
}

for(const item of array) {
    if(item.id === 3 ) {
        continue;
    }
    console.log(item.id);// prints 1, 2, 4 it continues the loop with next element
}
```

Labelled Statement  
Define a location to "goto"
Don't use this shit

```js
//even:  <- this is a label
even:
for(let index = 1; index <= 10; index++) {
    if(index % 2 == 1) {
        continue even;
    }
    console.log(inde);// prints even number
}
```

### 1.4. Using Math and Comparison Operators

Module content:
- JavaScript operators
    - Math
    - Assignment
    - Comparison
- Plus sign with strings and numbers
- 'use strict' functionality

Mathematical Operators

| Operator | Example |
| :---: | :---: |
| Addition(+) | 2 + 3 |
| Subtraction(-) | 4 - 2 |
| Multiplication(+) | 2 * 2 |
| Division(/) | 8 / 4 |
| Exponentiation(**) | 2 ** 2 |
| Modulus(%) | 9 % 4 |
| Increment(++) | index++ |
| Decrement(--) | index++ |

```js
let price = 12;
console.log(price + 10);//22
console.log(price - 10);//2
console.log(price * 10);//120
console.log(price / 10);//1.2
console.log(price ** 2);//144
console.log(price % 10);//2

price = 10;
console.log(++price);//11
console.log(price++);//11
console.log(--price);//11
console.log(price--);//11
```

Plus sign with strings and numbers  
Strings: Concatenation
Numbers: Addition 

```js
//if one is a string -> concatenation
let result = 100 + "200";// "100200"
//we can convert it to a numeric
let result2 = 100 + (+"200");// 300
```

Assignment Operators

| Operator | Example |
| :---: | :---: |
| Equal(=) | price = 10 |
| Addition(+=) | price += 3 |
| Subtraction(-=) | price -= 2 |
| Multiplication(*=) | price *= 2 |
| Division(/=) | price /= 4 |
| Exponentiation(**=) | price **= 2 |
| Modulus(%=) | price %= 4 |

```js
let price = 10;
price += 20;//30
price -= 20;//10
price *= 10;//100
price /= 10;//10
price **= 2;//100
price %= 10;//0
```

Comparison Operators

| Operator | Example |
| :---: | :---: |
| Less than(<) | price < 10 |
| Less than or equal to(<=) | price <= 3 |
| Greater than(>) | price > 1 |
| Greater than or equal to (>=) | price >= 1 |
| Equal in value(==) | price == "10" |
| Equal in value and type(===) | price === "10" |
| Not equal in value(!=) | price != "10" |
| Not equal in value and type(!==) | price !== "10" |

```js
10 == 10;//true
10 === 10;//true
10 == "10";//true
10 === "10";//false
```

Ternary operator
```js
let mssg = 10 > 9 ? "greater" : "smaller";
```

'use strict'  
Ignored by older browsers.  
Forces all variable to be declared.  
Mistyped variable names are created globally scoped.  

```js
'use strict';
//value = 10;//we can't use this
let value = 10;
//with strict mode

//can't use reserved words as variables
let eval = 10;

//can't delete a variable
delete value;

//can't delete a function
delete useStrictSample;
```

### 1.5. Working with Logical Operators and Short-circuit Evaluation

Module Content

- True and false values
    - Known as 'truthy' and 'falsy'
- Logical operators
    - And, or, not
- Short circuiting

| True | False |
| :---: | :---: |
| "Hey", 10, Boolean true | null, undefined, NaN, Boolean false |

```js
let price = 200;
let color = "red";

//price is greater than zero
if(price) {
    console.log("price is > 0");
}

//color has characters
if(color) {
    console.log("color has a value");
}

//these cases results false in if
color = null;
color = "";
color = undefined;
let value2;
value2 = 100 / "test";

```

Logical Operators

| Operator | Exmple |
| :---: | :---: |
| And(&&) | price > 10 && price < 100 |
| Or(||) | price <= 10 || price >= 100 |
| Not(!) | !(price > 10) |

```js
let price = 50;
price > 10 && price < 100;//true
price > 10 || price > 100;//true
!(price > 100);//true
```

Short Circuiting

Optimzation for logical expressions  
Bypassed subsequent expressions in && or || based truthy or falsy

```js
//does not call second function
let result = getFalse() && getTrue(); 

//does not call second function
let result2 = getTrue() || getFalse(); 

function getTrue() {
    return true;
}
function getFalse() {
    return false;
}
```

### 1.6. Utilizing JavaScript Exception Handling

Module content:
- Handling exceptions
- Throw a custom exception
- Check for type of error

```js
try {
    //some code that could fail
} catch (error) {
    //do something with error
} finally {
    //thes code always runs
}
```

```js
let result;
try {
    result = x / 10;
    console.log(result);
} catch (error) {
    console.log(error.message);//x is not defined
} finally {
    console.log("finally block");
}
```

Throw

Can throw your own custom error
Create an object with at least two properties "message" and "name"

```js
try{
    throwsSomeError();
} catch (error) {
    console.log(error.message + " - " + error.name);
}

function throwsSomeError() {
    let result;
    try{
        result = x / 10;
    } catch (error) {
        throw{
            "message": "This is my exception",
            "name": "Custom exception"
        }
    }
}
```

Detect the Error Type

Builtin error types:
- ReferenceError
- RangeError
- TypeError
- URIError
- SyntaxError
- EvalError < older code

```js
function handleError(error) {
    switch (error.name) {
        case "ReferenceError":
            console.log("ReferenceError");
            break;
        case "RangeError":
            console.log("RangeError");
            break;
        case "TypeError":
            console.log("TypeError");
            break;
        case "URIError":
            console.log("URIError");
            break;
        case "SyntaxError":
            console.log("SyntaxError");
            break;
        case "EvalError":
            console.log("EvalError");
            break;
        default:
            console.log("Default");
            break;
    }
}
```

Summary
- Always add try...catch around risky code
- Use fnally block if required
- Throw custom error to communicate specific info
- Change how you handle errors based on the type of error


### 1.7. How to Determine JavaScript Variable Data Types


Module content:
- Different data types
    - Primitives 
    - Objects
- How to determine data types
    - typeof operator
    - constructor property
    - instanceof operator

Primitive Data Types

| Data type | Description |
| :---: | :---: |
| boolean | true or false |
| undefined | no value |
| number | integers, decimals, float. etc. |
| string | a series (array) of characters |

Object Data Types
| Data type | Description |
| :---: | :---: |
| new Array | A collection of values |
| new Error | Contains a name and an error message |
| new Function | A block of code |
| new Object | A wrapper around and type |
| new RegExp | A regular expresion |
| new Boolean | An objects that contains true or false |
| new Number | An object that contains a numeric value |
| new String | An object that contains a char or chars |

Better use primitive boolean, number, and string. Object versions are costly.