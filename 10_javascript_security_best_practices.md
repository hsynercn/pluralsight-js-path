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


## 3. Preventing Code Injection Attacks

## 4. Defending against Prototype Pollution

## 5. Testing Your Code
