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

Introduction:
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
This string is can't be converted to a number, result is Not A Number.
```js
//NaN
let total = Number.parseFloat("AAA123.12");
```
We can convert this string to a number, function stops parsing as soon as it hits a not a number.
```js
let total = Number.parseFloat("123.12AAAA");
```
