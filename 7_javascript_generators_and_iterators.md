# pluralsight-js-path
## 1. JavaScript Generators and Iterators
### 1.1. Course Overview
- Create a custom iterator
- Old and new built-in iterators
- Pause and continue function execution with generator functions
- Simplifying asynchronous logic 

## 2. Iterator and Iterable

New ES2015 data structure: Maps, Sets, WeakMaps, WeakSets

Loops: For and foreach iterate over each element in an array.

In a standard loop we can exit the loop with break. Restarting the iteration is not easy.
```js
for(let i = 0: i < 10: i++) {
    if(i > 2) break;
    console.log(i * 2);
}

[1,2,3,4,5,6].forEach(value =>{
    if(i > 2) break;
    console.log(i * 2);
}):
```
An iterator lets you iterate through a collection's contents one at a time, pausing at each item.

Module Overview
- Differences with loops
- What is an iterable
- Utilizing built-in iterables
- Custom iterators

**Iterator**: An iterator is any object that implements the iterator protocol by having a next() method that returns a value property and a done(boolean) property.

```js
function myIterator(start, finish) {
    let index = start;
    let count = 0;
    return {
        next() {
            let result;
            if(index < finish) {
                let result = {value: index, done: false};
                index += 1;
                count++;
                return result;
            }
            return {
                value: count,
                done: true
            }
        }
    }
}

const it = myIterator(0, 5);
let res = it.next();
while(!res.done) {
    console.log(res.value);
    res = it.next();
}
//0
//1
//2
//3
//4
```

What is an Iterable?
- An array is a built-in iterable
- There ate other built-in iterables (strings, maps, and sets)
- Iterables implement the @@iterator method
- Symbol.iterator is a well-known symbol in JavaScript

for..of loops:
- This type of loop only works with iterable objects
- Do not confuse this with a for..in loop
- for..of loop iterates over VALUES, for..in loops iterates over ENUMERABLE PROPERTIES like object keys
```js
for(const value of [1,2,3,4,5]) {
    console.log(value);
}
```

```js
const arr = [1,2,3];
const it = arr[Symbol.iterator]();
console.log(it.next()); //{value: 1, done: false}
console.log(it.next()); //{value: 2, done: false}
console.log(it.next()); //{value: 3, done: false}
console.log(it.next()); //{value: undefined, done: true}
```

For/of loops are using the Symbol.iterator method under the hood and returning the next call on each iteration.

```js
const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
const mapIterator = map[Symbol.iterator]();
console.log(mapIterator.next().value); //['key1', 'value1']
console.log(mapIterator.next().value); //['key2', 'value2']

for(const[key, value] of map) {
    console.log(key + " " + value);
}
//key1 value1
//key2 value2
```

```js
const mySet = new Set();
mySet.add('1');
mySet.add('2');
const setIterator = mySet[Symbol.iterator]();
console.log(setIterator.next()); //{value: '1', done: false}
console.log(setIterator.next()); //{value: '2', done: false}
console.log(setIterator.next()); //{value: undefined, done: true}

for(const value of mySet) {
    console.log(value);
}
//1
//2
```

## 3. Generator Functions

## 4. Real-world Examples and Cancelable Async Flows(CAF)
