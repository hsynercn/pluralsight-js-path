# pluralsight-js-path
## 1. Working with JavaScript Modules

Course Overview
- What modules are
- The export syntax
- Import code
- real-world example

## 2. What Is a Module?

- Get code from: https://github.com/jonathanfmills/WorkingWithModules.git
- Get Node
- Get VS Code
- npm install
- npm start> you see website

Cleanup the Old Way

Load required code from a separated JS file. When we need isolation we can use IIFE(Immediately Invoked Function Expression).

What Are Modules
- Import and export keywords
- Encapsulate code
- Control access
- Reference its own dependencies

Module Considerations
- Modules are singletons.
- Properties are bound
- Exports are static
- One module fer file

**Summary**
- Set up our demo environment
- What are modules?
- Module considerations

## 3. Creating Module

Introduction
- Export keyword
- Named exports
- Default exports
- Aggregating modules

**Named Exports**

This is named export, for this method I need to know names when importing.

Export:
```js
//template.js
export function hello() {
    console.log("Hello");
}
```
Import:
```js
import {hello} from './template.js';
```

Or we can make an export list.
```js
function getSession() {
    return [];
}
export {getSession as session};
```

**Default Exports**

We can only export one thing as the default, we can't export a bunch of things as default, it wouldn't work.
 ```js
 //file:sessionRepository.js
 export default function getSession() {
     return [];
 }
 ```
 Other option.
```js
 function getSession() {
     return [];
 }
 export {getSession as default};
```
Importing.
 ```js
 import sessions from './sessionRepository.js'
 ```

 Aggregating Modules
 ```js
 export {getSession as default};
 export {sessionTemplate} from './template.js';
 ```

**Summary**
- Export keyword
- Named exports
- Default exports
- Aggregating modules' reexport externally

## 4. Using Modules

Into
- Import keyword
- Allowing modules
- Default imports
- Named imports

Setting up modules, IE and Samsung Internet doesn't support import.

```html
<script src="js/app.js" type="module"></script>
```

**Default Imports**

app.js
```js
//from app.js perspective we don't care what export called
import jon from './sessionRepository.js';
import sessionTemplate from './template.js';
```

sessionRepository.js
```js
export {getSessions as default};
```

template.js
```js
export {sessionTemplate as default};
```

**Named Imports**

app.js
```js
//default importing
import getSessions, {sessionUrl} from './sessionRepository.js';
//or
import getSessions, * as sessionRepository from './sessionRepository.js';
let test = sessionRepository.sessionUrl;

//named import require same naming
import {sessionTemplate as template, errorMessage} from './template.js';
//alternatively we can import everything as template
import * as template from './template.js';

//we can use template
let result = template.errorMessage;
```

sessionRepository.js
```js
export {getSessions as default, sessionUrl};
```

template.js
```js
export {sessionTemplate, errorMessage};
```

**Summary**
- What are modules
- Creating modules with export
- consuming modules with import