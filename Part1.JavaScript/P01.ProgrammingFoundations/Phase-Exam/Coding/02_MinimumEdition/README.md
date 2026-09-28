# Exam Coding 02: Minimum Edition (40 points)

A build tool needs to know the **oldest ECMAScript edition** that supports every feature a project uses.

`main.js` already contains the data table `FEATURE_YEARS` (feature name → the year it was standardised). **Don't change the table.**

Complete `minimumEdition(features)`:

- Return `'ES<year>'` for the **latest** year among the given features: `['let', 'optional chaining']` → `'ES2020'`.
- No features at all → `'ES5'` (the baseline everyone supports).
- Duplicate features are fine.
- An unknown feature → throw an `Error` whose message contains `Unknown feature` **and** the feature's name.
- Feature names are **case-insensitive**: `'Optional Chaining'` works too.

```js
minimumEdition([])                                  // → 'ES5'
minimumEdition(['let', 'arrow functions'])          // → 'ES2015'
minimumEdition(['classes', 'Object.groupBy', 'let']) // → 'ES2024'
minimumEdition(['teleport'])                        // 💥 Error: Unknown feature: teleport
```

```powershell
node --test
```
