# Exercise 02: Measure

**Goal:** build a tiny timing tool that **returns** its measurement, so other code (and tests) can use it. `console.time` only prints.

## Your task

Complete `measure(fn, ...args)`:

- Call `fn` with the given arguments.
- Return `{ result, ms }`: what `fn` returned, and how many **milliseconds** it took (a number ≥ 0, decimals allowed).
- If `fn` throws, let the error **propagate** (don't catch it).

```js
measure(Math.max, 3, 9)   // → { result: 9, ms: 0.004… }
measure(() => 'hi')       // → { result: 'hi', ms: 0.001… }
```

Use **`performance.now()`**, not `Date.now()`. It has sub-millisecond precision and never jumps when the computer's clock is adjusted.

## Check your work

```powershell
node --test
```

<details><summary>Hint</summary>

```js
const start = performance.now();
const result = fn(...args);
const ms = performance.now() - start;
```

`...args` in the parameter list *collects* the extra arguments into an array; `...args` in the call *spreads* them back out.

</details>
