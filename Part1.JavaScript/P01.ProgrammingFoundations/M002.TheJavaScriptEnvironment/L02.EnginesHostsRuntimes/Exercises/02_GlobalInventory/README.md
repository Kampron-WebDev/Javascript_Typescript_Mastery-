# Exercise 02: Global Inventory

**Goal:** inspect a real global object and report what's in it, using your `providerOf` from Exercise 01.

## Your task

Complete `inventory(globalObject, names)`. For each name in `names`, check whether `globalObject` has it (not `undefined`) and group the **present** names by provider:

```js
inventory({ Array, console, process: {} }, ['Array', 'console', 'process', 'document'])
// → {
//     language: ['Array'],
//     'shared-host': ['console'],
//     browser: [],
//     node: ['process'],
//     unknown: [],
//     missing: ['document'],
//   }
```

- Every key shown above must always be present (use empty arrays).
- Each array keeps the **same order** as `names`.
- Import `providerOf` from `'../01_WhoProvidesIt/main.js'` (it's already at the top of `main.js`). Don't copy the table.

When the tests pass, run `node report.js` to inventory **the real Node global object**.

## Check your work

```powershell
node --test
```

<details><summary>Hint</summary>

Start with `const result = { language: [], 'shared-host': [], browser: [], node: [], unknown: [], missing: [] };`
then, for each name, push it into either `missing` or `result[providerOf(name)]`.

</details>
