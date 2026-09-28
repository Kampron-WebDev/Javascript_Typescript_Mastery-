# Debugging 01: Strict Surprises

Two helpers from an old sloppy-mode script were moved into an ES module (strict mode), and now they crash. The code was **already wrong before**; sloppy mode just hid it.

```js
makeConfig({ retries: 5 })   // → { retries: 5, timeoutMs: 1000 }   and DEFAULTS must stay unchanged!
makeConfig()                 // → { retries: 3, timeoutMs: 1000 }

countRetries(['retry 1', 'ok', 'retry 2'])  // → 2
```

There are **2 bugs**.

## Your task

1. `node --test`, then read each error carefully.
2. Fix both, **keeping** `Object.freeze` on `DEFAULTS`. It's there on purpose.
3. In MY-NOTES.md, for each bug: what would **sloppy** mode have done instead, and what wrong result would users have seen?

<details><summary>Hint 1</summary>

`const config = DEFAULTS` doesn't copy anything: both names point to the *same* frozen object. How do you make a new object containing the defaults plus the overrides? (`{ ...a, ...b }`)

</details>

<details><summary>Hint 2</summary>

Read the variable names in `countRetries` letter by letter.

</details>
