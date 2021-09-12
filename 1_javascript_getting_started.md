# pluralsight-js-path
## 1. JavaScript: Getting Started
### 1.1. Course Overview

Applications:
 - Web Pages
 - Business Apps
 - Utility Apps
 - Games

Unity engine supports JS. 
TypeScript is popular with business apps.
Apache Cordova for smart phones and tablets.
Electron for native Windows and macOS native apps.
NodeJS for backend services.

### 1.2. Introduction to JavaScript

Starting:  
Install git  
Install npm  
Install vs code  

In vs code ctrl+' opens the terminal

Test commands:  
git --version  
npm --version  
code  

Init project commands:  
git clone https://github.com/pluralsight/web-dev-starter.git  
cd web-dev-starter  
code .  
npm install(for better practice run from cmd not from vs code terminal)  
npm run start  

### 1.3. JavaScript Beginnings

Introduction:
- Adding JS code to HTML
- Multiple JS files
- Formatting code
- Detecting and fixing errors
- Case sensitivity
- Commenting code

We can add script tag in HTML files to run JS
```html
<script>
    //This is not a good practice
    alert("Hello world");
    alert("Carved Rock Fitness")
</script>
```
We can load a seperated JS file

```html
<script src="./filename.js"></script>
```
"." respresents the relative directory of index.html file. 

```html
<script src="./filename.js"/>
```
This is a wrong, older browsers can't handle it.

For HMTL manipulation we need to add scripts tags at the end of index.html, for framework insertion etc. HMTL <head> is a better option.  

Whitespaces are ignored, spaces, tabs, new lines.
To check error use f12 dev tools.
JS is case sensitive, can't mixx up lower and upper cases.

```js
//single line comment

/*
Multi line comment
*/
```

Summary
Including JS in HTML  
- <script></script>  
- <script src="./filename.js"></script>  
Formatting Code  
- Freely use whitespace  
Detecting Error  
Case Sensitivity  
- JS is case sensitive  
Commenting Code  
- //single line comment  
- /* multiple line comment */  

### 1.4. Variables and Constants

Introduction:
- What is variables
- Naming variables
- Common errors using variables
- Changing variable values
- Constants
- The var keyword

We declare variables with meaningful names.

```js
let total = 132.333;
let product = 'Hiking Boots';
let discounted = true;
```
We declare a variable with let keyword.

We can use single quotes or double quotes for strings
```js
let welcome = 'welcome';
let hello = "hello"; 
let price = 49.99;
let discounted = false;
```
For better practice we can aling variables like this.
```js
let a = 1, 
    b = "test", 
    c = false;
```

Valid Variable Names

Starts with one of: _ $ letter

Followed by zero or more: _ $ letter number

valid samples:  
```js
let a = 1;
let account = 1;
let account_99 = 1;
let accountNumber = 1;
let _accountNumber = 1;//generally private variable names start with '_'
let $accountNumber = 1;//generally $ is used for automatically generated code  
let _1234 = 1;
let __proto__ = 1;//for non standart features 
```
Camel case example 'accountNumber', because it has a bump in the middle.

If a variable is not going to change using cosnt is best practice.
We can't modify const variables, also can't declare them without an initial value.
```js
cosnt price = 19.99;
showMessage(price);
```

A variable declared with var is defined throughout the program as compared to let.
First log gives an Uncaught ReferenceError: Cannot access before initialization error, second doesn't give any error, instead it prints 'undefined'.
```js
console.log(first);
console.log(second);
let first = 1;
var second = 2;
```

### 1.5. Types and Operators

Introduction  
Types:
- Numbers
- Strings
- Converting between types
- Booleans
- null and undefined
- Objects and symbols

Numbers
```js
let price = 19.99;
let fee = '19.99';
console.log(typeof price);//prints number
console.log(typeof fee);//prints string
```

Arithmetic operations.
```js
let price = 10;
price = price + 1;
price = price - 1;
price = price / 2;
price = price * 1;
let modulus = price % 10;

price += 1;
price -= 1;
price /= 2;
price *= 1;
price %= 10;
```
Increment, decrement operator.
```js
let price = 1;
++price;
price++;
--price;
price--;
```
Operator Precedence

