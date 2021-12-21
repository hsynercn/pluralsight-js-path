# pluralsight-js-path
## 1. JavaScript Security: Best Practices

Course Overview
- The JavaScript security model
- Dynamic type system vulnerabilities
- Code injection attacks
- Prototype pollution
- JavaScript security testing tools

This module covers most common JavaScript security bugs.

## 2. Understanding JavaScript Security

Overview
- Role of JavaScript in Web security
- How JavaScript code is executed
    - Browsers
    - Node.js
- Dangerous JavaScript features
- Sensitive data leak

Basic Notions of Web Security
- ATTACKERS: Capable and motivated
- VULNERABILITIES: Flaws in code and configuration
- DATA BREACHES: Steal data or abuse functionality

JavaScript can run on server or browser/device.

How Browsers Execute JavaScript Code

JavaScript was created to add interactivity to HTML pages. Web browsers are the native environment to run JavaScript code.

When the user visits a web page
- All code is downloaded, JavaScript code downloaded from several sites are executed in the browser.
- Each site gets a sandbox, every website executes JavaScript code in its own sandbox within the browser. **Code from one website cannot access data or functionality from another website.**
- Browsers take multiple security measures
    - OS process separation for pages
    - Download code with HTTPS
    - Subresource Integrity (SRI)

Browser Sandbox: JavaScript running in the browser is restricted.
- **No local resouces**: No direct access to devices, files, and local network
- **Only browser APIs**: Limited access to resources allowed by user
- **Same origin only**: Code and data from different sites cannot interact

Node.js is a runtime environment for JavaScript based on the V8 engine. It allows JavaScript code to run outside the browser.

| Node.js      | Browser |
| ----------- | ----------- |
|Downloaded from the web|Loaded from local files|
|Untrusted and highly restricted|Trusted and highly privileged|
|Limited blast radius|May lead to server compromise, risky|

JavaScript Security Pitfalls
- DYNAMIC TYPE SYSTEM: Abusing conversions and comparisons
- DYNAMIC CODE EXECUTION: Interpreting untrusted data as code
- PROTOTYPAL INHERITANCE: Modifying behavior of child objects  

Dynamic nature of JavaScript can lead to security bugs.

Dynamic type system pitfalls
- Automatic conversions: Unexpected code may be executed
- Loose comparisons: Security checks may be bypassed

Always **"use strict"** mode.

How to Exploit the Bug?

Work backwards from identified flaw in the code.

Modify data to confuse the type system
- Mixed data types
- Arrays and objects
- Missing properties

Inspect original HTTP request.

Inject malicious payload using browser development tools.

Deliver it to the application.

Fixing the Code
- Use strict mode
- **Do not use loose comparison (==)**
    - Use === instead
    - Consider using Object.is
- Verified types of untrusted data items

**Summary**
- Dynamic nature of JavaScript code can lead to vulnerabilities
    - Dynamic typing
    - Dynamic code execution
    - Prototypal inheritance
- Security bugs in the browser may become an attack vector
- Vulnerabilities in Node.js code can lead to serious data breaches

## 3. Preventing Code Injection Attacks

Overview
- Dynamic code execution
- Unsafe functions
- Impact of remote code execution
    - Denial of service
    - Server takeover
- Safe coding patterns

Code Injection Attacks: Send code as data, parse data on server and execute malicious code.

Dynamic Code Execution

JavaScript code can be loaded from Web, files, or user input.
- **PARSE**: Transform source code into abstract syntax tree
- **COMPILE**: Generate bytecode just-in-time
- **EXECUTE**: Run bytecode instructions

JavaScript can generate and execute new code at runtime.

```js
console.log(eval("1 + 1")); //2
```
Unsafe Functions

| Node.js      | Browser |
| ----------- | ----------- |
|eval(code)|f = new Function('param', code)|
||f('argument')|
|Direct and indirect invocation|Invoke like a function|
|Global and current scope|Only global scope|

Also these functions have unsafe versions, they can accept string parameters which they can execute.
**setTimeout:** Execute provided code after a specified delay
**setInterval** Repeatedly execute provided code with a specified delay between

Finding Unsafe Code

Modify data to inject the code
- Track all input data, HTML form, cookies, HTTP requests to unsafe calls
- Unsafe function calls named as **sinks**
- **Taint analysis** we need to track data to unsafe function calls
- Transformations, all changes made on input data

Work backwards from the code to build payload.

Inspect original HTTP request.

Inject malicious payload using browser development tools.

Deliver it to the application.

**Injection Attacks:** Passing untrusted input data to any interpreter without input validation and sanitization may be exploitable.

Exploiting the Vulnerability

- Login screen return URL
- Attack
    - Hijack
    - Inject
    - Deliver
- Denial of Service(DoS)
- Sensitive data leak

Impact of Code Injection Attacks
- Denial of service, crash app and delete files
- Modify application logic
    - Bypass access control
    - Compromise data integrity
    - Steal sensitive data
- Server takeover

Web Shell: A powerful tool for attackers to gain information about the compromised system.

Fixing the Code
- Avoid unsafe functions
- Validate input
    - Prefer allow lists over lock lists
- Sanitize data passed to interpreters
- Apply principle of the least authority

 Unsafe Code in Third-party Libraries
 - npm: the JavaScript package manager
 - Third-party packages may be prone to code injection
 - Validate input data before passing
 - External packages need to be audited for use of unsafe functions

We need to validate input data before sending external libraries. We can check these modules for unsafe function uses.

For example math module eval function can exploit function constructor.

**Summary**
- Avoid passing untrusted data to JavaScript engine
- Identify suspected code
    - eval
    - new Function
    - setTimeout and setInterval
- Audit third-party libraries for use of unsafe code

## 4. Defending against Prototype Pollution



## 5. Testing Your Code
