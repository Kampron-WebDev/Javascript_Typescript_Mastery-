# Debugging 01: Three Bugs (use the debugger!)

`summarizeScores(scores)` summarises exam scores (pass mark: **50 or more**):

```js
summarizeScores([72, 50, 91, 38])
// → { count: 4, average: 62.8, highest: 91, passed: 3 }

summarizeScores([])
// → { count: 0, average: 0, highest: null, passed: 0 }
```

`average` is rounded to one decimal place.

There are **3 bugs**.

## The rules for this one

You must **not** fix anything until you have written, in MY-NOTES.md, for each bug:

```text
Bug #:
  Observation: (which test fails, expected vs actual)
  Hypothesis:  "I think … because …"
  Experiment:  (breakpoint / log you used, and what you saw)
  Fix:
```

## How to use the debugger on a test

1. Open `main.js` and set a breakpoint inside the loop.
2. Open `main.test.js` and press **F5 → "Debug this exercise's tests"**.
3. Step with F10 and watch `i`, `scores[i]`, `total`, `highest` and `passed`.

Or add `debugger;` on a line and run the debug configuration.