MDN(Mozilla Developer Network) operator precedence  
Precedence  
    21: grouping ( ... )  
    15: multiplication/division/remainder -> left-to-right  
    14: addition/substraction -> left-to-right  

```js
let price = 3 + 2 * 2;// result 7
price = (3 + 2) * 2;// result 10
```

Number Precision

```js
let price = 1.1 + 1.3// 2.4000000000000004, not exactly 2.4;
```

Strings  
We can use escape notation for special characters.
```js
let msg = 'Hello World';
let msg2 = "Hello World";
let msg3 = "Hello \"World\"";
```
We can use backtick for string formatting. Message 4 and 5 are different strings, there are several whitespace differences between them. But if we use them in HTML tags like head whitespace converted into single space.
```js
let name = "Name";
let msg4 = `Hello ${name}`;
let msg5 = `Hello           ${name}`;
```

Manipulating Strings

```js
let message = 'Hello';
message = message.toUpperCase();
message = message.toLowerCase();
message = message + ' World';
```

Converting String and Numbers
```js
let amount = 123;
amount = amount.toString();

let sum = Number.parseFloat("123.12");
```
This string can't be converted to a number, result is Not A Number.
```js
//NaN
let total = Number.parseFloat("AAA123.12");
```
We can convert this string to a number, function stops parsing as soon as it hits a not a number.
```js
let total = Number.parseFloat("123.12AAAA");
```

Boolean Variables

```js
let saved = false;// typeof saved is boolean
saved = !saved;
```

Null and Undefined  
null and undefined are two more types of JavaScript, null has one value null and undefined has one value undefined.

```js
let saved;//undefined, when they are not initilaized
saved = 10;
saved = null;//null, programmer can set a variable to null to wipe out that value, this is a best practice
```

Objects and Symbols
Last two types.

```js
let person = {
    firstName: 'John',
    lastName: 'Adams'
};
console.log(typeof person);//prints object
console.log(person.firstName);
```
Symbols are used for information hiding in objects.

### 1.5. Program Flow

Introduction
- if ... else Statements
- Truthy and Falsy Expression
- Comparing === to ==
- Ternary Operator
- Block Scope
- Loops: for, while, do...while

Conditional if
```js
if (5 === 5) {
    console.log('Yes');
}
let state = 'FL';
if (state !== 'FL') {
    console.log("NOT FLORIDA")
}
```
We do not use ==, if types are different == attempts to convert them to string, number or boolean.

|falsy|truthy|
| :---: |:---:|
|false|EVERYTHING NOT FALSY|
|0|true|
|"" or ''|0.5|
|null|"0"|
|undefined||
|Nan||

In some cases floating point arithmetic can give problematic results.
```js
if (1.1 + 1.3 !== 2.4) {
    console.log("They are not different");
}
```
To overcome this problem we can use toFixed method, but toFixed method returns a string. We can add a + sign to convert result string to number.  
```js
if ( +(1.1 + 1.3).toFixed(2) === 2.4) {
    console.log("They are different");
}
```

if() ... else
```js
let price = 20;
if(price > 20) {
    console.log("greater than 20");
} else if() {
    console.log("less or equal to 20");
}
```

Comparing == and ===

JavaScript attempts to convert values while using ==. For better and safer comprasion we use identically equal to symbol ===. 
```js
if(1 === "1") {
    console.log("equal");
} else {
    console.log("not equal");//not equal
}

if(1 == "1") {
    console.log("equal");//they are equal
} else {
    console.log("not equal");
}
```

The Ternary Operator
```js
// condition ? true statement : false statement; 
let message = (price > 10) ? 'expensive' : 'cheap';
```

Block Scope Using Let
```js
if(true) {
    const value = 'yes';
    console.log(value);
}
//console.log(value); we cant access value outside of the block
```

Looping with for()  
Loops through until condition is false.
```js
for (let i = 0; i < 3; i++) {
    console.log(i);
}
//0 1 2
```

