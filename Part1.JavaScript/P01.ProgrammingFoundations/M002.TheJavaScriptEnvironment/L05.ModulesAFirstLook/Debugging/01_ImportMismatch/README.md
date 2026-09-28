# Debugging 01: Import Mismatch

`priceLabel(cents)` adds 20% tax and formats the result:

```js
priceLabel(1000)  // → '$12.00'
```

`format.js` and `tax.js` are correct. **Don't change them.** The **2 bugs** are both in `main.js`'s import lines, and neither lets a single line of code run.

## Your task

1. `node --test` and read the error. Is it thrown during *construction* (finding files) or *linking* (matching names)? (Lesson 05, section 3.)
2. Fix it and run again. A different error appears. Fix that too.
3. In MY-NOTES.md: for each bug, which loading phase caught it, and the rule you'll remember.

<details><summary>Hint 1</summary>

Node ESM doesn't guess file extensions.

</details>

<details><summary>Hint 2</summary>

Open `format.js`. Does it have a *default* export, or a *named* one?

</details>
