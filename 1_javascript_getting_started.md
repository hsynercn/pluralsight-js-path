# pluralsight-js-path
## 1. JavaScript: Getting Started
### 1.1. Course Overview

Applications:
-Web Pages
-Business Apps
-Utility Apps
-Games

Unity engine supports JS. 
TypeScript is popular with business apps.
Apache Cordova for smart phones and tablets.
Electron for native Windows and macOS native apps.
NodeJS for backend services.

### 1.2. Introduction to JavaScript

Starting:
-Install git
-Install npm
-Install vs code

*In vs code ctrl+' opens the terminal

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
Adding JS code to HTML
Multiple JS files
Formatting code
Detecting and fixing errors
Case sensitivity
Commenting code

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
