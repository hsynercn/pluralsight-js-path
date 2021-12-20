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

## 4. Defending against Prototype Pollution

## 5. Testing Your Code
