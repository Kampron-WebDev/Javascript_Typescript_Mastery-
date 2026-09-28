# Exercise 01: Edition Namer

**Goal:** know the ECMAScript editions (and the strange gap in them) well enough to compute their names.

## Your task

### `editionName(n)`

| Input | Output |
|---|---|
| 1, 2, 3 | `'ES1 (1997)'`, `'ES2 (1998)'`, `'ES3 (1999)'` |
| 4 | throw an `Error` whose message contains `abandoned` |
| 5 | `'ES5 (2009)'` |
| 6 and up | `'ES<year> (ES<n>)'`, where year = 2009 + n. So 6 → `'ES2015 (ES6)'`, 16 → `'ES2025 (ES16)'` |
| anything that isn't a whole number ≥ 1 | throw a `RangeError` |

### `editionFromYear(year)`

The reverse: which edition was published in that year? `1997` → `1`, `2009` → `5`, `2015` → `6`, `2025` → `16`.
Years with **no** edition (e.g. `2003`, or anything before 1997) → `null`.

## Check your work

```powershell
node --test
```

<details><summary>Hint</summary>

Handle the early editions with a small lookup table, and use the formula for everything from 6 on.
Write `editionFromYear` using the *same* table, reversed, so the facts live in only one place.

</details>
