# Exercise 01: Compare Modes

**Goal:** build a tool that runs the same code in **sloppy** and **strict** mode, so you can see every difference for yourself.

## Your task

Complete `compareModes(code)`. It returns `{ sloppy, strict }`, where each value is:

- `'ok'` if the code parsed and ran without an error, or
- the **name** of the error it threw (`'SyntaxError'`, `'TypeError'`, `'ReferenceError'`, `'Error'`…), whether it was thrown while parsing *or* while running.

How:

- Sloppy: `new Function(code)` creates a function. **Functions made by `new Function` are sloppy** even inside a module. Then call it.
- Strict: the same, but put the directive first: `new Function('"use strict";\n' + code)`.

```js
compareModes('return 1 + 1')                                    // → { sloppy: 'ok', strict: 'ok' }
compareModes('leak1 = 5; delete globalThis.leak1;')             // → { sloppy: 'ok', strict: 'ReferenceError' }
compareModes('var o = Object.freeze({ a: 1 }); o.a = 2;')       // → { sloppy: 'ok', strict: 'TypeError' }
compareModes('with (Math) { max(1, 2); }')                      // → { sloppy: 'ok', strict: 'SyntaxError' }
```

Why the `delete` in the second example? In sloppy mode the assignment really **creates a global variable**, which would still be there when the strict run happens, and would change its result. Side effects leaking between runs is a classic testing trap.

**Predict first:** before running the tests, write in MY-NOTES.md your prediction for every snippet in `main.test.js`.

## Check your work

```powershell
node --test
```

<details><summary>Hint</summary>

Write a small helper `outcome(body)` that wraps both steps (create + call) in one `try`, and returns `'ok'` or `err.name`. Then call it twice.

</details>
