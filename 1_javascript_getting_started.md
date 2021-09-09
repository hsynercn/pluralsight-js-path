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

### 1.3. Variables and Constants

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
a  
account  
account_99  
accountNumber  
(generally private variable names start with '_') _accountNumber  
(generally $ is used for automatically generated code) $accountNumber  
_1234  
(for non standart features) __proto__

Camel case example 'accountNumber', because it has a bump in the middle.
