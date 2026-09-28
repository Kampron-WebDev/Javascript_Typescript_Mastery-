# Exercise 01: When Does It Fail?

**Goal:** separate **parse-time** failures from **run-time** failures, using the engine itself.

## Step 1: Predict (MY-NOTES.md)

For each snippet (a function body), predict `parse`, `runtime` or `ok`:

```text
return 1 + 1
let x = ;
null.length
return undefinedVariable + 1
JSON.parse("{")
if (true) {
return [1, 2, 3].map(n => n * 2)
```

## Step 2: Build it

Complete `whenDoesItFail(code)`:

1. Try to **create** a function from the code: `new Function(code)`. This only *parses* it.
   A `SyntaxError` here → return `'parse'`.
2. Then **call** the function you created. Any error here → return `'runtime'`.
3. No errors → return `'ok'`.

```js
whenDoesItFail('return 1 + 1')     // → 'ok'
whenDoesItFail('let x = ;')        // → 'parse'
whenDoesItFail('null.length')      // → 'runtime'
whenDoesItFail('JSON.parse("{")')  // → 'runtime'   (a SyntaxError… thrown while RUNNING!)
```

⚠️ Notice the last one: you **can't** decide by the error's name. You must decide by *when* it was thrown.

## Check your work

```powershell
node --test
```

<details><summary>Hint</summary>

Use two separate `try`/`catch` blocks: one around `new Function(code)`, one around calling the result.

</details>
