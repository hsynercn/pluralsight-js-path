# pluralsight-js-path
## 1. JavaScript Arrays and Collections
### 1.1. Course Overview

- Advanced arrays methods
- New data collections
- Sets
- Maps
- Typed arrays

## 2. Methods for Working with Arrays

Module Introduction

- Advanced methods(list of, find, fill)
- New ways to iterate
- New data collections (sets, maps)
- Specific methods for sets and maps
- Typed arrays

Create an Array from a List of Arguments

```js
let sales = Array.of(1, 2, 3);
let dates = Array.of('Oct','Nov','Dec');
let emptyArray = Array(5);
console.log(sales); //[1, 2, 3]
console.log(dates); //['Oct', 'Nov', 'Dec']
console.log(emptyArray); //[empty × 5]
```

Using the Spread Operator with Arrays

```js
let sales = [1, 2, 3];
function addYearlyTotal(a, b, c) {
    return a + b + c;
}

let yearlyTotal = addYearlyTotal(sales);
console.log(yearlyTotal); //'1,2,3undefinedundefined'

yearlyTotal = addYearlyTotal(...sales);
console.log(yearlyTotal); //6
```

Using Array.find and findIndex to Find a Value

```js
let sales = Array.of(1, 2, 3, 4, 5 ,6);
let firstFind = sales.find(element => element === 3); // we need to supply a function to find
console.log(firstFind); //3

let sales = Array.of(1, 2, 3, 4, 5 ,6);
let secondFind = sales.find(element => element >= 3); // we get first proper element
console.log(secondFind); //3

let index = sales.findIndex(element => element >= 5); //we get the first proper element index
console.log(index); //4
```

Using Array Fill

```js
let myArray = Array(5);
myArray.fill(0);
console.log(myArray); //[0, 0, 0, 0, 0]
```

Methods for Iterating Through Arrays

```js
let sales = [1, 2, 3, 4, 5];
let total = 0;
sales.forEach(element => total += element);
console.log(total); //15
```

**Summary**

- Array.of
- Spread operator
- Array.find
- Array.fill
- Iterating arrays

Working with Sets

Review Data Collections

ECMAScript 6: 17 June 2015, new features, new data collections

Before
- Arrays
- Objects

ECMAScript
- Sets
- Maps
- WeakSets
- WeakMaps

| Data Type | Explanation|
| :---: | :---: |
| Boolean | Primitive |
| Null | Primitive |
| Undefined | Primitive |
| Number | Primitive |
| BigInt | Primitive |
| String | Primitive |
| Symbol | Primitive |
| Objects | - |

Object: Value in memory which could be referenced by an identifier.

Introducing Sets

Sets: Stores **unique** values of any type, whether primitive values or object references.


Adding and Removing Values to Set

```js
let mySet = new Set();
mySet.add("1");
mySet.add("2");
mySet.add("3");
console.log(mySet.size); //3
mySet.delete("3");
console.log(mySet.size); //2
mySet.add("3").add("4").add("5").add("6");

let mySet2 = new Set(["7", "8", "9"]);
console.log(mySet2.size); //3
```

Iterating a Set

```js
let mySet = new Set(["1", "2", "3"]);
for(let element of mySet) {
    console.log(element);
}
//1
//2
//3
```

```js
let mySet = new Set(["1", "2", "3"]);
mySet.forEach((key, value, currentSet) => console.log(key));
//1
//2
//3
```