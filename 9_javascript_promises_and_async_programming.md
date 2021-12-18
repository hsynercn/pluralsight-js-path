# pluralsight-js-path
## 1. JavaScript Promises and Async Programming
- Asynchronous programming
- consuming & creating promises
- Using Async/Await in JavaScript

## 2. Understanding Promises

Race condition:

```js
let xhr = new XMLHttpRequest();
let statuses = [];
xhr.open("GET", "http://localhost:3000/orderStatuses");
xhr.onload = () => {
    statuses = JSON.parse(xhr.responseText);
};
xhr.send();

let xhr2 = new XMLHttpRequest();
xhr2.open("GET", "http://localhost:3000/orders/1");
xhr2.onload = () => {
    const order = JSON.parse(xhr2.responseText);()
}
```
When we execute this sample we can face several problems. We can't guarantee the execution sequence with upper implementation.

```
> XHR finished loading: GET "http://localhost:3000/orders/1"
> XHR finished loading: GET "http://localhost:3000/orderStatuses"
```

Building a Callback Pyramid

We define second request in first request's 'onload'.

```js
let xhr = new XMLHttpRequest();
let statuses = [];
xhr.open("GET", "http://localhost:3000/orderStatuses");
xhr.onload = () => {
    statuses = JSON.parse(xhr.responseText);

    let xhr2 = new XMLHttpRequest();
    xhr2.open("GET", "http://localhost:3000/orders/1");
    xhr2.onload = () => {
        const order = JSON.parse(xhr2.responseText);()
    };
};
xhr.send();
```

Why Is the Pyramid Bad?

- Callback pyramid of doom: too many nested indentation to control access to a function.
- Dirty code.
- Handling errors makes code messy.

```js
xhr.onload = () => {
    xhr2.onload = () => {
        xhr3.onload = () => {
        ...
        }
    }
}
```

Solving the Callback Pyramid

**Promise:** Object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. 

- We can write readable asynchronous code with promises.

Promise States:
- PENDING: Initial state' while the call is happening, the promise is pending.
- FULFILLED: When promise is fulfilled.
- REJECTED: Call has failed.

Settled or Resolved: Promise is now in fulfilled or rejected state.

## 3. Consuming Promises

Popular HTTP library 'axios' is a XMLHttpRequest abstraction, it is a promise based library.

## 4. Creating and Queuing Promises

## 5. Iterating with Async/Await