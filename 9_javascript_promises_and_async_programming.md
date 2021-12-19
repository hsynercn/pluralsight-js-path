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

```js
//we get the data directly
axios.get("http://localhost:3000/orders/1").then(({data}) => {
    setText(JSON.stringify(data));
});
```

Handling Errors with Promises

REJECTED state is not handled by **then** function. We can get hte 
```js
axios.get("http://localhost:3000/orders/1").then((result) => {
    if(result.status === 200) {
        setText(JSON.stringify(result.data));
    } else {
        setText("Error");
    }
}).catch(err => setText(err));
```
Chaining Promises

- Promises return promises.

```js
axios.get("http://localhost:3000/orders/1").then(({data}) => {
    setText(JSON.stringify(data));
    return "Hello";
})
.then(result => console.log(result));
```

```js
axios.get("http://localhost:3000/orders/1").then(({data}) => {
    return axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);
})
.then(result => console.log("City: " + result.data.city));
```

Catching Errors in a Chain

```js
axios
    .get("http://localhost:3000/orders/1")
    .then(({data}) => {
        return axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);
    }).catch(err => { //It will catch only errors of first then
        setText(err);
        return {data: {}};
    })
    .then(result => console.log("City: " + result.data.city))
    .catch(err => setText(err)); //It will catch **any error** in any of the previous calls.
```

Performing One Last Operation

- When loading HTTP requests we show loading indicators, when request becomes settled we need to hide this indicator' fulfilled or rejected.

```js
showWaiting();
axios
    .get("http://localhost:3000/orders/1")
    .then(({data}) => {
        return axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);
    }).catch(err => { //It will catch only errors of first then
        setText(err);
        return {data: {}};
    })
    .then(result => console.log("City: " + result.data.city))
    .catch(err => setText(err))
    .finally(() => {
        hideWaiting();
    }); //It will catch **any error** in any of the previous calls.
```

## 4. Creating and Queuing Promises

Creating Promises

We need to change state of promise manually.
```js
let wait = new Promise((resolve) -> {
    setTimeout(() => {
        resolve("Timeout");
    }, 1500);
});
wait.then(text => setText(test));
```

Understanding Promise States

'setInterval' function called multiple times.
```js
let wait = new Promise((resolve) -> {
    setInterval(() => {
        console.log("INTERVAL");
        resolve("Timeout");
    }, 1500);
});
wait.then(text => setText(test))
.finally(() => console.log("FINALLY"));
//we see only one FINALLY output
```

If the associated promise has already been resolved, either to a value, a rejection, or another promise, this method does nothing because it is already in **resolved** state. 

```js
let interval;
let wait = new Promise((resolve) -> {
    interval = setInterval(() => {
        console.log("INTERVAL");
        resolve("Timeout");
    }, 1500);
});
wait.then(text => setText(test))
.finally(() => clearInterval(interval));
```

Rejecting a Promise

We have the power to control how a promise is settled.
```js
let request = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/orders/1"); //response: 404
    xhr.onload = () => {
        if(xhr.status === 200) {
            resolve(xhr.responseText);
        } else {
            reject(xhr.statusText);
        }
    }
    //onerror is triggered for only network errors
    xhr.onerror = () => reject("Request Failed");
    xhr.send();
});

request.then(result => console.log(result))
.catch(reason => console.log(reason))
```

Waiting for All Promises to Resolve

When we need several functions to run independent of each other also we can wait for all-completion.

**Either all fulfill or one rejects.**

```js
let categories = axios.get("http://localhost:3000/itemCategories");
let statuses = axios.get("http://localhost:3000/orderStatuses");
let userTypes = axios.get("http://localhost:3000/userTypes");
// we are waiting all of them
Promise.all([categories, statuses, userTypes])
.then(([cat, stat, type]) => {
    console.log(JSON.stringify(cat.data));
    console.log(JSON.stringify(stat.data));
    console.log(JSON.stringify(type.data));
}).catch(reasons => {
    console.log(reasons);
});
```

Settling All Promises

How is allSettled different:
- Different data returned
- Don't need catch
- But a catch block is recommended

allSettled: This function is not supported by all browsers.

```js
let categories = axios.get("http://localhost:3000/itemCategories");
let statuses = axios.get("http://localhost:3000/orderStatuses");
let userTypes = axios.get("http://localhost:3000/userTypes");
// we are waiting all of them to be settled
Promise.allSettled([categories, statuses, userTypes])
.then((values) => {
    let results = values.map(v => {
        if(v.status === 'fulfilled') {
            return 'FULFILLED';
        }
        return `REJECTED: ${v.reason.message}`;
    });
}).catch(reasons => {
    console.log(reasons);
});
```

Racing Promises

We can use race condition for our benefit. Race stops when first promise settles.
- 'race' is a rare function

```js
let users = axios.get("http://localhost:3000/users");
let backup = axios.get("http://localhost:3001/users");

Promise.race([users, backup])
.then(users => console.log(JSON.stringify(users.data)))
.catch(reason => console.log(reason));
```

Ways to queue promises
- all
- allSettled
- race

## 5. Iterating with Async/Await