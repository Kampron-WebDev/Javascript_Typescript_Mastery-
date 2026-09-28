# Exercise 02: Cause Every Error

**Goal:** know *exactly* what makes the engine throw each kind of error, by causing each one on purpose.

## Your task

Each function in `main.js` must make **JavaScript itself** throw the named error.

🚫 **Not allowed:** writing `throw` anywhere. The engine must throw the error, not you. (A test checks this.)

| Function | Must cause | Idea |
|---|---|---|
| `causeReferenceError()` | `ReferenceError` | use a name that doesn't exist |
| `causeTypeError()` | `TypeError` | ask a value to do something it can't |
| `causeRangeError()` | `RangeError` | a number out of allowed range |
| `causeRuntimeSyntaxError()` | `SyntaxError` | at **runtime** (the file itself must still parse!) |

## Check your work

```powershell
node --test
```

⭐ **Bonus (MY-NOTES.md):** find a *second, different* way to cause each error.

<details><summary>Hints</summary>

- ReferenceError: `return notDefinedAnywhere;`
- TypeError: `undefined.x`, `(5)()`, or change a `const`
- RangeError: `new Array(-1)` or `(1).toFixed(101)`
- SyntaxError at runtime: `JSON.parse` some broken text

</details>
