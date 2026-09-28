# 🧰 Syntax Preview (for C++ learners)

[⬅ Orientation](README.md)

Phase 1 uses a little JavaScript syntax before Phases 2–4 teach it properly (with all the "why"). This page is just enough to read and write Phase 1 code.
You already know C++ basics, so here is JS **side by side** with C++.

> 🧸 C++ is like building furniture from raw wood: you control every screw. JavaScript is like IKEA: faster to assemble, and a lot is done for you. Both make chairs.

## Running code

| C++ | JavaScript (Node.js) |
|---|---|
| `g++ main.cpp -o app` then `./app` | `node main.js` (no separate compile step) |
| `int main() { … }` is required | Code runs from the top of the file, with no `main` needed |

## Variables

```js
const name = 'Ama';   // cannot be reassigned (use this by default)
let age = 20;         // can change
age = 21;
// var ...            // old style. Don't use it.
```

There are no type names. A variable can hold any type, and the **value** has the type:

```js
typeof 42        // 'number'   (ints and decimals are both 'number': 64-bit float)
typeof 'hi'      // 'string'
typeof true      // 'boolean'
typeof undefined // 'undefined' (declared but no value)
typeof null      // 'object'   (a famous old bug in JS, just remember it)
typeof [1, 2]    // 'object'   (arrays are objects)
```

## Printing

```js
console.log('Hello');                      // like std::cout << "Hello\n";
console.log('Age:', age);                  // several values, separated by spaces
console.log(`Name: ${name}, age ${age}`);  // template literal: BACKTICKS + ${ }
```

⚠️ `${...}` only works inside **backticks** `` ` ``. Inside `'single'` or `"double"` quotes it is just text.

## Comparisons: always use three equals signs

```js
5 === 5      // true
5 === '5'    // false (different types)
5 == '5'     // true  (!) because == converts types first. Avoid ==.
5 !== 6      // true
```

## Conditions and loops (almost identical to C++)

```js
if (age >= 18) {
  console.log('adult');
} else if (age > 12) {
  console.log('teen');
} else {
  console.log('child');
}

for (let i = 0; i < 3; i++) console.log(i);

let n = 3;
while (n > 0) n--;

for (const item of ['a', 'b', 'c']) console.log(item);   // like range-for
```

## Functions

```js
function add(a, b) {
  return a + b;
}

const multiply = (a, b) => a * b;   // arrow function (short form)
```

There are no parameter types, and no overloading.

## Arrays (like `std::vector`, but they hold anything)

```js
const nums = [3, 1, 2];
nums.push(4);          // add to end  → [3, 1, 2, 4]
nums.pop();            // remove last → returns 4
nums.length;           // 3
nums[0];               // 3
nums.indexOf(2);       // 2   (-1 if not found)
nums.includes(5);      // false
nums.slice(1);         // [1, 2]  (a copy from index 1)
nums.join('-');        // '3-1-2'
```

## Objects (like a `struct` you can create on the fly)

```js
const student = { name: 'Kofi', age: 19 };
student.name;          // 'Kofi'
student.grade = 'A';   // add a new property any time
student['age'];        // 19 (square-bracket access with a string)
```

## Strings

```js
const s = 'hello';
s.length;              // 5
s[0];                  // 'h'
s.toUpperCase();       // 'HELLO'
s.split('');           // ['h', 'e', 'l', 'l', 'o']
'a,b,c'.split(',');    // ['a', 'b', 'c']
s.padStart(8, '*');    // '***hello'
```

## Numbers

```js
Math.floor(7 / 2);     // 3  (7 / 2 is 3.5: there is no integer division!)
7 % 2;                 // 1
(3.14159).toFixed(2);  // '3.14' (a string)
Number('42');          // 42
String(42);            // '42'
```

## Errors

```js
throw new Error('Something went wrong');   // like throw std::runtime_error(...)

try {
  riskyThing();
} catch (err) {
  console.log(err.message);
}
```

## Modules: sharing code between files

In this course every exercise **exports** its functions so the tests can **import** them:

```js
// main.js
export function greet(name) {
  return `Hi ${name}`;
}

// main.test.js
import { greet } from './main.js';
```

Like `#include`, but you pick exactly which names you want.

That's enough to start. Keep this page open during Phase 1. ➡ [Back to Orientation](README.md)
