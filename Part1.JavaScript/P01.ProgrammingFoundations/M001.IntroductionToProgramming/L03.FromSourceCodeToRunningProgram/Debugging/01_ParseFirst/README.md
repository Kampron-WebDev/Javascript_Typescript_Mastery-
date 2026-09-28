# Debugging 01: Parse First

`main.js` should export `receiptTotal(items)`, which adds up `price × quantity` for every item:

```js
receiptTotal([{ price: 250, quantity: 2 }, { price: 100, quantity: 1 }])  // → 600
receiptTotal([])                                                         // → 0
```

When you run the tests, **nothing in `main.js` even gets a chance to run**.

There are **2 bugs**, one from each phase:

1. A **syntax** error, found at parse time. Fixing it lets the file run…
2. …which reveals a **runtime** error.

## Your task

1. Run `node --test` and read the error.
2. Run **`node --check main.js`**. It points at the exact line and column. Fix the syntax error.
3. Run `node --test` again. There's a new error, from a different phase. Read the stack trace and fix it.
4. In MY-NOTES.md: for each bug, which *phase* caught it, and which *tool* pointed you to it?
