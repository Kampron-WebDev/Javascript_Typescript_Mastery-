# Exercise 02: Feature Detector

**Goal:** detect whether the engine you're running on supports a feature, the professional alternative to *assuming*. And feel the difference between **syntax** and **API** features.

## Your task

### `supportsSyntax(snippet)`

Returns `true` if the engine can **parse** `snippet` as the body of a function, `false` if it throws a `SyntaxError`. It must **not run** the code. (Same trick as Module 001: `new Function(snippet)`.)

```js
supportsSyntax('return a ?? b')           // → true   (ES2020 syntax, fine in Node 24)
supportsSyntax('class A { #x = 1 }')      // → true
supportsSyntax('return a ?!? b')          // → false
```

### `hasAPI(path)`

Returns `true` if the dotted `path`, starting from `globalThis`, leads to a **function**.

```js
hasAPI('Object.groupBy')                 // → true
hasAPI('Array.prototype.toSorted')       // → true
hasAPI('Array.prototype.flatten')        // → false   (never shipped!)
hasAPI('Nope.nothing.here')              // → false   (must not crash)
```

## Check your work

```powershell
node --test
```

<details><summary>Hint for hasAPI</summary>

Split on `.` and walk step by step: `let value = globalThis;` then `value = value?.[part]` for each part. At the end, check `typeof value === 'function'`.

</details>

**Think (MY-NOTES.md):** why can you check an API *inside* the same file that uses it, but not a syntax feature? (What happens to the whole file on an engine that can't parse `??`?)
