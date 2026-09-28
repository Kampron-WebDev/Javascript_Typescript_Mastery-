# Exercise 01: Who Provides It?

**Goal:** instantly know whether a global name comes from the **language** or from a **host**.

## Your task

Complete `providerOf(name)`. It returns one of:

| Result | Meaning | Names it must know |
|---|---|---|
| `'language'` | Part of ECMAScript | `Array`, `Object`, `String`, `Number`, `Promise`, `Map`, `Set`, `JSON`, `Math`, `Symbol`, `BigInt`, `globalThis`, `parseInt` |
| `'shared-host'` | Not ECMAScript, but in browsers **and** Node | `console`, `setTimeout`, `setInterval`, `fetch`, `URL`, `TextEncoder`, `structuredClone`, `queueMicrotask` |
| `'browser'` | Browser hosts only | `window`, `document`, `localStorage`, `alert`, `HTMLElement` |
| `'node'` | Node only | `process`, `Buffer`, `global`, `require`, `__dirname` |
| `'unknown'` | Anything else | |

Names are **case-sensitive**: `'array'` → `'unknown'`.

```js
providerOf('Promise')   // → 'language'
providerOf('console')   // → 'shared-host'
providerOf('document')  // → 'browser'
providerOf('process')   // → 'node'
providerOf('banana')    // → 'unknown'
```

**Before coding:** predict the category for every name in the table *without looking at it*, in MY-NOTES.md. Which ones surprised you?

## Check your work

```powershell
node --test
```

<details><summary>Hint</summary>

Store one array of names per category in an object, then look the name up. Keep it **data**, not 35 `if` statements.

</details>
