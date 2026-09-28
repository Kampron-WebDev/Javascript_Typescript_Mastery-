# Exercise 02: Stack Trace Reader

**Goal:** read stack traces precisely, by writing a program that does it for you. (Error-monitoring tools like Sentry do exactly this.)

## Your task

Complete `topFrame(stack)`. It receives an error's full `stack` text and returns information about the **top frame** (the first line that starts with `at`, after trimming spaces):

```js
{ fn: 'customerLabel', file: 'C:\\app\\invoice.js', line: 6, column: 25 }
```

It must handle both frame formats:

```text
    at customerLabel (C:\app\invoice.js:6:25)          ← named function: "at NAME (LOCATION)"
    at C:\app\main.js:14:1                              ← anonymous code: "at LOCATION"
```

- For anonymous frames, `fn` is `'<anonymous>'`.
- `line` and `column` are **numbers**.
- Locations can be Windows paths (`C:\…`), Linux paths (`/home/…`) or URLs (`file:///C:/…`). **All** of them may contain `:` characters, so you can't just split on `:`!
- No `at` line at all → return `null`.

## Check your work

```powershell
node --test
```

<details><summary>Hint 1: find the line</summary>

`stack.split('\n')` gives lines. Find the first one where `line.trim().startsWith('at ')`.

</details>

<details><summary>Hint 2: the location</summary>

If the frame ends with `)`, the location is between the **last** `(` and that `)`, and the function name is between `at ` and ` (`.
Otherwise, the location is everything after `at `.

</details>

<details><summary>Hint 3: the colons</summary>

The **last** two colons separate line and column. `location.lastIndexOf(':')` finds the last one; do it twice.

</details>
