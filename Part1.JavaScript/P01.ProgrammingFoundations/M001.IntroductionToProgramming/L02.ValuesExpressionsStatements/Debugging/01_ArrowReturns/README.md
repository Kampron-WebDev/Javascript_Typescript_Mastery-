# Debugging 01: Arrow Returns

Two tiny arrow functions both return `undefined`:

```js
double(4)          // should be 8
makeUser('Ama')    // should be { name: 'Ama', role: 'student' }
```

There are **2 bugs**. Both happen because the engine read a **statement** (a block) where the programmer meant an **expression**.

## Your task

1. `node --test`.
2. Fix both, **keeping them as arrow functions**.
3. In MY-NOTES.md, explain for each: *what the engine thought the braces meant*.

<details><summary>Hint 1</summary>

An arrow function has two forms:

```js
(x) => x * 2              // expression body: the value is returned automatically
(x) => { return x * 2; }  // block body: statements, so you must `return`
```

</details>

<details><summary>Hint 2</summary>

In `() => { name: 'Ama' }` the engine sees a **block** containing a *label* called `name` (an old, rarely used JavaScript feature), not an object. How can you force `{ … }` to be read as an expression? (Look at Exercise 01's `{}` vs `({})`.)

</details>
