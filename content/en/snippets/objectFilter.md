---
id: 5
title: "Object filter"
description: "Filter an object as if it were an array."
category: "Javascript"
last_updated: "October 26th, 2022"
---

```js
function objectFilter(obj, func = ([, val]) => val) {
  return Object.fromEntries(Object.entries(obj).filter(func));
}
```

## Context

In JavaScript, we often have to manipulate objects, especially since everything is an object. It is sometimes useful to [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) an object with just the keys and values that interest us. Unfortunately, unlike for _arrays_, there is no built-in function to perform this operation.

But that doesn't mean you can't use [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to filter objects, you just need to be able to iterate over the object by first converting it to _array_.

This snippet allows us to do so!

## Usage

```js
objectFilter(
  {
    first_name: "John",
    last_name: "Doe",
    age: 26,
  },
  ([, val]) => typeof val === "number"
);
// { age: 26 }
```

## Explanation

This function takes as parameter an object to be filtered and a callback function which will be provided to our [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) function which must return a boolean.

::note
**Note that:** By default our function will filter out every **falsy** values and their paired key from the provided object but we can override that to our needs.
::

```js
const obj = {
  first_name: "John",
  Last_name: "Doe",
  age: 26,
};

// Convert *obj* to a [key, value] array of arrays
const as_array = Object.entries(obj);
// `[['first_name', 'John'], ['last_name', 'Doe'], ['age', 26]]`

const filtered = as_array.filter(([key, value]) => typeof value === "number");
// `[['age', 26]]`

// Convert the key/value array back to an object:
const object_numbers_only = Object.fromEntries(filtered);
// `{ age: 26 }`
```

The provided object is first converted to an _array_, here **as_array** using the function [entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) which returns an _array_ of _Arrays_ consisting of the _key_ followed by its _value_ for each of these _key-value_ pairs, giving us:

```js
[
  ["first_name", "John"],
  ["last_name", "Doe"],
  ["age", 26],
];
```

This new _array_ is then filtered with the callback passed in parameter which in our case excludes all the values which are not numbers. 

Have you noticed that we where using [destructuring assignement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) ? It allows us to take the first element of every *array* and store it in a variable called **key**, same for the second element **value**.

The filtered array is then converted back into an object via the function [fromEntries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) which gives us **object_numbers_only** filtered according to our conditions, i.e. an object with only keys where values are numbers!

## Conclusion

The final snippet in a compact expression :

```js
function objectFilter(obj, func = ([, val]) => val) {
  return Object.fromEntries(Object.entries(obj).filter(func));
}
```