Looping with while()
```js
let count = 1;
while (count < 5) {
    console.log(count);
    count++;
}
//1 2 3 4
```

Looping with do ... while()  
Executes at least one time.
```js
let count = 1;
do {
    console.log(count);
    count++;
} while (count < 5);
//1 2 3 4
```

### 1.5. Functions

Introduction
- Function basics
- Function expression
- Passing information to functions
- Function raturn values
- Function scope
- Using functions to modify web pages

Function Basics  
```js
function showMessage() {
    console.log("in a function");
}
showMessage();
showMessage();
//shown twice
```
Function Expressions
```js
//function decleration
function showMessage() {
}

//function expression 
let fn = function () {
}
fn()

//in function expression function name is optional but we can't use name to call that function
let myFunc = function testFunction() {

}
//testFunction(); gives reference error
```

Passing Information to Functions  
We use comma seperated parameters to transfer info to function.
```js
function showMessage(message, secondMessage) {
    console.log(message, secondMessage);
}
showMessage("Hello", " World");
showMessage("Test", " this");
```

If we don't supply values for all parameters they will be set to undefined.

```js
function myFunction(message, secondMessage) {
    console.log(message);
    console.log(secondMessage);//prints undefined
}
myFunction();
```

Function Return Values  
We use return to get information out.
```js
function getCode(value) {
    let code = value * 42;
    return code;
}
console.log(getCode(2));// 84
```

Function Scope  
We encapsulate code in function scope, parameters can't leak out. 
```js
function getCode(value) {
    let code = value * 42 
    return code;
}
let resultCode = getCode(2);
console.log(code);//reference error, we cen't access code variable out of function scope
```

Nested functions  
We need to pay attention to outer and local scope.
```js
let key = 42;//outer most scope
function getCode(value) {
    let keyGenerator = function() {
        let key = 12;//local scope or closest to local scope overrides outer value
        return key;
    }
    let code = value * keyGenerator();
    return code;
}
let code = getCode(2);
```
### 1.5. Objects and the DOM

DOM:Document Object Model  

Introduction
- Object Properties and Methods
- Passing Objects to Functions
- Standart Built-in Objects
- The Document Object Model (DOM)
- Detecting Button Clicks
- Showing and Hiding DOM Elements

Object Properties  
Group of values or properties.
```js
let person = {
    name: "Heidi",
    age: 45,
    isAlive: true
};
console.log(person.name);   //Heidi
console.log(person.age);    //45
console.log(person.isAlive);//true
console.log(person.someThing);//undefined
```

Square brackets, dot notation.
```js
let person = {
    name: "Heidi",
    age: 45,
    isAlive: true
};
person.age = 46;
person['age'] = 47;
```

We can use symbols to hide information.
```js
let mySymbol = Symbol();
let person = {
    name: "Tom",
    age: 33,
    [mySymbol]: 'secretInformation'
}
```

Object Methods  
Traditionally printInfo called as method because it attached to a object.
```js
let person = {
    name: 'Tom',
    age: 32,
    printInfo: function() {
        console.log(this.name + " is " + this.age);
    }
}
person.printInfo();
```

Passing Objects to Functions

```js
let message = 'Hello';

//passed by value, change has no effect on original value, any string, boolean, number
function changeMessage(message) {
    message = 'Hi!';
}
changeMessage(message);
console.log(message);
```

```js
let person = {
    name: "Tom",
    age: 32
}
//passed by reference, gives pointer to object
function incrementAge(person) {
    person.age++;//33
}
incrementAge(person);
console.log(person.age)
```

Standart Build-in Objects  
- Array
- Date
- Math
- String

The Document Object Model(DOM)  
We can access elements with their ids.
```js
document.getElementById('message');
```

Styling DOM Elements
```js
document.getElementById('message').style.color = 'red';
```

Detecting Button Clicks  
```js
const button = document.getElementById('see-review');
//we can add a handler for specific events
button.addEventListener('click', function() {
    console.log("click");
});
```

